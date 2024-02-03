document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.getElementById('sliderWrapper');
    let currentIndex = 0;
  
    function updateSlider() {
      const itemWidth = document.querySelector('.slider-item').offsetWidth;
      const newPosition = -currentIndex * itemWidth;
      sliderWrapper.style.transform = `translateX(${newPosition}px)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.slider-item').length;
      updateSlider();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + document.querySelectorAll('.slider-item').length) % document.querySelectorAll('.slider-item').length;
      updateSlider();
    }
  
    setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds, adjust as needed
  });