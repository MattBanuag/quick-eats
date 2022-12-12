'use strict';

// BRIDGE TO MAP CONTAINER
const marker = new mapboxgl.Marker();

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJhbnVhZyIsImEiOiJjbGJncnE5bXUwNHVsM3Budzg5NXluNzJjIn0.HXWxK3IT6MmGfuZb1_sSbw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 13, // starting zoom
});

// MARKER

// FUNCTIONS
function getLocation(position) {
    const { longitude, latitude } = position.coords;

    // Create a new marker
    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler(error) {
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true
};

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}
