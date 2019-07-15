jQuery(document).ready(function($) {

	$('.faq-link').click(function(event) {
		$(this).toggleClass('in').next().slideToggle();
		$(this).children().toggleClass('active-circle');
		$(this).toggleClass('black');
	});

    $('.header-humburger').click(function(event) {
    	event.preventDefault();
        $('.menu').toggleClass('dn');
    });

});