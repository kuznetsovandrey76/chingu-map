<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$lat = $_POST['user_lat'];
$lng = $_POST['user_lng'];
$title = $_POST['user_title'];
$name = $_POST['user_name'];
$fullText = $_POST['user_fullText'];
$lang = $_POST['user_lang'];
$img = $_POST['user_img'];

// Set mailer to use SMTP
$mail->isSMTP();                			
$mail->CharSet = "UTF-8";
// Specify main and backup SMTP servers
$mail->Host = 'smtp.yandex.ru';  				
// Enable SMTP authentication
$mail->SMTPAuth = true;                 	
// Ваш логин от почты с которой будут отправляться письма
$mail->Username = 'kuznetsovandrey76@yandex.ru'; 	
// Ваш пароль от почты с которой будут отправляться письма
$mail->Password = ''; 			
// Enable TLS encryption, `ssl` also accepted
$mail->SMTPSecure = 'ssl';              	
// TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->Port = 465; 							
// от кого будет уходить письмо
$mail->setFrom('kuznetsovandrey76@yandex.ru'); 		
// Кому будет уходить письмо 
$mail->addAddress('and.rey.q@yandex.ru');				

$mail->Subject = 'Chingu Maps';
$body = "
<pre>
,{
    \"lat\": {$lat}, 
    \"lng\": {$lng}, 
    \"title\": \"@{$title}\", 
    \"name\": \"{$name}\", 
    \"fullText\": \"{$fullText}\", 
    \"lang\": \"native: {$lang}\",
    \"img\": \"{$img}\"
}
</pre>";

$mail->msgHTML($body);
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
    // header('location: index.php');
}
?>
