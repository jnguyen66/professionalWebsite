<?php
header('Content-Type: text/html; charset=utf-8');
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



//Load Composer"s autoloader
require "vendor/autoload.php";
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

try{


    //Server settings
   $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->Debugoutput = 'html';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = "tls://smtp.gmail.com";  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Encoding = "base64";
    $mail->CharSet = "utf-8";
    $mail->Username = "javenassociates@gmail.com";                 // SMTP username
    $mail->Password = "email66!";                           // SMTP password
    $mail->SMTPSecure = "tls";                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to. tls 587 or 465 ssl

    //Recipients
    $mail->setFrom("javenassociates@gmail.com", "Mailer");
    $mail->addAddress("jvnguyen66@gmail.com");     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = "$message <br /> Best Regards,<br /> $name <br /> $visitor_email";


    $mail->send();
    header("Location:index.html");
  //  echo "Message has been sent";
}catch(Exception $e){
    echo "Message could not be sent. Mailer Error: ", $mail->ErrorInfo;
}

 ?>
