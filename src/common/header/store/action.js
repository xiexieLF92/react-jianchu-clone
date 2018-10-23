import { SEARCH_ON_FOCUS, SEARCH_ON_BLUR, SEARCH_ON_MOVE_IN, SEARCH_ON_MOVE_OUT, INTI_SRAECH_TREND_LIST, CHANGE_SRAECH_TREND_LIST_PAGENUM } from "./actionTypes";
import axios from "axios";

export const searchOnFocus = () => ({
  type: SEARCH_ON_FOCUS
})

export const searchOnBlur = () => ({
  type: SEARCH_ON_BLUR,
})

export const searchOnMoveIn = () => ({
  type: SEARCH_ON_MOVE_IN
})

export const searchOnMoveOut = () => ({
  type: SEARCH_ON_MOVE_OUT
})

export const initSearchTrendList = (data) => ({
  type: INTI_SRAECH_TREND_LIST,
  data,
  totalPage: Math.ceil(data.length/10)
})

export const changeSearchTrendList = (pagenum) => ({
  type: CHANGE_SRAECH_TREND_LIST_PAGENUM,
  pagenum
})

export const getSearchTrendList = () => {
  return (dispatch) => {
    axios.get('/api/header/searchTrendList.json').then(res => {
      dispatch(initSearchTrendList(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}