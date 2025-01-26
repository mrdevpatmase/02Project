const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => img.classList.toggle('active', i === index));
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);
