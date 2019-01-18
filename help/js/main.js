document.addEventListener('DOMContentLoaded', function () {
	
	let optionBtn = document.getElementsByClassName('option-block__btn'),
			optionBlock = document.getElementsByClassName('option-block'),
			calcBtn = document.getElementsByClassName('calc-btn');

	for(let i = 0; i < optionBtn.length; i++){
      optionBtn[i].addEventListener('mouseenter', function () {
        let num = this.getAttribute('data-num');
        for(let z = 0; z < optionBlock.length; z++){
          if(optionBlock[z].getAttribute('data-block') == num)
            optionBlock[z].classList.toggle('active-block');
          }
      });
      optionBtn[i].addEventListener('mouseleave', function () {
        for(let z = 0; z < optionBlock.length; z++){
            optionBlock[z].classList.remove('active-block');
          }
      });
    }


    for(let i = 0; i < calcBtn.length; i++){
    	calcBtn[i].addEventListener('click', function () {
    		for(let y = 0; y < calcBtn.length; y++){
    			calcBtn[y].classList.remove('active-btn');
  		}
    		this.classList.add('active-btn');
    	})
    }

    // SLICK SLIDER
    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      prevArrow: '<button class="prev"></button>',
      nextArrow: '<button class="next"></button>',
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

})