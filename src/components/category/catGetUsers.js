import React, {Component} from 'react';
import {AppContext} from '../../Context';
class GetUsers extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.CategoryName.value,this.Description.value,this.Is_Active.value);
    }

    render(){
        let allUsers;
        let mainData;
        
        allUsers = this.context.all_users.map(({id,CategoryName,Description,Is_Active,isEditing}) => {
            return isEditing === true ? (
                <tr key={id}>
               <td><input className="form-control" type="text" ref={(item) => this.CategoryName = item} defaultValue={CategoryName}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.Description = item} defaultValue={Description}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.Is_Active = item} defaultValue={Is_Active}/></td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ) : (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{CategoryName}</td>
                  <td>{Description}</td>
                    <td>{Is_Active}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Edit</button>
                        <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                       
                            <th>Category</th>
                            <th>Description</th>
                            <th>Is-Active</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Please Insert Some Users.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}
export default GetUsers;