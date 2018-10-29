import React, { Component } from "react";
import { connect } from "react-redux";
import { homeAction } from "../store";
import {
  AsideDownWrapper,
  AsideDownInfo,
  BigQrCodeBox
} from "../style";

class AsideDownQrBox extends Component {
  render() {
    let { bigQrCodeShow, handleOnMouseEnter, handleOnMouseLeave } = this.props;
    return (
      <AsideDownWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        >
        <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <AsideDownInfo>
          <div className="title">
            <span>下载简书手机App</span>
            <i className="iconfont">&#xe604;</i>
          </div>
          <div className="desc">随时随地发现和创作内容</div>
        </AsideDownInfo>
        <BigQrCodeBox visibal={bigQrCodeShow}>
          <img className="bigQrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </BigQrCodeBox>
      </AsideDownWrapper>
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
