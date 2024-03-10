var map = L.map('apartment-map').setView([44.275798, -88.4348368], 11);

// Add map tiles (from OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Sample Apartment Data (you would likely fetch this from somewhere)
var apartmentData = [
    { lat: 42.290083, lng: -83.7554802, name: "903 Spring St" },
    { lat: 44.2574022, lng: -88.3062448, name: "102 Green Way Dr" },
    { lat: 44.276821,   lng: -88.4984762,  name: "5335 Brookview Dr" },
    { lat: 44.3077459,   lng: -88.5507816,  name: "N1841 Reimer Ct" },
    { lat: 44.4077285,   lng: -88.1318487,  name: "1749 Marissa Ct" },
    { lat: 44.2568413,   lng: -88.4583998,  name: "2707 W 4th St" },
    { lat: 44.256538,   lng: -88.458977,  name: "2711 W 4th St" },
    { lat: 44.2568951,   lng: -88.4591463,  name: "2715 W 4th St" },
    { lat: 44.279445,   lng: -88.4098007,  name: "500 E Alice St" },
    { lat: 44.2850119,   lng: -88.3042532,  name: "1708 E Main St" },
    { lat: 44.2850726,   lng: -88.3039448,  name: "1716 E Main St" },
    { lat: 44.407074,   lng: -88.1349007,  name: "1783 Burgoyne Ct" },
    { lat: 44.2582476,   lng: -88.2556709,  name: "2021 Autumn Ln" },
    { lat: 44.2578962,   lng: -88.2531637,  name: "2703 Haas Rd" }
];

// Add markers 
for (var i = 0; i < apartmentData.length; i++) {
    var marker = L.marker([apartmentData[i].lat, apartmentData[i].lng]).addTo(map);
    marker.bindPopup("<b>" + apartmentData[i].name + "</b>"); 
}