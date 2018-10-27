$(document).ready(function(){
  $('.main-slider').slick({
  	dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev"><img src="img/arrow-prev.png" alt="" /></button>',
    nextArrow: '<button class="next"><img src="img/arrow-next.png" alt="" /></button>',
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
  });
});