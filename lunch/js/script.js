document.addEventListener('DOMContentLoaded', function () {
	
	let humburger = document.getElementsByClassName('humburger'),
			menu = document.querySelector('.menu'),
			wrapper = document.querySelector('.wrapper');

	// АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active-hum');
            menu.classList.toggle('trans');
            wrapper.classList.toggle('dn');
        });
    }

})