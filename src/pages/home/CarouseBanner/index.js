import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CarouselBannerWrapper
} from "../style";

class CarouselBanner extends Component {

  render() {
    const { carouselList } = this.props;

    return(
      <CarouselBannerWrapper>
        {
          carouselList.toJS().map((item, index) => (
            <div className="banner-item" key={index}>
              <a href="true">
                <img src={item.imgSrc} alt=""/>
              </a>
            </div>
          ))
        }
      </CarouselBannerWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  carouselList: state.getIn(["home", "carouselList"])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarouselBanner);