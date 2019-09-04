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


$sql = "insert into user (username,password,createtime) values('$username','$password',now())";
$result = mysqli_query($con, $sql);

if($result){
	$sql = "insert into usermessage (username,name) values ('$username','$username')";
	mysqli_query($con, $sql);
	echo "添加成功";
}
?>