document.addEventListener('DOMContentLoaded', function () {
	let humburger = document.getElementsByClassName('humburger'),
	    span = document.getElementsByClassName('line'),
  		section1 = document.querySelector('.section-1'),
      section2 = document.querySelector('.section-2'),
  		section3 = document.querySelector('.section-3'),
  		section4 = document.querySelector('.section-4'),
  		section5 = document.querySelector('.section-5'),
  		section6 = document.querySelector('.section-6'),
  		section7 = document.querySelector('.section-7'),
  		section8 = document.querySelector('.section-8'),
      section2Logo = document.querySelector('.section-2__logo'),
      menu = document.querySelector('.menu');

      const max756 = window.matchMedia( "(max-width: 756px)" );

	// АНИМАЦИЯ ГАМБУРГЕРА

    for (let i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
            for (let i = 0; i < span.length; i++) {
  		        span[i].style.background = '#000';
  		    }
        });
    }

    
     section1.addEventListener('wheel', function (e) {
      if (e.deltaY > 0){
        for (let i = 0; i < span.length; i++) {
              span[i].style.background = '#fff';
          }
      }
    })
     section2.addEventListener('wheel', function () {
          for (let i = 0; i < span.length; i++) {
              span[i].style.background = '#000';
          }
        })
     section3.addEventListener('wheel', function (e) {
          if (e.deltaY < 0){
            for (let i = 0; i < span.length; i++) {
                  span[i].style.background = '#fff';
              }
          }
        })
     section4.addEventListener('wheel', function (e) {
          if (e.deltaY > 0){
            for (let i = 0; i < span.length; i++) {
                  span[i].style.background = '#fff';
              }
          }
        })

     section5.addEventListener('wheel', function () {
          for (let i = 0; i < span.length; i++) {
              span[i].style.background = '#000';
          }
        })
     section6.addEventListener('wheel', function (e) {
          if (e.deltaY < 0){
            for (let i = 0; i < span.length; i++) {
                  span[i].style.background = '#fff';
              }
          }
        })
     section7.addEventListener('wheel', function (e) {
          if (e.deltaY > 0){
            for (let i = 0; i < span.length; i++) {
                  span[i].style.background = '#fff';
              }
          }
        })
     section8.addEventListener('wheel', function (e) {
          if (e.deltaY < 0){
            for (let i = 0; i < span.length; i++) {
                  span[i].style.background = '#000';
              }
          }
        })

     if(max756.matches){
      section2Logo.src = 'img/logo-2.png';
     }
	
})