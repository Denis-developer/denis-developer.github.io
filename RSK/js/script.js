window.addEventListener('DOMContentLoaded', function() {

  $(function(){
    $(".gallery__container").twentytwenty({
      no_overlay: true
    });
  });

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    swipe: false,
    allowTouchMove: false,
    centeredSlides: true,
    autoHeight: true,
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

  let modalWrapper = document.querySelector('.modal__wrapper'),
      modalClose = document.querySelector('.modal__close'),
      modalOpen = document.getElementsByClassName('btn-modal');

  for (var i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', function(event){
      event.preventDefault();
      modalWrapper.style.display = 'flex';
    });
  }

  modalClose.addEventListener('click', function(event){
    event.preventDefault();
    modalWrapper.style.display = 'none';
  });




});
