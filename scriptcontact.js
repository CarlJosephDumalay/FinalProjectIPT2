//JAVASCRIPT FOR CONTACT SESSION USING EMAILJS
//JAVASCRIPT FOR CONTACT SESSION USING EMAILJS
//JAVASCRIPT FOR CONTACT SESSION USING EMAILJS


    // Initialize EmailJS with your User ID
    (function() {
        emailjs.init("MP0b1l5I64JvGz4dm"); // Replace with your EmailJS User ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send the form using EmailJS
        emailjs.sendForm('service_h4g1pf2', 'template_ftjuuzx', this)
            .then(function(response) {
                document.getElementById('response-message').textContent = 'Thank you! Your message has been sent.';
                document.getElementById('contact-form').reset(); // This clears the form
            }, function(error) {
                document.getElementById('response-message').textContent = 'Failed to send message. Please try again later.';
            });
    });


//JAVASCRIPT FOR NAV SCROLL

const sections = document.querySelectorAll('section'); // Adjust selector based on your sections
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});