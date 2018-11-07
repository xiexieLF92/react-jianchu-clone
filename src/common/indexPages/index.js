import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "../header";
import Home from "../../pages/home";
import DownloadApps from "../../pages/downloadApps";
import AsideTools from "../asideTools/";

class IndexPages extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact render={() => (<div>detail</div>)}></Route>
        <Route path="/download_apps" exact component={DownloadApps}></Route>
        <AsideTools />
      </Fragment>
    )
  }
}

export default IndexPages;