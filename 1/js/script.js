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
		sliderBlock1 = document.getElementsByClassName('slider-block1'),
		sliderNumber1 = document.querySelector('.slider-number1'),
		activeNumber1 = document.querySelector('.active-number1'),
		number = 0,
		active = 1,
		number1 = 0,
		active1 = 1;

	for( let i = 0; i < sliderBlock.length; i++){
		number++;
	}
	for( let i = 0; i < sliderBlock1.length; i++){
		number1++;
	}

	$('.slider1 .slick-prev').css('display', 'none');
	$('.slider2 .slick-prev').css('display', 'none');
	// Первый слайдер
	$('.slider1 .slick-next').on('click', function(event) {
		++active;
		activeNumber.innerHTML = active;
		if(activeNumber.innerHTML == number){
			$('.slider1 .slick-next').css('display', 'none');
		}
		else if(activeNumber.innerHTML > '1'){
			$('.slider1 .slick-prev').css('display', 'block');
		}
	});

	$('.slider1 .slick-prev').on('click', function(event) {
		--active;
		activeNumber.innerHTML = active;
		if(activeNumber.innerHTML == '1'){
			$('.slider1 .slick-prev').css('display', 'none');
		}
		else if(activeNumber.innerHTML < number){
			$('.slider1 .slick-next').css('display', 'block');
		}
	});
	// Второй слайдер
	$('.slider2 .slick-next').on('click', function(event) {
		++active1;
		activeNumber1.innerHTML = active1;
		if(activeNumber1.innerHTML == number1){
			$('.slider2 .slick-next').css('display', 'none');
		}
		else if(activeNumber1.innerHTML > '1'){
			$('.slider2 .slick-prev').css('display', 'block');
		}
	});
	
	$('.slider2 .slick-prev').on('click', function(event) {
		--active1;
		activeNumber1.innerHTML = active1;
		if(activeNumber1.innerHTML == '1'){
			$('.slider2 .slick-prev').css('display', 'none');
		}
		else if(activeNumber1.innerHTML < number){
			$('.slider2 .slick-next').css('display', 'block');
		}
	});

	sliderNumber.innerHTML = number;
	sliderNumber1.innerHTML = number1;


	

});