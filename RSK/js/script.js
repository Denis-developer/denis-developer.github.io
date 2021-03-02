window.addEventListener('DOMContentLoaded', function() {

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    swipe: false,
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  const swiper1 = new Swiper('.sertificates-container', {
    speed: 400,
    slidesPerView: 6,
    slidesPerGroup: 1,
    pagination: {
      el: '.sertificates-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      319: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 2
      },
      820: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 5,
        slidesPerGroup: 1
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1
      }
    }
  });

  $(function(){
    $(".gallery__container").twentytwenty();
  });

});
