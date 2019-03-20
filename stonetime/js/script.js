$(document).ready(function(){

  const max992 = window.matchMedia( "(max-width: 992px)" );

  let empty = document.getElementsByClassName('empty')[0],
      nav = document.getElementsByClassName('nav')[0],
      menuLink = document.getElementsByClassName('menu-link')[0],
      descriptionLink = document.getElementsByClassName('description-link')[0],
      description = document.getElementsByClassName('description')[0],
      dignityLink = document.getElementsByClassName('dignity-link')[0],
      dignity = document.getElementsByClassName('dignity')[0],
      popuWrapper = document.getElementsByClassName('popup-wrapper'),
      btnModal = document.getElementsByClassName('header-reach__btn'),
      popupClose = document.getElementsByClassName('popup-close');


  if(max992.matches){
    empty.innerHTML = "(Горьковское шоссе, 93-й км, поворот на ст.«Усад»)";
  }

  // Развёртывание текста и свёртывание на мобильных устройствах(криво)

  menuLink.addEventListener('click', function (event) {
    event.preventDefault();
    if(menuLink.classList.contains("menu-link")){
      nav.style.height = 'auto';
      menuLink.innerHTML = "Свернуть";
      menuLink.classList.remove("menu-link");
      menuLink.classList.add("menu-link_1");
    }
    else{
      nav.style.height = '104px';
      menuLink.innerHTML = "Развернуть";
      menuLink.classList.add("menu-link");
      menuLink.classList.remove("menu-link_1");
    }
  })

  descriptionLink.addEventListener('click', function (event) {
    event.preventDefault();
    if(descriptionLink.classList.contains("description-link")){
      description.style.height = 'auto';
      descriptionLink.innerHTML = "Свернуть";
      descriptionLink.classList.remove("description-link");
      descriptionLink.classList.add("description-link_1");
    }
    else{
      description.style.height = '400px';
      descriptionLink.innerHTML = "Развернуть";
      descriptionLink.classList.add("description-link");
      descriptionLink.classList.remove("description-link_1");
    }
  })

  dignityLink.addEventListener('click', function (event) {
    event.preventDefault();
    if(dignityLink.classList.contains("dignity-link")){
      dignity.style.height = 'auto';
      dignityLink.innerHTML = "Свернуть";
      dignityLink.classList.remove("dignity-link");
      dignityLink.classList.add("dignity-link_1");
    }
    else{
      dignity.style.height = '320px';
      dignityLink.innerHTML = "Развернуть";
      dignityLink.classList.add("dignity-link");
      dignityLink.classList.remove("dignity-link_1");
    }
  })

  // Модальные окна

  for(let i = 0; i < popupClose.length; i++){
    popupClose[i].addEventListener('click', function (event) {
      event.preventDefault();
      for(let z = 0; z < popuWrapper.length; z++){
        popuWrapper[z].style.display = 'none';
      }
    })
  }
  for(let i = 0; i < btnModal.length; i++){
    btnModal[i].addEventListener('click', function (event) {
      event.preventDefault();
      for(let z = 0; z < popuWrapper.length; z++){
        popuWrapper[z].style.display = 'block';
      }
    })
  }

  // Слайдер главного экрана

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 3000,
	  slidesToScroll: 1,
  	responsive: [
	    {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
  	]
  });
});