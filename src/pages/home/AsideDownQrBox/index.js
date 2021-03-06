import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { homeAction } from "../store";
import QRCodeImg from "../../../static/img/qrcode.png";
import {
  AsideDownWrapper,
  AsideDownInfo,
  BigQrCodeBox
} from "./style";

class AsideDownQrBox extends Component {
  render() {
    let { bigQrCodeShow, handleOnMouseEnter, handleOnMouseLeave } = this.props;
    return (
      <Link to="/download_apps">
        <AsideDownWrapper
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          >
            <img className="qrcode" src={QRCodeImg} alt=""/>
            <AsideDownInfo>
              <div className="title">
                <span>下载简书手机App</span>
                <i className="iconfont">&#xe604;</i>
              </div>
              <div className="desc">随时随地发现和创作内容</div>
            </AsideDownInfo>
          <BigQrCodeBox visibal={bigQrCodeShow}>
            <img className="bigQrcode" src={QRCodeImg} alt=""/>
          </BigQrCodeBox>
        </AsideDownWrapper>
      </Link>
    )
  }
}

const mapState = (state) => ({
  bigQrCodeShow: state.getIn(["home", "bigQrCodeShow"])
})

const mapDispatch = (dispatch) => ({
  handleOnMouseEnter() {
    dispatch(homeAction.bigQrCodeShow())
  },
  handleOnMouseLeave() {
    dispatch(homeAction.bigQrCodeHidden())
  }
})

export default connect(mapState, mapDispatch)(AsideDownQrBox);
