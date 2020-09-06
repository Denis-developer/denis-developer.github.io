window.addEventListener('DOMContentLoaded', function() {
  let mainHeight = document.querySelector('.main').clientHeight,
      blockCircle = document.getElementsByClassName('about-block__circle');


  window.addEventListener('scroll', function() {
    if(window.pageYOffset >= mainHeight){
      for (var i = 0; i < blockCircle.length; i++) {
        blockCircle[i].style.animation = "fadeShadow 6s infinite 3s";
      }
    }
  });

  // CURSOR
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
  });

  document.addEventListener('click', e => {
      cursor.classList.add("expand");
      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500);
  });

  $(window).bind('scroll',function(e){
    parallaxScroll();
  });

  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      $('.main-title').css('top',(0-(scrolled*.50))+'px');
  }

  SmoothScroll({ stepSize: 40 });

  new WOW().init();


});
