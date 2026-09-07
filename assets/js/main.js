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

/* Onglets accessibles (WAI-ARIA) — « Focus par sport ».
   Sans JavaScript, tous les panneaux restent affichés (voir CSS). */
(function () {
  'use strict';
  var groups = document.querySelectorAll('.tabs');
  Array.prototype.forEach.call(groups, function (tabs) {
    var tablist = tabs.querySelector('[role="tablist"]');
    var tabButtons = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]'));
    if (!tablist || !tabButtons.length) return;
    var panels = tabButtons.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

    function select(idx, moveFocus) {
      tabButtons.forEach(function (t, i) {
        var on = i === idx;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (panels[i]) {
          if (on) { panels[i].removeAttribute('hidden'); }
          else { panels[i].setAttribute('hidden', ''); }
        }
      });
      if (moveFocus) { tabButtons[idx].focus(); }
    }

    tabButtons.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (e) {
        var n = tabButtons.length, idx;
        switch (e.key) {
          case 'ArrowRight': case 'ArrowDown': idx = (i + 1) % n; break;
          case 'ArrowLeft':  case 'ArrowUp':   idx = (i - 1 + n) % n; break;
          case 'Home': idx = 0; break;
          case 'End':  idx = n - 1; break;
          default: return;
        }
        e.preventDefault();
        select(idx, true);
      });
    });

    var start = 0;
    tabButtons.forEach(function (t, i) { if (t.getAttribute('aria-selected') === 'true') { start = i; } });
    select(start, false);
  });
})();
