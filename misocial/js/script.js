window.addEventListener('DOMContentLoaded', function(){

  let humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.getElementsByClassName('menu__link');

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
