const propertyCards = document.querySelectorAll('.property-card');
const showAllButton = document.getElementById('showAll');
const showSomeButton = document.getElementById('showSome');

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
});


propertyCards.forEach(card => {
  card.querySelector('.beds').textContent = card.getAttribute('bedroom') + ' Bed, ';
});

propertyCards.forEach(card => {
    card.querySelector('.baths').textContent = card.getAttribute('bath') + ' Bath';
});

propertyCards.forEach(card => {
  card.getAttribute('avail') === 'yes' || card.getAttribute('featured') === 'yes' ? card.classList.add('show') : card.classList.remove('show');
})

// **DONT REMOVE LINE** START4231

var link = document.querySelector('a[tp="tmp"]');
link = document.querySelector('a[tp="903%20Spring"]');
link.style.display = 'none';
link = document.querySelector('a[tp="102%20Green%20Way"]');
link.style.display = 'none';
link = document.querySelector('a[tp="104%20Green%20Way"]');
link.style.display = 'none';
link = document.querySelector('a[tp="5337%20Brookview"]');
link.style.display = 'none';
link = document.querySelector('a[tp="N1841%20Reimer"]');
link.style.display = 'none';
link = document.querySelector('a[tp="N1843%20Reimer"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2707A%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2707B%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2707C%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2711A%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2711B%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2711C%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2711D%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2715A%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2715B%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2715C%204th"]');
link.style.display = 'none';
link = document.querySelector('a[tp="1716%20E%20Main"]');
link.style.display = 'none';
link = document.querySelector('a[tp="1718%20E%20Main"]');
link.style.display = 'none';
link = document.querySelector('a[tp="1783%20Burgoyne"]');
link.style.display = 'none';
link = document.querySelector('a[tp="1785%20Burgoyne"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2701%20Haas"]');
link.style.display = 'none';
link = document.querySelector('a[tp="2703%20Haas"]');
link.style.display = 'none';
