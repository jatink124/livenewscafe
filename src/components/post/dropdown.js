import React,{Component} from 'react';
class DropDown extends React.Component{
    state={
        users:[]
    }
    componentDidMount(){
        fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
        .then(response=>response.json())
        .then(users=>this.setState({users:users}))
       
    }
render(){
    return <div className="drop-down">
      
        <select>
            {
                this.state.users.map(user=><option key={user.id} value={user.id}>{user.CategoryName}</option>)
            }
        </select>
    </div>
}

}
export default DropDown;