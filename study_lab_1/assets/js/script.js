document.addEventListener('DOMContentLoaded', function() {
  const deg = 6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');
  
  if(hr || mn || sc){
    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      
      hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
      mn.style.transform = `rotateZ(${(mm)}deg)`;
      sc.style.transform = `rotateZ(${(ss)}deg)`;
    })
  }

  const timerD = document.querySelector('.timer__d');
  const timerH = document.querySelector('.timer__h');
  const timerM = document.querySelector('.timer__m');
  const timerS = document.querySelector('.timer__s');
  let newYear = new Date('2022-01-01');
  
  function timer(){
    let nowDate = new Date();
    let gap = newYear - nowDate;
    let days = Math.floor(gap / 1000 / 60 / 60 / 24); 
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24; 
    let minutes = Math.floor(gap / 1000 / 60) % 60; 
    let seconds = Math.floor(gap / 1000) % 60;
    
    if(gap <= 0){
      alert('Новый год (2022) прошёл');
    } 
    else{
      timerD.innerHTML = days;
      timerH.innerHTML = hours;
      timerM.innerHTML = minutes;
      timerS.innerHTML = seconds; 
    } 
  }
  
  timer();
  
  setInterval(timer, 1000);

})