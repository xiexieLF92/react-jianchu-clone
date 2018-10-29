import styled from "styled-components";

export const AsideToolWrapper = styled.div`
  position: fixed;
  display: ${props => props.visibal ? "block": "none"};
  right: 40px;
  bottom: 40px;
  z-index: 1024;
`
export const AsideToolList = styled.ul``

export const AsideToolItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-bottom: none;
  &:last-child {
    border-bottom: 1px solid #dcdcdc;
  }
  .iconfont {
    display: block;
  }
`