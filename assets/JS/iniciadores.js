const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselList = document.querySelector('.carousel-list');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveCarousel(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
  } else if (direction === 'prev') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
  }
  carouselList.style.left = -currentIndex * 33.3333 + '%';
}

prevButton.addEventListener('click', function() {
  moveCarousel('prev');
});

nextButton.addEventListener('click', function() {
  moveCarousel('next');
});
