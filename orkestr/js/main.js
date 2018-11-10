(function($) {
$(function() {

  // TABS

	let musicImg = document.getElementsByClassName('music-img'),
      humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu');

  const min576 = window.matchMedia( "(max-width: 576px)" );
 
  $('ul.poster-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.poster').find('div.poster-month').removeClass('active-block').eq($(this).index()).addClass('active-block');
  });
  $('ul.music-tool__list').on('click', 'li:not(.active-tool)', function() {
    $(this)
      .addClass('active-tool').siblings().removeClass('active-tool')
      .closest('.music').find('div.music-block').removeClass('active-block').eq($(this).index()).addClass('active-block');
  		let num = this.getAttribute('data-num');
      for(let z = 0; z < musicImg.length; z++){
          musicImg[z].classList.remove('active-img');
        if(musicImg[z].getAttribute('data-num') == num)
          musicImg[z].classList.add('active-img');
        }
  });

  $('.media-tabs').on('click', function() {
    $(this)
      .closest('.media').find('div.media-blockTab').removeClass('active-block').eq($(this).index()).addClass('active-block');
  });

  $('.menu__link').on('click', function(event) {
      $('.menu').addClass('dn');
      $('.humburger').removeClass('active-hum');
    });

  // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active-hum');
            menu.classList.toggle('dn');
        });
    }

  // ЯКОРЯ

    $('.header-menu__link, .menu__link').on('click', function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
      $('.menu').classList.add('dn');
    });

    //Menu scroll

    document.addEventListener('scroll', function () {
      if(document.documentElement.scrollTop == 0 && min576.matches){
        document.querySelector('.menu-line').style.display = "none";
      }
      else if (document.documentElement.scrollTop > 0 && min576.matches){
        document.querySelector('.menu-line').style.display = "block";
      }
    })

    // SLICK

    $('.comment-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : false,
      autoplay: true,
      dots: true
    });

    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="prev"><img src="img/slider/arrow-prev.png" alt="" /></button>',
      nextArrow: '<button class="next"><img src="img/slider/arrow-next.png" alt="" /></button>'
    }); 
 
});
})(jQuery);

