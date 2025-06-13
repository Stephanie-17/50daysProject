// Attach an event listener to every .faq-toggle container.
document.querySelectorAll('.faq-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    const faqToggle = e.currentTarget;
    
    
    const grandParent = faqToggle.parentElement;
    const isActive = grandParent.classList.toggle('active');
    
   
    const angleIcon = faqToggle.querySelector('.fa-angle-down');
    const closeIcon = faqToggle.querySelector('.fa-circle-xmark');
    

    if (isActive) {
      angleIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      angleIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
});