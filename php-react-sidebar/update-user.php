<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->AdminUserName) 
&& isset($data->AdminPassword)	
&& isset($data->AdminEmailId) 
     && !empty(trim($data->AdminUserName)) 
	&& !empty(trim($data->AdminPassword)) 
	&& !empty(trim($data->AdminEmailId))
	){
        $username = mysqli_real_escape_string($db_conn, trim($data->AdminUserName));
        $userpwd = mysqli_real_escape_string($db_conn, trim($data->AdminPassword));
        $useremail = mysqli_real_escape_string($db_conn, trim($data->AdminEmailId));
    if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
        $updateUser = mysqli_query($db_conn,"UPDATE `tbladmin` SET `AdminUserName`='$username', `AdminEmailId`='$useremail', `AdminPassword`='$userpwd' WHERE `id`='$data->id'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email Address!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}