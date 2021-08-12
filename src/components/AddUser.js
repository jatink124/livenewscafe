import React,{Component} from 'react';
import {AppContext} from '../Context';

class AddUser extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.AdminUserName.value,this.AdminPwd.value,this.adminemailid.value);
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Name</label>
                    <input type="text" name="AdminUserName" ref={(val) => this.AdminUserName = val} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Password</label>
                    <input type="text" name="AdminPwd" ref={(val) => this.AdminPwd = val} className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" name="adminemailid" ref={(val) => this.adminemailid = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddUser;