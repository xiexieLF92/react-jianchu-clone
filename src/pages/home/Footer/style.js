import styled from "styled-components";

// footer
export const FooterWrapper = styled.footer`
  margin-bottom: 20px;
`
export const FooterNav = styled.ul`
  text-align: left;
`
// footer-nav-list
export const FooterNavItem = styled.li`
  color: #969696;
  display: inline-block;
  margin-right: 10px;
  font-size: 13px;
  a {
    text-decoration: none;
    color: #969696;
  }
`
// 版权信息
export const CopyRightInfo = styled.div`
  margin-top: 15px;
  color: #c8c8c8;
  font-size: 12px;
  text-align: left;
  a {
    display: inline-block;
    vertical-align: middle;
    color: #c8c8c8;
    text-decoration: none;
    img {
      font-size: 0;
      height: 30px;
    }
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
`