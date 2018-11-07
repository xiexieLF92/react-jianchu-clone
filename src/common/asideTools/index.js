import React, { Component } from "react";

import {
  AsideToolWrapper,
  AsideToolList,
  AsideToolItem
} from "./style"
class AsideTools extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibal: false
    }
  }
  render() {
    return (
      <AsideToolWrapper visibal={this.state.visibal}>
        <AsideToolList>
          <AsideToolItem onClick={ e => {this.handleScrollTopToZero(e)} }>
            <i className="iconfont">&#xe608;</i>
          </AsideToolItem>
        </AsideToolList>
      </AsideToolWrapper>
    )
  }
  toggleVisibal() {
    let height = document.documentElement.scrollTop;
    if(height > 400) {
      this.setState({
        visibal: true
      })
    } else {
      this.setState({
        visibal: false
      })
    }
  }
  handleScrollTopToZero(e) {
    let height = document.documentElement.scrollTop;
    let counts = Math.ceil(height/(60*0.5));
    window.requestAnimationFrame(() => {this.scrollTopToZero(height, counts)});
  }
  scrollTopToZero(height, counts) {
    if(height > counts) {
      height -= counts;
      document.documentElement.scrollTop = height;
      window.requestAnimationFrame(() => {this.scrollTopToZero(height, counts)})
    } else {
      document.documentElement.scrollTop = 0;
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", () => { this.toggleVisibal() })
  }
  componentWillUnmount() {
    window.removeEventListener("scroll",() => { this.toggleVisibal() })
  }

}

export default AsideTools;