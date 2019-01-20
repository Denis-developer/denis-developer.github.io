document.addEventListener('DOMContentLoaded', function () {
	
	let optionBtn = document.getElementsByClassName('option-block__btn'),
			optionBlock = document.getElementsByClassName('option-block'),
			calcBtn = document.getElementsByClassName('calc-btn'),
      callLink = document.getElementsByClassName('calc-link__additionally'),
      btnNext = document.getElementsByClassName('block-step'),
      calcBlocks = document.getElementsByClassName('calc-blocks');

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

	for(let i = 0; i < btnNext.length; i++){
      btnNext[i].addEventListener('click', function () {
        let num = this.getAttribute('data-calcBtn');
        num++;
        for(let z = 0; z < calcBlocks.length; z++){
          calcBlocks[z].style.display = 'none';
          if(calcBlocks[z].getAttribute('data-calc') == num){
            calcBlocks[z].style.display = 'block';
            if(calcBlocks[z].getAttribute('data-calc') == 10)
              document.querySelector('.calc-title').innerHTML = 'Оставьте заявку';
              document.querySelector('.calc').style.height = 'auto';
           }
          };
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

    for(let i = 0; i < callLink.length; i++){
      callLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('active-ok');
      })
    }

    // SLICK SLIDER
    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 100,
      prevArrow: '<button class="prev"></button>',
      nextArrow: '<button class="next"></button>',
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            speed: 500,
            slidesToShow: 1
          }
        }
      ]
    });

})