import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    // FETCH USERS FROM DATABASE
    //http://localhost/reactjs/reactjsphpcrud/php-react/all-users.php
    fetchUsers = () => {
        debugger;
        Axios.get('https://www.catchmyjob.in/php-react-sidebar/all-users.php')
        .then(({data}) => {
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
    handleUpdate = (id,AdminUserName,AdminPwd,adminemailid) => {
        Axios.post('https://www.catchmyjob.in/php-react-sidebar/update-user.php',
        {
            id:id,
            AdminUserName:AdminUserName,
            AdminPassword:AdminPwd,
            AdminEmailId:adminemailid
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.AdminUserName = AdminUserName;
                        user.AdminPassword = AdminPwd;
                        user.AdminEmailId = adminemailid;
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
        
        Axios.post('https://www.catchmyjob.in/php-react-sidebar/delete-user.php',{
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
    insertUser = (event,AdminUserName,AdminPwd,adminemailid) => {
        // console.log(AdminUserName+AdminPwd+adminemailid);
        event.preventDefault();
        event.persist();
        Axios.post('https://www.catchmyjob.in/php-react-sidebar/add_user.php',{
        
        AdminUserName:AdminUserName,
            AdminPassword:AdminPwd,
            AdminEmailId:adminemailid
            })
        .then(function ({data}) {
            
            if(data.success === 1){
              
                this.setState({
                    users:[
                        {"id":data.id,"AdminUserName":AdminUserName,"AdminPassword":AdminPwd,"AdminEmailId":adminemailid},
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