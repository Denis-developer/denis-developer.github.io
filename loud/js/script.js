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

 var btnPlay = document.getElementsByClassName('catalog-music__play');

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

});