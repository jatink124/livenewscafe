<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if(isset($data->SubCategory) 
&& isset($data->SubCatDescription)	
 
     && !empty(trim($data->SubCategory)) 
	&& !empty(trim($data->SubCatDescription)) 

	){

    $Categoryid = mysqli_real_escape_string($db_conn, trim($data->Categoryid));
    $SubCategory = mysqli_real_escape_string($db_conn, trim($data->SubCategory));
    $SubCatDescription = mysqli_real_escape_string($db_conn, trim($data->SubCatDescription));
    $value = mysqli_real_escape_string($db_conn, trim($data->value));
  
        $insertUser = mysqli_query($db_conn,"INSERT INTO `tblsubcategory`(`CategoryId`,`Subcategory`,`SubCatDescription`,`Is_Active`)
         VALUES('$Categoryid','$SubCategory','$SubCatDescription','$value')");
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