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

    <!-- Template Main CSS File -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <a href="index.php" class="logo d-flex align-items-center">
                <img src="images/gis logo.png" alt="">
                <span class="d-none d-lg-block">GIS Mapping</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div><!-- End Logo -->

        <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword">
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div><!-- End Search Bar -->

        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link nav-icon search-bar-toggle " href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li><!-- End Search Icon-->

                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="images/vet.jpg" alt="Profile" class="rounded-circle">
                        <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                    </a><!-- End Profile Iamge Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6>Kevin Anderson</h6>
                            <span>Web Designer</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-box-arrow-right"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>

                    </ul><!-- End Profile Dropdown Items -->
                </li><!-- End Profile Nav -->

            </ul>
        </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <a class="nav-link " href="index.html">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li><!-- End Dashboard Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="animal.php">
                            <i class="bi bi-circle"></i><span>Form Elements</span>
                        </a>
                    </li>
                    <li>
                        <a href="forms-layouts.html">
                            <i class="bi bi-circle"></i><span>Form Layouts</span>
                        </a>
                    </li>
                    <li>
                        <a href="forms-editors.html">
                            <i class="bi bi-circle"></i><span>Form Editors</span>
                        </a>
                    </li>
                    <li>
                        <a href="forms-validation.html">
                            <i class="bi bi-circle"></i><span>Form Validation</span>
                        </a>
                    </li>
                </ul>
            </li><!-- End Forms Nav -->

    </aside><!-- End Sidebar-->

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">

                <!-- Left side columns -->
                <div class="col-lg-8">
                    <div class="row">

                        <!-- Total Animals Card -->
                        <div class="col-xxl-4 col-md-6">
                            <div class="card info-card animals-card">

                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                            class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Total Animals <span>| Today</span></h5>

                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                            style="font-size: 3rem;">🐾</div> <!-- UTF-8 paw character -->
                                        <div class="ps-3">
                                            <?php
                                            include 'backend/dbconnect.php'; // Include your database connection
                                            $animalCountQuery = "SELECT COUNT(*) AS total FROM animals"; // Query to get total animal count
                                            $result = $conn->query($animalCountQuery);
                                            $totalAnimals = $result->fetch_assoc()['total']; // Fetch total count
                                            ?>
                                            <h6><?php echo $totalAnimals; ?> Animals</h6>
                                            <!-- Display total animal count -->
                                            <span class="text-success small pt-1 fw-bold">0%</span> <span
                                                class="text-muted small pt-2 ps-1">change</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><!-- End Total Animals Card -->

                        <!-- Total Diseases Recovered Card -->
                        <div class="col-xxl-4 col-md-6">
                            <div class="card info-card animals-card">
                                <!-- Changed class to match Total Animals Card -->

                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                            class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Recovered Animals <span>| This Month</span></h5>

                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                            style="font-size: 3rem;">🩺</div>
                                        <!-- Increased font size for the icon -->
                                        <div class="ps-3">
                                            <?php
                                            // Adjust query to count total diseases with a 'recovered' status
                                            include 'backend/dbconnect.php'; // Include your database connection
                                            $recoveredCountQuery = "SELECT COUNT(*) AS total FROM disease_cases WHERE status = 'recovered'";
                                            $result = $conn->query($recoveredCountQuery);
                                            $totalRecovered = $result->fetch_assoc()['total']; // Fetch total count
                                            ?>
                                            <h6><?php echo $totalRecovered; ?> Animals</h6>
                                            <span class="text-success small pt-1 fw-bold">0%</span> <span
                                                class="text-muted small pt-2 ps-1">change</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><!-- End Total Diseases Recovered Card -->

                        <!-- Total Outbreaks Occurred Card -->
                        <div class="col-xxl-4 col-md-6">
                            <div class="card info-card outbreaks-card">

                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                            class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">This Year</a></li>
                                    </ul>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Outbreaks Occurred <span>| This Year</span></h5>

                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                            style="font-size: 4rem; background-color: #ffeb3b; width: 4rem; height: 4rem;">
                                            &#x2623;
                                            <!-- UTF-8 biohazard emoji -->
                                        </div>
                                        <div class="ps-3">
                                            <?php
                                            $outbreakCountQuery = "SELECT COUNT(*) AS total FROM outbreaks";
                                            $result = $conn->query($outbreakCountQuery);
                                            $totalOutbreaks = $result->fetch_assoc()['total']; // Fetch total count
                                            ?>
                                            <h6><?php echo $totalOutbreaks; ?> Outbreaks</h6>
                                            <span class="text-danger small pt-1 fw-bold">0%</span> <span
                                                class="text-muted small pt-2 ps-1">change</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- End Total Outbreaks Occurred Card -->



                        <!-- Recent Sales -->
                        <div class="col-12">
                            <div class="card recent-sales overflow-auto">

                                <div class="card-body" style="max-height: 400px; overflow-y: auto;">
                                    <!-- Inline styles for scrolling -->
                                    <h5 class="card-title">Animal Monitoring <span>| Recently</span></h5>

                                    <!-- Filter Row -->
                                    <div class="row mb-3">
                                        <!-- Species Filter -->
                                        <div class="col-md-4">
                                            <label for="speciesFilter" class="form-label">Filter by Species</label>
                                            <select name="species" id="speciesFilter" class="form-select">
                                                <option value="">All Species</option>
                                                <?php
                                                include 'backend/dbconnect.php';
                                                $speciesQuery = "SELECT DISTINCT species FROM animals";
                                                $speciesResult = $conn->query($speciesQuery);
                                                if ($speciesResult->num_rows > 0) {
                                                    while ($speciesRow = $speciesResult->fetch_assoc()) {
                                                        echo "<option value='" . $speciesRow['species'] . "'>" . $speciesRow['species'] . "</option>";
                                                    }
                                                }
                                                ?>
                                            </select>
                                        </div>

                                        <!-- Rows Filter -->
                                        <div class="col-md-4">
                                            <label for="rowsFilter" class="form-label">Rows to Display</label>
                                            <select name="rows" id="rowsFilter" class="form-select">
                                                <option value="10">10 rows</option>
                                                <option value="20">20 rows</option>
                                                <option value="30">30 rows</option>
                                            </select>
                                        </div>

                                        <!-- Search Filter -->
                                        <div class="col-md-4">
                                            <label for="searchFilter" class="form-label">Search by ID or Owner
                                                Name</label>
                                            <input type="text" id="searchFilter" class="form-control"
                                                placeholder="Enter Animal ID or Owner Name">
                                        </div>
                                    </div><!-- End Filter Row -->

                                    <table class="table table-hover table-striped" id="animalTable">
                                        <thead>
                                            <tr>
                                                <th scope="col">Animal ID</th>
                                                <th scope="col">Species</th>
                                                <th scope="col">Breed</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Vaccinated</th> <!-- Added Vaccinated column -->
                                                <th scope="col">Registered</th>
                                            </tr>
                                        </thead>
                                        <tbody id="animalTableBody">
                                            <!-- Animal data will be loaded here by AJAX -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div><!-- End Recent Sales -->




                        <!-- Reports -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <P class="card-title">Animals Population</h5>

                                        <!-- Map and Sidebar Filters Section -->
                                    <div class="d-flex">
                                        <!-- Sidebar Filters (Left) -->
                                        <div class="d-flex flex-column me-3" style="max-width: 250px;">
                                            <!-- Year Filter -->
                                            <div class="mb-2" style="font-size: 14px;">
                                                <label for="yearDropdownButton" class="form-label">Filter by
                                                    Year:</label>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button" id="yearDropdownButton" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        Select Year
                                                    </button>
                                                    <div class="dropdown-menu p-3" aria-labelledby="yearDropdownButton"
                                                        style="max-height: 200px; overflow-y: auto;">
                                                        <ul id="yearList" style="list-style: none; padding-left: 0;">
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="2024" id="checkbox2024">
                                                                    <label class="form-check-label"
                                                                        for="checkbox2024">2024</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="2023" id="checkbox2023">
                                                                    <label class="form-check-label"
                                                                        for="checkbox2023">2023</label>
                                                                </div>
                                                            </li>
                                                            <!-- Add other years as needed -->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Month Filter -->
                                            <div class="mb-2" style="font-size: 14px;">
                                                <label for="monthDropdownButton" class="form-label">Filter by
                                                    Month:</label>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button" id="monthDropdownButton" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        Select Month
                                                    </button>
                                                    <div class="dropdown-menu p-3" aria-labelledby="monthDropdownButton"
                                                        style="max-height: 200px; overflow-y: auto;">
                                                        <ul id="monthList" style="list-style: none; padding-left: 0;">
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="January" id="checkboxJanuary">
                                                                    <label class="form-check-label"
                                                                        for="checkboxJanuary">January</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="February" id="checkboxFebruary">
                                                                    <label class="form-check-label"
                                                                        for="checkboxFebruary">February</label>
                                                                </div>
                                                            </li>
                                                            <!-- Add other months similarly -->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Registered and Stray Checkboxes -->
                                            <div class="mb-2" style="font-size: 14px;">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="registeredCheckbox">
                                                    <label class="form-check-label d-flex align-items-center"
                                                        for="registeredCheckbox">
                                                        <i class="fas fa-check-circle me-2"></i> Registered
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="strayCheckbox">
                                                    <label class="form-check-label d-flex align-items-center"
                                                        for="strayCheckbox">
                                                        <i class="fas fa-question-circle me-2"></i> Stray
                                                    </label>
                                                </div>
                                            </div>

                                            <!-- Species Filter -->
                                            <div class="mb-2" style="font-size: 14px;">
                                                <label for="speciesDropdownButton" class="form-label">List of
                                                    Species:</label>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button" id="speciesDropdownButton"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        data-value="all">
                                                        Select Species
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="speciesDropdownButton">
                                                        <li><a class="dropdown-item" href="#" data-value="all">🗂
                                                                All</a></li>
                                                        <li><a class="dropdown-item" href="#" data-value="dog">🐕
                                                                Dog</a></li>
                                                        <li><a class="dropdown-item" href="#" data-value="cat">🐈
                                                                Cat</a></li>
                                                        <li><a class="dropdown-item" href="#" data-value="cow">🐄
                                                                Cow</a></li>
                                                        <li><a class="dropdown-item" href="#" data-value="horse">🐎
                                                                Horse</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <!-- Barangay Filter -->
                                            <div class="mb-2" style="font-size: 14px;">
                                                <label for="barangayDropdownButton" class="form-label">List of
                                                    Barangays</label>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button" id="barangayDropdownButton"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        data-value="all">
                                                        Select Barangay
                                                    </button>
                                                    <div class="dropdown-menu p-3"
                                                        aria-labelledby="barangayDropdownButton"
                                                        style="max-height: 200px; overflow-y: auto;">
                                                        <div class="mb-2">
                                                            <input type="text" class="form-control form-control-sm"
                                                                id="barangaySearch" placeholder="Search Barangays...">
                                                        </div>
                                                        <ul id="barangayList"
                                                            style="list-style: none; padding-left: 0;">
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="all" id="selectAllBarangays">
                                                                    <label class="form-check-label"
                                                                        for="selectAllBarangays">Select All
                                                                        Barangays</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="Adya" id="checkboxAdya">
                                                                    <label class="form-check-label"
                                                                        for="checkboxAdya">Adya</label>
                                                                </div>
                                                            </li>
                                                            <!-- Continue for other barangays -->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-2" style="font-size: 14px;">
                                                <label class="form-label">Vaccinated:</label>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="vaccineStatus"
                                                        id="vaccineYes" value="yes" checked>
                                                    <label class="form-check-label" for="vaccineYes">💉 Yes</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="vaccineStatus"
                                                        id="vaccineNo" value="no">
                                                    <label class="form-check-label" for="vaccineNo">❌ No</label>
                                                </div>
                                            </div>

                                        </div>

                                        <!-- Map Section -->
                                        <div class="map-container" id="displayMap"
                                            style="height: 500px; width: 100%; position: relative; z-index: 100; padding: 20px; border-radius: 15px; overflow: hidden; background: #f0f0f0;">

                                            <!-- The actual map will be displayed here -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Reports -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title">Disease Mapping</p>
                                    <div class="filter">
                                        <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                                class="bi bi-three-dots"></i></a>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li class="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Today</a></li>
                                            <li><a class="dropdown-item" href="#">This Month</a></li>
                                            <li><a class="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>


                                    <!-- Map and Sidebar Filters Section -->
                                    <div class="d-flex">
                                        <!-- Sidebar Section with Filters (Left) -->
                                        <div class="d-flex flex-column me-3" style="max-width: 250px; font-size: 14px;">
                                            <!-- Barangay Filter -->
                                            <div class="mb-2">
                                                <label for="diseaseBarangayDropdownButton" class="form-label fs-6">List
                                                    of Barangays</label>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-secondary dropdown-toggle"
                                                        type="button" id="diseaseBarangayDropdownButton"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        Select Barangay
                                                    </button>
                                                    <div class="dropdown-menu p-2"
                                                        aria-labelledby="diseaseBarangayDropdownButton"
                                                        style="max-height: 150px; overflow-y: auto;">
                                                        <div class="mb-1">
                                                            <input type="text" class="form-control form-control-sm"
                                                                id="diseaseBarangaySearch" placeholder="Search...">
                                                        </div>
                                                        <ul id="diseaseBarangayList"
                                                            style="list-style: none; padding-left: 0;">
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="all" id="selectAllDiseaseBarangays">
                                                                    <label class="form-check-label"
                                                                        for="selectAllDiseaseBarangays">Select
                                                                        All</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="Adya" id="checkboxDiseaseAdya">
                                                                    <label class="form-check-label"
                                                                        for="checkboxDiseaseAdya">Adya</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        value="Anilao" id="checkboxDiseaseAnilao">
                                                                    <label class="form-check-label"
                                                                        for="checkboxDiseaseAnilao">Anilao</label>
                                                                </div>
                                                            </li>
                                                            <!-- Continue for other disease barangays -->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>




                                            <!-- Compact Radio Buttons for Status with Bootstrap Styling -->
                                            <div class="mb-3">
                                                <label class="form-label" style="font-size: 14px;">Status</label>
                                                <div class="btn-group btn-group-sm" role="group"
                                                    aria-label="Status Radio Buttons">
                                                    <input type="radio" class="btn-check" name="status" id="activeRadio"
                                                        value="active" checked>
                                                    <label class="btn btn-outline-primary"
                                                        for="activeRadio">Active</label>

                                                    <input type="radio" class="btn-check" name="status"
                                                        id="recoveredRadio" value="recovered">
                                                    <label class="btn btn-outline-success"
                                                        for="recoveredRadio">Recovered</label>
                                                </div>
                                            </div>


                                            <!-- Disease Filter Checkboxes -->
                                            <div class="mb-3">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="checkbox" id="rabiesCheckbox">
                                                    <label class="form-check-label d-flex align-items-center"
                                                        for="rabiesCheckbox">
                                                        <i class="fas fa-check-circle me-2"></i> Rabies
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="swineFluCheckbox">
                                                    <label class="form-check-label d-flex align-items-center"
                                                        for="swineFluCheckbox">
                                                        <i class="fas fa-question-circle me-2"></i> African Swine Flu
                                                    </label>

                                                </div>

                                            </div>
                                            <!-- Heatmap Legend Section -->
                                            <div class="mb-3">
                                                <h6 class="text-center">Heatmap Legend</h6>
                                                <div class="form-check mb-2">
                                                    <div class="form-check-input"
                                                        style="background-color: rgba(255, 0, 0, 0.6); width: 16px; height: 16px; border-radius: 3px; display: inline-block; margin-right: 8px;">
                                                    </div>
                                                    <label class="form-check-label d-flex align-items-center">
                                                        High Density
                                                    </label>
                                                </div>
                                                <div class="form-check mb-2">
                                                    <div class="form-check-input"
                                                        style="background-color: rgba(255, 165, 0, 0.6); width: 16px; height: 16px; border-radius: 3px; display: inline-block; margin-right: 8px;">
                                                    </div>
                                                    <label class="form-check-label d-flex align-items-center">
                                                        Medium Density
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <div class="form-check-input"
                                                        style="background-color: rgba(0, 255, 0, 0.6); width: 16px; height: 16px; border-radius: 3px; display: inline-block; margin-right: 8px;">
                                                    </div>
                                                    <label class="form-check-label d-flex align-items-center">
                                                        Low Density
                                                    </label>
                                                </div>
                                            </div>


                                        </div>

                                        <!-- Map Section (Right) -->
                                        <div class="map-container" id="mapDisease"
                                            style="height: 500px; width: 100%; position: relative; padding: 20px; border-radius: 15px; overflow: hidden; background: #f0f0f0;">
                                            <!-- The actual map will be displayed here -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div><!-- End Left side columns -->

                <!-- Right side columns -->
                <div class="col-lg-4">

                    <!-- Recent Activity -->
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Recent Activity <span>| Today</span></h5>

                            <div class="activity">

                                <div class="activity-item d-flex">
                                    <div class="activite-label">32 min</div>
                                    <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                    <div class="activity-content">

                                    </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                    <div class="activite-label">56 min</div>
                                    <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                    <div class="activity-content">
                                    </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                    <div class="activite-label">2 hrs</div>
                                    <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                    <div class="activity-content">
                                    </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                    <div class="activite-label">1 day</div>
                                    <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                    <div class="activity-content">

                                    </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                    <div class="activite-label">2 days</div>
                                    <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                    <div class="activity-content">
                                    </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                    <div class="activite-label">4 weeks</div>
                                    <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                    <div class="activity-content">
                                    </div>
                                </div><!-- End activity item-->

                            </div>

                        </div>
                    </div><!-- End Recent Activity -->

                    <!-- Budget Report -->
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>

                        <div class="card-body pb-0">
                            <h5 class="card-title">Budget Report <span>| This Month</span></h5>

                            <div id="budgetChart" style="min-height: 400px;" class="echart"></div>

                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                    var budgetChart = echarts.init(document.querySelector("#budgetChart"))
                                        .setOption({
                                            legend: {
                                                data: ['Allocated Budget', 'Actual Spending']
                                            },
                                            radar: {
                                                // shape: 'circle',
                                                indicator: [{
                                                    name: 'Sales',
                                                    max: 6500
                                                },
                                                {
                                                    name: 'Administration',
                                                    max: 16000
                                                },
                                                {
                                                    name: 'Information Technology',
                                                    max: 30000
                                                },
                                                {
                                                    name: 'Customer Support',
                                                    max: 38000
                                                },
                                                {
                                                    name: 'Development',
                                                    max: 52000
                                                },
                                                {
                                                    name: 'Marketing',
                                                    max: 25000
                                                }
                                                ]
                                            },
                                            series: [{
                                                name: 'Budget vs spending',
                                                type: 'radar',
                                                data: [{
                                                    value: [4200, 3000, 20000, 35000, 50000,
                                                        18000
                                                    ],
                                                    name: 'Allocated Budget'
                                                },
                                                {
                                                    value: [5000, 14000, 28000, 26000,
                                                        42000,
                                                        21000
                                                    ],
                                                    name: 'Actual Spending'
                                                }
                                                ]
                                            }]
                                        });
                                });
                            </script>

                        </div>
                    </div><!-- End Budget Report -->

                    <!-- Website Traffic Card -->
                    <div class="card">
                        <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                </li>
                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>

                        <div class="card-body pb-0">
                            <h5 class="card-title">Animal Species Distribution <span>| Today</span></h5>

                            <div id="speciesChart" style="min-height: 400px;" class="echart"></div>

                            <?php
                            // Database connection
                            $conn = new mysqli('localhost', 'root', '', 'map');

                            if ($conn->connect_error) {
                                die("Connection failed: " . $conn->connect_error);
                            }

                            // Query to get the species count
                            $sql = "SELECT species, COUNT(*) as count FROM animals GROUP BY species";
                            $result = $conn->query($sql);

                            // Prepare the data for the chart
                            $species_data = array();
                            while ($row = $result->fetch_assoc()) {
                                $species_data[] = array('value' => $row['count'], 'name' => $row['species']);
                            }

                            // Convert PHP array to JSON for JavaScript
                            $species_data_json = json_encode($species_data);

                            // Close the database connection
                            $conn->close();
                            ?>

                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                    // Use PHP-generated JSON data in JavaScript
                                    const speciesData = <?php echo $species_data_json; ?>;

                                    // Initialize ECharts and set options for the chart
                                    echarts.init(document.querySelector("#speciesChart")).setOption({
                                        tooltip: {
                                            trigger: 'item'
                                        },
                                        legend: {
                                            top: '5%',
                                            left: 'center'
                                        },
                                        series: [{
                                            name: 'Animal Species',
                                            type: 'pie',
                                            radius: ['40%', '70%'],
                                            avoidLabelOverlap: false,
                                            label: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                label: {
                                                    show: true,
                                                    fontSize: '18',
                                                    fontWeight: 'bold'
                                                }
                                            },
                                            labelLine: {
                                                show: false
                                            },
                                            data: speciesData // Use PHP-generated data for the chart
                                        }]
                                    });
                                });
                            </script>
                        </div>
                    </div><!-- End Website Traffic Card -->


                </div><!-- End Right side columns -->

            </div>
        </section>
    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
        <div class="copyright">
            &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
        </div>
        <div class="credits">

        </div>
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/echarts/echarts.min.js"></script>
    <script src="vendor/quill/quill.js"></script>
    <script src="vendor/simple-datatables/simple-datatables.js"></script>
    <script src="vendor/tinymce/tinymce.min.js"></script><!-- Template Main JS File -->
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6CXdMNsyqILTxlhy5uTKsVt3xvCqptXk&libraries=visualization&callback=populationMap"
        async defer></script>
    <script src="js/main.js"></script>
    <script src="js/animalpopulation.js"></script>
    <script src="js/diseasemap.js"></script>
    <script src="js/animaltable.js"></script>





</body>

</html>