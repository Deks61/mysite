
const map = L.map('map').setView([55.76, 37.64], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markers = [
    {
        coords: [55.76, 37.64],
        popup: 'Квартира в центре',
        type: 'apartment',
    },
    {
        coords: [55.78, 37.60],
        popup: 'Загородный дом',
        type: 'house',
    },
    {
        coords: [55.74, 37.66],
        popup: 'Офисное здание',
        type: 'commercial',
    },
];

let leafletMarkers = [];

function loadMarkers(type) {
    leafletMarkers.forEach(m => map.removeLayer(m));
    leafletMarkers = [];

    markers
        .filter(m => type === 'all' || m.type === type)
        .forEach(m => {
            const marker = L.marker(m.coords)
                .addTo(map)
                .bindPopup(m.popup);
            leafletMarkers.push(marker);
        });
}

function filterMarkers(type) {
    loadMarkers(type);
}

loadMarkers('all');
