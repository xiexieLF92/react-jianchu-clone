import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home"
import AsideTools from "./common/asideTools/";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact render={() => (<div>detail</div>)}></Route>
          </div>
        </BrowserRouter>
        <AsideTools/> 
      </div>
    );
  }
}

export default App;
