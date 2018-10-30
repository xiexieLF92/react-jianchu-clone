import styled from "styled-components";

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