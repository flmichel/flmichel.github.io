var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function l(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e,n,o){if(t){const l=u(t,e,n,o);return t[0](l)}}function u(t,e,o,l){return t[1]&&l?n(o.ctx.slice(),t[1](l(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}function d(t,e,n,o,l,r){if(l){const i=u(e,n,o,r);t.p(i,l)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){return null==t?"":t}const h="undefined"!=typeof window;let $=h?()=>window.performance.now():()=>Date.now(),g=h?t=>requestAnimationFrame(t):t;const b=new Set;function v(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&g(v)}function y(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function x(t){const e=j("style");return function(t,e){y(t.head||t,e)}(w(t),e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function _(){return S(" ")}function L(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let A;function z(){if(void 0===A){A=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){A=!0}}return A}function q(t,e,n){t.classList[n?"add":"remove"](e)}function I(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,o,e),l}const G=new Map;let H,B=0;function N(t,e,n,o,l,r,i,s=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*r(t);a+=100*t+`%{${i(o,1-o)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,d=w(t),{stylesheet:m,rules:p}=G.get(d)||function(t,e){const n={stylesheet:x(e),rules:{}};return G.set(t,n),n}(d,t);p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${l}ms 1 both`,B+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),l=n.length-o.length;l&&(t.style.animation=o.join(", "),B-=l,B||g((()=>{B||(G.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),G.clear())})))}function D(t){H=t}function W(){if(!H)throw new Error("Function called outside component initialization");return H}const O=[],J=[],V=[],U=[],Z=Promise.resolve();let Q=!1;function X(t){V.push(t)}const K=new Set;let Y,tt=0;function et(){const t=H;do{for(;tt<O.length;){const t=O[tt];tt++,D(t),nt(t.$$)}for(D(null),O.length=0,tt=0;J.length;)J.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];K.has(e)||(K.add(e),e())}V.length=0}while(O.length);for(;U.length;)U.pop()();Q=!1,K.clear(),D(t)}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function ot(t,e,n){t.dispatchEvent(I(`${e?"intro":"outro"}${n}`))}const lt=new Set;let rt;function it(){rt={r:0,c:[],p:rt}}function st(){rt.r||r(rt.c),rt=rt.p}function ct(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function at(t,e,n,o){if(t&&t.o){if(lt.has(t))return;lt.add(t),rt.c.push((()=>{lt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ut={duration:0};function ft(n,o,l,s){let c=o(n,l),a=s?0:1,u=null,f=null,d=null;function m(){d&&R(n,d)}function p(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:l=0,duration:i=300,easing:s=e,tick:h=t,css:y}=c||ut,w={start:$()+l,b:o};o||(w.group=rt,rt.r+=1),u||f?f=w:(y&&(m(),d=N(n,a,o,i,l,s,y)),o&&h(0,1),u=p(w,i),X((()=>ot(n,o,"start"))),function(t){let e;0===b.size&&g(v),new Promise((n=>{b.add(e={c:t,f:n})}))}((t=>{if(f&&t>f.start&&(u=p(f,i),f=null,ot(n,u.b,"start"),y&&(m(),d=N(n,a,u.b,u.duration,0,s,c.css))),u)if(t>=u.end)h(a=u.b,1-a),ot(n,u.b,"end"),f||(u.b?m():--u.group.r||r(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*s(e/u.duration),h(a,1-a)}return!(!u&&!f)})))}return{run(t){i(c)?(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then((()=>{c=c(),h(t)})):h(t)},end(){m(),u=f=null}}}const dt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){const n={},o={},l={$$scope:1};let r=t.length;for(;r--;){const i=t[r],s=e[r];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)l[t]||(n[t]=s[t],l[t]=1);t[r]=s}else for(const t in i)l[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function ht(t){t&&t.c()}function $t(t,e,n,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,n),l||X((()=>{const e=c.map(o).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(X)}function gt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(O.push(t),Q||(Q=!0,Z.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(e,n,o,i,s,c,a,u=[-1]){const f=H;D(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:l(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),m&&bt(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(C)}else d.fragment&&d.fragment.c();n.intro&&ct(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),et()}D(f)}class yt{$destroy(){gt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=[];function xt(e,n=t){let o;const l=new Set;function r(t){if(s(e,t)&&(e=t,o)){const t=!wt.length;for(const t of l)t[1](),wt.push(t,e);if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,s=t){const c=[i,s];return l.add(c),1===l.size&&(o=n(r)||t),i(e),()=>{l.delete(c),0===l.size&&(o(),o=null)}}}}const kt=xt(!1),Ct=xt(!1);function Et(t){let e,n,o,l,r,i;const s=t[4].default,c=a(s,t,t[3],null);return{c(){e=j("span"),n=j("a"),c&&c.c(),M(n,"class",o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"),M(n,"href",t[0])},m(o,s){var a;k(o,e,s),y(e,n),c&&c.m(n,null),l=!0,r||(i=L(n,"click",(a=t[2],function(t){return t.preventDefault(),a.call(this,t)})),r=!0)},p(t,[e]){c&&c.p&&(!l||8&e)&&d(c,s,t,t[3],l?f(s,t[3],e,null):m(t[3]),null),(!l||2&e&&o!==(o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"))&&M(n,"class",o),(!l||1&e)&&M(n,"href",t[0])},i(t){l||(ct(c,t),l=!0)},o(t){at(c,t),l=!1},d(t){t&&C(e),c&&c.d(t),r=!1,i()}}}function jt(t,e,n){let{$$slots:o={},$$scope:l}=e;const r=function(){const t=W();return(e,n,{cancelable:o=!1}={})=>{const l=t.$$.callbacks[e];if(l){const r=I(e,n,{cancelable:o});return l.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}();let i,{segment:s}=e;return kt.subscribe((t=>{n(1,i=t)})),t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(3,l=t.$$scope)},[s,i,function({target:t}){const e=t.getAttribute("href");r("click",{section:document.querySelector(e),ref:e}),i&&Ct.set(!1)},l,o]}class Pt extends yt{constructor(t){super(),vt(this,t,jt,Et,s,{segment:0})}}function St(e){let n,o,l,r,s,c,a;return{c(){n=j("button"),o=P("svg"),l=P("path"),r=P("path"),s=P("path"),M(l,"class","top svelte-1ks11a7"),M(l,"d","m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"),M(r,"class","middle svelte-1ks11a7"),M(r,"d","m 30,50 h 40"),M(s,"class","bottom svelte-1ks11a7"),M(s,"d","m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"),M(o,"viewBox","0 0 100 100"),M(o,"fill","none"),M(o,"stroke","currentColor"),M(o,"stroke-width","5"),M(o,"width",e[3]),M(o,"class","svelte-1ks11a7"),q(o,"open",e[0]),M(n,"aria-expanded",e[0]),M(n,"aria-label",e[2]),M(n,"class","svelte-1ks11a7")},m(t,u){k(t,n,u),y(n,o),y(o,l),y(o,r),y(o,s),c||(a=L(n,"click",(function(){i(e[1])&&e[1].apply(this,arguments)})),c=!0)},p(t,[l]){e=t,8&l&&M(o,"width",e[3]),1&l&&q(o,"open",e[0]),1&l&&M(n,"aria-expanded",e[0]),4&l&&M(n,"aria-label",e[2])},i:t,o:t,d(t){t&&C(n),c=!1,a()}}}function _t(t,e,n){let{open:o=!1}=e,{onClick:l=(()=>{n(0,o=!o)})}=e,{ariaLabel:r="toggle menu"}=e,{width:i=80}=e;return t.$$set=t=>{"open"in t&&n(0,o=t.open),"onClick"in t&&n(1,l=t.onClick),"ariaLabel"in t&&n(2,r=t.ariaLabel),"width"in t&&n(3,i=t.width)},[o,l,r,i]}class Lt extends yt{constructor(t){super(),vt(this,t,_t,St,s,{open:0,onClick:1,ariaLabel:2,width:3})}}function Mt(t){const e=t-1;return e*e*e+1}function Ft(t,{delay:e=0,duration:n=400,easing:o=Mt,x:l=0,y:r=0,opacity:i=0}={}){const s=getComputedStyle(t),c=+s.opacity,a="none"===s.transform?"":s.transform,u=c*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*l}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-u*e}`}}const Tt=t=>({}),At=t=>({}),zt=t=>({}),qt=t=>({}),It=t=>({}),Gt=t=>({class:"home"});function Ht(t){let e,n;const o=t[5].center,l=a(o,t,t[4],qt);return{c(){e=j("div"),l&&l.c(),M(e,"class","horizontal")},m(t,o){k(t,e,o),l&&l.m(e,null),n=!0},p(t,e){l&&l.p&&(!n||16&e)&&d(l,o,t,t[4],n?f(o,t[4],e,zt):m(t[4]),qt)},i(t){n||(ct(l,t),n=!0)},o(t){at(l,t),n=!1},d(t){t&&C(e),l&&l.d(t)}}}function Bt(t){let e,n,o;return n=new Lt({props:{open:t[1],onClick:t[3],width:"30"}}),{c(){e=j("div"),ht(n.$$.fragment),M(e,"class","right svelte-1a3ag97")},m(t,l){k(t,e,l),$t(n,e,null),o=!0},p(t,e){const o={};2&e&&(o.open=t[1]),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function Nt(t){let e,n,o;const l=t[5].center,r=a(l,t,t[4],At);return{c(){e=j("div"),r&&r.c(),M(e,"class","vertical")},m(t,n){k(t,e,n),r&&r.m(e,null),o=!0},p(t,e){r&&r.p&&(!o||16&e)&&d(r,l,t,t[4],o?f(l,t[4],e,Tt):m(t[4]),At)},i(t){o||(ct(r,t),X((()=>{n||(n=ft(e,Ft,{y:-100,duration:400},!0)),n.run(1)})),o=!0)},o(t){at(r,t),n||(n=ft(e,Ft,{y:-100,duration:400},!1)),n.run(0),o=!1},d(t){t&&C(e),r&&r.d(t),t&&n&&n.end()}}}function Rt(t){let e,n,o,l,r,i,s;const c=t[5].left,u=a(c,t,t[4],Gt),p=[Bt,Ht],h=[];function $(t,e){return t[2]?0:1}l=$(t),r=h[l]=p[l](t);let g=t[1]&&Nt(t);return{c(){e=j("nav"),n=j("div"),u&&u.c(),o=_(),r.c(),i=_(),g&&g.c(),M(n,"class","bar svelte-1a3ag97"),T(e,"background-color",t[0]),M(e,"class","svelte-1a3ag97")},m(t,r){k(t,e,r),y(e,n),u&&u.m(n,null),y(n,o),h[l].m(n,null),y(e,i),g&&g.m(e,null),s=!0},p(t,[o]){u&&u.p&&(!s||16&o)&&d(u,c,t,t[4],s?f(c,t[4],o,It):m(t[4]),Gt);let i=l;l=$(t),l===i?h[l].p(t,o):(it(),at(h[i],1,1,(()=>{h[i]=null})),st(),r=h[l],r?r.p(t,o):(r=h[l]=p[l](t),r.c()),ct(r,1),r.m(n,null)),t[1]?g?(g.p(t,o),2&o&&ct(g,1)):(g=Nt(t),g.c(),ct(g,1),g.m(e,null)):g&&(it(),at(g,1,1,(()=>{g=null})),st()),(!s||1&o)&&T(e,"background-color",t[0])},i(t){s||(ct(u,t),ct(r),ct(g),s=!0)},o(t){at(u,t),at(r),at(g),s=!1},d(t){t&&C(e),u&&u.d(t),h[l].d(),g&&g.d()}}}function Dt(t,e,n){let o,l,{$$slots:r={},$$scope:i}=e,{color:s}=e;return kt.subscribe((t=>{n(2,l=t)})),Ct.subscribe((t=>{n(1,o=t)})),t.$$set=t=>{"color"in t&&n(0,s=t.color),"$$scope"in t&&n(4,i=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&Ct.set(o)},[s,o,l,()=>{n(1,o=!o)},i,r]}class Wt extends yt{constructor(t){super(),vt(this,t,Dt,Rt,s,{color:0})}}function Ot(e){let n,o,l,r,i,s,c,a,u,f,d,m,p,h,$,g,b;return{c(){n=j("link"),o=_(),l=j("div"),r=j("div"),i=j("h2"),s=S(e[0]),c=_(),a=j("div"),u=j("a"),f=S("Repo "),d=j("i"),m=_(),p=j("p"),h=_(),$=j("hr"),g=_(),b=j("p"),M(n,"rel","stylesheet"),M(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(i,"class","title svelte-1ya9by5"),M(d,"class","fa fa-github"),M(u,"href",e[2]),M(u,"class","button svelte-1ya9by5"),M(a,"class","repo svelte-1ya9by5"),M(r,"class","top svelte-1ya9by5"),M(p,"class","description"),M($,"class","separator svelte-1ya9by5"),M(b,"class","contribution"),M(l,"class","box svelte-1ya9by5"),T(l,"--top-color",e[4])},m(t,v){y(document.head,n),k(t,o,v),k(t,l,v),y(l,r),y(r,i),y(i,s),y(r,c),y(r,a),y(a,u),y(u,f),y(u,d),y(l,m),y(l,p),p.innerHTML=e[1],y(l,h),y(l,$),y(l,g),y(l,b),b.innerHTML=e[3]},p(t,[e]){1&e&&F(s,t[0]),4&e&&M(u,"href",t[2]),2&e&&(p.innerHTML=t[1]),8&e&&(b.innerHTML=t[3]),16&e&&T(l,"--top-color",t[4])},i:t,o:t,d(t){C(n),t&&C(o),t&&C(l)}}}function Jt(t,e,n){let{title:o}=e,{description:l}=e,{link:r}=e,{contribution:i}=e,{color:s}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,l=t.description),"link"in t&&n(2,r=t.link),"contribution"in t&&n(3,i=t.contribution),"color"in t&&n(4,s=t.color)},[o,l,r,i,s]}class Vt extends yt{constructor(t){super(),vt(this,t,Jt,Ot,s,{title:0,description:1,link:2,contribution:3,color:4})}}function Ut(e){let n,o,l,r,i,s;return{c(){n=j("div"),o=j("h3"),l=S(e[0]),r=_(),i=j("div"),s=j("div"),M(o,"class","svelte-93ljz6"),M(s,"id","level"),T(s,"width",e[1]),T(s,"background-color",e[2]),M(s,"class","svelte-93ljz6"),M(i,"id","progressbar"),M(i,"class","svelte-93ljz6"),M(n,"class","competence svelte-93ljz6")},m(t,e){k(t,n,e),y(n,o),y(o,l),y(n,r),y(n,i),y(i,s)},p(t,[e]){1&e&&F(l,t[0]),2&e&&T(s,"width",t[1]),4&e&&T(s,"background-color",t[2])},i:t,o:t,d(t){t&&C(n)}}}function Zt(t,e,n){let{name:o}=e,{level:l}=e,{color:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"level"in t&&n(1,l=t.level),"color"in t&&n(2,r=t.color)},[o,l,r]}class Qt extends yt{constructor(t){super(),vt(this,t,Zt,Ut,s,{name:0,level:1,color:2})}}function Xt(e){let n,o,l,r;return{c(){n=j("link"),o=_(),l=j("a"),M(n,"rel","stylesheet"),M(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(l,"href",e[0]),M(l,"class",r=p("fa fa-"+e[1])+" svelte-vuyq9m")},m(t,e){y(document.head,n),k(t,o,e),k(t,l,e)},p(t,[e]){1&e&&M(l,"href",t[0]),2&e&&r!==(r=p("fa fa-"+t[1])+" svelte-vuyq9m")&&M(l,"class",r)},i:t,o:t,d(t){C(n),t&&C(o),t&&C(l)}}}function Kt(t,e,n){let{link:o}=e,{name:l}=e;return t.$$set=t=>{"link"in t&&n(0,o=t.link),"name"in t&&n(1,l=t.name)},[o,l]}class Yt extends yt{constructor(t){super(),vt(this,t,Kt,Xt,s,{link:0,name:1})}}function te(t){let e,n,o,l,r,i,s;const c=t[2].default,u=a(c,t,t[1],null);return{c(){e=j("link"),n=_(),o=j("span"),l=j("i"),i=_(),u&&u.c(),M(e,"rel","stylesheet"),M(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(l,"class",r=p("fa fa-"+t[0])+" svelte-vuyq9m"),M(o,"class","contact")},m(t,r){y(document.head,e),k(t,n,r),k(t,o,r),y(o,l),y(o,i),u&&u.m(o,null),s=!0},p(t,[e]){(!s||1&e&&r!==(r=p("fa fa-"+t[0])+" svelte-vuyq9m"))&&M(l,"class",r),u&&u.p&&(!s||2&e)&&d(u,c,t,t[1],s?f(c,t[1],e,null):m(t[1]),null)},i(t){s||(ct(u,t),s=!0)},o(t){at(u,t),s=!1},d(t){C(e),t&&C(n),t&&C(o),u&&u.d(t)}}}function ee(t,e,n){let{$$slots:o={},$$scope:l}=e,{icon:r}=e;return t.$$set=t=>{"icon"in t&&n(0,r=t.icon),"$$scope"in t&&n(1,l=t.$$scope)},[r,l,o]}class ne extends yt{constructor(t){super(),vt(this,t,ee,te,s,{icon:0})}}function oe(e){let n;return{c(){n=j("canvas"),M(n,"width",e[0]),M(n,"height",e[1])},m(t,o){k(t,n,o),e[3](n)},p(t,[e]){1&e&&M(n,"width",t[0]),2&e&&M(n,"height",t[1])},i:t,o:t,d(t){t&&C(n),e[3](null)}}}function le(t){return Math.floor(Math.random()*t)}function re(t,e,n){let o,{width:l}=e,{height:r}=e,i=[];class s{constructor(t,e,n){this.x=t+le(n),this.y=e+le(n),this.r=Math.random()}evolve(){0===this.y?this.y=r:this.y=this.y-1,this.x=this.x+(Math.random()-.5)/4}}var c;return c=()=>{const t=o.getContext("2d");let e=requestAnimationFrame((function n(){e=requestAnimationFrame(n);let o=t.createLinearGradient(0,0,0,2e3);o.addColorStop(0,"#030318"),o.addColorStop(1," #3f034f"),t.fillStyle=o,t.fillRect(0,0,l,r),i.forEach((function(e){t.beginPath(),t.fillStyle="rgb(255, 255, 255)",t.arc(e.x,e.y,e.r,0,2*Math.PI),t.fill(),e.evolve()}))}));return()=>{cancelAnimationFrame(e)}},W().$$.on_mount.push(c),t.$$set=t=>{"width"in t&&n(0,l=t.width),"height"in t&&n(1,r=t.height)},t.$$.update=()=>{3&t.$$.dirty&&function(t,e,n){if(t&&e){i=[];for(let o=0;o<t;o+=n)for(let t=0;t<e;t+=n)i.push(new s(o,t,n))}}(l,r,50)},[l,r,o,function(t){J[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class ie extends yt{constructor(t){super(),vt(this,t,re,oe,s,{width:0,height:1})}}var se={title:"François Michel",text:"Security engineer intern at  <a href='https://secutix.com' style='color: inherit'>SECUTIX</a>"},ce={title:"About me",text:"My name is François Michel. I am a master student in a joint master program between ETH Zürich and Swiss Federal Institute of Technology Lausanne (EPFL) in Cybersecurity. I did my bachelor in EPFL, including one year exchange in University of Washington. I am currently working at <a href='https://secutix.com' style='color: inherit'>Secutix</a> where I am doing my master thesis. I see myself as a hard worker and fast learner.  I am currently looking for a software engineer position where I can grow and learn from experienced team members in a top tech company."},ae={title:"Projects",entries:[{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Tweets Sentiment Analysis (NLP)",link:"https://github.com/flmichel/sentiment-classification",description:"Course Project - EPFL - Grade: 5.5/6",contribution:"Built a python Machine Learning classiﬁer performing sentiment analysis on a set of tweets. Achieved 88.2% accuracy, using a pre-trained BERT model combined with multiple pre-processing techniques. Other models were evaluated such as SVM and MLP."},{title:"Forest Firefighters",link:"https://github.com/cyberbotics/webots-projects/tree/master/projects/forest_firefighters",description:"Project during a summer internship at <a href='https://cyberbotics.com' >Cyberbotics</a>",contribution:"Implemented a simulation that features a small forest wildfire and a few firefighter robots: a couple of drones and legged robots equipped with cameras."},{title:"Event Platform",link:"https://github.com/flmichel/event-platform-gql",description:"Course Project - ETHZ - Grade: 6/6",contribution:"Designed and implemented a secure event management application using GraphQL Shield and TypeScript."},{title:"Game boy emulator",link:"https://github.com/flmichel/gameboj",description:"Course Project - EPFL - Grade: 5.75/6",contribution:"Develept a Nintendo Game Boy emulator in Java, during the EPFL course “Practice of object-oriented programming”."},{title:"Personal Website",link:"https://github.com/flmichel/flmichel.github.io",description:"Personal project",contribution:"Built a simple personal website using the web framework Svelte"}]},ue={title:"Skills",techincal:[{name:"Java",level:"88%"},{name:"Go",level:"88%"},{name:"Python",level:"75%"},{name:"C",level:"55%"}],languages:[{name:"French",level:"100%"},{name:"English",level:"95%"},{name:"German",level:"25%"},{name:"Japanese",level:"20%"}]},fe={title:"Resume",link:"/resume.pdf"},de={title:"Get in touch",social:{title:"Social medias",websites:[{name:"linkedin",link:"https://www.linkedin.com/in/francois-michel/"},{name:"github",link:"https://github.com/flmichel/"},{name:"facebook",link:"https://www.facebook.com/francois.michel.3154"}]},information:{title:"Any question?",phone:"+41 77 485 89 65",address:"Chemin des Vignes 7, 1124 Gollion, Switerland",email:"francois.l.michel@gmail.com"}},me={topbar:"rgba(221, 247, 255, 1)",theme:"rgb(47, 122, 218)"};const{window:pe}=dt;function he(t,e,n){const o=t.slice();return o[7]=e[n],o}function $e(t,e,n){const o=t.slice();return o[10]=e[n],o}function ge(t,e,n){const o=t.slice();return o[10]=e[n],o}function be(t,e,n){const o=t.slice();return o[15]=e[n],o}function ve(t){let e;return{c(){e=S("<François />")},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function ye(t){let e,n,o;return n=new Pt({props:{segment:"#home",$$slots:{default:[ve]},$$scope:{ctx:t}}}),n.$on("click",He),{c(){e=j("div"),ht(n.$$.fragment),M(e,"slot","left")},m(t,l){k(t,e,l),$t(n,e,null),o=!0},p(t,e){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function we(e){let n,o=ce.title+"";return{c(){n=S(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function xe(e){let n,o=ae.title+"";return{c(){n=S(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function ke(e){let n,o=ue.title+"";return{c(){n=S(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Ce(e){let n,o,l,r=fe.title+" ";return{c(){n=S(r),o=_(),l=j("i"),M(l,"class","fa fa-file-pdf-o")},m(t,e){k(t,n,e),k(t,o,e),k(t,l,e)},p:t,d(t){t&&C(n),t&&C(o),t&&C(l)}}}function Ee(t){let e,n,o,l,r,i,s,c,a;return n=new Pt({props:{segment:"#about",$$slots:{default:[we]},$$scope:{ctx:t}}}),n.$on("click",He),l=new Pt({props:{segment:"#projects",$$slots:{default:[xe]},$$scope:{ctx:t}}}),l.$on("click",He),i=new Pt({props:{segment:"#skills",$$slots:{default:[ke]},$$scope:{ctx:t}}}),i.$on("click",He),c=new Pt({props:{segment:"#resume",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),c.$on("click",Be),{c(){e=j("div"),ht(n.$$.fragment),o=_(),ht(l.$$.fragment),r=_(),ht(i.$$.fragment),s=_(),ht(c.$$.fragment),M(e,"slot","center")},m(t,u){k(t,e,u),$t(n,e,null),y(e,o),$t(l,e,null),y(e,r),$t(i,e,null),y(e,s),$t(c,e,null),a=!0},p(t,e){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};262144&e&&(r.$$scope={dirty:e,ctx:t}),l.$set(r);const s={};262144&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const a={};262144&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){a||(ct(n.$$.fragment,t),ct(l.$$.fragment,t),ct(i.$$.fragment,t),ct(c.$$.fragment,t),a=!0)},o(t){at(n.$$.fragment,t),at(l.$$.fragment,t),at(i.$$.fragment,t),at(c.$$.fragment,t),a=!1},d(t){t&&C(e),gt(n),gt(l),gt(i),gt(c)}}}function je(t){let e,o;const l=[t[15],{color:me.theme}];let r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return e=new Vt({props:r}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[15]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Pe(t){let e,o;const l=[t[10],{color:me.theme}];let r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return e=new Qt({props:r}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[10]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Se(t){let e,o;const l=[t[10],{color:me.theme}];let r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return e=new Qt({props:r}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[10]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function _e(t){let e,o;const l=[t[7]];let r={};for(let t=0;t<l.length;t+=1)r=n(r,l[t]);return e=new Yt({props:r}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[7])]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Le(e){let n,o,l=de.information.email+"";return{c(){n=j("a"),o=S(l),M(n,"href","mailto:"+de.information.email),M(n,"class","svelte-xtlck8")},m(t,e){k(t,n,e),y(n,o)},p:t,d(t){t&&C(n)}}}function Me(e){let n,o=de.information.phone+"";return{c(){n=S(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Fe(e){let n,o=de.information.address+"";return{c(){n=S(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Te(t){let e;return{c(){e=j("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr 2fr;\n\t\t\tgrid-template-rows: 0.2fr 2fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title title"\n\t\t\t\t"profile about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\tgrid-template-rows: 0.3fr 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title contact-title"\n\t\t\t\t"social-icons contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 40px;\n\t\t\tpadding-right: 40px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ae(t){let e;return{c(){e=j("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title"\n\t\t\t\t"profile"\n\t\t\t\t"about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title"\n\t\t\t\t"social-icons"\n\t\t\t\t"contact-title"\n\t\t\t\t"contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 10px;\n\t\t\tpadding-right: 10px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function ze(t){let e;return{c(){e=j("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function qe(t){let e;return{c(){e=j("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ie(t){let e;return{c(){e=j("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ge(t){let e,n,o,l,r,i,s,a,u,f,d,m,p,h,$,g,b,v,w,x,P,F,A,q,I,G,H,B,N,R,D,W,O,J,V,U,Z,Q,K,Y,tt,et,nt,ot,lt,rt,ut,ft,dt,mt,pt,bt,vt,yt,wt,xt,kt,Ct,Et=se.text+"",jt=ce.text+"";X(t[4]),n=new Wt({props:{color:me.topbar,$$slots:{center:[Ee],left:[ye]},$$scope:{ctx:t}}}),r=new ie({props:{width:t[0],height:t[1]}});let Pt=ae.entries,St=[];for(let e=0;e<Pt.length;e+=1)St[e]=je(be(t,Pt,e));const _t=t=>at(St[t],1,1,(()=>{St[t]=null}));let Lt=ue.techincal,Mt=[];for(let e=0;e<Lt.length;e+=1)Mt[e]=Pe(ge(t,Lt,e));const Ft=t=>at(Mt[t],1,1,(()=>{Mt[t]=null}));let Tt=ue.languages,At=[];for(let e=0;e<Tt.length;e+=1)At[e]=Se($e(t,Tt,e));const zt=t=>at(At[t],1,1,(()=>{At[t]=null}));J=new ie({props:{width:t[0],height:t[3]}});let qt=de.social.websites,It=[];for(let e=0;e<qt.length;e+=1)It[e]=_e(he(t,qt,e));const Gt=t=>at(It[t],1,1,(()=>{It[t]=null}));function Ht(t,e){return t[2]?Ae:Te}ut=new ne({props:{icon:"envelope",$$slots:{default:[Le]},$$scope:{ctx:t}}}),dt=new ne({props:{icon:"phone",$$slots:{default:[Me]},$$scope:{ctx:t}}}),pt=new ne({props:{icon:"map-marker ",$$slots:{default:[Fe]},$$scope:{ctx:t}}});let Bt=Ht(t),Nt=Bt(t);function Rt(t,e){return t[0]>1200?Ie:t[0]>800?qe:ze}let Dt=Rt(t),Ot=Dt(t);return{c(){e=j("div"),ht(n.$$.fragment),o=_(),l=j("div"),ht(r.$$.fragment),i=_(),s=j("div"),a=j("h1"),a.textContent=`${se.title}`,u=_(),f=j("p"),d=_(),m=j("section"),p=j("h2"),p.textContent=`${ce.title}`,h=_(),$=j("img"),b=_(),v=j("p"),w=_(),x=j("section"),P=j("h2"),P.textContent=`${ae.title}`,F=_(),A=j("div");for(let t=0;t<St.length;t+=1)St[t].c();q=_(),I=j("section"),G=j("h2"),G.textContent="Skills",H=_(),B=j("div"),N=j("div");for(let t=0;t<Mt.length;t+=1)Mt[t].c();R=_(),D=j("div");for(let t=0;t<At.length;t+=1)At[t].c();W=_(),O=j("div"),ht(J.$$.fragment),V=_(),U=j("div"),Z=j("h2"),Z.textContent=`${de.title}`,Q=_(),K=j("div"),Y=j("h3"),Y.textContent=`${de.social.title}`,tt=_(),et=j("div");for(let t=0;t<It.length;t+=1)It[t].c();var y,k;nt=_(),ot=j("h3"),ot.textContent=`${de.information.title}`,lt=_(),rt=j("div"),ht(ut.$$.fragment),ft=_(),ht(dt.$$.fragment),mt=_(),ht(pt.$$.fragment),vt=_(),Nt.c(),yt=_(),Ot.c(),wt=S(""),M(e,"id","topbar"),M(e,"class","svelte-xtlck8"),M(a,"class","svelte-xtlck8"),M(f,"class","typewriter svelte-xtlck8"),M(s,"class","text svelte-xtlck8"),M(l,"id","home"),M(l,"class","svelte-xtlck8"),M(p,"class","section-title svelte-xtlck8"),y=$.src,k=g="profile.png",c||(c=document.createElement("a")),c.href=k,y!==c.href&&M($,"src","profile.png"),M($,"alt","profile"),T($,"width","200px"),M($,"class","svelte-xtlck8"),M(v,"class","svelte-xtlck8"),M(m,"id","about"),M(m,"class","svelte-xtlck8"),M(P,"class","section-title svelte-xtlck8"),M(A,"class","cards svelte-xtlck8"),M(x,"id","projects"),M(x,"class","svelte-xtlck8"),M(G,"class","section-title svelte-xtlck8"),M(N,"class","c1"),M(D,"class","c2"),M(B,"class","competences svelte-xtlck8"),M(I,"id","skills"),M(I,"class","svelte-xtlck8"),M(Z,"class","section-title svelte-xtlck8"),M(Y,"class","social-title svelte-xtlck8"),M(et,"class","social-icons svelte-xtlck8"),M(ot,"class","contact-title svelte-xtlck8"),M(rt,"class","contact-info svelte-xtlck8"),M(K,"class","content svelte-xtlck8"),M(U,"class","text svelte-xtlck8"),X((()=>t[5].call(U))),M(O,"id","footer"),M(O,"class","svelte-xtlck8")},m(c,g){k(c,e,g),$t(n,e,null),k(c,o,g),k(c,l,g),$t(r,l,null),y(l,i),y(l,s),y(s,a),y(s,u),y(s,f),f.innerHTML=Et,k(c,d,g),k(c,m,g),y(m,p),y(m,h),y(m,$),y(m,b),y(m,v),v.innerHTML=jt,k(c,w,g),k(c,x,g),y(x,P),y(x,F),y(x,A);for(let t=0;t<St.length;t+=1)St[t].m(A,null);k(c,q,g),k(c,I,g),y(I,G),y(I,H),y(I,B),y(B,N);for(let t=0;t<Mt.length;t+=1)Mt[t].m(N,null);y(B,R),y(B,D);for(let t=0;t<At.length;t+=1)At[t].m(D,null);k(c,W,g),k(c,O,g),$t(J,O,null),y(O,V),y(O,U),y(U,Z),y(U,Q),y(U,K),y(K,Y),y(K,tt),y(K,et);for(let t=0;t<It.length;t+=1)It[t].m(et,null);y(K,nt),y(K,ot),y(K,lt),y(K,rt),$t(ut,rt,null),y(rt,ft),$t(dt,rt,null),y(rt,mt),$t(pt,rt,null),bt=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=j("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=z();let l;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=L(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{l=L(n.contentWindow,"resize",e)}),y(t,n),()=>{(o||l&&n.contentWindow)&&l(),C(n)}}(U,t[5].bind(U)),k(c,vt,g),Nt.m(c,g),k(c,yt,g),Ot.m(c,g),k(c,wt,g),xt=!0,kt||(Ct=L(pe,"resize",t[4]),kt=!0)},p(t,[e]){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const l={};if(1&e&&(l.width=t[0]),2&e&&(l.height=t[1]),r.$set(l),0&e){let n;for(Pt=ae.entries,n=0;n<Pt.length;n+=1){const o=be(t,Pt,n);St[n]?(St[n].p(o,e),ct(St[n],1)):(St[n]=je(o),St[n].c(),ct(St[n],1),St[n].m(A,null))}for(it(),n=Pt.length;n<St.length;n+=1)_t(n);st()}if(0&e){let n;for(Lt=ue.techincal,n=0;n<Lt.length;n+=1){const o=ge(t,Lt,n);Mt[n]?(Mt[n].p(o,e),ct(Mt[n],1)):(Mt[n]=Pe(o),Mt[n].c(),ct(Mt[n],1),Mt[n].m(N,null))}for(it(),n=Lt.length;n<Mt.length;n+=1)Ft(n);st()}if(0&e){let n;for(Tt=ue.languages,n=0;n<Tt.length;n+=1){const o=$e(t,Tt,n);At[n]?(At[n].p(o,e),ct(At[n],1)):(At[n]=Se(o),At[n].c(),ct(At[n],1),At[n].m(D,null))}for(it(),n=Tt.length;n<At.length;n+=1)zt(n);st()}const i={};if(1&e&&(i.width=t[0]),8&e&&(i.height=t[3]),J.$set(i),0&e){let n;for(qt=de.social.websites,n=0;n<qt.length;n+=1){const o=he(t,qt,n);It[n]?(It[n].p(o,e),ct(It[n],1)):(It[n]=_e(o),It[n].c(),ct(It[n],1),It[n].m(et,null))}for(it(),n=qt.length;n<It.length;n+=1)Gt(n);st()}const s={};262144&e&&(s.$$scope={dirty:e,ctx:t}),ut.$set(s);const c={};262144&e&&(c.$$scope={dirty:e,ctx:t}),dt.$set(c);const a={};262144&e&&(a.$$scope={dirty:e,ctx:t}),pt.$set(a),Bt!==(Bt=Ht(t))&&(Nt.d(1),Nt=Bt(t),Nt&&(Nt.c(),Nt.m(yt.parentNode,yt))),Dt!==(Dt=Rt(t))&&(Ot.d(1),Ot=Dt(t),Ot&&(Ot.c(),Ot.m(wt.parentNode,wt)))},i(t){if(!xt){ct(n.$$.fragment,t),ct(r.$$.fragment,t);for(let t=0;t<Pt.length;t+=1)ct(St[t]);for(let t=0;t<Lt.length;t+=1)ct(Mt[t]);for(let t=0;t<Tt.length;t+=1)ct(At[t]);ct(J.$$.fragment,t);for(let t=0;t<qt.length;t+=1)ct(It[t]);ct(ut.$$.fragment,t),ct(dt.$$.fragment,t),ct(pt.$$.fragment,t),xt=!0}},o(t){at(n.$$.fragment,t),at(r.$$.fragment,t),St=St.filter(Boolean);for(let t=0;t<St.length;t+=1)at(St[t]);Mt=Mt.filter(Boolean);for(let t=0;t<Mt.length;t+=1)at(Mt[t]);At=At.filter(Boolean);for(let t=0;t<At.length;t+=1)at(At[t]);at(J.$$.fragment,t),It=It.filter(Boolean);for(let t=0;t<It.length;t+=1)at(It[t]);at(ut.$$.fragment,t),at(dt.$$.fragment,t),at(pt.$$.fragment,t),xt=!1},d(t){t&&C(e),gt(n),t&&C(o),t&&C(l),gt(r),t&&C(d),t&&C(m),t&&C(w),t&&C(x),E(St,t),t&&C(q),t&&C(I),E(Mt,t),E(At,t),t&&C(W),t&&C(O),gt(J),E(It,t),gt(ut),gt(dt),gt(pt),bt(),t&&C(vt),Nt.d(t),t&&C(yt),Ot.d(t),t&&C(wt),kt=!1,Ct()}}}function He(t){t.detail.section.scrollIntoView({behavior:"smooth"}),window.history.replaceState({},"",t.detail.ref)}function Be(){window.open("/resume.pdf")}function Ne(t,e,n){let o,l,r,i;return t.$$.update=()=>{3&t.$$.dirty&&(n(1,l=Math.min(document.documentElement.clientHeight,l)),n(0,o=Math.min(document.documentElement.clientWidth,o)),n(2,r=o<800)),4&t.$$.dirty&&kt.set(r),3&t.$$.dirty&&console.log(o,l)},[o,l,r,i,function(){n(0,o=pe.innerWidth),n(1,l=pe.innerHeight)},function(){i=this.clientHeight,n(3,i)}]}return new class extends yt{constructor(t){super(),vt(this,t,Ne,Ge,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
