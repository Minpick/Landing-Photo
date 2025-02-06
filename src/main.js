


//header background change

document.addEventListener("DOMContentLoaded", () => {
  const lazyVideos = document.querySelectorAll('.lazy-video');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = document.createElement('source');
        source.src = video.dataset.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
        video.classList.add('loaded');
        observer.unobserve(video);
      }
    });
  }, {
    rootMargin: '200px 0px',
    threshold: 0.1
  });

  lazyVideos.forEach(video => observer.observe(video));
});

document.addEventListener('scroll', () => {
  // Получаем текущую прокрутку
  const scrollPosition = window.scrollY;
  const header = document.getElementById('header')
  const headerContainer = document.getElementById('header-container')
  // Проверяем, если прокрутка больше 100vh
  if (header) {
    if (scrollPosition > window.innerHeight - 80) {
      header.style.backgroundColor = 'var(--black-transparent)';
      headerContainer.style.borderBottomColor = 'transparent' // Новый цвет
    } else {
      header.style.backgroundColor = 'transparent'; // Начальный цвет
      headerContainer.style.borderBottomColor = 'var(--black-70)'; // Начальный цвет
    }
  }
});



// portfolio videos modal
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeBtn');
const modalVideo = document.getElementById('modalVideo');
const openModalButtons = document.querySelectorAll('.open-modal');

function openModal(videoId) {
  modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = '';
}

openModalButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Проверяем ширину экрана
    const isMobile = window.matchMedia('(max-width: 800px)').matches;

    // Для мобильных: проверяем, был ли клик на иконке play
    if (isMobile) {
      const playIcon = event.target.closest('.fa-play');
      if (!playIcon) return; // Если клик не по иконке - выходим
    }

    const videoId = button.getAttribute('data-video-id');
    openModal(videoId);
  });
});

// Остальной код остается без изменений
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 18px";
      panel.style.opacity = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 20 + "px";
      panel.style.padding = "10px 18px";
      panel.style.opacity = "1";
    }
  });
}


//burger-menu


const burger = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('#nav-menu a');

function closeMenu() {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
}

burger.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});



//animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add class when in viewport
        } else {
          entry.target.classList.remove("visible"); // Remove class when out of viewport
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  elements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Находим все контентные блоки и изображения
  const contentBlocks = document.querySelectorAll('[class^="stages_content"]');
  const allImages = document.querySelectorAll('[id^="stages_img"]');

  // Для каждого блока добавляем обработчики событий
  contentBlocks.forEach(block => {
    block.addEventListener('mouseenter', function() {
      // Находим следующее изображение после текущего блока
      const img = this.nextElementSibling;
      
      // Проверяем, что это нужное изображение
      if (img && img.matches('img[id^="stages_img"]')) {
        // Удаляем класс у всех изображений
        allImages.forEach(image => image.classList.remove('stages_img'));
        // Добавляем класс текущему изображению
        img.classList.add('stages_img');
      }
    });
  });
});




// Carousel functionality
function updateCarousel(slides,carouselInner,currentIndex) {
  const slideWidth = slides[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(carouselInner1).gap) || 20;
  const translateX = -(currentIndex * (slideWidth + gap));
  carouselInner.style.transform = `translateX(${translateX}px)`;
}
window.addEventListener('resize', updateCarousel);


const carouselInner1 = document.querySelector('#carousel1');
const prevButton1 = document.querySelector('#prev1');
const nextButton1 = document.querySelector('#next1');
const slides1 = document.querySelectorAll('#tab-content1');
let currentIndex1 = 0;
nextButton1.addEventListener('click', () => {
  if (currentIndex1 < slides1.length - 3) { // Show 3 items at a time
    currentIndex1++;
    updateCarousel(slides1,carouselInner1,currentIndex1);
    if(currentIndex1>=slides1.length-3){
      nextButton1.style.visibility = 'hidden'
    }
    prevButton1.style.visibility = 'visible'
  }
});
prevButton1.addEventListener('click', () => {
  if (currentIndex1 > 0) {
    currentIndex1--;
    updateCarousel(slides1,carouselInner1,currentIndex1);
    if(currentIndex1<=0){
      prevButton1.style.visibility = 'hidden'
    }
    nextButton1.style.visibility = 'visible'
  }
});
const carouselInner2 = document.querySelector('#carousel2');
const prevButton2 = document.querySelector('#prev2');
const nextButton2 = document.querySelector('#next2');
const slides2 = document.querySelectorAll('#tab-content2');
let currentIndex2 = 0;
nextButton2.addEventListener('click', () => {
  if (currentIndex2 < slides2.length - 3) { // Show 3 items at a time
    currentIndex2++;
    updateCarousel(slides2,carouselInner2,currentIndex2);
    if(currentIndex2>=slides2.length-3){
      nextButton2.style.visibility = 'hidden'
    }
    prevButton2.style.visibility = 'visible'
  }
});
prevButton2.addEventListener('click', () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
    updateCarousel(slides2,carouselInner2,currentIndex2);
    if(currentIndex2<=0){
      prevButton2.style.visibility = 'hidden'
    }
    nextButton2.style.visibility = 'visible'
  }
});
const carouselInner3 = document.querySelector('#carousel3');
const prevButton3 = document.querySelector('#prev3');
const nextButton3 = document.querySelector('#next3');
const slides3 = document.querySelectorAll('#tab-content3');
let currentIndex3 = 0;
nextButton3.addEventListener('click', () => {
  if (currentIndex3 < slides3.length - 3) { // Show 3 items at a time
    currentIndex3++;
    updateCarousel(slides3,carouselInner3,currentIndex1);
    if(currentIndex3>=slides3.length-3){
      nextButton3.style.visibility = 'hidden'
    }
    prevButton3.style.visibility = 'visible'
  }
});
prevButton3.addEventListener('click', () => {
  if (currentIndex3 > 0) {
    currentIndex3--;
    updateCarousel(slides3,carouselInner3,currentIndex3);
    if(currentIndex3<=0){
      prevButton3.style.visibility = 'hidden'
    }
    nextButton3.style.visibility = 'visible'
  }
});

// Handle window resize

