webpackJsonp([4],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"4Atj":function(t,e,n){var r={"./vue-i18n.js":"CHBt"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4Atj"},"6FUv":function(t,e){},"6NcH":function(t,e){},"7zck":function(t,e){},"87CO":function(t,e,n){"use strict";var r=n("/5sW"),o=n("3EgV"),a=n.n(o);r.default.use(a.a)},"8j17":function(t,e,n){"use strict";var r=n("/5sW"),o=n("C/JF"),a=n("Sxos"),i=(n.n(a),n("o/pr")),s=(n.n(i),n("5P8H")),u=(n.n(s),n("U0v6"));n.n(u);o.library.add(a.faBook),o.library.add(i.faGithub),o.library.add(s.faDiscord),r.default.component("font-awesome-icon",u.FontAwesomeIcon)},CHBt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.isHMR,n=t.app,r=t.store,o=(t.route,t.params),a=t.error,i=(t.redirect,n.i18n.fallbackLocale);if(!e){var s=o.locale||i;if(-1===r.state.locales.indexOf(s))return a({message:"This page could not be found.",statusCode:404});r.commit("SET_LOCALE",s),n.i18n.locale=r.state.locale}}},DlsP:function(t,e,n){"use strict";var r=n("/5sW"),o=n("TXmL"),a=n("6FUv");n.n(a);r.default.use(o.default),e.a=function(t){var e=t.app,r=t.store;e.i18n=new o.default({locale:r.state.locale,fallbackLocale:"en",messages:{en:n("GZzL"),es:n("OKoX"),cn:n("pKX1"),ja:n("U2v5"),fr:n("VuYv")}}),e.i18n.path=function(t){return"/"+e.i18n.locale+"/"+t}}},F88d:function(t,e,n){"use strict";var r=n("deNi"),o=n("srTi"),a=!1;var i=function(t){a||n("6NcH")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-loading.vue",e.a=s.exports},GZzL:function(t,e){t.exports={jumbotron:{slogan:"The Open Platform for the Internet of Things™","btn-documentation":"Documentation","btn-github":"View on GitHub","btn-discord":"Community","btn-get-started":"Get Started"},home:{title:"Welcome",introduction:"This is an introduction in English."},about:{title:"About",introduction:"This page is made to give you more informations."},lotties:{deployment:{"deploy-in-minutes":"Deploy a SiteWhere Instance in Minutes","choose-cloud-env":"Choose a Cloud Environment or Deploy On-Premise","provision-k8s":"Provision a Kubernetes Cluster","use-helm":"Use Helm to Configure a SiteWhere Instance","microsvc-launched":"SiteWhere Microservices are Launched in Kubernetes","microsvc-assemble":"Services Automatically Assemble and Start Processing"}}}},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;a.nuxtChildDepth=l;var d=u[l]||c,f={};r.forEach(function(t){void 0!==d[t]&&(f[t]=d[t])});var p={};o.forEach(function(t){"function"==typeof d[t]&&(p[t]=d[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:f,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),l=c.keys(),d={},f=void 0;if(l.forEach(function(t){-1!==t.indexOf("./index.")&&(f=t)}),f&&(d=_(f)),"function"!=typeof d){d.modules||(d.modules={});var p=!0,h=!1,m=void 0;try{for(var v,x=i()(l);!(p=(v=x.next()).done);p=!0){var y=v.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var g=b.split(/\//);(t=C(d,g))[b=g.pop()]=_(y),t[b].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&x.return&&x.return()}finally{if(h)throw m}}}var w=d instanceof Function?d:function(){return new u.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},OKoX:function(t,e){t.exports={jumbotron:{slogan:"La Plataforma Abierta para el Internet de las Cosas","btn-documentation":"Documentación","btn-github":"Ver en GitHub","btn-discord":"Comunidad","btn-get-started":"Empezar"},home:{title:"Bienvenido",introduction:"Esta es una introducción en inglés."},about:{title:"Acerca de",introduction:"Esta página está hecha para darle más información."},lotties:{deployment:{"deploy-in-minutes":"Implementar una instancia de SiteWhere en minutos","choose-cloud-env":"Elija un entorno de nube o implemente en las instalaciones","provision-k8s":"Aprovisionamiento de un grupo de Kubernetes","use-helm":"Use Helm para configurar una instancia de SiteWhere","microsvc-launched":"SiteWhere se lanzan microservicios en Kubernetes","microsvc-assemble":"Servicios de ensamblaje y arranque automático de procesos"}}}},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("mvHQ"),l=n.n(c),d=n("exGp"),f=n.n(d),p=n("fZjL"),h=n.n(p),m=n("woOf"),v=n.n(m),x=n("/5sW"),y=n("unZF"),b=n("qcny"),g=n("YLfZ"),w=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?Object(g.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(g.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),_=function(){var t=f()(u.a.mark(function t(e,n,r){var o,a,s,c,l,d,f,p,h=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];k=Object(g.e)(n,e).map(function(t,r){return Object(g.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(g.m)($,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,s=[],(c=Object(g.e)(e,s)).length){t.next=24;break}return t.next=13,A.call(this,c,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof b.a.layout?b.a.layout($.context):b.a.layout);case 17:return l=t.sent,t.next=20,A.call(this,c,$.context,l);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(S(c,e,n)),t.prev=26,t.next=29,A.call(this,c,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(d=c[0].options.layout)&&(d=d($.context)),t.next=37,this.loadLayout(d);case 37:return d=t.sent,t.next=40,A.call(this,c,$.context,d);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(f=!0,c.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{},store:j}))}),f){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(g.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==k[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,c=a&&u?30:45;if(a){var l=Object(g.j)(t.options.asyncData,$.context).then(function(e){Object(g.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(l)}if(u){var d=t.options.fetch($.context);d&&(d instanceof i.a||"function"==typeof d.then)||(d=i.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(d)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),k=c.map(function(t,n){return Object(g.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),k=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=b.a.layout)&&(p=p($.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(){var t=f()(u.a.mark(function t(e){var n,r,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,E=e.router,j=e.store,t.next=5,i.a.all(T(E));case 5:return n=t.sent,r=new x.default($),o=O.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),x.default.nextTick(function(){M(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(S(n,E.currentRoute)),k=E.currentRoute.matched.map(function(t){return Object(g.b)(t.path)(E.currentRoute.params)})),r.$loading={},O.error&&r.error(O.error),E.beforeEach(w.bind(r)),E.beforeEach(_.bind(r)),E.afterEach(W),E.afterEach(q.bind(r)),!O.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:_.call(r,E.currentRoute,E.currentRoute,function(t){if(!t)return W(E.currentRoute,E.currentRoute),L.call(r,E.currentRoute),void a();E.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=[],$=void 0,E=void 0,j=void 0,O=window.__NUXT__||{};function S(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=v()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function R(t,e){return O.serverRendered&&e&&Object(g.a)(t,e),t._Ctor=t,t}function T(t){var e=this,n=Object(g.d)(t.options.base,t.options.mode);return Object(g.c)(t.match(n),function(){var t=f()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=R(Object(g.l)(n),O.data?O.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function A(t,e,n){var r=this,o=["vue-i18n"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!a)return Object(g.i)(o,e)}function W(t,e){Object(g.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=x.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?b.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function q(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.default.nextTick(function(){Object(g.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&k[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}}),L.call(n,t)})}function M(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),E.afterEach(function(e,n){x.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(b.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},U2v5:function(t,e){t.exports={jumbotron:{slogan:"モノのインターネットのためのオープンプラットフォーム™","btn-documentation":"ドキュメンテーション","btn-github":"GitHubで見る","btn-discord":"コミュニティ","btn-get-started":"はじめに"},home:{title:"ようこそ",introduction:"これは英語の紹介です。"},about:{title:"約",introduction:"このページはあなたにもっと多くの情報を与えるために作られています。"},lotties:{deployment:{"deploy-in-minutes":"SiteWhereインスタンスを数分でデプロイする","choose-cloud-env":"クラウド環境を選択するかオンプレミスで展開する","provision-k8s":"Kubernetesクラスタをプロビジョニングする","use-helm":"Helmを使用してSiteWhereインスタンスを設定する","microsvc-launched":"SiteWhereマイクロサービスがKubernetesで発売","microsvc-assemble":"サービスが自動的にアセンブルして処理を開始"}}}},VuYv:function(t,e){t.exports={jumbotron:{slogan:"La plate-forme ouverte pour l'Internet des objets","btn-documentation":"Documentation","btn-github":"Voir sur GitHub","btn-discord":"Communauté","btn-get-started":"Commencer"},home:{title:"Bienvenue",introduction:"Ceci est une introduction en anglais."},about:{title:"Sur",introduction:"Cette page est faite pour vous donner plus d'informations."},lotties:{deployment:{"deploy-in-minutes":"Déployer une instance de SiteWhere en quelques minutes","choose-cloud-env":"Choisissez un environnement cloud ou déployez sur site","provision-k8s":"Provisionner un cluster Kubernetes","use-helm":"Utiliser Helm pour configurer une instance de SiteWhere","microsvc-launched":"SiteWhere Microservices sont lancés dans Kubernetes","microsvc-assemble":"Services assembler automatiquement et démarrer le traitement"}}}},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return C}),n.d(e,"m",function(){return k}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return f.a.resolve();return $(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=$,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var d,f=i[l.name];if(null==f){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+o()(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(d=u(f[p]),!e[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+o()(d)+"`");a+=(0===p?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?O(f):u(f),!e[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');a+=l.prefix+d}}else a+=l}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=E.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var d=t[a],f=n[2],p=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=f&&null!=d&&d!==f,b="+"===v||"*"===v,g="?"===v||"*"===v,w=n[2]||s,_=h||m;r.push({name:p||o++,prefix:f||"",delimiter:w,optional:g,repeat:b,partial:y,asterisk:!!x,pattern:_?R(_):x?".*":"[^"+S(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),l=n.n(c),d=n("//Fk"),f=n.n(d),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e=this;return f.a.all(w(t,function(){var t=l()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=b(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=l()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",v()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=l()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=T(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,C(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,C(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function $(t,e){var n=void 0;return(n=2===t.length?new f.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof f.a||"function"==typeof n.then)||(n=f.a.resolve(n)),n}var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function S(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function R(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},ct3O:function(t,e,n){"use strict";var r=n("kOiW"),o=n("n1a8"),a=!1;var i=function(t){a||n("glvC")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-error.vue",e.a=s.exports},deNi:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},eMls:function(t,e){},glvC:function(t,e){},kOiW:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:c,routes:[{path:"/",component:s,name:"index"},{path:"/:locale",component:u,name:"locale"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},u=function(){return n.e(0).then(n.bind(null,"RoHA")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var c=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},n1a8:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},pKX1:function(t,e){t.exports={jumbotron:{slogan:"物联网开放平台","btn-documentation":"文档","btn-github":"在GitHub上查看","btn-discord":"社区","btn-get-started":"入门"},home:{title:"欢迎",introduction:"这是英文介绍"},about:{title:"关于",introduction:"此页面旨在为您提供更多信息"},lotties:{deployment:{"deploy-in-minutes":"在几分钟内部署SiteWhere实例","choose-cloud-env":"选择云环境或部署内部部署","provision-k8s":"提供Kubernetes集群","use-helm":"使用Helm配置SiteWhere实例","microsvc-launched":"SiteWhere微服务在Kubernetes推出","microsvc-assemble":"服务自动组装和开始处理"}}}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),l=n("Dd8w"),d=n.n(l),f=n("exGp"),p=n.n(f),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),y=n("mtxM"),b=n("0F0d"),g=n("HBB+"),w=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),E=n("J2Ti"),j=n("87CO"),O=n("DlsP"),S=n("8j17");n.d(e,"a",function(){return _.a});var R=function(){var t=p()(o.a.mark(function t(e){var n,r,a,i,u,l,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:T,transitions:[T],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},T,{name:t}):c()({},T,t):T}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(l=Object($.d)(n.options.base),u=n.resolve(l).route),t.next=10,Object($.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof j.default){t.next=15;break}return t.next=15,Object(j.default)(a.context,f);case 15:if("function"!=typeof O.a){t.next=18;break}return t.next=18,Object(O.a)(a.context,f);case 18:if("function"!=typeof S.default){t.next=21;break}return t.next=21,Object(S.default)(a.context,f);case 21:t.next=24;break;case 24:return t.abrupt("return",{app:a,router:n,store:r});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(b.a.name,b.a),m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var T={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},srTi:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,l=!1,d=void 0;try{for(var f,p=o()(i);!(c=(f=p.next()).done);c=!0){var h=f.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){l=!0,d=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw d}}e.a=u},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{locales:["en","es","cn","ja","fr"],locale:"en"}},o={SET_LOCALE:function(t,e){-1!==t.locales.indexOf(e)&&(t.locale=e)}}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("7zck"),u=(n.n(s),n("eMls")),c=(n.n(u),{_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),l={};e.a={head:{title:"SiteWhere Community Website",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"google-site-verification",content:"_toH0jMl-zSgM3y_Hqo3Y-ehcIFMyxqwd55Kc462yrM"},{hid:"description",name:"description",content:"SiteWhere Community Website"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&l["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=l[e],this.layout},loadLayout:function(t){var e=this;t&&(c["_"+t]||l["_"+t])||(t="default");var n="_"+t;return l[n]?o.a.resolve(l[n]):c[n]().then(function(t){return l[n]=t,delete c[n],l[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);