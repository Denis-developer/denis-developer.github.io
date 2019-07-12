window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('main-tab'),
		tabContent = document.getElementsByClassName('main-block'),
		info = document.getElementsByClassName('main-wrapper')[0],
		modal = document.getElementsByClassName('main-popupStatus'),
		modalClose = document.getElementsByClassName('main-popupStatus__close'),
		modalOpen = document.getElementsByClassName('main-blockTitle__status_2');

		
	// Программирование табов

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
		if(target.className == 'main-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					tab[i].classList.add('tab-active');
					showTabContent(i);
					break;
				}
			}
		}
	})	

	// Номер заказа

	$('.main-order__num').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('in').parent().parent().next().slideToggle();
		$(this).children().toggleClass('rotate');
	});

	$('.main-order__num a').click(function() {
		event.preventDefault();
		this.classList.toggle('blue');
	});

	// Модальное окно статуса

	for(let i = 0; i < modalOpen.length; i++){
      modalOpen[i].addEventListener('click', function (event) {
        let num = this.getAttribute('data-nubmer');
        modalOpen[i].style.color = "red";
        for(let z = 0; z < modal.length; z++){
          if(modal[z].getAttribute('data-nubmer') == num)
        	modal[z].classList.remove('dn');
        	modal[z].classList.add('db');
          }
      });
    }

    for(let i = 0; i < modalClose.length; i++){
      modalClose[i].addEventListener('click', function (event) {
        event.preventDefault();
        for ( let y = 0; y < modal.length; y++){
        	modal[y].classList.remove('db');
        	modal[y].classList.add('dn');
        }
        for (let z = 0; z < modalOpen.length; z++){
        	modalOpen[z].style.color = "#6c7293";
        }
      });
    }
		

})