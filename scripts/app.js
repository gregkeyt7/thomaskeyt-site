// File: scripts/app.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const links = document.querySelectorAll(".nav-links a");
  const current = location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  // Fade-in effect on scroll
  const faders = document.querySelectorAll('.fade-in, .highlight, .blog-card, .newsletter');
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Animate hero section on page load
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add("fade-in");
    }, 300);
  }
});

