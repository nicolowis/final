<?php
// Database connection
include 'dbconnect.php';

// Check if the 'status' parameter exists in the GET request
if (isset($_GET['status']) && !empty(trim($_GET['status']))) {
    // Retrieve the status parameter and ensure it is in lowercase for consistent comparison
    $status = strtolower(trim($_GET['status']));  // Using trim to remove extra spaces

    // Initialize the disease filter and parameters for binding
    $diseaseFilter = '';
    $params = [$status]; // Start with the status parameter

    // Check if the 'disease' parameter exists in the GET request
    if (isset($_GET['disease']) && !empty(trim($_GET['disease']))) {
        $disease = strtolower(trim($_GET['disease'])); // Get the disease parameter

        // Add the disease condition to the query
        $diseaseFilter = " AND LOWER(dc.disease_name) = ?";
        $params[] = $disease; // Add the disease parameter to the array
    }

    // Base query to get disease data based on status (case-insensitive)
    $query = "SELECT 
                  dc.disease_name, 
                  loc.latitude, 
                  loc.longitude, 
                  br.barangay_name,
                  COUNT(*) AS case_count,
                  SUM(CASE 
                        WHEN dc.progression = 'mild' THEN 1 
                        WHEN dc.progression = 'moderate' THEN 2 
                        WHEN dc.progression = 'severe' THEN 3 
                        ELSE 0 
                      END) AS severity_weight
              FROM disease_cases dc
              JOIN locations loc ON dc.location_id = loc.location_id
              JOIN barangay br ON loc.barangay_id = br.barangay_id
              WHERE LOWER(dc.status) = ? $diseaseFilter
              GROUP BY dc.disease_name, loc.latitude, loc.longitude, br.barangay_name";

    if ($stmt = $conn->prepare($query)) {
        // Bind parameters
        $types = str_repeat('s', count($params)); // Generate types string based on number of parameters
        $stmt->bind_param($types, ...$params); // Bind parameters using unpacking

        $stmt->execute();
        $result = $stmt->get_result();

        $disease_data = array();
        while ($row = $result->fetch_assoc()) {
            // Calculate intensity based on case count and severity weight
            $intensity = $row['case_count'] + $row['severity_weight'];
            $row['intensity'] = $intensity; // Add the intensity to the row for later use
            $disease_data[] = $row;
        }

        // Return data as JSON
        echo json_encode($disease_data);

        $stmt->close();
    } else {
        echo json_encode(array("error" => "Failed to prepare the statement."));
    }
} else {
    // If 'status' parameter is missing or empty, return an error
    echo json_encode(array("error" => "Missing or empty 'status' parameter."));
}

// Close the database connection
$conn->close();
?>