const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % pages.length;
  showPage(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + pages.length) % pages.length;
  showPage(current);
});









