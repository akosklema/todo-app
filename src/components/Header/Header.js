import switchTheme from '../../eventListeners/switchTheme';

import MoonSVG from '../../assets/icon-moon.svg';
import SunSVG from '../../assets/icon-sun.svg';

import classes from './Header.module.css';

function Header() {
  const headerMarkup =  `
    <div class=${classes['header-content-container']}>
      <h1 class=${classes['header-text']}>TODO</h1>
      <button id="theme-switcher" class=${classes['theme-toggler']}>
        <img id="theme-switcher-logo" src=${MoonSVG} alt="Dark mode icon (Moon)" />
      </button>
    </div>
  `;

  const header = document.createElement('header');
  header.classList.add(classes['header']);

  header.innerHTML = headerMarkup;

  const themeSwitcherButton = header.querySelector(`.${classes['theme-toggler']}`);
  themeSwitcherButton.addEventListener('click', switchTheme);

  return header;
};

export default Header;