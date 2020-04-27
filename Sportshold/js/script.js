window.addEventListener('DOMContentLoaded', function() {
  // ТАБЫ
    let tab = document.getElementsByClassName('tab'),
    		tabContent1 = document.getElementsByClassName('product-wrapper'),
    		tabContent2 = document.getElementsByClassName('recall-text'),
    		info = document.getElementsByClassName('tabs');

    // СКРЫТИЕ ВСЕХ ТАБОВ КРОМЕ ПЕРВОГО
  	function hideTabContent1(a) {
  		for(let i = a; i < tabContent1.length; i++){
  			tabContent1[i].classList.remove('show');
  			tabContent1[i].classList.add('hide');
  		};
  	};

  	function hideTabContent2(a) {
  		for(let i = a; i < tabContent2.length; i++){
  			tabContent2[i].classList.remove('db');
  			tabContent2[i].classList.add('hide');
  		};
  	};

  	hideTabContent1(1);
  	hideTabContent2(1);

  	function showTabContent1(b) {
  		if(tabContent1[b].classList.contains('hide')){
  			hideTabContent1(0);
  			tabContent1[b].classList.remove('hide');
  			tabContent1[b].classList.add('show');
  		};
  	};
  	function showTabContent2(b) {
  		if(tabContent2[b].classList.contains('hide')){
  			hideTabContent2(0);
  			tabContent2[b].classList.remove('hide');
  			tabContent2[b].classList.add('db');
  		};
  	};

    for (var i = 0; i < info.length; i++) {
      info[i].addEventListener('click', function (event) {
    		let target = event.target;
    		event.preventDefault();
    		if(target.className == 'tab product-tab'){
    			for(let i = 0; i < tab.length; i++){
    				if(target == tab[i]){
    					for (let z = 0; z < tab.length; z++){
    						tab[z].classList.remove('product-tab-active');
    					}
    					tab[i].classList.add('product-tab-active');
    					showTabContent1(i);
    					break;
    				};
    			};
    		}
    		else if(target.className == 'tab recall-tab'){
    			for(let i = 0; i < tab.length; i++){
    				if(target == tab[i]){
    					for (let z = 0; z < tab.length; z++){
    						tab[z].classList.remove('recall-tab_active');
    					}
    					tab[i].classList.add('recall-tab_active');
    					showTabContent2(i-3);
    					break;
    				};
    			};
    		};
    	});
    };

    let menuBtn = document.querySelector('.menu-btn'),
        mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-btn_active');
      if(this.classList.contains('menu-btn_active')){
        mobileMenu.style.transform = 'scale(1)';
      }
      else{
        mobileMenu.style.transform = 'scale(0)';
      }

    });






});
