$(document).ready(function(){
    $('.main__link, .menu__link, .features__arrow').click( function(){ 
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; // выключаем стандартное действие
    });

    var humburger = document.getElementsByClassName('humburger'),
				menu = document.querySelector('.menu'),
				close = document.getElementsByClassName('modal__close'),
				modalWrapper = document.getElementsByClassName('modal__wrapper'),
				modalWrapper1 = document.querySelector('.modal__wrapper1'),
				modalWrapper2 = document.querySelector('.modal__wrapper2'),
				modalWrapper3 = document.querySelector('.modal__wrapper3'),
				modalWrapper4 = document.querySelector('.modal__wrapper4'),
				modalWrapper5 = document.querySelector('.modal__wrapper5'),
				modalWrapper6 = document.querySelector('.modal__wrapper6'),
				modalWrapper7 = document.querySelector('.modal__wrapper7'),
				modalWrapper8 = document.querySelector('.modal__wrapper8'),
				btn = document.getElementsByTagName('button');

			for(var i = 0; i < humburger.length; i++){
				humburger[i].addEventListener('click', function () {
					this.classList.toggle('active');
					menu.classList.toggle('dn');
				});
			}
});

	