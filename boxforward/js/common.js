// ANIMATIONS
jQuery(document).ready(function() {
	$("body").children().each(function() {
			$(this).html($(this).html().replace(/&#8232;/g," "));
	});
	var home_short_btn = $(".home-short-info_describe_steps_container_position_content .__link");
	home_short_btn.click(function() {
		$(this).siblings(".__content").toggleClass('show')
	});
	$(".home-short-info_describe_head-title").waypoint(function() {
		$('.home-short-info_describe_head-title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_title").waypoint(function() {
		$('.home-short-info_describe_title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_step-title").waypoint(function() {
		$('.home-short-info_describe_step-title').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_steps_container_position:first-child").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:first-child').addClass('animate');
	}, { offset: '100%'});
	$(".home-short-info_describe_steps_container_position:nth-child(3)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(3)').addClass('animate');
	}, { offset: '100%'});

	$(".home-short-info_describe_steps_container_position:nth-child(2)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(2)').addClass('animate');
	}, { offset: '100%'});
	$(".home-short-info_describe_steps_container_position:nth-child(4)").waypoint(function() {
		$('.home-short-info_describe_steps_container_position:nth-child(4)').addClass('animate');
	}, { offset: '100%'});

	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_reason-container > .__title').addClass('animate');
	}, { offset: '100%'});
	$(".home-reasons_title").waypoint(function() {
		$('.home-reasons_reason_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-services_title").waypoint(function() {
		$('.home-services_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-services_title").waypoint(function() {
		$('.home-services_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-payments-method").waypoint(function() {
		$('.home-payments-method_title').addClass('animate');
	}, { offset: '100%'});
	$(".home-payments-method").waypoint(function() {
		$('.home-payments-method_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-service-info").waypoint(function() {
		$('.home-service-info_position').addClass('animate');
	}, { offset: '100%'});
	$(".home-about-us").waypoint(function() {
		$('.home-about-us_content').addClass('animate');
	}, { offset: '100%'});
	$(".home-about-us").waypoint(function() {
		$('.home-about-us_feedback-form').addClass('animate');
	}, { offset: '100%'});
	$(".home-start-shopping").waypoint(function() {
		$('.home-start-shopping_title > .__title').addClass('animate');
	}, { offset: '100%'});	



	// MODAL LINKS
	if (document.location.href.indexOf('showModalTC') != -1) {
	  $("#modal_terms-cond").modal('show');
	};
	if (document.location.href.indexOf('showModalRT') != -1) {
	  $("#modal_terms-cond").modal('show');
	};
	if (document.location.href.indexOf('showModalPP') != -1) {
	  $("#modal_terms-cond").modal('show');
	};
});
