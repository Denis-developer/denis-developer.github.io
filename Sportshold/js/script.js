window.addEventListener('DOMContentLoaded', function() {
  // ТАБЫ
    let tab = document.getElementsByClassName('tab'),
    		tabContent = document.getElementsByClassName('product-wrapper'),
    		info = document.getElementsByClassName('tabs');

    // СКРЫТИЕ ВСЕХ ТАБОВ КРОМЕ ПЕРВОГО
  	function hideTabContent(a) {
  		for(let i = a; i < tabContent.length; i++){
  			tabContent[i].classList.remove('show');
  			tabContent[i].classList.add('hide');
  		};
  	};


  	hideTabContent(1);

  	function showTabContent(b) {
  		if(tabContent[b].classList.contains('hide')){
  			hideTabContent(0);
  			tabContent[b].classList.remove('hide');
  			tabContent[b].classList.add('show');
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
    					showTabContent(i);
    					break;
    				};
    			};
    		}
    	});
    };

    let menuBtn = document.querySelector('.menu-btn'),
        mobileMenu = document.querySelector('.mobile-menu'),
        mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

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

    for (var i = 0; i < mobileMenuLinks.length; i++) {
      mobileMenuLinks[i].addEventListener('click', function(event) {
        mobileMenu.style.transform = 'scale(0)';
        menuBtn.classList.toggle('menu-btn_active');
      });
    }

    // 3D CARD EFFECT
    var card = $(".product-block");

    $('.product').on("mousemove",function(e) {
      var ax = -($('.product').innerWidth()/5- e.pageX)/20;
      var ay = ($('.product').innerHeight()/5- e.pageY)/60;
      card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    });

});
