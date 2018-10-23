import styled from "styled-components";
import LogoImg from "../../static/img/nav-logo.png";

// 整个头部导航条
export const Nav = styled.nav`
  border-bottom: 1px solid #f0f0f0;
`;
// 限制宽度的头部导航条
export const WidthLimit = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
  font-size: 17px;
`;
// 导航条Logo
export const NavLogo = styled.div`
  float: left;
  height: 56px;
  width: 100px;
  background-image: url(${LogoImg});
  background-size: contain;
`
// 头部注册/写文章按钮
export const NavBtn = styled.a`
  display: block;
  float: right;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-sizing: border-box;
  font-size: 15px;
  vertical-align: middle;
  border-radius: 20px;
  margin: 8px 10px;
  cursor: pointer;
  &.primary {
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
  }
  &.red {
    border:none;
    background: #ea6f5a;
    color: #fff;
  }
  .iconfont {
    margin-right: 5px;
  }
`
// 导航链接
export const NavLink = styled.a`
  display: block;
  height:  56px;
  box-sizing: border-box;
  padding: 15px;
  line-height: 26px;
  font-size: 15px;
  cursor: pointer;
  &.toLeft {
    float: left;
    color: #333;
    margin-right: 15px;
    &.active {
      color: #ea6f5a;
    }
    .iconfont {
      margin-right: 5px;
    }
  }
  &.toRight {
    color: #969696;
    float: right;
    font-size: 17px;
    margin-left: 15px;
  }
`
// 顶部中间得container
export const Container = styled.div`
  width: 960px;
  height: 56px;
  padding: 0 15px;
  margin: 0 auto;
`
// 顶部搜索框wrap
export const NavSearchWrap = styled.div`
  position: relative;
  float: left;
  height: 56px;
`
// 顶部搜索框
export const NavSearch = styled.input`
  width: 240px;
  height: 38px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  background: #eee;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  &::placegolder {
    color: #969696;
  }
  &.searchWidth-enter {
    transition: all 0.2s ease-out;
  }
  &.searchWidth-enter-active {
    width: 320px;
  }
  &.searchWidth-enter-done {
    width: 320px;
  }
  &.searchWidth-exit {
    transition: all 0.2s ease-in;
  }
  &.searchWidth-exit-active {
    width: 240px;
  }
`
// 搜索框按钮
export const NavSearchBtn = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 4px;
  top: 13px;
  border-radius: 15px;
  background: ${ props => props.searchFocus ? "#8f8f8f" : "transparent"};
  cursor: pointer;
  color: ${ props => props.searchFocus ? "#fff" : "#969696"};
`
// 热门搜索
export const NavSearchTrend = styled.div`
  position: absolute;
  top: 57px;
  width: 250px;
  left: 0;
  padding: 20px 20px 10px;
  background: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  visibility: ${ props => props.visibal ? "visible" : "hidden"};
  opacity: ${ props => props.visibal ? 1 : 0};
  &:before {
    position: absolute;
    content: "";
    top: -9px;
    left: 27px;
    width: 17px;
    height: 17px;
    transform: rotate(45deg);
    background: #fff;
  }
  ul {
    font-size: 0;
    text-align: left;
  }
`
// 热门搜索头部
export const NavSearchTrendTitle = styled.div`
  height: 20px;
  margin-bottom: 10px;
  text-align: left;
  color: #969696;
  line-height: 20px;
  .title {
    font-size: 14px;
  }
`
// 热门搜索换一批按钮
export const NavSearchTrendtitleBtn = styled.a`
  float: right;
  font-size: 13px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
  .iconfont {
    display: inline-block;
    margin-right: 5px;
    transition: transform 0.4s ease-out;
    transform-origin: center;
  }
`
// 
export const NavSearchTrendList = styled.li`
  display: inline-block;
  line-height: 28px;
  margin-right: 10px;
  a {
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    text-decoration: none;
    &:hover {
      color: #333;
      border-color: #999;
    }
  }
`
