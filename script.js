// Initialize the map centered on Florida
var map = L.map('map').setView([27.8, -81.7], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker data
const universities = [
  {
    name: "FSU (Florida State University)",
    lat: 30.4446,
    lon: -84.2994,
    survey: "Pokémon: 10%, LEGO: 20%, Avengers: 70%"
  },
  {
    name: "FIU (Florida International University)",
    lat: 25.7569,
    lon: -80.3773,
    survey: "Pokémon: 30%, LEGO: 40%, Avengers: 30%"
  }
];

// Add markers with mouseover popups
universities.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lon]).addTo(map);

  marker.bindPopup(`<b>${loc.name}</b><br>${loc.survey}`);

  marker.on('mouseover', function () {
    this.openPopup();
  });

  marker.on('mouseout', function () {
    this.closePopup();
  });
});
