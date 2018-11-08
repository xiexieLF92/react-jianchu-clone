import React, { Component } from "react";
import { connect } from "react-redux";
import { recommendAction } from "./store";

import { 
  RecommendAuthorWrapper,
  RecommendLogo,
  RecommendContainer,
  PerBoxWrapper,
  PerBoxContainer,
  PerAvatarName,
  PerAvatarDesc,
  PerAvatarFollow,
  PerHr,
  PerMate,
  PerRecentUpdate,
  LoadMoreBtn,
  Loading
} from "./style";

class RecommendAuthor extends Component {
  renderRecentUpdate(list) {
    return (
      <div className="per_recent_wrap">
        {
          list.map((item, index) => (
            <PerRecentUpdate key={index} className="cursor">{item}</PerRecentUpdate>
          ))
        }    
      </div>
    )
  }
  renderPerBoxContainer() {
    let { recommendAuthorList } = this.props;
    return (
      recommendAuthorList.toJS().map((item, index) => (
        <PerBoxWrapper key={index}>
          <PerBoxContainer>
            <img className="avatar cursor" src={item.avatar} alt="avatar" />
            <PerAvatarName className="name">
              <span className="cursor">{item.name}</span>
              <i className="iconfont woman">&#xe6e3;</i>
            </PerAvatarName>
            <PerAvatarDesc className="description cursor">{item.description}</PerAvatarDesc>
            <PerAvatarFollow className="cursor">
              <i className="iconfont">&#xe613;</i>
              <span>关注</span>
            </PerAvatarFollow>
            <div className="per_hr_meta">
              <PerHr />
              <PerMate>最近更新</PerMate>
            </div>
            {
              this.renderRecentUpdate(item.recentUpdate)
            }
          </PerBoxContainer>
        </PerBoxWrapper>
      ))
    );
  }
  render() {
    let { logoImgSrc, getMoreLoading, getMoreRecommendList } = this.props;
    return (
      <RecommendAuthorWrapper>
        <RecommendLogo>
          <img src={logoImgSrc} alt="Recommend author"/>
        </RecommendLogo>
        <RecommendContainer>
          {
            this.renderPerBoxContainer()
          }
        </RecommendContainer>
        <LoadMoreBtn visible={!getMoreLoading} onClick={e => getMoreRecommendList(e)}>加载更多</LoadMoreBtn>
        <Loading visible={getMoreLoading}>
          <i className="iconfont">&#xe627;</i>
        </Loading>
      </RecommendAuthorWrapper>
    );
  }

  componentDidMount() {
    this.props.getRecommendAuthorList()
  }

}

const mapState = (state) => ({
  logoImgSrc: state.getIn(["recommend", "logoImgSrc"]),
  recommendAuthorList: state.getIn(["recommend", "recommendAuthorList"]),
  getMoreLoading: state.getIn(["recommend", "getMoreLoading"])
})

const mapDispatch = (dispatch) => ({
  getRecommendAuthorList() {
    dispatch(recommendAction.getRecommendAuthorList())
  },
  getMoreRecommendList(e) {
    console.log(e.nativeEvent);
    dispatch(recommendAction.setGetMoreLoading(true))
  }
})

export default connect(mapState, mapDispatch)(RecommendAuthor);