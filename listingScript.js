const propertyCards = document.querySelectorAll('.property-card');
const showAllButton = document.getElementById('showAll');
const showSomeButton = document.getElementById('showSome');

showAllButton.addEventListener('click', () => {
    propertyCards.forEach(card => card.classList.add('show'));
});

showSomeButton.addEventListener('click', () => {
    propertyCards.forEach((card, index) => {
        // Example: Show only cards with even indexes
        if (index % 2 === 0) { 
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
});