import styled from "styled-components";

export const AsideDownWrapper = styled.div`
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