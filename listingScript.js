const propertyCards = document.querySelectorAll('.property-card');
const showAllButton = document.getElementById('showAll');
const showSomeButton = document.getElementById('showSome');

showAllButton.addEventListener('click', () => {
    propertyCards.forEach(card => card.classList.add('show'));
});

const bedroomDropdown = document.getElementById('bedroom_dropdown');
const bathroomDropdown = document.getElementById('bathroom_dropdown');
const availDropdown = document.getElementById('avail_dropdown');

showSomeButton.addEventListener('click', () => {
    propertyCards.forEach((card, index) => {
        // Example: Show only cards with even indexes
        if ((card.getAttribute('avail') === 'yes' && availDropdown.selectedIndex == 2) ||
                (card.getAttribute('avail') === 'no' && availDropdown.selectedIndex == 1) ||
                (bedroomDropdown.selectedIndex != 0 && card.getAttribute('bedroom') !== String(bedroomDropdown.selectedIndex)) || 
                (bathroomDropdown.selectedIndex != 0 && card.getAttribute('bath') !== String((bathroomDropdown.selectedIndex+1)/2)))  {
            card.classList.remove('show');
        } else {
            card.classList.add('show');
        }
    });
});


propertyCards.forEach(card => {
  if (card.getAttribute('avail') === 'yes') {
    card.classList.add('js_available'); // Add 'available' class to the card
    card.querySelector('.available').textContent = 'Currently Available!';
  } else {
    // Optional: change the text to 'Currently Unavailable' if avail is not 'yes'
    card.querySelector('.available').textContent = 'Currently Unavailable'; 
    const photoButtons = card.querySelectorAll('.photo_button');
    photoButtons[0].style.display = 'none';
  }
  card.classList.add('show'); // Show every card to start
});


propertyCards.forEach(card => {
  card.querySelector('.beds').textContent = card.getAttribute('bedroom') + ' Bed, ';
});

propertyCards.forEach(card => {
    card.querySelector('.baths').textContent = card.getAttribute('bath') + ' Bath';
});

propertyCards.forEach(card => {
  card.classList.add('show'); // Show every card to start
});

// **DONT REMOVE LINE** START4231

var link = document.querySelector('a[tp="tmp"]');
link = document.querySelector('a[tp="N1841%20Reimer"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2707A%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2707B%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2707C%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2711A%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2711B%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2711C%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2711D%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2715A%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2715B%204th"]');
if (link) link.style.display = 'none';
link = document.querySelector('a[tp="2715C%204th"]');
if (link) link.style.display = 'none';
