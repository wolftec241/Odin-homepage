import "./index.html";
import "./style/style.css";


const typewriter = document.getElementById('typewriter');
const phrases = ['Programmer', 'Web Developer', 'Full Stack Developer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Faster when deleting
    } else {
        typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal speed when typing
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end of the phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting new phrase
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();