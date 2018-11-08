import styled from "styled-components";

export const RecommendAuthorWrapper = styled.div`
  width: 960px;
  margin: 57px auto 0;
  padding: 20px 0 50px;
  text-align: center;
`
export const RecommendLogo = styled.div`
  font-size: 0;
  img {
    width: 100%;
  }
`
export const RecommendContainer = styled.div`
  margin: 0 -15px;
  overflow: hidden;
  .cursor {
    cursor: pointer;
  }
`
export const PerBoxWrapper = styled.div`
  float: left;
  position: relative;
  width: 33.33333%;
  padding: 0 15px 15px;
  box-sizing: border-box;
`
export const PerBoxContainer = styled.div`
  height: 320px;  
  margin-top: 80px;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
  transition: .2s ease;
  &:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
  }
  .avatar {
    width: 80px;
    height: 80px;
    border: 1px solid #ddd;
    border-radius: 40px;
    background: #fff;
    margin: -40px 0 10px;
  }
  .per_hr_meta {
    overflow: hidden;
  }
  .per_recent_wrap {
    min-height: 75px;
  }
`
export const PerAvatarName = styled.h4`
  font-size: 21px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0;
  .iconfont {
    margin-left: 5px;
    vertical-align: minddle;
    &.woman {
      color: #ea6f5a;
    }
    &.man {
      color: #3194d0;
    }
  }
`
export const PerAvatarDesc = styled.p`
  margin: 0 auto 10px;
  max-width: 180px;
  min-height: 50px;
  font-size: 13px;
  line-height: 25px;
`

export const PerAvatarFollow = styled.div`
  display: inline-block;
  width: 100px;
  padding: 8px 0;
  border: 1px solid #42c02e;
  border-radius: 20px;
  background: #42c02e;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  .iconfont {
    font-size: 12px;
  }
  span {
    vertical-align: middle;
    margin-left: 3px;
  }
`

export const PerHr = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eaeaea;
  height: 0;
  box-sizing: content-box;
`
export const PerMate = styled.div`
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: -30px;
  padding-right: 10px;
  font-size: 12px;
  color: #969696;
  background-color: #f8f8f8;
`
export const PerRecentUpdate = styled.div`
  font-size: 13px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const LoadMoreBtn = styled.div`
  display: ${props => props.visible ? "inline-block": "none"};
  width: 38.2%;
  padding: 10px 0;
  margin: 40px 0;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  border-radius: 20px;
  background-color: #a5a5a5;
  border: none;
  cursor: pointer;
`
export const Loading = styled.div`
  display: ${props => props.visible ? "inline-block": "none"};;
  width: 38.2%;
  padding: 10px 0;
  margin: 40px 0;
  text-align: center;
  .iconfont {
    display: inline-block;
    font-size: 30px;
    color: #a5a5a5;
    animation: rotateAll 1s linear infinite;
  }
  @keyframes rotateAll {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`