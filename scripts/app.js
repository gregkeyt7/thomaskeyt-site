// File: scripts/app.js

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Highlight Active Nav Item Based on Page =====
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// ===== Show Alert on Resume Download =====
const resumeLink = document.querySelector('a[href*="resume"]');
if (resumeLink) {
  resumeLink.addEventListener('click', () => {
    alert("Downloading Resume - Thank you for your interest!");
  });
}

// ===== Store Buy Button Animation =====
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// ===== Easter Egg: Konami Code Unlocks Hidden Message =====
const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let inputSequence = [];

document.addEventListener('keydown', function(e) {
  inputSequence.push(e.key);
  if (inputSequence.slice(-10).toString() === secretCode.toString()) {
    alert("You've unlocked a secret! Keep building the future.");
    inputSequence = [];
  }
});
