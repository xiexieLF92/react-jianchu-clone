import React, { Component } from "react";
import { connect } from "react-redux";
import { homeAction } from "../store";

import {
  CutOffRuleLine,
  ArticleListItem,
  ArticleListImgWrapper,
  ArticleListContentWrapper,
  ArticleListContentTitle,
  ArticleListContentDesc,
  ArticleListContentMeta,
  ArticleListGetMore
} from "./style";

class ArticleList extends Component {

  renderListImg(src) {
    if(src) {
      return (
        <ArticleListImgWrapper>
          <img src={src} alt=""/>
        </ArticleListImgWrapper>
      )
    } else {
      return null;
    }
  }

  renderArticleList(articleContentList) {
    return articleContentList.toJS().map((item, index) => (
      <ArticleListItem key={index}>
        <ArticleListContentWrapper>
          <ArticleListContentTitle>{item.title}</ArticleListContentTitle>
          <ArticleListContentDesc>{item.desc}</ArticleListContentDesc>
          <ArticleListContentMeta>
            <a className="nickname mate-item">{item.nickName}</a>
            <a className="mate-item" href="">
              <i className="iconfont">&#xe633;</i>{item.messageCount}
            </a>
            <span className="mate-item">
              <i className="iconfont">&#xe64e;</i>{item.collectCount}
            </span>
          </ArticleListContentMeta>
        </ArticleListContentWrapper>
        {
          this.renderListImg(item.imgSrc)
        }
      </ArticleListItem>
    ))
  }

  render() {
    const { articleContentList } = this.props;
    return (
      <div className="article-list-wrapper">
        <CutOffRuleLine/>
        {
          this.renderArticleList(articleContentList)
        }
        <ArticleListGetMore>阅读更多</ArticleListGetMore>
      </div>
    )
  }
  componentWillMount() {
    const { getArticleList } = this.props;
    getArticleList()
  }
}

const mapState = (state) => ({
  articleContentList: state.getIn(["home", "articleContentList"])
})

const mapDispatch = (dispatch) => ({
  getArticleList() {
    dispatch(homeAction.getArticleList())
  }
})

export default connect(mapState, mapDispatch)(ArticleList);