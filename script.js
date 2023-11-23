document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function showSlide(index) {
    const sliderTrack = document.getElementById("slider-track");
    const slideWidth = document.querySelector(".sliding").offsetWidth;
    const newPosition = -index * slideWidth;

    sliderTrack.style.transform = `translateX(${newPosition}px)`;
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % 10;
    showSlide(currentSlide);
  }

  // Change slide every 3 seconds (adjust as needed)
  setInterval(autoSlide, 3000);
});
