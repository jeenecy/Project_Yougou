<?php
// 配置数据库相关信息
$config = array(
  "hostname" => "localhost",
  "username" => "root",
  "password" => "",
  "dbname" => "yougou"

);



// 跟数据库服务器建立连接
mysql_connect($config["hostname"], $config["username"], $config["password"]);

// 选择数据库
mysql_select_db($config["dbname"]);

// 设置编码
mysql_query("set charset 'utf8'");
mysql_query("set character set 'utf8'");

?>