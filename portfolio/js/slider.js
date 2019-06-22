$(document).ready(function(){
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: true,         
          prevArrow: '<button class="prev"></button>',
          nextArrow: '<button class="next"></button>'
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    infinite: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows : false
        }
      }
    ]
  });

  var num = 0,
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev');

  prev.style.display = 'none';

  next.addEventListener('click', function () {
    if(document.getElementsByClassName('slider-one')[0].classList.contains('slick-active')){
      prev.style.display = 'none';
    }
    else{
      prev.style.display = 'block';
    }
    if(document.getElementsByClassName('slider-last')[0].classList.contains('slick-active')){
      next.style.display = 'none';
    }
    else{
      next.style.display = 'block';
    }
  })

  prev.addEventListener('click', function () {
    if(document.getElementsByClassName('slider-one')[0].classList.contains('slick-active')){
      prev.style.display = 'none';
    }
    else{
      prev.style.display = 'block';
    }
    if(document.getElementsByClassName('slider-last')[0].classList.contains('slick-active')){
      next.style.display = 'none';
    }
    else{
      next.style.display = 'block';
    }
  })


});