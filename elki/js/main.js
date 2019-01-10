$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
	  slidesToScroll: 1,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
	  slidesToScroll: 1,
    dots: true,
    arrow: false
  });

  let humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu');
      
  // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }

    // Прелоадер

  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 2000);

});