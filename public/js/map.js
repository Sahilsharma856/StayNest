mapboxgl.accessToken = mapToken;
listing = JSON.parse(listing);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 11 // starting zoom
});

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl
        .Popup({offset: 25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact Location Provided after booking</p>`)
    )
    .addTo(map)