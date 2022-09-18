import { saveThemeToLocalStorage, getThemeFromLocalStorage } from '../services/themeService';

function handleThemeState() {
  let theme = getThemeFromLocalStorage();

  if (!theme) {
    theme = 'light';
  }

  const switchThemeState = () => {
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    return saveThemeToLocalStorage(theme);
  };

  return [theme, switchThemeState];
};

export default handleThemeState;