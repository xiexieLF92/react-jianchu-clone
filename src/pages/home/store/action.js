import { homeActionTypes } from "./index";
import axios from "axios";

export const bigQrCodeShow = () => ({
  type: homeActionTypes.BIG_QRCODE_SHOW
})

export const bigQrCodeHidden = () => ({
  type: homeActionTypes.BIG_QRCODE_HIDDEN
})

export const recomAuthorsListChange = (pageNum) => ({
  type: homeActionTypes.RECOM_AUTHORS_LSIT_CHANGE,
  pageNum
})

const initArticleList = (data) => ({
  type: homeActionTypes.INIT_ARTICLE_LIST,
  data
})

export const getArticleList = () => {
  return (dispatch) => {
    axios.get("/api/home/articleList.json").then(res => {
      if(res.data.success) {
        dispatch(initArticleList(res.data.data))
      } else {
        throw new Error("获取数据失败")
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

const initRecomAuthor = (data) => ({
  type: homeActionTypes.INIT_RECOM_AUTHOR,
  data
})

export const getRecomAuthor = () => {
  return (dispatch) => {
    axios.get("/api/home/recomAuthor.json").then(res => {
      if(res.data.success) {
        dispatch(initRecomAuthor(res.data.data))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}