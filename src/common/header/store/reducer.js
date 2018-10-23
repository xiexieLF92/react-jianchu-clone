import { fromJS } from "immutable";
import { SEARCH_ON_FOCUS, SEARCH_ON_BLUR, SEARCH_ON_MOVE_IN, SEARCH_ON_MOVE_OUT, INTI_SRAECH_TREND_LIST, CHANGE_SRAECH_TREND_LIST_PAGENUM } from "./actionTypes";

const defaultState = fromJS({
  onSearchFocus: false,
  moveIn: false,
  searchTrendList: [],
  totalPage: 1,
  pageNum: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_ON_FOCUS:
      return state.set("onSearchFocus", true);
    case SEARCH_ON_BLUR:
      return state.set("onSearchFocus", false);
    case SEARCH_ON_MOVE_IN: 
      return state.set("moveIn", true);
    case SEARCH_ON_MOVE_OUT: 
      return state.set("moveIn", false);
    case INTI_SRAECH_TREND_LIST: 
      return state.merge({
        "searchTrendList": action.data,
        "totalPage": action.totalPage
      });
    case CHANGE_SRAECH_TREND_LIST_PAGENUM:
      return state.set("pageNum",action.pagenum)
    default:
      return state;
  }
}
