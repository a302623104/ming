<?php
header("COntent-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("localhost","root","root","jdapp");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
 }

// $username = $_POST['username'];

$sql = "SELECT shoplist.shop,shoplist.title,shoplist.img,shoplist.style,shoplist.server,shoplist.price,shoplist.price from  shopcar inner join shoplist on shopcar.shopid = shoplist.id where shopcar.foruser = 13244815596";
// $sql = "select shop from shoplist group by shop";
$result = mysqli_query($con, $sql);
$i=0;

$arr = array();
$shop = '';
while($row = mysqli_fetch_assoc($result)){
	$arr[$i]['name'] = $row['shop'];
	$shop = $row['shop'];
	$sql2 = "select title,img,style,server,price,message from shoplist where shop = '$shop'";
	$result2 = mysqli_query($con, $sql2);
	$j=0;
	while($row2 = mysqli_fetch_assoc($result2)){
		$arr[$i]['list'][$j] = $row2;
		$j++;
	}
	$i++;
}
echo json_encode($arr)
?>