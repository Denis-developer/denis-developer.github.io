window.addEventListener('DOMContentLoaded', function() {

  const selectSingle = document.querySelector('.__select');
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
      selectSingle.classList.remove('active-select');
    } else {
      selectSingle.setAttribute('data-state', 'active');
      selectSingle.classList.add('active-select');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
      selectSingle.classList.remove('active-select');
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
      selectSingle2.classList.remove('active-select');
    } else {
      selectSingle2.setAttribute('data-state', 'active');
      selectSingle2.classList.add('active-select');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels2.length; i++) {
    selectSingle_labels2[i].addEventListener('click', (evt) => {
      selectSingle_title2.textContent = evt.target.textContent;
      selectSingle2.setAttribute('data-state', '');
      selectSingle2.classList.remove('active-select');
    });
  }

  $('.form-tel').mask('+7(999)999-99-99');

  let budget = document.querySelector('.form-budget'),
      contract = document.querySelector('#contract'),
      selectWrapper = document.querySelector('.select-wrapper'),
      select2 = document.querySelector('.__select2'),
      contact = document.querySelector('#contact'),
      selectTel = document.querySelector('.select-tel'),
      formTel = document.querySelector('.form-tel'),
      index = 0,
      formMore = document.querySelector('.form-more a'),
      formFile2 = document.querySelector('.form-flex-2'),
      formFile3 = document.querySelector('.form-flex-3');

  contract.addEventListener('change', function() {
    if(contract.checked){
      budget.classList.add('disabledInput');
      budget.setAttribute("disabled", "disabled");
    }
    else{
      budget.classList.remove('disabledInput');
      budget.removeAttribute("disabled");
    }
  })

  contact.addEventListener('change', function() {
    if(contact.checked){
      select2.classList.add('disabledInput');
      selectWrapper.style.display = 'block';
      formTel.style.display = 'none';
    }
    else{
      select2.classList.remove('disabledInput');
      selectWrapper.style.display = 'none';
    }
  })

  selectTel.addEventListener('click', function(){
    formTel.style.display = 'block';
  })

    formMore.addEventListener('click', function(event) {
      event.preventDefault();
        if(index == 0){
          formFile2.style.display = 'flex';
          index++;
        }
        else{
          formFile3.style.display = 'flex';
          formMore.style.display = 'none';
        }
    })


});
