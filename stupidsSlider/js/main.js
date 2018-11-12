$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 6,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>'
  });
  $('.product-tabs').on('click', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.product').find('div.slider').removeClass('active-block').eq($(this).index()).addClass('active-block');
  });
});