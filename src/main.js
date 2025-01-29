


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
// Находим элементы
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeBtn');
const modalVideo = document.getElementById('modalVideo');

// Находим все кнопки, открывающие модальное окно, по классу
const openModalButtons = document.querySelectorAll('.open-modal');

// Функция для открытия модалки и подстановки нужного видео
function openModal(videoId) {
  // Подставляем ID в ссылку для YouTube
  // '?autoplay=1' запустит видео автоматически 
  modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = 'flex'; // показываем модал (flex для выравнивания)
}

// Функция для закрытия модалки
function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = ''; // сбрасываем src, чтобы видео остановилось
}

// Вешаем обработчик на все кнопки
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoId = button.getAttribute('data-video-id');
    openModal(videoId);
  });
});

// Закрытие по клику на &times;
closeBtn.addEventListener('click', closeModal);

// (Опционально) Закрытие по клику вне области контента
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
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
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



