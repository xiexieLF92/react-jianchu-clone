import React, { Component } from "react";
import { connect } from "react-redux";
import { searchOnFocus, searchOnBlur, searchOnMoveIn, searchOnMoveOut, getSearchTrendList, changeSearchTrendList } from "./store/action";
import { CSSTransition } from "react-transition-group";

import {
  Nav,
  WidthLimit,
  NavLogo,
  NavBtn,
  NavLink,
  Container,
  NavSearchWrap,
  NavSearch,
  NavSearchBtn,
  NavSearchTrend,
  NavSearchTrendTitle,
  NavSearchTrendtitleBtn,
  NavSearchTrendList
} from './style';

class Header extends Component {

  renderSearchTrend() {
    const { searchTrendList, pageNum } = this.props;
    const newList = searchTrendList.toJS().slice((pageNum-1)*10,pageNum*10)
    return (
      newList.map(item => {
        return (
          <NavSearchTrendList key={item}>
            <a href="javascript:void(0)">{item}</a>
          </NavSearchTrendList>
        )
      })
    )
  }
  render() {
    const { 
      searchOnFocus,
      moveIn,
      searchTrendList,
      totalPage, 
      pageNum, 
      changePageNum, 
      handleOnFocus, 
      handleOnBlur, 
      handleOnMouseEnter, 
      handleOnMouseLeave 
    } = this.props;
    return  (
      <Nav>
        <WidthLimit>
          <NavLogo></NavLogo>
          <NavBtn className="red">
            <i className="iconfont">&#xe62d;</i>
            写文章
          </NavBtn>
          <NavBtn className="primary">注册</NavBtn>
          <NavLink className="toRight">登录</NavLink>
          <NavLink className="toRight">
            <i className="iconfont">&#xe636;</i>
          </NavLink>
          <Container>
            <NavLink className="toLeft active">
              <i className="iconfont">&#xe786;</i>
              首页
            </NavLink>
            <NavLink className="toLeft">
              <i className="iconfont">&#xe63e;</i>
              下载App
            </NavLink>
            <NavSearchWrap>
              <CSSTransition
                in={searchOnFocus}
                timeout={200}
                classNames='searchWidth'
                >
                <NavSearch placeholder="搜索"
                  onFocus={() => {handleOnFocus(searchTrendList)}}
                  onBlur={handleOnBlur}
                >
                </NavSearch>
              </CSSTransition>
              <NavSearchBtn searchFocus={searchOnFocus}>
                <i className="iconfont searchBtn">&#xe60a;</i>
              </NavSearchBtn>
              <NavSearchTrend
                visibal={searchOnFocus || moveIn}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                >
                <NavSearchTrendTitle>
                  <span className="title">热门搜索</span>
                  <NavSearchTrendtitleBtn
                    onClick={ () => { changePageNum(this.rotateRef, totalPage, pageNum) } }
                    >
                    <i ref={(rotateRef) => {this.rotateRef = rotateRef}} className="iconfont">&#xe758;</i>
                    换一批
                  </NavSearchTrendtitleBtn>
                </NavSearchTrendTitle>
                <ul>
                  {this.renderSearchTrend()}
                </ul>
              </NavSearchTrend>
            </NavSearchWrap>
          </Container>
        </WidthLimit>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => ({
  searchOnFocus: state.getIn(["header", "onSearchFocus"]),
  moveIn: state.getIn(["header", "moveIn"]),
  searchTrendList: state.getIn(["header", "searchTrendList"]),
  totalPage: state.getIn(["header", "totalPage"]),
  pageNum: state.getIn(["header", "pageNum"])
})

const mapDispatchToProps = (dispatch) => ({
  handleOnFocus(list) {
    dispatch(searchOnFocus())
    if(list.size === 0) {
      dispatch(getSearchTrendList())
    }
  },
  handleOnBlur() {
    dispatch(searchOnBlur())
  },
  changePageNum(rotateRef, totalPage, pageNum) {
    let originDeg = rotateRef.style.transform.replace(/[^0-9]/ig,"")
    if(originDeg) {
      originDeg = parseInt(originDeg, 10)
    } else {
      originDeg = 0
    }
    rotateRef.style.transform = `rotate(${360 + originDeg}deg)`;
    if(pageNum < totalPage) {
      dispatch(changeSearchTrendList(pageNum+1))
    } else {
      dispatch(changeSearchTrendList(1))
    }
  },
  handleOnMouseEnter() {
    dispatch(searchOnMoveIn())
  },
  handleOnMouseLeave() {
    dispatch(searchOnMoveOut())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);