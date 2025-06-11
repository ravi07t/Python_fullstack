const track = document.getElementById('track');
    const slides = document.querySelectorAll('.carousel-slide');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    let index = 0;
    let visibleSlides = window.innerWidth <= 768 ? 1 : 3;
    const totalSlides = slides.length;

    function updateCarousel() {
      const slideWidth = slides[0].offsetWidth + 20; // slide + padding
      track.style.transform = `translateX(-${index * slideWidth}px)`;

      leftArrow.classList.toggle('show', index > 0);
      rightArrow.classList.toggle('show', index < totalSlides - visibleSlides);
    }

    function nextSlide() {
      if (index < totalSlides - visibleSlides) {
        index++;
        updateCarousel();
      }
    }

    function prevSlide() {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    }

    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
      visibleSlides = window.innerWidth <= 768 ? 1 : 3;
      updateCarousel();
    });

    // Initial update
    updateCarousel();
    


dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    index = dotIndex * visibleSlides;
    updateCarousel();
  });
});

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

window.addEventListener('resize', () => {
  visibleSlides = window.innerWidth <= 768 ? 1 : 3;
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let slides = document.querySelectorAll('.carousel-slide');
let index = 0;
let visibleSlides = window.innerWidth <= 768 ? 1 : 3;
const totalSlides = slides.length;

const dotsContainer = document.querySelector('.dots');

function createDots() {
  dotsContainer.innerHTML = ''; // clear existing
  const dotCount = Math.ceil(totalSlides / visibleSlides);
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i * visibleSlides;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  const currentDotIndex = Math.floor(index / visibleSlides);
  if (dots[currentDotIndex]) {
    dots[currentDotIndex].classList.add('active');
  }
}

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  leftArrow.classList.toggle('show', index > 0);
  rightArrow.classList.toggle('show', index < totalSlides - visibleSlides);

  updateDots();
}

function nextSlide() {
  if (index < totalSlides - visibleSlides) {
    index++;
    updateCarousel();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateCarousel();
  }
}

// Add listeners
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

window.addEventListener('resize', () => {
  visibleSlides = window.innerWidth <= 768 ? 1 : 3;
  createDots(); // recreate dots for new screen size
  updateCarousel();
});

// INIT
createDots();
updateCarousel();

});

 const targetTime = new Date("2025-06-11T22:00:00").getTime();

        function formatTwoDigits(num) {
            return num.toString().padStart(2, '0').split('');
        }

        function updateCountdown() {
            const now = new Date().getTime();
            const remaining = targetTime - now;

            if (remaining <= 0) {
                clearInterval(timer);

                // Set all digits to 0
                ['hour1', 'hour2', 'min1', 'min2', 'sec1', 'sec2'].forEach(id => {
                    document.getElementById(id).textContent = '0';
                });

                return;
            }

            const hours = Math.floor((remaining / (1000 * 60 * 60)));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            const [h1, h2] = formatTwoDigits(hours);
            const [m1, m2] = formatTwoDigits(minutes);
            const [s1, s2] = formatTwoDigits(seconds);

            document.getElementById('hour1').textContent = h1;
            document.getElementById('hour2').textContent = h2;
            document.getElementById('min1').textContent = m1;
            document.getElementById('min2').textContent = m2;
            document.getElementById('sec1').textContent = s1;
            document.getElementById('sec2').textContent = s2;
        }

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();