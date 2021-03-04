window.addEventListener('DOMContentLoaded', function() {

  const swiper = new Swiper('.reporting-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
      navigation: {
      nextEl: '.swiper-1-button-next',
      prevEl: '.swiper-1-button-prev',
    }
  });

  const swiper2 = new Swiper('.grow-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
      navigation: {
      nextEl: '.swiper-2-button-next',
      prevEl: '.swiper-2-button-prev',
    }
  });
  const swiper3 = new Swiper('.compliance-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.compliance-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  $('.anchor').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    if(this.classList.contains('menu-btn_active')){
      mobileMenu.style.display = 'flex';
      document.documentElement.scrollTop = 0;
      document.getElementsByTagName('body')[0].style.overflowY = "hidden";
      document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    else{
      mobileMenu.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event){
      event.preventDefault();
      menuBtn.classList.toggle('menu-btn_active')
      mobileMenu.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    })
  }

  // $(window).scroll(function(){
  //   alert(document.documentElement.scrollTop);
  // })
  // alert($('.cultivation').offset().top);

});
