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
    }
  })

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

});
