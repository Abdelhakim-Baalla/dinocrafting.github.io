document.addEventListener('DOMContentLoaded', () => {
  const ui = {
    ma: {
      nav_home: 'الرئيسية',
      nav_mods: 'مودات',
      nav_videos: 'فيديوهات',
      nav_community: 'المجتمع',
      nav_news: 'أخبار',
      nav_about: 'حول',
      nav_contact: 'اتصل',
      nav_terms: 'الشروط',
      nav_privacy: 'الخصوصية',
      footer_tagline: 'محتوى Minecraft من Dino Crafting للمجتمع.'
    },
    en: {
      nav_home: 'Home',
      nav_mods: 'Mods',
      nav_videos: 'Videos',
      nav_community: 'Community',
      nav_news: 'News',
      nav_about: 'About',
      nav_contact: 'Contact',
      nav_terms: 'Terms',
      nav_privacy: 'Privacy',
      footer_tagline: 'Minecraft content by Dino Crafting for the community.'
    },
    fr: {
      nav_home: 'Accueil',
      nav_mods: 'Mods',
      nav_videos: 'Videos',
      nav_community: 'Communaute',
      nav_news: 'Actus',
      nav_about: 'A propos',
      nav_contact: 'Contact',
      nav_terms: 'Conditions',
      nav_privacy: 'Confidentialite',
      footer_tagline: 'Contenu Minecraft par Dino Crafting pour la communaute.'
    }
  };

  const lang = localStorage.getItem('preferredLang') || 'ma';
  const dict = ui[lang] || ui.ma;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
});
