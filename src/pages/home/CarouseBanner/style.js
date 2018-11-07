import styled from "styled-components";

export const CarouselBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 270px;
  border-radius: 6px;
  margin-bottom: 35px;
  font-size: 0;
  overflow: hidden;
  .carousel-control {
    display: none;
  }
  &:hover {
    .carousel-control {
      display: block;
    }
  }
`
export const CarouselBannerInner = styled.div`
  position: relative;
  width: 100%;
  z-index: 50;
  .banner-item {
    position: relative;
    display: none;
    left: 0;
    width: 100%;
    z-index: 50;
    transition: left 0.6s ease-in-out;
    left: 0;

    &.prev ,&.active, &.next {
      display: block;
    }
    &.active {
      left: 0;
    }
    &.next, &.prev {
      position: absolute;
      width: 100%;
      top: 0;
    }
    &.next {
      left: 100%;
    }
    &.prev {
      left: -100%;
    }

    &.left.active {
      left: -100%;
    }
    &.left.next {
      left: 0;
    }

    &.right.active {
      left: 100%;
    }
    &.right.prev {
      left: 0;
    }

    img {
      display: block;
      width: 100%;
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
  z-index: 50;
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
  z-index: 50;
`
export const CarouselIndicatorsItem = styled.li`
  display: inline-block;
  width: 25px;
  height: 3px;
  margin: 0 4px;
  transition: background-color .6s ease-in-out;
  background-color: hsla(0,0%,47%,.4);
  cursor: pointer;
  &.active {
    background-color: #fff;
  }
`
