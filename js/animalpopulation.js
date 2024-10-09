let map; // Declare map as a global variable
let markers = []; // Declare markers array globally to store the map markers

function populationMap() {
    const cityCenter = new google.maps.LatLng(13.941875, 121.164429);

    // Define the coordinates for the polygon (MultiPolygon from your data)
    const lipaCityCoords = [
        [
            { lat: 13.8714, lng: 121.1765 },
            { lat: 13.8616, lng: 121.1648 },
            { lat: 13.8676, lng: 121.1515 },
            { lat: 13.8713, lng: 121.1379 },
            { lat: 13.8715, lng: 121.1308 },
            { lat: 13.8802, lng: 121.1333 },
            { lat: 13.8835, lng: 121.1328 },
            { lat: 13.8861, lng: 121.122 },
            { lat: 13.901, lng: 121.1255 },
            { lat: 13.9008, lng: 121.119 },
            { lat: 13.9194, lng: 121.1148 },
            { lat: 13.9248, lng: 121.1036 },
            { lat: 13.9254, lng: 121.0871 },
            { lat: 13.9296, lng: 121.0739 },
            { lat: 13.945, lng: 121.0642 },
            { lat: 13.944, lng: 121.0672 },
            { lat: 13.9497, lng: 121.0726 },
            { lat: 13.9543, lng: 121.0765 },
            { lat: 13.9612, lng: 121.0779 },
            { lat: 13.9614, lng: 121.0829 },
            { lat: 13.9593, lng: 121.0873 },
            { lat: 13.963, lng: 121.1072 },
            { lat: 13.9551, lng: 121.1138 },
            { lat: 13.9589, lng: 121.1234 },
            { lat: 13.9633, lng: 121.1252 },
            { lat: 13.981, lng: 121.1219 },
            { lat: 13.9854, lng: 121.1264 },
            { lat: 13.9948, lng: 121.1309 },
            { lat: 14.0019, lng: 121.143 },
            { lat: 13.9955, lng: 121.1472 },
            { lat: 13.9933, lng: 121.1469 },
            { lat: 13.9953, lng: 121.152 },
            { lat: 14.0004, lng: 121.153 },
            { lat: 14.0038, lng: 121.161 },
            { lat: 14.0108, lng: 121.1674 },
            { lat: 14.0156, lng: 121.175 },
            { lat: 14.0198, lng: 121.179 },
            { lat: 14.0217, lng: 121.1769 },
            { lat: 14.0238, lng: 121.1775 },
            { lat: 14.0274, lng: 121.1846 },
            { lat: 14.0052, lng: 121.1946 },
            { lat: 13.9988, lng: 121.1956 },
            { lat: 13.99, lng: 121.2034 },
            { lat: 13.9835, lng: 121.2188 },
            { lat: 13.9829, lng: 121.2242 },
            { lat: 13.9843, lng: 121.2306 },
            { lat: 13.9915, lng: 121.2392 },
            { lat: 13.9886, lng: 121.2425 },
            { lat: 13.9913, lng: 121.2479 },
            { lat: 13.9916, lng: 121.2607 },
            { lat: 13.9705, lng: 121.2585 },
            { lat: 13.9647, lng: 121.2613 },
            { lat: 13.9574, lng: 121.2591 },
            { lat: 13.955, lng: 121.2595 },
            { lat: 13.9511, lng: 121.2651 },
            { lat: 13.9476, lng: 121.2664 },
            { lat: 13.9398, lng: 121.2656 },
            { lat: 13.9405, lng: 121.2443 },
            { lat: 13.9285, lng: 121.2374 },
            { lat: 13.9246, lng: 121.2377 },
            { lat: 13.9065, lng: 121.2416 },
            { lat: 13.9023, lng: 121.2444 },
            { lat: 13.8959, lng: 121.2561 },
            { lat: 13.8957, lng: 121.2613 },
            { lat: 13.8915, lng: 121.2651 },
            { lat: 13.8934, lng: 121.2701 },
            { lat: 13.8904, lng: 121.2721 },
            { lat: 13.8871, lng: 121.2644 },
            { lat: 13.8888, lng: 121.2502 },
            { lat: 13.8937, lng: 121.2352 },
            { lat: 13.9035, lng: 121.2205 },
            { lat: 13.8941, lng: 121.2101 },
            { lat: 13.8871, lng: 121.1976 },
            { lat: 13.8871, lng: 121.1947 },
            { lat: 13.8829, lng: 121.192 },
            { lat: 13.8799, lng: 121.1859 },
            { lat: 13.8714, lng: 121.1765 }
        ]
    ];

    // Initialize the map
    map = new google.maps.Map(document.getElementById('displayMap'), {
        center: cityCenter,
        zoom: 13,
        maxZoom: 20, // Maximum zoom
        minZoom: 12, // Minimum zoom (optional)
        gestureHandling: 'greedy'
    });

    // Create a polygon for Lipa City using the coordinates
    const lipaCityPolygon = new google.maps.Polygon({
        paths: lipaCityCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'transparent',
        fillOpacity: 0.35
    });

    // Add the polygon to the map
    lipaCityPolygon.setMap(map);

    // Fit the map to the polygon's bounds
    const bounds = new google.maps.LatLngBounds();
    lipaCityCoords[0].forEach(function (coord) {
        bounds.extend(coord);
    });
    map.fitBounds(bounds);

    // Restrict panning outside the polygon
    google.maps.event.addListener(map, 'dragend', function () {
        if (!bounds.contains(map.getCenter())) {
            map.panTo(cityCenter); // Pan back to the center if dragged outside
        }
    });

    // Define and display region polygons (Region 1, Region 2, etc.)
    var regionCoordinates = [
        // Region 1 - Adya
        {
            "name": "Adya",
            "coordinates": [
                {
                    "lat": 13.8686,
                    "lng": 121.1479
                },
                {
                    "lat": 13.8713,
                    "lng": 121.1379
                },
                {
                    "lat": 13.8715,
                    "lng": 121.1308
                },
                {
                    "lat": 13.8802,
                    "lng": 121.1333
                },
                {
                    "lat": 13.8835,
                    "lng": 121.1328
                },
                {
                    "lat": 13.8849,
                    "lng": 121.1466
                },
                {
                    "lat": 13.8780,
                    "lng": 121.1489
                },
                {
                    "lat": 13.8686,
                    "lng": 121.1479
                }
            ],
            fillColor: '#32CD32', // LimeGreen for Adya
            strokeColor: '#228B22', // ForestGreen for Adya
            labelPosition: { lat: 13.878863636824498, lng: 121.13962674809859 } // Centroid for label



        },
        // Region 2 - Anilao
        {
            "name": "Anilao",
            "coordinates": [
                {
                    "lat": 13.9003,
                    "lng": 121.1802
                },
                {
                    "lat": 13.8953,
                    "lng": 121.1804
                },
                {
                    "lat": 13.8940,
                    "lng": 121.1785
                },
                {
                    "lat": 13.8976,
                    "lng": 121.1697
                },
                {
                    "lat": 13.9072,
                    "lng": 121.1678
                },
                {
                    "lat": 13.9094,
                    "lng": 121.1680
                },
                {
                    "lat": 13.9112,
                    "lng": 121.1708
                },
                {
                    "lat": 13.9148,
                    "lng": 121.1705
                },
                {
                    "lat": 13.9177,
                    "lng": 121.1683
                },
                {
                    "lat": 13.9197,
                    "lng": 121.1734
                },
                {
                    "lat": 13.9173,
                    "lng": 121.1775
                },
                {
                    "lat": 13.9003,
                    "lng": 121.1802
                }
            ],
            fillColor: '#FF6347', // Tomato for Anilao
            strokeColor: '#FF4500',// OrangeRed for Anilao
            labelPosition: { lat: 13.904635750369316, lng: 121.17410654466632 } // Centroid for label

        },
        // Region 3 - Anilao-Labac
        {
            "name": "Anilao-Labac",
            "coordinates": [
                {
                    "lat": 13.8953,
                    "lng": 121.1804
                },
                {
                    "lat": 13.9003,
                    "lng": 121.1802
                },
                {
                    "lat": 13.9032,
                    "lng": 121.1860
                },
                {
                    "lat": 13.8864,
                    "lng": 121.1941
                },
                {
                    "lat": 13.8829,
                    "lng": 121.1920
                },
                {
                    "lat": 13.8774,
                    "lng": 121.1829
                },
                {
                    "lat": 13.8853,
                    "lng": 121.1836
                },
                {
                    "lat": 13.8865,
                    "lng": 121.1820
                },
                {
                    "lat": 13.8919,
                    "lng": 121.1826
                },
                {
                    "lat": 13.8953,
                    "lng": 121.1804
                }
            ],
            fillColor: '#1E90FF', // DodgerBlue for Anilao-Labac
            strokeColor: '#4682B4', // SteelBlue for Anilao-Labac
            labelPosition: { lat: 13.891330059807219, lng: 121.18744966589834 } // Centroid for label ---
        },
        // Region 4 - Antipolo del Norte
        {
            "name": "Antipolo del Norte",
            "coordinates": [
                {
                    "lat": 13.9151,
                    "lng": 121.1786
                },
                {
                    "lat": 13.9184,
                    "lng": 121.1767
                },
                {
                    "lat": 13.9197,
                    "lng": 121.1734
                },
                {
                    "lat": 13.9177,
                    "lng": 121.1683
                },
                {
                    "lat": 13.9263,
                    "lng": 121.1635
                },
                {
                    "lat": 13.9319,
                    "lng": 121.1617
                },
                {
                    "lat": 13.9389,
                    "lng": 121.1698
                },
                {
                    "lat": 13.9247,
                    "lng": 121.1751
                },
                {
                    "lat": 13.9212,
                    "lng": 121.1781
                },
                {
                    "lat": 13.9221,
                    "lng": 121.1804
                },
                {
                    "lat": 13.9151,
                    "lng": 121.1786
                }
            ],
            fillColor: '#FFD700', // Gold for Antipolo del Norte
            strokeColor: '#FFA500', // Orange for Antipolo del Norte
            labelPosition: { lat: 13.926123557328406, lng: 121.16747300007499 } // Centroid for label 

        },
        // Region 5 - Antipolo del Sur
        {
            "name": "Antipolo del Sur",
            "coordinates": [
                {
                    "lat": 13.9032,
                    "lng": 121.1860
                },
                {
                    "lat": 13.9003,
                    "lng": 121.1802
                },
                {
                    "lat": 13.9151,
                    "lng": 121.1786
                },
                {
                    "lat": 13.9221,
                    "lng": 121.1804
                },
                {
                    "lat": 13.9244,
                    "lng": 121.1917
                },
                {
                    "lat": 13.9122,
                    "lng": 121.2037
                },
                {
                    "lat": 13.9032,
                    "lng": 121.1860
                }
            ],
            fillColor: '#9400D3', // DarkViolet for Antipolo del Sur
            strokeColor: '#8A2BE2', // BlueViolet for Antipolo del Sur
            labelPosition: { lat: 13.915772620374186, lng: 121.18767840178863 } // Centroid for label

        },
        // Region 6 - Bagong Pook
        {
            "name": "Bagong Pook",
            "coordinates": [
                {
                    "lat": 13.9423,
                    "lng": 121.1215
                },
                {
                    "lat": 13.9339,
                    "lng": 121.1080
                },
                {
                    "lat": 13.9532,
                    "lng": 121.0955
                },
                {
                    "lat": 13.9563,
                    "lng": 121.0925
                },
                {
                    "lat": 13.9594,
                    "lng": 121.0857
                },
                {
                    "lat": 13.9630,
                    "lng": 121.1072
                },
                {
                    "lat": 13.9621,
                    "lng": 121.1091
                },
                {
                    "lat": 13.9560,
                    "lng": 121.1118
                },
                {
                    "lat": 13.9555,
                    "lng": 121.1162
                },
                {
                    "lat": 13.9423,
                    "lng": 121.1215
                }
            ],
            fillColor: '#FF69B4', // HotPink for Bagong Pook
            strokeColor: '#FF1493', // DeepPink for Bagong Pook
            labelPosition: { lat: 13.950377272016302, lng: 121.1055524843871 } // Centroid for label





        },
        // Region 7 - Balintawak
        {
            "name": "Balintawak",
            "coordinates": [
                {
                    "lat": 13.9666,
                    "lng": 121.1509
                },
                {
                    "lat": 13.9708,
                    "lng": 121.1576
                },
                {
                    "lat": 13.9590,
                    "lng": 121.1583
                },
                {
                    "lat": 13.9552,
                    "lng": 121.1638
                },
                {
                    "lat": 13.9512,
                    "lng": 121.1639
                },
                {
                    "lat": 13.9480,
                    "lng": 121.1664
                },
                {
                    "lat": 13.9462,
                    "lng": 121.1654
                },
                {
                    "lat": 13.9468,
                    "lng": 121.1606
                },
                {
                    "lat": 13.9556,
                    "lng": 121.1548
                },
                {
                    "lat": 13.9559,
                    "lng": 121.1487
                },
                {
                    "lat": 13.9604,
                    "lng": 121.1535
                },
                {
                    "lat": 13.9666,
                    "lng": 121.1509
                }
            ],
            fillColor: '#00CED1', // DarkTurquoise for Balintawak
            strokeColor: '#20B2AA', // LightSeaGreen for Balintawak
            labelPosition: { lat: 13.960085586315513, lng: 121.15577738892215 } // Centroid for label
        },
        {
            "name": "Banaybanay",
            "coordinates": [
                {
                    "lat": 13.9339,
                    "lng": 121.108
                },
                {
                    "lat": 13.9436,
                    "lng": 121.124
                },
                {
                    "lat": 13.9359,
                    "lng": 121.1274
                },
                {
                    "lat": 13.9235,
                    "lng": 121.1077
                },
                {
                    "lat": 13.9239,
                    "lng": 121.1066
                },
                {
                    "lat": 13.9287,
                    "lng": 121.1084
                },
                {
                    "lat": 13.9339,
                    "lng": 121.108
                }
            ],
            "fillColor": "#00CED1",  // DarkTurquoise for Banaybanay
            "strokeColor": "#20B2AA", // LightSeaGreen for Banaybanay
            labelPosition: { lat: 13.933133174879346, lng: 121.11548316015484 } // Centroid for label


        },
        {
            "name": "Barangay12",
            "coordinates": [
                {
                    "lat": 13.9423,
                    "lng": 121.1215
                },
                {
                    "lat": 13.9555,
                    "lng": 121.1162
                },
                {
                    "lat": 13.9589,
                    "lng": 121.1234
                },
                {
                    "lat": 13.9647,
                    "lng": 121.1249
                },
                {
                    "lat": 13.9658,
                    "lng": 121.131
                },
                {
                    "lat": 13.9553,
                    "lng": 121.1378
                },
                {
                    "lat": 13.9406,
                    "lng": 121.1254
                },
                {
                    "lat": 13.9436,
                    "lng": 121.124
                },
                {
                    "lat": 13.9423,
                    "lng": 121.1215
                }
            ],
            "fillColor": "#FF6347",  // Tomato for Barangay12
            "strokeColor": "#FF4500", // OrangeRed for Barangay12
            labelPosition: { lat: 13.952228496876, lng: 121.12878003080063 } // Centroid for label

        },
        {
            "name": "Bolbok",
            "coordinates": [
                {
                    "lat": 13.9329,
                    "lng": 121.1535
                },
                {
                    "lat": 13.928,
                    "lng": 121.1562
                },
                {
                    "lat": 13.9233,
                    "lng": 121.1551
                },
                {
                    "lat": 13.9171,
                    "lng": 121.1585
                },
                {
                    "lat": 13.9172,
                    "lng": 121.1491
                },
                {
                    "lat": 13.9252,
                    "lng": 121.1461
                },
                {
                    "lat": 13.9374,
                    "lng": 121.1525
                },
                {
                    "lat": 13.9329,
                    "lng": 121.1535
                }
            ],
            "fillColor": "#32CD32",  // LimeGreen for Bolbok
            "strokeColor": "#228B22", // ForestGreen for Bolbok
            labelPosition: { lat: 13.924470034355426, lng: 121.15228075690408 } // Centroid for label

        },
        {
            "name": "Bugtong Na Pulo",
            "coordinates": [
                {
                    "lat": 13.9969,
                    "lng": 121.1753
                },
                {
                    "lat": 14.0038,
                    "lng": 121.161
                },
                {
                    "lat": 14.0095,
                    "lng": 121.1661
                },
                {
                    "lat": 14.0136,
                    "lng": 121.1799
                },
                {
                    "lat": 14.0091,
                    "lng": 121.1801
                },
                {
                    "lat": 13.9969,
                    "lng": 121.1753
                }
            ],
            "fillColor": "#FFD700",  // Gold for Bugtong Na Pulo
            "strokeColor": "#FFA500", // Orange for Bugtong Na Pulo
            labelPosition: { lat: 14.007646859786204, lng: 121.17371847635779 } // Centroid for label


        },
        {
            "name": "Bulacnin",
            "coordinates": [
                {
                    "lat": 13.9992,
                    "lng": 121.1386
                },
                {
                    "lat": 14.0019,
                    "lng": 121.143
                },
                {
                    "lat": 13.9955,
                    "lng": 121.1472
                },
                {
                    "lat": 13.9933,
                    "lng": 121.1469
                },
                {
                    "lat": 13.9936,
                    "lng": 121.1487
                },
                {
                    "lat": 13.9915,
                    "lng": 121.1503
                },
                {
                    "lat": 13.9791,
                    "lng": 121.153
                },
                {
                    "lat": 13.9708,
                    "lng": 121.1576
                },
                {
                    "lat": 13.967,
                    "lng": 121.152
                },
                {
                    "lat": 13.9665,
                    "lng": 121.1501
                },
                {
                    "lat": 13.9763,
                    "lng": 121.1447
                },
                {
                    "lat": 13.9785,
                    "lng": 121.1463
                },
                {
                    "lat": 13.9992,
                    "lng": 121.1386
                }
            ],
            "fillColor": "#8A2BE2",  // BlueViolet for Bulacnin
            "strokeColor": "#4B0082", // Indigo for Bulacnin
            labelPosition: { lat: 13.991066281991705, lng: 121.14588548413289 } // Centroid for label


        },
        {
            "name": "Bulaklakan",
            "coordinates": [
                {
                    "lat": 13.9594,
                    "lng": 121.0857
                },
                {
                    "lat": 13.9563,
                    "lng": 121.0925
                },
                {
                    "lat": 13.9532,
                    "lng": 121.0955
                },
                {
                    "lat": 13.937,
                    "lng": 121.1057
                },
                {
                    "lat": 13.931,
                    "lng": 121.0854
                },
                {
                    "lat": 13.9398,
                    "lng": 121.0823
                },
                {
                    "lat": 13.9443,
                    "lng": 121.0862
                },
                {
                    "lat": 13.9473,
                    "lng": 121.092
                },
                {
                    "lat": 13.9501,
                    "lng": 121.0891
                },
                {
                    "lat": 13.9594,
                    "lng": 121.0857
                }
            ],
            "fillColor": "#FF69B4",  // HotPink for Bulaklakan
            "strokeColor": "#FF1493", // DeepPink for Bulaklakan
            labelPosition: { lat: 13.941944918562804, lng: 121.09390037855016 } // Centroid for label

        },
        {
            "name": "Calamias",
            "coordinates": [
                {
                    "lat": 13.8676,
                    "lng": 121.1515
                },
                {
                    "lat": 13.8686,
                    "lng": 121.1479
                },
                {
                    "lat": 13.8806,
                    "lng": 121.1486
                },
                {
                    "lat": 13.8816,
                    "lng": 121.1563
                },
                {
                    "lat": 13.875,
                    "lng": 121.1561
                },
                {
                    "lat": 13.8676,
                    "lng": 121.1515
                }
            ],
            "fillColor": "#1E90FF",  // DodgerBlue for Calamias
            "strokeColor": "#00008B", // DarkBlue for Calamias
            labelPosition: { lat: 13.875641301867084, lng: 121.15221991825432 } // Centroid for label

        },
        {
            "name": "Cumba",
            "coordinates": [
                {
                    "lat": 13.9076,
                    "lng": 121.1458
                },
                {
                    "lat": 13.8989,
                    "lng": 121.1422
                },
                {
                    "lat": 13.8973,
                    "lng": 121.1251
                },
                {
                    "lat": 13.901,
                    "lng": 121.1255
                },
                {
                    "lat": 13.922,
                    "lng": 121.1374
                },
                {
                    "lat": 13.9192,
                    "lng": 121.1405
                },
                {
                    "lat": 13.9136,
                    "lng": 121.1414
                },
                {
                    "lat": 13.9076,
                    "lng": 121.1458
                }
            ],
            "fillColor": "#FF8C00",  // DarkOrange for Cumba
            "strokeColor": "#FF4500", // OrangeRed for Cumba
            labelPosition: { lat: 13.9095544456371, lng: 121.139334692372 } // Centroid for label

        },
        {
            "name": "Dagatan",
            "coordinates": [
                {
                    "lat": 13.9787,
                    "lng": 121.1714
                },
                {
                    "lat": 13.979,
                    "lng": 121.1791
                },
                {
                    "lat": 13.9887,
                    "lng": 121.1885
                },
                {
                    "lat": 13.9644,
                    "lng": 121.1938
                },
                {
                    "lat": 13.9589,
                    "lng": 121.1759
                },
                {
                    "lat": 13.9628,
                    "lng": 121.1737
                },
                {
                    "lat": 13.9737,
                    "lng": 121.1732
                },
                {
                    "lat": 13.9787,
                    "lng": 121.1714
                }
            ],
            "fillColor": "#4B0082",  // Indigo for Dagatan
            "strokeColor": "#800080", // Purple for Dagatan
            labelPosition: { lat: 13.969980808314773, lng: 121.18496476026914 } // Centroid for label

        },
        {
            "name": "Duhatan",
            "coordinates": [
                {
                    "lat": 13.9296,
                    "lng": 121.0739
                },
                {
                    "lat": 13.9377,
                    "lng": 121.0685
                },
                {
                    "lat": 13.945,
                    "lng": 121.0642
                },
                {
                    "lat": 13.9374,
                    "lng": 121.0765
                },
                {
                    "lat": 13.9398,
                    "lng": 121.0823
                },
                {
                    "lat": 13.9254,
                    "lng": 121.0871
                },
                {
                    "lat": 13.9296,
                    "lng": 121.0739
                }
            ],
            "fillColor": "#FFA07A",  // LightSalmon for Duhatan
            "strokeColor": "#FF4500", // OrangeRed for Duhatan
            labelPosition: { lat: 13.933886073152664, lng: 121.07693359865426 } // Centroid for label

        },
        {
            "name": "Halang",
            "coordinates": [
                {
                    "lat": 13.9594,
                    "lng": 121.0857
                },
                {
                    "lat": 13.9501,
                    "lng": 121.0891
                },
                {
                    "lat": 13.9473,
                    "lng": 121.092
                },
                {
                    "lat": 13.9443,
                    "lng": 121.0862
                },
                {
                    "lat": 13.9415,
                    "lng": 121.085
                },
                {
                    "lat": 13.9374,
                    "lng": 121.0765
                },
                {
                    "lat": 13.944,
                    "lng": 121.0672
                },
                {
                    "lat": 13.9543,
                    "lng": 121.0765
                },
                {
                    "lat": 13.9612,
                    "lng": 121.0779
                },
                {
                    "lat": 13.9614,
                    "lng": 121.0829
                },
                {
                    "lat": 13.9594,
                    "lng": 121.0857
                }
            ],
            "fillColor": "#B0E0E6",  // PowderBlue for Halang
            "strokeColor": "#4682B4", // SteelBlue for Halang
            labelPosition: {
                lat: 13.95022787117103, lng: 121.08031525715683
            } // Centroid for label


        },
        {
            "name": "Inosloban",
            "coordinates": [
                {
                    "lat": 14.0038,
                    "lng": 121.161
                },
                {
                    "lat": 13.9961,
                    "lng": 121.1773
                },
                {
                    "lat": 14.0005,
                    "lng": 121.1847
                },
                {
                    "lat": 13.997,
                    "lng": 121.1882
                },
                {
                    "lat": 13.9887,
                    "lng": 121.1885
                },
                {
                    "lat": 13.979,
                    "lng": 121.1791
                },
                {
                    "lat": 13.9791,
                    "lng": 121.1603
                },
                {
                    "lat": 13.9953,
                    "lng": 121.152
                },
                {
                    "lat": 14.0004,
                    "lng": 121.153
                },
                {
                    "lat": 14.0038,
                    "lng": 121.161
                }
            ],
            "fillColor": "#FFDEAD",  // NavajoWhite for Inosloban
            "strokeColor": "#CD853F", // Peru for Inosloban
            labelPosition: { lat: 13.990713493443623, lng: 121.16555999429625 } // Centroid for label

        },
        {
            "name": "Kayumanggi",
            "coordinates": [
                {
                    "lat": 13.9319,
                    "lng": 121.1617
                },
                {
                    "lat": 13.9208,
                    "lng": 121.1667
                },
                {
                    "lat": 13.9171,
                    "lng": 121.1585
                },
                {
                    "lat": 13.9233,
                    "lng": 121.1551
                },
                {
                    "lat": 13.928,
                    "lng": 121.1562
                },
                {
                    "lat": 13.9329,
                    "lng": 121.1535
                },
                {
                    "lat": 13.9319,
                    "lng": 121.1617
                }
            ],
            "fillColor": "#7FFFD4",  // Aquamarine for Kayumanggi
            "strokeColor": "#66CDAA", // MediumAquamarine for Kayumanggi
            labelPosition: { lat: 13.925941235857955, lng: 121.16093114840442 } // Centroid for label

        },
        {
            "name": "Latag",
            "coordinates": [
                {
                    "lat": 13.9221,
                    "lng": 121.1804
                },
                {
                    "lat": 13.9212,
                    "lng": 121.1781
                },
                {
                    "lat": 13.9247,
                    "lng": 121.1751
                },
                {
                    "lat": 13.9412,
                    "lng": 121.1687
                },
                {
                    "lat": 13.9469,
                    "lng": 121.1798
                },
                {
                    "lat": 13.9298,
                    "lng": 121.1873
                },
                {
                    "lat": 13.9244,
                    "lng": 121.1917
                },
                {
                    "lat": 13.9221,
                    "lng": 121.1804
                }
            ],
            "fillColor": "#FF69B4",  // HotPink for Latag
            "strokeColor": "#FF1493", // DeepPink for Latag
            labelPosition: { lat: 13.93473535371677, lng: 121.17933830569501 } // Centroid for label

        },
        {
            "name": "Lodlod",
            "coordinates": [
                {
                    "lat": 13.9374,
                    "lng": 121.1525
                },
                {
                    "lat": 13.9252,
                    "lng": 121.1461
                },
                {
                    "lat": 13.9288,
                    "lng": 121.1434
                },
                {
                    "lat": 13.927,
                    "lng": 121.1402
                },
                {
                    "lat": 13.9372,
                    "lng": 121.1342
                },
                {
                    "lat": 13.941,
                    "lng": 121.1458
                },
                {
                    "lat": 13.9374,
                    "lng": 121.1525
                }
            ],
            "fillColor": "#D8BFD8",  // Thistle for Lodlod
            "strokeColor": "#DDA0DD", // Plum for Lodlod
            labelPosition: { lat: 13.934665400799478, lng: 121.14541332798794 } // Centroid for label

        },
        {
            "name": "Lumbang",
            "coordinates": [
                {
                    "lat": 13.9769,
                    "lng": 121.1911
                },
                {
                    "lat": 13.9887,
                    "lng": 121.1885
                },
                {
                    "lat": 13.9882,
                    "lng": 121.1982
                },
                {
                    "lat": 13.9902,
                    "lng": 121.2048
                },
                {
                    "lat": 13.985,
                    "lng": 121.2164
                },
                {
                    "lat": 13.9824,
                    "lng": 121.212
                },
                {
                    "lat": 13.9769,
                    "lng": 121.1911
                }
            ],
            "fillColor": "#98FB98",  // PaleGreen for Lumbang
            "strokeColor": "#00FA9A", // MediumSpringGreen for Lumbang
            labelPosition: { lat: 13.98363192646571, lng: 121.19722138407597 } // Centroid for label

        },
        {
            "name": "Mabini",
            "coordinates": [
                {
                    "lat": 13.8806,
                    "lng": 121.1486
                },
                {
                    "lat": 13.8849,
                    "lng": 121.1466
                },
                {
                    "lat": 13.8904,
                    "lng": 121.1466
                },
                {
                    "lat": 13.8989,
                    "lng": 121.1422
                },
                {
                    "lat": 13.9076,
                    "lng": 121.1458
                },
                {
                    "lat": 13.911,
                    "lng": 121.1496
                },
                {
                    "lat": 13.9094,
                    "lng": 121.1627
                },
                {
                    "lat": 13.8958,
                    "lng": 121.1664
                },
                {
                    "lat": 13.8909,
                    "lng": 121.1563
                },
                {
                    "lat": 13.8816,
                    "lng": 121.1563
                },
                {
                    "lat": 13.8806,
                    "lng": 121.1486
                }
            ],
            "fillColor": "#4682B4",  // SteelBlue for Mabini
            "strokeColor": "#1E90FF", // DodgerBlue for Mabini
            labelPosition: { lat: 13.899691305583636, lng: 121.15391663974718 } // Centroid for label

        },
        {
            "name": "Malagonlong",
            "coordinates": [
                {
                    "lat": 13.9177,
                    "lng": 121.1683
                },
                {
                    "lat": 13.9148,
                    "lng": 121.1705
                },
                {
                    "lat": 13.9112,
                    "lng": 121.1708
                },
                {
                    "lat": 13.9094,
                    "lng": 121.168
                },
                {
                    "lat": 13.9107,
                    "lng": 121.1498
                },
                {
                    "lat": 13.9148,
                    "lng": 121.1478
                },
                {
                    "lat": 13.9172,
                    "lng": 121.1491
                },
                {
                    "lat": 13.917,
                    "lng": 121.1593
                },
                {
                    "lat": 13.9208,
                    "lng": 121.1667
                },
                {
                    "lat": 13.9177,
                    "lng": 121.1683
                }
            ],
            "fillColor": "#FFC0CB",  // Pink for Malagonlong
            "strokeColor": "#FF69B4", // HotPink for Malagonlong
            labelPosition: { lat: 13.915520783895417, lng: 121.16089112455991 } // Centroid for label

        },
        {
            "name": "Malitlit",
            "coordinates": [
                {
                    "lat": 13.9327,
                    "lng": 121.2234
                },
                {
                    "lat": 13.9383,
                    "lng": 121.2216
                },
                {
                    "lat": 13.9416,
                    "lng": 121.2166
                },
                {
                    "lat": 13.9439,
                    "lng": 121.2156
                },
                {
                    "lat": 13.9474,
                    "lng": 121.2171
                },
                {
                    "lat": 13.9516,
                    "lng": 121.2166
                },
                {
                    "lat": 13.9574,
                    "lng": 121.2591
                },
                {
                    "lat": 13.955,
                    "lng": 121.2595
                },
                {
                    "lat": 13.9511,
                    "lng": 121.2651
                },
                {
                    "lat": 13.9476,
                    "lng": 121.2664
                },
                {
                    "lat": 13.9398,
                    "lng": 121.2656
                },
                {
                    "lat": 13.9405,
                    "lng": 121.2443
                },
                {
                    "lat": 13.9285,
                    "lng": 121.2374
                },
                {
                    "lat": 13.9126,
                    "lng": 121.2402
                },
                {
                    "lat": 13.9144,
                    "lng": 121.2354
                },
                {
                    "lat": 13.9237,
                    "lng": 121.227
                },
                {
                    "lat": 13.9262,
                    "lng": 121.2251
                },
                {
                    "lat": 13.9307,
                    "lng": 121.2258
                },
                {
                    "lat": 13.9327,
                    "lng": 121.2234
                }
            ],
            "fillColor": "#FFB6C1",  // LightPink for Malitlit
            "strokeColor": "#FF69B4", // HotPink for Malitlit
            labelPosition: { lat: 13.939930992414636, lng: 121.2343188305304 } // Centroid for label

        },
        {
            "name": "Marauoy",
            "coordinates": [
                {
                    "lat": 13.9552,
                    "lng": 121.1638
                },
                {
                    "lat": 13.959,
                    "lng": 121.1583
                },
                {
                    "lat": 13.9708,
                    "lng": 121.1576
                },
                {
                    "lat": 13.9791,
                    "lng": 121.1603
                },
                {
                    "lat": 13.9787,
                    "lng": 121.1714
                },
                {
                    "lat": 13.9607,
                    "lng": 121.1749
                },
                {
                    "lat": 13.9575,
                    "lng": 121.1717
                },
                {
                    "lat": 13.9552,
                    "lng": 121.1638
                }
            ],
            "fillColor": "#32CD32",  // LimeGreen for Marauoy
            "strokeColor": "#228B22", // ForestGreen for Marauoy
            labelPosition: { lat: 13.96732929372493, lng: 121.16774382855178 } // Centroid for label

        },
        {
            "name": "Mataas Na Lupa",
            "coordinates": [
                {
                    "lat": 13.9556,
                    "lng": 121.1548
                },
                {
                    "lat": 13.9487,
                    "lng": 121.1592
                },
                {
                    "lat": 13.9374,
                    "lng": 121.1525
                },
                {
                    "lat": 13.941,
                    "lng": 121.1458
                },
                {
                    "lat": 13.9381,
                    "lng": 121.1378
                },
                {
                    "lat": 13.9471,
                    "lng": 121.1522
                },
                {
                    "lat": 13.9556,
                    "lng": 121.1548
                }
            ],
            "fillColor": "#FFD700",  // Gold for Mataas Na Lupa
            "strokeColor": "#FFA500", // Orange for Mataas Na Lupa
            labelPosition: { lat: 13.944736068340704, lng: 121.15364665259233 } // Centroid for label

        },
        {
            "name": "Munting Pulo",
            "coordinates": [
                {
                    "lat": 13.9589,
                    "lng": 121.1759
                },
                {
                    "lat": 13.9644,
                    "lng": 121.1938
                },
                {
                    "lat": 13.9598,
                    "lng": 121.2002
                },
                {
                    "lat": 13.9574,
                    "lng": 121.2003
                },
                {
                    "lat": 13.9534,
                    "lng": 121.195
                },
                {
                    "lat": 13.9469,
                    "lng": 121.1798
                },
                {
                    "lat": 13.9567,
                    "lng": 121.1745
                },
                {
                    "lat": 13.9589,
                    "lng": 121.1759
                }
            ],
            "fillColor": "#4682B4",  // SteelBlue for Munting Pulo
            "strokeColor": "#1E90FF", // DodgerBlue for Munting Pulo
            labelPosition: { lat: 13.954548377108411, lng: 121.18593076993825 } // Centroid for label

        },
        {
            "name": "Pagolingin Bata",
            "coordinates": [
                {
                    "lat": 13.9094,
                    "lng": 121.168
                },
                {
                    "lat": 13.9008,
                    "lng": 121.1685
                },
                {
                    "lat": 13.897,
                    "lng": 121.1708
                },
                {
                    "lat": 13.8797,
                    "lng": 121.1746
                },
                {
                    "lat": 13.8709,
                    "lng": 121.1756
                },
                {
                    "lat": 13.8694,
                    "lng": 121.1729
                },
                {
                    "lat": 13.8754,
                    "lng": 121.1695
                },
                {
                    "lat": 13.8875,
                    "lng": 121.1708
                },
                {
                    "lat": 13.893,
                    "lng": 121.166
                },
                {
                    "lat": 13.897,
                    "lng": 121.1664
                },
                {
                    "lat": 13.9094,
                    "lng": 121.1627
                },
                {
                    "lat": 13.9094,
                    "lng": 121.168
                }
            ],
            "fillColor": "#FF6347",  // Tomato for Pagolingin Bata
            "strokeColor": "#FF4500", // OrangeRed for Pagolingin Bata
            labelPosition: { lat: 13.880649830882225, lng: 121.17273916459843 } // Centroid for label

        },
        {
            "name": "Pagolingin East",
            "coordinates": [
                {
                    "lat": 13.8953,
                    "lng": 121.1804
                },
                {
                    "lat": 13.8919,
                    "lng": 121.1826
                },
                {
                    "lat": 13.8872,
                    "lng": 121.1819
                },
                {
                    "lat": 13.8845,
                    "lng": 121.1836
                },
                {
                    "lat": 13.8803,
                    "lng": 121.1822
                },
                {
                    "lat": 13.8774,
                    "lng": 121.1829
                },
                {
                    "lat": 13.8743,
                    "lng": 121.18
                },
                {
                    "lat": 13.8896,
                    "lng": 121.1778
                },
                {
                    "lat": 13.894,
                    "lng": 121.1785
                },
                {
                    "lat": 13.8953,
                    "lng": 121.1804
                }
            ],
            "fillColor": "#FFB6C1",  // LightPink for Pagolingin East
            "strokeColor": "#FF69B4", // HotPink for Pagolingin East
            labelPosition: { lat: 13.8844343486112, lng: 121.18119291161527 } // Centroid for label




        },
        {
            "name": "Pagolingin West",
            "coordinates": [
                {
                    "lat": 13.897,
                    "lng": 121.1708
                },
                {
                    "lat": 13.894,
                    "lng": 121.1785
                },
                {
                    "lat": 13.885,
                    "lng": 121.1778
                },
                {
                    "lat": 13.8743,
                    "lng": 121.18
                },
                {
                    "lat": 13.8709,
                    "lng": 121.1756
                },
                {
                    "lat": 13.897,
                    "lng": 121.1708
                }
            ],
            "fillColor": "#8A2BE2",  // BlueViolet for Pagolingin West
            "strokeColor": "#4B0082", // Indigo for Pagolingin West
            labelPosition: { lat: 13.885531509093209, lng: 121.17611076931111 } // Centroid for label

        },
        {
            "name": "Pangao",
            "coordinates": [
                {
                    "lat": 13.9235,
                    "lng": 121.1077
                },
                {
                    "lat": 13.9359,
                    "lng": 121.1274
                },
                {
                    "lat": 13.9372,
                    "lng": 121.1342
                },
                {
                    "lat": 13.927,
                    "lng": 121.1402
                },
                {
                    "lat": 13.901,
                    "lng": 121.1255
                },
                {
                    "lat": 13.9008,
                    "lng": 121.119
                },
                {
                    "lat": 13.9194,
                    "lng": 121.1148
                },
                {
                    "lat": 13.9235,
                    "lng": 121.1077
                }
            ],
            "fillColor": "#FF6347",  // Tomato for Pangao
            "strokeColor": "#FF4500", // OrangeRed for Pangao
            labelPosition: { lat: 13.921463072771672, lng: 121.12770218194339 } // Centroid for label

        },
        {
            "name": "Pinagkawitan",
            "coordinates": [
                {
                    "lat": 13.8864,
                    "lng": 121.1941
                },
                {
                    "lat": 13.9032,
                    "lng": 121.186
                },
                {
                    "lat": 13.9122,
                    "lng": 121.2037
                },
                {
                    "lat": 13.9066,
                    "lng": 121.211
                },
                {
                    "lat": 13.9073,
                    "lng": 121.2155
                },
                {
                    "lat": 13.9038,
                    "lng": 121.2217
                },
                {
                    "lat": 13.8941,
                    "lng": 121.2101
                },
                {
                    "lat": 13.8864,
                    "lng": 121.1941
                }
            ],
            "fillColor": "#32CD32",  // LimeGreen for Pinagkawitan
            "strokeColor": "#228B22", // ForestGreen for Pinagkawitan
            labelPosition: { lat: 13.901647982563732, lng: 121.20361704640689 } // Centroid for label

        },
        {
            "name": "Pinagtongulan",
            "coordinates": [
                {
                    "lat": 13.937,
                    "lng": 121.1057
                },
                {
                    "lat": 13.9339,
                    "lng": 121.108
                },
                {
                    "lat": 13.9297,
                    "lng": 121.1084
                },
                {
                    "lat": 13.9239,
                    "lng": 121.1066
                },
                {
                    "lat": 13.9254,
                    "lng": 121.0871
                },
                {
                    "lat": 13.931,
                    "lng": 121.0854
                },
                {
                    "lat": 13.937,
                    "lng": 121.1057
                }
            ],
            "fillColor": "#FFD700",  // Gold for Pinagtongulan
            "strokeColor": "#FFA500", // Orange for Pinagtongulan
            labelPosition: { lat: 13.930644022408549, lng: 121.09997199037393 } // Centroid for label

        },
        {
            "name": "Plaridel",
            "coordinates": [
                {
                    "lat": 13.9969,
                    "lng": 121.1753
                },
                {
                    "lat": 14.0091,
                    "lng": 121.1801
                },
                {
                    "lat": 14.0136,
                    "lng": 121.1799
                },
                {
                    "lat": 14.0176,
                    "lng": 121.1889
                },
                {
                    "lat": 14.0052,
                    "lng": 121.1946
                },
                {
                    "lat": 13.9988,
                    "lng": 121.1956
                },
                {
                    "lat": 13.99,
                    "lng": 121.2034
                },
                {
                    "lat": 13.9882,
                    "lng": 121.1982
                },
                {
                    "lat": 13.9887,
                    "lng": 121.1885
                },
                {
                    "lat": 13.997,
                    "lng": 121.1882
                },
                {
                    "lat": 14.0005,
                    "lng": 121.1847
                },
                {
                    "lat": 13.9961,
                    "lng": 121.1773
                },
                {
                    "lat": 13.9969,
                    "lng": 121.1753
                }
            ],
            "fillColor": "#8A2BE2",  // BlueViolet for Plaridel
            "strokeColor": "#4B0082", // Indigo for Plaridel
            labelPosition: { lat: 14.000043529347247, lng: 121.19220259453446 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 1",
            "coordinates": [
                {
                    "lat": 13.9428,
                    "lng": 121.1558
                },
                {
                    "lat": 13.9448,
                    "lng": 121.1569
                },
                {
                    "lat": 13.9436,
                    "lng": 121.159
                },
                {
                    "lat": 13.9396,
                    "lng": 121.1614
                },
                {
                    "lat": 13.9428,
                    "lng": 121.1558
                }
            ],
            "fillColor": "#FF4500",  // OrangeRed for Poblacion Barangay 1
            "strokeColor": "#FF6347", // Tomato for Poblacion Barangay 1
            labelPosition: { lat: 13.943096069558909, lng: 121.1587337560872 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 10",
            "coordinates": [
                {
                    "lat": 13.9467,
                    "lng": 121.1646
                },
                {
                    "lat": 13.943,
                    "lng": 121.1684
                },
                {
                    "lat": 13.9412,
                    "lng": 121.1687
                },
                {
                    "lat": 13.9405,
                    "lng": 121.1668
                },
                {
                    "lat": 13.9467,
                    "lng": 121.1646
                }
            ],
            "fillColor": "#98FB98",  // PaleGreen for Poblacion Barangay 10
            "strokeColor": "#00FA9A", // MediumSpringGreen for Poblacion Barangay 10
            labelPosition: { lat: 13.943872967097207, lng: 121.16703757429038 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 11",
            "coordinates": [
                {
                    "lat": 13.9407,
                    "lng": 121.1626
                },
                {
                    "lat": 13.9422,
                    "lng": 121.1652
                },
                {
                    "lat": 13.9389,
                    "lng": 121.1663
                },
                {
                    "lat": 13.938,
                    "lng": 121.165
                },
                {
                    "lat": 13.9407,
                    "lng": 121.1626
                }
            ],
            "fillColor": "#FFDEAD",  // NavajoWhite for Poblacion Barangay 11
            "strokeColor": "#CD853F", // Peru for Poblacion Barangay 11
            labelPosition: { lat: 13.940259077774032, lng: 121.16488847115727 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 2",
            "coordinates": [
                {
                    "lat": 13.9448,
                    "lng": 121.1569
                },
                {
                    "lat": 13.9473,
                    "lng": 121.1584
                },
                {
                    "lat": 13.9442,
                    "lng": 121.161
                },
                {
                    "lat": 13.9433,
                    "lng": 121.1579
                },
                {
                    "lat": 13.9448,
                    "lng": 121.1569
                }
            ],
            "fillColor": "#ADD8E6",  // LightBlue for Poblacion Barangay 2
            "strokeColor": "#87CEEB", // SkyBlue for Poblacion Barangay 2
            labelPosition: { lat: 13.945250851570686, lng: 121.15881567447185 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 3",
            "coordinates": [
                {
                    "lat": 13.9487,
                    "lng": 121.1592
                },
                {
                    "lat": 13.9468,
                    "lng": 121.1606
                },
                {
                    "lat": 13.9468,
                    "lng": 121.1634
                },
                {
                    "lat": 13.9447,
                    "lng": 121.162
                },
                {
                    "lat": 13.9473,
                    "lng": 121.1584
                },
                {
                    "lat": 13.9487,
                    "lng": 121.1592
                }
            ],
            "fillColor": "#FF6347",  // Tomato for Poblacion Barangay 3
            "strokeColor": "#FF4500", // OrangeRed for Poblacion Barangay 3
            labelPosition: { lat: 13.946712653988465, lng: 121.16067493001079 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 4",
            "coordinates": [
                {
                    "lat": 13.9404,
                    "lng": 121.1617
                },
                {
                    "lat": 13.9436,
                    "lng": 121.159
                },
                {
                    "lat": 13.9442,
                    "lng": 121.161
                },
                {
                    "lat": 13.9413,
                    "lng": 121.1635
                },
                {
                    "lat": 13.9404,
                    "lng": 121.1617
                }
            ],
            "fillColor": "#32CD32",  // LimeGreen for Poblacion Barangay 4
            "strokeColor": "#228B22", // ForestGreen for Poblacion Barangay 4
            labelPosition: { lat: 13.942859937205135, lng: 121.16152447066868 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 5",
            "coordinates": [
                {
                    "lat": 13.9422,
                    "lng": 121.1652
                },
                {
                    "lat": 13.9413,
                    "lng": 121.1635
                },
                {
                    "lat": 13.9442,
                    "lng": 121.161
                },
                {
                    "lat": 13.9468,
                    "lng": 121.1634
                },
                {
                    "lat": 13.9422,
                    "lng": 121.1652
                }
            ],
            "fillColor": "#FFD700",  // Gold for Poblacion Barangay 5
            "strokeColor": "#FFA500", // Orange for Poblacion Barangay 5
            labelPosition: { lat: 13.943451915903358, lng: 121.16382496694773 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 6",
            "coordinates": [
                {
                    "lat": 13.9363,
                    "lng": 121.1662
                },
                {
                    "lat": 13.9358,
                    "lng": 121.1651
                },
                {
                    "lat": 13.9403,
                    "lng": 121.1612
                },
                {
                    "lat": 13.9407,
                    "lng": 121.1626
                },
                {
                    "lat": 13.9363,
                    "lng": 121.1662
                }
            ],
            "fillColor": "#4682B4",  // SteelBlue for Poblacion Barangay 6
            "strokeColor": "#1E90FF", // DodgerBlue for Poblacion Barangay 6
            labelPosition: { lat: 13.938919460904813, lng: 121.16365363157962 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 7",
            "coordinates": [
                {
                    "lat": 13.9358,
                    "lng": 121.1651
                },
                {
                    "lat": 13.9349,
                    "lng": 121.164
                },
                {
                    "lat": 13.9391,
                    "lng": 121.1609
                },
                {
                    "lat": 13.9396,
                    "lng": 121.1614
                },
                {
                    "lat": 13.9358,
                    "lng": 121.1651
                }
            ],
            "fillColor": "#FF69B4",  // HotPink for Poblacion Barangay 7
            "strokeColor": "#FF1493", // DeepPink for Poblacion Barangay 7
            labelPosition: { lat: 13.937942389974568, lng: 121.16295896040478 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 8",
            "coordinates": [
                {
                    "lat": 13.9389,
                    "lng": 121.1698
                },
                {
                    "lat": 13.9363,
                    "lng": 121.1662
                },
                {
                    "lat": 13.938,
                    "lng": 121.165
                },
                {
                    "lat": 13.9402,
                    "lng": 121.1659
                },
                {
                    "lat": 13.9412,
                    "lng": 121.1687
                },
                {
                    "lat": 13.9389,
                    "lng": 121.1698
                }
            ],
            "fillColor": "#B0E0E6",  // PowderBlue for Poblacion Barangay 8
            "strokeColor": "#4682B4", // SteelBlue for Poblacion Barangay 8
            labelPosition: { lat: 13.939258402511348, lng: 121.16607776170954 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 9",
            "coordinates": [
                {
                    "lat": 13.9468,
                    "lng": 121.1634
                },
                {
                    "lat": 13.9467,
                    "lng": 121.1646
                },
                {
                    "lat": 13.9426,
                    "lng": 121.1661
                },
                {
                    "lat": 13.9422,
                    "lng": 121.1652
                },
                {
                    "lat": 13.9468,
                    "lng": 121.1634
                }
            ],
            "fillColor": "#FFB6C1",  // LightPink for Poblacion Barangay 9
            "strokeColor": "#FF69B4", // HotPink for Poblacion Barangay 9
            labelPosition: { lat: 13.94516637282792, lng: 121.16488600534603 } // Centroid for label

        },
        {
            "name": "Poblacion Barangay 9-A",
            "coordinates": [
                {
                    "lat": 13.9426,
                    "lng": 121.1661
                },
                {
                    "lat": 13.9405,
                    "lng": 121.1668
                },
                {
                    "lat": 13.9402,
                    "lng": 121.1659
                },
                {
                    "lat": 13.9422,
                    "lng": 121.1652
                },
                {
                    "lat": 13.9426,
                    "lng": 121.1661
                }
            ],
            "fillColor": "#98FB98",  // PaleGreen for Poblacion Barangay 9-A
            "strokeColor": "#00FA9A", // MediumSpringGreen for Poblacion Barangay 9-A
            labelPosition: { lat: 13.941779919621009, lng: 121.16623182410291 } // Centroid for label

        },
        {
            "name": "Pusil",
            "coordinates": [
                {
                    "lat": 13.9708,
                    "lng": 121.1576
                },
                {
                    "lat": 13.9791,
                    "lng": 121.153
                },
                {
                    "lat": 13.9878,
                    "lng": 121.1515
                },
                {
                    "lat": 13.9936,
                    "lng": 121.1487
                },
                {
                    "lat": 13.9953,
                    "lng": 121.152
                },
                {
                    "lat": 13.9791,
                    "lng": 121.1603
                },
                {
                    "lat": 13.9708,
                    "lng": 121.1576
                }
            ],
            "fillColor": "#FFA07A",  // LightSalmon for Pusil
            "strokeColor": "#FF4500", // OrangeRed for Pusil
            labelPosition: { lat: 13.98337007011468, lng: 121.15514320637187 } // Centroid for label

        },
        {
            "name": "Quezon",
            "coordinates": [
                {
                    "lat": 13.8849,
                    "lng": 121.1466
                },
                {
                    "lat": 13.8835,
                    "lng": 121.1328
                },
                {
                    "lat": 13.8855,
                    "lng": 121.1231
                },
                {
                    "lat": 13.8861,
                    "lng": 121.122
                },
                {
                    "lat": 13.8938,
                    "lng": 121.1231
                },
                {
                    "lat": 13.8973,
                    "lng": 121.1251
                },
                {
                    "lat": 13.8989,
                    "lng": 121.1422
                },
                {
                    "lat": 13.8904,
                    "lng": 121.1466
                },
                {
                    "lat": 13.8849,
                    "lng": 121.1466
                }
            ],
            "fillColor": "#ADD8E6",  // LightBlue for Quezon
            "strokeColor": "#87CEEB", // SkyBlue for Quezon
            labelPosition: { lat: 13.88973671123415, lng: 121.13331215442791 } // Centroid for label

        },
        {
            "name": "Rizal",
            "coordinates": [
                {
                    "lat": 13.8646,
                    "lng": 121.1593
                },
                {
                    "lat": 13.8676,
                    "lng": 121.1515
                },
                {
                    "lat": 13.8763,
                    "lng": 121.1563
                },
                {
                    "lat": 13.8902,
                    "lng": 121.1559
                },
                {
                    "lat": 13.8946,
                    "lng": 121.1626
                },
                {
                    "lat": 13.8795,
                    "lng": 121.1647
                },
                {
                    "lat": 13.8667,
                    "lng": 121.1696
                },
                {
                    "lat": 13.8616,
                    "lng": 121.1648
                },
                {
                    "lat": 13.8646,
                    "lng": 121.1593
                }
            ],
            "fillColor": "#7FFF00",  // Chartreuse for Rizal
            "strokeColor": "#32CD32", // LimeGreen for Rizal
            labelPosition: { lat: 13.875144638785196, lng: 121.16261632956784 } // Centroid for label

        },
        {
            "name": "Sabang",
            "coordinates": [
                {
                    "lat": 13.9462,
                    "lng": 121.1654
                },
                {
                    "lat": 13.948,
                    "lng": 121.1664
                },
                {
                    "lat": 13.9512,
                    "lng": 121.1639
                },
                {
                    "lat": 13.9552,
                    "lng": 121.1638
                },
                {
                    "lat": 13.9575,
                    "lng": 121.1717
                },
                {
                    "lat": 13.9607,
                    "lng": 121.1749
                },
                {
                    "lat": 13.9589,
                    "lng": 121.1759
                },
                {
                    "lat": 13.9567,
                    "lng": 121.1745
                },
                {
                    "lat": 13.9469,
                    "lng": 121.1798
                },
                {
                    "lat": 13.9418,
                    "lng": 121.1687
                },
                {
                    "lat": 13.9462,
                    "lng": 121.1654
                }
            ],
            "fillColor": "#FFD700",  // Gold for Sabang
            "strokeColor": "#FFA500", // Orange for Sabang
            labelPosition: { lat: 13.951011763245607, lng: 121.17401058769768 } // Centroid for label

        },
        {
            "name": "Sampaguita",
            "coordinates": [
                {
                    "lat": 13.9252,
                    "lng": 121.1461
                },
                {
                    "lat": 13.9172,
                    "lng": 121.1491
                },
                {
                    "lat": 13.9148,
                    "lng": 121.1478
                },
                {
                    "lat": 13.9122,
                    "lng": 121.1497
                },
                {
                    "lat": 13.9097,
                    "lng": 121.1494
                },
                {
                    "lat": 13.9076,
                    "lng": 121.1458
                },
                {
                    "lat": 13.9136,
                    "lng": 121.1414
                },
                {
                    "lat": 13.9192,
                    "lng": 121.1405
                },
                {
                    "lat": 13.922,
                    "lng": 121.1374
                },
                {
                    "lat": 13.927,
                    "lng": 121.1402
                },
                {
                    "lat": 13.9288,
                    "lng": 121.1434
                },
                {
                    "lat": 13.9252,
                    "lng": 121.1461
                }
            ],
            "fillColor": "#FF69B4",  // HotPink for Sampaguita
            "strokeColor": "#FF1493", // DeepPink for Sampaguita
            labelPosition: { lat: 13.919055730954877, lng: 121.14595601606216 } // Centroid for label

        },
        {
            "name": "San Benito",
            "coordinates": [
                {
                    "lat": 13.9516,
                    "lng": 121.2166
                },
                {
                    "lat": 13.9474,
                    "lng": 121.2171
                },
                {
                    "lat": 13.9439,
                    "lng": 121.2156
                },
                {
                    "lat": 13.9416,
                    "lng": 121.2166
                },
                {
                    "lat": 13.9383,
                    "lng": 121.2216
                },
                {
                    "lat": 13.9327,
                    "lng": 121.2234
                },
                {
                    "lat": 13.922,
                    "lng": 121.2061
                },
                {
                    "lat": 13.9397,
                    "lng": 121.202
                },
                {
                    "lat": 13.9418,
                    "lng": 121.2104
                },
                {
                    "lat": 13.9491,
                    "lng": 121.2108
                },
                {
                    "lat": 13.9509,
                    "lng": 121.2122
                },
                {
                    "lat": 13.9516,
                    "lng": 121.2166
                }
            ],
            "fillColor": "#FF6347",  // Tomato for San Benito
            "strokeColor": "#FF4500", // OrangeRed for San Benito
            labelPosition: { lat: 13.935029027703557, lng: 121.21341293870117 } // Centroid for label

        },
        {
            "name": "San Carlos",
            "coordinates": [
                {
                    "lat": 13.9559,
                    "lng": 121.1487
                },
                {
                    "lat": 13.9556,
                    "lng": 121.1548
                },
                {
                    "lat": 13.9497,
                    "lng": 121.1535
                },
                {
                    "lat": 13.9471,
                    "lng": 121.1522
                },
                {
                    "lat": 13.9424,
                    "lng": 121.1447
                },
                {
                    "lat": 13.9515,
                    "lng": 121.1396
                },
                {
                    "lat": 13.9559,
                    "lng": 121.1487
                }
            ],
            "fillColor": "#4682B4",  // SteelBlue for San Carlos
            "strokeColor": "#1E90FF", // DodgerBlue for San Carlos
            labelPosition: { lat: 13.94988188202679, lng: 121.14461895569761 } // Centroid for label

        },
        {
            "name": "San Celestino",
            "coordinates": [
                {
                    "lat": 13.9327,
                    "lng": 121.2234
                },
                {
                    "lat": 13.9307,
                    "lng": 121.2258
                },
                {
                    "lat": 13.9262,
                    "lng": 121.2251
                },
                {
                    "lat": 13.9237,
                    "lng": 121.227
                },
                {
                    "lat": 13.9144,
                    "lng": 121.2354
                },
                {
                    "lat": 13.9126,
                    "lng": 121.2402
                },
                {
                    "lat": 13.9085,
                    "lng": 121.2414
                },
                {
                    "lat": 13.9051,
                    "lng": 121.2379
                },
                {
                    "lat": 13.9085,
                    "lng": 121.2329
                },
                {
                    "lat": 13.9146,
                    "lng": 121.2304
                },
                {
                    "lat": 13.9183,
                    "lng": 121.223
                },
                {
                    "lat": 13.9216,
                    "lng": 121.2234
                },
                {
                    "lat": 13.9304,
                    "lng": 121.2196
                },
                {
                    "lat": 13.9327,
                    "lng": 121.2234
                }
            ],
            "fillColor": "#7FFFD4",  // Aquamarine for San Celestino
            "strokeColor": "#20B2AA", // LightSeaGreen for San Celestino
            labelPosition: { lat: 13.91923919314475, lng: 121.22756781266494 } // Centroid for label

        },
        {
            "name": "San Francisco",
            "coordinates": [
                {
                    "lat": 13.9051,
                    "lng": 121.2379
                },
                {
                    "lat": 13.9085,
                    "lng": 121.2414
                },
                {
                    "lat": 13.9023,
                    "lng": 121.2444
                },
                {
                    "lat": 13.8959,
                    "lng": 121.2561
                },
                {
                    "lat": 13.8957,
                    "lng": 121.2613
                },
                {
                    "lat": 13.8915,
                    "lng": 121.2651
                },
                {
                    "lat": 13.8934,
                    "lng": 121.2701
                },
                {
                    "lat": 13.8904,
                    "lng": 121.2721
                },
                {
                    "lat": 13.8871,
                    "lng": 121.2644
                },
                {
                    "lat": 13.8888,
                    "lng": 121.2502
                },
                {
                    "lat": 13.8921,
                    "lng": 121.2387
                },
                {
                    "lat": 13.8964,
                    "lng": 121.2334
                },
                {
                    "lat": 13.9051,
                    "lng": 121.2379
                }
            ],
            "fillColor": "#BA55D3",  // MediumOrchid for San Francisco
            "strokeColor": "#8A2BE2", // BlueViolet for San Francisco
            labelPosition: { lat: 13.893781283643701, lng: 121.24636300992306 } // Centroid for label

        },
        {
            "name": "San Guillermo",
            "coordinates": [
                {
                    "lat": 13.8946,
                    "lng": 121.1626
                },
                {
                    "lat": 13.8958,
                    "lng": 121.1664
                },
                {
                    "lat": 13.893,
                    "lng": 121.166
                },
                {
                    "lat": 13.8875,
                    "lng": 121.1708
                },
                {
                    "lat": 13.8754,
                    "lng": 121.1695
                },
                {
                    "lat": 13.8694,
                    "lng": 121.1729
                },
                {
                    "lat": 13.8667,
                    "lng": 121.1696
                },
                {
                    "lat": 13.8795,
                    "lng": 121.1647
                },
                {
                    "lat": 13.8946,
                    "lng": 121.1626
                }
            ],
            "fillColor": "#98FB98",  // PaleGreen for San Guillermo
            "strokeColor": "#32CD32", // LimeGreen for San Guillermo
            labelPosition: { lat: 13.881446611797523, lng: 121.16755468584597 } // Centroid for label

        },
        {
            "name": "San Jose",
            "coordinates": [
                {
                    "lat": 13.9171,
                    "lng": 121.1985
                },
                {
                    "lat": 13.9265,
                    "lng": 121.1892
                },
                {
                    "lat": 13.9469,
                    "lng": 121.1798
                },
                {
                    "lat": 13.9508,
                    "lng": 121.1891
                },
                {
                    "lat": 13.9418,
                    "lng": 121.192
                },
                {
                    "lat": 13.9297,
                    "lng": 121.1932
                },
                {
                    "lat": 13.919,
                    "lng": 121.2016
                },
                {
                    "lat": 13.9171,
                    "lng": 121.1985
                }
            ],
            "fillColor": "#EE82EE",  // Violet for San Jose
            "strokeColor": "#DA70D6", // Orchid for San Jose
            labelPosition: { lat: 13.944408806553042, lng: 121.18544334079402 } // Centroid for label

        },
        {
            "name": "San Lucas",
            "coordinates": [
                {
                    "lat": 14.0136,
                    "lng": 121.1799
                },
                {
                    "lat": 14.0095,
                    "lng": 121.1661
                },
                {
                    "lat": 14.0191,
                    "lng": 121.1788
                },
                {
                    "lat": 14.0221,
                    "lng": 121.1767
                },
                {
                    "lat": 14.0238,
                    "lng": 121.1775
                },
                {
                    "lat": 14.0274,
                    "lng": 121.1846
                },
                {
                    "lat": 14.0176,
                    "lng": 121.1889
                },
                {
                    "lat": 14.0136,
                    "lng": 121.1799
                }
            ],
            "fillColor": "#B0E0E6",  // PowderBlue for San Lucas
            "strokeColor": "#4682B4", // SteelBlue for San Lucas
            labelPosition: { lat: 14.018259569247107, lng: 121.18080680976442 } // Centroid for label

        },
        {
            "name": "San Salvador",
            "coordinates": [
                {
                    "lat": 13.981,
                    "lng": 121.1219
                },
                {
                    "lat": 13.9841,
                    "lng": 121.1252
                },
                {
                    "lat": 13.9805,
                    "lng": 121.1292
                },
                {
                    "lat": 13.9646,
                    "lng": 121.1379
                },
                {
                    "lat": 13.9621,
                    "lng": 121.1333
                },
                {
                    "lat": 13.9658,
                    "lng": 121.131
                },
                {
                    "lat": 13.9647,
                    "lng": 121.1249
                },
                {
                    "lat": 13.981,
                    "lng": 121.1219
                }
            ],
            "fillColor": "#FFC0CB",  // Pink for San Salvador
            "strokeColor": "#FF69B4", // HotPink for San Salvador
            labelPosition: { lat: 13.972742903382665, lng: 121.1285804518669 } // Centroid for label

        },
        {
            "name": "San Sebastian",
            "coordinates": [
                {
                    "lat": 13.9349,
                    "lng": 121.164
                },
                {
                    "lat": 13.9319,
                    "lng": 121.1617
                },
                {
                    "lat": 13.9329,
                    "lng": 121.1535
                },
                {
                    "lat": 13.9374,
                    "lng": 121.1525
                },
                {
                    "lat": 13.9428,
                    "lng": 121.1558
                },
                {
                    "lat": 13.9349,
                    "lng": 121.164
                }
            ],
            "fillColor": "#FFFFE0",  // LightYellow for San Sebastian
            "strokeColor": "#FFD700", // Gold for San Sebastian
            labelPosition: { lat: 13.938696105225949, lng: 121.15789090057628 } // Centroid for label

        },
        {
            "name": "Santo Niño",
            "coordinates": [
                {
                    "lat": 13.9574,
                    "lng": 121.2591
                },
                {
                    "lat": 13.9509,
                    "lng": 121.2122
                },
                {
                    "lat": 13.9539,
                    "lng": 121.2122
                },
                {
                    "lat": 13.956,
                    "lng": 121.2092
                },
                {
                    "lat": 13.9603,
                    "lng": 121.2087
                },
                {
                    "lat": 13.9653,
                    "lng": 121.2098
                },
                {
                    "lat": 13.9677,
                    "lng": 121.2131
                },
                {
                    "lat": 13.9705,
                    "lng": 121.2129
                },
                {
                    "lat": 13.9729,
                    "lng": 121.215
                },
                {
                    "lat": 13.9757,
                    "lng": 121.2385
                },
                {
                    "lat": 13.9725,
                    "lng": 121.2412
                },
                {
                    "lat": 13.9697,
                    "lng": 121.2591
                },
                {
                    "lat": 13.9647,
                    "lng": 121.2613
                },
                {
                    "lat": 13.9574,
                    "lng": 121.2591
                }
            ],
            "fillColor": "#FA8072",  // Salmon for Santo Niño
            "strokeColor": "#E9967A", // DarkSalmon for Santo Niño
            labelPosition: { lat: 13.96234900891891, lng: 121.22257789403601 } // Centroid for label

        },
        {
            "name": "Santo Toribio",
            "coordinates": [
                {
                    "lat": 13.9038,
                    "lng": 121.2217
                },
                {
                    "lat": 13.9085,
                    "lng": 121.2137
                },
                {
                    "lat": 13.9223,
                    "lng": 121.2068
                },
                {
                    "lat": 13.9304,
                    "lng": 121.2196
                },
                {
                    "lat": 13.9216,
                    "lng": 121.2234
                },
                {
                    "lat": 13.9183,
                    "lng": 121.223
                },
                {
                    "lat": 13.9146,
                    "lng": 121.2304
                },
                {
                    "lat": 13.9085,
                    "lng": 121.2329
                },
                {
                    "lat": 13.9051,
                    "lng": 121.2379
                },
                {
                    "lat": 13.8953,
                    "lng": 121.2337
                },
                {
                    "lat": 13.8966,
                    "lng": 121.23
                },
                {
                    "lat": 13.9038,
                    "lng": 121.2217
                }
            ],
            "fillColor": "#FFE4B5",  // Moccasin for Santo Toribio
            "strokeColor": "#FFA07A", // LightSalmon for Santo Toribio
            labelPosition: { lat: 13.917424307619093, lng: 121.21575221741462 } // Centroid for label

        },
        {
            "name": "Sapac",
            "coordinates": [
                {
                    "lat": 13.9534,
                    "lng": 121.195
                },
                {
                    "lat": 13.9563,
                    "lng": 121.2
                },
                {
                    "lat": 13.9598,
                    "lng": 121.2002
                },
                {
                    "lat": 13.9644,
                    "lng": 121.1938
                },
                {
                    "lat": 13.9682,
                    "lng": 121.2024
                },
                {
                    "lat": 13.9689,
                    "lng": 121.2135
                },
                {
                    "lat": 13.9653,
                    "lng": 121.2098
                },
                {
                    "lat": 13.9603,
                    "lng": 121.2087
                },
                {
                    "lat": 13.956,
                    "lng": 121.2092
                },
                {
                    "lat": 13.9539,
                    "lng": 121.2122
                },
                {
                    "lat": 13.9418,
                    "lng": 121.2104
                },
                {
                    "lat": 13.9397,
                    "lng": 121.202
                },
                {
                    "lat": 13.9486,
                    "lng": 121.1995
                },
                {
                    "lat": 13.9534,
                    "lng": 121.195
                }
            ],
            "fillColor": "#FFD700",  // Gold for Sapac
            "strokeColor": "#FF8C00", // DarkOrange for Sapac
            labelPosition: { lat: 13.951962977843962, lng: 121.20199768411977 } // Centroid for label

        },
        {
            "name": "Sico",
            "coordinates": [
                {
                    "lat": 13.9504,
                    "lng": 121.1342
                },
                {
                    "lat": 13.9553,
                    "lng": 121.1378
                },
                {
                    "lat": 13.9474,
                    "lng": 121.1408
                },
                {
                    "lat": 13.9424,
                    "lng": 121.1447
                },
                {
                    "lat": 13.9381,
                    "lng": 121.1378
                },
                {
                    "lat": 13.9417,
                    "lng": 121.1345
                },
                {
                    "lat": 13.9504,
                    "lng": 121.1342
                }
            ],
            "fillColor": "#00FF7F",  // SpringGreen for Sico
            "strokeColor": "#2E8B57", // SeaGreen for Sico
            labelPosition: { lat: 13.947111033588692, lng: 121.13799760061947 } // Centroid for label

        },
        {
            "name": "Talisay",
            "coordinates": [
                {
                    "lat": 13.9644,
                    "lng": 121.1938
                },
                {
                    "lat": 13.9769,
                    "lng": 121.1911
                },
                {
                    "lat": 13.9824,
                    "lng": 121.212
                },
                {
                    "lat": 13.985,
                    "lng": 121.2164
                },
                {
                    "lat": 13.9829,
                    "lng": 121.2242
                },
                {
                    "lat": 13.9843,
                    "lng": 121.2306
                },
                {
                    "lat": 13.9915,
                    "lng": 121.2392
                },
                {
                    "lat": 13.9886,
                    "lng": 121.2425
                },
                {
                    "lat": 13.9913,
                    "lng": 121.2479
                },
                {
                    "lat": 13.9916,
                    "lng": 121.2607
                },
                {
                    "lat": 13.9697,
                    "lng": 121.2591
                },
                {
                    "lat": 13.9725,
                    "lng": 121.2412
                },
                {
                    "lat": 13.9757,
                    "lng": 121.2385
                },
                {
                    "lat": 13.9751,
                    "lng": 121.2278
                },
                {
                    "lat": 13.9733,
                    "lng": 121.2236
                },
                {
                    "lat": 13.9742,
                    "lng": 121.2176
                },
                {
                    "lat": 13.9714,
                    "lng": 121.2133
                },
                {
                    "lat": 13.9689,
                    "lng": 121.2135
                },
                {
                    "lat": 13.9682,
                    "lng": 121.2024
                },
                {
                    "lat": 13.9644,
                    "lng": 121.1938
                }
            ],
            "fillColor": "#D2691E",  // Chocolate for Talisay
            "strokeColor": "#8B4513", // SaddleBrown for Talisay
            labelPosition: { lat: 13.971791116547639, lng: 121.20498380982168 } // Centroid for label

        },
        {
            "name": "Tambo",
            "coordinates": [
                {
                    "lat": 13.9359,
                    "lng": 121.1274
                },
                {
                    "lat": 13.9406,
                    "lng": 121.1254
                },
                {
                    "lat": 13.9504,
                    "lng": 121.1342
                },
                {
                    "lat": 13.9417,
                    "lng": 121.1345
                },
                {
                    "lat": 13.9381,
                    "lng": 121.1378
                },
                {
                    "lat": 13.9359,
                    "lng": 121.1274
                }
            ],
            "fillColor": "#B22222",  // FireBrick for Tambo
            "strokeColor": "#8B0000", // DarkRed for Tambo
            labelPosition: { lat: 13.942636136732647, lng: 121.13239893138983 } // Centroid for label

        },
        {
            "name": "Tangob",
            "coordinates": [
                {
                    "lat": 13.9508,
                    "lng": 121.1891
                },
                {
                    "lat": 13.9534,
                    "lng": 121.195
                },
                {
                    "lat": 13.9471,
                    "lng": 121.2001
                },
                {
                    "lat": 13.922,
                    "lng": 121.2061
                },
                {
                    "lat": 13.919,
                    "lng": 121.2016
                },
                {
                    "lat": 13.9297,
                    "lng": 121.1932
                },
                {
                    "lat": 13.9418,
                    "lng": 121.192
                },
                {
                    "lat": 13.9508,
                    "lng": 121.1891
                }
            ],
            "fillColor": "#4682B4",  // SteelBlue for Tangob
            "strokeColor": "#4169E1", // RoyalBlue for Tangob
            labelPosition: { lat: 13.93751933144121, lng: 121.19608634090771 } // Centroid for label
        },
        {
            "name": "Tanguay",
            "coordinates": [
                {
                    "lat": 13.9841,
                    "lng": 121.1252
                },
                {
                    "lat": 13.9948,
                    "lng": 121.1309
                },
                {
                    "lat": 13.9992,
                    "lng": 121.1386
                },
                {
                    "lat": 13.9785,
                    "lng": 121.1463
                },
                {
                    "lat": 13.9763,
                    "lng": 121.1447
                },
                {
                    "lat": 13.9665,
                    "lng": 121.1501
                },
                {
                    "lat": 13.9664,
                    "lng": 121.1427
                },
                {
                    "lat": 13.9646,
                    "lng": 121.1379
                },
                {
                    "lat": 13.9757,
                    "lng": 121.1329
                },
                {
                    "lat": 13.9841,
                    "lng": 121.1252
                }
            ],
            "fillColor": "#2E8B57",  // SeaGreen for Tanguay
            "strokeColor": "#006400", // DarkGreen for Tanguay
            labelPosition: { lat: 13.98182448107754, lng: 121.1396732376614 } // Centroid for label

        },
        {
            "name": "Tibig",
            "coordinates": [
                {
                    "lat": 13.9666,
                    "lng": 121.1509
                },
                {
                    "lat": 13.9604,
                    "lng": 121.1535
                },
                {
                    "lat": 13.9559,
                    "lng": 121.1487
                },
                {
                    "lat": 13.9515,
                    "lng": 121.1396
                },
                {
                    "lat": 13.9621,
                    "lng": 121.1333
                },
                {
                    "lat": 13.9664,
                    "lng": 121.1427
                },
                {
                    "lat": 13.9666,
                    "lng": 121.1509
                }
            ],
            "fillColor": "#8A2BE2",  // BlueViolet for Tibig
            "strokeColor": "#4B0082", // Indigo for Tibig
            labelPosition: { lat: 13.960323035675419, lng: 121.1453406166284 } // Centroid for label
        },
        {
            "name": "Tipacan",
            "coordinates": [
                {
                    "lat": 13.9122,
                    "lng": 121.2037
                },
                {
                    "lat": 13.9171,
                    "lng": 121.1985
                },
                {
                    "lat": 13.9223,
                    "lng": 121.2068
                },
                {
                    "lat": 13.9139,
                    "lng": 121.21
                },
                {
                    "lat": 13.9073,
                    "lng": 121.2155
                },
                {
                    "lat": 13.9066,
                    "lng": 121.211
                },
                {
                    "lat": 13.9122,
                    "lng": 121.2037
                }
            ],
            "fillColor": "#FF6347",  // Tomato for Tipacan
            "strokeColor": "#CD5C5C", // IndianRed for Tipacan
            labelPosition: { lat: 13.914202429543424, lng: 121.20663729950428 }
        } // Centroid for label
    ];


    // Loop through the region coordinates and add polygons to the map
    regionCoordinates.forEach(function (region) {

        const labelPosition = {
            lat: Number(region.labelPosition.lat),
            lng: Number(region.labelPosition.lng)
        };


        var polygon = new google.maps.Polygon({
            paths: region.coordinates,
            strokeColor: region.strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: region.fillColor,
            fillOpacity: 0.35
        });

        polygon.setMap(map);

        var markerLabel = new google.maps.Marker({
            position: region.labelPosition,
            map: map,
            label: {
                text: region.name,
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 'bold'
            },
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 0 // No icon, just the label
            }
        });

        // Optionally, you can add an info window to display the region name
        var infoWindow = new google.maps.InfoWindow({
            content: region.name
        });

        google.maps.event.addListener(polygon, 'click', function (event) {
            infoWindow.setPosition(event.latLng);
            infoWindow.open(map);
        });
    });

    // Add a marker for the Vet Clinic
    var vetClinicLocation = {
        lat: 13.941875,
        lng: 121.164429,
    };

    var vetClinicMarker = new google.maps.Marker({
        position: vetClinicLocation,
        map: map,
        title: "Vet Clinic",
        icon: {
            url: 'images/clinic.png', // Path to your clinic icon
            scaledSize: new google.maps.Size(30, 30) // Size of the icon
        }
    });
    // Load animal data from the server when the page is initialized
    loadAnimalData();
}

// Event Listeners for Species Dropdown
document.querySelectorAll('#speciesDropdownButton + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const species = item.getAttribute('data-value');
        const button = document.getElementById('speciesDropdownButton');
        button.innerHTML = item.innerHTML; // Set button HTML to include icon and text
        button.dataset.value = species; // Set species value
        loadAnimalData(); // Reload data when species is selected
    });
});

// Search functionality for barangays
document.getElementById('barangaySearch').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const barangays = document.querySelectorAll('#barangayList li');

    barangays.forEach(function (barangay) {
        const barangayName = barangay.querySelector('label').innerText.toLowerCase();
        barangay.style.display = barangayName.includes(query) ? '' : 'none';
    });
});

// Select All functionality for Barangays
const selectAllCheckbox = document.getElementById('selectAllBarangays');
const barangayCheckboxes = document.querySelectorAll('#barangayList .form-check-input:not(#selectAllBarangays)');

// Add an event listener for the "Select All" checkbox
selectAllCheckbox.addEventListener('change', function () {
    const isChecked = this.checked;
    barangayCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    handleBarangaySelection();
    loadAnimalData(); // Reload data when selection changes
});

// Event Listeners for each Barangay checkbox
barangayCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        handleBarangaySelection();
        loadAnimalData();

        // Check if all barangays are selected
        const allChecked = Array.from(barangayCheckboxes).every(checkbox => checkbox.checked);
        selectAllCheckbox.checked = allChecked; // Update "Select All" checkbox
    });
});

// Event Listeners for Vaccine Filter Radio Buttons
document.querySelectorAll('input[name="vaccineStatus"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const vaccine = document.querySelector('input[name="vaccineStatus"]:checked').value;
        loadAnimalData(); // Reload data when vaccine option is selected
    });
});



// Get all checkbox elements for registered and stray
const registeredCheckbox = document.getElementById('registeredCheckbox');
const strayCheckbox = document.getElementById('strayCheckbox');

// Add event listeners to checkboxes with debounce to avoid rapid triggers
if (registeredCheckbox) registeredCheckbox.addEventListener('change', debounce(loadAnimalData, 300));
if (strayCheckbox) strayCheckbox.addEventListener('change', debounce(loadAnimalData, 300));

// Event Listeners for Month and Year checkboxes
const monthCheckboxes = document.querySelectorAll('#monthList .form-check-input');
const yearCheckboxes = document.querySelectorAll('#yearList .form-check-input');

monthCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', debounce(() => {
        handleMonthSelection(); // Update month selection
        loadAnimalData(); // Reload data when month changes
    }, 300));
});

yearCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', debounce(() => {
        handleYearSelection(); // Update year selection
        loadAnimalData(); // Reload data when year changes
    }, 300));
});

// Function to handle Month Checkbox Selection
function handleMonthSelection() {
    const monthCheckboxes = document.querySelectorAll('#monthList .form-check-input');
    const selectedMonths = [];

    monthCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedMonths.push(checkbox.value);
        }
    });

    const monthButton = document.getElementById('monthDropdownButton');
    monthButton.innerHTML = selectedMonths.length > 0 ? selectedMonths.join(', ') : 'Select Month';
    monthButton.dataset.value = selectedMonths.join(',');
}

// Function to handle Year Checkbox Selection
function handleYearSelection() {
    const yearCheckboxes = document.querySelectorAll('#yearList .form-check-input');
    const selectedYears = [];

    yearCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedYears.push(checkbox.value);
        }
    });

    const yearButton = document.getElementById('yearDropdownButton');
    yearButton.innerHTML = selectedYears.length > 0 ? selectedYears.join(', ') : 'Select Year';
    yearButton.dataset.value = selectedYears.join(',');
}

// Function to handle Barangay Checkbox Selection
function handleBarangaySelection() {
    const checkboxes = document.querySelectorAll('#barangayList .form-check-input:not(#selectAllBarangays)');
    const selectedBarangays = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedBarangays.push(checkbox.value);
        }
    });

    const button = document.getElementById('barangayDropdownButton');
    button.innerHTML = selectedBarangays.length > 0 ? selectedBarangays.join(', ') : 'Select Barangay';
    button.dataset.value = selectedBarangays.join(',');

    // Update "Select All" checkbox state based on individual selections
    const selectAllCheckbox = document.getElementById('selectAllBarangays');
    selectAllCheckbox.checked = checkboxes.length === selectedBarangays.length;
}

// Function to clear existing markers from the map
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null)); // Remove each marker from the map
    markers = []; // Reset the markers array
}

// Function to group animals by location and species
function groupAnimalsByLocationAndSpecies(animals) {
    const grouped = {};

    animals.forEach(animal => {
        if (animal.latitude && animal.longitude) {
            const key = `${animal.latitude},${animal.longitude}`;

            if (!grouped[key]) {
                grouped[key] = { species: {}, latitude: animal.latitude, longitude: animal.longitude };
            }

            // Count species in the same location
            if (!grouped[key].species[animal.species]) {
                grouped[key].species[animal.species] = [];
            }
            grouped[key].species[animal.species].push(animal);
        }
    });

    return Object.values(grouped); // Return grouped locations as an array
}

// Function to add markers to the map with species clustering and counts
function addMarkers(animals) {
    const groupedAnimals = groupAnimalsByLocationAndSpecies(animals);

    groupedAnimals.forEach(group => {
        if (group.latitude && group.longitude) {
            const position = new google.maps.LatLng(parseFloat(group.latitude), parseFloat(group.longitude));
            const speciesCount = Object.keys(group.species).length;
            let markerLabel = '';

            if (speciesCount === 1) {
                // If there is only one species, display the count of that species
                const species = Object.keys(group.species)[0];
                const count = group.species[species].length;
                markerLabel = count > 1 ? `${count}` : ''; // Show count if more than 1

                const marker = new google.maps.Marker({
                    position,
                    map: map,
                    icon: {
                        url: getAnimalIcon(species), // Use species-specific icon
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: markerLabel ? { // Only show label if there is a count
                        text: markerLabel,
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    } : null
                });

                // Info window for the single species
                const animalInfo = group.species[species].map(animal =>
                    `Registered: ${animal.register} <br> Vaccine: ${animal.vaccine_type || 'N/A'}`
                ).join('<br><br>');

                const infoWindow = new google.maps.InfoWindow({
                    content: `Species: ${species} <br><br>${animalInfo}`
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });

                markers.push(marker); // Add marker to array
            } else {
                // If there are multiple species, use a custom icon and show species details in the info window
                const marker = new google.maps.Marker({
                    position,
                    map: map,
                    icon: {
                        url: 'images/livestock.png', // Custom icon for multiple species
                        scaledSize: new google.maps.Size(32, 32)
                    }
                });

                // Build info window content for multiple species
                let infoContent = '<strong>Species in this location:</strong><br>';
                Object.entries(group.species).forEach(([species, animals]) => {
                    infoContent += `<strong>${species}</strong> (${animals.length})<br>`;
                    animals.forEach(animal => {
                        infoContent += `Registered: ${animal.register} <br> Vaccine: ${animal.vaccine_type || 'N/A'}<br>`;
                    });
                    infoContent += '<br>';
                });
                infoContent += `<strong>Total Species:</strong> ${speciesCount}`; // Add total species count

                const infoWindow = new google.maps.InfoWindow({
                    content: infoContent
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });

                markers.push(marker); // Add marker to array
            }
        }
    });
}

// Function to get the animal icon based on species
function getAnimalIcon(species) {
    const icons = {
        dog: 'images/happy.png',
        cat: 'images/kitty.png',
        cow: 'images/cow.png',
        horse: 'images/horse.png'
    };
    return icons[species.toLowerCase()] || 'images/vet.jpg';
}

// Function to load animal data from the server based on filters
function loadAnimalData() {
    const speciesDropdown = document.getElementById('speciesDropdownButton');
    const barangayDropdown = document.getElementById('barangayDropdownButton');
    const registeredCheckbox = document.getElementById('registeredCheckbox');
    const strayCheckbox = document.getElementById('strayCheckbox');
    const vaccineRadio = document.querySelector('input[name="vaccineStatus"]:checked'); // Get selected vaccine radio button

    // Capture selected month and year filters
    const selectedMonths = Array.from(document.querySelectorAll('#monthList .form-check-input:checked')).map(input => input.value);
    const selectedYears = Array.from(document.querySelectorAll('#yearList .form-check-input:checked')).map(input => input.value);

    const species = speciesDropdown ? speciesDropdown.dataset.value || 'all' : 'all';
    const vaccinated = vaccineRadio ? vaccineRadio.value || 'all' : 'all'; // Use 'yes', 'no', or 'all'
    const barangay = barangayDropdown ? barangayDropdown.dataset.value.split(',') || [] : [];
    const registered = registeredCheckbox ? (registeredCheckbox.checked ? 'yes' : 'all') : 'all';
    const stray = strayCheckbox ? (strayCheckbox.checked ? 'yes' : 'all') : 'all';

    const ajaxData = {
        species,
        registered,
        stray,
        vaccinated, // Send vaccinated status from radio buttons
        barangay,
        months: selectedMonths,  // Send selected months
        years: selectedYears     // Send selected years
    };

    fetch('http://localhost/final/backend/animalpopulation.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ajaxData)
    })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                clearMarkers(); // Clear the existing markers
                addMarkers(data); // Add new markers from the server response
            } else if (data.error) {
                console.error('Server Error:', data.error);
            } else {
                console.error('Unexpected response format:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to debounce requests to avoid multiple rapid triggers
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Initialize the map once the window loads
window.onload = populationMap;

