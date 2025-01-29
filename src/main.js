


//header background change

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



