/* SuperNXT Network Promo Widget — vanilla JS, no deps, <10KB */
(function () {
  'use strict';

  /* ─── Config ──────────────────────────────────────────────── */
  var MESSAGES = [
    'Test Your Office Network Speed',
    'Test Your Accommodation Wi-Fi Speed',
    'Test Your Hotel Internet Speed',
    'Check Your Internet Performance',
    'Find the Fastest DNS for Your Network',
    'Analyze Your Network Latency',
    'Diagnose Your Internet Connection',
  ];
  var TARGET_URL = '/analyzer/';
  var ROTATE_MS  = 7000;
  var SESSION_KEY = 'snt_promo_dismissed';

  /* ─── Guard: skip on /analyzer/ and /tools/* pages ─────── */
  var path = window.location.pathname;
  if (
    path === '/analyzer/' ||
    path === '/analyzer' ||
    path.indexOf('/tools/') === 0 ||
    path === '/tools'
  ) return;

  /* ─── Guard: already dismissed this session ─────────────── */
  if (sessionStorage.getItem(SESSION_KEY)) return;

  /* ─── Reduced-motion check ──────────────────────────────── */
  var reducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── Inject CSS ────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '.snt-promo{',
      'position:fixed;bottom:110px;right:16px;z-index:9000;',
      'background:#243B66;color:#fff;',
      'border-radius:12px;',
      'box-shadow:0 4px 24px rgba(0,0,0,.35);',
      'padding:12px 14px 12px 14px;',
      'max-width:260px;min-width:200px;',
      'display:flex;align-items:flex-start;gap:10px;',
      'font-family:system-ui,-apple-system,sans-serif;',
      'font-size:13px;line-height:1.4;',
      'cursor:pointer;',
      'transition:opacity .3s,transform .3s;',
    '}',
    '.snt-promo:focus-visible{outline:2px solid #E30613;outline-offset:2px;}',
    '.snt-promo__dot{',
      'width:8px;height:8px;border-radius:50%;',
      'background:#E30613;flex-shrink:0;margin-top:4px;',
    '}',
    reducedMotion ? '' : '.snt-promo__dot{animation:sntPulse 1.6s ease-in-out infinite;}',
    '@keyframes sntPulse{0%,100%{opacity:1}50%{opacity:.3}}',
    '.snt-promo__body{flex:1;min-width:0;}',
    '.snt-promo__label{',
      'font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;',
      'color:#E30613;margin-bottom:3px;',
    '}',
    '.snt-promo__msg{font-weight:600;color:#fff;}',
    reducedMotion ? '' : [
      '.snt-promo__msg{',
        'transition:opacity .5s ease;',
      '}',
      '.snt-promo__msg.fade{opacity:0;}',
    ].join(''),
    '.snt-promo__sub{font-size:11px;color:rgba(255,255,255,.6);margin-top:2px;}',
    '.snt-promo__close{',
      'background:none;border:none;color:rgba(255,255,255,.5);',
      'font-size:16px;line-height:1;cursor:pointer;padding:0 0 0 4px;',
      'flex-shrink:0;',
    '}',
    '.snt-promo__close:hover{color:#fff;}',
    '.snt-promo__close:focus-visible{outline:1px solid #E30613;border-radius:2px;}',
    /* mobile: compact */
    '@media(max-width:480px){',
      '.snt-promo{bottom:90px;right:10px;left:10px;max-width:none;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  /* ─── Build DOM ─────────────────────────────────────────── */
  var widget = document.createElement('div');
  widget.className  = 'snt-promo';
  widget.role       = 'complementary';
  widget.setAttribute('aria-label', 'SuperNXT network tool promotion');
  widget.tabIndex   = 0;

  widget.innerHTML  = [
    '<div class="snt-promo__dot" aria-hidden="true"></div>',
    '<div class="snt-promo__body">',
      '<div class="snt-promo__label">Free Network Tool</div>',
      '<div class="snt-promo__msg" id="sntPromoMsg">' + MESSAGES[0] + '</div>',
      '<div class="snt-promo__sub">Tap to analyse your connection →</div>',
    '</div>',
    '<button class="snt-promo__close" aria-label="Dismiss network tool promotion" id="sntPromoClose">✕</button>',
  ].join('');

  /* ─── Dismiss ────────────────────────────────────────────── */
  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, '1');
    if (!reducedMotion) {
      widget.style.opacity   = '0';
      widget.style.transform = 'translateY(8px)';
      setTimeout(function () { if (widget.parentNode) widget.parentNode.removeChild(widget); }, 350);
    } else {
      if (widget.parentNode) widget.parentNode.removeChild(widget);
    }
  }

  document.getElementById && (function(){
    /* close button */
    widget.addEventListener('click', function (e) {
      var target = e.target;
      if (target.id === 'sntPromoClose' || target.closest('#sntPromoClose')) {
        e.stopPropagation();
        dismiss();
        return;
      }
      window.location.href = TARGET_URL;
    });

    /* keyboard: Enter activates, Escape dismisses */
    widget.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { window.location.href = TARGET_URL; }
      if (e.key === 'Escape') { dismiss(); }
    });
  })();

  /* ─── Message rotation ──────────────────────────────────── */
  var msgIdx = 0;
  function rotateMsg() {
    msgIdx = (msgIdx + 1) % MESSAGES.length;
    var el = document.getElementById('sntPromoMsg');
    if (!el) return;
    if (reducedMotion) {
      el.textContent = MESSAGES[msgIdx];
      return;
    }
    el.classList.add('fade');
    setTimeout(function () {
      el.textContent = MESSAGES[msgIdx];
      el.classList.remove('fade');
    }, 500);
  }
  var rotateTimer = setInterval(rotateMsg, ROTATE_MS);

  /* ─── Mount after page interactive ─────────────────────── */
  function mount() {
    document.body.appendChild(widget);
    /* ensure dismiss removes timer */
    var origDismiss = dismiss;
    dismiss = function () { clearInterval(rotateTimer); origDismiss(); };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
