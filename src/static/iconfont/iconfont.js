import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540863874281'); /* IE9*/
    src: url('./iconfont.eot?t=1540863874281#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1540863874281') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540863874281#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-jiahao1:before { content: "\e613"; }
  .icon-cha:before { content: "\e61a"; }
  .icon-xinxi:before { content: "\e633"; }
  .icon-arrow-right-copy-copy-copy:before { content: "\e604"; }
  .icon-duihao:before { content: "\e61e"; }
  .icon-remen:before { content: "\e638"; }
  .icon-zan1:before { content: "\e64e"; }
  .icon-moon:before { content: "\e643"; }
  .icon-you:before { content: "\e63f"; }
  .icon-zuo:before { content: "\e640"; }
  .icon-top-1-copy:before { content: "\e608"; }
  .icon-32_chushituijian:before { content: "\e618"; }
  .icon-nan:before { content: "\e644"; }
  .icon-city:before { content: "\e6ad"; }
  .icon-shouji:before { content: "\e63e"; }
  .icon-nv:before { content: "\e6e3"; }
  .icon-xueshimao-shi:before { content: "\e665"; }
  .icon-Aa:before { content: "\e636"; }
  .icon-fenxiang:before { content: "\e600"; }
  .icon-sousuo:before { content: "\e60a"; }
  .icon-shuaxin:before { content: "\e758"; }
  .icon-pinglunzu:before { content: "\e765"; }
  .icon-zhinanzhenfaxiandaohangdizhiweizhi:before { content: "\e786"; }
  .icon-biji:before { content: "\e62d"; }
`