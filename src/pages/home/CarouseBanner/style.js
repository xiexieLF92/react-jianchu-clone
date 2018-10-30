import styled from "styled-components";

export const CarouselBannerWrapper = styled.div`
  border-radius: 6px;
  margin-bottom: 35px;
  font-size: 0;
  width: 100%;
  position: relative;
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