window.addEventListener('DOMContentLoaded', function() {

  $('.comment-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
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
    nextArrow: $('.next')
  });

  $(".contact-form__tel").mask("+7 (999)999-99-99");
});
