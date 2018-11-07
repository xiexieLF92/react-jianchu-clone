import { fromJS } from "immutable";
import { homeActionTypes }  from "./index";

const defaultState = fromJS({
  carouselList: [],
  recommendList: [],
  articleContentList: [],
  borderList: [],
  bigQrCodeShow: false,
  recomAuthor: {
    users: [],
    total_count: 0,
    page_num: 1
  }
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case homeActionTypes.BIG_QRCODE_SHOW: 
      return state.set("bigQrCodeShow", true);
    case homeActionTypes.BIG_QRCODE_HIDDEN:
      return state.set("bigQrCodeShow", false);
    case homeActionTypes.RECOM_AUTHORS_LSIT_CHANGE:
      return state.setIn(["recomAuthor", "page_num"], action.pageNum)
    case homeActionTypes.INIT_ARTICLE_LIST:
      return state.merge({
        carouselList: action.data.carouselList,
        recommendList: action.data.recommendList,
        articleContentList: action.data.articleContentList
      })
    case homeActionTypes.INIT_RECOM_AUTHOR:
      return state.setIn(["recomAuthor", "users"], action.data.users)
        .setIn(["recomAuthor", "total_count"], action.data.total_count);
    default:
      return state;
  }
}