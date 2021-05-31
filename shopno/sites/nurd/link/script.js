$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	}, 4000);
});