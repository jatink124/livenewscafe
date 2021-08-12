import React,{Component} from 'react';
import {AppContext} from '../../../../Context';
import {Provider} from '../../../../Context';
// import './App.css';
// import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from './components/NavigationBar';
// import { SubCategory } from './subcategory';
// import { Post } from './PostNew';
import AllUsers from '../../../../components/post/postGetUsers';

import Actions from '../../../../Actions/Actions-post';
import GetDataCards from './GetDataCards';
export class CardsFirst extends Actions{
  
    render(){
    
    const contextValue = {
      all_users:this.state.users,
      get_users:this.fetchUsers,
   }
  return (
<>
<Provider value={contextValue}>

<GetDataCards/></Provider>

</>
  );
}
}

// export default Home;
