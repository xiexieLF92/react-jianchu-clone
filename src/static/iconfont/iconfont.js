import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540103938222'); /* IE9*/
    src: url('./iconfont.eot?t=1540103938222#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1540103938222') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540103938222#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-shouji:before { content: "\e63e"; }
  .icon-Aa:before { content: "\e636"; }
  .icon-sousuo:before { content: "\e60a"; }
  .icon-shuaxin:before { content: "\e758"; }
  .icon-zhinanzhenfaxiandaohangdizhiweizhi:before { content: "\e786"; }
  .icon-biji:before { content: "\e62d"; }
`