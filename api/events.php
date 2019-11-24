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
    case 0: // create event
        $eventID = $request->eventID;
        $eventName = $request->eventName;
        $category = $request->category;
        $descript = $request->descript;
        $eventDate = $request->eventDate;
        $venue = $request->venue;
        $vAddress = $request->vAddress;
        $latitude = $request->latitude;
        $longitude = $request->longitude;
        $sql = "INSERT INTO `RSOEvents` (`eventID`, `eventRating`, `eventName`, `category`, `descript`, `eventDate`, `venue`, `vAddress`, `latitude`, `longitude`) VALUES ({$eventID}, NULL, {$eventName}, {$category}, {$descript}, {$eventDate}, {$venue}, {$vAddress}, {$latitude}, {$longitude});";


        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;

    case 1: // fetch events
        $sql = "SELECT `eventID` FROM `RSOEvents` WHERE `approved` = 1";
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