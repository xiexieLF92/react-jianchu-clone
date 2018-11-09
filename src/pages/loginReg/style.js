import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  background: #f1f1f1;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
`

export const Logo = styled.div`
  position: absolute;
  top: 56px;
  left: 60px;
  .logoImg {
    width: 100px;
  }
`

export const MainContent = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  box-sizing: border-box;
`

export const SignTitle = styled.div`
  margin: 0 auto 50px;
  font-weight: 400;
  color: #969696;
  font-size: 18px;
  b {
    padding: 10px;
  }
`
export const SignTypeBtn = styled.div`
  padding: 10px;
  color: #969696;
  cursor: pointer;
  display: inline-block;
  &.active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
  &:hover {
    border-bottom: 2px solid #ea6f5a;
  }
`

export const LoginContainer = styled.div`
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
`
export const InputPrepend = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 50px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
    outline: none;
    &::placeholder {
      color: #969696;
      font-size: 14px;
    }
    &.restyle {
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    }
    &.inner-restyle {
      border-bottom: none;
      border-radius: 0 0 0 0;
    }
  }
  .iconfont {
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: 18px;
    color: #969696;
    transform: translateY(-50%);
  }
`
export const RememberAndGorgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RememberBtn = styled.div`
  margin: 15px 0;
  font-size: 0;
  input {
    vertical-align: middle;
    cursor: pointer;
  }
  label {
    margin-left: 5px;
    font-size: 15px;
    color: #969696;
    vertical-align: middle;
    cursor: pointer;
  }
`
export const GorgetBtnWrapper = styled.div`
  position: relative;
`
export const GorgetBtn = styled.a`
  color: #999;
  cursor:pointer;
  font-size: 14px;
  &:hover {
    color: #333;
  }
`
export const GorgetBtnList = styled.ul`
  display: ${props => props.visibal ? "block" : "none"};
  position: absolute;
  top: 20px;
  right: 0;
  min-width: 160px;
  padding: 5px 0;
  background: #fff;
  font-size: 14px;
  border: 1px solid rgba(0,0,0,.15);
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  border-radius: 6px;
  z-index: 1000;
  text-align: left;
`
export const GorgetBtnItem = styled.li`
  color: #333;
  line-height: 20px;
  padding: 10px 20px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #f3f3f3;
  }
`
export const SignBtn = styled.button`
  display: block;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
  &.login-btn {
    background: #3194d0;
  }
  &.sign-in-btn {
    background: #42c02e;
    margin-top: 20px;
  }
`
export const MoreLogin = styled.div`
  margin-top: 50px;
  h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    &:before, &:after{
      content: "";
      border-top: 1px solid #b5b5b5;
      display: block;
      position: absolute;
      width: 60px;
      top: 5px;
    }
    &:before {
      left: 30px;
    }
    &:after {
      right: 30px;
    }
  }
`
export const MoreLoginList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .more-sign-item {
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0 5px;
    .iconfont {
      font-size: 28px;
      cursor: pointer;
    }
    .iconfont-weibo {
      color: #e05244;
    }
    .iconfont-weixin {
      color: #00bb29;
    }
    .iconfont-qq {
      color: #498ad5;
    }
    .iconfont-douban {
      color: #00820f;
    }
  }
`