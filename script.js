(function () {
  'use strict';

  const nav = document.getElementById('nav');

  // Nav bar: añadir clase al hacer scroll
  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Suavizar clic en enlaces internos (por si el navegador no aplica scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Tabs del showcase: EASY Business / EASY School
  const showcaseTabs = document.querySelectorAll('.showcase-tab');
  const showcasePanels = document.querySelectorAll('.showcase-panel');

  showcaseTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetId = 'showcase-' + tab.getAttribute('data-tab');

      showcaseTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      showcasePanels.forEach(function (panel) {
        const isActive = panel.id === targetId;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
    });
  });
})();
