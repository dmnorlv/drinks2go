const mainMenu = document.querySelector('.menu__main');
const headerButton = document.querySelector('.header__button');
const mainIndex = document.querySelector('.index__main')

mainMenu.classList.add('menu__main--js');
headerButton.classList.add('header__button--js');
mainIndex.classList.add('index__main--js');

headerButton.addEventListener('click', () => {
  mainIndex.classList.toggle('index__main--js');
  mainMenu.classList.toggle('menu__main--js');
  headerButton.classList.toggle('header__button--js');
})
