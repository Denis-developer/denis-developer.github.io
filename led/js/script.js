document.addEventListener('DOMContentLoaded', function () {
	
	let close = document.getElementsByClassName('popup-close'),
			wrapper = document.getElementsByClassName('popup-wrapper'),
			humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu'),
      videoWrapper = document.querySelector('.video-wrapper'),
      loop = document.getElementsByClassName('portfolio-loop'),
			parameterBtn = document.getElementsByClassName('parameter-btn');

	for(let i = 0; i < close.length; i++){
		close[i].addEventListener('click', function (event) {
			event.preventDefault();
			for(let z = 0; z < wrapper.length; z++){
				wrapper[z].style.display = 'none'
			}
		})
	}

	for(let i = 0; i < parameterBtn.length; i++){
      parameterBtn[i].addEventListener('click', function (event) {
        event.preventDefault();
        let num = this.getAttribute('data-num');
        for(let z = 0; z < wrapper.length; z++){
          if(wrapper[z].getAttribute('data-num') == num)
            wrapper[z].style.display = 'block';
          }
      });
    }

    // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }

    // SLIDER

    let sliderIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

        showSlides(sliderIndex);

        function showSlides(n) {
          if(n > slides.length){
            sliderIndex = 1;
          }
          if(n < 1){
            sliderIndex = slides.length;
          }
          for( let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none'
          }
          slides[sliderIndex - 1].style.display = 'block';
        }

        function plusSlides(n) {
          showSlides(sliderIndex += n)
        }

        prev.addEventListener('click', function () {
          plusSlides(-1);
        })

        next.addEventListener('click', function () {
          plusSlides(1);
        })


        for( let i = 0; i < loop.length; i++){
          loop[i].addEventListener('click', function () {
            videoWrapper.style.display = 'block';
          })
        }
})