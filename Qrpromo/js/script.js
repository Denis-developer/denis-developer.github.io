window.addEventListener('DOMContentLoaded', function() {

  // МОБИЛЬНОЕ МЕНЮ
  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menuWrapper'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    if(this.classList.contains('menu-btn_active')){
      mobileMenu.style.transform = 'scale(1)';
      document.getElementsByTagName('body')[0].style.overflowY = "hidden";
      document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    else{
      mobileMenu.style.transform = 'scale(0)';
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event) {
      mobileMenu.style.transform = 'scale(0)';
      menuBtn.classList.toggle('menu-btn_active');
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    });
  }

  // SWIPER JS
  var mySwiper = new Swiper('.clients-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 34,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
       320: {
         slidesPerView: 2,
         spaceBetween: 24,
         slidesPerGroup: 1,
         autoplay: false
       },
       576: {
         slidesPerView: 3,
         spaceBetween: 20,
         slidesPerGroup: 1,
         autoplay: false
       },
       768: {
         slidesPerView: 5,
         spaceBetween: 20,
         slidesPerGroup: 1
       },
       992: {
         slidesPerView: 6,
         spaceBetween: 34,
         slidesPerGroup: 1
       }
     }
  })

  // ANCHOR

  const anchors = document.querySelectorAll('a[href^="#"]');

  for(let anchor of anchors){
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    })
  }

});
