// TSN Electrical & Service — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Mark active nav link
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form -> mailto fallback (static site, no backend)
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('f-name').value.trim();
      var company = document.getElementById('f-company').value.trim();
      var email = document.getElementById('f-email').value.trim();
      var phone = document.getElementById('f-phone').value.trim();
      var category = document.getElementById('f-category').value;
      var message = document.getElementById('f-message').value.trim();

      var body = [
        'Name: ' + name,
        'Company: ' + company,
        'Email: ' + email,
        'Phone: ' + phone,
        'Enquiry category: ' + category,
        '',
        message
      ].join('\n');

      var mailto = 'mailto:tharaktsnespvtltd@gmail.com'
        + '?subject=' + encodeURIComponent('Website Enquiry - ' + (company || name || 'General'))
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
