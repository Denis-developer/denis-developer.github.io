/* В этом файле содержатся функции-обработчики для каждого пункта
меню*/


function validate() 
{
/*Флаги*/
let counter = 0;
let secondaryCounter = 0;
/*Регулярные выражения*/
let primerStringCyrilic = /^[а-яА-ЯЁё\s]+$/;
let primerInt = /^[ 0-9]+$/;
let primerEmail = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/;
let primerGender = /[М||Ж]/;
let primerNumber = /[0-9]{10}/;	
let primerDay = /^([1-9]|[1-2][\d]|3[0-1])$/;
let primerMonth = /^([1-9]|1[0-2])$/;
let primerYear = /^(19\d\d|20\1[0-2]\1[0-1])$/;
let primerDiscord =/^[A-Za-zА-Яа-яЁё]+$/;

/*Проверка заполнения*/
let first_name = document.forms["myForm"]["first_name"].value;
if (first_name == "" || primerStringCyrilic.test(first_name) == 0) 
{
  document.getElementById("first_name").className = "error";
  counter = 1;
}
else
{
   document.getElementById("first_name").className = "validinput";
}

let last_name = document.forms["myForm"]["last_name"].value;
if (last_name == "" || primerStringCyrilic.test(last_name) == 0)
{
 document.getElementById("last_name").className = "error";
 counter = 1;
}
else
{
	 document.getElementById("last_name").className = "validinput";
}

let third_name = document.forms["myForm"]["third_name"].value;
if (third_name == "" || primerStringCyrilic.test(third_name) == 0)
{
 document.getElementById("third_name").className = "error";
 counter = 1;
}
else
{
	 document.getElementById("third_name").className = "validinput";
}

let email = document.forms["myForm"]["email"].value;
if (email == "" || primerEmail.test(email) == 0)
{
 document.getElementById("email").className = "error";
 counter = 1;
}
else
{
	 document.getElementById("email").className = "validinput";
}

let phone = document.forms["myForm"]["phone"].value;
if (phone == "" || primerNumber.test(phone) == 0)
{
 document.getElementById("phone").className = "error";
 counter = 1;
}
else
{
	 document.getElementById("phone").className = "validinput";
}

let discord = document.forms["myForm"]["discord"].value;
if (discord != "" && primerDiscord.test(discord) == 0)
{
 document.getElementById("discord").className = "error";
  secondaryCounter = 1;
}
else
{
	 document.getElementById("discord").className = "validinput";
}

/*Операции с предупреждениями*/
if (secondaryCounter > 0)
{
    alert("Необходимо правильно заполнить необязательные поля");
    return false;
}
else if (counter > 0)
{
	alert("Заполните обязательные поля");
	return false;
}
}




