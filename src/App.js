import React,{Component} from 'react';
import {Provider} from './Context';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar1';
import { Home } from './Homenew';
import { Admin } from './Admin';

class App extends Component {
  render(){
  
  return (
   
   <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
       </Switch>
      </Router>
    </React.Fragment>

  );
}
}

export default App;
