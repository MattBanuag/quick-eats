'use strict';

// BRIDGE TO MAP CONTAINER
const mapContainer = document.querySelector('#map');

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJhbnVhZyIsImEiOiJjbGJncnE5bXUwNHVsM3Budzg5NXluNzJjIn0.HXWxK3IT6MmGfuZb1_sSbw';
const map = new mapboxgl.Map({
    container: mapContainer, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});