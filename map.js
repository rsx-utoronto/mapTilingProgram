var origin = [43.66495, -79.40326]
var mymap = L.map('mapid').setView(origin, 18);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 21,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker(origin).addTo(mymap)
    .bindPopup("<b>Current Location</b><br />706 Spadina.").openPopup();

var imageUrl = 'Imagery/Sat.jpg',
    imageBounds = [[43.661733512186, -79.4087116420269], [43.6679278755375, -79.3959644436836]];
L.imageOverlay(imageUrl, imageBounds).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
