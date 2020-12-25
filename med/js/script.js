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
       320: {
         slidesPerView: 1,
         slidesPerGroup: 1
       },
       685: {
         slidesPerView: 2,
         spaceBetween: 20,
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
       // 768: {
       //   slidesPerView: 5,
       //   spaceBetween: 20,
       //   slidesPerGroup: 1
       // },
       // 992: {
       //   slidesPerView: 6,
       //   spaceBetween: 34,
       //   slidesPerGroup: 1
       // }
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

});
