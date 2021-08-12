import React,{Component} from 'react';
import {Provider} from './Context';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { SubCategory } from './subcategory';
import { Post } from './Post';
import AllUsers from './components/GetUsers';
import Actions from './Actions/Actions';
export class Home extends Component{
  render(){
   
    const contextValue = {
      all_users:this.state.users,
      get_users:this.fetchUsers,
   }
  return (
<>
<Provider value={contextValue}>

      <Router>
       
    
        <h1>Home Page</h1>

        <Switch>
        

        </Switch>
      </Router>
    
    </Provider>
</>
  );
}
}

// export default Home;
