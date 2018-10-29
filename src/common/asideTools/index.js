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
          <AsideToolItem>
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
  componentDidMount() {
    window.addEventListener("scroll", () => { this.toggleVisibal() })
  }
  componentWillUnmount() {
    window.removeEventListener("scroll",() => { this.toggleVisibal() })
  }

}

export default AsideTools;