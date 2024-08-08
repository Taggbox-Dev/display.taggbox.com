/*! For license information please see 1774.b86ed644.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1774],{11774:(n,t,e)=>{e.d(t,{Gj:()=>be,jw:()=>Ee,tv:()=>we});var i=e(47313);function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var r="(prefers-reduced-motion: reduce)",u=4,s=5,a={CREATED:1,MOUNTED:2,IDLE:3,MOVING:u,SCROLLING:s,DRAGGING:6,DESTROYED:7};function c(n){n.length=0}function l(n,t,e){return Array.prototype.slice.call(n,t,e)}function f(n){return n.bind.apply(n,[null].concat(l(arguments,1)))}var d=setTimeout,p=function(){};function v(n){return requestAnimationFrame(n)}function h(n,t){return typeof t===n}function g(n){return!E(n)&&h("object",n)}var m=Array.isArray,y=f(h,"function"),b=f(h,"string"),w=f(h,"undefined");function E(n){return null===n}function S(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function x(n){return m(n)?n:[n]}function k(n,t){x(n).forEach(t)}function P(n,t){return n.indexOf(t)>-1}function C(n,t){return n.push.apply(n,x(t)),n}function _(n,t,e){n&&k(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function A(n,t){_(n,b(t)?t.split(" "):t,!0)}function L(n,t){k(t,n.appendChild.bind(n))}function M(n,t){k(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function D(n,t){return S(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function N(n,t){var e=n?l(n.children):[];return t?e.filter((function(n){return D(n,t)})):e}function O(n,t){return t?N(n,t)[0]:n.firstElementChild}var z=Object.keys;function j(n,t,e){return n&&(e?z(n).reverse():z(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function R(n){return l(arguments,1).forEach((function(t){j(t,(function(e,i){n[i]=t[i]}))})),n}function I(n){return l(arguments,1).forEach((function(t){j(t,(function(t,e){m(t)?n[e]=t.slice():g(t)?n[e]=I({},g(n[e])?n[e]:{},t):n[e]=t}))})),n}function T(n,t){k(t||z(n),(function(t){delete n[t]}))}function F(n,t){k(n,(function(n){k(t,(function(t){n&&n.removeAttribute(t)}))}))}function W(n,t,e){g(t)?j(t,(function(t,e){W(n,e,t)})):k(n,(function(n){E(e)||""===e?F(n,t):n.setAttribute(t,String(e))}))}function G(n,t,e){var i=document.createElement(n);return t&&(b(t)?A(i,t):W(i,t)),e&&L(e,i),i}function X(n,t,e){if(w(e))return getComputedStyle(n)[t];E(e)||(n.style[t]=""+e)}function U(n,t){X(n,"display",t)}function B(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function H(n,t){return n.getAttribute(t)}function Y(n,t){return n&&n.classList.contains(t)}function q(n){return n.getBoundingClientRect()}function K(n){k(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function V(n){return O((new DOMParser).parseFromString(n,"text/html").body)}function J(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function Q(n,t){return n&&n.querySelector(t)}function Z(n,t){return t?l(n.querySelectorAll(t)):[]}function $(n,t){_(n,t,!1)}function nn(n){return n.timeStamp}function tn(n){return b(n)?n:n?n+"px":""}var en="splide",on="data-"+en;function rn(n,t){if(!n)throw new Error("["+en+"] "+(t||""))}var un=Math.min,sn=Math.max,an=Math.floor,cn=Math.ceil,ln=Math.abs;function fn(n,t,e){return ln(n-t)<e}function dn(n,t,e,i){var o=un(t,e),r=sn(t,e);return i?o<n&&n<r:o<=n&&n<=r}function pn(n,t,e){var i=un(t,e),o=sn(t,e);return un(sn(i,n),o)}function vn(n){return+(n>0)-+(n<0)}function hn(n,t){return k(t,(function(t){n=n.replace("%s",""+t)})),n}function gn(n){return n<10?"0"+n:""+n}var mn={};function yn(){var n=[];function t(n,t,e){k(n,(function(n){n&&k(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,s=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,s])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),c(n)}}}var bn="mounted",wn="ready",En="move",Sn="moved",xn="click",kn="active",Pn="inactive",Cn="visible",_n="hidden",An="refresh",Ln="updated",Mn="resize",Dn="resized",Nn="drag",On="dragging",zn="dragged",jn="scroll",Rn="scrolled",In="destroy",Tn="arrows:mounted",Fn="arrows:updated",Wn="pagination:mounted",Gn="pagination:updated",Xn="navigation:mounted",Un="autoplay:play",Bn="autoplay:playing",Hn="autoplay:pause",Yn="lazyload:loaded",qn="sk",Kn="sh",Vn="ei";function Jn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=yn();return n&&n.event.on(In,e.destroy),R(e,{bus:t,on:function(n,i){e.bind(t,x(n).join(" "),(function(n){i.apply(i,m(n.detail)?n.detail:[])}))},off:f(e.unbind,t),emit:function(n){e.dispatch(t,n,l(arguments,1))}})}function Qn(n,t,e,i){var o,r,u=Date.now,s=0,a=!0,c=0;function l(){if(!a){if(s=n?un((u()-o)/n,1):1,e&&e(s),s>=1&&(t(),o=u(),i&&++c>=i))return f();r=v(l)}}function f(){a=!0}function d(){r&&cancelAnimationFrame(r),s=0,r=0,a=!0}return{start:function(t){t||d(),o=u()-(t?s*n:0),a=!1,r=v(l)},rewind:function(){o=u(),s=0,e&&e(s)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return a}}}var Zn="Arrow",$n=Zn+"Left",nt=Zn+"Right",tt=Zn+"Up",et=Zn+"Down",it="ttb",ot={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[tt,nt],ArrowRight:[et,$n]};var rt="role",ut="tabindex",st="aria-",at=st+"controls",ct=st+"current",lt=st+"selected",ft=st+"label",dt=st+"labelledby",pt=st+"hidden",vt=st+"orientation",ht=st+"roledescription",gt=st+"live",mt=st+"busy",yt=st+"atomic",bt=[rt,ut,"disabled",at,ct,ft,dt,pt,vt,ht],wt=en+"__",Et="is-",St=en,xt=wt+"track",kt=wt+"list",Pt=wt+"slide",Ct=Pt+"--clone",_t=Pt+"__container",At=wt+"arrows",Lt=wt+"arrow",Mt=Lt+"--prev",Dt=Lt+"--next",Nt=wt+"pagination",Ot=Nt+"__page",zt=wt+"progress"+"__bar",jt=wt+"toggle",Rt=wt+"sr",It=Et+"initialized",Tt=Et+"active",Ft=Et+"prev",Wt=Et+"next",Gt=Et+"visible",Xt=Et+"loading",Ut=Et+"focus-in",Bt=Et+"overflow",Ht=[Tt,Gt,Ft,Wt,Xt,Ut,Bt],Yt={slide:Pt,clone:Ct,arrows:At,arrow:Lt,prev:Mt,next:Dt,pagination:Nt,page:Ot,spinner:wt+"spinner"};var qt="touchstart mousedown",Kt="touchmove mousemove",Vt="touchend touchcancel mouseup click";var Jt="slide",Qt="loop",Zt="fade";function $t(n,t,e,i){var o,r=Jn(n),a=r.on,c=r.emit,l=r.bind,d=n.Components,p=n.root,v=n.options,h=v.isNavigation,g=v.updateOnMove,m=v.i18n,y=v.pagination,b=v.slideFocus,w=d.Direction.resolve,E=H(i,"style"),S=H(i,ft),x=e>-1,k=O(i,"."+_t);function P(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");W(i,ft,hn(m.slideX,(x?e:t)+1)),W(i,at,o),W(i,rt,b?"button":""),b&&F(i,ht)}function C(){o||A()}function A(){if(!o){var e=n.index;!function(){var n=L();n!==Y(i,Tt)&&(_(i,Tt,n),W(i,ct,h&&n||""),c(n?kn:Pn,M))}(),function(){var t=function(){if(n.is(Zt))return L();var t=q(d.Elements.track),e=q(i),o=w("left",!0),r=w("right",!0);return an(t[o])<=cn(e[o])&&an(e[r])<=cn(t[r])}(),e=!t&&(!L()||x);n.state.is([u,s])||W(i,pt,e||"");W(Z(i,v.focusableNodes||""),ut,e?-1:""),b&&W(i,ut,e?-1:0);t!==Y(i,Gt)&&(_(i,Gt,t),c(t?Cn:_n,M));if(!t&&document.activeElement===i){var o=d.Slides.getAt(n.index);o&&B(o.slide)}}(),_(i,Ft,t===e-1),_(i,Wt,t===e+1)}}function L(){var i=n.index;return i===t||v.cloneStatus&&i===e}var M={index:t,slideIndex:e,slide:i,container:k,isClone:x,mount:function(){x||(i.id=p.id+"-slide"+gn(t+1),W(i,rt,y?"tabpanel":"group"),W(i,ht,m.slide),W(i,ft,S||hn(m.slideLabel,[t+1,n.length]))),l(i,"click",f(c,xn,M)),l(i,"keydown",f(c,qn,M)),a([Sn,Kn,Rn],A),a(Xn,P),g&&a(En,C)},destroy:function(){o=!0,r.destroy(),$(i,Ht),F(i,bt),W(i,"style",E),W(i,ft,S||"")},update:A,style:function(n,t,e){X(e&&k||i,n,t)},isWithin:function(e,i){var o=ln(e-t);return x||!v.rewind&&!n.is(Qt)||(o=un(o,n.length-o)),o<=i}};return M}var ne=on+"-interval";var te={passive:!1,capture:!0};var ee={Spacebar:" ",Right:nt,Left:$n,Up:tt,Down:et};function ie(n){return n=b(n)?n:n.key,ee[n]||n}var oe="keydown";var re=on+"-lazy",ue=re+"-srcset",se="["+re+"], ["+ue+"]";var ae=[" ","Enter"];var ce=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},u=e.reducedMotion||{},s=yn(),a=[];function c(n){n&&s.destroy()}function l(n,t){var e=matchMedia(t);s.bind(e,"change",f),a.push([n,e])}function f(){var t=i.is(7),o=e.direction,r=a.reduce((function(n,t){return I(n,t[1].matches?t[0]:{})}),{});T(e),d(r),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):o!==e.direction&&n.refresh()}function d(t,o,r){I(e,t),o&&I(Object.getPrototypeOf(e),t),!r&&i.is(1)||n.emit(Ln,e)}return{setup:function(){var n="min"===e.mediaQuery;z(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,r),f()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?I(e,u):T(e,z(u)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===it?0:-1:1;return ot[n]&&ot[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=ot[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,o,r,u=Jn(n),s=u.on,a=u.bind,l=n.root,f=e.i18n,d={},p=[],v=[],h=[];function g(){i=w("."+xt),o=O(i,"."+kt),rn(i&&o,"A track/list element is missing."),C(p,N(o,"."+Pt+":not(."+Ct+")")),j({arrows:At,pagination:Nt,prev:Mt,next:Dt,bar:zt,toggle:jt},(function(n,t){d[t]=w("."+n)})),R(d,{root:l,track:i,list:o,slides:p}),function(){var n=l.id||(r=en,""+r+gn(mn[r]=(mn[r]||0)+1)),t=e.role;var r;l.id=n,i.id=i.id||n+"-track",o.id=o.id||n+"-list",!H(l,rt)&&"SECTION"!==l.tagName&&t&&W(l,rt,t);W(l,ht,f.carousel),W(o,rt,"presentation")}(),b()}function m(n){var t=bt.concat("style");c(p),$(l,v),$(i,h),F([i,o],t),F(l,n?t:["style",ht])}function b(){$(l,v),$(i,h),v=E(St),h=E(xt),A(l,v),A(i,h),W(l,ft,e.label),W(l,dt,e.labelledby)}function w(n){var t=Q(l,n);return t&&function(n,t){if(y(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!D(e,t);)e=e.parentElement;return e}(t,"."+St)===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===St&&Tt]}return R(d,{setup:g,mount:function(){s(An,m),s(An,g),s(Ln,b),a(document,qt+" keydown",(function(n){r="keydown"===n.type}),{capture:!0}),a(l,"focusin",(function(){_(l,Ut,!!r)}))},destroy:m})},Slides:function(n,t,e){var i=Jn(n),o=i.on,r=i.emit,u=i.bind,s=t.Elements,a=s.slides,l=s.list,d=[];function p(){a.forEach((function(n,t){h(n,t,-1)}))}function v(){m((function(n){n.destroy()})),c(d)}function h(t,e,i){var o=$t(n,e,i,t);o.mount(),d.push(o),d.sort((function(n,t){return n.index-t.index}))}function g(n){return n?w((function(n){return!n.isClone})):d}function m(n,t){g(t).forEach(n)}function w(n){return d.filter(y(n)?n:function(t){return b(n)?D(t.slide,n):P(x(n),t.index)})}return{mount:function(){p(),o(An,v),o(An,p)},destroy:v,update:function(){m((function(n){n.update()}))},register:h,get:g,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return w((function(n){return dn(n.index,o,o+r-1)}))},getAt:function(n){return w(n)[0]},add:function(n,t){k(n,(function(n){if(b(n)&&(n=V(n)),S(n)){var i=a[t];i?M(n,i):L(l,n),A(n,e.classes.slide),function(n,t){var e=Z(n,"img"),i=e.length;i?e.forEach((function(n){u(n,"load error",(function(){--i||t()}))})):t()}(n,f(r,Mn))}})),r(An)},remove:function(n){K(w(n).map((function(n){return n.slide}))),r(An)},forEach:m,filter:w,style:function(n,t,e){m((function(i){i.style(n,t,e)}))},getLength:function(n){return n?a.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,o,r,u=Jn(n),s=u.on,a=u.bind,c=u.emit,l=t.Slides,d=t.Direction.resolve,p=t.Elements,v=p.root,h=p.track,m=p.list,y=l.getAt,b=l.style;function w(){i=e.direction===it,X(v,"maxWidth",tn(e.width)),X(h,d("paddingLeft"),S(!1)),X(h,d("paddingRight"),S(!0)),E(!0)}function E(n){var t=q(v);(n||o.width!==t.width||o.height!==t.height)&&(X(h,"height",function(){var n="";i&&(rn(n=x(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")");return n}()),b(d("marginRight"),tn(e.gap)),b("width",e.autoWidth?null:tn(e.fixedWidth)||(i?"":k())),b("height",tn(e.fixedHeight)||(i?e.autoHeight?null:k():x()),!0),o=t,c(Dn),r!==(r=D())&&(_(v,Bt,r),c("overflow",r)))}function S(n){var t=e.padding,i=d(n?"right":"left");return t&&tn(t[i]||(g(t)?0:t))||"0px"}function x(){return tn(e.height||q(m).width*e.heightRatio)}function k(){var n=tn(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function P(){return q(m)[d("width")]}function C(n,t){var e=y(n||0);return e?q(e.slide)[d("width")]+(t?0:M()):0}function A(n,t){var e=y(n);if(e){var i=q(e.slide)[d("right")],o=q(m)[d("left")];return ln(i-o)+(t?0:M())}return 0}function L(t){return A(n.length-1)-A(0)+C(0,t)}function M(){var n=y(0);return n&&parseFloat(X(n.slide,d("marginRight")))||0}function D(){return n.is(Zt)||L(!0)>P()}return{mount:function(){w(),a(window,"resize load",function(n,t){var e=Qn(t||0,n,null,1);return function(){e.isPaused()&&e.start()}}(f(c,Mn))),s([Ln,An],w),s(Mn,E)},resize:E,listSize:P,slideSize:C,sliderSize:L,totalSize:A,getPadding:function(n){return parseFloat(X(h,d("padding"+(n?"Right":"Left"))))||0},isOverflow:D}},Clones:function(n,t,e){var i,o=Jn(n),r=o.on,u=t.Elements,s=t.Slides,a=t.Direction.resolve,l=[];function f(){r(An,d),r([Ln,Mn],v),(i=h())&&(!function(t){var i=s.get().slice(),o=i.length;if(o){for(;i.length<t;)C(i,i);C(i.slice(-t),i.slice(0,t)).forEach((function(r,a){var c=a<t,f=function(t,i){var o=t.cloneNode(!0);return A(o,e.classes.clone),o.id=n.root.id+"-clone"+gn(i+1),o}(r.slide,a);c?M(f,i[0].slide):L(u.list,f),C(l,f),s.register(f,a-t+(c?0:o),r.index)}))}}(i),t.Layout.resize(!0))}function d(){p(),f()}function p(){K(l),c(l),o.destroy()}function v(){var n=h();i!==n&&(i<n||!n)&&o.emit(An)}function h(){var i=e.clones;if(n.is(Qt)){if(w(i)){var o=e[a("fixedWidth")]&&t.Layout.slideSize(0);i=o&&cn(q(u.track)[a("width")]/o)||e[a("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(n,t,e){var i,o=Jn(n),r=o.on,s=o.emit,a=n.state.set,c=t.Layout,l=c.slideSize,f=c.getPadding,d=c.totalSize,p=c.listSize,v=c.sliderSize,h=t.Direction,g=h.resolve,m=h.orient,y=t.Elements,b=y.list,E=y.track;function S(){t.Controller.isBusy()||(t.Scroll.cancel(),x(n.index),t.Slides.update())}function x(n){k(A(n,!0))}function k(e,i){if(!n.is(Zt)){var o=i?e:function(e){if(n.is(Qt)){var i=_(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=P(e,o))}return e}(e);X(b,"transform","translate"+g("X")+"("+o+"px)"),e!==o&&s(Kn)}}function P(n,t){var e=n-M(t),i=v();return n-=m(i*(cn(ln(e)/i)||1))*(t?1:-1)}function C(){k(L(),!0),i.cancel()}function _(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,s=ln(A(u,!0)-n);if(!(s<=o))break;o=s,i=u}return i}function A(t,i){var o=m(d(t-1)-function(n){var t=e.focus;return"center"===t?(p()-l(n,!0))/2:+t*l(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Jt)&&(t=pn(t,0,m(v(!0)-p())));return t}(o):o}function L(){var n=g("left");return q(b)[n]-q(E)[n]+m(f(!1))}function M(n){return A(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([bn,Dn,Ln,An],S)},move:function(n,t,e,o){n!==t&&function(n){var t=m(P(L(),n));return n?t>=0:t<=b[g("scrollWidth")]-q(E)[g("width")]}(n>e)&&(C(),k(P(L(),n>e),!0)),a(u),s(En,t,e,n),i.start(t,(function(){a(3),s(Sn,t,e,n),o&&o()}))},jump:x,translate:k,shift:P,cancel:C,toIndex:_,toPosition:A,getPosition:L,getLimit:M,exceededLimit:function(n,t){t=w(t)?L():t;var e=!0!==n&&m(t)<m(M(!1)),i=!1!==n&&m(t)>m(M(!0));return e||i},reposition:S}},Controller:function(n,t,e){var i,o,r,a,c=Jn(n),l=c.on,d=c.emit,p=t.Move,v=p.getPosition,h=p.getLimit,g=p.toPosition,m=t.Slides,y=m.isEnough,E=m.getLength,S=e.omitEnd,x=n.is(Qt),k=n.is(Jt),P=f(D,!1),C=f(D,!0),_=e.start||0,A=_;function L(){o=E(!0),r=e.perMove,a=e.perPage,i=z();var n=pn(_,0,S?i:o-1);n!==_&&(_=n,p.reposition())}function M(){i!==z()&&d(Vn)}function D(n,t){var e=r||(T()?1:a),o=N(_+e*(n?-1:1),_,!(r||T()));return-1===o&&k&&!fn(v(),h(!n),1)?n?0:i:t?o:O(o)}function N(t,u,s){if(y()||T()){var c=function(t){if(k&&"move"===e.trimSpace&&t!==_)for(var i=v();i===g(t,!0)&&dn(t,0,n.length-1,!e.rewind);)t<_?--t:++t;return t}(t);c!==t&&(u=t,t=c,s=!1),t<0||t>i?t=r||!dn(0,t,u,!0)&&!dn(i,u,t,!0)?x?s?t<0?-(o%a||a):o:t:e.rewind?t<0?i:0:-1:j(R(t)):s&&t!==u&&(t=j(R(u)+(t<u?-1:1)))}else t=-1;return t}function O(n){return x?(n+o)%o||0:n}function z(){for(var n=o-(T()||x&&r?1:a);S&&n-- >0;)if(g(o-1,!0)!==g(n,!0)){n++;break}return pn(n,0,o-1)}function j(n){return pn(T()?n:a*n,0,i)}function R(n){return T()?un(n,i):an((n>=i?o-1:n)/a)}function I(n){n!==_&&(A=_,_=n)}function T(){return!w(e.focus)||e.isNavigation}function F(){return n.state.is([u,s])&&!!e.waitForTransition}return{mount:function(){L(),l([Ln,An,Vn],L),l(Dn,M)},go:function(n,t,e){if(!F()){var o=function(n){var t=_;if(b(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?t=N(_+ +(""+o+(+r||1)),_):">"===o?t=r?j(+r):P(!0):"<"===o&&(t=C(!0))}else t=x?n:pn(n,0,i);return t}(n),r=O(o);r>-1&&(t||r!==_)&&(I(r),p.move(o,r,A,e))}},scroll:function(n,e,o,r){t.Scroll.scroll(n,e,o,(function(){var n=O(p.toIndex(v()));I(S?un(n,i):n),r&&r()}))},getNext:P,getPrev:C,getAdjacent:D,getEnd:z,setIndex:I,getIndex:function(n){return n?A:_},toIndex:j,toPage:R,toDest:function(n){var t=p.toIndex(n);return k?pn(t,0,i):t},hasFocus:T,isBusy:F}},Arrows:function(n,t,e){var i,o,r=Jn(n),u=r.on,s=r.bind,a=r.emit,c=e.classes,l=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,h=d.track,g=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(g=v||G("div",c.arrows),m=k(!0),y=k(!1),i=!0,L(g,[m,y]),!v&&M(g,h));m&&y&&(R(b,{prev:m,next:y}),U(g,n?"":"none"),A(g,o=At+"--"+e.direction),n&&(u([bn,Sn,An,Rn,Vn],P),s(y,"click",f(x,">")),s(m,"click",f(x,"<")),P(),W([m,y],at,h.id),a(Tn,m,y)))}(),u(Ln,E)}function E(){S(),w()}function S(){r.destroy(),$(g,o),i?(K(v?[m,y]:g),m=y=null):F([m,y],bt)}function x(n){p.go(n,!0)}function k(n){return V('<button class="'+c.arrow+" "+(n?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?l.last:l.prev,r=i>-1&&t>i?l.first:l.next;m.disabled=e<0,y.disabled=i<0,W(m,ft,o),W(y,ft,r),a(Fn,m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:P}},Autoplay:function(n,t,e){var i,o,r=Jn(n),u=r.on,s=r.bind,a=r.emit,c=Qn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&X(t,"width",100*n+"%"),a(Bn,n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=g=!1,w(),a(Un))}function y(n){void 0===n&&(n=!0),g=!!n,w(),l()||(c.pause(),a(Hn))}function b(){g||(i||o?y(!1):m())}function w(){v&&(_(v,Tt,!g),W(v,ft,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+H(i.slide,ne)||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&s(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&s(p,"focusin focusout",(function(n){o="focusin"===n.type,b()}));v&&s(v,"click",(function(){g?m():y(!0)}));u([En,jn,An],c.rewind),u(En,E)}(),v&&W(v,at,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=Jn(n).on;function o(n){t.Slides.forEach((function(t){var e=O(t.container||t.slide,"img");e&&e.src&&r(n,e,t)}))}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),U(t,n?"none":"")}return{mount:function(){e.cover&&(i(Yn,f(r,!0)),i([bn,Ln,An],f(o,!0)))},destroy:f(o,!1)}},Scroll:function(n,t,e){var i,o,r=Jn(n),u=r.on,a=r.emit,c=n.state.set,l=t.Move,d=l.getPosition,p=l.getLimit,v=l.exceededLimit,h=l.translate,g=n.is(Jt),m=1;function y(n,e,r,u,p){var h=d();if(E(),r&&(!g||!v())){var y=t.Layout.sliderSize(),S=vn(n)*y*an(ln(n)/y)||0;n=l.toPosition(t.Controller.toDest(n%y))+S}var x=fn(h,n,1);m=1,e=x?0:e||sn(ln(n-h)/1.5,800),o=u,i=Qn(e,b,f(w,h,n,p),1),c(s),a(jn),i.start()}function b(){c(3),o&&o(),a(Rn)}function w(n,t,i,r){var u=d(),s=(n+(t-n)*function(n){var t=e.easingFunc;return t?t(n):1-Math.pow(1-n,4)}(r)-u)*m;h(u+s),g&&!i&&v()&&(m*=.6,ln(s)<10&&y(p(v(!0)),600,!1,o,!0))}function E(){i&&i.cancel()}function S(){i&&!i.isPaused()&&(E(),b())}return{mount:function(){u(En,E),u([Ln,An],S)},destroy:E,scroll:y,cancel:S}},Drag:function(n,t,e){var i,o,r,a,c,l,f,d,v=Jn(n),h=v.on,m=v.emit,y=v.bind,b=v.unbind,w=n.state,E=t.Move,S=t.Scroll,x=t.Controller,k=t.Elements.track,P=t.Media.reduce,C=t.Direction,_=C.resolve,A=C.orient,L=E.getPosition,M=E.exceededLimit,N=!1;function O(){var n=e.drag;B(!n),a="free"===n}function z(n){if(l=!1,!f){var t=U(n);!function(n){var t=e.noDrag;return!D(n,"."+Ot+", ."+Lt)&&(!t||!D(n,t))}(n.target)||!t&&n.button||(x.isBusy()?J(n,!0):(d=t?k:window,c=w.is([u,s]),r=null,y(d,Kt,j,te),y(d,Vt,R,te),E.cancel(),S.cancel(),T(n)))}}function j(t){if(w.is(6)||(w.set(6),m(Nn)),t.cancelable)if(c){E.translate(i+F(t)/(N&&n.is(Jt)?5:1));var o=W(t)>200,r=N!==(N=M());(o||r)&&T(t),l=!0,m(On),J(t)}else(function(n){return ln(F(n))>ln(F(n,!0))})(t)&&(c=function(n){var t=e.dragMinThreshold,i=g(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return ln(F(n))>(U(n)?r:o)}(t),J(t))}function R(i){w.is(6)&&(w.set(3),m(zn)),c&&(!function(i){var o=function(t){if(n.is(Qt)||!N){var e=W(t);if(e&&e<200)return F(t)/e}return 0}(i),r=function(n){return L()+vn(n)*un(ln(n)*(e.flickPower||600),a?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),u=e.rewind&&e.rewindByDrag;P(!1),a?x.scroll(r,0,e.snap):n.is(Zt)?x.go(A(vn(o))<0?u?"<":"-":u?">":"+"):n.is(Jt)&&N&&u?x.go(M(!0)?">":"<"):x.go(x.toDest(r),!0);P(!0)}(i),J(i)),b(d,Kt,j),b(d,Vt,R),c=!1}function I(n){!f&&l&&J(n,!0)}function T(n){r=o,o=n,i=L()}function F(n,t){return X(n,t)-X(G(n),t)}function W(n){return nn(n)-nn(G(n))}function G(n){return o===n&&r||o}function X(n,t){return(U(n)?n.changedTouches[0]:n)["page"+_(t?"Y":"X")]}function U(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function B(n){f=n}return{mount:function(){y(k,Kt,p,te),y(k,Vt,p,te),y(k,qt,z,te),y(k,"click",I,{capture:!0}),y(k,"dragstart",J),h([bn,Ln],O)},disable:B,isDragging:function(){return c}}},Keyboard:function(n,t,e){var i,o,r=Jn(n),u=r.on,s=r.bind,a=r.unbind,c=n.root,l=t.Direction.resolve;function f(){var n=e.keyboard;n&&(i="global"===n?window:c,s(i,oe,h))}function p(){a(i,oe)}function v(){var n=o;o=!0,d((function(){o=n}))}function h(t){if(!o){var e=ie(t);e===l($n)?n.go("<"):e===l(nt)&&n.go(">")}}return{mount:function(){f(),u(Ln,p),u(Ln,f),u(En,v)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var i=Jn(n),o=i.on,r=i.off,u=i.bind,s=i.emit,a="sequential"===e.lazyLoad,l=[Sn,Rn],d=[];function p(){c(d),t.Slides.forEach((function(n){Z(n.slide,se).forEach((function(t){var i=H(t,re),o=H(t,ue);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,u=t.parentElement,s=O(u,"."+r)||G("span",r,u);d.push([t,n,s]),t.src||U(t,"none")}}))})),a?m():(r(l),o(l,v),v())}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||h(t)}))).length||r(l)}function h(n){var t=n[0];A(n[1].slide,Xt),u(t,"load error",f(g,n)),W(t,"src",H(t,re)),W(t,"srcset",H(t,ue)),F(t,re),F(t,ue)}function g(n,t){var e=n[0],i=n[1];$(i.slide,Xt),"error"!==t.type&&(K(n[2]),U(e,""),s(Yn,e,i),s(Mn)),a&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(p(),o(An,p))},destroy:f(c,d),check:v}},Pagination:function(n,t,e){var i,o,r=Jn(n),u=r.on,s=r.emit,a=r.bind,d=t.Slides,p=t.Elements,v=t.Controller,h=v.hasFocus,g=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function E(){i&&(K(b?l(i.children):i),$(i,o),c(w),i=null),r.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=ie(t),o=k(),r=-1;i===y(nt,!1,o)?r=++n%e:i===y($n,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(B(u.button),m(">"+r),J(t,!0))}function k(){return e.paginationDirection||e.direction}function P(n){return w[v.toPage(n)]}function C(){var n=P(g(!0)),t=P(g());if(n){var e=n.button;$(e,Tt),F(e,lt),W(e,ut,-1)}if(t){var o=t.button;A(o,Tt),W(o,lt,!0),W(o,ut,"")}s(Gn,{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),u([Ln,An,Vn],t);var r=e.pagination;b&&U(b,r?"":"none"),r&&(u([En,jn,Rn],C),function(){var t=n.length,r=e.classes,u=e.i18n,s=e.perPage,c=h()?v.getEnd()+1:cn(t/s);A(i=b||G("ul",r.pagination,p.track.parentElement),o=Nt+"--"+k()),W(i,rt,"tablist"),W(i,ft,u.select),W(i,vt,k()===it?"vertical":"");for(var l=0;l<c;l++){var g=G("li",null,i),m=G("button",{class:r.page,type:"button"},g),y=d.getIn(l).map((function(n){return n.slide.id})),E=!h()&&s>1?u.pageX:u.slideX;a(m,"click",f(S,l)),e.paginationKeyboard&&a(m,"keydown",f(x,l)),W(g,rt,"presentation"),W(m,rt,"tab"),W(m,at,y.join(" ")),W(m,ft,hn(E,l+1)),W(m,ut,-1),w.push({li:g,button:m,page:l})}}(),C(),s(Wn,{list:i,items:w},P(n.index)))},destroy:E,getAt:P,update:C}},Sync:function(n,t,e){var i=e.isNavigation,o=e.slideFocus,r=[];function u(){n.splides.forEach((function(t){t.isParent||(a(n,t.splide),a(t.splide,n))})),i&&function(){var t=Jn(n),e=t.on;e(xn,d),e(qn,p),e([bn,Ln],l),r.push(t),t.emit(Xn,n.splides)}()}function s(){r.forEach((function(n){n.destroy()})),c(r)}function a(n,t){var e=Jn(n);e.on(En,(function(n,e,i){t.go(t.is(Qt)?i:n)})),r.push(e)}function l(){W(t.Elements.list,vt,e.direction===it?"vertical":"")}function d(t){n.go(t.index)}function p(n,t){P(ae,ie(t))&&(d(n),J(t))}return{setup:f(t.Media.set,{slideFocus:w(o)?i:o},!0),mount:u,destroy:s,remount:function(){s(),u()}}},Wheel:function(n,t,e){var i=Jn(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,s=r<0,a=nn(i),c=e.wheelMinThreshold||0,l=e.wheelSleep||0;ln(r)>c&&a-o>l&&(n.go(s?"<":">"),o=a),function(i){return!e.releaseWheel||n.state.is(u)||-1!==t.Controller.getAdjacent(i)}(s)&&J(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,te)}}},Live:function(n,t,e){var i=Jn(n).on,o=t.Elements.track,r=e.live&&!e.isNavigation,u=G("span",Rt),s=Qn(90,f(a,!1));function a(n){W(o,mt,n),n?(L(o,u),s.start()):(K(u),s.cancel())}function c(n){r&&W(o,gt,n?"off":"polite")}return{mount:function(){r&&(c(!t.Autoplay.isPaused()),W(o,yt,!0),u.textContent="\u2026",i(Un,f(c,!0)),i(Hn,f(c,!1)),i([Sn,Rn],f(a,!0)))},disable:c,destroy:function(){F(o,[gt,yt,mt]),K(u)}}}}),le={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Yt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function fe(n,t,e){var i=t.Slides;function o(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){Jn(n).on([bn,An],o)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),d(t)},cancel:p}}function de(n,t,e){var i,o=t.Move,r=t.Controller,u=t.Scroll,s=t.Elements.list,a=f(X,s,"transition");function c(){a(""),u.cancel()}return{mount:function(){Jn(n).bind(s,"transitionend",(function(n){n.target===s&&i&&(c(),i())}))},start:function(t,s){var c=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Jt)&&i){var o=r.getIndex(!0),u=r.getEnd();if(0===o&&t>=u||o>=u&&0===t)return i}return e.speed}(t);ln(c-l)>=1&&f>=1?e.useScroll?u.scroll(c,f,!1,s):(a("transform "+f+"ms "+e.easing),o.translate(c,!0),i=s):(o.jump(t),s())},cancel:c}}var pe=function(){function n(t,e){this.event=Jn(),this.Components={},this.state=function(n){var t=n;return{set:function(n){t=n},is:function(n){return P(x(n),t)}}}(1),this.splides=[],this._o={},this._E={};var i=b(t)?Q(document,t):t;rn(i,i+" is invalid."),this.root=i,e=I({label:H(i,ft)||"",labelledby:H(i,dt)||""},le,n.defaults,e||{});try{I(e,JSON.parse(H(i,on)))}catch(o){rn(!1,"Invalid JSON")}this._o=Object.create(I({},e))}var t,e,i,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,o=this.Components;return rn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(Zt)?fe:de),this._E=n||this._E,j(R({},ce,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),j(o,(function(n){n.mount&&n.mount()})),this.emit(bn),A(this.root,It),i.set(3),this.emit(wn),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(l(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(An),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Jn(this).on(wn,this.destroy.bind(this,n)):(j(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(In),t.destroy(),n&&c(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}();pe.defaults={},pe.STATES=a;var ve=[[bn,"onMounted"],[wn,"onReady"],[En,"onMove"],[Sn,"onMoved"],[xn,"onClick"],[kn,"onActive"],[Pn,"onInactive"],[Cn,"onVisible"],[_n,"onHidden"],[An,"onRefresh"],[Ln,"onUpdated"],[Mn,"onResize"],[Dn,"onResized"],[Nn,"onDrag"],[On,"onDragging"],[zn,"onDragged"],[jn,"onScroll"],[Rn,"onScrolled"],[In,"onDestroy"],[Tn,"onArrowsMounted"],[Fn,"onArrowsUpdated"],[Wn,"onPaginationMounted"],[Gn,"onPaginationUpdated"],[Xn,"onNavigationMounted"],[Un,"onAutoplayPlay"],[Bn,"onAutoplayPlaying"],[Hn,"onAutoplayPause"],[Yn,"onLazyLoadLoaded"]];function he(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function ge(n){return null!==n&&"object"===typeof n}function me(n,t){if(Array.isArray(n)&&Array.isArray(t))return n.length===t.length&&!n.some(((n,e)=>!me(n,t[e])));if(ge(n)&&ge(t)){const e=Object.keys(n),i=Object.keys(t);return e.length===i.length&&!e.some((e=>!Object.prototype.hasOwnProperty.call(t,e)||!me(n[e],t[e])))}return n===t}function ye(n,t){const e=n;return function(n,t){if(n){const e=Object.keys(n);for(let i=0;i<e.length;i++){const o=e[i];if("__proto__"!==o&&!1===t(n[o],o))break}}}(t,((n,t)=>{Array.isArray(n)?e[t]=n.slice():ge(n)?e[t]=ye(ge(e[t])?e[t]:{},n):e[t]=n})),e}var be=n=>{let{children:t,className:e,...o}=n;return i.createElement("div",{className:he("splide__track",e),...o},i.createElement("ul",{className:"splide__list"},t))},we=class extends i.Component{constructor(){super(...arguments),this.splideRef=i.createRef(),this.slides=[]}componentDidMount(){const{options:n,extensions:t,transition:e}=this.props,{current:i}=this.splideRef;i&&(this.splide=new pe(i,n),this.bind(this.splide),this.splide.mount(t,e),this.options=ye({},n||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:n}=this.props;n&&!me(this.options,n)&&(this.splide.options=n,this.options=ye({},n));const t=this.getSlides();var e,i;e=this.slides,i=t,(e.length!==i.length||e.some(((n,t)=>n!==i[t])))&&(this.splide.refresh(),this.slides=t)}sync(n){var t;null==(t=this.splide)||t.sync(n)}go(n){var t;null==(t=this.splide)||t.go(n)}getSlides(){var n;if(this.splide){const t=null==(n=this.splide.Components.Elements)?void 0:n.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(n){ve.forEach((t=>{let[e,i]=t;const o=this.props[i];"function"===typeof o&&n.on(e,(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];o(n,...e)}))}))}omit(n,t){return t.forEach((t=>{Object.prototype.hasOwnProperty.call(n,t)&&delete n[t]})),n}render(){const{className:n,tag:t="div",hasTrack:e=!0,children:o,...r}=this.props;return i.createElement(t,{className:he("splide",n),ref:this.splideRef,...this.omit(r,["options",...ve.map((n=>n[1]))])},e?i.createElement(be,null,o):o)}},Ee=n=>{let{children:t,className:e,...o}=n;return i.createElement("li",{className:he("splide__slide",e),...o},t)}}}]);