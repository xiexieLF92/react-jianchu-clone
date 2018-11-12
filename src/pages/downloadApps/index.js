import React, { Component } from "react";

import { 
  AppsWrapper,
  TopPartWrappper,
  TopPart,
  TopLogo,
  BackgroundImg,
  PhoneImg,
  TopQRCodeWrapper,
  MiddlePartOne,
  MiddlePartInfo,
  MiddlePartTwo,
  MiddlePartImgWrapper,
  BottomPart,
  BottomQRCodeImg,
  BottomBackgroundImg,
  BottomLogo
} from "./style";

class DownloadApps extends Component {
  render() {
    return (
      <AppsWrapper>
        <TopPartWrappper>
          <TopPart className="part">
            <TopLogo>
              <img src="http://cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png" alt="Misc logo"/>
              <div className="logo-info">
                <div className="title">创作你的创作</div>
                <div className="slogan">一个优质创作社区</div>
              </div>
            </TopLogo>
            <BackgroundImg src="http://cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" alt="Misc background" />
            <PhoneImg src="http://cdn2.jianshu.io/assets/web/misc-phone-69b812fa6eb049ce4a32ec03ab30416c.png" />
            <TopQRCodeWrapper>
              <img className="qrcode-img" src="http://cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png" alt="Download apps page top qrcode"/>
              <div className="title">扫码下载简书App</div>
              <div className="description">随时随地发现和创作内容</div>
            </TopQRCodeWrapper>
          </TopPart>
        </TopPartWrappper>
        <MiddlePartOne className="part">
          <MiddlePartInfo>
            <h3>轻松创作精美图文</h3>
            <h6>简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</h6>
          </MiddlePartInfo>
          <img className="middlepart-one-img" src="http://cdn2.jianshu.io/assets/web/misc-pic1-b2e2caa2aec8ff89bd6957f09b4e6fce.png" alt="Misc pic1"/>
        </MiddlePartOne>
        <MiddlePartTwo className="part">
          <MiddlePartImgWrapper className="left">
            <img src="http://cdn2.jianshu.io/assets/web/misc-pic2-378196f0f0c87fee66210c957722605c.png" alt="Misc pic3"/>
          </MiddlePartImgWrapper>
          <MiddlePartInfo className="part-info right">
            <h3>多元化的创作社区</h3>
            <h6>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</h6>
          </MiddlePartInfo>
        </MiddlePartTwo>
        <MiddlePartTwo className="part">
          <MiddlePartInfo className="part-info left">
            <h3>百万创作者在简书相遇</h3>
            <h6>在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</h6>
          </MiddlePartInfo>
          <MiddlePartImgWrapper className="right">
            <img src="http://cdn2.jianshu.io/assets/web/misc-pic3-a3e7f05fee99976afbb936eb6d3c288a.png" alt="Misc pic4"/>
          </MiddlePartImgWrapper>
        </MiddlePartTwo>
        <MiddlePartTwo className="part">
          <MiddlePartImgWrapper className="left">
            <img src="http://cdn2.jianshu.io/assets/web/misc-pic4-ed9583c5975a6d953f47c09ed63b911b.png" alt="Misc pic5"/>
          </MiddlePartImgWrapper>
          <MiddlePartInfo className="part-info right">
            <h3>自由地交流和沟通</h3>
            <h6>你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</h6>
          </MiddlePartInfo>
        </MiddlePartTwo>
        <BottomPart>
          <BottomQRCodeImg src="http://cdn2.jianshu.io/assets/web/download-apps-page-bottom-qrcode-8c63808111ffb1746c08cbd262adbe2e.png" alt="Download apps page bottom qrcode" />
          <BottomBackgroundImg src="http://cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png" alt="Misc background" />
          <div>扫码下载简书App</div>
          <BottomLogo>
            <img src="http://cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png" alt="Misc logo"/>
            <div className="logo-info">
              <div className="title">创作你的创作</div>
              <div className="slogan">一个优质创作社区</div>
            </div>
          </BottomLogo>
        </BottomPart>
      </AppsWrapper>
    )
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
}

export default DownloadApps;