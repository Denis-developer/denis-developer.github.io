<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['name'])) {
	
$email = "sergas5555@yandex.ru"; #Email, на него придут письма
$title = "Заказ с сайта "; #Заголовок письма

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Модель: ".$_POST['comment']."
Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s")."
IP адрес клиента: ". $_SERVER['REMOTE_ADDR'];

if(mail($email, $title, $text)) {
	header('Location: thanks.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>