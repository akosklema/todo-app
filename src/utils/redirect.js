function redirect(url) {
  window.history.pushState({}, '', url);
};

export default redirect;