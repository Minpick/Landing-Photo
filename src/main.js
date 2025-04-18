


//header background change

document.addEventListener('scroll', () => {
  // Получаем текущую прокрутку
  const scrollPosition = window.scrollY;
  const header = document.getElementById('header')
  const links = document.querySelectorAll('#navLink')
  const logo = document.getElementById('logoImg')
  const headerContainer = document.getElementById('header-container')
  // Проверяем, если прокрутка больше 100vh
  if (window.innerWidth > 800) {
    if (header) {
      if (scrollPosition > window.innerHeight - 80) {
        header.style.backgroundColor = 'white';
        logo.src = '/logoBlack.svg'
        links.forEach(link => {
          link.style.color = 'black';
        })

        // header.style.backgroundColor = 'var(--black-transparent)';
      } else {
        header.style.backgroundColor = 'transparent'; // Начальный цвет
        logo.src = '/logo.svg'
        links.forEach(link => {
          link.style.color = 'white';
        })
      }
    }
  }
});



// portfolio videos modal
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeBtn');
const modalVideo = document.getElementById('modalVideo');
const openModalButtons = document.querySelectorAll('.open-modal');

function openModal(videoId) {
  modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd2160`;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = '';
}

openModalButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Проверяем ширину экрана

    // Для мобильных: проверяем, был ли клик на иконке play

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

//accordeon
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
const navMenu = document.querySelectorAll('#nav-menu');
const logo = document.getElementById('logoImg');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('#nav-menu a');

function closeMenu() {
  navMenu.forEach(menu => {
    menu.classList.remove('active');
  })
  overlay.classList.remove('active');
}

burger.addEventListener('click', function () {
  navMenu.forEach(menu => {
    menu.classList.toggle('active');
  }
  )
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


document.addEventListener('DOMContentLoaded', function () {
  // Находим все контентные блоки и изображения
  const contentBlocks = document.querySelectorAll('[class^="stages_content"]');
  const allImages = document.querySelectorAll('[id^="stages_img"]');

  // Для каждого блока добавляем обработчики событий
  contentBlocks.forEach(block => {
    block.addEventListener('mouseenter', function () {
      // Находим следующее изображение после текущего блока
      const img = this.nextElementSibling;

      // Проверяем, что это нужное изображение
      if (img && (img.matches('img[id^="stages_img"]') || img.matches('video[id^="stages_img"]'))) {
        // Удаляем класс у всех изображений
        allImages.forEach(image => image.classList.remove('stages_img'));
        // Добавляем класс текущему изображению
        img.classList.add('stages_img');
      }
    });
  });
});

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


