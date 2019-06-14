<?php
include('./db.php');

$username = $_GET["username"];
$password = $_GET["password"];

$sql = "select * from users where username='$username' and password='$password'";
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf-8');

// $res 是 resource 资源类型  
$res = mysql_query($sql);

// 取到$res的条数
$row = mysql_num_rows($res);

/* setTimeout(function(){
  window.location.href="../index.html";
},3000) */

if($row > 0) {
  echo json_encode(array(
    "res_code" => 1,
    "res_message" => "登录成功"
  ));

}else {
  echo json_encode(array(
    "res_code" => 0,
    "res_message" => "登录失败"
  ));
}
?>