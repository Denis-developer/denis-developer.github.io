window.addEventListener('DOMContentLoaded', function() {

  let custSelect = document.querySelector('.header-select');
  let select = document.querySelector('.header-select select');

  select.addEventListener('click', function(){
    custSelect.classList.toggle('select-active');
  })

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: '4%',
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
       300: {
         slidesPerView: 1,
         spaceBetween: 16,
         slidesPerGroup: 1,
         centeredSlides: true
       },
       600: {
         slidesPerView: 2,
         spaceBetween: 30,
         slidesPerGroup: 1
       },
       992: {
         slidesPerView: 3,
         spaceBetween: 40,
         slidesPerGroup: 1
       },
       1200: {
         slidesPerView: 4,
         slidesPerGroup: 1
       }
     }
  });

  var mySwiper = new Swiper('.main-sliderContainer', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  })

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menuWrapper'),
      mobileMenuLinks = document.querySelectorAll('.mobile-menuNav a');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    // if(this.classList.contains('menu-btn_active')){
    //   mobileMenu.style.transform = 'scale(1)';
    //   document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    // }
    // else{
    //   mobileMenu.style.transform = 'scale(0)';
    //   document.getElementsByTagName('html')[0].style.overflowY = "visible";
    // }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event) {
      mobileMenu.style.transform = 'scale(0)';
      header.classList.toggle('popup-open');
      menuBtn.classList.toggle('menu-btn_active');
      document.getElementsByTagName('html')[0].style.overflowY = "visible";
      logo.src = 'img/logo.svg';
    });
  }

});
