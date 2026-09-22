(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  var forms = document.querySelectorAll('form.lead-form');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.URLSearchParams) return;
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      var data = new URLSearchParams(new FormData(form));
      data.set('page', window.location.href);
      var done = function () { window.location.href = '/thank-you.html'; };
      fetch(form.action, { method: 'POST', body: data }).then(done, done);
    });
  });
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
