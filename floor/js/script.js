$(document).ready(function(){
  $('.main-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 6,
	  slidesToScroll: 3,
  	responsive: [
	    {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  	]
  });
});