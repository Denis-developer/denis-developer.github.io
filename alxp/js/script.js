window.addEventListener('DOMContentLoaded', function() {

  const swiper = new Swiper('.reviews__container', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    slidesPerGroup: 1,
    breakpoints: {
      319: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 1
      }
    }
  });

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    if(this.classList.contains('menu-btn_active')){
      mobileMenu.style.display = 'flex';
      document.documentElement.scrollTop = 0;
      document.getElementsByTagName('body')[0].style.overflowY = "hidden";
      document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    else{
      mobileMenu.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = "auto";
      document.getElementsByTagName('html')[0].style.overflowY = "auto";
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event){
      menuBtn.classList.toggle('menu-btn_active')
      mobileMenu.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = "auto";
      document.getElementsByTagName('html')[0].style.overflowY = "auto";
    })
  }

  jQuery('.lang').find('.lang__dropdown-trigger').each(function() {
  	jQuery(this).click(function(){
			jQuery(this).parent().toggleClass('active');
		});
	});

  // ТАБЫ
    let tab = document.getElementsByClassName('skills-tab__item'),
    		tabContent = document.getElementsByClassName('skills-content'),
    		info = document.getElementsByClassName('skills-tab');

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
    		if(target.className == 'skills-tab__item'){
    			for(let i = 0; i < tab.length; i++){
    				if(target == tab[i]){
    					for (let z = 0; z < tab.length; z++){
    						tab[z].classList.remove('active-tab');
    					}
    					tab[i].classList.add('active-tab');
    					showTabContent(i);
    					break;
    				};
    			};
    		}
    	});
    };

});
