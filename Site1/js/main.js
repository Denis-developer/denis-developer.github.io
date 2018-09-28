$(document).ready(function(){
  $('.media-slider').slick({
    infinite: true,
    slidesToShow: 3,
	  slidesToScroll: 1,
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
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    }
  	]
  });
  let   humburger = document.getElementsByClassName('humburger'),
        menu = document.querySelector('.menu');

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }
    $('.menu__link, .header-menu__link').on('click', function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
    });
});