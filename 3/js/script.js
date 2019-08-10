jQuery(document).ready(function($) {

	// Якоря
	$('.link-down').on('click', function(event) {
          event.preventDefault();
          var id = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 800);
      });
	
});