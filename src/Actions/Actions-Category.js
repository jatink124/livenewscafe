import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    // FETCH USERS FROM DATABASE
    //http://localhost/reactjs/reactjsphpcrud/php-react/all-users.php
    fetchUsers = () => {
        Axios.get('https://www.catchmyjob.in/php-react-category/all-users.php')
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
    handleUpdate = (id,CategoryName,Description,Is_Active) => {
        Axios.post('https://www.catchmyjob.in/php-react-category/update-user.php',
        {
            id:id,
            CategoryName:CategoryName,
            Description:Description,
            Is_Active:Is_Active
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.CategoryName = CategoryName;
                        user.Description = Description;
                        user.Is_Active = Is_Active;
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
        
        Axios.post('https://www.catchmyjob.in/php-react-category/delete-user.php',{
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
    insertUser = (event,CategoryName,Description,value) => {
        // console.log(AdminUserName+AdminPwd+adminemailid);
        event.preventDefault();
        event.persist();
        Axios.post('https://www.catchmyjob.in/php-react-category/add_category.php',{
        
            CategoryName:CategoryName,
            Description:Description,
            value:value
            })
        .then(function ({data}) {
            
            if(data.success === 1){
              
                this.setState({
                    users:[
                        {"id":data.id,"CategoryName":CategoryName,"Description":Description,"Is_Active":value},
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