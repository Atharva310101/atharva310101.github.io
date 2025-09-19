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