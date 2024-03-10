var map = L.map('apartment-map').setView([44.275798, -88.4348368], 11);

// Add map tiles (from OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Sample Apartment Data (you would likely fetch this from somewhere)
var apartmentData = [
    { lat:42.29008485671466, lng:-83.75292770815138, name: "903 Spring St" },
    { lat:44.257463070212026, lng:-88.29592852579353, name: "102 Green Way Dr" },
    { lat:44.27681247750034, lng:-88.48818228261135, name: "5335 Brookview Dr" },
    { lat:44.30774730568455, lng:-88.54047134468888, name: "N1841 Reimer Ct" },
    { lat:44.40779872957465, lng:-88.12158273564056, name: "1749 Marissa Ct" },
    { lat:44.256833530476975, lng:-88.44810562628841, name: "2707 W 4th St" },
    { lat:44.25655002453873, lng:-88.4486799824084, name: "2711 W 4th St" },
    { lat:44.256907124468746, lng:-88.4488439180097, name: "2715 W 4th St" },
    { lat:44.27943072715661, lng:-88.39950506916861, name: "500 E Alice St" },
    { lat:44.2849595549635, lng:-88.29394062146112, name: "1708 E Main St" },
    { lat:44.2850179243952, lng:-88.2936447689813, name: "1716 E Main St" },
    { lat:44.407080893336946, lng:-88.12458090674129, name: "1783 Burgoyne Ct" },
    { lat:44.25826559563093, lng:-88.2453507945546, name: "2021 Autumn Ln" },
    { lat:44.2579495627761, lng:-88.24290495392975, name: "2703 Haas Rd" }
];

// Add markers 
for (var i = 0; i < apartmentData.length; i++) {
    var marker = L.marker([apartmentData[i].lat, apartmentData[i].lng]).addTo(map);
    marker.bindPopup("<b>" + apartmentData[i].name + "</b>"); 
}