function validate()
{
let counter = 0;
let secondaryCounter = 0;

let primerStringCyrilic = /^[а-яА-ЯЁё\s]+$/;
let primerInt = /^[ 0-9]+$/;
let primerEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
let primerGender = /[М||Ж]/;
let primerNumber = /[0-9]{10}/;
let primerDay = /^([1-9]|[1-2][\d]|3[0-1])$/;
let primerMonth = /^([1-9]|1[0-2])$/;
let primerYear = /^(19\d\d|20\1[0-2]\1[0-1])$/;
let primerDiscord =/^[A-Za-zА-Яа-яЁё]+$/;

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
let gender = document.forms["myForm"]["gender"].value;
if (gender != "" && primerGender.test(gender) == 0)
{
document.getElementById("gender").className = "error";
secondaryCounter = 1;
}
else
{
document.getElementById("gender").className = "validinput";
}
let age = document.forms["myForm"]["age"].value;
if (age != "" && primerInt.test(age) == 0)
{
document.getElementById("age").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("age").className = "validinput";
}
let day = document.forms["myForm"]["day"].value;
if (day != "" && primerDay.test(day) == 0)
{
document.getElementById("day").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("day").className = "validinput";
}
let month = document.forms["myForm"]["month"].value;
if (month != "" && primerMonth.test(month) == 0)
{
document.getElementById("month").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("month").className = "validinput";
}
let year = document.forms["myForm"]["year"].value;
if (year != "" && primerYear.test(year) == 0)
{
document.getElementById("year").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("year").className = "validinput";
}
let country = document.forms["myForm"]["country"].value;
if (country != "" && primerStringCyrilic.test(country) == 0)
{
document.getElementById("country").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("country").className = "validinput";
}
let town = document.forms["myForm"]["town"].value;
if (town != "" && primerStringCyrilic.test(town) == 0)
{
document.getElementById("town").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("town").className = "validinput";
}
let street = document.forms["myForm"]["street"].value;
if (street != "" && primerStringCyrilic.test(street) == 0)
{
document.getElementById("street").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("street").className = "validinput";
}
let house = document.forms["myForm"]["house"].value;
if (house != "" && primerInt.test(house) == 0)
{
document.getElementById("house").className = "error";
 secondaryCounter = 1;
}
else
{

document.getElementById("house").className = "validinput";
}
let flat = document.forms["myForm"]["flat"].value;
if (house != "" && primerInt.test(house) == 0)
{
document.getElementById("flat").className = "error";
 secondaryCounter = 1;
}
else
{
document.getElementById("flat").className = "validinput";
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
