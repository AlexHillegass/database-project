<?php
require 'connect.php';
error_reporting(E_ERROR);

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
    $postdata = file_get_conetents("php://input");
    $i = $request->i;
    
}
// $id = $_GET['id'];

// switch for different statements for rsos
switch($i){
    case 0: // login or get password as we like to call it
        $id = $request->id;
        // $pass = $request->pass;
        $sql = "SELECT `pass` FROM `Users` WHERE `userID` = {$id};";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
    case 1: //create user
        $first_name = $request->first_name;
        $last_name =$request->last_name;
        $emailAdd =$request->emailAdd;
        $pass =$request->pass;
        $clearance =$request->clearance;
        $sql = "INSERT INTO `Users` (`userID`, `first_name`, `last_name`, `emailAdd`, `pass`, `clearance`) VALUES ({$id}, {$first_name}, {$last_name}, {$emailAdd}, {$pass}, {$clearance});";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
}
?>