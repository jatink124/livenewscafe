import React from 'react';
import {Provider} from './Context';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar1';
import { Home } from './Homeupload';
import { About } from './About';
import { SubCategory } from './subcategory';
import { Post } from './Post';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';
import AllUsers from './components/GetUsers';
import AddUser from './components/AddUser';
import Actions from './Actions/Actions';

export class Admin extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
  return (
    <Provider value={contextValue}>
   <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/subcategory" component={SubCategory} />
          <Route path="/post" component={Post} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
    </Provider>
  );
}
}


