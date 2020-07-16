window.addEventListener('DOMContentLoaded', function() {
  let audio = new Audio("http://denis-developer.ru/я%20танцую.mp3");

  let btnPlay = document.getElementsByClassName('play');
  let mainPlay = document.querySelector('.main-play');

  mainPlay.addEventListener('click', function() {
    if(this.querySelector('.play').classList.contains('fa-play-circle')){
      this.querySelector('.play').classList.remove('fa-play-circle');
      this.querySelector('.play').classList.add('fa-pause-circle');
      audio.play();
    }
    else{
      this.querySelector('.play').classList.remove('fa-pause-circle');
      this.querySelector('.play').classList.add('fa-play-circle');
      audio.pause();
    }
  })

  for (var i = 0; i < btnPlay.length; i++) {
    btnPlay[i].addEventListener('click', function(event) {
      event.preventDefault();
      if(this.classList.contains('fa-play-circle')){
        this.classList.remove('fa-play-circle');
        this.classList.add('fa-pause-circle');
        audio.play();
      }
      else{
        this.classList.remove('fa-pause-circle');
        this.classList.add('fa-play-circle');
        audio.pause();
      }
    })
  }

  audio.onended = function() {
    for (var i = 0; i < btnPlay.length; i++) {
      btnPlay[i].classList.remove('fa-pause-circle');
      btnPlay[i].classList.add('fa-play-circle');
    }
  };

  // SWIPER JS
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween: 10,
         slidesPerGroup: 1
       },
       740: {
         slidesPerView: 1,
         spaceBetween: 20,
         slidesPerGroup: 1
       },
       1200: {
         slidesPerView: 2,
         spaceBetween: 20,
         slidesPerGroup: 2
       }
     }
  })

  const max739 = window.matchMedia( "(max-width: 739px)" );
  if(max739.matches){
    var mySwiper = new Swiper('.voice-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
        clickable: true,
      }
    })
  }

  // ANCHOR

  const anchors = document.querySelectorAll('a[href*="#"]');

  for(let anchor of anchors){
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    })
  }

  let menuBtn = document.querySelector('.menu-btn'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLinks = document.getElementsByClassName('mobile-menu__link');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('menu-btn_active');
    if(this.classList.contains('menu-btn_active')){
      mobileMenu.style.transform = 'scale(1)';
      document.getElementsByTagName('body')[0].style.overflowY = "hidden";
      document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    else{
      mobileMenu.style.transform = 'scale(0)';
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }
  });

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function(event) {
      mobileMenu.style.transform = 'scale(0)';
      menuBtn.classList.toggle('menu-btn_active');
      document.getElementsByTagName('body')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    });
  }

});
