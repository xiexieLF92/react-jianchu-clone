import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";

import Header from "../header";
import Home from "../../pages/home";
import DownloadApps from "../../pages/downloadApps";
import RecommendAuthor from "../../pages/recommendAuthor";
import AsideTools from "../asideTools/";

class IndexPages extends Component {
  render() {
    return (
      <Fragment>
        <Route component={Header} />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact render={() => (<div>detail</div>)}></Route>
        <Route path="/download_apps" exact component={DownloadApps}></Route>
        <Route path="/recommendauthor" exact component={RecommendAuthor}></Route>
        <AsideTools />
      </Fragment>
    )
  }
}

export default withRouter(IndexPages);