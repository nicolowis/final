document.addEventListener('DOMContentLoaded', function () {
    // Set default rows to 10
    document.getElementById('rowsFilter').value = '10';

    // Add event listeners to filters
    document.getElementById('speciesFilter').addEventListener('change', filterAnimalsBySpecies);
    document.getElementById('rowsFilter').addEventListener('change', filterAnimalsBySpecies);
    document.getElementById('searchFilter').addEventListener('input', filterAnimalsBySpecies);

    // Call the function to load default data
    filterAnimalsBySpecies();
});

function filterAnimalsBySpecies() {
    var species = document.getElementById('speciesFilter').value;
    var rows = document.getElementById('rowsFilter').value;
    var search = document.getElementById('searchFilter').value;

    var xhr = new XMLHttpRequest();
    var url = 'http://localhost/final/backend/animaltable.php';
    var params = [];

    // Append parameters based on the filter selections
    if (species) params.push('species=' + encodeURIComponent(species));
    if (rows) params.push('rows=' + encodeURIComponent(rows));
    if (search) params.push('search=' + encodeURIComponent(search));

    // If there are parameters, append them to the URL
    if (params.length > 0) {
        url += '?' + params.join('&');
    }

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Update the table body with the response
            document.getElementById('animalTableBody').innerHTML = xhr.responseText;
        } else {
            console.error('Failed to load animal data. Status: ' + xhr.status);
        }
    };

    xhr.send();
}
