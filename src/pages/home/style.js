import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 57px auto 0;
  height: 300px;
  padding: 30px 0 0;
`

export const HomeLeftContentWrapper = styled.div`
  width: 67%;
`
export const HomeRightContentWrapper = styled.div`
  flex: 1;
  margin-left: 4%;
`
export const CarouselBannerWrapper = styled.div`
  border-radius: 6px;
  margin-bottom: 35px;
  font-size: 0;
  width: 100%;
  position: relative;
  display: none;
  .banner-item {
    float: left;
    position: absolute;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`

export const  RecommendWrapper = styled.div`
  overflow: hidden;
  &:after {
    content: "";
    height: 0;
    clear: both;
    visibility: hidden;
  }
`
export const  RecommendItem = styled.a`
  display: block;
  float: left;
  margin: 0 18px 18px 0;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 0;
  height: 32px;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
    vertical-align: top;
  }
  span {
    display: inline-block;
    padding: 0 11px 0 6px;
    vertical-align: top;
    font-size: 14px;
    line-height: 32px;
  }
`
export const RecommendMoreItem = styled.a`
  display: block;
  float: left;
  height: 32px;
  line-height: 32px;
  color: #787878;
  cursor: pointer;
`

export const CutOffRuleLine = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`
export const ArticleListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
`
export const ArticleListImgWrapper = styled.a`
  display: block;
  height: 100px;
  width: 125px;
  padding-left: 10px;
  img {
    width: 125px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
  }
`
export const ArticleListContentWrapper = styled.div`
  flex: 1;
  text-align: left;
`
export const ArticleListContentTitle = styled.a`
  display: block;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const ArticleListContentDesc = styled.p`
  color: #999;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 8px;
`
export const ArticleListContentMeta = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  inline-height: 20px;
  .mate-item {
    color: #b4b4b4;
    margin-right: 10px;
    text-decoration: none;
  }
  .iconfont {
    margin-right: 2px;
    vertical-align: top;
  }
`

// 阅读更多
export const ArticleListGetMore = styled.a`
  display: block;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 20px;
  line-height: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`

export const BoardList = styled.li`
  cursor: pointer;
  margin-bottom: 6px;
  img {
    width: 100%;
    min-height: 50px;
    border-radius: 4px;
  }
`

export const AsideDownWrapper = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 10px 20px;
  margin-bottom: 30px;
  cursor: pointer;
  .qrcode {
    width: 60px;
    height: 60px;
  }
`
export const AsideDownInfo = styled.div`
  flex: 1;
  margin-left: 10px;
  text-align: left;
  .title {
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    .iconfont {
      margin-left: 5px;
    }
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
export const BigQrCodeBox = styled.div`
  display: ${props => props.visibal ? "block" : "none"};
  position: absolute;
  top: -190px;
  left: 50%;
  transform: translate(-90px);
  width: 180px;
  height: 180px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 0 10px #666;  
  box-sizing: border-box;
  background: #fff;
  .bigQrcode {
    width: 100%;
  }
  &:after {
    position: absolute;
    bottom: -8px;
    left: 85px;
    content: "";
    height: 12px;
    width: 12px;
    background: #fff;
    border: 1px solid #999;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
    transfrom-origin: center;
  }
`
// 推荐作者(recommend-authors)
export const RecomAuthorsWrapper = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    span {
      color: #969696;
      font-size: 14px;
    }
  }
  .recom-author-list {
    margin-top: 20px;
  }
`
// 换一批功能
export const RecomChangePages = styled.a`
  display: block;
  font-size: 14px;
  color: #969696;
  cursor: pointer;
  .iconfont {
    display: inline-block;
    margin-right: 5px;
    transform: rotate(0);
    transition: transform 0.4s ease-out;
    transform-origin: center;
  }
  &:hover {
    color: #333;
  }
`
// 推荐作者列表
export const RecomAuthorsItem = styled.li`
  display: flex;
  margin-top: 15px;
  line-height: 20px;
`
// 推荐作者头像
export const RecomAuthorAvatarImg = styled.a`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`
// 推荐作者描述
export const RecomAuthorsItemDesc = styled.div`
  flex: 1;
  text-align: left;
  position: relative;
  a {
    text-decoration: none;
  }
  .avatar-name {
    font-size: 14px;
    color: #333;
  }
  p {
    font-size: 12px;
    color: #969696;
  }
  .follow {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 13px;
    color: #42c02e;
    .iconfont {
      font-size: 12px;
      font-weight: blod;
      margin-right: 2px;
    }
  }
`
// 查看全部作者
export const RecomAuthorsGetAll = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 7px 7px 12px;
  margin-top: 20px;
  left: 0;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
`
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