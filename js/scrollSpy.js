const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => {
  observer.observe(section);
});

// Para que el navbar se vea solo

const hero = document.getElementById("hero");
const nav = document.querySelector("nav");

const observador = new IntersectionObserver(
  
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  },
  {
    threshold: 0.1
  }
  
);

observador.observe(hero);