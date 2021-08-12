import React,{Component} from 'react';

import {AppContext} from '../../Context';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {value:"0"};
        this.state = {ddval:0};
        this.state = {ddvalname:""};
        this.state = {dd:[]};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleddChange = this.handleddChange.bind(this);
      }
      
    componentDidMount(){
        fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
        .then(response=>response.json())
        .then(dd=>this.setState({dd:dd}))
       
    }
      handleChange(event) {
        this.setState({value: event.target.value});
        
      }
      handleddChange(event) {
       this.setState({ddvalname:event.CategoryName});
        this.setState({ddval: event.target.value});
      }
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.state.ddval,this.state.ddvalname,this.Subcategory.value,this.SubCatDescription.value,this.state.value);
        
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">Select Category</label>
                    <div className="drop-down">
      
      <select value={this.state.ddval} onChange={this.handleddChange}>
          {
              this.state.dd.map(({id,CategoryName})=><option value={id}>{CategoryName}</option>)
          }
      </select>
  </div>
                </div>
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">SubCategory</label>
                    <input type="text" name="Subcategory" ref={(val) => this.Subcategory = val} className="form-control" placeholder="Subcategory"/>
                </div>
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">SubcategoryDescription</label>
                    <input type="text" name="SubCatDescription" ref={(val) => this.SubCatDescription = val} className="form-control" placeholder="SubCatDescription"/>
                </div>
                <div className="form-group col-sm-3">
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