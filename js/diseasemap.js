let diseaseMap;
let diseaseMarkers = [];
let selectedDiseaseBarangays = []; // Store selected barangays
let selectedDiseases = []; // Store selected diseases
let heatmap; // Heatmap layer
let heatmapData = []; // Data for the heatmap

function initializeDiseaseMap() {
    const cityCenter = new google.maps.LatLng(13.941875, 121.164429);

    diseaseMap = new google.maps.Map(document.getElementById('mapDisease'), {
        center: cityCenter,
        zoom: 13,
        maxZoom: 20,
        minZoom: 12,
        gestureHandling: 'greedy',
    });

    // Initialize the heatmap layer
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: diseaseMap,
    });

    // Load initial markers (active status by default)
    loadDiseaseMarkers('active');
}

// Function to load disease markers based on status and barangay
function loadDiseaseMarkers(status) {
    status = status.toLowerCase(); // Ensure status is lowercase
    clearDiseaseMarkers(); // Clear existing markers
    heatmapData = []; // Clear previous heatmap data

    // Fetch disease data based on the selected status
    fetch(`http://localhost/final/backend/get_disease.php?status=${status}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                console.warn('No data found for status:', status);
                return;
            }

            data.forEach(disease => {
                const lat = parseFloat(disease.latitude);
                const lng = parseFloat(disease.longitude);
                const intensity = disease.intensity; // Use the calculated intensity
                const locationId = disease.location_id; // Get location_id

                // Filter by selected barangays
                if (selectedDiseaseBarangays.length > 0 && !selectedDiseaseBarangays.includes(disease.barangay_name)) {
                    return; // Skip this marker if barangay is not selected
                }

                // Filter by selected diseases
                if (selectedDiseases.length > 0 && !selectedDiseases.includes(disease.disease_name)) {
                    return; // Skip this marker if disease is not selected
                }

                if (isNaN(lat) || isNaN(lng)) {
                    console.error(`Invalid coordinates for disease case: ${disease.disease_name}`);
                    return;
                }

                // Create a standard marker for each disease case
                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: diseaseMap,
                    title: `${disease.disease_name} - ${disease.barangay_name}`, // Tooltip on hover
                });

                // Store marker for later removal
                diseaseMarkers.push(marker);

                // Info window for the marker
                const infowindow = new google.maps.InfoWindow({
                    content: `<div><strong>Disease:</strong> ${disease.disease_name}<br>
                              <strong>Barangay:</strong> ${disease.barangay_name}<br>
                              <strong>Status:</strong> ${status}<br>
                              <strong>Location ID:</strong> ${locationId}</div>`, // Added location ID
                });

                marker.addListener("click", () => {
                    infowindow.open(diseaseMap, marker);
                });

                // Add data to heatmap
                heatmapData.push({
                    location: new google.maps.LatLng(lat, lng),
                    weight: intensity, // Use the calculated intensity as weight
                });
            });

            // Update heatmap data
            heatmap.setData(heatmapData);
        })
        .catch(error => console.error('Error fetching disease data:', error));
}

// Function to clear all disease markers
function clearDiseaseMarkers() {
    diseaseMarkers.forEach(marker => marker.setMap(null));
    diseaseMarkers = [];
}

// Event listener for disease checkbox changes
document.querySelectorAll('.form-check-input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.id === 'rabiesCheckbox') {
            if (e.target.checked) {
                selectedDiseases.push('Rabies');
            } else {
                selectedDiseases = selectedDiseases.filter(disease => disease !== 'Rabies');
            }
        } else if (e.target.id === 'swineFluCheckbox') {
            if (e.target.checked) {
                selectedDiseases.push('African Swine Flu');
            } else {
                selectedDiseases = selectedDiseases.filter(disease => disease !== 'African Swine Flu');
            }
        }

        // Reload markers based on selected barangays, diseases, and status
        const selectedStatus = document.querySelector('input[name="status"]:checked').value;
        loadDiseaseMarkers(selectedStatus);
    });
});

// Event listener for status changes
document.getElementById('activeRadio').addEventListener('change', () => loadDiseaseMarkers('active'));
document.getElementById('recoveredRadio').addEventListener('change', () => loadDiseaseMarkers('recovered'));

// Search functionality for barangays
document.getElementById('diseaseBarangaySearch').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const barangays = document.querySelectorAll('#diseaseBarangayList li');

    barangays.forEach(function (barangay) {
        const barangayName = barangay.querySelector('label').innerText.toLowerCase();
        barangay.style.display = barangayName.includes(query) ? '' : 'none';
    });
});

// Function to update the dropdown button text for selected barangays
function updateBarangayDropdownText() {
    const dropdownButton = document.getElementById('diseaseBarangayDropdownButton');
    if (selectedDiseaseBarangays.length === 0) {
        dropdownButton.innerText = 'Select Barangay'; // Default text when no barangays are selected
    } else {
        dropdownButton.innerText = `Selected: ${selectedDiseaseBarangays.join(', ')}`;
    }
}

// Event listener for barangay checkbox changes
document.querySelectorAll('#diseaseBarangayList .form-check-input').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.value === 'all') {
            // Handle select/deselect all
            const allChecked = e.target.checked;
            selectedDiseaseBarangays = allChecked
                ? Array.from(document.querySelectorAll('#diseaseBarangayList .form-check-input:not([value="all"])')).map(cb => cb.value)
                : [];
            document.querySelectorAll('#diseaseBarangayList .form-check-input:not([value="all"])').forEach(cb => cb.checked = allChecked);
        } else {
            // Update selected barangays
            if (e.target.checked) {
                selectedDiseaseBarangays.push(e.target.value);
            } else {
                selectedDiseaseBarangays = selectedDiseaseBarangays.filter(barangay => barangay !== e.target.value);
            }
            // Update "Select All" checkbox state
            const allSelected = document.querySelectorAll('#diseaseBarangayList .form-check-input:not([value="all"])').length === selectedDiseaseBarangays.length;
            document.getElementById('selectAllDiseaseBarangays').checked = allSelected;
        }

        // Update the dropdown button text for selected barangays
        updateBarangayDropdownText();

        // Reload markers based on selected barangays and status
        const selectedStatus = document.querySelector('input[name="status"]:checked').value;
        loadDiseaseMarkers(selectedStatus);
    });
});


// Call initializeDiseaseMap when the window has loaded
window.onload = initializeDiseaseMap;
