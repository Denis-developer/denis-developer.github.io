(function($) {
$(function() {

  // TABS

	let humburger = document.getElementsByClassName('humburger'),
      menu = document.querySelector('.menu');


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
    });
 
});
})(jQuery);

