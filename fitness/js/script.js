document.addEventListener('DOMContentLoaded',function(){let a=document.getElementsByTagName('a'),form=document.getElementsByTagName('form')[0],humburger=document.getElementsByClassName('humburger'),menu=document.querySelector('.menu');for(let i=0;i<a.length;i++){a[i].addEventListener('click',function(argument){event.preventDefault();});}form.addEventListener('submit',function(argument){event.preventDefault();});for(var i=0;i<humburger.length;i++){humburger[i].addEventListener('click',function(){this.classList.toggle('active');menu.classList.toggle('dn');});}});