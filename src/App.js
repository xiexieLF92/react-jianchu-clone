import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import IndexPages from "./common/indexPages";
import LoginReg from "./pages/loginReg";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <IndexPages />
          <Route path="/loginReg/:id" exact component={LoginReg}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
