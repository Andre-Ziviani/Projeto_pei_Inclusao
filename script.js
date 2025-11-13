const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const links = menu.querySelectorAll('a');

// Abre e fecha o menu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Fecha o menu ao clicar em um link
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
