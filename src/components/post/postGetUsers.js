import React, {Component} from 'react';
import Select from 'react-select';
import {AppContext} from '../../Context';
class GetUsers extends Component{
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {value:"0"};
        this.state = {ddval:0};
        this.state = {ddvalname:""};
        this.state = {dd:[]};
        this.state = {subcat:[]};
       
        this.handleChange = this.handleChange.bind(this);
        this.subcathandleChange = this.subcathandleChange.bind(this);
        this.handleddChange = this.handleddChange.bind(this);
      }
    componentDidMount(){
        this.context.get_users();
        fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
        .then(response=>response.json())
        .then(dd=>this.setState({dd:dd}))
        fetch('https://www.catchmyjob.in/php-react-category/subcategorydropdown.php')
        .then(response=>response.json())
        .then(subcat=>this.setState({subcat:subcat})) 
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.setState({ddval: selectedOption.value});
        this.setState({ddvalname:selectedOption.label});
      };
      subcathandleChange = postselectedOption => {
        this.setState({ postselectedOption });
        console.log(`Option selected:`, postselectedOption);
        this.setState({subcatddval: postselectedOption.value});
        this.setState({subcatddvalname:postselectedOption.label});
      };
      handleddChange(event) {
    //    this.setState({ddvalname:event.CategoryName});
        this.setState({sop: event.value});
      }
    handleUpdate = (id) => {
    
      
     this.context.handleUpdate(id,this.PostTitle.value,this.state.ddval,this.state.subcatddval,this.PostDetails.value,this.PostUrl.value,this.Is_Active.value);
  
    }

    render(){
        const { selectedOption } = this.state;
        const { postselectedOption } = this.state;
        const { postsop } = this.state;
        const options=this.state.dd;
        const subcatoptions=this.state.subcat;
        const ti = [
            { value: '0', label: '0' },
            { value: '1', label: '1' }
          ];
        let allUsers;
        let mainData;
        
        allUsers = this.context.all_users.map(({id,PostTitle,CategoryName,Categoryid,subCategoryid,subCategoryName,PostDetails,PostUrl,Is_Active,isEditing}) => {
            return isEditing === true ? (
          
          <tr key={id} >
               <td><input className="form-control" type="text" ref={(item) => this.PostTitle = item} defaultValue={PostTitle}/></td>
<td><div className="drop-down"><Select value={selectedOption} onChange={this.handleChange} options={options}/></div></td>
              <td><div className="drop-down"><Select value={postselectedOption} onChange={this.subcathandleChange} options={subcatoptions}/></div></td>
<td><input className="form-control" type="text" ref={(item) => this.PostDetails = item} defaultValue={PostDetails}/></td>
    <td><input className="form-control" type="text" ref={(item) => this.PostUrl = item} defaultValue={PostUrl}/></td>
    <td><input className="form-control" type="text" ref={(item) => this.Is_Active = item} defaultValue={Is_Active}/></td>
     <td><button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
        <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancel</button>
                </td>

            </tr>
            ) : (
                
              <tr key={id}>
                <td>{PostTitle}</td>
                  <td>{CategoryName}</td>
                  <td>{subCategoryName}</td>
                  <td>{PostDetails}</td>
                  <td>{PostUrl}</td>
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
                       
                            <th>Post-Title</th>
                            <th>Category-Name</th>
                            <th>Sub-Category-Name</th>
                            <th>Post-Details</th>
                            <th>Post-Url</th>
                            <th>IsActive</th>
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