window.addEventListener('DOMContentLoaded', function() {
  // ТАБЫ
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

    // БУРГЕР МЕНЮ
    let menuBtn = document.querySelector('.menu-btn'),
        mobileMenu = document.querySelector('.mobile-menu'),
        headerLang = document.getElementsByClassName('header-lang__link'),
        headerLogo = document.querySelector('.header-logo');

    menuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-btn_active');
      mobileMenu.classList.toggle('menu-active');
      headerLogo.classList.toggle('fillWhite');
      for (var i = 0; i < headerLang.length; i++) {
        headerLang[i].classList.toggle('colorWhite');
      }
    });


    // ВАЛИДАЦИЯ ФОРМЫ
    let input = document.querySelector('.request-input');
    let requestForm = document.querySelector('.request-form');

    // ОБЯЗАТЕЛЬНЫЙ ЗНАК "+" В НАЧАЛЕ
    input.addEventListener('focus', function() {
      if(this.value.length == 0){
        this.value = "+";
      };
    });

    input.addEventListener('input', function() {
      if(this.value.length == 0 || this.value[0] != "+"){
        this.value = "+";
      };
    });

    // НИКАКИХ БУКВ
    input.addEventListener('keyup', function() {
      this.value = this.value.replace (/[^0-9+]/, '')
    });

    // ТЕСТ НА РАЗМЕРНОСТЬ НОМЕРА
    input.addEventListener('blur', function() {
      let valueInput = this.value;
      let check;
      check = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(valueInput);
      if(check){
        this.style.borderColor = "black";
      }
      else{
        this.style.borderColor = "red";
      }
    });

    // ОТПРАВКА ФОРМЫ
    requestForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let valueInput = input.value;
      let check;
      check = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(valueInput);
      if(check){
        requestForm.submit();
        input.value = "";
      }
    });

});
