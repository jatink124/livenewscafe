<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allUsers = mysqli_query($db_conn,"select tp.id,tc.CategoryName CategoryName,tsc.Subcategory subCategoryName,tp.PostTitle,tp.PostDetails PostDetails,tp.PostDetails,tp.Is_Active,tp.PostUrl PostUrl
from tblposts tp inner join tblcategory tc on tp.CategoryId=tc.id inner join tblsubcategory tsc 
on tp.SubCategoryId=tsc.id");
 if(mysqli_num_rows($allUsers) > 0){
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"users"=>$all_users]);
}
else{
    echo json_encode(["success"=>0]);
}