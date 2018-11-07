import styled from "styled-components";

export const AppsWrapper = styled.div`
  margin: 57px auto 0;
  .part {
    width: 960px;
    margin: 0 auto;
  }
`

export const TopPartWrappper = styled.div`
  background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsla(0,0%,59%,0));
`
export const TopPart = styled.div`
  padding-top: 50px;
  text-align: center;
  font-size: 0;
`
export const TopLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  img {
    width: 100px;
    height: 100px;
  }
  .logo-info {
    margin-left: 20px;
    color: #333;
    line-height: 1.5;
    text-align: left;
    .title {
      font-size: 30px;
    }
    .slogan {
      font-size: 24px;
      font-weight: 300;
    }
  }
`

export const BackgroundImg = styled.img`
  width: 765px;
  height: 172px;
  margin-top: -60px;
`

export const PhoneImg = styled.img`
  display: inline-block;
  width: 410px;
  height: 314px;
  margin-top: -70px;
`

export const TopQRCodeWrapper = styled.div`
  display: inline-block;
  margin-left: 40px;
  text-align: left;
  vertical-align: top;
  .qrcode-img {
    width: 140px;
    height: 140px;
  }
  .title {
    margin-top: 4px;
    font-size: 24px;
    line-height: 1.5;
  }
  .description {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 300;
  }
`
export const MiddlePartOne = styled.div`
  padding: 30px 0;
  background: #fff;
  font-size: 0;
  .middlepart-one-img {
    width: 100%;
    margin-top: -130px;
  }
`

export const MiddlePartInfo = styled.div`
  width: 50%;
  text-align: left;
  margin-top: 8%;
  margin-left: 8%;
  h3 {
    margin: 20px 0;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.1;
  }
  h6 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
  }
`

export const MiddlePartTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  .part-info {
    width: 40%;
    margin: 0;
    &.left {
      margin-left: 5%;
    }
    &.right {
      margin-right: 5%;
    }
  }
`
export const MiddlePartImgWrapper = styled.div`
  width: 45%;
  &.left {
    margin-left: 40px;
  }
  &.right {
    margin-right: 40px;
  }
  font-size: 0;
  img {
    width: 100%;
  }
`

export const BottomPart = styled.div`
  margin: 50px 0 80px;
  text-align: center;
  font-size: 24px;
  position: relative;
`

export const BottomQRCodeImg = styled.img`
  width: 140px;
  margin-bottom: 10px;
`

export const BottomBackgroundImg = styled.img`
  position: absolute;
  width: 765px;
  height: 172px;
  left: 50%;
  transform: translateX(-50%);
`

export const BottomLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 5px;
  img {
    width: 56px;
    height: 56px;
  }
  .logo-info {
    margin-left: 20px;
    color: #333;
    line-height: 1.5;
    text-align: left;
    .title {
      font-size: 17px;
    }
    .slogan {
      font-size: 14px;
      font-weight: 300;
    }
  }
`