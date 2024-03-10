const urlParams = new URLSearchParams(window.location.search);
const imageDirectory = urlParams.get('property');

directory_names = ["903%20Spring"
                   , "102%20Green%20Way"
                   , "104%20Green%20Way"
                   , "5335%20Brookview"
                   , "5337%20Brookview"
                   , "N1841%20Reimer"
                   , "N1843%20Reimer"
                   , "1749%20Marissa"
                   , "1751%20Marissa"
                   , "2707A%204th"
                   , "2707B%204th"
                   , "2707C%204th"
                   , "2707D%204th"
                   , "2711A%204th"
                   , "2711B%204th"
                   , "2711C%204th"
                   , "2711D%204th"
                   , "2715A%204th"
                   , "2715B%204th"
                   , "2715C%204th"
                   , "2715D%204th"
                   , "500%20E%20Alice"
                   , "1708%20E%20Main"
                   , "1710%20E%20Main"
                   , "1716%20E%20Main"
                   , "1718%20E%20Main"
                   , "1783%20Burgoyne"
                   , "1785%20Burgoyne"
                   , "2021%20Autumn"
                   , "2023%20Autumn"
                   , "2701%20Haas"
                   , "2703%20Haas"
                   ]

var link = document.querySelector('div[name="tmp"]');
for(var i=0; i<directory_names.length; i++) {
    var a = 'div[name="'+directory_names[i]+'"]';
    link = document.querySelector(a);
    link.style.display = 'none';
}

for(var i=0; i<directory_names.length; i++) {
    var tmp = directory_names[i].replace(/%20/g, " ")
    if(imageDirectory === tmp) {
        link = document.querySelector('div[name="'+directory_names[i]+'"]');
        link.style.display = 'inline';
        link = document.querySelector('.top-name');
        link.textContent = 'Specific Unit Policies - ' + directory_names[i].replace(/%20/g, " ");
    }
}