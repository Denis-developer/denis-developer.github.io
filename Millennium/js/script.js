window.addEventListener('DOMContentLoaded', function() {
  let menuBtn = document.querySelector('.menu-btn'),
      menuWrapper = document.querySelector('.menu-wrapper'),
      navLinks = document.getElementsByClassName('nav-link');

  menuBtn.addEventListener('click', function(event) {
    this.classList.toggle('menu-btn_active');
    menuWrapper.classList.toggle('show');
    if(this.classList.contains('menu-btn_active')){
      menuBtn.style.position = "fixed";
    }
    else{
      menuBtn.style.position = "relative";
    }
  });

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
      menuBtn.classList.toggle('menu-btn_active');
      menuWrapper.classList.toggle('show');
      if(this.classList.contains('menu-btn_active')){
        menuBtn.style.position = "fixed";
      }
      else{
        menuBtn.style.position = "relative";
      }
    });
  }

  // ЯКОРЯ
  $('.nav-link').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

  // for (var i = 0; i < mobileMenuLinks.length; i++) {
  //   mobileMenuLinks[i].addEventListener('click', function(event) {
  //     mobileMenu.style.transform = 'scale(0)';
  //     menuBtn.classList.toggle('menu-btn_active');
  //   });
  // }

  // MODAL
  let modalWrapper = document.querySelector('.modal-wrapper'),
      modalClose = document.querySelector('.modal-close'),
      modalOpen = document.getElementsByClassName('modal-open');

  for (var i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', function(event) {
      event.preventDefault();
      modalWrapper.style.display = "flex";
    });
  }

  modalClose.addEventListener('click', function(event) {
    event.preventDefault();
    modalWrapper.style.display = "none";
  });

  // MIAN SIDE
  let main = document.querySelector('.main'),
      mainSide = document.querySelector('.main-side');

  mainSide.style.height = main.clientHeight-50 + 'px';

});
