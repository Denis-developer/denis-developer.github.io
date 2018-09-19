document.addEventListener('DOMContentLoaded', function () {
	
	// MODAL
	let btn = document.getElementsByTagName('button'),
			modalWrapper = document.getElementsByClassName('popup-wrapper'),
			modalClose = document.getElementsByClassName('popup-close'),
			form = document.getElementsByTagName('form')[0];

	for(let i = 0; i < btn.length; i++){
		btn[i].addEventListener('click', function () {
			for(let y = 0; y < modalWrapper.length; y++){
				modalWrapper[y].style.display = "block";				
			}
		});
	}

	for(let i = 0; i < modalClose.length; i++){
		modalClose[i].addEventListener('click', function (event) {
			event.preventDefault();
			modalWrapper[i].style.display = "none";				
		});
	}

	form.addEventListener('submit', function (argument) {
		event.preventDefault();
	})

	// ЯКОРЯ
	var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
	    V = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
	for (var i = 0; i < linkNav.length; i++) {
	    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
	        e.preventDefault(); //отменяем стандартное поведение
	        var w = window.pageYOffset,  // производим прокрутка прокрутка
	            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
	        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
	            start = null;
	        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
	        function step(time) {
	            if (start === null) start = time;
	            var progress = time - start,
	                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
	            window.scrollTo(0,r);
	            if (r != w + t) {
	                requestAnimationFrame(step)
	            } else {
	                location.hash = hash  // URL с хэшем
	            }
	        }
	    }, false);
	}
});