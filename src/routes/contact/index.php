<?php
if (isset($_POST["contact_btn"])){
    $name=$_POST["user_name"];
    $email=$_POST["user_email"];
    $subject=$_POST["user_subject"];
    $msg=$_POST["user_msg"];
    $to="sharif.hafizi97@gmail.com";
    $header="from:$email";
    mail($to,$subject,$msg,$header)
}
?>