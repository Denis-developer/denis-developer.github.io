document.addEventListener('DOMContentLoaded', function () {
	
	let btnPlay = document.querySelector('.main-play__link'),
			popupClose = document.getElementsByClassName('popup-close'),
			videoWrapper = document.querySelector('.video-wrapper'),
			open = document.getElementsByClassName('open'),
			popupWrapper = document.getElementsByClassName('popup-wrapper'),
      mainForm = document.querySelector('.main-form'),
			modalOpen = document.getElementsByClassName('example-block__btn');

  const max992 = window.matchMedia( "(max-width: 992px)" );
  const min992 = window.matchMedia( "(min-width: 992px)" );
  const max400 = window.matchMedia( "(max-width: 400px)" );
  const min400 = window.matchMedia( "(min-width: 400px)" );

  // Модальное окно

	btnPlay.addEventListener('click', function (event) {
		event.preventDefault();
		videoWrapper.style.display = 'block'
	})

	for(let i = 0; i < popupClose.length; i++){
		popupClose[i].addEventListener('click', function (event) {
			event.preventDefault();
			for(let z = 0; z < popupWrapper.length; z++){
				popupWrapper[z].style.display = 'none'
			}
		})
	}
    // MODAL

    for(let i = 0; i < modalOpen.length; i++){
      modalOpen[i].addEventListener('click', function (event) {
        event.preventDefault();
        let num = this.getAttribute('data-nubmer');
        for(let z = 0; z < popupWrapper.length; z++){
          if(popupWrapper[z].getAttribute('data-nubmer') == num)
            popupWrapper[z].style.display = 'block';
          }
      });
    }

    for(let i = 0; i < open.length; i++){
      open[i].addEventListener('click', function (event) {
        event.preventDefault();
        let num = this.getAttribute('data-num');
        for(let z = 0; z < popupWrapper.length; z++){
          if(popupWrapper[z].getAttribute('data-num') == num)
            popupWrapper[z].style.display = 'block';
          }
      });
    }

    let top = mainForm.offsetTop;

    $(document).scroll(function() {
      if($(document).scrollTop() >= top + 75 && min992.matches ){
        mainForm.style.position = 'fixed';
        mainForm.style.top = '0';
      }
      else if($(document).scrollTop() >= top + 80 && max992.matches && min400.matches){
        mainForm.style.position = 'fixed';
        mainForm.style.top = '0';
      }
      else if($(document).scrollTop() >= top + 100 && max400.matches ){
        mainForm.style.position = 'fixed';
        mainForm.style.top = '0';
      }
      else{
        mainForm.style.position = 'absolute';
        mainForm.style.top = 'auto';
        mainForm.style.bottom = '0';
      }
    });

    document.querySelector('.ad-close').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('.ad-wrapper').style.display = 'none';
    })

    // Появление окна

    setTimeout(function () {
        document.querySelector('.ad-wrapper').style.display = 'block';
    }, 10000); 

})