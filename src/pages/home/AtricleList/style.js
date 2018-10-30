import styled from "styled-components";

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