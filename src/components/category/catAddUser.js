import React,{Component} from 'react';
import {AppContext} from '../../Context';
import DropDown from './dropdown';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {value:"0"};
    
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.CategoryName.value,this.Description.value,this.state.value);
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Category Name</label>
                    <input type="text" name="CategoryName" ref={(val) => this.CategoryName = val} className="form-control" placeholder="Category Name"/>
                </div>
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Description</label>
                    <input type="text" name="Description" ref={(val) => this.Description = val} className="form-control" placeholder="Description"/>
                </div>
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">Value</label><br></br>
                    <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            
          </select>
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