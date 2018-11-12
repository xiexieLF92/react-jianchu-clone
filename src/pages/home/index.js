import React, { Component } from "react";

import CarouselBanner from "./CarouseBanner";
import Recommend from "./Recommend/";
import ArticleList from "./AtricleList";
import Board from "./Board";
import AsideDownQrBox from "./AsideDownQrBox";
import RecomAuthors from "./RecomAuthors";
import Footer from "./Footer";

import {
  HomeWrapper,
  HomeLeftContentWrapper,
  HomeRightContentWrapper
} from "./style";

class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        <HomeLeftContentWrapper>
          <CarouselBanner />
          <Recommend />
          <ArticleList />
          <Footer />
        </HomeLeftContentWrapper>
        <HomeRightContentWrapper>
          <Board />
          <AsideDownQrBox />
          <RecomAuthors />
        </HomeRightContentWrapper>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
}

export default Home;