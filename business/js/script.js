window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('tab-content'),
		info = document.getElementsByClassName('tabs')[0];

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
		for (let z = 0; z < tab.length; z++){
			tab[z].classList.remove('tab-active');
		}
		if(target.className == 'tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					tab[i].classList.add('tab-active');
					showTabContent(i);
					break;
				}
			}
		}
	})	

	let humburger = document.getElementsByClassName('humburger'),
	      menu = document.querySelector('.menu'),
	      popupClose = document.getElementsByClassName('popup-close');

  // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }

})