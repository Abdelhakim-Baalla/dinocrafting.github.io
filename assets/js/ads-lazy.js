document.addEventListener('DOMContentLoaded', () => {
  const adSlots = document.querySelectorAll('.ad-slot');
  if (!adSlots.length) return;

  let loaded = false;
  const loadAds = () => {
    if (loaded) return;
    loaded = true;

    adSlots.forEach((slot) => {
      const container = slot.querySelector('[id^="ad-"][id$="-container"]');
      const template = slot.querySelector('.ad-template');
      if (!container || !template) return;
      container.innerHTML = template.innerHTML;
    });
  };

  ['click', 'scroll', 'keydown', 'touchstart'].forEach((eventName) => {
    window.addEventListener(eventName, loadAds, { once: true, passive: true });
  });

  // Fallback so ads still appear for passive users.
  window.setTimeout(loadAds, 6000);
});
