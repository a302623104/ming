<?php

header("COntent-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("localhost","root","root","jdapp");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
 }


$username = $_POST['username'];

$sql = "select username from user where username='$username'";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

if($row>0){
	echo 'true';
}
?>