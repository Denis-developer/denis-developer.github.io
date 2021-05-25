window.addEventListener('DOMContentLoaded', function() {
  
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });

  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      $('.main__title').css('top',(0-(scrolled*.50))+'px');
  }
  
  SmoothScroll({ stepSize: 40 });
  
  var form = document.querySelector('.contact-form');
  var formInput = document.querySelectorAll('input[data-rule]');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var valid = 0;
    
    for (var i = 0; i < formInput.length; i++) {
      var rule = formInput[i].dataset.rule;
      var value = formInput[i].value;
      var check;
      
      switch (rule) {
        case 'number':
          check = /^\d+$/.test(value);
          break;
        case 'email':
          check = /^\w+@[a-z]+\.\w{2,3}$/.test(value);
          break;
        case 'text':
          check = /^[a-zA-Zа-яА-Я]+$/.test(value);
          break;
      }
      
      if(check){
        formInput[i].style.borderColor = "green";
        valid++;
      }
      else{
        formInput[i].style.borderColor = "red";
      }
    }
    
    if(valid == 3){
      alert('Форма была отправлена!');
      form.reset();
      for (var j = 0; j < formInput.length; j++){
        formInput[j].style.borderColor = "rgba(255,255,255,0.4)";
      }  
    }
  });
  
});
