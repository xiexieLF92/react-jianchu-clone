import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BoardList
} from "../style";

class Board extends Component {
  render() {
    const { borderList } = this.props;
    return (
      <ul>
        {
          borderList.toJS().map((item, index) => (
            <BoardList key={index}>
              <a>
                <img src={item.imgSrc} alt=""/>
              </a>
            </BoardList>
          ))
        }
      </ul>
    )
  }
}

const mapState =(state) => ({
  borderList: state.getIn(["home", "borderList"])
})

const mapDispatch =(dispatch) => ({
  
})

export default connect(mapState, mapDispatch)(Board);