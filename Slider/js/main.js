$(document).ready(function(){
  $('.slider_1').slick({
    slidesToShow: 6,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 465,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });
  $('.product-tabs').on('click', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.product').find('div.slider').removeClass('active-block').eq($(this).index()).addClass('active-block');
  });
  $('.product-tabs').on('click', function() {
    $('.slider').eq($(this).index())
        .slick({
        slidesToShow: 6,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 465,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });
});