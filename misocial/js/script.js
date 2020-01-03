window.addEventListener('DOMContentLoaded', function(){

  let humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.getElementsByClassName('menu__link');

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(event){
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  // АНИМАЦИЯ ГАМБУРГЕРА
    humburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('dn');
    });

    for(let i = 0; i < menuLink.length; i++){
      menuLink[i].addEventListener('click', function(){
        humburger.classList.toggle('active');
        menu.classList.toggle('dn');
      })
    }

});
