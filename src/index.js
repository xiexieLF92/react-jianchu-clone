import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GolbalStyle from "./GlobalStyle";
import IconFont from "./static/iconfont/iconfont";
import App from './App';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
<Provider store={store}>
  <Fragment>
    <App />
    <GolbalStyle />
    <IconFont />
  </Fragment>
</Provider>
, document.getElementById('root'));