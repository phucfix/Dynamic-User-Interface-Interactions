import "./styles.css";

// DOM
const dropDownButtons = document.querySelectorAll(".dropdown-button");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let slideIndex = 0;
showSlide(slideIndex);

// Setup dropdown
dropDownButtons.forEach(btn => {
    const dropDownItem = btn.nextElementSibling;
    console.log(dropDownItem);
    setDropDownOnHover(btn, dropDownItem);
});

// Setup img carousel
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const arr = Array.from(dots);
        slideIndex = arr.indexOf(dot);
        showSlide(slideIndex);
    });
});

setInterval(nextSlide, 5000);

// Dropdown function
function setDropDownOnHover(button, dropdownItems) {
    button.addEventListener("mouseenter", () => {
        dropdownItems.classList.add("visible");
    });

    button.addEventListener("mouseleave", () => {
        dropdownItems.classList.remove("visible");
    });
}

// Image carousel function
function showSlide(slideIndex) {
    const currentActiveSlide = document.querySelector(".slide.active");
    if (currentActiveSlide) {
        currentActiveSlide.classList.remove("active");
    }

    const currentActiveDot = document.querySelector(".dot.active");
    if (currentActiveDot) {
        currentActiveDot.classList.remove("active");
    }

    dots[slideIndex].classList.add("active");
    slides[slideIndex].classList.add("active");
}

function nextSlide() {
    // Cycle if final slide
    if (slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }

    showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex === 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex -= 1;
    }

    showSlide(slideIndex);
}

