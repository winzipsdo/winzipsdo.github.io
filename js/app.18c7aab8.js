(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],f=0,h=[];f<i.length;f++)u=i[f],o[u]&&h.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},3297:function(t){t.exports=[{title:"我的名字",author:"焦迈奇",text:["庆幸自己没跑太久","还活在弹丸之地","纯粹得以为世界等同于你"]},{title:"我的名字",author:"焦迈奇",text:["多远才算是","离开的距离"]},{title:"都一样",author:"李荣浩",text:["越勇敢","就越孤单"]},{title:"写给黄淮",author:"解忧邵帅",text:["你是我患得患失的梦","我是你可有可无的人"]},{title:"我还年轻 我还年轻",author:"老王乐队",text:["给我一瓶酒","再给我一支烟","说走就走","我有的是时间"]},{title:"红色高跟鞋",author:"蔡健雅",text:["你像窝在被子里的舒服","却又像风","捉摸不住"]},{title:"梵高先生",author:"李志",text:["我们生来就是孤独","我们生来就是孤独"]},{title:"You Are Beautiful",author:"刘沁",text:["我会永远永远地爱你","用我无尽的生命"]},{title:"爸爸妈妈",author:"李荣浩",text:["回头去看","这是说了谢谢","反而才亏欠的情感"]},{title:"如果有来生",author:"谭维维",text:["你穿着透明的衣服","给我一个人唱歌"]},{title:"慢慢喜欢你",author:"莫文蔚",text:["慢慢我想配合你","慢慢把我给你"]},{title:"画",author:"邓紫棋",text:["我把你画成花","未开的一朵花","再把思念一点一滴","画成雨落下"]},{title:"醒着醉",author:"马良",text:["你别出现在我黎明的梦里","我怕我醒来就抱不到你"]},{title:"年少有为",author:"李荣浩",text:["金钱地位","搏到了","却好想退回"]},{title:"我把青春另存了",author:"石磊",text:["有些人","还真是","忘也忘不了"]},{title:"我们",author:"陈奕迅",text:["我最大的遗憾","是你的遗憾","与我有关"]},{title:"爱都爱了",author:"小洲",text:["我们爱都爱了","还怕什么"]},{title:"传奇",author:"李健",text:["只是因为在人群中多看了你一眼","再也没能忘掉你容颜"]}]},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null);s.options.__file="App.vue";var c=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("transition",{attrs:{name:"el-fade-in-linear"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.state.contentShow,expression:"state.contentShow"}],staticClass:"content-wrapper"},[t._l(t.currentSong.text,function(e,r){return n("p",{key:r},[t._v(t._s(e))])}),n("p",{staticClass:"message"},[t._v(t._s(t.currentSong.title)+" - "+t._s(t.currentSong.author))])],2)])],1)},h=[],p=(n("96cf"),n("1da1")),d=n("3297"),v={name:"home",mounted:function(){var t=this;window.vue=this,this.handleGetRandomSong(),this.handleStartLoop(),window.addEventListener("blur",function(){t.handleStopLoop()}),window.addEventListener("focus",function(){t.handleStartLoop()})},data:function(){return{timer:"",songs:d,currentSong:d[0],state:{contentShow:!0}}},methods:{sleep:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){setTimeout(function(){t()},e)}));case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),handleGetRandomSong:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.state.contentShow=!1,t.next=3,this.sleep(800);case 3:e=this.songs.length,n=Math.floor(Math.random()*e),this.currentSong=this.songs[n],this.state.contentShow=!0,console.log(new Date);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleStartLoop:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:""===this.timer&&(this.timer=setInterval(this.handleGetRandomSong,5e3));case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleStopLoop:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:window.clearInterval(this.timer),this.timer="";case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},m=v,w=(n("c219"),Object(u["a"])(m,f,h,!1,null,null,null));w.options.__file="Home.vue";var g=w.exports;r["default"].use(l["a"]);var x=new l["a"]({routes:[{path:"/",name:"home",component:g}]}),b=n("2f62");r["default"].use(b["a"]);var S=new b["a"].Store({state:{},mutations:{},actions:{}}),y=(n("10cb"),n("450d"),n("f3ad")),_=n.n(y),O=(n("1951"),n("eedf")),j=n.n(O),R=(n("7f7f"),n("5488")),k=n.n(R);r["default"].component(k.a.name,k.a),r["default"].use(j.a),r["default"].use(_.a),r["default"].config.productionTip=!1,new r["default"]({router:x,store:S,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){},c219:function(t,e,n){"use strict";var r=n("e9bb"),o=n.n(r);o.a},e9bb:function(t,e,n){}});
//# sourceMappingURL=app.18c7aab8.js.map