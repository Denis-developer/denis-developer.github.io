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

    function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

    let menuBtn = document.querySelector('.menu-btn'),
        mobileMenu = document.querySelector('.mobile-menu'),
        mobileMenuLinks = document.getElementsByClassName('mobile-menu__link'),
        mobileMenuOffset = offset(document.querySelector('.header-top'));

    menuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-btn_active');
      if(this.classList.contains('menu-btn_active')){
        mobileMenu.style.transform = 'scale(1)';
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        $('body,html').animate({scrollTop: 50}, 200)
      }
      else{
        mobileMenu.style.transform = 'scale(0)';
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
      }
    });

    for (var i = 0; i < mobileMenuLinks.length; i++) {
      mobileMenuLinks[i].addEventListener('click', function(event) {
        mobileMenu.style.transform = 'scale(0)';
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
        menuBtn.classList.toggle('menu-btn_active');
      });
    }

    // 3D CARD EFFECT
    let goods = document.querySelector('.goods'),
        goodsBlock = document.getElementsByClassName('goods-block'),
        product = document.querySelector('.product'),
        productBlock = document.getElementsByClassName('product-block');

    const max576 = window.matchMedia( "(max-width: 576px)" );

    goods.addEventListener('mousemove', function(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      let yAxis = ((window.innerHeight / 2 - e.pageY) / 150);
      for (var i = 0; i < goodsBlock.length; i++) {
        goodsBlock[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    });
    if(!max576.matches){
      product.addEventListener('mousemove', function(e) {
        let xAxis = (window.innerWidth / 5 - e.pageX) / 30;
        let yAxis = ((window.innerHeight / 5 - e.pageY) / 30)+70;
        for (var i = 0; i < productBlock.length; i++) {
          productBlock[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
      });
    }

    window.addEventListener('resize', function (e) {
      if(!max576.matches){
        product.addEventListener('mousemove', function(e) {
          let xAxis = (window.innerWidth / 5 - e.pageX) / 30;
          let yAxis = ((window.innerHeight / 5 - e.pageY) / 30)+70;
          for (var i = 0; i < productBlock.length; i++) {
            productBlock[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
          }
        });
      }
    });

    new WOW().init();

});
