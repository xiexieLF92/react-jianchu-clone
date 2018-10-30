import { fromJS } from "immutable";
import { headerActionTypes } from "./index";

const defaultState = fromJS({
  onSearchFocus: false,
  moveIn: false,
  searchTrendList: [],
  totalPage: 1,
  pageNum: 1,
  popoverModelShow: false,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case headerActionTypes.SEARCH_ON_FOCUS:
      return state.set("onSearchFocus", true);
    case headerActionTypes.SEARCH_ON_BLUR:
      return state.set("onSearchFocus", false);
    case headerActionTypes.SEARCH_ON_MOVE_IN: 
      return state.set("moveIn", true);
    case headerActionTypes.SEARCH_ON_MOVE_OUT: 
      return state.set("moveIn", false);
    case headerActionTypes.TOGGLE_POPOVER_MODEL_SHOW:
      return state.set("popoverModelShow", !state.get("popoverModelShow"));
    case headerActionTypes.INTI_SRAECH_TREND_LIST: 
      return state.merge({
        "searchTrendList": action.data,
        "totalPage": action.totalPage
      });
    case headerActionTypes.CHANGE_SRAECH_TREND_LIST_PAGENUM:
      return state.set("pageNum",action.pagenum)
    default:
      return state;
  }
}
