var hum = document.getElementsByClassName('humburger')[0];
var hideMenu = document.getElementsByClassName('hideMenu')[0];
var mainBlock = document.getElementsByClassName('main__block')[0];

hum.addEventListener('click', function () {
	hideMenu.classList.toggle('blocks');
	mainBlock.classList.toggle('paddingZero');
})