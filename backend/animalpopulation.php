<?php

// Database connection
include('dbconnect.php');

// Set content type to JSON
header('Content-Type: application/json');

// Read the raw input
$rawInput = file_get_contents("php://input");
$inputData = json_decode($rawInput, true);

// Define allowed values for each filter
$allowed_species = ['dog', 'cat', 'cow', 'horse', 'all'];
$allowed_registered = ['yes', 'all'];
$allowed_stray = ['yes', 'all'];
$allowed_vaccinated = ['yes', 'no', 'all']; // Updated to include 'yes' and 'no' for vaccination status

// Capture and validate parameters from JSON request
$species = isset($inputData['species']) && in_array(strtolower(trim($inputData['species'])), $allowed_species) ? strtolower(trim($inputData['species'])) : 'all';
$registered = isset($inputData['registered']) && in_array(strtolower(trim($inputData['registered'])), $allowed_registered) ? strtolower(trim($inputData['registered'])) : 'all';
$stray = isset($inputData['stray']) && in_array(strtolower(trim($inputData['stray'])), $allowed_stray) ? strtolower(trim($inputData['stray'])) : 'all';
$vaccinated = isset($inputData['vaccinated']) && in_array(strtolower(trim($inputData['vaccinated'])), $allowed_vaccinated) ? strtolower(trim($inputData['vaccinated'])) : 'all';
$barangay = isset($inputData['barangay']) && is_array($inputData['barangay']) ? array_map('strtolower', array_map('trim', $inputData['barangay'])) : [];
$months = isset($inputData['months']) && is_array($inputData['months']) ? $inputData['months'] : [];
$years = isset($inputData['years']) && is_array($inputData['years']) ? $inputData['years'] : [];

// Start building the SQL query
$query = "SELECT DISTINCT animals.animal_id, animals.species, animals.breed, animals.age, animals.gender, 
          animals.owner_name, animals.owner_contact, animals.register, animals.vaccinated, 
          locations.latitude, locations.longitude, barangay.barangay_name, animals.created_at, animals.updated_at
          FROM animals 
          JOIN locations ON animals.location_id = locations.location_id 
          JOIN barangay ON locations.barangay_id = barangay.barangay_id"; // Join barangay table

// Initialize conditions array and parameters
$conditions = [];
$params = [];
$types = "";

// Apply species filter
if ($species !== 'all') {
    $conditions[] = "animals.species = ?";
    $params[] = $species;
    $types .= "s";
}

// Apply registration and stray filters
if ($registered === 'yes' && $stray === 'yes') {
    // Do nothing, show all animals if both are selected
} elseif ($registered === 'yes') {
    $conditions[] = "animals.register = 'yes'";
} elseif ($stray === 'yes') {
    $conditions[] = "animals.register = 'no'";
}

// Apply vaccine status filter using the `vaccinated` attribute in animals table
if ($vaccinated === 'yes' || $vaccinated === 'no') {
    $conditions[] = "animals.vaccinated = ?";
    $params[] = $vaccinated;
    $types .= "s";
}

// Apply barangay filter only if specific barangays are selected
if (!empty($barangay) && !in_array('all', $barangay)) {
    $placeholders = implode(',', array_fill(0, count($barangay), 'LOWER(?)')); // Adjust placeholders for LOWER
    $conditions[] = "LOWER(barangay.barangay_name) IN ($placeholders)"; // Use LOWER for case-insensitive match
    foreach ($barangay as $b) {
        $params[] = strtolower($b); // Convert each barangay to lowercase before binding
        $types .= "s";
    }
}

// Apply month filter
if (!empty($months)) {
    $monthConditions = [];
    foreach ($months as $month) {
        $monthConditions[] = "MONTH(animals.created_at) = ? OR MONTH(animals.updated_at) = ?";
        $params[] = date('n', strtotime($month)); // Convert month name to number
        $params[] = date('n', strtotime($month));
        $types .= "ii";
    }
    $conditions[] = "(" . implode(" OR ", $monthConditions) . ")";
}

// Apply year filter
if (!empty($years)) {
    $yearConditions = [];
    foreach ($years as $year) {
        $yearConditions[] = "YEAR(animals.created_at) = ? OR YEAR(animals.updated_at) = ?";
        $params[] = (int) $year;
        $params[] = (int) $year;
        $types .= "ii";
    }
    $conditions[] = "(" . implode(" OR ", $yearConditions) . ")";
}

// Combine conditions
if (count($conditions) > 0) {
    $query .= " WHERE " . implode(" AND ", $conditions);
}

// Group by animal to correctly count vaccinations
$query .= " GROUP BY animals.animal_id";

// For debugging - log the generated SQL query and parameters
error_log("SQL Query: " . $query);
error_log("Parameters: " . implode(", ", $params));

// Prepare and execute the SQL statement
$stmt = $conn->prepare($query);
if ($stmt) {
    // Bind parameters if any
    if (!empty($params)) {
        $stmt->bind_param($types, ...$params);
    }
    if (!$stmt->execute()) {
        error_log("SQL execution failed: " . $stmt->error);
        echo json_encode(["error" => "SQL execution failed"]);
        exit;
    }
    $result = $stmt->get_result();

    // Create an array to hold the results
    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = [
                'animal_id' => (int) $row['animal_id'],
                'species' => htmlspecialchars($row['species']),
                'register' => htmlspecialchars($row['register']),
                'vaccinated' => htmlspecialchars($row['vaccinated']), // Include vaccinated status
                'latitude' => isset($row['latitude']) ? (float) $row['latitude'] : null,
                'longitude' => isset($row['longitude']) ? (float) $row['longitude'] : null,
                'barangay_name' => htmlspecialchars($row['barangay_name']), // Include barangay name
                'created_at' => $row['created_at'],
                'updated_at' => $row['updated_at']
            ];
        }
    }

    // Return the data as JSON
    echo json_encode($data);

    $stmt->close();
} else {
    error_log("SQL Error: " . $conn->error);
    echo json_encode(["error" => "Failed to prepare the SQL statement."]);
}

$conn->close();

?>