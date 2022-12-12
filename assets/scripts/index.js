'use strict';

// MARKER, OPTIONS, MAP
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJhbnVhZyIsImEiOiJjbGJncnE5bXUwNHVsM3Budzg5NXluNzJjIn0.HXWxK3IT6MmGfuZb1_sSbw';
const marker = new mapboxgl.Marker();
const options = {
    enableHighAccuracy: true
};
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 13, // starting zoom
});


// FUNCTIONS
function getLocation(position) {
    const { longitude, latitude } = position.coords;

    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler(error) {
    console.log(error.message);
}

function validate() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation, errorHandler, options);
    } else {
        console.log('Geolocation is not supported by your browser');
    }
}

validate();


