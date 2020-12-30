window.addEventListener('DOMContentLoaded', function() {

  const selectSingle = document.querySelector('.__select');
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    selectSingle.classList.toggle('active-select');
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }

  const selectSingle2 = document.querySelector('.__select2');
  const selectSingle_title2 = selectSingle2.querySelector('.__select__title');
  const selectSingle_labels2 = selectSingle2.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title2.addEventListener('click', () => {
    selectSingle2.classList.toggle('active-select');
    if ('active' === selectSingle2.getAttribute('data-state')) {
      selectSingle2.setAttribute('data-state', '');
    } else {
      selectSingle2.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels2.length; i++) {
    selectSingle_labels2[i].addEventListener('click', (evt) => {
      selectSingle_title2.textContent = evt.target.textContent;
      selectSingle2.setAttribute('data-state', '');
    });
  }

  $('.form-tel').mask('+7(999)999-99-99');



});
