<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

<?xml version="1.0" encoding="utf-8"?>'

//Load Composer"s autoloader
require "vendor/autoload.php";
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

try{

    $mail->SMTPDebug = 3;  
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = "smtp.gmail.com";  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = "javenassociates@gmail.com";                 // SMTP username
    $mail->Password = "email66!";                           // SMTP password
    $mail->SMTPSecure = "ssl";                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 443;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('javenassociates@gmail.com', 'Mailer');
    $mail->addAddress("jvncdunn2@gmail.com");     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = "$message <br /> Best Regards,<br /> $name <br /> $visitor_email";


    $mail->send();
    header("content-type: text/html");
    //header("content-type: image/jpegLocation:index.htmlLocation:index.html");
  //  echo "Message has been sent";
}catch(Exception $e){
    echo "Message could not be sent. Mailer Error: ", $mail->ErrorInfo;
}

 ?>
