<?php
header("COntent-Type:text/html;charset=utf-8");

$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
 }
 mysql_select_db("ow",$con);

$result = mysql_query("select * from hero");

$i=0;
$arr = array();

 while($row = mysql_fetch_array($result))
   {
    $arr[0][$i] = $row['Id'];
    $arr[1][$i] = $row['name'];
    $arr[2][$i] = $row['info'];
    $i++;
   }


echo json_encode($arr);

?>
