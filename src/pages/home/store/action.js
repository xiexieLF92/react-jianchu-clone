import { homeActionTypes } from "./index";

export const bigQrCodeShow = () => ({
  type: homeActionTypes.BIG_QRCODE_SHOW
})

export const bigQrCodeHidden = () => ({
  type: homeActionTypes.BIG_QRCODE_HIDDEN
})

export const recomAuthorsListChange = (pagenum) => ({
  type: homeActionTypes.RECOM_AUTHORS_LSIT_CHANGE,
  pageNum: pagenum
})