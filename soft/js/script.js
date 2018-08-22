jQuery(document).ready(function() {
  $('.main__link, .main__down, .room__btn, .main__btn').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
    });
  // -----------------------------------------
  $('#onePopup').on('click', function() {
  	$('#popup1').css('display', 'block');
  	 $('.popup__slider1').slick({
					responsive: [{

      breakpoint: 3924,
      settings: {
      	prevArrow: '<button class="prev"></button>',
      	nextArrow: '<button class="next"></button>'
      }

    }]
});
  });
  $('.popup__close').on('click', function(event) {
  	event.preventDefault();
  $('#popup1').css('display', 'none');
  });
 // -----------------------------------------
  $('#twoPopup').on('click', function() {
  	$('#popup2').css('display', 'block');
  	 $('.popup__slider2').slick({
					responsive: [{

      breakpoint: 3924,
      settings: {
      	prevArrow: '<button class="prev"></button>',
      	nextArrow: '<button class="next"></button>'
      }

    }]
});
  });
  $('.popup__close').on('click', function(event) {
  	event.preventDefault();
  $('#popup2').css('display', 'none');
  });
// -----------------------------------------
  $('#threePopup').on('click', function() {
  	$('#popup3').css('display', 'block');
  	 $('.popup__slider3').slick({
					responsive: [{

      breakpoint: 3924,
      settings: {
      	prevArrow: '<button class="prev"></button>',
      	nextArrow: '<button class="next"></button>'
      }

    }]
});
  });
  $('.popup__close').on('click', function(event) {
  	event.preventDefault();
  $('#popup3').css('display', 'none');
  });
  // -----------------------------------------

  });

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 1000);
}



  
