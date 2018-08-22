var modal = document.getElementsByClassName('modal__overlay')[0];
var close = document.getElementsByClassName('modal__close')[0];
var btn = document.getElementsByClassName('btn__modal');

for(var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function () {
	modal.style.display = 'block';
});
}

close.addEventListener('click', function () {
	modal.style.display = 'none';
});