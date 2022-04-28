 const menutBtn = document.querySelector('.menu-btn');
 const navLinks = document.querySelector('.nav-links');

 menutBtn.addEventListener('click', () => {
     navLinks.classList.toggle('mobile-menu')
 })
