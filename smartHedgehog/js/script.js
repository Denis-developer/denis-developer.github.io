window.addEventListener('DOMContentLoaded', function() {

  $('.comment-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  $('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-nav'
  });

  $('.gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery-slider',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          arrows: false
        }
      }
    ]
  });

  $(".contact-form__tel").mask("+7 (999)999-99-99");

  // HEADER FIXED
  let header = $('.header');
  const min1200 = window.matchMedia( "(min-width: 1200px)" );

  document.addEventListener('scroll', function (e) {
    if(min1200.matches){
      if(document.documentElement.scrollTop >= 50){
        header.css({
          'position': 'fixed',
          'top': '0px',
          'background': '#fff'
        });
      }
      else{
        header.css({
          'position': 'absolute',
          'top': '50px',
          'background': 'transparent'
        });
      }
    }
    else{
      header.css({
        'position': 'fixed',
        'top': '0px',
        'background': '#fff'
      });
    }
  })

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    if(this.classList.contains('menu-btn_active')){
      mobileMenu.style.transform = 'scale(1)';
    }
    else{
      mobileMenu.style.transform = 'scale(0)';
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event) {
      mobileMenu.style.transform = 'scale(0)';
      menuBtn.classList.toggle('menu-btn_active');
    });
  }

});
