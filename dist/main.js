var map = L.map('map', {
    center: [40.79483490899272, -97.2784825334822],
    zoom: 4,
    zoomControl: false,
    measureControl: false,
    attributionControl: false
});
L.control.zoom(
    { position: 'topleft' }
).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//add map scale
L.control.scale().addTo(map);


// L.geoJSON(data).addTo(map);
// var collegiate = L.geoJSON(collegiate, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, {
//             radius: 4,
//             fillColor: "red",
//             color: "#000",
//             weight: 1,
//             opacity: 1,
//             fillOpacity: 0.8
//         });
//     },
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup(feature.properties.Status);
//     }
// }).addTo(map);

var collegiateFT = L.geoJSON(collegiate, {
    pointToLayer: function (feature, latlng) {
      // Create a marker with custom styling
      return L.circleMarker(latlng, {
        radius: 4,
        fillColor: "red",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function (feature, layer) {
      // Bind a popup to each marker
      layer.bindPopup(feature.properties.Status);
    },
    filter: function (feature, layer) {
      // Filter condition based on a status (e.g., 'Status')
      return feature.properties.Status === 'Full Time';
    }
  }).addTo(map);
  
var collegiatePT = L.geoJSON(collegiate, {
    pointToLayer: function (feature, latlng) {
      // Create a marker with custom styling
      return L.circleMarker(latlng, {
        radius: 4,
        fillColor: "red",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function (feature, layer) {
      // Bind a popup to each marker
      layer.bindPopup(feature.properties.Status);
    },
    filter: function (feature, layer) {
      // Filter condition based on a status (e.g., 'Status')
      return feature.properties.Status === 'Part Time';
    }
  }).addTo(map);
  
  var collegiateNAV = L.geoJSON(collegiate, {
    pointToLayer: function (feature, latlng) {
      // Create a marker with custom styling
      return L.circleMarker(latlng, {
        radius: 4,
        fillColor: "red",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function (feature, layer) {
      // Bind a popup to each marker
      layer.bindPopup(feature.properties.Status);
    },
    filter: function (feature, layer) {
      // Filter condition based on a status (e.g., 'Status')
      return feature.properties.Status === 'NavAssociate';
    }
  }).addTo(map);

  var overlaysTree = {
    label: 'Points of Interest',
    selectAllCheckbox: 'Un/select all',
    children: [
        {
            label: 'Europe',
            selectAllCheckbox: true,
            children: [
                {
                    label: 'France',
                    selectAllCheckbox: true,
                    children: [
                        { label: 'Tour Eiffel', layer: collegiateFT },
                        { label: 'Notre Dame', layer: collegiatePT },
                        { label: 'Louvre', layer: collegiateNAV },
                    ]
                }
            ]
        }
    ]
}  

var d4l = L.geoJSON(d4l, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "yellow",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var encore = L.geoJSON(encore, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "green",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var ism = L.geoJSON(ism, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "blue",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var military = L.geoJSON(military, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "cyan",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var nations = L.geoJSON(nations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "purple",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);




//basemaps
var Topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
});

var StreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var Imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

//leaflet layer control
// var baseMaps = {
//     'Open Street Map': OSM,
//     'ESRI Imagery': Imagery,
//     'Carto Positron': Positron
// }

// var featureLayers = {
//     'Collegiate Mission Full Time': collegiateFT,
//     'Collegiate Mission Part Time': collegiatePT,
//     'Collegiate Mission NAV Associate': collegiateNAV,
//     'D4L Mission': d4l,
//     'Encore Mission': encore,
//     'ISM Mission': ism,
//     'Military Mission': military,
//     'Nations Within Mission': nations
//}
var baseTree = [
    {
        label: 'Base Map',
        children: [
            {label: 'OSM', layer: OSM, name: 'OpenStreeMap'},
            {label: 'ESRI Imagery', layer: Imagery, name: 'ESRI Imagery'},
            {label: 'Carto Positron', layer: Positron, name: 'Positron'},
        ]
    },
    {
        label: 'Collegiate Mission',
        children: [
            {label: 'Full Time', layer: collegiateFT},
            {label: 'Part Time', layer: collegiatePT},
            {label: 'NAV Associate', layer: collegiateNAV},
        ]
    },
];
// L.control.layers(baseMaps, featureLayers, { collapsed: false, position: 'topleft' }).addTo(map);
L.control.layers.tree(baseTree,).addTo(map);
//Legend
var breaks = [17, 14, 11, 8, 5, 3, 0];
var labels = ['Legend', 'Collegiate Mission', 'D4L Mission', 'Encore Mission', 'ISM Mission', 'Military Mission', 'Nations Within Mission'];
function getColor(d) {
    return d >= breaks[0] ? '#' :
        d >= breaks[1] ? "red" :
            d >= breaks[2] ? "yellow" :
                d >= breaks[3] ? "green" :
                    d >= breaks[4] ? "blue" :
                        d >= breaks[5] ? "cyan" :
                            "purple";
}

var legend = L.control({ position: 'topright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');

    // loop through items and generate legend items each
    for (var i = 0; i < breaks.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(breaks[i]) + ' "></i> ' +
            labels[i] + (breaks ? '' + '<br>' : '');
    }

    return div;
};

legend.addTo(map);
