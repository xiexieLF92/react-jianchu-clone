import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPages from "./common/indexPages";
import LoginReg from "./pages/loginReg";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/loginReg/:id" exact component={LoginReg}></Route>
            <IndexPages />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
