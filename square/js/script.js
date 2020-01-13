window.addEventListener('DOMContentLoaded', function(){

  const menuToggle = document.querySelector('#menu-toggle'),
        nav = document.querySelector('.nav'),
        up = document.querySelector('.arrow-up'),
        anchors = document.querySelectorAll('a[href*="#"]');

  for(let anchor of anchors){
    anchor.addEventListener('click', function(event){
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
    })
  }

  menuToggle.addEventListener('click', function(){
    this.classList.toggle('open');
    if(menuToggle.classList.contains('open')){
      nav.style.display = 'block';
      setTimeout(function(){
        nav.style.opacity = 1;
      }, 100)
    }
    else{
      nav.style.opacity = 0;
      setTimeout(function(){
        nav.style.display = 'none';
      }, 300)
    }

  })

  document.addEventListener('scroll', function(){

    if(document.documentElement.scrollTop <= 100){
      up.style.display = 'none';
    }
    else{
      up.style.display = 'block';
    }

  })


})
