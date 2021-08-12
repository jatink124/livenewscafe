<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if(isset($data->CategoryName) 
&& isset($data->Description)	
 
     && !empty(trim($data->CategoryName)) 
	&& !empty(trim($data->Description)) 

	){

    $username = mysqli_real_escape_string($db_conn, trim($data->CategoryName));
    $userpwd = mysqli_real_escape_string($db_conn, trim($data->Description));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->value));
  
        $insertUser = mysqli_query($db_conn,"INSERT INTO `tblcategory`(`CategoryName`,`Description`,`Is_Active`) VALUES('$username','$userpwd','$useremail')");
        if($insertUser){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"User Inserted.","id"=>$last_id]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
  
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}