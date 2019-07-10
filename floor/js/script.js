$(document).ready(function(){
  $('.main-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 6,
	  slidesToScroll: 3,
  	responsive: [
	    {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 2
	      }
	    }
  	]
  });
});