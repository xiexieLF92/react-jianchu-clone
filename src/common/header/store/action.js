import { headerActionTypes } from "./index";
import axios from "axios";

export const searchOnFocus = () => ({
  type: headerActionTypes.SEARCH_ON_FOCUS
})

export const searchOnBlur = () => ({
  type: headerActionTypes.SEARCH_ON_BLUR,
})

export const searchOnMoveIn = () => ({
  type: headerActionTypes.SEARCH_ON_MOVE_IN
})

export const searchOnMoveOut = () => ({
  type: headerActionTypes.SEARCH_ON_MOVE_OUT
})

export const togglePopoverModelShow = () => ({
  type: headerActionTypes.TOGGLE_POPOVER_MODEL_SHOW
})

const initSearchTrendList = (data) => ({
  type: headerActionTypes.INTI_SRAECH_TREND_LIST,
  data,
  totalPage: Math.ceil(data.length/10)
})

export const changeSearchTrendList = (pagenum) => ({
  type: headerActionTypes.CHANGE_SRAECH_TREND_LIST_PAGENUM,
  pagenum
})

export const getSearchTrendList = () => {
  return (dispatch) => {
    axios.get('/api/header/searchTrendList.json').then(res => {
      if(res.data && res.data.success){
        dispatch(initSearchTrendList(res.data.data.searchTrendList))
      } else {
        throw new Error("数据获取失败")
      }
    }).catch(err => {
      console.log(err)
    })
  }
}