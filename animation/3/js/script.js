window.addEventListener('DOMContentLoaded', function() {

  var card = document.getElementsByClassName('card');

  for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
      if(document.querySelector('.container').classList.contains != "container-origin")
      document.querySelector('.container').classList.add('container-origin');
    });
  }
});
