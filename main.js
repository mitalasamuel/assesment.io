document.addEventListener('DOMContentLoaded', () => {
    // Example: Simple form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('All fields are required.');
            }
        });
    }
});
