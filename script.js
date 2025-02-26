


// Form Validation
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add form submission logic here
  alert('Message sent successfully!');
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Card expansion functionality
document.querySelector('.expandable-card')?.addEventListener('click', function() {
  this.classList.toggle('expanded');
});


