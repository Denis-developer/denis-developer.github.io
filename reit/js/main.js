document.addEventListener('DOMContentLoaded', function () {
	let btnPlay = document.querySelector('.main-play__link'),
			popupClose = document.querySelector('.popup-close'),
			popupWrapper = document.querySelector('.popup-wrapper'),
			humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu');

  // Модальное окно

	btnPlay.addEventListener('click', function (event) {
		event.preventDefault();
		popupWrapper.style.display = 'block'
	})
	popupClose.addEventListener('click', function (event) {
		event.preventDefault();
		popupWrapper.style.display = 'none'
	})

	// АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }
	
})