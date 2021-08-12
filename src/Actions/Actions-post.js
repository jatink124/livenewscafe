import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    // FETCH USERS FROM DATABASE
    //http://localhost/reactjs/reactjsphpcrud/php-react/all-users.php
    fetchUsers = () => {
        Axios.get('https://www.catchmyjob.in/php-react-post/all-users.php')
        .then(({data}) => {
            console.log(data);
            if(data.success === 1){
              
                this.setState({
                    users:data.users.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

     // ON EDIT MODE
     editMode = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            return user;
        });

        this.setState({
            users
        });
    }

    //CANCEL EDIT MODE
    cancelEdit = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = false;
                return user;
            }
            return user
            
        });
        this.setState({
            users
        });
    }

    // UPDATE USER
    //http://localhost/reactjs/reactjsphpcrud/php-react/update-user.php
    handleUpdate = (id,PostTitle,CategoryId,subCategoryid,PostDetails,PostUrl,value) => {
        debugger;
        Axios.post('https://www.catchmyjob.in/php-react-post/update-user.php',
        {
            id:id,
            PostTitle:PostTitle,
            CategoryId:CategoryId,
            SubCategoryId:subCategoryid,
            PostDetails:PostDetails,
            PostUrl:PostUrl,
            Is_Active:value
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.PostTitle = PostTitle;
                        user.CategoryId = CategoryId;
                        user.subCategoryid = subCategoryid;
                        user.PostDetails = PostDetails;
                        user.PostUrl = PostUrl;
                        user.Is_Active = value;
                        user.isEditing = false;
                        return user;
                    }
                    return user; 
                });
                this.setState({
                    users
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // DELETE USER
    handleDelete = (id) => {
        let deleteUser = this.state.users.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('https://www.catchmyjob.in/php-react-post/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // INSERT USER
    insertUser = (event,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,value) => {
        // console.log(AdminUserName+AdminPwd+adminemailid);
        event.preventDefault();
        event.persist();
      
        Axios.post('https://www.catchmyjob.in/php-react-post/add_post.php',{
            PostTitle:PostTitle,
            Categoryid:Categoryid,
            subCategoryid:subCategoryid,
            subCategoryName:subCategoryName,
            PostDetails:PostDetails,
            PostUrl:PostUrl,
            value:value
            })
        .then(function ({data}) {
            
            if(data.success === 1){
              console.log(data.id);
                this.setState({
                    users:[
                        {"id":data.id,"PostTitle":PostTitle,"Categoryid":Categoryid,"CategoryName":CategoryName,"subCategoryid":subCategoryid,"subCategoryName":subCategoryName,"PostDetails":PostDetails,"PostUrl":PostUrl,"Is_Active":value},
                        ...this.state.users
                    ]
                });
               
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;