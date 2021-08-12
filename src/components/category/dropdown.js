import React,{Component} from 'react';
class DropDown extends React.Component{
    constructor(props) {
        super(props);
  
       
        this.state = {dd:[]};
        
        this.handleddChange = this.handleddChange.bind(this);
      }
    componentDidMount(){
        fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
        .then(response=>response.json())
        .then(dd=>this.setState({dd:dd}))
    }
    handleddChange(event) {
       
        this.setState({ddval: event.target.value});
        this.props.onhandleddChange(this.state.ddval);
    }
render(){
    return     <div className="drop-down">
      
    <select  key ={this.state.ddval} value={this.state.ddval} onChange={this.handleddChange}>
        {
            this.state.dd.map(user=><option key={user.id} value={user.id}>{user.CategoryName}</option>)
        }
    </select>
</div>
}

}
export default DropDown;