<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->CategoryName) 
&& isset($data->Description)	

     && !empty(trim($data->CategoryName)) 
	&& !empty(trim($data->Description)) 

	){
        $catname = mysqli_real_escape_string($db_conn, trim($data->CategoryName));
        $descname = mysqli_real_escape_string($db_conn, trim($data->Description));
        $isactive = mysqli_real_escape_string($db_conn, trim($data->Is_Active));
    
        $updateUser = mysqli_query($db_conn,"UPDATE `tblcategory` SET `CategoryName`='$catname', `Description`='$descname', `Is_Active`='$isactive' WHERE `id`='$data->id'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
    
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}