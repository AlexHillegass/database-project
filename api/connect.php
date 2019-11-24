<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '1234567890');
define('DB_NAME', 'Backend');

function connect() {
	$connect = mssql_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	if(!$connect) {
		die("Error connecting to mssql server");
	}

	return $connect;
}
$con = connect();
?>