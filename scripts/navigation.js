document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    document.querySelector('#hero'),
    document.querySelector('#about'),
    document.querySelector('#team'),
    document.querySelector('#contact'),
  ];
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => section && observer.observe(section));
});

// reduce the animation while not in the view
let scrollTimeout;
window.addEventListener('scroll', () => {
  document.body.classList.add('scrolling');
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling');
  }, 200);
});
