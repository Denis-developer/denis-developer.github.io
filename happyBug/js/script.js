window.addEventListener('DOMContentLoaded', function() {

  let blogMore = document.getElementsByClassName('blog-more');
  let blogTextHide = document.getElementsByClassName('blog-hide');
  let btnSlide = document.getElementsByClassName('btnSlide');
  let paginationSlide = document.querySelector('.swiper-pagination');
  let blog = document.querySelector('.blog');

  for (var i = 0; i < btnSlide.length; i++) {
    btnSlide[i].addEventListener('click', function(){
      $('body,html').animate({scrollTop: $(blog).offset().top}, 800);
      for (var j = 0; j < blogTextHide.length; j++) {
        blogTextHide[j].classList.remove('db');
        if(blogTextHide[j].classList.contains('db')){
          if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
            blogMore[j].innerHTML = 'Скрыть';
          }
          else{
            blogMore[j].innerHTML = 'Hide';
          }
        }
        else{
          if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
            blogMore[j].innerHTML = 'Подробнее';
          }
          else{
            blogMore[j].innerHTML = 'More';
          }
        }
      }
    })
  }

  // alert($(blog).offset().top);

  paginationSlide.addEventListener('click', function(){
    $('body,html').animate({scrollTop: $(blog).offset().top}, 800);
    for (var j = 0; j < blogTextHide.length; j++) {
      blogTextHide[j].classList.remove('db');
      if(blogTextHide[j].classList.contains('db')){
        if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
          blogMore[j].innerHTML = 'Скрыть';
        }
        else{
          blogMore[j].innerHTML = 'Hide';
        }
      }
      else{
        if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
          blogMore[j].innerHTML = 'Подробнее';
        }
        else{
          blogMore[j].innerHTML = 'More';
        }
      }
    }
  })


  for (var i = 0; i < blogMore.length; i++) {
    blogMore[i].addEventListener('click', function(event){
      event.preventDefault();
      $('body,html').animate({scrollTop: $(blog).offset().top}, 800);
      for (var j = 0; j < blogTextHide.length; j++) {
        blogTextHide[j].classList.toggle('db');
        if(blogTextHide[j].classList.contains('db')){
          if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
            blogMore[j].innerHTML = 'Скрыть';
          }
          else{
            blogMore[j].innerHTML = 'Hide';
          }
        }
        else{
          if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
            blogMore[j].innerHTML = 'Подробнее';
          }
          else{
            blogMore[j].innerHTML = 'More';
          }
        }
      }
    });
  }

  let storyMore = document.querySelector('.story-content__more');
  let storyTextHide = document.querySelector('.story-hide');

  storyMore.addEventListener('click', function(event){
    event.preventDefault();
    storyTextHide.classList.toggle('db');
    if(storyTextHide.classList.contains('db')){
      if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
        storyMore.innerHTML = 'Скрыть';
      }
      else{
        storyMore.innerHTML = 'Hide';
      }
    }
    else{
      if(document.getElementsByTagName('html')[0].getAttribute('lang') == 'ru'){
        storyMore.innerHTML = 'Читать дальше';
      }
      else{
        storyMore.innerHTML = 'More';
      }
    }
  });

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menuWrapper'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link'),
      body = document.querySelector('body'),
      html = document.querySelector('html');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    mobileMenu.classList.toggle('db');
    body.classList.toggle('pageFixed');
    html.classList.toggle('pageFixed');
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event){
      event.preventDefault();
      menuBtn.classList.toggle('menu-btn_active');
      mobileMenu.classList.toggle('db');
      body.classList.toggle('pageFixed');
      html.classList.toggle('pageFixed');
    })
  }

  var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  $('.link-anchor, .mobile-menu__link, .header-nav__link, .footer-list__link').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

});
