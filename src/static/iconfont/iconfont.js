import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1540798354835'); /* IE9*/
    src: url('./iconfont.eot?t=1540798354835#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1540798354835') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1540798354835#iconfont') format('svg'); /* iOS 4.1- */
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