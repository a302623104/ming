<?php

header("COntent-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("localhost","root","root","jdapp");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
 }


$username = $_POST['username'];
$password = $_POST['password'];

$sql = "select * from user where username='$username' and password='$password'";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

if($row>0){
	echo '成功';
	$sql = "update user set lastlogintime=now() where username='$username'";
	mysqli_query($con, $sql);
}
?>