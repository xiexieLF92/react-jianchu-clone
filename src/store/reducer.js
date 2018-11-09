import { combineReducers } from "redux-immutable";
import { headerReducer } from  "../common/header/store";
import { homeReducer } from "../pages/home/store";
import { recommendReducer } from "../pages/recommendAuthor/store";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  recommend: recommendReducer
})