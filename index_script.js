const propertyCards = document.querySelectorAll('.property-card');
propertyCards.forEach(card => {
  if (card.getAttribute('avail') === 'yes') {
    card.classList.add('js_available'); // Add 'available' class to the card
    card.querySelector('.available').textContent = 'Currently Available!';
  } else {
    // Optional: change the text to 'Currently Unavailable' if avail is not 'yes'
    card.querySelector('.available').textContent = 'Currently Unavailable'; 
  }
  card.classList.add('show'); // Show every card to start
});