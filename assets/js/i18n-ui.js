document.addEventListener('DOMContentLoaded', () => {
  const ui = window.SITE_I18N || {};
  const lang = localStorage.getItem('preferredLang') || 'ma';
  const dict = ui[lang] || ui.ma;
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
});
