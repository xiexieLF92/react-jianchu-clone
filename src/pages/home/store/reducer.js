import { fromJS } from "immutable";
import { homeActionTypes }  from "./index";

const defaultState = fromJS({
  carouselList: [{
    title: "《癌症病人怎么吃》狼医生软文",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4522/53ecdc42d68411d6b57a016b08136457eb23d5a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }, {
    title: " 七大主题征文S1音频集周免",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }, {
    title: "连载点赞的红包",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4510/7398b3b419943278df10ce09a5358575f19e2178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }, {
    title: "行距杯征文大赛",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }, {
    title: "简书周爆No.1web",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4514/92d2dd710492c4eb87b511016294120ad1d52095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }, {
    title: "我用宋词的纯粹,写尽爱情的质朴与单纯。",
    imgSrc: "http://upload.jianshu.io/admin_banners/web_images/4520/83fadd2df821d52fb277287ac4a189e8d21b7b65.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
  }],
  recommendList: [{
    name: "手绘",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "@IT·互联网",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "读书",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "摄影",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "故事",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "自然科普",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    name: "旅行·在路上",
    url: "",
    imgSrc: "http://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }],
  articleContentList: [{
    title: "作为一个四线小城市的专科生，我是怎么拿到24000+月薪的？",
    desc: "有前辈批评我，说我的文故事性不强。 那么，我今天就踏踏实实讲个故事吧，一个四线小城市的专科生，毕业后月薪24000+依然满满焦虑的真实的故事。 ...",
    nickName: "一棵餐风饮露的小小树",
    messageCount: 107,
    collectCount: 146,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/12590023-06b305635d3e06d2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "想要靠写作赚钱，想要提高过稿率，你需要掌握这几件事",
    desc: "我从今年三月份开始写作，写了几篇短篇小说，上稿了《鹿小姐》，《萱小说》、《南风》等杂志。 偶尔写文案和软文，也在文中接接推广，每次推广都几百元。...",
    nickName: "木蓁本蓁",
    messageCount: 12,
    collectCount: 112,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/3940864-307a0cc79717d635.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "多年以后|140字微小说",
    desc: "二十年后，我和何薇在广州重逢。 何薇是故乡著名才女。当年很多人都爱着她。表弟屠东对我说，他和何薇相好。 有一个夜晚，因为一件偶然的事，我和何薇在...",
    nickName: "姚哥1688",
    messageCount: 3,
    collectCount: 2,
    url: "",
    imgSrc: ""
  }, {
    title: "《三生三世浮生若梦》第五章",
    desc: "第五章 上朝 次日一早，凤九迷迷糊糊的活动了一下酸痛的身体，瞬间感觉浑身上下就像是被十万匹马踩过一样，惹的她“嘶”地一声痛呼，灵...",
    nickName: "星空中的风信子",
    messageCount: 8,
    collectCount: 13,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/13475049-c1b52b87d9139378.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "微信即将再现新功能，网友：终于改变了，知我莫过于小马哥",
    desc: "聊天莫过于微信，支付莫过于支付宝，现如今，微信对我们的生活影响还是比较深的，从聊天到金融，处处都有微信的身影，现在马化腾大老板宣布了微信新即将推...",
    nickName: "超逗的二哈少爷",
    messageCount: 3,
    collectCount: 13,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/11438883-1cab2ba71f36e05f?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "推荐给年轻人的几本书，把握好你的下一个10年",
    desc: "惭愧地说，在12年的“素质教育”中我并没有真正地读过书，更像是在为考试而背书。 当读到鲁迅的文章时，只觉着晦涩难懂便不会去再读第二遍。 “这处人...",
    nickName: "希望beyond",
    messageCount: 4,
    collectCount: 15,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/13243166-b07b8c030d6156e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "Fountain|白皮书分析：简书引入区块链 token FTN，携手Fountain布局一盘大棋",
    desc: "简书为国内优质原创内容输出平台，用户在简书上面可以方便的创作自己的作品，互相交流。总注册用户逾1200万，平均每3秒产生一篇新内容，月均流...",
    nickName: "altcoin",
    messageCount: 83,
    collectCount: 114,
    url: "",
    imgSrc: ""
  }, {
    title: "七绝·秋光",
    desc: "鹏城菊蕊早金黄， 霜落千林山水长。 笔砚秋光宜泼墨， 画图益发吐光芒。",
    nickName: "郭大牛",
    messageCount: 21,
    collectCount: 64,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/12742000-7e0d81d22ea45f91.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    title: "140字小说｜离婚",
    desc: "男人对女人说:“咱们离婚吧！” 女人不同意，继而伤心地伏在阳台上哭泣。 暗夜里，竟然看不见一颗星星。 女人抹了一把泪，纵身从25楼跳下。 “起床...",
    nickName: "晴空下的雨燕",
    messageCount: 11,
    collectCount: 30,
    url: "",
    imgSrc: ""
  }, {
    title: "女人千万不要在服用黑枸杞了！",
    desc: "一、花青素究竟是什么？ 花青素，许多人也可能经常在用花青素。 外用的护肤品上，也不乏花青素的身影，面膜、唇膏、脸霜等等。目前，在日本、韩国的护肤...",
    nickName: "秦玉鹏",
    messageCount: 25,
    collectCount: 15,
    url: "",
    imgSrc: "http://upload-images.jianshu.io/upload_images/13437684-21472d14482e3bcd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }],
  borderList: [{
    url: "",
    imgSrc: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    url: "",
    imgSrc: "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
  }, {
    url: "",
    imgSrc: "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  }, {
    url: "",
    imgSrc: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }, {
    url: "",
    imgSrc: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
  }],
  bigQrCodeShow: false,
  recomAuthor: {
    "users": [{
      "id": 12665193,
      "slug": "757b5f9f910b",
      "nickname": "宇文歡",
      "avatar_source": "http://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg",
      "total_likes_count": 745,
      "total_wordage": 165514,
      "is_following_user": false
    }, {
      "id": 5545154,
      "slug": "898bb4ca481d",
      "nickname": "徐林Grace",
      "avatar_source": "http://upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg",
      "total_likes_count": 4566,
      "total_wordage": 536699,
      "is_following_user": false
    }, {
      "id": 4802366,
      "slug": "13cba2dc6b23",
      "nickname": "汪波_偶遇科学",
      "avatar_source": "http://upload.jianshu.io/users/upload_avatars/4802366/4f86b75d-b61b-4126-8be4-87a151c9cd28.jpg",
      "total_likes_count": 1241,
      "total_wordage": 245913,
      "is_following_user": false
    }, {
      "id": 5205317,
      "slug": "dbfdce352c0d",
      "nickname": "遛遛心情的溜妈",
      "avatar_source": "http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg",
      "total_likes_count": 2081,
      "total_wordage": 510028,
      "is_following_user": false
    }, {
      "id": 13213889,
      "slug": "080bb4eac1c9",
      "nickname": "无限猴子",
      "avatar_source": "http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg",
      "total_likes_count": 299,
      "total_wordage": 93981,
      "is_following_user": false
    }],
    total_count: 20,
    page_num: 1
  }
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case homeActionTypes.BIG_QRCODE_SHOW: 
      return state.set("bigQrCodeShow", true);
    case homeActionTypes.BIG_QRCODE_HIDDEN:
      return state.set("bigQrCodeShow", false);
    case homeActionTypes.RECOM_AUTHORS_LSIT_CHANGE:
      return state.setIn(["recomAuthor", "page_num"], action.pageNum)
    default:
      return state;
  }
}