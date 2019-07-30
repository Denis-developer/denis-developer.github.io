jQuery(document).ready(function($) {
		
	// Работа табов в блоке "Вопросы / ответы"

	let tab = document.getElementsByClassName('answer-tab'),
		tabContent = document.getElementsByClassName('answer-ask'),
		info = document.getElementsByClassName('answer-tabs')[0],
		question = document.getElementsByClassName('answer-question');

	for( let i = 0; i < question.length; i++){
		question[i].addEventListener('click', function (event) {
			event.preventDefault();
		})
	}
	

	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		event.preventDefault();
		if(target.className == 'answer-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					for (let z = 0; z < tab.length; z++){
						tab[z].classList.remove('active-tab');
					}
					tab[i].classList.add('active-tab');
					showTabContent(i);
					break;
				}
			}
		}
	})	

	// На мобильной версии "Вопрос / Ответ"
	$('.answer-tab').on('click', function() {
		event.preventDefault();
		if($('.answer-tabs').hasClass('open')){
			$('.answer-tabs').removeClass('open');	
			$('.answer-tabs').css('overflow', 'hidden');
		}
		else{
			$('.answer-tabs').addClass('open');
			$('.answer-tabs').css('overflow', 'visible');
		}
	});
	// Появление меню при скролле вверх

	var lastScrollTop = 0;
	var $height = $(window).height(); // Высота экрана 
	var heightToCommun = $(".communication").offset().top;
 
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if($(this).scrollTop() >= 200 && window.pageYOffset < heightToCommun){
			if (st > lastScrollTop){
			   $('.header').css('position', 'absolute');
			   $('.header').css('backgroundColor', 'transparent');
			} 
			else {
			   $('.header').css('position', 'fixed');
		       $('.header').css('backgroundColor', '#0A121C');
			}
		}
		else{
			   $('.header').css('position', 'absolute');
			   $('.header').css('backgroundColor', 'transparent');
		}
		lastScrollTop = st;
	});

	// messenger
	
	$(window).scroll(function(){
		if(window.pageYOffset >= 1 && window.pageYOffset <= heightToCommun - $height){
	        $('.messenger').css('display', 'block');
	      }
	      else{
	        $('.messenger').css('display', 'none');
		  }
	});
	
	$('.messenger-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('fade');
		$('img.messenger-btn__img').css('display', 'none');
		$('.messenger-close').toggleClass('anim-2');
		if(this.classList.contains('fade')){
			$('.messenger-list').fadeIn(400);
		}
		else{
			$('.messenger-list').fadeOut(400);
			$('img.messenger-btn__img').css('display', 'block');
		}
	});

	function fadeMess(){
		setTimeout(function() {
		  $('.imess').css('opacity', '1');
		}, 0);
		setTimeout(function() {
		  $('.imess').css('opacity', '0');
		}, 5000);
		setTimeout(function() {
		  $('.itel').css('opacity', '1');
		}, 5500);
		setTimeout(function() {
		  $('.itel').css('opacity', '0');
		}, 10500);
		setTimeout(function() {
		  $('.imess').css('opacity', '1');
		}, 11000);
	}

	setInterval(fadeMess, 11000)

	// Выравнивание блоков по самому высокому "Вопрос / Ответ"
	$.fn.equivalent = function (){
			var $blocks = $(this),
        	maxH    = $blocks.eq(0).height();
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH);
    }
	$('.answer-ask').equivalent();
		
	$(window).on('resize', function () { 
		$('.answer-ask').css('height','auto').equivalent();
	})
		

});