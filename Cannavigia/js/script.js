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
      menuBtn.classList.toggle('menu-btn_active')
      mobileMenu.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    })
  }

  let num = document.getElementsByClassName('menu__link');
  let blocks = document.getElementsByClassName('section');


  $(window).scroll(function(){
    if($('html').scrollTop()+20 >= $('.business').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[9].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.app').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[8].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.clone').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[7].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.grow').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[6].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.cultivation').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[5].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.reporting').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[4].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.certificate').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[3].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.compliance').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[2].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.market').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[1].style.fontWeight = "700";
    }
    else if($('html').scrollTop()+20 >= $('.main').offset().top){
      for (var i = 0; i < num.length; i++) {
        num[i].style.fontWeight = "400";
      }
      num[0].style.fontWeight = "700";
    }
  })


});
