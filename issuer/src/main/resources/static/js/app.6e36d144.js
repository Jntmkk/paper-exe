(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"0636":function(t,e,n){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},23:function(t,e){},24:function(t,e){},"24b3":function(t,e,n){},25:function(t,e){},3:function(t,e){},"30c7":function(t,e,n){},"3fcc":function(t,e,n){"use strict";var a=n("30c7"),s=n.n(a);s.a},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=(n("d3b7"),n("bc3a")),i=n.n(s),o={},r=i.a.create(o);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=r,window.axios=r,console.log(e),Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},a["default"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],u=(n("034f"),n("2877")),p={},d=Object(u["a"])(p,c,l,!1,null,null,null),f=d.exports,m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage"},[n("NavBar"),n("el-carousel",{staticClass:"carousel",attrs:{height:"460px"}},t._l(t.carouselImgs,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticStyle:{position:"relative",width:"1400px",height:"1000px"},attrs:{src:t.url,alt:""}})])})),1),n("h1",[t._v("资产市场")]),n("el-row",{staticStyle:{"margin-left":"9%","margin-right":"9%"},attrs:{gutter:30}},[0==t.entities.length?n("el-col",{},[n("el-empty",{attrs:{description:"暂无数据"}})],1):t._l(t.entities,(function(e,a){return n("el-col",{key:a,staticClass:"card-col",attrs:{span:8}},[n("el-card",{staticStyle:{"border-radius":"25px"}},[n("el-image",{attrs:{src:t.demoImgUrl}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])]),n("div",{staticStyle:{padding:"10px"}},[n("div",{staticStyle:{"text-align":"left",overflow:"hidden"}},[n("h4",[t._v(" DID:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.did))])]),n("h4",[t._v(" ID:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.id))])]),n("h4",[t._v(" Name:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.name))])]),n("h4",[t._v(" Owner:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.owner))])]),n("h4",[t._v(" Price:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.price?e.price:"N/A"))])]),n("h4",[t._v(" IPFShash:"),n("span",{staticClass:"asset-discription"},[t._v(t._s(e.ipfs))])])]),n("div",{staticClass:"bottom clearfix"},[n("el-button",{staticClass:"button",attrs:{type:"success",icon:"el-icon-search"},on:{click:function(n){return t.getIPFS(e.ipfs)}}},[t._v("IPFS")]),n("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(n){return t.buyAsset(e.id)}}},[t._v("购买它")])],1)])],1)],1)}))],2),n("Footer")],1)},g=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-header"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.getActiveIndex,mode:"horizontal","background-color":"#fdfbfb","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/"}},[a("img",{staticStyle:{height:"55px",width:"55px"},attrs:{src:n("6346"),alt:""}}),t._v(" DID-Asseets ")]),a("el-menu-item",{attrs:{index:"/index"}},[t._v("HomePage")]),a("el-menu-item",{attrs:{index:"/marketplace"}},[t._v("MarketPlace")]),a("el-menu-item",{attrs:{index:"/assetpublish"}},[t._v("AssetPublish")]),t.metamaskEnabled()?a("el-button",{staticStyle:{"margin-top":"8px",float:"right"},attrs:{round:"",type:"info",disabled:""}},[t._v("已连接MetaMask ")]):a("el-button",{staticStyle:{"margin-top":"8px",float:"right"},attrs:{round:"",type:"primary"},on:{click:t.enableMetamask}},[t._v("连接MetaMask ")])],1)],1)},b=[],x=n("5530"),y=n("2f62"),w={data:function(){return{}},computed:Object(x["a"])(Object(x["a"])({},Object(y["c"])(["activeIndex"])),Object(y["b"])(["getActiveIndex"])),methods:{metamaskEnabled:function(){var t=window,e=t.ethereum;return e&&e.isMetaMask},enableMetamask:function(){if(this.metamaskEnabled()){var t=window,e=t.ethereum;e.request({method:"eth_requestAccounts"})}else this.$message.error("您的浏览器暂未安装metamask插件")},handleSelect:function(t,e){console.log(t,e),"/"==t||"#"==t?this.$store.commit("updateActiveIndex","/index"):this.$store.commit("updateActiveIndex",t)}}},_=w,S=(n("3fcc"),Object(u["a"])(_,v,b,!1,null,"1b31cf26",null)),k=S.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light",staticStyle:{"z-index":"-100"}},[a("el-row",{attrs:{gutter:20,align:"center"}},[a("el-col",{attrs:{span:4,offset:1}},[a("img",{staticClass:"footer-img",attrs:{src:n("78c3"),alt:""}})]),a("el-col",{attrs:{span:16,offset:2}},[a("el-row",{attrs:{type:"flex",justify:"center",gutter:50}},[a("el-col",{staticClass:"vertical-center "},[a("router-link",{staticClass:"link-style",attrs:{to:"#"}},[a("p",[t._v("关于我们")])])],1),a("el-col",{staticClass:"vertical-center "},[a("router-link",{staticClass:"link-style",attrs:{to:"#"}},[a("p",[t._v("隐私策略")])])],1),a("el-col",{staticClass:"vertical-center "},[a("router-link",{staticClass:"link-style",attrs:{to:"#"}},[a("p",[t._v("帮助中心")])])],1)],1),a("el-row",[a("p",[t._v("Region Copyright © 2022 JNU All Rights Reserved.")])])],1)],1)],1)},I=[],j={name:"Footer"},O=j,A=(n("74cf"),Object(u["a"])(O,C,I,!1,null,"7c905ccc",null)),P=A.exports,M=n("2c82"),F=n("5184"),N=new M["a"]({uri:"https://api.thegraph.com/subgraphs/name/jntmkk/dam3"}),$="\n    query MyQuery {\n        assetEntities {\n            did\n            id\n            name\n            owner\n            price\n            url\n            ipfs\n        }\n    }\n";function D(){return N.query({query:Object(F["a"])($)})}var z=n("99e5"),E=n.n(z),q={name:"Macketpalce",data:function(){return{carouselImgs:[{caption:"carouse-1",url:n("9b2d")},{caption:"carouse-2",url:n("8531")},{caption:"carouse-3",url:n("bd1d")},{caption:"carouse-4",url:n("a897")}],entities:[{did:"did:dns:example.com",id:"0x0698a219f013cd9d3b6a5c2b6f633d4ae07282cf",name:"example.com domain",owner:"0x8db58193c03fe7e5d2d2ab9bf1c80f847c706743",price:null,url:"https://dam.whh.pw//api/asset/valid?id=example.com",ipfs:"QmTaq2X243Wn3vAydoEjPHeFccLBYGYR9LEuYcnN7CQDKv"}],msg:"enable metamask",currentDate:new Date,demoImgUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.itc.cn%2Fimages01%2F20210506%2Fa8181137567e4fe99e49cf34fc968387.jpeg&refer=http%3A%2F%2Fp5.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651634552&t=a3d21b8e08faa20460acac5311874469"}},components:{NavBar:k,Footer:P},methods:{checkmetamask:function(){var t=window,e=t.ethereum;e&&e.isMetaMask?(console.log("connect"),this.msg="Connect",e.request({method:"eth_requestAccounts"})):this.msg="Click here to install MetaMask!"},buyAsset:function(t){var e=this,n=window,a=n.ethereum;a&&a.isMetaMask?(console.log("connect"),this.msg="Connect",a.request({method:"eth_requestAccounts"}),i.a.get("https://whh.buzz/AssetDemo.json").then((function(n){console.log(t),console.log(n.data);var s=n.data;console.log(s);var i=new E.a(a),o=new i.eth.Contract(s,t);console.log(s);var r={from:a.selectedAddress};o.methods.buy().send(r).then((function(t){return e.$message({message:JSON.parse(t),showClose:!0,duration:1e3})})).catch((function(t){e.$message.error(t)}))}))):this.msg="Click here to install MetaMask!"},getIPFS:function(t){var e="https://ipfs.io/ipfs/"+t;console.log(e),window.open(e)}},mounted:function(){var t=this;D().then((function(e){console.log(e),t.entities=e.data.assetEntities}))}},J=q,B=(n("6ea2"),Object(u["a"])(J,h,g,!1,null,"e4b2eef2",null)),R=B.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homepage"},[a("div",{staticClass:"nav-header"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#fdfbfb","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/"}},[a("img",{staticStyle:{height:"55px",width:"55px"},attrs:{src:n("6346"),alt:""}}),t._v(" DID-Asseets ")]),a("el-menu-item",{attrs:{index:"/"}},[t._v("HomePage")]),a("el-menu-item",{attrs:{index:"/marketplace"}},[t._v("MarketPlace")]),a("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/assetpublish"}},[t._v("个人中心")])],1)],1),a("h1",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[t._v("我的资产")]),a("el-table",{staticStyle:{"margin-left":"10%","margin-right":"10%",width:"80%","margin-bottom":"100px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{fixed:"",prop:"did",label:"DID"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{label:"状态"}},[t._v(" 有效 ")]),a("el-table-column",{attrs:{label:"已上链"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(null==e.row.ipfs?"否":"是"))]}}])}),a("el-table-column",{attrs:{prop:"operate",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.canOperate(e)?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleRegitry(e)}}},[t._v("上链")]):a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleIPFS(e)}}},[t._v("查看IPFS")])]}}])})],1),a("Footer")],1)},T=[],H=(n("b0c0"),{name:"Macketpalce",data:function(){return{tableData:[{did:"did:dns:example.com",name:"domain example.com",url:"https://dam.whh.pw//api/asset/valid?id=example.com",ipfs:null,address:null}]}},components:{Footer:P},mounted:function(){var t=this,e="https://whh.buzz/api/asset/all";console.log("url: ",e);var n={headers:{"Access-Control-Allow-Origin":"*"}};i.a.get(e,n).then((function(e){console.log("res data: ",e.data),t.tableData=e.data}))},methods:{handleRegitry:function(t){var e=this;console.log(t);var n=window,a=n.ethereum;a&&a.isMetaMask&&(console.log("connect"),this.msg="Connect",a.request({method:"eth_requestAccounts"}),i.a.get("https://whh.buzz/Registry.json").then((function(n){var s=n.data;console.log("上链ABI：",s);var o=new E.a(a),r="0xbA1F26A9fea115388E19Cfbd410cbc2DB0487249",c=new o.eth.Contract(s,r),l={from:a.selectedAddress};console.log("scope.row:",t.row);var u="https://whh.buzz/api/asset/did",p={did:t.row.did,name:t.row.name,url:t.row.url},d={headers:{"Content-Type":"application/json;charset=UTF-8"}};i.a.post(u,JSON.stringify(p),d).then((function(n){var s;console.log("getIPFSHash: ",n),console.log("getIPFSHash: ",n.data);var i=n.data,o=[t.row.did,a.selectedAddress,t.row.url,t.row.name,i];(s=c.methods).create.apply(s,o).send(l).then((function(t){return e.$message({message:JSON.parse(t),showClose:!0,duration:1e3})})).catch((function(t){e.$message.error(t)}))})).catch((function(t){e.$message.error(t)}))})))},canOperate:function(t){return console.log(t.row.ipfs),null==t.row.ipfs},handleSelect:function(t,e){console.log(t,e),"/"==t||"#"==t?this.$store.commit("updateActiveIndex","/index"):this.$store.commit("updateActiveIndex",t)},handleIPFS:function(t){console.log(t.row);var e="https://ipfs.io/ipfs/"+t.row.ipfs;console.log(e),window.open(e)}}}),L=H,Q=Object(u["a"])(L,U,T,!1,null,"60e6d55e",null),Y=Q.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homepage"},[a("NavBar"),a("p",{staticStyle:{"font-size":"xxx-large","font-weight":"bold",color:"black"}},[t._v("基于分布ID的区块链资产管理方案")]),a("div",{staticClass:"sysIntro"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:10}},[a("img",{staticStyle:{width:"500px",height:"350px","background-color":"white"},attrs:{src:n("9b2d")}})]),a("el-col",{attrs:{span:14}},[a("el-card",{staticStyle:{height:"350px"}},[a("h1",{staticClass:"sys-caption"},[t._v("去中心化、分布式")]),a("hr",{staticStyle:{width:"100px","margin-left":"0px"}}),a("p",{staticClass:"sys-discript"},[t._v(" 当前资产管理方案多是中心化结构，容易出现单点故障问题。区块链是一个分布式网络，每一个节点都拥有网络的全部数据且都能处理新的交易，不会出现网络单点故障及单点瓶颈。 ")])])],1)],1)],1),a("div",{staticClass:"sysIntro"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:14}},[a("el-card",{staticStyle:{height:"350px"}},[a("h1",{staticStyle:{"text-align":"left"}},[t._v("数据共享、更低的使用成本")]),a("hr",{staticStyle:{width:"100px","margin-left":"0px"}}),a("p",{staticClass:"sys-discript"},[t._v(" 资产管理体系时相互孤立的，数据不互通，当资产数据流转时往往会丢失重要的信息，导致资产评估困难，而分布式账本则不存在这个问题，通过激励手段是人人都向资产添加更有价值的信息。 ")])])],1),a("el-col",{attrs:{span:10}},[a("img",{staticStyle:{width:"500px",height:"350px","background-color":"white"},attrs:{src:n("8531")}})])],1)],1),a("div",{staticClass:"sysIntro"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:10}},[a("img",{staticStyle:{width:"500px",height:"350px","background-color":"white"},attrs:{src:n("a897")}})]),a("el-col",{attrs:{span:14}},[a("el-card",{staticStyle:{height:"350px"}},[a("h1",{staticStyle:{"text-align":"left"}},[t._v("兼容现有资产管理体系")]),a("hr",{staticStyle:{width:"100px","margin-left":"0px"}}),a("p",{staticClass:"sys-discript"},[t._v(" 兼容现有的资产管理是方案推进的重要参考点。通过利用分布式身份与预⾔机技术，可以实现将现有的资产管理体系下的资产映射到区块链网络上来。 ")])])],1)],1)],1),a("div",{staticClass:"sysIntro"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:14}},[a("el-card",{staticStyle:{height:"350px"}},[a("h1",{staticStyle:{"text-align":"left"}},[t._v("智能化交易")]),a("hr",{staticStyle:{width:"100px","margin-left":"0px"}}),a("p",{staticClass:"sys-discript"},[t._v(" 借助智能合约，可以定制化交易过程，而⽆需⼈⼯干预，实现交易过程的⾃动化，且这种⾃动化过程安全也有保障。相⽐于传统的交易流程，基于智能合约的交易方式⽆疑更能节省成本。 ")])])],1),a("el-col",{attrs:{span:10}},[a("img",{staticStyle:{width:"500px",height:"350px","background-color":"white"},attrs:{src:n("bd1d")}})])],1)],1),a("Footer")],1)},K=[],W={name:"Index",data:function(){return{carouselImgs:[{caption:"carouse-1",url:n("9b2d")},{caption:"carouse-2",url:n("8531")},{caption:"carouse-3",url:n("bd1d")},{caption:"carouse-4",url:n("a897")}],innovations:[{caption:"去中心化、分布式",description:"当前资产管理⽅案多是中心化结构，容易出现单点故障问题。区块链是⼀个分布式网络，每⼀个节点都拥有网络的全部数据且都能处理新的交易，不会出现网络单点故障及单点瓶颈。"},{caption:"数据共享、更低的使用成本",description:"资产管理体系时相互孤⽴的，数据不互通，当资产数据流转时往往会丢失重要的信息，导致资产评估困难，⽽分布式账本则不存在这个问题，通过激励⼿段是⼈⼈都向资产添加更有价值的信息。"},{caption:"兼容现有资产管理体系",description:"兼容现有的资产管理是⽅案推进的重要参考点。通过利⽤分布式身份与预⾔机技术，可以实现将现有的资产管理体系下的资产映射到区块链网络上来。"},{caption:"智能化交易",description:"借助智能合约，可以定制化交易过程，⽽⽆需⼈⼯⼲预，实现交易过程的⾃动化，且这种⾃动化过程安全也有保障。相⽐于传统的交易流程，基于智能合约的交易⽅式⽆疑更能节省成本。"}]}},components:{NavBar:k,Footer:P}},X=W,V=(n("c380"),Object(u["a"])(X,G,K,!1,null,"a2ac765c",null)),Z=V.exports;a["default"].use(m["a"]);var tt=[{path:"/",name:"home",alias:"/index",component:Z},{path:"/marketplace",name:"marketpalce",component:R},{name:"assetpublish",path:"/assetpublish",component:Y}],et=new m["a"]({routes:tt}),nt=et;a["default"].use(y["a"]);var at=new y["a"].Store({state:{userName:"",activeIndex:"/marketplace",subPath:"/api"},mutations:{updateUserInfo:function(t,e){t.userName=e},updateActiveIndex:function(t,e){t.activeIndex=e}},getters:{getUserName:function(t){return t.userName?t.userName:sessionStorage.getItem("userName")},getActiveIndex:function(t){return t.activeIndex?t.activeIndex:sessionStorage.getItem("activeIndex")}}}),st=n("5c96"),it=n.n(st);n("f843");a["default"].use(it.a),a["default"].config.productionTip=!1,new a["default"]({router:nt,store:at,mounted:function(){var t=this;sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("store",JSON.stringify(t.$store.state)),sessionStorage.setItem("nickName",JSON.stringify(t.$store.state.nickName)),sessionStorage.setItem("activeIndex",JSON.stringify(t.$store.state.activeIndex))}))},render:function(t){return t(f)}}).$mount("#app")},6:function(t,e){},6346:function(t,e,n){t.exports=n.p+"img/wormholeLogo.4713e584.png"},"6ea2":function(t,e,n){"use strict";var a=n("0636"),s=n.n(a);s.a},7:function(t,e){},"74cf":function(t,e,n){"use strict";var a=n("96b7"),s=n.n(a);s.a},"78c3":function(t,e,n){t.exports=n.p+"img/JNUlogo.ec101ae8.png"},8:function(t,e){},8531:function(t,e,n){t.exports=n.p+"img/datashare.564f85fc.jpeg"},"85ec":function(t,e,n){},9:function(t,e){},"96b7":function(t,e,n){},"9b2d":function(t,e,n){t.exports=n.p+"img/blockchain.1d33ab72.jpg"},a897:function(t,e,n){t.exports=n.p+"img/asset.44fe91fa.jpeg"},bd1d:function(t,e,n){t.exports=n.p+"img/inteligent.7b2567f9.jpg"},c380:function(t,e,n){"use strict";var a=n("24b3"),s=n.n(a);s.a},f843:function(t,e,n){}});
//# sourceMappingURL=app.6e36d144.js.map