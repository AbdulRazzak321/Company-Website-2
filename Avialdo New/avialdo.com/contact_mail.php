<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];
$to="Avialdo Solutions <info@avialdo.com>";
$headers = 'From: '.$name.' <'.$email.'>' . "\r\n" .
    'Reply-To: '.$name.' <'.$email.'>' . "\r\n";
$flag = mail($to, "Avialdo Website Contact Form Response", $msg, $headers);
if($flag){
    echo "success!";
}else{
    echo "failed";
}
?>