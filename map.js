var map = L.map('apartment-map').setView([44.275798, -88.4348368], 11);

// Add map tiles (from OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Sample Apartment Data (you would likely fetch this from somewhere)
var apartmentData = [
    { lat:42.290780958786115, lng:-83.7529911711026, name: "903 Spring St" },
    { lat: 44.257463070212026, lng: -88.29592852579353, name: "102 Green Way Dr" },
    { lat:44.27737410846741, lng:-88.48821945448182, name: "5335 Brookview Dr" },
    { lat:44.30811445786341, lng:-88.54031027775689, name: "N1841 Reimer Ct" },
    { lat:44.40821905980762, lng:-88.12163486973347, name: "1749 Marissa Ct" },
    { lat:44.25727165045342, lng:-88.44788556244934, name: "2707 W 4th St" },
    { lat:44.25730645541882, lng:-88.44854859313139, name: "2711 W 4th St" },
    { lat:44.25729471353669, lng:-88.44893246983582, name: "2715 W 4th St" },
    { lat:44.27955303722428, lng:-88.3995331866331, name: "500 E Alice St" },
    { lat:44.285442044235495, lng:-88.29403936981736, name: "1708 E Main St" },
    { lat:44.28521902935198, lng:-88.29366655778298, name: "1716 E Main St" },
    { lat:44.40722779046146, lng:-88.12462245776398, name: "1783 Burgoyne Ct" },
    { lat:44.25873941174509, lng:-88.24519957778935, name: "2021 Autumn Ln" },
    { lat:44.25826507071765, lng:-88.24264946244865, name: "2703 Haas Rd" }
];

// Add markers 
for (var i = 0; i < apartmentData.length; i++) {
    var marker = L.marker([apartmentData[i].lat, apartmentData[i].lng]).addTo(map);
    marker.bindPopup("<b>" + apartmentData[i].name + "</b>"); 
}