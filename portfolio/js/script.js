window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('main-tabs__tab'),
		tabContent = document.getElementsByClassName('main-portfolio'),
		info = document.getElementsByClassName('main-tabs')[0];

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
			tab[z].classList.remove('active');
		}
		if(target.className == 'main-tabs__tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					tab[i].classList.add('active');
					showTabContent(i);
					break;
				}
			}
		}
	})	

	let tabs = document.getElementsByClassName('main-list__tab'),
		tabContents = document.getElementsByClassName('main-blocks'),
		infos = document.getElementsByClassName('main-list')[0];

	function hideTabContents(a) {
		for(let i = a; i < tabContents.length; i++){
			tabContents[i].classList.remove('show');
			tabContents[i].classList.add('hide');
		}
	}

	hideTabContents(1)

	function showTabContents(b) {
		if(tabContents[b].classList.contains('hide')){
			hideTabContents(0);
			tabContents[b].classList.remove('hide');
			tabContents[b].classList.add('show');
		}
	}

	infos.addEventListener('click', function (event) {
		let target = event.target;
		for (let z = 0; z < tabs.length; z++){
			tabs[z].classList.remove('fw');
		}
		if(target.className == 'main-list__tab'){
			for(let i = 0; i < tabs.length; i++){
				if(target == tabs[i]){
					tabs[i].classList.add('fw');
					showTabContents(i);
					break;
				}
			}
		}
	})

})