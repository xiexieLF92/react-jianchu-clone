import axios from 'axios';
import { recommendActionTypes } from "./index";

export const setGetMoreLoading = (bool) =>({
  type: recommendActionTypes.SET_GET_MORE_LOADING,
  bool
})

const initRecommendAuthorList = (data) => ({
  type: recommendActionTypes.ININ_RECOMMEND_AUTHOR_LIST,
  data
})

export const getRecommendAuthorList = () => {
  return (dispatch) => {
    axios.get("/api/recommend/recommendAuthor.json").then(res => {
      if(res.data.success) {
        dispatch(setGetMoreLoading(false));
        dispatch(initRecommendAuthorList(res.data.data));
      } else {
        throw new Error("获取数据失败");
      }
    }).catch(err => {
      console.log(err)
    })
  }
}