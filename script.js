// 導覽列滾動效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 區塊滑入動畫
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
