const properties = [
    {
        // ... other properties
        contactName: 'Brian Batley',
        contactEmail: 'bbatley@gmail.com', 
        contactPhone: '(734) 657-6588'
    },
    // ... other properties
];
// ... (previous JavaScript code)

const contactLinks = document.querySelectorAll('.contact-link');
const contactModal = document.getElementById('contactModal');
const closeButton = document.querySelector('.close-button');
const contactNameSpan = document.getElementById('contactName');
const contactEmailSpan = document.getElementById('contactEmail');
const contactPhoneSpan = document.getElementById('contactPhone');

contactLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const property = properties[index];
        contactNameSpan.textContent = property.contactName;
        contactEmailSpan.textContent = property.contactEmail;
        contactPhoneSpan.textContent = property.contactPhone;
        contactModal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
});
