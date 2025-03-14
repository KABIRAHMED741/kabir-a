// Toggle Hidden Message
function showMessage() {
    let message = document.getElementById("hiddenMessage");
    message.style.display = message.style.display === "none" ? "block" : "none";
}

// Play Music
function playMusic() {
    let audio = document.getElementById("music");
    audio.play();
}

// Slideshow Functionality
let slideIndex = 0;
showSlides();

// Change slide manually
function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Set slide based on dot click
function setSlide(n) {
    slideIndex = n;
    showSlides();
}

// Auto-play slideshow
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Reset index if out of bounds
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Show the current slide
    slides[slideIndex].style.display = "block";

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Add active class to the current dot
    dots[slideIndex].classList.add("active");

    // Auto-change slide every 4 seconds
    setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 4000);
}
