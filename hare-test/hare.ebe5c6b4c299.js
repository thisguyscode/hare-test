webpackJsonp([10],{113:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.options.data||R;e.options.data=function(){var e=n.call(this);return P()({},e,t)},e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}function o(e){return e.options?(e._Ctor=e,e.extendOptions=e.options):(e=T.default.extend(e),e._Ctor=e),!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e}function a(e){return[].concat.apply([],e.matched.map(function(e){return $()(e.components).map(function(t){return e.components[t]})}))}function i(e){return[].concat.apply([],e.matched.map(function(e){return $()(e.instances).map(function(t){return e.instances[t]})}))}function u(e,t){return Array.prototype.concat.apply([],e.matched.map(function(e,n){return $()(e.components).map(function(r){return t(e.components[r],e.instances[r],e,r,n)})}))}function s(e,t){var n={isServer:!!e.isServer,isClient:!!e.isClient,isDev:!1,app:t,store:e.store,route:e.to?e.to:e.route,payload:e.payload,error:e.error,base:"/hare-test/",env:{},hotReload:e.hotReload||!1},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e,t,o){e&&(n._redirected=!0,"string"!=typeof e||void 0!==t&&"object"!==(void 0===t?"undefined":E()(t))||(o=t||{},t=e,e=302),r({path:t,query:o,status:e}))},e.req&&(n.req=e.req),e.res&&(n.res=e.res),n}function c(e,t){return!e.length||t._redirected?w.a.resolve():l(e[0],t).then(function(){return c(e.slice(1),t)})}function l(e,t){var n=void 0;return n=2===e.length?new w.a(function(n){e(t,function(e,r){e&&t.error(e),r=r||{},n(r)})}):e(t),n&&(n instanceof w.a||"function"==typeof n.then)||(n=w.a.resolve(n)),n}function d(e){var t=window.location.pathname;return e&&0===t.indexOf(e)&&(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}function f(e,t){return m(h(e,t))}function h(e,t){for(var n,r=[],o=0,a=0,i="",u=t&&t.delimiter||"/";null!=(n=j.exec(e));){var s=n[0],c=n[1],l=n.index;if(i+=e.slice(a,l),a=l+s.length,c)i+=c[1];else{var d=e[a],f=n[2],h=n[3],p=n[4],v=n[5],m=n[6],g=n[7];i&&(r.push(i),i="");var _=null!=f&&null!=d&&d!==f,b="+"===m||"*"===m,w="?"===m||"*"===m,C=n[2]||u,E=p||v;r.push({name:h||o++,prefix:f||"",delimiter:C,optional:w,repeat:b,partial:_,asterisk:!!g,pattern:E?x(E):g?".*":"[^"+y(C)+"]+?"})}}return a<e.length&&(i+=e.substr(a)),i&&r.push(i),r}function p(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function v(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function m(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"===E()(e[n])&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},u=i.pretty?p:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var l,d=a[c.name];if(null==d){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(d)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+_()(d)+"`");if(0===d.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<d.length;f++){if(l=u(d[f]),!t[s].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+_()(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?v(d):u(d),!t[s].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function y(e){return e.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function x(e){return e.replace(/([=!:$\/()])/g,"\\$1")}t.e=r,t.g=o,t.b=a,t.i=i,t.f=u,t.a=s,t.h=c,t.d=l,t.j=d,t.c=f;var g=n(45),_=n.n(g),b=n(29),w=n.n(b),C=n(68),E=n.n(C),k=n(75),$=n.n(k),S=n(125),P=n.n(S),T=n(0),R=function(){return{}},j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},132:function(e,t,n){"use strict";var r=(n(0),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];t.a={name:"nuxt-child",functional:!0,render:function(e,t){var n=t.parent,a=t.data;a.nuxtChild=!0;for(var i=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,s=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&s++,n=n.$parent;a.nuxtChildDepth=s;var c=i[s]||u,l={};r.forEach(function(e){void 0!==c[e]&&(l[e]=c[e])});var d={};return o.forEach(function(e){"function"==typeof c[e]&&(d[e]=c[e])}),e("transition",{props:l,on:d},[e("router-view",a)])}}},213:function(e,t,n){function r(e){n(527)}var o=n(40)(n(281),n(532),r,"data-v-4ecf16e3",null);e.exports=o.exports},216:function(e,t,n){"use strict";n.d(t,"b",function(){return S});var r=n(43),o=n.n(r),a=n(74),i=n.n(a),u=n(125),s=n.n(u),c=n(29),l=n.n(c),d=n(42),f=n.n(d),h=n(0),p=n(118),v=n.n(p),m=n(265),y=n(266),x=n(132),g=n(264),_=n(213),b=n.n(_),w=n(531),C=n.n(w),E=n(529),k=n.n(E),$=n(113);n.d(t,"a",function(){return b.a});var S=function(){var e=f()(o.a.mark(function e(t){var r,a,u,c,d,f;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.i(y.a)(),a=n.i(m.a)(),!t||!t.url){e.next=5;break}return e.next=5,new l.a(function(e,n){a.push(t.url,e,n)});case 5:if(window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),u=s()({router:a,store:r,_nuxt:{defaultTransition:j,transitions:[j],setTransitions:function(e){return Array.isArray(e)||(e=[e]),e=e.map(function(e){return e=e?"string"==typeof e?i()({},j,{name:e}):i()({},j,e):j}),this.$options._nuxt.transitions=e,e},err:null,dateErr:null,error:function(e){return e=e||null,"string"==typeof e&&(e={statusCode:500,message:e}),this.$options._nuxt.dateErr=Date.now(),this.$options._nuxt.err=e,e}}},k.a),c=n.i($.a)({isServer:!!t,isClient:!t,route:a.currentRoute,store:r,req:t?t.req:void 0,res:t?t.res:void 0},u),delete c.redirect,delete c.error,"function"!=typeof P){e.next=13;break}return e.next=13,P(c);case 13:if("function"!=typeof T){e.next=16;break}return e.next=16,T(c);case 16:if("function"!=typeof R){e.next=19;break}return e.next=19,R(c);case 19:if(d=n(272),"function"!=typeof(d=d.default||d)){e.next=25;break}return e.next=25,d(c);case 25:if(f=n(270),"function"!=typeof(f=f.default||f)){e.next=31;break}return e.next=31,f(c);case 31:return e.abrupt("return",{app:u,router:a,store:r});case 32:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();window._nuxtReadyCbs=[],window.onNuxtReady=function(e){window._nuxtReadyCbs.push(e)};var P=n(269);P=P.default||P;var T=n(271);T=T.default||T;var R=n(268);R=R.default||R,h.default.component(x.a.name,x.a),h.default.component(g.a.name,g.a),h.default.component(C.a.name,C.a),h.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var j={name:"page",mode:"out-in"}},217:function(e,t,n){"use strict";var r=n(133),o=n.n(r),a=n(222),i=a.keys(),u={},s=!0,c=!1,l=void 0;try{for(var d,f=o()(i);!(s=(d=f.next()).done);s=!0){var h=d.value;u[h.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(e){var t=a(e);return t.default?t.default:t}(h)}}catch(e){c=!0,l=e}finally{try{!s&&f.return&&f.return()}finally{if(c)throw l}}t.a=u},220:function(e,t){e.exports={login:{userRequired:"User Name is required",userPlaceholder:"User Name",pwdRequired:"Password is required",pwdPlaceholder:"Password",captchaRequired:"Captcha is required",captchaPlaceholder:"Captcha",login:"Login"},activity:{title:{create:"Create Activity"},account:"Account",date:"Date",type:"Type",area:"Area",priority:"Priority",organizer:"Organizer",desc:"Description",tag:"Tag",rate:"Rate",create:"Create",reset:"Reset",holder:{area:"Pls select area",tag:"Pls select tag",date:"Pls Select date",time:"Pls Select time"},label:{tag:{st:"Ticket",reduction:"Discount",points:"Points"}},city:{sh:"Shanghai",bj:"Beijing"},instDist:"JD",price:"Discount",rights:"Rights",medium:"Medium",high:"High",rule:{account:{required:"Pls input account name",length:"Length is no longer than 6"},region:{required:"Pls select region"},date1:{required:"Pls select date"},date2:{required:"Pls select time"},type:{required:"Pls select at least on type"},priority:{required:"Pls select priority"},rate:{required:"Pls select rate"},desc:{required:"Pls input description"}},success:"Create successfully!",failed:"Create failure!"},example:{title1:"Button, Counter, Radio (City is a Vuex demo)",title2:"Radio, Checkbox, Input, Multi-Select",title3:"Cascader, Switch, Slider",title4:"Data Form",food:"Food",counter:"Counter",city:"City",inPh:"Please input",selPh:"Please select",pop:"Popover"},nav:{home:"Home",activity:"Demo",demo:"Components",list:"Table List",create:"Creation Form",charts:"Charts",about:"About"},head:{pwd:"Password",exit:"Exit"}}},221:function(e,t){e.exports={login:{userRequired:"用户名不能为空",userPlaceholder:"请输入用户名",pwdRequired:"密码不能为空",pwdPlaceholder:"请输入密码",captchaRequired:"验证码不能为空",captchaPlaceholder:"请输入验证码",login:"登录"},activity:{title:{create:"创建活动"},account:"账号",date:"活动时间",type:"活动类型",area:"活动区域",priority:"优先级",organizer:"承办方",desc:"活动描述",tag:"活动标签",rate:"活动评分",create:"立即创建",reset:"重置",holder:{area:"请选择活动区域",tag:"请选择活动标签",date:"选择日期",time:"选择时间"},label:{tag:{st:"赠票",reduction:"满减",points:"赠积分"}},city:{sh:"上海",bj:"北京"},instDist:"即时配送",price:"价格优惠",rights:"价格权益",medium:"中",high:"高",rule:{account:{required:"请输入活动名称",length:"长度不少于 6 个字符"},region:{required:"请选择活动区域"},date1:{required:"请选择日期"},date2:{required:"请选择时间"},type:{required:"请至少选择一个活动类型"},priority:{required:"请选择活动优先级"},rate:{required:"请选择活动评分"},desc:{required:"请填写活动描述"}},success:"提交成功!",failed:"提交失败!"},example:{title1:"按钮, 计数器, 单选框 (City 为 Vuex 用法)",title2:"单选框, 多选框, 输入框, 多选下拉框",title3:"级联选择器, 开关, 滑块",title4:"数据表单",food:"食物",counter:"计数器",city:"城市",inPh:"请输入内容",selPh:"请选择",pop:"弹框"},nav:{home:"首页",activity:"样例",demo:"Element 组件",list:"表格样例",create:"表单样例",charts:"图表样例",about:"关于"},head:{pwd:"修改密码",exit:"退出"}}},222:function(e,t,n){function r(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./check-auth.js":267};r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=222},223:function(e,t,n){function r(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./examples/activity/index.js":273,"./examples/index.js":274,"./index.js":275,"./menu.js":276};r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=223},263:function(e,t,n){"use strict";function r(e,t,n){return e.map(function(e){var r=e.options.transition;return"function"==typeof r?r(t,n):r})}function o(e,t,r){var o=this,a=n.i(b.f)(e,function(e,t,r,o){return"function"!=typeof e||e.options?(e=n.i(b.g)(e),r.components[o]=e,r.components[o]):new y.a(function(t,a){var i=function(e){e=n.i(b.g)(e),r.components[o]=e,t(e)};e().then(i).catch(a)})}),i=t.fullPath.split("#")[0],u=e.fullPath.split("#")[0];this._hashChanged=i===u,this._hashChanged||this.$loading.start&&this.$loading.start(),y.a.all(a).then(function(){return r()}).catch(function(e){var t=e.statusCode||e.status||e.response&&e.response.status||500;o.error({statusCode:t,message:e.message}),r(!1)})}function a(e,t,r){var o=this,a=["check-auth"],i=!1;if(void 0!==r&&(a=[],r.middleware&&(a=a.concat(r.middleware)),e.forEach(function(e){e.options.middleware&&(a=a.concat(e.options.middleware))})),a=a.map(function(e){return"function"!=typeof g.a[e]&&(i=!0,o.error({statusCode:500,message:"Unknown middleware "+e})),g.a[e]}),!i)return n.i(b.h)(a,t)}function i(e,t){n.i(b.f)(e,function(e,t,n,r){return"object"!==(void 0===e?"undefined":d()(e))||e.options||(e=x.default.extend(e),e._Ctor=e,n.components[r]=e),e})}function u(e,t){var r=this;this._hashChanged||x.default.nextTick(function(){var t=n.i(b.i)(e);k=t.map(function(e,t){if(!e)return"";if(E[t]===e.constructor._path&&"function"==typeof e.constructor.options.data){var n=e.constructor.options.data.call(e);for(var r in n)x.default.set(e.$data,r,n[r])}return e.constructor.options.__file}),r._hadError&&r._dateLastError===r.$options._nuxt.dateErr&&r.error();var o=r.$options._nuxt.err?_.a.layout:e.matched[0].components.default.options.layout;"function"==typeof o&&(o=o(r._context)),r.setLayout(o),setTimeout(function(){return s(r)},100)})}function s(e){return}function c(e){window._nuxtReadyCbs.forEach(function(t){"function"==typeof t&&t(e)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(e),S.afterEach(function(t,n){e.$nuxt.$emit("routeChanged",t,n)})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(68),d=n.n(l),f=n(43),h=n.n(f),p=n(42),v=n.n(p),m=n(29),y=n.n(m),x=n(0),g=n(217),_=n(216),b=n(113),w=this,C=function(){var e=v()(h.a.mark(function e(t,o,i){var u,s,c,l,d,f,p,v=this;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._hashChanged){e.next=2;break}return e.abrupt("return",i());case 2:if(u=void 0,s=!1,c=function(e){this.$loading.finish&&this.$loading.finish(),s||(s=!0,i(e))},l=n.i(b.a)({to:t,store:P,isClient:!0,next:c.bind(this),error:this.error.bind(this)},$),d=n.i(b.b)(t),this._context=l,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,d.length){e.next=24;break}return e.next=13,a.call(this,d,l);case 13:if(!l._redirected){e.next=15;break}return e.abrupt("return");case 15:return e.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(l):_.a.layout);case 17:return u=e.sent,e.next=20,a.call(this,d,l,u);case 20:if(!l._redirected){e.next=22;break}return e.abrupt("return");case 22:return this.error({statusCode:404,message:"This page could not be found."}),e.abrupt("return",i());case 24:return d.forEach(function(e){e._Ctor&&e._Ctor.options&&(e.options.asyncData=e._Ctor.options.asyncData,e.options.fetch=e._Ctor.options.fetch)}),this.setTransitions(r(d,t,o)),e.prev=26,e.next=29,a.call(this,d,l);case 29:if(!l._redirected){e.next=31;break}return e.abrupt("return");case 31:return u=d[0].options.layout,"function"==typeof u&&(u=u(l)),e.next=35,this.loadLayout(u);case 35:return u=e.sent,e.next=38,a.call(this,d,l,u);case 38:if(!l._redirected){e.next=40;break}return e.abrupt("return");case 40:if(f=!0,d.forEach(function(e){f&&"function"==typeof e.options.validate&&(f=e.options.validate({params:t.params||{},query:t.query||{},store:l.store}))}),f){e.next=45;break}return this.error({statusCode:404,message:"This page could not be found."}),e.abrupt("return",i());case 45:return e.next=47,y.a.all(d.map(function(e,r){if(e._path=n.i(b.c)(t.matched[r].path)(t.params),!v._hadError&&e._path===E[r]&&r+1!==d.length)return y.a.resolve();var o=[];if(e.options.asyncData&&"function"==typeof e.options.asyncData){var a=n.i(b.d)(e.options.asyncData,l);a.then(function(t){n.i(b.e)(e,t),v.$loading.increase&&v.$loading.increase(30)}),o.push(a)}if(e.options.fetch){var i=e.options.fetch(l);i&&(i instanceof y.a||"function"==typeof i.then)||(i=y.a.resolve(i)),i.then(function(){return v.$loading.increase&&v.$loading.increase(30)}),o.push(i)}return y.a.all(o)}));case 47:E=d.map(function(e,r){return n.i(b.c)(t.matched[r].path)(t.params)}),this.$loading.finish&&this.$loading.finish(),s||i(),e.next=59;break;case 52:e.prev=52,e.t0=e.catch(26),E=[],e.t0.statusCode=e.t0.statusCode||e.t0.status||e.t0.response&&e.t0.response.status||500,p=_.a.layout,"function"==typeof p&&(p=p(l)),this.loadLayout(p).then(function(){v.error(e.t0),i(!1)});case 59:case"end":return e.stop()}},e,this,[[26,52]])}));return function(t,n,r){return e.apply(this,arguments)}}(),E=[],k=[],$=void 0,S=void 0,P=void 0,T=window.__NUXT__||{};if(!T)throw new Error("[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.");var R=function(e){var t=n.i(b.j)(e.options.base);return n.i(b.f)(e.match(t),function(e,t,r,o,a){return"function"!=typeof e||e.options?(e=n.i(b.g)(e),r.components[o]=e,e):new y.a(function(t,i){var u=function(e){e=n.i(b.g)(e),T.serverRendered&&n.i(b.e)(e,T.data[a]),r.components[o]=e,t(e)};e().then(u).catch(i)})})};n.i(_.b)().then(function(){var e=v()(h.a.mark(function e(t){var a,l,d,f;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $=t.app,S=t.router,P=t.store,e.next=5,y.a.all(R(S));case 5:return a=e.sent,l=new x.default($),d=T.layout||"default",e.next=10,l.loadLayout(d);case 10:if(l.setLayout(d),f=function(){l.$mount("#__nuxt"),x.default.nextTick(function(){s(l),c(l)})},l.setTransitions=l.$options._nuxt.setTransitions.bind(l),a.length&&(l.setTransitions(r(a,S.currentRoute)),E=S.currentRoute.matched.map(function(e){return n.i(b.c)(e.path)(S.currentRoute.params)}),k=a.map(function(e){return e.options.__file})),l.error=l.$options._nuxt.error.bind(l),l.$loading={},T.error&&l.error(T.error),S.beforeEach(o.bind(l)),S.beforeEach(C.bind(l)),S.afterEach(i),S.afterEach(u.bind(l)),!T.serverRendered){e.next=24;break}return f(),e.abrupt("return");case 24:C.call(l,S.currentRoute,S.currentRoute,function(e){if(e){var t=!1;return S.afterEach(function(){t||(t=!0,f())}),void S.push(e)}i(S.currentRoute,S.currentRoute),u.call(l,S.currentRoute,S.currentRoute),f()});case 25:case"end":return e.stop()}},e,w)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.error("[nuxt.js] Cannot load components",e)})},264:function(e,t,n){"use strict";n(0);t.a={name:"nuxt-link",functional:!0,render:function(e,t){return e("router-link",t.data,t.children)}}},265:function(e,t,n){"use strict";function r(){return new a.default({mode:"history",base:"/hare-test/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:h,routes:[{path:"/",component:i,name:"index"},{path:"/login",component:u,name:"login"},{path:"/examples",component:s,name:"examples"},{path:"/about",component:c,name:"about"},{path:"/examples/activity",component:l,name:"examples-activity"},{path:"/examples/charts",component:d,name:"examples-charts"},{path:"/examples/activity/create",component:f,name:"examples-activity-create"}]})}t.a=r;var o=n(0),a=n(119);o.default.use(a.default);var i=function(){return n.e(5).then(n.bind(null,562))},u=function(){return n.e(4).then(n.bind(null,563))},s=function(){return n.e(2).then(n.bind(null,561))},c=function(){return n.e(8).then(n.bind(null,557))},l=function(){return n.e(6).then(n.bind(null,559))},d=function(){return n.e(1).then(n.bind(null,560))},f=function(){return n.e(3).then(n.bind(null,558))},h=function(e,t,n){if(n)return n;var r={};return e.matched.length<2?r={x:0,y:0}:e.matched.some(function(e){return e.components.default.options.scrollToTop})&&(r={x:0,y:0}),e.hash&&(r={selector:e.hash}),r}},266:function(e,t,n){"use strict";function r(e){var t=d(e),n=t.default||t;if(n.commit)throw new Error("[nuxt] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+e.replace("./",""));return n}function o(e,t){if(1===t.length)return e.modules;var n=t.shift();return e.modules[n]=e.modules[n]||{},e.modules[n].namespaced=!0,e.modules[n].modules=e.modules[n].modules||{},o(e.modules[n],t)}n.d(t,"a",function(){return C});var a=n(74),i=n.n(a),u=n(133),s=n.n(u),c=n(0),l=n(44);c.default.use(l.default);var d=n(223),f=d.keys(),h={},p=f.find(function(e){return e.includes("./index.")});if(p&&(h=r(p)),"function"!=typeof h){h.modules||(h.modules={});var v=!0,m=!1,y=void 0;try{for(var x,g=s()(f);!(v=(x=g.next()).done);v=!0){var _=x.value,b=_.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==b){var w=b.split(/\//),e=o(h,w);b=w.pop(),e[b]=r(_),e[b].namespaced=!0}}}catch(e){m=!0,y=e}finally{try{!v&&g.return&&g.return()}finally{if(m)throw y}}}var C=h instanceof Function?h:function(){return new l.default.Store(i()({},h,{state:h.state instanceof Function?h.state():{}}))}},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(73);t.default=function(e){var t=e.isServer,o=e.store,a=e.req,i=e.route,u=e.redirect;if(!t||a){var s=t?n.i(r.e)(a):n.i(r.f)();s&&!o.state.authUser?o.commit("SET_USER",s):s||"login"===i.name||u("/login",{page:i.fullPath})}}},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var r=n(31),o=n.n(r),a=n(73),i=e.env.PORT||"3000";t.default=function(e){var t=e.req,r=(e.isDev,e.isServer);r||n.i(a.a)(t),o.a.defaults.timeout=5e3,r&&!t&&(o.a.defaults.baseURL="http://127.0.0.1:"+i)}}.call(t,n(214))},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(114),a=n.n(o),i=n(148),u=n.n(i);r.default.use(a.a,{locale:u.a})},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=this,a=r.default.config.errorHandler;r.default.config.errorHandler=function(e,t){"function"==typeof a&&a.call(o,e,t)}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(117),a=n(116),i=n.n(a);r.default.use(o.default),t.default=function(e){var t=e.app,r=e.store,a=e.isServer,u=e.req;if(a&&u){var s=new i.a(u),c=s.language(r.state.locales);r.commit("SET_LANG",c||"zh")}t.i18n=new o.default({locale:r.state.locale||"zh",fallbackLocale:"zh",messages:{zh:n(221),en:n(220)}})}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(120),a=n.n(o);r.default.use(a.a)},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return o}),n.d(t,"actions",function(){return a}),n.d(t,"getters",function(){return i});var r=function(){return{}},o={},a={},i={title:function(e){return"activity.title.create"}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return o}),n.d(t,"getters",function(){return a}),n.d(t,"actions",function(){return i});var r=function(){return{city:"GuangZhou"}},o={SET_CITY:function(e,t){e.city=t||null}},a={city:function(e){return e.city},foods:function(e){return[{value:"Golden Paste",label:"黄金糕"},{value:"Double-skinned Milk",label:"双皮奶",disabled:!0},{value:"Oyster Omelet",label:"蚵仔煎"},{value:"Fine Noodles",label:"龙须面"},{value:"Beijing Roast Duck",label:"北京烤鸭"}]},cities:function(e){return[{value:"ShangHai",label:"上海"},{value:"BeiJing",label:"北京",disabled:!0},{value:"GuangZhou",label:"广州"},{value:"ShenZhen",label:"深圳"}]},labels:function(){return[{value:"st",label:"activity.label.tag.st"},{value:"reduction",label:"activity.label.tag.reduction"},{value:"points",label:"activity.label.tag.points"}]},organizers:function(){return[{value:"market",label:"市场部",children:[{value:"market",label:"交易部"},{value:"execution",label:"执行部"},{value:"promotion",label:"推广部"}]},{value:"operation",label:"运营部"},{value:"sales",label:"销售部",children:[{value:"regionSales",label:"大区销售",children:[{value:"eastSales",label:"华东销售"},{value:"northSales",label:"华北销售"},{value:"southSales",label:"华南销售"}]},{value:"product",label:"商品部"},{value:"development",label:"客户发展"}]}]}},i={checkCity:function(e,t){(0,e.commit)("SET_CITY",t)}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"strict",function(){return l}),n.d(t,"state",function(){return d}),n.d(t,"mutations",function(){return f}),n.d(t,"getters",function(){return h}),n.d(t,"actions",function(){return p});var r=n(43),o=n.n(r),a=n(42),i=n.n(a),u=n(31),s=n.n(u),c=n(73),l=!0,d=function(){return{authUser:null,locale:null,locales:["zh","en"],isMenuHidden:!1}},f={SET_USER:function(e,t){e.authUser=t},SET_LANG:function(e,t){-1!==e.locales.indexOf(t)&&(e.locale=t)},SET_MENU_HIDDEN:function(e){e.isMenuHidden=!e.isMenuHidden}},h={authUser:function(e){return e.authUser},isMenuHidden:function(e){return e.isMenuHidden}},p={nuxtServerInit:function(e,t){e.commit,t.req},login:function(){function e(e,n){return t.apply(this,arguments)}var t=i()(o.a.mark(function e(t,r){var a,i,u,l=t.commit,d=r.userName,f=r.password,h=r.captcha;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/hpi/login",{userName:d,password:f,captcha:h});case 3:a=e.sent,i=a.data.access_token,n.i(c.b)(i),l("SET_USER",n.i(c.c)(i)),e.next=14;break;case 9:throw e.prev=9,e.t0=e.catch(0),u=e.t0.message,e.t0.response.data&&(u=e.t0.response.data.message||u),new Error(u);case 14:case"end":return e.stop()}},e,this,[[0,9]])}));return e}(),logout:function(){function e(e,n){return t.apply(this,arguments)}var t=i()(o.a.mark(function e(t,r){var a=t.commit;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/hpi/logout");case 2:a("SET_USER",null),n.i(c.d)(),r();case 5:case"end":return e.stop()}},e,this)}));return e}(),toggleMenu:function(e){(0,e.commit)("SET_MENU_HIDDEN")}}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"strict",function(){return r}),n.d(t,"state",function(){return o}),n.d(t,"mutations",function(){return a}),n.d(t,"getters",function(){return i}),n.d(t,"actions",function(){return u});var r=!0,o=function(){return{menus:[]}},a={SET_MENUS:function(e,t){e.menus=t}},i={menus:function(e,t){return e.menus}},u={addAll:function(e,t){var n=e.commit;Array.isArray(t)&&t.length&&n("SET_MENUS",t)}}},277:function(e,t,n){"use strict";var r=n(282),o=n.n(r);t.a=o()({APP:"hare",API:"hpi",BASE_API:"/hpi",SESS_KEY:"hare:sess",COOKIE_JWT:"hare_jwt"})},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),o=n.n(r),a=n(530),i=n.n(a),u=n(525),s=(n.n(u),n(524)),c=(n.n(s),n(526)),l=(n.n(c),{_default:function(){return n.e(0).then(n.bind(null,555))},_empty:function(){return n.e(7).then(n.bind(null,556))}});t.default={head:{title:"Hare Test",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(e){e&&l["_"+e]||(e="default"),this.layoutName=e;var t="_"+e;return this.layout=l[t],this.layout},loadLayout:function(e){var t=this;e&&l["_"+e]||(e="default");var n="_"+e;return"function"!=typeof l[n]?o.a.resolve(l[n]):l[n]().then(function(e){return l[n]=e,l[n]}).catch(function(e){if(t.$nuxt)return t.$nuxt.error({statusCode:500,message:e.message});console.error(e)})}},components:{NuxtLoading:i.a}}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,r.default.nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(132),a=n(213),i=n.n(a);t.default={name:"nuxt",beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},components:{NuxtChild:o.a,NuxtError:i.a}}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occurred"}}}},524:function(e,t){},525:function(e,t){},526:function(e,t){},527:function(e,t){},528:function(e,t){},529:function(e,t,n){var r=n(40)(n(278),n(534),null,null,null);e.exports=r.exports},530:function(e,t,n){function r(e){n(528)}var o=n(40)(n(279),n(535),r,"data-v-7d9d9218",null);e.exports=o.exports},531:function(e,t,n){var r=n(40)(n(280),n(533),null,null,null);e.exports=r.exports},532:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-page"},[n("div",[n("h1",{staticClass:"error-code"},[e._v(e._s(e.error.statusCode))]),n("div",{staticClass:"error-wrapper-message"},[n("h2",{staticClass:"error-message"},[e._v(e._s(e.error.message))])]),404===e.error.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[e._v("Back to the home page")])],1):e._e()])])},staticRenderFns:[]}},533:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.nuxt.err?n("nuxt-error",{attrs:{error:e.nuxt.err}}):n("nuxt-child")},staticRenderFns:[]}},534:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),e.layout?n(e.layout,{tag:"component"}):e._e()],1)},staticRenderFns:[]}},535:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"progress",style:{width:e.percent+"%",height:e.height,"background-color":e.canSuccess?e.color:e.failedColor,opacity:e.show?1:0}})},staticRenderFns:[]}},73:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"d",function(){return y}),n.d(t,"c",function(){return x}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return C}),n.d(t,"a",function(){return k});var r=n(45),o=n.n(r),a=n(31),i=n.n(a),u=n(331),s=n.n(u),c=n(389),l=n.n(c),d=n(392),f=n.n(d),h=n(277),p="undefined"!=typeof window,v=h.a.COOKIE_JWT,m=function(e){var t=f()(e).exp;window.localStorage.setItem("token",o()({value:e,exp:t})),l.a.set(v,e,{expires:new Date(t)}),k()},y=function(){window.localStorage.removeItem("token"),l.a.remove(v),window.localStorage.setItem("logout",Date.now()),k()},x=function(e){return e?f()(e):null},g=function(e){return x(_(e))},_=function(e){return w(e)||b(e)},b=function(e){if(e&&e.session)return e.session.jwt},w=function(e){var t=p?document.cookie:e.headers.cookie;return(s.a.parse(t||"")||{})[v]},C=function(){var e=E();return e?f()(e):void 0},E=function(){if(window.localStorage&&window.localStorage.token){var e=JSON.parse(window.localStorage.token);return(new Date).getTime()>=e.exp?void y():e?e.value:null}},k=function(e){var t=p?E():_(e);t?i.a.defaults.headers.common.Authorization="Bearer "+t:delete i.a.defaults.headers.common.Authorization}}},[263]);