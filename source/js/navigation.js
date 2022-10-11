const mainMenu = document.querySelector('.menu__main');
const headerButton = document.querySelector('.header__button');

mainMenu.classList.add('menu__main--js');
headerButton.classList.add('header__button--js');

headerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('menu__main--js');
  headerButton.classList.toggle('header__button--js');
})
