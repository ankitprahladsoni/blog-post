(function(e){function t(t){for(var i,r,o=t[0],u=t[1],l=t[2],d=0,m=[];d<o.length;d++)r=o[d],n[r]&&m.push(n[r][0]),n[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={1:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;s.push([13,0]),a()})({"/xpx":function(e){e.exports=[{id:1,components:[{type:"subHeading",value:"What is Strategy Pattern?"},{type:"paragraph",value:"According to wikipedia, Strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use"},{type:"paragraph",value:"This means that an object will have a certain strategy/algorithm, which can be easily injected into it, and that can initialize it's behaviour at the time of creation, or change during runtime."}]},{id:2,components:[{type:"subHeading",value:"Let's dive into a problem statement"},{type:"paragraph",value:"We have a bunch of Duck subclasses that are derived from a super class Duck(Structure below) If we wish to add fly method in CityDuck and WildDuck, we will create a method fly in Duck. So far so good."},{type:"paragraph",value:"But if someone creates a new subclass RubberDuck, then we might fall into some issues. This new class RubberDuck cannot fly, and therefore, the best bet would be to override fly method in Rubberduck to do nothing."},{type:"paragraph",value:"Lets add more fun to the problem, you boss wants you to add WoddenDuck too. Now this WoodenDuck can;t swim, can't fly. We will have to override both the methods to make WoddenDuck not swim and not fly"},{type:"paragraph",value:"This may go on and on with many more methods to be added in Duck class, and each time a new method is added, we will ahve to check if overriding the superclass behaviour is required in few subclasses or not. This can be a real pain of we have may subclass. We are also duplicating a lot of code in making RubberDuck and WoodenDuck not fly."},{type:"paragraph",value:"Inheritance is becoming a mess and we are left with lot of duplicate code."}]},{id:3,components:[{type:"subHeading",value:"The solution"},{type:"paragraph",value:"Enters the Strategy Pattern. As per the definition, lets make aur class select algorithms at runtime. In our case, fly and swim can be of different algorithms/strategies/behaviour. Instead of passing them as Is-A relationship from parent to child, lets give these behaviours with Has-A relationship."},{type:"paragraph",value:" we create an Interface IFlyBehaviour and ISwimBehaviour, and use them as variables in our Duck class. IFlyBehaviour may have multiple implementations such as FlyingHighBehavior and NoFlyBehaviour. Same with ISwimBehaviour code below."},{type:"code",value:["public interface IFlyBehaviour {","    public void fly();","}"]},{type:"paragraph",value:"now instead of creating different duck classes, we can have a single duck class with behaviour/strategis than can be easily pluged into them.If we create setters for these strategies, then we can change the behaviour at runtime."}]},{id:4,components:[{type:"subHeading",value:"Other examples"},{type:"paragraph",value:"Sorting arrays can have different strategy. Charging a customer based on the time of the day. Day charges and night charges."}]},{id:5,components:[{type:"subHeading",value:"Conclusion"},{type:"paragraph",value:"TODO"}]}]},"0ugX":function(e,t,a){},13:function(e,t,a){e.exports=a("zUnb")},"25DF":function(e,t,a){"use strict";var i=a("rPuy"),n=a.n(i);n.a},"4Zol":function(e,t,a){},"7zMi":function(e,t,a){},"86Ea":function(e,t,a){},"9Ff4":function(e,t,a){"use strict";var i=a("ndDv"),n=a.n(i);n.a},MBbs:function(e,t,a){"use strict";var i=a("7zMi"),n=a.n(i);n.a},RdyJ:function(e,t,a){"use strict";var i=a("dsV8"),n=a.n(i);n.a},Umby:function(e,t,a){"use strict";var i=a("4Zol"),n=a.n(i);n.a},dsV8:function(e,t,a){},dzuN:function(e,t,a){"use strict";var i=a("o9cU"),n=a.n(i);n.a},iujg:function(e,t,a){"use strict";var i=a("86Ea"),n=a.n(i);n.a},kSyx:function(e,t,a){"use strict";var i=a("0ugX"),n=a.n(i);n.a},nNx0:function(e,t,a){"use strict";var i=a("uWEC"),n=a.n(i);n.a},ndDv:function(e,t,a){},o9cU:function(e,t,a){},rPuy:function(e,t,a){},uWEC:function(e,t,a){},zUnb:function(e,t,a){"use strict";a.r(t);a("VRzm");var i=a("Kw5r"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("Header"),a("Article"),a("Footer")],1)])},s=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section expand",attrs:{id:"navbar-section"}},[a("nav",{staticClass:"navbar is-fixed-top expand",staticStyle:{background:"lightblue"},attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"#",id:"avatarDiv"}},[a("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/8023641",alt:"avatar"}})]),a("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("sfa")]),a("span",{attrs:{"aria-hidden":"true"}},[e._v("safasdf")]),a("span",{attrs:{"aria-hidden":"true"}},[e._v("asdfasdfsd")])])]),a("div",{staticClass:"expand",attrs:{id:"title"}},[e._v("\n      Strategy Pattern\n    ")]),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item"},[e._v("\n          Home\n        ")]),a("a",{staticClass:"navbar-item"},[e._v("\n          About\n        ")]),a("a",{staticClass:"navbar-item"},[e._v("\n          Contact\n        ")])])])])])}],u=(a("rGqo"),a("iv4g")),l=a("xmWZ"),c=a("qpph"),d=function(){function e(){Object(l["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getAllElementsBySelector",value:function(e){return Object(u["a"])(document.querySelectorAll(e))}},{key:"getAllElementBySelectors",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map(function(e){return document.querySelector(e)})}},{key:"getIndexToScroll",value:function(){var e=window.scrollY+100;return this.getAllElementsBySelector(this.headingSelector).filter(function(t){return t.offsetTop<e}).map(function(e){return e.dataset.index}).pop()}},{key:"scrollToDiv",value:function(e){var t=this.getAllElementsBySelector(this.headingSelector).filter(function(t){return e===t.dataset.index}).map(function(e){return e.offsetTop-50}).pop();window.scrollTo({top:t,behavior:"instant"})}}]),e}();d.headingSelector='h1[id="sectionSubHeading"]';var m=i["default"].extend({mounted:function(){var e=this;window.addEventListener("scroll",function(t){var a=d.getAllElementBySelectors("nav","#navbar-section","#title");window.scrollY?e.collapse(a):e.expand(a)})},methods:{collapse:function(e){e.map(function(e){return e.classList}).forEach(function(e){e.add("collapse"),e.remove("expand")})},expand:function(e){e.map(function(e){return e.classList}).forEach(function(e){e.add("expand"),e.remove("collapse")})}}}),p=m,v=(a("iujg"),a("KHd+")),f=Object(v["a"])(p,r,o,!1,null,"9779a004",null),h=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-1"},[a("article-buttons")],1),a("div",{staticClass:"column is-8"},[a("article-content",{attrs:{sections:e.sections},on:{scroll:e.scrollMethod}})],1),a("div",{staticClass:"column is-3"},[a("article-menu",{attrs:{"div-to-highlight":e.divIndex,sections:e.sections}})],1)])},g=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Sticky",{attrs:{id:"article-menu"}},[a("div",{staticClass:"tile is-parent is-vertical"},[a("ul",{staticClass:"has-text-left notification is-success"},e._l(e.sections,function(t){return a("li",{key:t.id},[a("p",{class:{highlight:e.divToHighlight==t.id},on:{click:function(a){e.scrollToDiv(t.id)}}},[e._v(e._s(e.getSubHeading(t.components)))])])}))])])},_=[],w=(a("dRSK"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"sticky"},[e._t("default")],2)}),x=[],k=i["default"].extend({}),q=k,j=(a("9Ff4"),Object(v["a"])(q,w,x,!1,null,"6de4efa8",null)),C=j.exports,S=i["default"].extend({props:["divToHighlight","sections"],components:{Sticky:C},methods:{scrollToDiv:function(e){d.scrollToDiv(String(e))},getSubHeading:function(e){return e.find(function(e){return"subHeading"===e.type}).value}}}),E=S,O=(a("MBbs"),Object(v["a"])(E,y,_,!1,null,"79d4c08a",null)),A=O.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.sections,function(t){return a("section",{key:t.id,staticClass:"section has-text-left",attrs:{id:t.id}},e._l(t.components,function(i,n){return a("div",{key:n},["subHeading"===i.type?a("div",[a("h1",{staticClass:"title is-2",attrs:{id:"sectionSubHeading","data-index":t.id}},[e._v(e._s(i.value))])]):"paragraph"===i.type?a("div",[a("p",[e._v(e._s(i.value))])]):"code"===i.type?a("div",[a("pre",[a("code",{staticClass:"language-java"},[e._v(e._s(e.formatCode(i.value)))])])]):e._e()])}))}))},T=[],I=i["default"].extend({props:["sections"],methods:{handleScroll:function(e){this.$emit("scroll",d.getIndexToScroll())},formatCode:function(e){return e.join("\n")}},created:function(){window.addEventListener("scroll",this.handleScroll),this.$emit("scroll",1)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),H=I,$=(a("dzuN"),Object(v["a"])(H,D,T,!1,null,"4eced34a",null)),B=$.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Sticky",[a("div",{staticClass:"tile is-parent is-vertical"},[a("article",{staticClass:"tile is-child"},[a("p",{staticClass:"subtitle"},[a("i",{staticClass:"fab fa-github fa-2x",attrs:{id:"github"}})]),a("p",{staticClass:"subtitle"},[a("i",{staticClass:"fab fa-linkedin fa-2x",attrs:{id:"linkedin"}})]),a("p",{staticClass:"subtitle"},[a("i",{staticClass:"fas fa-share-alt fa-2x",attrs:{id:"share"}})]),a("p",{staticClass:"subtitle"},[a("i",{staticClass:"far fa-bookmark fa-2x",attrs:{id:"bookmark"}})])])])])},F=[],L=i["default"].extend({components:{Sticky:C}}),N=L,W=(a("kSyx"),Object(v["a"])(N,P,F,!1,null,"207410d7",null)),M=W.exports,z=i["default"].extend({components:{ArticleMenu:A,ArticleContent:B,ArticleButtons:M},data:function(){return{divIndex:"",sections:a("/xpx")}},methods:{scrollMethod:function(e){this.divIndex=e}}}),R=z,U=(a("RdyJ"),Object(v["a"])(R,b,g,!1,null,"24a4d6f0",null)),V=U.exports,X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod aspernatur architecto earum, ducimus ad vel animi nesciunt neque nihil ut voluptatibus. Nobis enim ex ipsum accusamus voluptatem culpa atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, vel maiores. Inventore cupiditate deserunt illum quaerat doloribus consequuntur veniam nam fuga alias officia nemo adipisci quos ducimus, nulla eligendi quam? Natus dolorum voluptates temporibus, distinctio quam ducimus? Possimus, incidunt ea! Dolor excepturi voluptatibus cum fugit eligendi ea eaque minus non? Magnam, eligendi. Pariatur, corporis. In ipsum hic eligendi at tempore! Quas nisi nostrum dolor, facilis placeat nemo quidem sapiente minus vitae. Earum veniam sunt nemo voluptatum mollitia. Id, obcaecati, eaque a reprehenderit incidunt consequatur ipsam culpa autem, vitae distinctio pariatur. Placeat mollitia corporis doloribus, illum dignissimos qui cum aperiam sequi quae illo adipisci debitis libero aut incidunt quaerat natus? Unde excepturi reprehenderit ex cum explicabo nesciunt porro a cumque cupiditate. Optio quidem numquam reiciendis eum in aliquam non cupiditate omnis ratione iure adipisci, unde maxime aliquid officiis tempore dolorem minima magnam cumque voluptate eligendi. Hic, quo dignissimos. Accusamus, eum quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto. Obcaecati dignissimos, non ab debitis cum in quasi impedit temporibus odio odit pariatur dolore incidunt laborum quae aliquid alias molestias.")])])])])])}],J=i["default"].extend({}),Q=J,Y=(a("Umby"),Object(v["a"])(Q,X,Z,!1,null,"880117ec",null)),K=Y.exports,G=i["default"].extend({components:{Header:h,Article:V,Footer:K}}),ee=G,te=(a("nNx0"),Object(v["a"])(ee,n,s,!1,null,null,null)),ae=te.exports,ie=a("jE9Z"),ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("img",{attrs:{src:a("zwU1")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},se=[],re=a("3Aqn"),oe=a("0yhX"),ue=a("EdlT"),le=a("mrSG"),ce=a("YKMj"),de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},me=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nemo, animi porro, iste error aut voluptatibus vero accusantium distinctio corrupti libero? Dignissimos ad distinctio praesentium voluptates asperiores placeat maiores explicabo.\n    Ex reprehenderit fugit recusandae repudiandae nihil nulla illo cumque perspiciatis perferendis sunt iure dolore aut delectus nesciunt, quisquam omnis mollitia. Nobis aspernatur exercitationem quam, eaque id eos unde deleniti maxime!\n    Quo labore tempora accusantium inventore omnis corporis unde optio similique? Error nam veniam ipsum mollitia sit, illo sint iure, perferendis, neque beatae quidem architecto minus assumenda reiciendis nulla dignissimos minima.\n    Totam, qui voluptates delectus quod inventore fuga, excepturi itaque dolores, in nesciunt repellat esse. Adipisci ullam unde, molestiae esse recusandae optio pariatur dolor delectus natus, facilis sint. Officiis, nemo fugiat.\n    Earum aliquid praesentium obcaecati, voluptatum quia unde nostrum neque dignissimos tempora eum laborum iste assumenda aperiam quam odio blanditiis provident facere numquam labore sit dolor alias suscipit veritatis quod. Dolores.\n    Natus quibusdam dolor blanditiis magni harum fuga nam vitae distinctio sapiente ratione? Veniam in soluta a consequuntur ipsam unde. Laudantium blanditiis ad neque consequuntur delectus. Corporis repellendus earum corrupti provident.\n    Quaerat optio error suscipit tenetur eaque quisquam asperiores laboriosam consequuntur, fuga ut officiis maiores numquam maxime sint at. Amet corporis ipsam autem minima praesentium blanditiis doloremque labore in, voluptatum aliquam?\n    Amet harum dolor, beatae ipsum asperiores recusandae labore officiis nulla, at laboriosam eligendi sunt omnis consectetur commodi temporibus eum mollitia, iste libero? Nobis et harum enim provident repellat praesentium. Reprehenderit.\n    Fugit, consequuntur amet fuga ipsa expedita repudiandae nulla distinctio nobis est natus odit, a aspernatur similique ipsam blanditiis modi aliquam. Aliquam neque qui deserunt inventore. Ea dolores nisi numquam architecto?\n    Provident molestias perferendis minima libero ducimus nesciunt sunt esse consequatur dignissimos accusamus, ratione placeat quod exercitationem unde labore culpa, sit pariatur, aut facere! Quibusdam, voluptatum! Id veniam reiciendis explicabo ab.\n    "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/docs",target:"_blank"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank"}},[e._v("typescript")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank"}},[e._v("pwa")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank"}},[e._v("unit-mocha")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank"}},[e._v("e2e-cypress")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],pe=function(e){function t(){return Object(l["a"])(this,t),Object(oe["a"])(this,Object(ue["a"])(t).apply(this,arguments))}return Object(re["a"])(t,e),t}(ce["c"]);le["a"]([Object(ce["b"])(),le["b"]("design:type",String)],pe.prototype,"msg",void 0),pe=le["a"]([ce["a"]],pe);var ve=pe,fe=ve,he=(a("25DF"),Object(v["a"])(fe,de,me,!1,null,"bb9552ca",null)),be=he.exports,ge=function(e){function t(){return Object(l["a"])(this,t),Object(oe["a"])(this,Object(ue["a"])(t).apply(this,arguments))}return Object(re["a"])(t,e),t}(ce["c"]);ge=le["a"]([Object(ce["a"])({components:{HelloWorld:be}})],ge);var ye=ge,_e=ye,we=Object(v["a"])(_e,ne,se,!1,null,null,null),xe=we.exports,ke=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},qe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],je={},Ce=Object(v["a"])(je,ke,qe,!1,null,null,null),Se=Ce.exports;i["default"].use(ie["a"]);var Ee=new ie["a"]({routes:[{path:"/",name:"home",component:xe},{path:"/about",name:"about",component:Se}]}),Oe=a("L2JU");i["default"].use(Oe["a"]);var Ae=new Oe["a"].Store({state:{},mutations:{},actions:{}}),De=a("lIOY");Object(De["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("ZZfx");var Te=a("jHpe"),Ie=a.n(Te);a("y1X9"),a("ki2X"),a("TpNv"),a("wPEV"),a("RuX1"),a("fwNl"),a("hL/g");i["default"].config.productionTip=!1,Ie.a.highlightAll(),new i["default"]({router:Ee,store:Ae,render:function(e){return e(ae)}}).$mount("#app")},zwU1:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.774dd027.js.map