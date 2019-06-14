<?php

include("./db.php");

// 从前端获取用户名和密码
$username = $_GET["username"];
$password = $_GET["password"];

header('Access-Control-Allow-Origin:*');
// 编写sql语句
// php里的双引号可以直接解析变量，单引号不行
// 如果字段的类型是string，还得再加个单引号
header('Content-Type:text/html;charset=utf-8');
$sql = "insert into users (username,password) values ('$username','$password')";

// echo $sql;

// 执行sql语句
// $res得到一个boolean
$res = mysql_query($sql);

if($res) {

  echo json_encode(array(
    "res_code" => 1,
    "res_message" => "注册成功"
  ));

}else{
  echo json_encode(array(
    "res_code" => 0,
    "res_message" => "注册失败"
  ));
}

?>