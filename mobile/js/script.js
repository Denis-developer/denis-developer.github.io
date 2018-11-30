document.addEventListener('DOMContentLoaded', function () {
	let btn1 = document.querySelector('.btn-submit'),
		  btn2 = document.querySelector('.btn-back'),
		  input = document.getElementsByTagName('input');

	for(let i = 0;i < input; i++){
		if(input[i].focus){
			btn1.style.display = 'none';
			btn2.style.display = 'none';
		}
	}
})