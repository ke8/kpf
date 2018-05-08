<?php

$conf_name= $_POST['names'];
$conf_number= $_POST['mobile'];
$conf_email= $_POST['email'];
$conf_device= $_POST['device'];
$conf_zone= $_POST['zone'];

$bodyall="
Name: ".$conf_name."\n
Number: ".$conf_number."\n
Email: ".$conf_email."\n
Device: ".$conf_device."\n
Zone: ".$conf_zone."\n
\n
Sent on: ".date("H:i l jS, F Y")."
";

$to      = 'info@kasphonefix.co.uk';
$subject = "New Phone: ".$conf_phone;
$header = "From: info@kasphonefix.co.uk\r\n"; 
$header.= "MIME-Version: 1.0\r\n"; 
$header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
$header.= "X-Priority: 1\r\n"; 


if(mail($to, $subject, $bodyall, $header)){
  echo "Y";
}else{
  echo "N";
}

?>