<!-- not working -->

<?php

if (isset($_POST['submit'])){

  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['number'];
  $message = $_POST['message'];


$mailTo = "jonangelo_18@outlook.com";
$headers = "From: ".$email;
$txt= "You have received an email from".$name.".\n\n".$message;



  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.php?mailsend");
}
 ?>
