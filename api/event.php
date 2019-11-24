<?php
require 'connect.php';
error_reporting(E_ERROR);

if(isset($postdata) && !empty($postdata)){
	$request = json_decode($postdata);
    $postdata = file_get_conetents("php://input");
    $i = $request->i;
}
$commentID = $_GET['commentID'];

// switch for different statements for rsos
switch($i){
    case 0: // delete comment
        $rsoID = $request->rsoID;
        $sql = "DELETE FROM `RSOComments` WHERE `commentID` = {$commentID};";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
    case 1: //create comment
        $commentID = $request->commentID;
        $userID =$request->userID;
        $eventID =$request->eventID;
        $comment =$request->comment;
        $submitted =$request->submitted;
        $sql = "INSERT INTO `RSOComments` (`commentID`, `userID`, `eventID`, `comment`, `submitted`) VALUES ({$commentID}, {$userID}, {$eventID}, {$comment}, {$submitted});";

        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
    case 2: // get comments
        $sql = "SELECT `comment` FROM `RSOComments` WHERE `commentID` = {$commentID};";
        $comments = [];

        if($res = mssql_query($con, $sql)){
            $cr = 0;
            while($row = mssql_fetch_assoc($res)){
                $commentss[$cr]['rsoID'] = $row['rsoID'];
                $cr++;
            }
        } else {
            http_response_code(404);
        }
        break;
    case 3: // edit comment
        $commentID = $request->commentID;
        $userID =$request->userID;
        $eventID =$request->eventID;
        $comment =$request->comment;
        $submitted =$request->submitted;
        $sql = "UPDATE `RSOComments` SET (`commentID`, `userID`, `eventID`, `comment`, `submitted`) = ({$commentID}, {$userID}, {$eventID}, {$comment}, {$submitted});";
        // 'UPDATE RSOEvents SET @field = @value WHERE eventID = @eventID;';
        if(!$res = mssql_query($con, $sql)){
            http_response_code(404);
        } 
        break;
}
?>