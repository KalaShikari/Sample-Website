//Navbar
const headerClose = document.querySelector('.header-close');
const navLinks = document.querySelector('.nav-links');

headerClose.addEventListener('click', function(){
    navLinks.classList.toggle('active');
})

//Navbar end

//Modal
const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})