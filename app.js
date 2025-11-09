// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ===== FADE-UP REVEAL WITH STAGGER =====
const faders = document.querySelectorAll('.fade-up');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // Optional: reveal children with stagger
      entry.target.querySelectorAll('*').forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.1}s`;
      });
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// ===== GALLERY LIGHTBOX =====
const galleryImages = document.querySelectorAll('.gallery-images .img-box');
galleryImages.forEach(imgBox => {
  imgBox.addEventListener('click', ()=>{
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 10000;

    const img = document.createElement('img');
    img.src = imgBox.dataset.src || '';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '12px';
    overlay.appendChild(img);

    overlay.addEventListener('click', ()=> overlay.remove());
    document.body.appendChild(overlay);
  });
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
  });
}
// ===== MOBILE NAV CLOSE ON LINK CLICK =====
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
    }
  });
});

// ===== STICKY NAV SHADOW =====
window.addEventListener('scroll', ()=>{
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 10) navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  else navbar.style.boxShadow = 'none';
});



