// index.js — Fixed Smooth Scroll + External Links Allowed

// Smooth scroll only for internal #links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // INTERNAL links: #home, #about, #apps, etc.
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    // EXTERNAL links (signup.html) will open normally
  });
});

// Fade-in animation for sections
const sections = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.7s ease";
  observer.observe(sec);
});
