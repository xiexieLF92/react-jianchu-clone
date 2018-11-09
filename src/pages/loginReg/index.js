import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClassNames from "classnames";

import LogoImg from "../../static/img/logo.png";
import {
  LogoWrapper,
  Logo,
  MainContent,
  SignTitle,
  SignTypeBtn,
  LoginContainer,
  InputPrepend,
  RememberAndGorgetWrapper,
  RememberBtn,
  GorgetBtnWrapper,
  GorgetBtn,
  GorgetBtnList,
  GorgetBtnItem,
  SignBtn,
  MoreLogin,
  MoreLoginList
} from "./style";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleGorgetShow: false
    }
  }
  render() {
    const { match } = this.props;
    var loginClassName = ClassNames({
      "active": match.params.id === "login"
    })
    var signInClassName = ClassNames({
      "active": match.params.id === "register"
    })
    var loginContainerClassName = ClassNames("login-form", {
      "show": match.params.id === "login",
      "hidden": match.params.id === "register"
    })
    var registerContainerClassName = ClassNames("sign-in-form", {
      "show": match.params.id === "register",
      "hidden": match.params.id === "login"
    })
    return (
      <LogoWrapper>
        <Logo>
          <Link to="/">
            <img className="logoImg" src={LogoImg} alt=""/>
          </Link>
        </Logo>
        <MainContent>
          <SignTitle>
            <Link to="/loginReg/login">
              <SignTypeBtn className={loginClassName}>登录</SignTypeBtn>
            </Link>
            <b>·</b>
            <Link to="/loginReg/register">
              <SignTypeBtn className={signInClassName}>注册</SignTypeBtn>
            </Link>
          </SignTitle>
          <LoginContainer>
            <form className={loginContainerClassName}>
              <InputPrepend>
                <input type="text" className="restyle" placeholder="手机号或邮箱" name="session[email_or_mobile_number]" id="session[email_or_mobile_number]"/>
                <i className="iconfont">&#xe670;</i>
              </InputPrepend>
              <InputPrepend>
                <input type="password" placeholder="密码" name="session[password]" id="session[password]"/>
                <i className="iconfont">&#xe639;</i>
              </InputPrepend>
              <RememberAndGorgetWrapper>
                <RememberBtn>
                  <input type="checkbox" name="session[remember_me]" id="session_remember_me"/>
                  <label htmlFor="session_remember_me">记住我</label>
                </RememberBtn>
                <GorgetBtnWrapper>
                  <GorgetBtn onClick={(e) => {this.handleToggleClick(e)}}>登录遇到问题?</GorgetBtn>
                  <GorgetBtnList visibal={this.state.toggleGorgetShow}>
                    <GorgetBtnItem>用手机号重置密码</GorgetBtnItem>
                    <GorgetBtnItem>用邮箱重置密码</GorgetBtnItem>
                    <GorgetBtnItem>无法用海外手机号登录</GorgetBtnItem>
                    <GorgetBtnItem>无法用 Google 帐号登录</GorgetBtnItem>
                  </GorgetBtnList>
                </GorgetBtnWrapper>
              </RememberAndGorgetWrapper>
              <SignBtn className="login-btn">登录</SignBtn>
            </form>
            <form className={registerContainerClassName}>
              <InputPrepend>
                <input type="text" className="restyle" placeholder="你的昵称" name="session[user_nickname]" id="user_nickname"/>
                <i className="iconfont">&#xe670;</i>
              </InputPrepend>
              <InputPrepend>
                <input type="text" className="inner-restyle" placeholder="手机号" name="session[user_mobile_number]" id="user_mobile_number"/>
                <i className="iconfont">&#xe63e;</i>
              </InputPrepend>
              <InputPrepend>
                <input type="text" className="inner-restyle" placeholder="手机验证码" name="session[js_security_number]" id="js_security_number"/>
                <i className="iconfont">&#xe641;</i>
              </InputPrepend>
              <InputPrepend>
                <input type="password" placeholder="设置密码" name="session[user_password]" id="user_password"/>
                <i className="iconfont">&#xe639;</i>
              </InputPrepend>
              <SignBtn className="sign-in-btn">注册</SignBtn>
            </form>
            <MoreLogin>
              <h6>社交账号直接登录</h6>
              <MoreLoginList>
                <li className="more-sign-item">
                  <i className="iconfont iconfont-weibo">&#xe645;</i>
                </li>
                <li className="more-sign-item">
                  <i className="iconfont iconfont-weixin">&#xe615;</i>
                </li>
                <li className="more-sign-item">
                  <i className="iconfont iconfont-qq">&#xe60e;</i>
                </li>
                <li className="more-sign-item">
                  <i className="iconfont iconfont-douban">&#xe691;</i>
                </li>
              </MoreLoginList>
            </MoreLogin>
          </LoginContainer>
        </MainContent>
      </LogoWrapper>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  }
  componentDidMount() {
    console.log(this.props,this.state)
    window.addEventListener("click",  e => {this.handleOnClose(e)})
  }
  componentWillUnmount() {
    window.removeEventListener("click", e => {this.handleOnClose(e)})
  }
  handleToggleClick(e) {
    e.stopPropagation()
    this.setState({
      toggleGorgetShow: !this.state.toggleGorgetShow
    })
  }
  handleOnClose(e) {
    if(this.state.toggleGorgetShow) {
      this.setState({
        toggleGorgetShow: !this.state.toggleGorgetShow
      })
    }
  }
}

export default Login;