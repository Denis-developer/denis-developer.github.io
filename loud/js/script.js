$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
	  slidesToScroll: 1,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    centerPadding: '40px',
  	responsive: [
	    {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
  	]
  });

 var btnPlay = document.getElementsByClassName('catalog-music__play'),
      popuWrapper = document.getElementsByClassName('popup-wrapper'),
      btnModal = document.getElementsByClassName('btnModal'),
      popupClose = document.getElementsByClassName('popup-close');

  for( let i = 0; i < btnPlay.length; i++){
      btnPlay[i].addEventListener('click', function () {
        let audio = this.children[0];
        if(this.classList.contains('play')){
          this.classList.remove('play');
          audio.pause();
        }
        else{
          this.classList.add('play');
          audio.play();
        }
    })

  }
  // Модальные окна

  for(let i = 0; i < popupClose.length; i++){
    popupClose[i].addEventListener('click', function (event) {
      event.preventDefault();
      for(let z = 0; z < popuWrapper.length; z++){
        popuWrapper[z].style.display = 'none';
      }
    })
  }
  for(let i = 0; i < btnModal.length; i++){
    btnModal[i].addEventListener('click', function (event) {
      event.preventDefault();
      for(let z = 0; z < popuWrapper.length; z++){
        popuWrapper[z].style.display = 'block';
      }
    })
  }

});