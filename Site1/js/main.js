﻿$(document).ready(function(){
  $('.media-slider').slick({
    infinite: true,
    slidesToShow: 3,
	  slidesToScroll: 1,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
  	responsive: [
	    {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    }
  	]
  });
  let humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu'),
      modalOpen = document.getElementsByClassName('media-open'),
      overlay = document.getElementsByClassName('popup-overlay'),
      popupClose = document.getElementsByClassName('popup-close');

  const max768 = window.matchMedia( "(max-width: 768px)" );
  const min769 = window.matchMedia( "(min-width: 769px)" );
  const min577 = window.matchMedia( "(min-width: 577px)" );

  // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }

    // ЯКОРЯ

    $('.menu__link, .header-menu__link, .link').on('click', function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
    });

    // ЛИПКОЕ МЕНЮ

    document.addEventListener('scroll', function (e) {
      if(document.documentElement.scrollTop > 0 && min769.matches){
        document.getElementsByClassName('header')[0].style.height = "80px";
        document.getElementsByClassName('header')[0].style.lineHeight = "80px";
      }
      else if (document.documentElement.scrollTop == 0 && min769.matches){
        document.getElementsByClassName('header')[0].style.height = "120px";
        document.getElementsByClassName('header')[0].style.lineHeight = "120px";
      }
      else if (document.documentElement.scrollTop > 0 && max768.matches && min577.matches){
        document.getElementsByClassName('header')[0].style.height = "100px";
        document.getElementsByClassName('header')[0].style.lineHeight = "50px";
      }
      else if (document.documentElement.scrollTop == 0 && max768.matches && min577.matches){
        document.getElementsByClassName('header')[0].style.height = "140px";
        document.getElementsByClassName('header')[0].style.lineHeight = "70px";
      }
    })

    // MODAL

    for(let i = 0; i < modalOpen.length; i++){
      modalOpen[i].addEventListener('click', function (event) {
        event.preventDefault();
        let num = this.getAttribute('data-nubmer');
        for(let z = 0; z < overlay.length; z++){
          if(overlay[z].getAttribute('data-nubmer') == num)
            overlay[z].style.display = 'block';
          }
      });
    }

    for(let i = 0; i < popupClose.length; i++){
      popupClose[i].addEventListener('click', function (event) {
        event.preventDefault();
        for(let z = 0; z < overlay.length; z++){
          overlay[z].style.display = 'none';
        }
      });
    }

    new WOW().init();
});