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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
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
        if(mobileMenu.style.opacity == "1"){
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
    }
    else{
      header.css({
        'position': 'fixed',
        'top': '0px',
        'background': '#fff'
      });
    }
  })

  let menuBtn = document.getElementsByClassName('menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-btn_active');
      if(this.classList.contains('menu-btn_active')){
        mobileMenu.style.visibility = 'visible';
        mobileMenu.style.opacity = '1';
        if(min1200.matches){
          header.css({
            'position': 'fixed',
            'top': '0px',
            'background': '#fff'
          });
        }
      }
      else{
        mobileMenu.style.visibility = 'hidden';
        mobileMenu.style.opacity = '0';
        if(min1200.matches && document.documentElement.scrollTop >= 50){
          header.css({
            'position': 'fixed',
            'top': '0px',
            'background': '#fff'
          });
        }
        else if(min1200.matches && document.documentElement.scrollTop < 50){
          header.css({
            'background': 'transparent'
          });
        }
      }
    });
  }

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event) {
      mobileMenu.style.visibility = 'hidden';
      mobileMenu.style.opacity = '0';
      for (var i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.toggle('menu-btn_active');
      }
      if(min1200.matches){
        header.css({
          'position': 'fixed',
          'top': '0px',
          'background': '#fff'
        });
      }
    });
  }

  // ANHCOR
  let headerHeight = header.height();
  $('.anchor').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top - headerHeight - 30;
    $('body,html').animate({scrollTop: top}, 800);
  });

  // LINK UP
  let linkUp = document.querySelector('.link-up');

  document.addEventListener('scroll', function (e) {
    if(document.documentElement.scrollTop >= 500){
      linkUp.style.visibility = 'visible';
      linkUp.style.opacity = '1';
    }
    else{
      linkUp.style.visibility = 'hidden';
      linkUp.style.opacity = '0';
    }
  })

});
