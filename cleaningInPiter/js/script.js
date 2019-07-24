window.addEventListener('DOMContentLoaded', function () {
	
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
		for (let z = 0; z < tab.length; z++){
			tab[z].classList.remove('active-tab');
		}
		if(target.className == 'answer-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
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
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if($(this).scrollTop() >= 200){
			if (st > lastScrollTop){
			   $('.header').removeClass('header-scroll');
			} else {
			   $('.header').addClass('header-scroll');
			}
		}
		else{
			$('.header').removeClass('header-scroll');
		}
		lastScrollTop = st;
	});

	// messanger
	var mainHeight = $(".features").offset().top;
	var mesHide = $(".footer-text").offset().top;
	var $height = $(window).height(); // Высота экрана 
	

	document.addEventListener('scroll', function () {
      if(document.documentElement.scrollTop >= mainHeight && document.documentElement.scrollTop <= mesHide - $height){
        $('.messanger').css('display', 'block');
      }
      else{
        $('.messanger').css('display', 'none');
	  }
    })
	
	$('.messanger-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('fade');
		$('img.messanger-btn__img').css('display', 'none');
		$('.messanger-close').toggleClass('anim-2');
		if(this.classList.contains('fade')){
			$('.messanger-list').fadeIn(400);
		}
		else{
			$('.messanger-list').fadeOut(400);
			$('img.messanger-btn__img').css('display', 'block');
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

})