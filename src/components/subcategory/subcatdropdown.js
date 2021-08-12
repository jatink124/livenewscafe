import React,{Component} from 'react';
class DropDown extends React.Component{
    state={
        users:[]
    }
    componentDidMount(){
        fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
        .then(response=>response.json())
        .then(users=>this.setState({users:users}))
        console.log(this.state.users);
    }
render(){
    return <div className="drop-down">
        <p>Select from the list</p>
        <select>
            {
                this.state.users.map(user=><option value="user.id">{user.CategoryName}</option>)
            }
        </select>
    </div>
}

}
export default DropDown;