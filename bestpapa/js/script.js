window.onload = function() {
 var oneCircle = document.querySelector('.circleOne');
 var twoCircle = document.querySelector('.circleTwo');
 var threeCircle = document.querySelector('.circleThree');
 var blockOne = document.querySelector('.comment__block_1');
 var blockTwo = document.querySelector('.comment__block_2');
 var blockThree = document.querySelector('.comment__block_3');

 oneCircle.addEventListener('click', function () {
  oneCircle.classList.add('circle__active'); 
  twoCircle.classList.remove('circle__active');
  threeCircle.classList.remove('circle__active'); 
  blockOne.classList.add('active');
  blockTwo.classList.remove('active');
  blockThree.classList.remove('active');
 });

 twoCircle.addEventListener('click', function () {
  oneCircle.classList.remove('circle__active'); 
  twoCircle.classList.add('circle__active');
  threeCircle.classList.remove('circle__active'); 
  blockOne.classList.remove('active');
  blockTwo.classList.add('active');
  blockThree.classList.remove('active');
 });

 threeCircle.addEventListener('click', function () {
  oneCircle.classList.remove('circle__active'); 
  twoCircle.classList.remove('circle__active');
  threeCircle.classList.add('circle__active'); 
  blockOne.classList.remove('active');
  blockTwo.classList.remove('active');
  blockThree.classList.add('active');
 });
};
