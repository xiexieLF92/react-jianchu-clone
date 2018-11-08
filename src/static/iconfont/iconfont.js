import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1541660246379'); /* IE9*/
    src: url('./iconfont.eot?t=1541660246379#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1541660246379') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541660246379#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-weibo:before { content: "\e645"; }
  .icon-jiahao1:before { content: "\e613"; }
  .icon-cha:before { content: "\e61a"; }
  .icon-xinxi:before { content: "\e633"; }
  .icon-arrow-right-copy-copy-copy:before { content: "\e604"; }
  .icon-queren2:before { content: "\e6f9"; }
  .icon-duihao:before { content: "\e61e"; }
  .icon-remen:before { content: "\e638"; }
  .icon-xiazaiicon:before { content: "\e632"; }
  .icon-zan1:before { content: "\e64e"; }
  .icon-moon:before { content: "\e643"; }
  .icon-mima:before { content: "\e639"; }
  .icon-you:before { content: "\e63f"; }
  .icon-zuo:before { content: "\e640"; }
  .icon-qq:before { content: "\e60e"; }
  .icon-top-1-copy:before { content: "\e608"; }
  .icon-anquan:before { content: "\e641"; }
  .icon-weixin:before { content: "\e615"; }
  .icon-douban:before { content: "\e691"; }
  .icon-loading:before { content: "\e627"; }
  .icon-32_chushituijian:before { content: "\e618"; }
  .icon-nan:before { content: "\e644"; }
  .icon-city:before { content: "\e6ad"; }
  .icon-shouji:before { content: "\e63e"; }
  .icon-nv:before { content: "\e6e3"; }
  .icon-xueshimao-shi:before { content: "\e665"; }
  .icon-Aa:before { content: "\e636"; }
  .icon-fenxiang:before { content: "\e600"; }
  .icon-sousuo:before { content: "\e60a"; }
  .icon-yonghu-tianchong:before { content: "\e670"; }
  .icon-shuaxin:before { content: "\e758"; }
  .icon-pinglunzu:before { content: "\e765"; }
  .icon-zhinanzhenfaxiandaohangdizhiweizhi:before { content: "\e786"; }
  .icon-biji:before { content: "\e62d"; }
`