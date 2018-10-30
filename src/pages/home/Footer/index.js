import React, { Component } from "react";

import {
  FooterWrapper,
  FooterNavItem,
  FooterNav,
  CopyRightInfo
} from "./style";

class Footer extends Component {
  render() {
    let footerNavList = ["关于简书", "联系我们", "加入我们", "简书出版", "品牌与徽标", "帮助中心", "合作伙伴"];
    return(
      <FooterWrapper>
        <FooterNav>
          {
            footerNavList.map((item, index) => (
              <FooterNavItem key={index}>
                <a href="">{item}</a>
              </FooterNavItem>
            ))
          }
        </FooterNav>
        <CopyRightInfo>
          <span>©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / </span>
          <a href="">
            <img src="http://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt=""/> 
          </a>
          <a href="">沪公网安备31010402002252号 / </a>
          <a href="">
            <img src="http://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt=""/>
          </a>
          <a href="">举报电话：021-34770013 / </a>
          <a href>
            <img src="http://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt=""/>
          </a>
        </CopyRightInfo>
      </FooterWrapper>
    )
  }
}

export default Footer;