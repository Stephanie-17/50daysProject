const icon = document.getElementById('search-icon')
const input = document.querySelector('.search-input');

icon.addEventListener('click', () => {
  if (input.classList.contains('active')) {
    input.classList.add('normal');
    input.classList.remove('active');
   
    input.addEventListener('animationend', () => {
      input.classList.remove('normal');
    });
  } else {
    input.classList.add('active');
  }
});