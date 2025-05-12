
const map = L.map('map').setView([47.222, 39.72], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [
  { type: 'flat', coords: [47.222, 39.72], text: 'Квартира на Ленина' },
  { type: 'house', coords: [47.225, 39.75], text: 'Дом на Садовой' },
  { type: 'commercial', coords: [47.218, 39.73], text: 'Офис на Пушкина' }
];

const leafletMarkers = [];

markers.forEach(item => {
  const m = L.marker(item.coords).addTo(map).bindPopup(item.text);
  m._type = item.type;
  leafletMarkers.push(m);
});

function filterMarkers(type) {
  leafletMarkers.forEach(m => {
    if (type === 'all' || m._type === type) {
      m.addTo(map);
    } else {
      map.removeLayer(m);
    }
  });
}
