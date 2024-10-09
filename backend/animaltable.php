<?php
include 'dbconnect.php'; // Include your database connection

// Handle filtering and displaying animals
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $speciesFilter = '';
    $searchQuery = '';
    $limit = isset($_GET['rows']) ? intval($_GET['rows']) : 10; // Default to 10 rows if no selection

    // Base SQL query
    $sql = "SELECT animals.animal_id, animals.species, animals.breed, animals.age, animals.gender, 
            animals.vaccinated, animals.register 
            FROM animals 
            JOIN locations ON animals.location_id = locations.location_id";

    // Filter by species if provided
    if (isset($_GET['species']) && !empty($_GET['species'])) {
        $speciesFilter = $conn->real_escape_string($_GET['species']);
        $sql .= " WHERE animals.species = '$speciesFilter'";
    }

    // Search by Animal ID or Owner Name
    if (isset($_GET['search']) && !empty($_GET['search'])) {
        $searchQuery = $conn->real_escape_string($_GET['search']);
        if (!empty($speciesFilter)) {
            // Append to existing WHERE clause
            $sql .= " AND (animals.animal_id LIKE '%$searchQuery%' OR animals.owner_name LIKE '%$searchQuery%')";
        } else {
            // Start the WHERE clause
            $sql .= " WHERE (animals.animal_id LIKE '%$searchQuery%' OR animals.owner_name LIKE '%$searchQuery%')";
        }
    }

    // Limit the number of rows
    $sql .= " LIMIT $limit";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output the table rows without Edit and Delete buttons
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['animal_id']) . "</td>";
            echo "<td>" . htmlspecialchars($row['species']) . "</td>";
            echo "<td>" . htmlspecialchars($row['breed']) . "</td>";
            echo "<td>" . (int) $row['age'] . "</td>";
            echo "<td>" . htmlspecialchars($row['gender']) . "</td>";
            echo "<td>" . htmlspecialchars($row['vaccinated']) . "</td>"; // Include vaccinated status
            echo "<td>" . htmlspecialchars($row['register']) . "</td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='7'>No records found</td></tr>"; // Adjusted colspan
    }
}
?>