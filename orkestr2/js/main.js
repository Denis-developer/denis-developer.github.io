(function($) {
$(function() {

  // TABS

	let humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu');

  const min576 = window.matchMedia( "(max-width: 576px)" );

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

    //Menu scroll

    document.addEventListener('scroll', function () {
      if(document.documentElement.scrollTop == 0 && min576.matches){
        document.querySelector('.menu-line').style.display = "none";
      }
      else if (document.documentElement.scrollTop > 0 && min576.matches){
        document.querySelector('.menu-line').style.display = "block";
      }
    })

  // ЯКОРЯ

    $('.header-menu__link, .menu__link').on('click', function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
    });
 
});
})(jQuery);

