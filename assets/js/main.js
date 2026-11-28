/* Script principal site ACW Falticeni (main.js): Meniu mobil, GDPR/Cookie, bara progres, scroll-spy meniu, animatii la scroll si acordeon FAQ fluid. */
(() => {
  const nav = document.getElementById('mainNav');
  const toggleBtn = document.getElementById('navToggle');
  const yearEl = document.getElementById('yearNow');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Actualizare an curent in footer */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Comutare meniu navigare pe ecrane mobile (<= 960px) */
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Deschidere/inchidere fereastra Informare GDPR & Cookies (#gdprDialog) */
  const gdprDialog = document.getElementById('gdprDialog');
  const openGdprBtn = document.getElementById('openGdprBtn');
  const closeGdprBtn = document.getElementById('closeGdprBtn');
  if (gdprDialog && openGdprBtn) {
    openGdprBtn.addEventListener('click', () => gdprDialog.showModal());
    if (closeGdprBtn) {
      closeGdprBtn.addEventListener('click', () => gdprDialog.close());
    }
    gdprDialog.addEventListener('click', (e) => {
      if (e.target === gdprDialog) gdprDialog.close();
    });
  }

  /* Banner Cookie & GDPR (#cookieBanner): Afisat la prima vizita pana la confirmare */
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
  const bannerGdprBtn = document.getElementById('bannerGdprBtn');
  if (cookieBanner) {
    let ack = false;
    try {
      ack = localStorage.getItem('acw_cookie_ack') === '1';
    } catch (_) {
      ack = false;
    }
    if (!ack) {
      cookieBanner.hidden = false;
    }
    if (acceptCookiesBtn) {
      acceptCookiesBtn.addEventListener('click', () => {
        try {
          localStorage.setItem('acw_cookie_ack', '1');
        } catch (_) {}
        cookieBanner.hidden = true;
      });
    }
    if (bannerGdprBtn && gdprDialog) {
      bannerGdprBtn.addEventListener('click', () => gdprDialog.showModal());
    }
  }

  /* Bara de progres la scroll (#scrollProgress) si Scroll-Spy pe linkurile din meniul principal */
  const scrollProgressEl = document.getElementById('scrollProgress');
  const navLinks = nav ? Array.from(nav.querySelectorAll('.nav-link[href^="#"]')) : [];
  const spyTargets = navLinks
    .map((link) => {
      const id = link.getAttribute('href').slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section, id } : null;
    })
    .filter(Boolean);

  let scrollTicking = false;
  const updateScrollUI = () => {
    scrollTicking = false;
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgressEl) {
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      scrollProgressEl.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }

    if (spyTargets.length > 0) {
      const headerEl = document.getElementById('header');
      const offset = (headerEl ? headerEl.offsetHeight : 72) + 44;
      const atBottom = docHeight > 0 && scrollTop + 12 >= docHeight;

      let activeId = spyTargets[0].id;
      if (atBottom) {
        activeId = spyTargets[spyTargets.length - 1].id;
      } else {
        const marker = scrollTop + offset;
        for (const item of spyTargets) {
          if (item.section.offsetTop <= marker) {
            activeId = item.id;
          }
        }
      }

      spyTargets.forEach(({ link, id }) => {
        const isActive = id === activeId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  };

  const requestScrollUI = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollUI);
    }
  };

  if (scrollProgressEl || spyTargets.length > 0) {
    window.addEventListener('scroll', requestScrollUI, { passive: true });
    window.addEventListener('resize', requestScrollUI, { passive: true });
    updateScrollUI();
  }

  /* Animatii la scroll (Scroll Reveal + Stagger): Aplica doar pe elementele aflate sub viewport-ul initial pentru LCP optim. */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealGroups = [
      { selector: '.section-head', stagger: 0 },
      { selector: '.services-grid .service-card', stagger: 70 },
      { selector: '.about-media, .about-content', stagger: 90 },
      { selector: '.stats-grid .stat-box', stagger: 65 },
      { selector: '.gallery-grid .work-card', stagger: 80 },
      { selector: '.problems-grid .problem-card', stagger: 60 },
      { selector: '.faq-grid .faq-item', stagger: 45 },
      { selector: '.contact-card, .map-card, .service-area-box', stagger: 85 }
    ];

    const revealCandidates = [];
    const foldLimit = window.innerHeight * 0.92;

    revealGroups.forEach(({ selector, stagger }) => {
      const nodes = document.querySelectorAll(selector);
      nodes.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > foldLimit) {
          const delayMs = stagger > 0 ? (idx % 4) * stagger : 0;
          el.style.setProperty('--reveal-delay', `${delayMs}ms`);
          el.classList.add('reveal-ready');
          revealCandidates.push(el);
        }
      });
    });

    if (revealCandidates.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            target.classList.add('is-revealed');
            target.addEventListener(
              'transitionend',
              () => target.classList.add('reveal-settled'),
              { once: true }
            );
            observer.unobserve(target);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
      );

      revealCandidates.forEach((el) => revealObserver.observe(el));
    }
  }

  /* Acordeon FAQ fluid (#intrebari): Animeaza inaltimea la deschidere/inchidere pastrand accesibilitatea nativa <details>. */
  if (!prefersReducedMotion && typeof Element.prototype.animate === 'function') {
    document.querySelectorAll('.faq-item').forEach((details) => {
      const summary = details.querySelector('summary');
      const content = details.querySelector('p');
      if (!summary || !content) return;

      let currentAnimation = null;

      summary.addEventListener('click', (event) => {
        event.preventDefault();
        if (currentAnimation) {
          currentAnimation.cancel();
        }

        const startHeight = `${details.offsetHeight}px`;

        if (!details.open) {
          details.open = true;
          const endHeight = `${details.offsetHeight}px`;
          currentAnimation = details.animate(
            { height: [startHeight, endHeight] },
            { duration: 240, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
          );
          currentAnimation.onfinish = () => {
            currentAnimation = null;
          };
        } else {
          const styles = window.getComputedStyle(details);
          const closedHeight = `${
            summary.offsetHeight +
            parseFloat(styles.paddingTop) +
            parseFloat(styles.paddingBottom) +
            parseFloat(styles.borderTopWidth) +
            parseFloat(styles.borderBottomWidth)
          }px`;
          currentAnimation = details.animate(
            { height: [startHeight, closedHeight] },
            { duration: 200, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
          );
          currentAnimation.onfinish = () => {
            details.open = false;
            currentAnimation = null;
          };
        }
      });
    });
  }
})();
