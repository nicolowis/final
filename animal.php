<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>GIS Mapping</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <!-- Favicons -->
    <link href="images/clinic.png" rel="icon">
    <link href="images/clinic.png" rel="apple-touch-icon">
    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">
    <!-- Vendor CSS Files -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="vendor/simple-datatables/style.css" rel="stylesheet">
    <!-- FullCalendar CSS -->
    <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css" rel="stylesheet" />

    <!-- FullCalendar JS -->
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js"></script>
    <!-- Template Main CSS File -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <main id="main" class="main">
        <div class="container-fluid">
            <h1 class="mt-4">Animal Management</h1>

            <!-- Animal Management Form -->
            <form id="animal-management-form" enctype="multipart/form-data">
                <!-- Form Fields Here... -->
            </form>

            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Animals List</h4>
                    <div class="card">
                        <div class="card-body">
                            <!-- Search and Filter in a row with margin-top -->
                            <div class="row mb-3 mt-3">
                                <div class="col-md-8">
                                    <input type="text" id="search-input" class="form-control"
                                        placeholder="Search by Animal ID or Species" />
                                </div>
                                <div class="col-md-4">
                                    <select id="species-filter" class="form-select">
                                        <option value="">All Species</option>
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>

                            <div class="table-responsive" style="max-height: 360px; overflow-y: auto;">
                                <!-- Added style for max-height and overflow -->
                                <table class="table table-hover table-striped" id="animals-table">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Animal ID</th>
                                            <th>Species</th>
                                            <th>Breed</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Registered</th>
                                            <th>Vaccinated</th>
                                        </tr>
                                    </thead>
                                    <tbody id="animals-tbody">
                                        <?php
                                        // Database connection
                                        include 'backend/dbconnect.php'; // Include your database connection file
                                        
                                        // Fetch data from animals table
                                        $query = "SELECT a.animal_id, a.species, a.breed, a.age, a.gender, a.owner_name, a.owner_contact, 
            l.residence, b.barangay_name, a.register, a.vaccinated 
          FROM animals a 
          JOIN locations l ON a.location_id = l.location_id 
          JOIN barangay b ON l.barangay_id = b.barangay_id";
                                        $result = mysqli_query($conn, $query);

                                        // Initialize an array to store species for filtering
                                        $speciesList = [];

                                        // Check if the query was successful
                                        if ($result && mysqli_num_rows($result) > 0) {
                                            // Loop through the result set
                                            while ($row = mysqli_fetch_assoc($result)) {
                                                // Populate species for filtering
                                                if (!in_array($row['species'], $speciesList)) {
                                                    $speciesList[] = $row['species'];
                                                    echo "<script>
                    let speciesOption = document.createElement('option'); 
                    speciesOption.value = '" . htmlspecialchars($row['species']) . "'; 
                    speciesOption.textContent = '" . htmlspecialchars($row['species']) . "'; 
                    document.getElementById('species-filter').appendChild(speciesOption);
                  </script>";
                                                }

                                                echo "<tr class='animal-row' data-owner-name='" . htmlspecialchars($row['owner_name']) . "' 
              data-owner-contact='" . htmlspecialchars($row['owner_contact']) . "' 
              data-residence='" . htmlspecialchars($row['residence']) . "' 
              data-barangay='" . htmlspecialchars($row['barangay_name']) . "' 
              data-registered='" . htmlspecialchars($row['register']) . "' 
              data-vaccinated='" . htmlspecialchars($row['vaccinated']) . "'>";
                                                echo "<td>" . htmlspecialchars($row['animal_id']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['species']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['breed']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['age']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['gender']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['register']) . "</td>";
                                                echo "<td>" . htmlspecialchars($row['vaccinated']) . "</td>";
                                                echo "</tr>";
                                            }
                                        } else {
                                            echo "<tr><td colspan='7'>No records found.</td></tr>";
                                        }
                                        ?>

                                    </tbody>
                                </table>
                            </div> <!-- End of responsive wrapper -->


                        </div>

                    </div>

                    <!-- Add Animal Card -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="card-title">Add Animal</h5>
                        </div>
                        <div class="card-body">
                            <form id="add-animal-form">
                                <div class="mb-3">
                                    <label for="animal-id" class="form-label">Animal ID</label>
                                    <input type="text" class="form-control" id="animal-id" required>
                                </div>
                                <div class="mb-3">
                                    <label for="species" class="form-label">Species</label>
                                    <input type="text" class="form-control" id="species" required>
                                </div>
                                <div class="mb-3">
                                    <label for="breed" class="form-label">Breed</label>
                                    <input type="text" class="form-control" id="breed" required>
                                </div>
                                <div class="mb-3">
                                    <label for="age" class="form-label">Age</label>
                                    <input type="number" class="form-control" id="age" required>
                                </div>
                                <div class="mb-3">
                                    <label for="gender" class="form-label">Gender</label>
                                    <select class="form-select" id="gender" required>
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Animal</button>
                            </form>
                        </div>
                    </div> <!-- End of Add Animal Card -->
                </div>



                <div class="col-md-6">
                    <h4>Owner Information</h4>
                    <div class="card" id="owner-info-card" style="height: 210px; overflow-y: auto;">
                        <div class="card-body">
                            <h5 class="card-title" id="owner-name">Owner Name: N/A</h5>
                            <p class="card-text" id="owner-contact">Contact: N/A</p>
                            <p class="card-text" id="owner-residence">Residence: N/A</p>
                            <p class="card-text" id="owner-barangay">Barangay: N/A</p>
                        </div>

                    </div>

                    <!-- Filter Options Card -->
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title">Filter Options</h5>
                            <div class="row mb-3">
                                <!-- Years Filter -->
                                <div class="col-md-3">
                                    <label class="form-label" for="year-filter">Years</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                            id="yearDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Years
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="yearDropdown">
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="2021" id="year-2021"><label class="form-check-label"
                                                        for="year-2021">2021</label></div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="2022" id="year-2022"><label class="form-check-label"
                                                        for="year-2022">2022</label></div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="2023" id="year-2023"><label class="form-check-label"
                                                        for="year-2023">2023</label></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Months Filter -->
                                <div class="col-md-3">
                                    <label class="form-label" for="month-filter">Months</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                            id="monthDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Months
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="monthDropdown">
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="01" id="month-01"><label class="form-check-label"
                                                        for="month-01">January</label></div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="02" id="month-02"><label class="form-check-label"
                                                        for="month-02">February</label></div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="03" id="month-03"><label class="form-check-label"
                                                        for="month-03">March</label></div>
                                            </li>
                                            <!-- Add more months as needed -->
                                        </ul>
                                    </div>
                                </div>

                                <!-- Barangays Filter -->
                                <div class="col-md-3">
                                    <label class="form-label" for="barangay-filter">Barangays</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                            id="barangayDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Barangays
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="barangayDropdown">
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="Barangay 1" id="barangay-1"><label
                                                        class="form-check-label" for="barangay-1">Barangay 1</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="Barangay 2" id="barangay-2"><label
                                                        class="form-check-label" for="barangay-2">Barangay 2</label>
                                                </div>
                                            </li>
                                            <!-- Add more barangays dynamically as needed -->
                                        </ul>
                                    </div>
                                </div>

                                <!-- Districts Filter -->
                                <div class="col-md-3">
                                    <label class="form-label" for="district-filter">Districts</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                            id="districtDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Districts
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="districtDropdown">
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="District 1" id="district-1"><label
                                                        class="form-check-label" for="district-1">District 1</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        value="District 2" id="district-2"><label
                                                        class="form-check-label" for="district-2">District 2</label>
                                                </div>
                                            </li>
                                            <!-- Add more districts dynamically as needed -->
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex gap-2 flex-wrap">
                                <button type="button" class="btn btn-primary" id="filter-registered">Registered</button>
                                <button type="button" class="btn btn-dark"
                                    id="filter-unregistered">Unregistered</button>
                                <button type="button" class="btn btn-info" id="filter-vaccinated">Vaccinated</button>
                                <button type="button" class="btn btn-warning"
                                    id="filter-unvaccinated">Unvaccinated</button>
                                <button type="button" class="btn btn-danger" id="clear-filters">Clear Filters</button>
                            </div>
                        </div>
                    </div>

                    <!-- Picker Map Card -->
                    <div class="card mt-3">
                        <div class="card-header">
                            <h5 class="card-title">Picker Map</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="location-search"
                                    placeholder="Search for location" />
                            </div>
                            <button class="btn btn-primary" id="search-location">Search</button>

                            <!-- Map container -->
                            <div id="picker-map" class="map-container"
                                style="height: 500px; width: 100%; margin-top: 15px; position: relative; z-index: 100; padding: 20px; border-radius: 15px; overflow: hidden; background: #f0f0f0;">
                            </div>
                        </div>
                    </div> <!-- End of Picker Map Card -->

                </div>


            </div>
        </div>
        </div>



        <!-- Add JavaScript to handle row clicks, search, and filtering -->
        <script>
            // Initialize and load the Google Map
            function initMap() {
                // Create a map centered at a default location
                const defaultLocation = {
                    lat: 14.5995,
                    lng: 120.9842
                }; // Center of the Philippines
                const map = new google.maps.Map(document.getElementById("picker-map"), {
                    zoom: 8,
                    center: defaultLocation,
                });

                // Create a marker at the default location
                const marker = new google.maps.Marker({
                    position: defaultLocation,
                    map: map,
                    draggable: true, // Allow the user to drag the marker
                });

                // Add event listener to the search button
                document.getElementById("search-location").addEventListener("click", () => {
                    const locationInput = document.getElementById("location-search").value;

                    // Use Google Geocoding to get the coordinates of the location
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        address: locationInput
                    }, (results, status) => {
                        if (status === "OK" && results[0]) {
                            const location = results[0].geometry.location;

                            // Set the map center to the new location
                            map.setCenter(location);

                            // Move the marker to the new location
                            marker.setPosition(location);
                        } else {
                            alert("Location not found. Please try a different address.");
                        }
                    });
                });
            }

            // Load the Google Maps API asynchronously
            function loadScript() {
                const script = document.createElement("script");
                script.src =
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6CXdMNsyqILTxlhy5uTKsVt3xvCqptXk&callback=initMap"; // Replace YOUR_API_KEY with your actual API key
                script.async = true;
                document.head.appendChild(script);
            }

            // Call the loadScript function to load the Google Maps API
            loadScript();

            // Get all animal rows and table body
            const animalRows = document.querySelectorAll('.animal-row');
            const animalsTbody = document.getElementById('animals-tbody');

            animalRows.forEach(row => {
                row.addEventListener('click', () => {
                    // Get data attributes
                    const ownerName = row.getAttribute('data-owner-name');
                    const ownerContact = row.getAttribute('data-owner-contact');
                    const residence = row.getAttribute('data-residence');
                    const barangay = row.getAttribute('data-barangay');
                    const registered = row.getAttribute('data-registered');
                    const vaccinated = row.getAttribute('data-vaccinated');

                    // Populate the owner info card
                    document.getElementById('owner-name').textContent =
                        `Owner Name: ${row.getAttribute('data-owner-name')}`;
                    document.getElementById('owner-contact').textContent =
                        `Contact: ${row.getAttribute('data-owner-contact')}`;
                    document.getElementById('owner-residence').textContent =
                        `Residence: ${row.getAttribute('data-residence')}`;
                    document.getElementById('owner-barangay').textContent =
                        `Barangay: ${row.getAttribute('data-barangay')}`;
                });
            });

            // Search functionality
            document.getElementById('search-input').addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();
                animalRows.forEach(row => {
                    const animalId = row.cells[0].innerText.toLowerCase();
                    const species = row.cells[1].innerText.toLowerCase();
                    if (animalId.includes(searchTerm) || species.includes(searchTerm)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });

            // Filter by species
            document.getElementById('species-filter').addEventListener('change', function () {
                const selectedSpecies = this.value;
                animalRows.forEach(row => {
                    const species = row.cells[1].innerText;
                    if (selectedSpecies === '' || species === selectedSpecies) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });

            document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const dropdown = checkbox.closest('.dropdown');
                    const dropdownButton = dropdown.querySelector('.dropdown-toggle');
                    dropdownButton.textContent =
                        'Selected'; // Change button text or handle it as per your need
                });
            });
        </script>


        <!-- Graphs and Reports Section -->
        <div class="row">
            <div class="col-md-12">
                <h4>Graphs and Reports</h4>
                <div id="charts-container">
                    <!-- Place your chart or report generation code here -->
                    <canvas id="populationTrendChart"></canvas>
                    <canvas id="diseaseDistributionChart"></canvas>
                    <canvas id="recoveryRatesChart"></canvas>
                </div>
                <button class="btn btn-success">Export Reports</button>
            </div>
        </div>
        </div>
    </main>

    <?php include 'includes/footer.php'; ?>

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/echarts/echarts.min.js"></script>
    <script src="vendor/quill/quill.js"></script>
    <script src="vendor/simple-datatables/simple-datatables.js"></script>
    <script src="vendor/tinymce/tinymce.min.js"></script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6CXdMNsyqILTxlhy5uTKsVt3xvCqptXk&libraries=visualization&callback=populationMap"
        async defer></script>
    <script src="js/main.js"></script>
    <script src="js/animalpopulation.js"></script>
    <script src="js/diseasemap.js"></script>
    <script src="js/animaltable.js"></script>
    <script>
        // Placeholder for chart generation
        const ctx1 = document.getElementById('populationTrendChart').getContext('2d');
        const ctx2 = document.getElementById('diseaseDistributionChart').getContext('2d');
        const ctx3 = document.getElementById('recoveryRatesChart').getContext('2d');
        // Initialize your charts here
    </script>

</body>

</html>