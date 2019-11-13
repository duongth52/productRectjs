import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import routes from './routes'
import Menu from './components/Menu/Menu'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              { this.showContentMenu(routes) }
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenu = (routers) => {
    var result = null;
    if(routers.length > 0){
      result = routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return <Switch> {result} </Switch>
  }
}


export default App;
