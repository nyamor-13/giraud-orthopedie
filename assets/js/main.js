/* Giraud Orthopédie — interactions minimales, amélioration progressive.
   Sans dépendance. Le site reste pleinement utilisable sans JavaScript. */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var mq = window.matchMedia('(max-width: 64em)');

  function isMobile() { return mq.matches; }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      nav.removeAttribute('hidden');
    } else {
      nav.setAttribute('hidden', '');
    }
  }

  // État initial : sur mobile, le menu est replié ; sur grand écran, visible.
  function sync() {
    if (isMobile()) {
      setOpen(false);
    } else {
      nav.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  // Fermeture à la touche Échap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Fermeture au clic en dehors (mobile)
  document.addEventListener('click', function (e) {
    if (!isMobile()) return;
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  // Réaction au changement de largeur d'écran
  if (mq.addEventListener) {
    mq.addEventListener('change', sync);
  } else if (mq.addListener) {
    mq.addListener(sync);
  }

  sync();
})();
