import { fromJS } from "immutable";
import { recommendActionTypes } from "./index";

const defaultState = fromJS({
  logoImgSrc: "",
  recommendAuthorList: [],
  getMoreLoading: true
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case recommendActionTypes.ININ_RECOMMEND_AUTHOR_LIST:
      return state.merge({
        logoImgSrc: action.data.logoImgSrc,
        recommendAuthorList: action.data.recommendAuthorList
      });
    case recommendActionTypes.SET_GET_MORE_LOADING:
      return state.set("getMoreLoading", action.bool);
    default: 
      return state;
  }
}