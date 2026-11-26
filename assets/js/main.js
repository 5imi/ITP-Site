/* Script principal site ACW Falticeni (main.js): Meniu mobil, inchidere automata la click pe link si actualizare an curent. */
(() => {
  const nav = document.getElementById('mainNav');
  const toggleBtn = document.getElementById('navToggle');
  const yearEl = document.getElementById('yearNow');

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
})();
