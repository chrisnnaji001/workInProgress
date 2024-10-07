// JavaScript for Carousel Controls
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExample');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            pause: 'hover'
        });
    }
});
``
// Smooth scroll to top
document.querySelectorAll('footer .list-inline-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
        // Clear the form
        document
