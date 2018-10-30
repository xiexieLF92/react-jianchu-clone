import React, { Component } from "react";
import { connect } from "react-redux";
import { headerAction } from "./store";
import { CSSTransition } from "react-transition-group";

import {
  Nav,
  WidthLimit,
  NavLogo,
  NavBtn,
  NavLink,
  PopoverModelWrapper,
  PopoverModel,
  SwitchMeta,
  SwitchBtnWrap,
  SwitchBtn,
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
            <a href>{item}</a>
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
      popoverModelShow,
      handleOnFocus, 
      handleOnBlur, 
      handleOnMouseEnter, 
      handleOnMouseLeave,
      togglePopoverModelShow
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
          <PopoverModelWrapper>
            <NavLink className="toRight wrapper" onClick={togglePopoverModelShow}>
              <i className="iconfont">&#xe636;</i>
            </NavLink>
            <PopoverModel visibal={popoverModelShow} onClick={(e) => {this.popoverModelShowClick(e)}}>
              <SwitchMeta>
                <i className="iconfont">&#xe643;</i>  
                <span>夜间模式</span>
              </SwitchMeta>
              <SwitchBtnWrap className="half-switch">
                <SwitchBtn>开</SwitchBtn>
                <SwitchBtn className="active">关</SwitchBtn>
              </SwitchBtnWrap>
              <hr/>
              <SwitchBtnWrap>
                <SwitchBtn>宋体</SwitchBtn>
                <SwitchBtn className="active">黑体</SwitchBtn>
              </SwitchBtnWrap>
            </PopoverModel>
          </PopoverModelWrapper>
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

  togglePopoverModelByClick(e) {
    if(this.props.popoverModelShow)
      this.props.togglePopoverModelShow(e);
  }

  popoverModelShowClick(e) {
    e.stopPropagation()
  }

  componentDidMount() {
    window.addEventListener("click", (e) => {this.togglePopoverModelByClick(e)})
  }

  componentWillUnmount() {
    window.removeEventListener("click", (e) => {this.togglePopoverModelByClick(e)})
  }
}

const mapStateToProps = (state) => ({
  searchOnFocus: state.getIn(["header", "onSearchFocus"]),
  moveIn: state.getIn(["header", "moveIn"]),
  searchTrendList: state.getIn(["header", "searchTrendList"]),
  totalPage: state.getIn(["header", "totalPage"]),
  pageNum: state.getIn(["header", "pageNum"]),
  popoverModelShow: state.getIn(["header", "popoverModelShow"])
})

const mapDispatchToProps = (dispatch) => ({
  handleOnFocus(list) {
    dispatch(headerAction.searchOnFocus())
    if(list.size === 0) {
      dispatch(headerAction.getSearchTrendList())
    }
  },
  handleOnBlur() {
    dispatch(headerAction.searchOnBlur())
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
      dispatch(headerAction.changeSearchTrendList(pageNum+1))
    } else {
      dispatch(headerAction.changeSearchTrendList(1))
    }
  },
  handleOnMouseEnter() {
    dispatch(headerAction.searchOnMoveIn())
  },
  handleOnMouseLeave() {
    dispatch(headerAction.searchOnMoveOut())
  },
  togglePopoverModelShow(e) {
    e.stopPropagation();
    dispatch(headerAction.togglePopoverModelShow())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);