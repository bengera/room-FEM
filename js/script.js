'use strict'

const scrollLeft = document.querySelector('.t-content__btn-scroll--left')
const scrollRight = document.querySelector('.t-content__btn-scroll--right')

// let imageArr = ['img/desktop-image-hero-1.jpg','img/desktop-image-hero-2.jpg','img/desktop-image-hero-3.jpg'];
// let currentIdx = 0;



scrollLeft.addEventListener('click', ()=> {
    document.querySelector('.navigation').style.backgroundImage = "url('img/desktop-image-hero-1.jpg')";
    console.log('left')

})

scrollRight.addEventListener('click', ()=> {
    
    document.querySelector('.navigation').style.backgroundImage = "url('img/desktop-image-hero-2.jpg')";
    // navigation.style.backgroundImage = "url('img/desktop-image-hero-1.jpg')";
    console.log('right')
    
    
})

//HAMBURGER MENU

const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});