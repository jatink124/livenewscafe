import React,{Component} from 'react';
import {Provider} from './Context';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SubCategory } from './subcategory';
import { Post } from './PostNew';
import AllUsers from './components/GetUsers';
import Actions from './Actions/Actions-post';
import { CardsFirst } from './components/FrontEnd/Home/Cards/CardsFirst';
import NavigationBar from './components/NavigationBar';
import Navbar from './components/Navbar/Navbar';
export class Home extends Actions{
  render(){
   
    const contextValue = {
      all_users:this.state.users,
      get_users:this.fetchUsers,
   }
  return (
<>

<Provider value={contextValue}>
<Navbar/>
<CardsFirst/>
{/* <Post/> */}
</Provider>
</>
  );
}
}

// export default Home;
