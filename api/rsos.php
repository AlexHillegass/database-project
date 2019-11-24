<?php
require 'connect.php';
error_reporting(E_ERROR);

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
    $postdata = file_get_conetents("php://input");
    $i = $request->i;
}
$id = $_GET['id'];

// switch for different statements for rsos
switch($i){
    case 0: // join rso
        $rsoID = $request->rsoID;
        $sql = "INSERT INTO `RSOMemberships` (`rsoID`, `userID`) VALUES ({$rsoID}, {$id});";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
    case 1: //create rso
        $rsoID = $request->rsoID;
        $rsoName =$request->rsoName;
        $sql = "INSERT INTO `RSOs` (`rsoID`, `rsoName`, `ownerID`, `approved`) VALUES ({$rsoID}, {$rsoName}, {$id}, 0);";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
    case 2: // fetch rsos
        $sql = "SELECT `rsoID` FROM `RSOs` WHERE `approved` = 1";
        $rsos = [];

        if($res = mssql_query($con, $sql)){
            $cr = 0;
            while($row = mssql_fetch_assoc($res)){
                $rsos[$cr]['rsoID'] = $row['rsoID'];
                $cr++;
            }
        } else {
            http_response_code(404);
        }
        break;
}
?>