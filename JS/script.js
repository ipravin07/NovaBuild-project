'use strict';
const navbar= document.getElementById('navbar');
const hamburger= document.getElementById('hamburger');
const navLinks= document.getElementById('navLinks');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
hamburger.addEventListener('click', () => {
  const isOpen= hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});
const revealObserver= new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 90);
        });
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => {
  if (!el.closest('.hero')) {
    revealObserver.observe(el);
  }
});
const form= document.getElementById('contactForm');
const formStatus= document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name= document.getElementById('name').value.trim();
  const email= document.getElementById('email').value.trim();
  const message= document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }
  if (!isValidEmail(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }
  const submitBtn= form.querySelector('button[type="submit"]');
  submitBtn.disabled= true;
  submitBtn.textContent= 'Sending…';
  setTimeout(() => {
    showStatus('✓ Message sent! We\'ll get back to you within 24 hours.', 'success');
    form.reset();
    submitBtn.disabled= false;
    submitBtn.textContent= 'Send Message';
  }, 1500);
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function showStatus(msg, type) {
  formStatus.textContent= msg;
  formStatus.className= 'form-status ' + (type === 'error' ? 'error' : '');
  setTimeout(() =>
    { formStatus.textContent = ''; formStatus.className = 'form-status'; }, 5000);
}
const sections= document.querySelectorAll('section[id]');
const navAnchors= document.querySelectorAll('.nav-links a');
const sectionObserver= new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--text)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(sec => sectionObserver.observe(sec));