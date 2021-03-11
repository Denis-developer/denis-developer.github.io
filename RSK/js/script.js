window.addEventListener('DOMContentLoaded', function() {

  $(function(){
    $(".gallery__container").twentytwenty({
      no_overlay: true
    });
  });

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    swipe: false,
    allowTouchMove: false,
    centeredSlides: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });


  let modalWrapper = document.querySelector('.modal__wrapper'),
      modalClose = document.querySelector('.modal__close'),
      modalTitle = document.querySelector('.modal__title'),
      modalBtn = document.querySelector('.modal-form__btn'),
      modalOpen = document.getElementsByClassName('btn-modal');

  for (var i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', function(event){
      event.preventDefault();
      let titleModal = this.getAttribute('data-modalTitle');
      let textBtn = this.getAttribute('data-modalBtn');
      modalTitle.innerHTML = titleModal;
      modalBtn.value = textBtn;
      modalWrapper.style.display = 'flex';
    });
  }

  modalClose.addEventListener('click', function(event){
    event.preventDefault();
    modalWrapper.style.display = 'none';
  });




});
