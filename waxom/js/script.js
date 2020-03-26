$(document).ready(function(){
  $('.main-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.posts-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="posts-prev"></button>',
    nextArrow: '<button class="posts-next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  let tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('portfolio-wrapper'),
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
						tab[z].classList.remove('active');
					}
					tab[i].classList.add('active');
					showTabContent(i);
					break;
				}
			}
		}
	})

  $('.menu-toggle').on('click', function(){
    $('body').toggleClass('open');
  });

});
