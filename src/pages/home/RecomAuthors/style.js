import styled from "styled-components";

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