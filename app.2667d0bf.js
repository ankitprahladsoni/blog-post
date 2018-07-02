(function(e){function t(t){for(var i,r,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={1:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([13,0]),n()})({"+fN7":function(e,t,n){},13:function(e,t,n){e.exports=n("zUnb")},"3v1a":function(e,t,n){"use strict";n.r(t);n("VRzm");t["default"]={id:4,components:[{type:"subHeading",value:"Other examples"},{type:"paragraph",value:'<em>"Hey, I don\'t code ducks daily at work".</em> Well, who does? And there are already many places where you can use the Strategy Pattern, like:<br/>\n      <ul>\n      <li>&#183 Sorting list with different strategies. <code>Collections.sort(list, Collections.reverseOrder());</code></li>\n      <li>&#183 Zipping a file using different zipping techniques.</li>\n      <li>&#183 Storing content to DB, XML or CSV</li>\n      <li>&#183 A taxi service charging a customer based on the time of the day. Day charges and night charges.</li>\n      </ul>'}]}},"4Zol":function(e,t,n){},"5bX4":function(e,t,n){"use strict";n.r(t),n.d(t,"getArticle",function(){return u});var i=n("SfdI"),a=n("6ond"),s=n("EnIS"),r=n("3v1a"),o=n("jWTM");function u(){return[i["default"],a["default"],s["default"],r["default"],o["default"]]}},"5r62":function(e,t,n){"use strict";var i=n("e95g"),a=n.n(i);a.a},"6ond":function(e,t,n){"use strict";n.r(t);n("VRzm");function i(){return'\npublic class Duck {\n    public void swim(){\n        System.out.println("I\'m swimimg");\n    }\n}'}t["default"]={id:2,components:[{type:"subHeading",value:"A problem statement"},{type:"paragraph",value:"We have a couple of <code>Duck</code> subclasses, namely <code>CityDuck</code> and <code>WildDuck</code>."},{type:"code",value:i()},{type:"code",value:"public class WildDuck extends Duck { }"},{type:"code",value:"public class CityDuck extends Duck { }"},{type:"code",value:'\nWildDuck wildDuck = new WildDuck();\nCityDuck cityDuck = new CityDuck();\nSystem.out.println("WildDuck says: " + wildDuck.swim());\nSystem.out.println("CityDuck says: " + cityDuck.swim());'},{type:"code",value:"\n> WildDuck says: I'm swimming\n> CityDuck says: I'm swimming"},{type:"paragraph",value:"Both <code>CityDuck</code> and <code>WildDuck</code> can swim, as we see them in real life."},{type:"paragraph",value:"If we wish to see these duck fly, we simply add a <code>fly()</code> method in the <code>Duck</code> class, and the subclasses will start to fly."},{type:"code",value:'\npublic class Duck {\n    public void swim(){\n        System.out.println("I\'m swimming");\n    }\',\n\n    public void fly(){\n        System.out.println("I\'m flying");\n    }\n}'},{type:"code",value:'\nWildDuck wildDuck = new WildDuck();\nCityDuck cityDuck = new CityDuck();\nSystem.out.println("WildDuck says: " + wildDuck.fly());\nSystem.out.println("CityDuck says: " + cityDuck.fly());\n'},{type:"code",value:"\n> WildDuck says: I'm flying\n> CityDuck says: I'm flying"},{type:"paragraph",value:"All is going great, but you fail to realize that there's another subclass <code>RubberDuck</code> present in our system. And oh boy, it too has started flying."},{type:"code",value:"public class RubberDuck extends Duck { }"},{type:"code",value:'\nRubberDuck rubberDuck = new RubberDuck();\nSystem.out.println("RubberDuck says: " + rubberDuck.fly());'},{type:"code",value:"> RubberDuck says: I'm flying"},{type:"paragraph",value:"<strong>OH NO!!!</strong> That was unexpected. We don't see rubber ducks flying in real life.<br/>\n          The boss is very angry and wants an immediate fix. What should we do?<br/>Well, we can simply override the fly behaviour in <code>RubberDuck</code> to make it not fly, and we are done for the day."},{type:"code",value:'\npublic class RubberDuck extends Duck {\n    @Override\n    public void fly(){\n        System.out.println("Sorry, I can\'t fly");\n    }\n}'},{type:"code",value:'\nRubberDuck rubberDuck = new RubberDuck();\nSystem.out.println("RubberDuck says: " + rubberDuck.swim());\nSystem.out.println("RubberDuck says: " + rubberDuck.fly());\n'},{type:"code",value:"\n> RubberDuck says: I'm swimming\n> RubberDuck says: Sorry, I can't fly\n"},{type:"paragraph",value:"Your boss is happy again.<br/>Good job! You can give yourself a pat on the back."},{type:"paragraph",value:'<em>"But wait, there\'s more!"</em> your boss says. The company is planning to add more ducks into the system. Starting with ducks made of wood.<br/>Now, a hardwood duck can neither fly nor swim. Which means that we will have to override both <code>swim()</code> and <code>fly()</code> methods to make it not fly and swim.'},{type:"code",value:'\npublic class WoddenDuck extends Duck {\n    @Override\n    public void fly(){\n        System.out.println("Sorry, I can\'t fly");\n    }\n\n    @Override\n    public void swim(){\n        System.out.println("Sorry, I can\'t swim");\n    }\n}\n'},{type:"code",value:'\nWoddenDuck woddenDuck = new WoddenDuck();\nSystem.out.println("WoddenDuck says: " + woddenDuck.swim());\nSystem.out.println("WoddenDuck says: " + woddenDuck.fly());\n'},{type:"code",value:"\n> WoddenDuck says: Sorry, I can't swim\n> WoddenDuck says: Sorry, I can't fly\n"},{type:"paragraph",value:"It kind of works, but we can't go on and on overriding the methods in each subclass. And we are also duplicating a lot of code here in overriding methods that do the exact same thing. Here we have the same code in <code>fly()</code> method for both <code>RubberDuck</code> and <code>WoddenDuck</code>. The same check has to be done for each new method added in base class <code>Duck</code>.<br>It looks like our choice of design wasn't very useful in terms of flexibility and maintenance."},{type:"paragraph",value:"Inheritance is becoming a mess, and we are left with a lot of duplicate code with no reusability."}]}},"904X":function(e,t,n){"use strict";var i=n("QLGy"),a=n.n(i);a.a},"9Ff4":function(e,t,n){"use strict";var i=n("ndDv"),a=n.n(i);a.a},EnIS:function(e,t,n){"use strict";n.r(t);n("VRzm");t["default"]={id:3,components:[{type:"subHeading",value:"The solution"},{type:"paragraph",value:"As we know that many more kinds of ducks will be coming into our system with different behaviours, why not make those behaviours as class variables, which can be easily passed to an object?<br/>But how do we pass these methods as variables you ask?"},{type:"paragraph",value:'Enters the <em>STRATEGY PATTERN</em>.<br/>As per the definition, let\'s make our class select algorithms/strategies/behaviour at runtime. In our case, fly and swim can be of different behaviours. Instead of passing them using <em><a href="https://en.wikipedia.org/wiki/Is-a">IS-A</a></em> relationship from parent to child, let\'s inject these behaviours using <em><a href="https://en.wikipedia.org/wiki/Has-a">HAS-A</a></em> relationship.'},{type:"paragraph",value:"We will create interfaces <code>FlyBehaviour</code> and <code>SwimBehaviour</code> and use them as variables in our <code>Duck</code> class. <code>FlyBehaviour</code> may have multiple implementations such as <code>FlyWithWingsBehavior</code> and <code>NoFlyBehaviour</code>. Same with <code>SwimBehaviour</code> as shown below."},{type:"paragraph",value:"<code>FlyBehaviour</code> and its implementations"},{type:"code",value:"\npublic interface FlyBehaviour {\n    public void fly();\n}\n"},{type:"code",value:'\npublic class FlyWithWingsBehaviour implements FlyBehaviour {\n    @Override\n    public void fly(){\n        System.out.println("I\'m flying with wings");\n    }\n}\n'},{type:"code",value:'\npublic class NoFlyBehaviour implements FlyBehaviour {\n    @Override\n    public void fly(){\n        System.out.println("Sorry, I can\'t fly");\n    }\n}\n'},{type:"paragraph",value:"<code>SwimBehaviour</code> and its implementations"},{type:"code",value:"\npublic interface SwimBehaviour {\n    public void swim();\n}\n"},{type:"code",value:'\npublic class SwimWithFeetBehaviour implements SwimBehaviour {\n    @Override\n    public void swim(){\n        System.out.println("I\'m swimming with my webbed feet");\n    }\n}\n'},{type:"code",value:'\npublic class NoSwimBehaviour implements SwimBehaviour {\n    @Override\n    public void swim(){\n        System.out.println("Sorry, I can\'t swim");\n    }\n}\n'},{type:"paragraph",value:"We define our new <code>Duck</code> class as:"},{type:"code",value:"\npublic class Duck {\n    FlyBehaviour flyBehaviour;\n    SwimBehaviour swimBehaviour;\n\n    public Duck(FlyBehaviour fb, SwimBehaviour sb){\n        flyBehaviour = fb;\n        swimBehaviour = sb;\n    }\n\n    public void performFly(){\n        flyBehaviour.fly();\n    }\n\n    public void performSwim(){\n        swimBehaviour.swim();\n    }\n}\n"},{type:"paragraph",value:"Here, we are injecting the behaviours via a constructor. We can use this class as:"},{type:"code",value:'\nDuck cityDuck = new Duck(new FlyWithWingsBehaviour(), new SwimWithFeetBehaviour());\nSystem.out.println("CityDuck says: " + cityDuck.performFly());\nSystem.out.println("CityDuck says: " + cityDuck.performSwim());\n\nDuck woddenDuck = new Duck(new NoFlyBehaviour(), new NoSwimBehaviour());\nSystem.out.println("WoddenDuck says: " + woddenDuck.performFly());\nSystem.out.println("WoddenDuck says: " + woddenDuck.performSwim());\n'},{type:"code",value:"\n > CityDuck says: I'm flying with wings\n > CityDuck says: I'm swimming with my webbed feet\n > WoddenDuck says: Sorry, I can't fly\n > WoddenDuck says: Sorry, I can't swim\n"},{type:"paragraph",value:"Cool, isn't it? We no longer have to worry about many subclasses of <code>Duck</code>, because we have <strong>none</strong>. At the same time, we can create as many ducks as we want, with many combinations of flying and swimming behaviours, without worrying if it's going to break the         functionality of other ducks.<br/>\n        Not only that, if we were to have setters for each behaviour, we can simply change the behaviour at runtime by giving a new instance of the behaviour to the duck.<br/>For example, we want our ducks to fly using a rocket booster instead of wings, then we just have to create a new behaviour <code>FlyWithRocketBehaviour</code>, and set it to our <code>Duck</code> object."},{type:"code",value:"\npublic class Duck {\n    FlyBehaviour flyBehaviour;\n    SwimBehaviour swimBehaviour;\n    //setters for behaviours\n}\n"},{type:"code",value:'\npublic class FlyWithRocketBehaviour implements FlyBehaviour {\n    @Override\n    public void fly(){\n        System.out.println("I\'m flying with my rocket boosters");\n    }\n}\n'},{type:"code",value:'\nDuck cityDuck = new Duck(new FlyWithWingsBehaviour(), new SwimWithFeetBehaviour());\nSystem.out.println("CityDuck says: " + cityDuck.performFly());\ncityDuck.setFlyBehaviour(new FlyWithRocketBehaviour())\nSystem.out.println("CityDuck says: " + cityDuck.performFly());\n'},{type:"code",value:"\n> CityDuck says: I'm flying with wings\n> CityDuck says: I'm flying with my rocket boosters\n"},{type:"paragraph",value:"Instead of creating different duck classes, we can have a single duck class with behaviour/strategies than can be easily plugged into them. Just like building a duck using Lego blocks.<br/>\n        Now go out and show off your new skills to your colleagues and make them envy you."}]}},"GI/b":function(e,t,n){"use strict";var i=n("+fN7"),a=n.n(i);a.a},MwHk:function(e,t,n){"use strict";var i=n("fyk3"),a=n.n(i);a.a},NG4Q:function(e,t,n){var i={"./ContentLoader":"Sxed","./ContentLoader.ts":"Sxed","./design-patterns/strategy":"5bX4","./design-patterns/strategy/":"5bX4","./design-patterns/strategy/conclusion":"jWTM","./design-patterns/strategy/conclusion.ts":"jWTM","./design-patterns/strategy/index":"5bX4","./design-patterns/strategy/index.ts":"5bX4","./design-patterns/strategy/other-examples":"3v1a","./design-patterns/strategy/other-examples.ts":"3v1a","./design-patterns/strategy/problem-statement":"6ond","./design-patterns/strategy/problem-statement.ts":"6ond","./design-patterns/strategy/the-solution":"EnIS","./design-patterns/strategy/the-solution.ts":"EnIS","./design-patterns/strategy/what-is-it":"SfdI","./design-patterns/strategy/what-is-it.ts":"SfdI"};function a(e){var t=s(e);return n(t)}function s(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="NG4Q"},QLGy:function(e,t,n){},SfdI:function(e,t,n){"use strict";n.r(t);n("VRzm");t["default"]={id:1,components:[{type:"subHeading",value:"What is it?"},{type:"paragraph",value:'According to <a href="https://en.wikipedia.org/wiki/Strategy_pattern">Wikipedia</a>, <em>Strategy pattern is a behavioural software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.</em>'},{type:"paragraph",value:"Don't know about you guys, but I sure didn't understand this definition when I first read it. So let's try to understand it with an example."}]}},Sxed:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var i=n("xmWZ"),a=n("qpph"),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getArticle",value:function(e,t){return n("NG4Q")("./".concat(e,"/").concat(t)).getArticle()}}]),e}()},Umby:function(e,t,n){"use strict";var i=n("4Zol"),a=n.n(i);a.a},YV85:function(e,t,n){},aJhB:function(e,t,n){},aQwY:function(e,t,n){"use strict";var i=n("YV85"),a=n.n(i);a.a},e95g:function(e,t,n){},fyk3:function(e,t,n){},jWTM:function(e,t,n){"use strict";n.r(t),t["default"]={id:5,components:[{type:"subHeading",value:"Conclusion"},{type:"paragraph",value:"TODO"}]}},nNx0:function(e,t,n){"use strict";var i=n("uWEC"),a=n.n(i);a.a},ndDv:function(e,t,n){},p3Th:function(e,t,n){"use strict";var i=n("aJhB"),a=n.n(i);a.a},uWEC:function(e,t,n){},zUnb:function(e,t,n){"use strict";n.r(t);n("VRzm"),n("ZZfx");var i=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section expand",attrs:{id:"navbar-section"}},[n("nav",{staticClass:"navbar is-fixed-top expand",attrs:{role:"navigation","aria-label":"main navigation"}},[e._m(0),n("nav-menu")],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"#",id:"avatarDiv"}},[n("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/8023641",alt:"avatar"}})]),n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("sfa")]),n("span",{attrs:{"aria-hidden":"true"}},[e._v("safasdf")]),n("span",{attrs:{"aria-hidden":"true"}},[e._v("asdfasdfsd")])])])}],u=(n("rGqo"),n("iv4g")),c=n("xmWZ"),l=n("qpph"),d=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getAllElementsBySelector",value:function(e){return Object(u["a"])(document.querySelectorAll(e))}},{key:"getAllElementBySelectors",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){return document.querySelector(e)})}},{key:"getHTMLElementBySelector",value:function(e){return document.querySelector(e)}},{key:"getHTMLElementByElAndSelector",value:function(e,t){return e.querySelector(t)}},{key:"getIndexToScroll",value:function(){var e=window.scrollY+100;return this.getAllElementsBySelector(this.headingSelector).filter(function(t){return t.offsetTop<e}).map(function(e){return e.dataset.index}).pop()}}]),e}();d.headingSelector='h1[id="sectionSubHeading"]';var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-end"},[n("nav",{staticClass:"top"},[e._m(0),n("ul",{staticClass:"menu-items"},e._l(e.menuItems,function(t){return n("li",{key:t.title,on:{mouseenter:function(t){return t.target!==t.currentTarget?null:e.handleEnter(t)},mouseleave:function(t){return t.target!==t.currentTarget?null:e.handleLeave(t)}}},[n("a",{staticClass:"button is-info is-outlined"},[e._v("\n                    "+e._s(t.title)+"\n                ")]),n("ul",{staticClass:"dropdown courses"},e._l(t.patterns,function(t){return n("li",{key:t.value},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.name))])])}))])}))])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdownBackground"},[n("span",{staticClass:"arrow"})])}],h=n("3Aqn"),f=n("0yhX"),y=n("EdlT"),v=n("mrSG"),b=n("YKMj"),g=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(f["a"])(this,Object(y["a"])(t).apply(this,arguments)),e.menuItems=[{title:"Creational",patterns:[{name:"Factory Pattern",link:"#"}]},{title:"Structural",patterns:[{name:"Adapter Pattern",link:"#"}]},{title:"Behavioural",patterns:[{name:"Strategy Pattern",link:"#"}]}],e}return Object(l["a"])(t,[{key:"handleEnter",value:function(e){var t=e.target,n=d.getHTMLElementBySelector(".dropdownBackground");t.classList.add("trigger-enter"),setTimeout(function(){return t.classList.contains("trigger-enter")&&t.classList.add("trigger-enter-active")},150),n.classList.add("open");var i=d.getHTMLElementBySelector(".top"),a=d.getHTMLElementByElAndSelector(t,".dropdown"),s=a.getBoundingClientRect(),r=i.getBoundingClientRect(),o={height:s.height,width:s.width,top:s.top-r.top,left:s.left-r.left};n.style.setProperty("width","".concat(o.width,"px")),n.style.setProperty("height","".concat(o.height,"px")),n.style.setProperty("transform","translate(".concat(o.left,"px, ").concat(o.top,"px)"))}},{key:"handleLeave",value:function(e){var t=e.target,n=d.getHTMLElementBySelector(".dropdownBackground");t.classList.remove("trigger-enter","trigger-enter-active"),n.classList.remove("open")}}]),Object(h["a"])(t,e),t}(b["b"]);g=v["a"]([b["a"]],g);var w=g,k=w,D=(n("904X"),n("KHd+")),S=Object(D["a"])(k,p,m,!1,null,"c4b40bc2",null),x=S.exports,C=i["default"].extend({components:{NavMenu:x},mounted:function(){var e=this;window.addEventListener("scroll",function(t){var n=d.getAllElementBySelectors("nav","#navbar-section");window.scrollY?e.collapse(n):e.expand(n)})},methods:{collapse:function(e){e.map(function(e){return e.classList}).forEach(function(e){e.add("collapse"),e.remove("expand")})},expand:function(e){e.map(function(e){return e.classList}).forEach(function(e){e.add("expand"),e.remove("collapse")})}}}),B=C,_=(n("5r62"),Object(D["a"])(B,r,o,!1,null,"17c3e0b0",null)),I=_.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod aspernatur architecto earum, ducimus ad vel animi nesciunt neque nihil ut voluptatibus. Nobis enim ex ipsum accusamus voluptatem culpa atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, vel maiores. Inventore cupiditate deserunt illum quaerat doloribus consequuntur veniam nam fuga alias officia nemo adipisci quos ducimus, nulla eligendi quam? Natus dolorum voluptates temporibus, distinctio quam ducimus? Possimus, incidunt ea! Dolor excepturi voluptatibus cum fugit eligendi ea eaque minus non? Magnam, eligendi. Pariatur, corporis. In ipsum hic eligendi at tempore! Quas nisi nostrum dolor, facilis placeat nemo quidem sapiente minus vitae. Earum veniam sunt nemo voluptatum mollitia. Id, obcaecati, eaque a reprehenderit incidunt consequatur ipsam culpa autem, vitae distinctio pariatur. Placeat mollitia corporis doloribus, illum dignissimos qui cum aperiam sequi quae illo adipisci debitis libero aut incidunt quaerat natus? Unde excepturi reprehenderit ex cum explicabo nesciunt porro a cumque cupiditate. Optio quidem numquam reiciendis eum in aliquam non cupiditate omnis ratione iure adipisci, unde maxime aliquid officiis tempore dolorem minima magnam cumque voluptate eligendi. Hic, quo dignissimos. Accusamus, eum quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto. Obcaecati dignissimos, non ab debitis cum in quasi impedit temporibus odio odit pariatur dolore incidunt laborum quae aliquid alias molestias.")])])])])])}],j=i["default"].extend({}),E=j,A=(n("Umby"),Object(D["a"])(E,O,W,!1,null,"880117ec",null)),F=A.exports,T=i["default"].extend({components:{Header:I,Footer:F}}),q=T,H=(n("nNx0"),Object(D["a"])(q,a,s,!1,null,null,null)),L=H.exports,R=n("jE9Z"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Article",{attrs:{"article-params":e.$route.params}})],1)},M=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-1"},[n("article-buttons")],1),n("div",{staticClass:"column is-8"},[n("article-content",{attrs:{sections:e.sections},on:{scroll:e.scrollMethod}})],1),n("div",{staticClass:"column is-3"},[n("article-menu",{attrs:{"div-to-highlight":e.divIndex,sections:e.sections}})],1)])},$=[],X=(n("f3/d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Sticky",{attrs:{id:"article-menu"}},[n("div",{staticClass:"tile is-parent is-vertical"},[n("ul",{staticClass:"has-text-left notification is-success"},e._l(e.sections,function(t){return n("li",{key:t.id},[n("p",{class:{highlight:e.divToHighlight==t.id}},[n("router-link",{attrs:{to:e.subHeadingId(t.id)}},[e._v(e._s(e.getSubHeading(t.components)))])],1)])}))])])}),G=[],Y=(n("dRSK"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sticky"},[e._t("default")],2)}),z=[],Q=i["default"].extend({}),V=Q,U=(n("9Ff4"),Object(D["a"])(V,Y,z,!1,null,"6de4efa8",null)),Z=U.exports,J=i["default"].extend({props:["divToHighlight","sections"],components:{Sticky:Z},methods:{getSubHeading:function(e){return e.find(function(e){return"subHeading"===e.type}).value},subHeadingId:function(e){return"#heading"+e}}}),K=J,ee=(n("aQwY"),Object(D["a"])(K,X,G,!1,null,"2b55d2ec",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.sections,function(t){return n("section",{key:t.id,staticClass:"section has-text-left",attrs:{id:e.subHeadingId(t.id)}},e._l(t.components,function(i,a){return n("div",{key:a},["subHeading"===i.type?n("div",[n("h1",{staticClass:"title is-2",attrs:{id:"sectionSubHeading","data-index":t.id}},[e._v(e._s(i.value))])]):"paragraph"===i.type?n("div",[n("p",{attrs:{id:"para"}},[n("span",{domProps:{innerHTML:e._s(i.value)}})])]):"code"===i.type?n("div",[n("pre",[n("code",{staticClass:"language-java"},[e._v(e._s(i.value.trim()))])])]):e._e()])}))}))},ie=[],ae=i["default"].extend({props:["sections"],methods:{handleScroll:function(e){this.$emit("scroll",d.getIndexToScroll())},subHeadingId:function(e){return"heading"+e}},created:function(){window.addEventListener("scroll",this.handleScroll),this.$emit("scroll",1)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),se=ae,re=(n("p3Th"),Object(D["a"])(se,ne,ie,!1,null,"0c8ee22f",null)),oe=re.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Sticky",[n("div",{staticClass:"tile is-parent is-vertical columns is-vcentered"},[n("article",{staticClass:"tile is-child"},[n("p",{staticClass:"subtitle"},[n("i",{staticClass:"fab fa-github fa-2x",attrs:{id:"github"}})]),n("p",{staticClass:"subtitle"},[n("i",{staticClass:"fab fa-linkedin fa-2x",attrs:{id:"linkedin"}})]),n("p",{staticClass:"subtitle"},[n("i",{staticClass:"fas fa-share-alt fa-2x",attrs:{id:"share"}})]),n("p",{staticClass:"subtitle"},[n("i",{staticClass:"far fa-bookmark fa-2x",attrs:{id:"bookmark"}})])])])])},ce=[],le=i["default"].extend({components:{Sticky:Z}}),de=le,pe=(n("MwHk"),Object(D["a"])(de,ue,ce,!1,null,"6109be03",null)),me=pe.exports,he=n("Sxed"),fe=i["default"].extend({props:["articleParams"],components:{ArticleMenu:te,ArticleContent:oe,ArticleButtons:me},data:function(){return{divIndex:"",sections:[]}},methods:{scrollMethod:function(e){this.divIndex=e}},created:function(){this.sections=he["default"].getArticle(this.articleParams.folder,this.articleParams.name)}}),ye=fe,ve=(n("GI/b"),Object(D["a"])(ye,P,$,!1,null,"edaa488a",null)),be=ve.exports,ge=function(e){function t(){return Object(c["a"])(this,t),Object(f["a"])(this,Object(y["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(b["b"]);ge=v["a"]([Object(b["a"])({components:{Article:be}})],ge);var we=ge,ke=we,De=Object(D["a"])(ke,N,M,!1,null,null,null),Se=De.exports,xe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],Be={},_e=Object(D["a"])(Be,xe,Ce,!1,null,null,null),Ie=_e.exports;i["default"].use(R["a"]);var Oe=new R["a"]({routes:[{path:"/:folder/:name",name:"home",component:Se},{path:"/about",name:"about",component:Ie}],scrollBehavior:function(e,t,n){if(e.hash)return{selector:e.hash}}}),We=n("L2JU");i["default"].use(We["a"]);var je=new We["a"].Store({state:{},mutations:{},actions:{}}),Ee=n("lIOY");Object(Ee["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ae=n("jHpe"),Fe=n.n(Ae);n("y1X9"),n("ki2X"),n("TpNv"),n("wPEV"),n("RuX1"),n("fwNl"),n("hL/g");i["default"].config.productionTip=!1,Fe.a.highlightAll(),new i["default"]({router:Oe,store:je,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.2667d0bf.js.map