import React, { Component } from "react";
import { connect } from "react-redux";

import border01 from "../../../static/img/board/border-01.png";
import border02 from "../../../static/img/board/border-02.png";
import border03 from "../../../static/img/board/border-03.png";
import border04 from "../../../static/img/board/border-04.png";
import border05 from "../../../static/img/board/border-05.png";

import {
  BoardList
} from "./style";

const BOARD_LIST = [border01, border02, border03, border04, border05];

class Board extends Component {
  render() {
    // const { borderList } = this.props;
    return (
      <ul>
        {
          // borderList.toJS().map((item, index) => (
          //   <BoardList key={index}>
          //     <a>
          //       <img src={item.imgSrc} alt=""/>
          //     </a>
          //   </BoardList>
          // ))
          BOARD_LIST.map((item, index) => (
            <BoardList key={index}>
              <a>
                <img src={item} alt=""/>
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