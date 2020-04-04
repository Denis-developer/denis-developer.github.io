  let tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('project-block'),
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
		event.preventDefault();
		if(target.className == 'tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					for (let z = 0; z < tab.length; z++){
						tab[z].classList.remove('active-tab');
					}
					tab[i].classList.add('active-tab');
					showTabContent(i);
					break;
				}
			}
		}
	})
