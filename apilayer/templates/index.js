$(function () {
  $("#navbar-placeholder").load("navbar.html");
});
$(function () {
  $("#footer-placeholder").load("footer.html");
});

$(function () {
  $("#insights-placeholder").load("insights.html");
});

window.onclick = function (event) {
  if (!event.target.matches(".nav-item, .nav-item *")) {
    closeAllDropdowns();
  }
};

function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  event.stopPropagation();
  const dropdown = document.getElementById(dropdownId);
  const isActive = dropdown.classList.contains("active");
  // Close all dropdowns
  closeAllDropdowns();
  if (!isActive) {
    dropdown.classList.add("active");
  }
}

// Close all dropdowns
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
}

// Toggle mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}

// Toggle mobile dropdown content
function toggleMobileDropdown(element) {
  const dropdownContent = element.nextElementSibling;
  dropdownContent.classList.toggle("active");
}

//insights-card slides

const cardWrapper = document.querySelector(".insights-card-wrapper");
const cards = document.querySelectorAll(".insights-card");
const sliderFill = document.getElementById("sliderFill");
let currentIndex = 0;

function updateSlider() {
  if (!cardWrapper) {
    console.error("Card wrapper not found");
    return;
  }
  if (!sliderFill) {
    console.error("Slider fill not found");
    return;
  }

  const totalCards = cards.length;
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;
  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = totalCards - visibleCards;

  cardWrapper.style.transform = `translateX(-${
    currentIndex * (100 / visibleCards)
  }%)`;
  sliderFill.style.width = `${
    ((currentIndex + visibleCards) / totalCards) * 100
  }%`;
}

function changeSlide(direction) {
  if (!cardWrapper || !sliderFill) {
    console.error("Required elements not found");
    return;
  }

  const totalCards = cards.length;
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 768;
  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = totalCards - visibleCards;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = maxIndex;
  if (currentIndex > maxIndex) currentIndex = 0;

  updateSlider();
}

// Initial update
document.addEventListener("DOMContentLoaded", function () {
  if (cardWrapper && sliderFill) {
    updateSlider();
  } else {
    console.error("Required elements not found on DOMContentLoaded");
  }
});

// Update on window resize
window.addEventListener("resize", function () {
  if (cardWrapper && sliderFill) {
    updateSlider();
  } else {
    console.error("Required elements not found on resize");
  }
});
