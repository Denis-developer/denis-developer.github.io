let link = document.getElementsByTagName('a');

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function() {
    alert('Не бей меня');
  })
}

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseenter', function() {
    this.style.color = 'pink';
  })
}

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseleave', function() {
    this.style.color = 'black';
  })
}

// Задание 1 (24)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr1 = [];
let number = 100;

for (var i = 0; i < 20; i++) {
  arr1[i] = getRandomInt(1,100);
}

for (var i = 0; i < arr1.length; i++) {
  if(arr1[i] % 2 != 0){
    if(arr1[i] < number){
      number = arr1[i];
    }
  }
}
console.log("Исходный массив: " + arr1);
console.log("Самое маленькое нечётное чилсо: " + number);

// Задание 2 (24)
const remainderH = document.querySelector('.remainder__h');
let nextMonth = new Date('2021-04-01');

function remainder(){
  let nowDate = new Date();
  let gap = nextMonth - nowDate;
  let hours = Math.floor(gap / 1000 / 60 / 60);
  
  if(gap <= 0){
    alert('Апрель 2021 начался или уже прошёл.');
  } 
  else{
    remainderH.innerHTML = hours + " часов";
  } 
}

remainder();

// Задание 3 (4)
let imgClick = document.querySelector('.imgClick img');
let arrImg = ['../img/lab3/1.jpg', '../img/lab3/2.jpg', '../img/lab3/3.png', '../img/lab3/4.jpg', '../img/lab3/5.jpg',];

imgClick.addEventListener('click', function () {
  let index = getRandomInt(0, 4);
  imgClick.src = arrImg[index];
})

// Задание 4 (4)
let eveningInput = document.querySelector('.goodEvening__input');
let eveningList = document.querySelector('.goodEvening__list');

eveningInput.addEventListener('input', function () {
  let valueInput = this.value;
  eveningList.innerHTML = "";
  if(valueInput < 0){
    alert('Ты всё шутки шутишь.');
    eveningInput.value = "0";
  }
  else{
    for (var i = 0; i < valueInput; i++) {
      let p = document.createElement('p');
      p.innerHTML = "Добрый вечер";
      eveningList.prepend(p);
    }
  }
  
})