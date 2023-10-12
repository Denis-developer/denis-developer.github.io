<?php

/* https://api.telegram.org/bot6387712488:AAE1GfPkFuTRSZPxHipRlnCHgP2tMOUtfSs/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "6387712488:AAE1GfPkFuTRSZPxHipRlnCHgP2tMOUtfSs";
$chat_id = "-4073547655";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
