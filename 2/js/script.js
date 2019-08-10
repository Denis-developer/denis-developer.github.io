jQuery(document).ready(function($) {
	
	$('.slider').slick({
	  infinite: false,
	  slidesToShow: 3,
  	  centerMode: true,
  	  speed: 200,
  	  swipe: false,
  	  centerPadding: '20px',
  	  prevArrow: '<button class="slick-prev"></button>',
	  nextArrow: '<button class="slick-next"></button>',
	  autoplay: false,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
  	  		centerMode: false,
	        swipe: true
	      }
	    }
	  ]
	});

	var sliderBlock = document.getElementsByClassName('slider-block'),
		sliderNumber = document.querySelector('.slider-number'),
		activeNumber = document.querySelector('.active-number'),
		number = 0,
		active = 1;

	for( let i = 0; i < sliderBlock.length; i++){
		number++;
	}

	$('.slick-prev').css('display', 'none');
	// Первый слайдер
	$('.slick-next').on('click', function(event) {
		++active;
		activeNumber.innerHTML = active;
		if(activeNumber.innerHTML == number){
			$('.slick-next').css('display', 'none');
		}
		else if(activeNumber.innerHTML > '1'){
			$('.slick-prev').css('display', 'block');
		}
	});

	$('.slick-prev').on('click', function(event) {
		--active;
		activeNumber.innerHTML = active;
		if(activeNumber.innerHTML == '1'){
			$('.slick-prev').css('display', 'none');
		}
		else if(activeNumber.innerHTML < number){
			$('.slick-next').css('display', 'block');
		}
	});

	sliderNumber.innerHTML = number;

	// Якоря
	$('.link-down').on('click', function(event) {
          event.preventDefault();
          var id = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 800);
      });
});