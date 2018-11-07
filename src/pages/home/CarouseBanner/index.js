import React, { Component } from "react";
import { connect } from "react-redux";
import ClassNames from "classnames";
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
      bannerIndex: 0,
      prevIndex: null,
      timer: null,
      Update: true,
      direction: "left",
      isComplete: true
    }
    this.documentVisibilityChange = this.documentVisibilityChange.bind(this);
  }

  render() {
    const { carouselList } = this.props;
    return(
      <CarouselBannerWrapper id="carouselBannerWrapper">
        <CarouselBannerInner ref={(ref) => {this.innerRef = ref}}>
          {
            carouselList.toJS().map((item, index) => {
              let className = ClassNames({
                "banner-item": true,
                "active": index === this.state.bannerIndex
              })
              return (
                <div className={className}
                  onTransitionEnd={e => {this.transitionEnd(e)}}
                  data-index={index}
                  key={index}
                >
                  <img src={item.imgSrc} alt=""/>
                </div>
              )
            })
          }
        </CarouselBannerInner>
        <CarouselControl
          className="left-control carousel-control"
          onClick={e => {this.handldPrevCarouselControl(e)}}
        >
          <i className="iconfont">&#xe640;</i>
        </CarouselControl>
        <CarouselControl
          className="right-control carousel-control"
          onClick={e => {this.handldNextCarouselControl(e)}}
        >
          <i className="iconfont">&#xe63f;</i>
        </CarouselControl>
        <CarouselIndicators className="carousel-indicators">
          {
            carouselList.toJS().map((item, index) => {
              let className = ClassNames({
                "banner-indicators": true,
                "active": index === this.state.bannerIndex
              })
              return (
                <CarouselIndicatorsItem
                  className={className}
                  key={index}
                  data-target="#carouselBannerWrapper"
                  data-index-to={index}
                  onClick={e => {this.handleCarouselIndicatorsItem(e)}}
                  >
                </CarouselIndicatorsItem>
              )
            })
          }
        </CarouselIndicators>
      </CarouselBannerWrapper>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.Update;
  }

  componentDidMount() {
    let timer = this.carouselBannerAnimation();
    this.setState({
      timer
    });
    document.addEventListener("visibilitychange", this.documentVisibilityChange);
  }

  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.documentVisibilityChange);
    clearInterval(this.state.timer);
  }

  documentVisibilityChange(e) {
    if(document.hidden) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null
      })
    } else {
      let timer = this.carouselBannerAnimation();
      this.setState({
        timer
      })
    }
  }

  handldPrevCarouselControl(e) {
    e.stopPropagation()
    if(!this.state.isComplete) return;
    let direction = "right";
    let el = document.querySelectorAll(".banner-item");
    let length = el.length;
    let index = this.state.bannerIndex;
    let nextIndex = null;
		if (index === 0) {
      nextIndex = length - 1;
		} else {
      nextIndex = index - 1;
    }
    this.changeIndicatosBackgroundColor(index,nextIndex);
    this.changeCarsouselClassname(el, direction, index, nextIndex);
  }

  handldNextCarouselControl(e) {
    e.stopPropagation()
    if(!this.state.isComplete) return;
    let direction = "left";
    let el = document.querySelectorAll(".banner-item");
    let length = el.length;
    let index = this.state.bannerIndex;
    let nextIndex = null
		if (index === length - 1) {
      nextIndex = 0;
		} else {
      nextIndex = index + 1;
		}
    this.changeIndicatosBackgroundColor(index,nextIndex);
    this.changeCarsouselClassname(el, direction, index, nextIndex);
  }
  changeCarsouselClassname(el, direction, index, nextIndex) {
    let timer = this.state.timer;
    clearInterval(timer);
    let perTimer = null;
    if(direction === "left") {
      el[nextIndex].classList.add("next");
    } else {
      el[nextIndex].classList.add("prev");
    }
    perTimer = setTimeout(() => {
      el[index].classList.add(direction);
      el[nextIndex].classList.add(direction);
      clearTimeout(perTimer)
      let newTimer = this.carouselBannerAnimation();
      this.setState({
        bannerIndex: nextIndex,
        Update: false,
        prevIndex: index,
        direction: direction,
        isComplete: false,
        timer: newTimer
      })
    })
  }

  changeIndicatosBackgroundColor(index,nextIndex) {
    let el = document.querySelectorAll(".banner-indicators");
    el[index].classList.remove("active")
    el[nextIndex].classList.add("active")
  }

  transitionEnd(e) {
    e.stopPropagation()
    let el = e.target;
    let dataIndex = Number(el.dataset.index);

    el.classList.remove("left")
    el.classList.remove("right")
    el.classList.remove("next")
    el.classList.remove("prev")
    
    if(dataIndex === this.state.prevIndex) {
      el.classList.remove("active")
    } else {
      el.classList.add("active")
    }
    this.setState({
      isComplete: true
    })
  }

  handleCarouselIndicatorsItem(e) {
    let nextIndex = Number(e.target.dataset.indexTo);
    let index = this.state.bannerIndex;
    if(index === nextIndex || !this.state.isComplete) return;
    let direction = null;
    if(nextIndex < index) {
      direction = "right"
    } else {
      direction = "left"
    }
    let el = document.querySelectorAll(".banner-item");
    this.changeIndicatosBackgroundColor(index,nextIndex);
    this.changeCarsouselClassname(el, direction, index, nextIndex);
  }
  
  carouselBannerAnimation() {
    return setInterval(() => {
      let el = document.querySelectorAll(".banner-item");
      let direction = "left";
      let length = el.length;
      let index = this.state.bannerIndex;
      let nextIndex = null
      if (index === length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = index + 1;
      }
      this.changeIndicatosBackgroundColor(index,nextIndex);
      this.changeCarsouselClassname(el, direction, index, nextIndex);
    }, 5000)
  }
}

const mapStateToProps = (state) => ({
  carouselList: state.getIn(["home", "carouselList"])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarouselBanner);