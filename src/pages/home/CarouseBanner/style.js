import styled from "styled-components";

export const CarouselBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 35px;
  font-size: 0;
  .carousel-control {
    display: none;
  }
  .carousel-indicators {
    display: none;
  }
  &:hover {
    .carousel-control {
      display: block;
    }
    .carousel-indicators {
      display: block;
    }
  }
`
export const CarouselBannerInner = styled.div`
  position: relative;
  width: 100%;
  .banner-item {
    position: absolute;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  &:after {
    height: 0;
    content: "";
    visibility: hiden;
    clear: both;
  }
`

export const CarouselControl = styled.div`
  position: absolute;
  top: 40%;
  background-color: rgba(0,0,0,.4);
  height: 50px;
  width: 40px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  .iconfont {
    display: inline-block;
    line-height: 50px;
  }
  &.left-control {
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &.right-control {
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`
export const CarouselIndicators = styled.ol`
  position: absolute;
  width: 80%;
  padding: 10px 0;
  left: 10%;
  bottom: 20px;
  text-align: center;
`
export const CarouselIndicatorsItem = styled.li`
  display: inline-block;
  width: 25px;
  height: 3px;
  margin: 0 4px;
  background-color: hsla(0,0%,47%,.4);
  transition: all .3s ease-in;
  cursor: pointer;
`
