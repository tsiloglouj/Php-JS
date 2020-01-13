<?php
	$user = 'it144184';
	$pass = '1234';
	$host = '';
	$db = 'bookstoredb'; //is missing

	$mysqli = new mysqli ($host, $user, $pass, $db, null, '/home/student/it/2014/it144184/mysql/run/mysql.sock');	
	
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: (" . 
	    $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}
?>