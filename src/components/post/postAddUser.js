import React,{Component} from 'react';
import Select from 'react-select';
import {AppContext} from '../../Context';
import UploadFile from '../../UploadFile'

class AddUser extends Component {
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
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.PostTitle.value,this.state.ddval,this.state.ddvalname,this.state.subcatddval,this.state.subcatddvalname,this.PostDetails.value,this.PostUrl.value,this.state.sop);
        
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
       
       return (
          
        
          <form onSubmit={this.insertUser}>
            <div className="form-row">
            <div className="form-group col-sm-3">
                    <label className="font-weight-bold">Post Title</label>
                    <input type="text" name="PostTitle" ref={(val) => this.PostTitle = val} className="form-control" placeholder="PostTitle"/>
                </div>
    
  <div className="form-group col-sm-3">
                
                    <label className="font-weight-bold">Select Category</label>
                    <div className="drop-down">
      
                    <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
  </div></div>

  <div className="form-group col-sm-3">
                <label className="font-weight-bold">Select Sub Category</label>
                    <div className="drop-down">
      
                    <Select
        value={postselectedOption}
        onChange={this.subcathandleChange}
        options={subcatoptions}
      />
  </div>
                </div>
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">Post Details</label>
                    <input type="text" name="PostDetails" ref={(val) => this.PostDetails = val} className="form-control" placeholder="PostDetails"/>
                </div>
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">PostUrl</label>
                    <input type="text" name="PostUrl" ref={(val) => this.PostUrl = val} className="form-control" placeholder="PostUrl"/>
                </div>
            
                
                <div className="form-group col-sm-3">
                    <label className="font-weight-bold">Value</label><br></br>
             
                    <Select
        value={postsop}
        onChange={this.handleddChange}
        options={ti}
      />
                </div>
                <div className="form-group col-sm-3 text-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
                <div className="form-group col-sm-3">

                </div>
                </div>
              
                </form>  
        
        );
        
    }
}
export default AddUser;