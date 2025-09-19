// --- FADE-IN ANIMATION ON SCROLL ---
document.addEventListener('DOMContentLoaded', function() {
    const fadeEls = document.querySelectorAll('.about-section, .projects-section, .project-card, .workex-section, .credentials-section, .cert-card, .interests-column, .contact-column');
    fadeEls.forEach(el => el.classList.add('fade-in'));
    function onScrollFadeIn() {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', onScrollFadeIn);
    onScrollFadeIn();
});
// --- TYPING EFFECT ---
document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.getElementById('typing-text');
    
    // --- IMPORTANT: Change this to your name ---
    const textToType = "ATHARVA PARGAONKAR"; 
    
    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            // Add the next character to the element
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            // Call the type function again after a short delay
            setTimeout(type, 100); // Adjust speed here (milliseconds)
        }
    }

    // Start the typing effect when the page has loaded
    type();
});

// --- DYNAMIC YEAR IN FOOTER ---
document.getElementById('current-year').textContent = new Date().getFullYear();

// --- MOBILE NAVIGATION (HAMBURGER MENU) ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    // Toggle active classes
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// --- CONTACT FORM AJAX SUBMISSION & POP-UP ---

// Get all the necessary elements from the DOM
const contactForm = document.querySelector('.contact-form');
const popupOverlay = document.getElementById('popup-overlay');
const closeButton = document.querySelector('.close-button');

// Add the submit event listener to the form
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(contactForm);
    
    // Get the form's action URL (your Formspree endpoint)
    const formAction = contactForm.getAttribute('action');

    // Use fetch to send the data to Formspree
    fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json' // Tell Formspree to reply with JSON
        }
    }).then(response => {
        // Check if the submission was successful
        if (response.ok) {
            // If successful, show the pop-up and reset the form
            popupOverlay.classList.remove('hidden');
            contactForm.reset();
        } else {
            // If there was a server error, show a generic error message
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
        }
    }).catch(error => {
        // If there was a network error, show a generic error message
        console.error('Fetch Error:', error);
        alert('Oops! There was a network error.');
    });
});

// Function to close the pop-up
function closePopup() {
    popupOverlay.classList.add('hidden');
}

// Add event listeners to close the pop-up
closeButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', function(event) {
    // Only close if the user clicks on the overlay itself, not the modal content
    if (event.target === popupOverlay) {
        closePopup();
    }
});