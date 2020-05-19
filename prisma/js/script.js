window.addEventListener('DOMContentLoaded', function() {

    let menuBtn = document.querySelector('.menu-btn'),
        mobileMenu = document.querySelector('.mobile-menu'),
        mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

    menuBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('menu-btn_active');
      mobileMenu.classList.toggle('df');
      if(this.classList.contains('menu-btn_active')){
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
      }
      else{
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
      }
    });

    for (var i = 0; i < mobileMenuLinks.length; i++) {
      mobileMenuLinks[i].addEventListener('click', function(event) {
        menuBtn.classList.toggle('menu-btn_active');
        mobileMenu.classList.toggle('df');
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
      });
    }

  // ЯКОРЯ
  $('.header-nav__link, .mobile-menu__link, .mobile-menu__btn, .header-btn').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top - $('.header').height();
    $('body,html').animate({scrollTop: top}, 1000);
  });

  // Fixed header

  let headerOffsetTop = $('.header').offset().top;

  document.addEventListener('scroll', function (e) {
    if(document.documentElement.scrollTop >= headerOffsetTop){
      $('.header').css({
        'position': "fixed",
        "top": "0"
      });
    }
    else{
      $('.header').css({
        'position': "absolute",
        "top": "77px"
      });
    }
  })

  SmoothScroll({ stepSize: 40 });


});
