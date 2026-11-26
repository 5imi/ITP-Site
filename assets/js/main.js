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
})();
