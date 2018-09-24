$(document).ready(function(){
  $('.main-slider').slick({
     dots: true
  });
  let   humburger = document.getElementsByClassName('humburger'),
        menu = document.querySelector('.menu');

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }
});
