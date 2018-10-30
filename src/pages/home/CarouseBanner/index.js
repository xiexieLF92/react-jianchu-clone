import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CarouselBannerWrapper,
  CarouselBannerInner,
  CarouselControl,
  CarouselIndicators,
  CarouselIndicatorsItem
} from "./style";

class CarouselBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerIndex: 1,
      timer: null
    }
  }

  render() {
    const { carouselList } = this.props;
    return(
      <CarouselBannerWrapper id="carouselBannerWrapper">
        <CarouselBannerInner ref={(ref) => {this.innerRef = ref}}>
          {
            carouselList.toJS().map((item, index) => (
              <div className="banner-item" key={index}>
                <a href="true">
                  <img src={item.imgSrc} alt=""/>
                </a>
              </div>
            ))
          }
        </CarouselBannerInner>
        <CarouselControl className="left-control carousel-control">
          <i className="iconfont">&#xe640;</i>
        </CarouselControl>
        <CarouselControl className="right-control carousel-control">
          <i className="iconfont">&#xe63f;</i>
        </CarouselControl>
        <CarouselIndicators className="carousel-indicators">
          {
            carouselList.toJS().map((item, index) => (
              <CarouselIndicatorsItem 
                key={index}
                data-target="#carouselBannerWrapper"
                data-index-to={index}
                onClick={e => {this.handleCarouselIndicatorsItem(e)}}
                >
              </CarouselIndicatorsItem>
            ))
          }
        </CarouselIndicators>
      </CarouselBannerWrapper>
    );
  }

  componentDidMount() {
    this.setCarouselInnerHeight()
  }
  setCarouselInnerHeight() {
    let el = document.querySelector(".banner-item");
    this.innerRef.style.height = `${el.offsetHeight}px`;
    console.log(this.innerRef.offsetWidth)
  }
  handleCarouselIndicatorsItem(e) {
    let target = e.target;
    let index = target.dataset.indexTo;
    let id = target.dataset.target;
  }
}

const mapStateToProps = (state) => ({
  carouselList: state.getIn(["home", "carouselList"])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarouselBanner);