import React, { Component } from "react";
import { connect } from "react-redux";
import {
  RecommendWrapper,
  RecommendItem,
  RecommendMoreItem
} from "./style";

class Recommend extends Component {

  render() {
    let { recommendList } = this.props;
    return(
      <RecommendWrapper>
        {
          recommendList.toJS().map((item, index) => (
            <RecommendItem key={index}>
              <img src={item.imgSrc} alt=""/>
              <span>{item.name}</span>
            </RecommendItem>
          ))
        }
        <RecommendMoreItem>
          更多热门专题
          <i className="iconfont">&#xe604;</i>
        </RecommendMoreItem>
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(["home", "recommendList"]),
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);