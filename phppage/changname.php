<?php
header("COntent-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("localhost","root","root","jdapp");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
 }

$username = $_POST['username'];
$name = $_POST['name'];


$sql = "update usermessage set name='$name' where username='$username'";
$result = mysqli_query($con, $sql);

if($result){
	echo "修改成功";
}
?>