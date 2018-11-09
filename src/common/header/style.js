import styled from "styled-components";
import LogoImg from "../../static/img/nav-logo.png";

// 整个头部导航条
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  z-index: 100;
`;
// 限制宽度的头部导航条
export const WidthLimit = styled.div`
  min-width: 960px;
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
export const NavBtn = styled.div`
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
export const NavLinkTo = styled.div`
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
    .iconfont {
      margin-right: 5px;
    }
    &:hover {
      background: #f5f5f5;
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
  .active {
    .toLeft {
      color: #ea6f5a!important;
      &:hover {
        background: none;
      }
    }
  }
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
// 热门搜索列表
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
// popoverModelWrapper
export const PopoverModelWrapper = styled.div`
  position: relative;
  height: 56px;
  float: right;
`
// popoverModel
export const PopoverModel = styled.div`
  position: absolute;
  top: 56px;
  right: -10px;
  text-align: left;
  padding: 20px 20px 20px 24px;
  min-width: 205px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
  -webkit-filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
  visibility: ${ props => props.visibal ? "visible" : "hidden"};
  opacity: ${ props => props.visibal ? 1 : 0};
  &:before {
    position: absolute;
    top: -8px;
    right: 21px;
    content: "";
    border: 9px solid transparent;
    border-bottom-color: #fff;
    border-top: none;
  }
  hr {
    border: none;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
export const SwitchMeta = styled.div`
  padding-left: 4px;
  margin-right: 16px;
  font-size: 14px;
  color: #969696;
  line-height: 40px;
  vertical-align: middle;
  display: inline-block;
  .iconfont {
    margin-right: 5px;
  }
`
export const SwitchBtnWrap = styled.div`
  width: 100%;
  font-size: 0;
  &.half-switch {
    width: auto;
    display: inline-block;
    vertical-align: middle;
  }
 `
export const SwitchBtn = styled.a`
  display: inline-block;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  color: #969696;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-align: center;
  width: 49%;
  box-sizing: border-box;
  &:first-child {
    padding: 10px 13px 10px 17px;
    border-radius: 20px 0 0 20px;
    border-right: none;
  }
  &:last-child {
    padding: 10px 17px 10px 13px;
    border-radius: 0 20px 20px 0;
    border-left: none;
  }
  &.active {
    border-color: #6dacf4;
    background-color: #6dacf4;
    color: #fff;
    box-shadow: inset 0 0 6px rgba(0,0,0,.1);
  }

`
