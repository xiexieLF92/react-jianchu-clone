import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { homeAction } from "../store";

import {
  RecomAuthorsWrapper,
  RecomChangePages,
  RecomAuthorsItem,
  RecomAuthorAvatarImg,
  RecomAuthorsItemDesc,
  RecomAuthorsGetAll
} from  "./style";

class RecomAuthors extends Component {
  renderList(item) {
    return(
      <RecomAuthorsItem key={item.id}>
        <RecomAuthorAvatarImg>
          <img src={item.avatar_source} alt=""/>
        </RecomAuthorAvatarImg>
        <RecomAuthorsItemDesc>
          <a href="javascript:" className="avatar-name">{item.nickname}</a>
          <p>写了{item.total_wordage}字 · {item.total_likes_count}喜欢</p>
          <a href="javascript:" className="follow">
            <i className="iconfont">&#xe613;</i>
            <span>关注</span>                
          </a>
        </RecomAuthorsItemDesc>
      </RecomAuthorsItem>
    )
  }
  render() {
    let { users, pageNum, totalCount, hangleChangePageNum } = this.props;
    let newUsers = users.slice((pageNum-1)*5,pageNum*5);
    return (
      <RecomAuthorsWrapper>
        <div className="title">
          <span>推荐作者</span>
          <RecomChangePages onClick={() => hangleChangePageNum(pageNum, totalCount, this.rotateRef)}>
            <i ref={(rotateRef) => {this.rotateRef = rotateRef}} className="iconfont">&#xe758;</i>
            <span>换一批</span>
          </RecomChangePages>
        </div>
        <ul className="recom-author-list">
          {
            newUsers.map((item) => this.renderList(item) )
          }
        </ul>
        <Link to="/recommendauthor">
          <RecomAuthorsGetAll>
            <span>查看全部</span>
            <i className="iconfont">&#xe604;</i>
          </RecomAuthorsGetAll>
        </Link>
      </RecomAuthorsWrapper>
    );
  }

  componentDidMount() {
    this.props.getRecomAuthor()
  }
}

const mapState = (state) => ({
  users: state.getIn(["home", "recomAuthor", "users"]),
  pageNum: state.getIn(["home", "recomAuthor", "page_num"]),
  totalCount: state.getIn(["home", "recomAuthor", "total_count"])
})

const mapDispatch = (dispatch) => ({
  hangleChangePageNum(pageNum, totalCount, rotateRef) {
    let originDeg = rotateRef.style.transform.replace(/[^0-9]/ig, "");
    let totalNum = Math.ceil(totalCount/5);

    if(originDeg) {
      originDeg = parseInt(originDeg, 10)
    } else {
      originDeg = 0
    }
    rotateRef.style.transform = `rotate(${360 + originDeg}deg)`;
    if (pageNum < totalNum) {
      pageNum++;
    } else {
      pageNum = 1;
    }
    dispatch(homeAction.recomAuthorsListChange(pageNum))
  },
  getRecomAuthor() {
    dispatch(homeAction.getRecomAuthor())
  }
})

export default connect(mapState, mapDispatch)(RecomAuthors);