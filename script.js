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

  // Carruseles horizontales (soluciones, precios, planes)
  document.querySelectorAll('[data-easy-carousel]').forEach(function (carousel) {
    const track = carousel.querySelector('[data-easy-carousel-track]');
    const prevBtn = carousel.querySelector('[data-easy-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-easy-carousel-next]');
    if (!track || !prevBtn || !nextBtn) return;

    function getStep() {
      const item = track.children[0];
      if (!item) return track.clientWidth;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return item.getBoundingClientRect().width + gap;
    }

    function updateNav() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 2;
      nextBtn.disabled = track.scrollLeft >= maxScroll - 2;
    }

    function scrollByStep(direction) {
      track.scrollBy({ left: direction * getStep(), behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', function () {
      scrollByStep(-1);
    });
    nextBtn.addEventListener('click', function () {
      scrollByStep(1);
    });
    track.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    updateNav();
  });

  // Aparición progresiva de las secciones al hacer scroll
  const revealSelectors = [
    '.section-content',
    '.school-pricing-block',
    '.showcase-content',
    '.showcase-image',
    '.quote-text',
    '.cta-content',
    '.module-features-inner',
    '.module-pricing-inner',
    '.module-pricing-inner-wide',
    '.module-faq-inner',
    '.module-related-inner'
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    );

    document.querySelectorAll(revealSelectors.join(', ')).forEach(function (el) {
      // Lo que ya está en pantalla al cargar se muestra sin animación.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.setAttribute('data-reveal', '');
      revealObserver.observe(el);
    });

    // Escalonado suave entre bloques hermanos de una misma sección.
    document.querySelectorAll('.school-pricing-block[data-reveal]').forEach(function (el, index) {
      el.style.setProperty('--reveal-delay', Math.min(index, 3) * 0.08 + 's');
    });
  }
})();
