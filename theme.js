/* theme.js — inclus în toate paginile, în <head> */
(function () {
  const KEY = 'mini-unelte-theme';
  const root = document.documentElement;

  function preferred() {
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    // Actualizează butonul dacă există deja
    updateBtn(theme);
  }

  function updateBtn(theme) {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀ light' : '● dark';
  }

  window.toggleTheme = function () {
    const current = root.getAttribute('data-theme') || preferred();
    apply(current === 'dark' ? 'light' : 'dark');
  };

  // Aplică imediat (fără flash)
  const initial = preferred();
  root.setAttribute('data-theme', initial);

  // Actualizează butonul după ce DOM-ul e gata
  document.addEventListener('DOMContentLoaded', () => updateBtn(initial));
})();
