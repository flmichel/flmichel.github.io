var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function l(){return Object.create(null)}function i(t){t.forEach(o)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e,n,o){if(t){const l=u(t,e,n,o);return t[0](l)}}function u(t,e,o,l){return t[1]&&l?n(o.ctx.slice(),t[1](l(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}function d(t,e,n,o,l,i){if(l){const r=u(e,n,o,i);t.p(r,l)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){return null==t?"":t}const h="undefined"!=typeof window;let $=h?()=>window.performance.now():()=>Date.now(),g=h?t=>requestAnimationFrame(t):t;const b=new Set;function v(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&g(v)}function y(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function x(t){const e=S("style");return function(t,e){y(t.head||t,e)}(w(t),e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function _(){return P(" ")}function L(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let A;function z(){if(void 0===A){A=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){A=!0}}return A}function I(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,o,e),l}const q=new Map;let B,G=0;function H(t,e,n,o,l,i,r,s=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*i(t);a+=100*t+`%{${r(o,1-o)}}\n`}const u=a+`100% {${r(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,d=w(t),{stylesheet:m,rules:p}=q.get(d)||function(t,e){const n={stylesheet:x(e),rules:{}};return q.set(t,n),n}(d,t);p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${l}ms 1 both`,G+=1,f}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),l=n.length-o.length;l&&(t.style.animation=o.join(", "),G-=l,G||g((()=>{G||(q.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),q.clear())})))}function N(t){B=t}function W(){if(!B)throw new Error("Function called outside component initialization");return B}const O=[],J=[],V=[],U=[],Z=Promise.resolve();let Q=!1;function X(t){V.push(t)}const K=new Set;let Y,tt=0;function et(){const t=B;do{for(;tt<O.length;){const t=O[tt];tt++,N(t),nt(t.$$)}for(N(null),O.length=0,tt=0;J.length;)J.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];K.has(e)||(K.add(e),e())}V.length=0}while(O.length);for(;U.length;)U.pop()();Q=!1,K.clear(),N(t)}function nt(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function ot(t,e,n){t.dispatchEvent(R(`${e?"intro":"outro"}${n}`))}const lt=new Set;let it;function rt(){it={r:0,c:[],p:it}}function st(){it.r||i(it.c),it=it.p}function ct(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function at(t,e,n,o){if(t&&t.o){if(lt.has(t))return;lt.add(t),it.c.push((()=>{lt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ut={duration:0};function ft(n,o,l,s){let c=o(n,l),a=s?0:1,u=null,f=null,d=null;function m(){d&&D(n,d)}function p(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:l=0,duration:r=300,easing:s=e,tick:h=t,css:y}=c||ut,w={start:$()+l,b:o};o||(w.group=it,it.r+=1),u||f?f=w:(y&&(m(),d=H(n,a,o,r,l,s,y)),o&&h(0,1),u=p(w,r),X((()=>ot(n,o,"start"))),function(t){let e;0===b.size&&g(v),new Promise((n=>{b.add(e={c:t,f:n})}))}((t=>{if(f&&t>f.start&&(u=p(f,r),f=null,ot(n,u.b,"start"),y&&(m(),d=H(n,a,u.b,u.duration,0,s,c.css))),u)if(t>=u.end)h(a=u.b,1-a),ot(n,u.b,"end"),f||(u.b?m():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*s(e/u.duration),h(a,1-a)}return!(!u&&!f)})))}return{run(t){r(c)?(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then((()=>{c=c(),h(t)})):h(t)},end(){m(),u=f=null}}}const dt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){const n={},o={},l={$$scope:1};let i=t.length;for(;i--;){const r=t[i],s=e[i];if(s){for(const t in r)t in s||(o[t]=1);for(const t in s)l[t]||(n[t]=s[t],l[t]=1);t[i]=s}else for(const t in r)l[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function ht(t){t&&t.c()}function $t(t,e,n,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,n),l||X((()=>{const e=c.map(o).filter(r);a?a.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(X)}function gt(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(O.push(t),Q||(Q=!0,Z.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(e,n,o,r,s,c,a,u=[-1]){const f=B;N(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:l(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),m&&bt(e,t)),n})):[],d.update(),m=!0,i(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(C)}else d.fragment&&d.fragment.c();n.intro&&ct(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),et()}N(f)}class yt{$destroy(){gt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=[];function xt(e,n=t){let o;const l=new Set;function i(t){if(s(e,t)&&(e=t,o)){const t=!wt.length;for(const t of l)t[1](),wt.push(t,e);if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,s=t){const c=[r,s];return l.add(c),1===l.size&&(o=n(i)||t),r(e),()=>{l.delete(c),0===l.size&&(o(),o=null)}}}}const kt=xt(!1),Ct=xt(!1);function Et(t){let e,n,o,l,i,r;const s=t[4].default,c=a(s,t,t[3],null);return{c(){e=S("span"),n=S("a"),c&&c.c(),M(n,"class",o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"),M(n,"href",t[0])},m(o,s){var a;k(o,e,s),y(e,n),c&&c.m(n,null),l=!0,i||(r=L(n,"click",(a=t[2],function(t){return t.preventDefault(),a.call(this,t)})),i=!0)},p(t,[e]){c&&c.p&&(!l||8&e)&&d(c,s,t,t[3],l?f(s,t[3],e,null):m(t[3]),null),(!l||2&e&&o!==(o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"))&&M(n,"class",o),(!l||1&e)&&M(n,"href",t[0])},i(t){l||(ct(c,t),l=!0)},o(t){at(c,t),l=!1},d(t){t&&C(e),c&&c.d(t),i=!1,r()}}}function St(t,e,n){let{$$slots:o={},$$scope:l}=e;const i=function(){const t=W();return(e,n,{cancelable:o=!1}={})=>{const l=t.$$.callbacks[e];if(l){const i=R(e,n,{cancelable:o});return l.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}();let r,{segment:s}=e;return kt.subscribe((t=>{n(1,r=t)})),t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(3,l=t.$$scope)},[s,r,function({target:t}){const e=t.getAttribute("href");i("click",{section:document.querySelector(e),ref:e}),r&&Ct.set(!1)},l,o]}class jt extends yt{constructor(t){super(),vt(this,t,St,Et,s,{segment:0})}}function Pt(e){let n,o,l,i,s,c,a;return{c(){n=S("button"),o=j("svg"),l=j("path"),i=j("path"),s=j("path"),M(l,"class","top svelte-1ks11a7"),M(l,"d","m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"),M(i,"class","middle svelte-1ks11a7"),M(i,"d","m 30,50 h 40"),M(s,"class","bottom svelte-1ks11a7"),M(s,"d","m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"),M(o,"viewBox","0 0 100 100"),M(o,"fill","none"),M(o,"stroke","currentColor"),M(o,"stroke-width","5"),M(o,"width",e[3]),M(o,"class","svelte-1ks11a7"),I(o,"open",e[0]),M(n,"aria-expanded",e[0]),M(n,"aria-label",e[2]),M(n,"class","svelte-1ks11a7")},m(t,u){k(t,n,u),y(n,o),y(o,l),y(o,i),y(o,s),c||(a=L(n,"click",(function(){r(e[1])&&e[1].apply(this,arguments)})),c=!0)},p(t,[l]){e=t,8&l&&M(o,"width",e[3]),1&l&&I(o,"open",e[0]),1&l&&M(n,"aria-expanded",e[0]),4&l&&M(n,"aria-label",e[2])},i:t,o:t,d(t){t&&C(n),c=!1,a()}}}function _t(t,e,n){let{open:o=!1}=e,{onClick:l=(()=>{n(0,o=!o)})}=e,{ariaLabel:i="toggle menu"}=e,{width:r=80}=e;return t.$$set=t=>{"open"in t&&n(0,o=t.open),"onClick"in t&&n(1,l=t.onClick),"ariaLabel"in t&&n(2,i=t.ariaLabel),"width"in t&&n(3,r=t.width)},[o,l,i,r]}class Lt extends yt{constructor(t){super(),vt(this,t,_t,Pt,s,{open:0,onClick:1,ariaLabel:2,width:3})}}function Mt(t){const e=t-1;return e*e*e+1}function Ft(t,{delay:e=0,duration:n=400,easing:o=Mt,x:l=0,y:i=0,opacity:r=0}={}){const s=getComputedStyle(t),c=+s.opacity,a="none"===s.transform?"":s.transform,u=c*(1-r);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*l}px, ${(1-t)*i}px);\n\t\t\topacity: ${c-u*e}`}}const Tt=t=>({}),At=t=>({}),zt=t=>({}),It=t=>({}),Rt=t=>({}),qt=t=>({class:"home"});function Bt(t){let e,n;const o=t[5].center,l=a(o,t,t[4],It);return{c(){e=S("div"),l&&l.c(),M(e,"class","horizontal")},m(t,o){k(t,e,o),l&&l.m(e,null),n=!0},p(t,e){l&&l.p&&(!n||16&e)&&d(l,o,t,t[4],n?f(o,t[4],e,zt):m(t[4]),It)},i(t){n||(ct(l,t),n=!0)},o(t){at(l,t),n=!1},d(t){t&&C(e),l&&l.d(t)}}}function Gt(t){let e,n,o;return n=new Lt({props:{open:t[1],onClick:t[3],width:"30"}}),{c(){e=S("div"),ht(n.$$.fragment),M(e,"class","right svelte-1a3ag97")},m(t,l){k(t,e,l),$t(n,e,null),o=!0},p(t,e){const o={};2&e&&(o.open=t[1]),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function Ht(t){let e,n,o;const l=t[5].center,i=a(l,t,t[4],At);return{c(){e=S("div"),i&&i.c(),M(e,"class","vertical")},m(t,n){k(t,e,n),i&&i.m(e,null),o=!0},p(t,e){i&&i.p&&(!o||16&e)&&d(i,l,t,t[4],o?f(l,t[4],e,Tt):m(t[4]),At)},i(t){o||(ct(i,t),X((()=>{n||(n=ft(e,Ft,{y:-100,duration:400},!0)),n.run(1)})),o=!0)},o(t){at(i,t),n||(n=ft(e,Ft,{y:-100,duration:400},!1)),n.run(0),o=!1},d(t){t&&C(e),i&&i.d(t),t&&n&&n.end()}}}function Dt(t){let e,n,o,l,i,r,s;const c=t[5].left,u=a(c,t,t[4],qt),p=[Gt,Bt],h=[];function $(t,e){return t[2]?0:1}l=$(t),i=h[l]=p[l](t);let g=t[1]&&Ht(t);return{c(){e=S("nav"),n=S("div"),u&&u.c(),o=_(),i.c(),r=_(),g&&g.c(),M(n,"class","bar svelte-1a3ag97"),T(e,"background-color",t[0]),M(e,"class","svelte-1a3ag97")},m(t,i){k(t,e,i),y(e,n),u&&u.m(n,null),y(n,o),h[l].m(n,null),y(e,r),g&&g.m(e,null),s=!0},p(t,[o]){u&&u.p&&(!s||16&o)&&d(u,c,t,t[4],s?f(c,t[4],o,Rt):m(t[4]),qt);let r=l;l=$(t),l===r?h[l].p(t,o):(rt(),at(h[r],1,1,(()=>{h[r]=null})),st(),i=h[l],i?i.p(t,o):(i=h[l]=p[l](t),i.c()),ct(i,1),i.m(n,null)),t[1]?g?(g.p(t,o),2&o&&ct(g,1)):(g=Ht(t),g.c(),ct(g,1),g.m(e,null)):g&&(rt(),at(g,1,1,(()=>{g=null})),st()),(!s||1&o)&&T(e,"background-color",t[0])},i(t){s||(ct(u,t),ct(i),ct(g),s=!0)},o(t){at(u,t),at(i),at(g),s=!1},d(t){t&&C(e),u&&u.d(t),h[l].d(),g&&g.d()}}}function Nt(t,e,n){let o,l,{$$slots:i={},$$scope:r}=e,{color:s}=e;return kt.subscribe((t=>{n(2,l=t)})),Ct.subscribe((t=>{n(1,o=t)})),t.$$set=t=>{"color"in t&&n(0,s=t.color),"$$scope"in t&&n(4,r=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&Ct.set(o)},[s,o,l,()=>{n(1,o=!o)},r,i]}class Wt extends yt{constructor(t){super(),vt(this,t,Nt,Dt,s,{color:0})}}function Ot(e){let n,o,l,i,r,s,c,a,u,f,d,m,p,h,$,g,b;return{c(){n=S("link"),o=_(),l=S("div"),i=S("div"),r=S("h2"),s=P(e[0]),c=_(),a=S("div"),u=S("a"),f=P("Repo "),d=S("i"),m=_(),p=S("p"),h=_(),$=S("hr"),g=_(),b=S("p"),M(n,"rel","stylesheet"),M(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(r,"class","title svelte-1ya9by5"),M(d,"class","fa fa-github"),M(u,"href",e[2]),M(u,"class","button svelte-1ya9by5"),M(a,"class","repo svelte-1ya9by5"),M(i,"class","top svelte-1ya9by5"),M(p,"class","description"),M($,"class","separator svelte-1ya9by5"),M(b,"class","contribution"),M(l,"class","box svelte-1ya9by5"),T(l,"--top-color",e[4])},m(t,v){y(document.head,n),k(t,o,v),k(t,l,v),y(l,i),y(i,r),y(r,s),y(i,c),y(i,a),y(a,u),y(u,f),y(u,d),y(l,m),y(l,p),p.innerHTML=e[1],y(l,h),y(l,$),y(l,g),y(l,b),b.innerHTML=e[3]},p(t,[e]){1&e&&F(s,t[0]),4&e&&M(u,"href",t[2]),2&e&&(p.innerHTML=t[1]),8&e&&(b.innerHTML=t[3]),16&e&&T(l,"--top-color",t[4])},i:t,o:t,d(t){C(n),t&&C(o),t&&C(l)}}}function Jt(t,e,n){let{title:o}=e,{description:l}=e,{link:i}=e,{contribution:r}=e,{color:s}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,l=t.description),"link"in t&&n(2,i=t.link),"contribution"in t&&n(3,r=t.contribution),"color"in t&&n(4,s=t.color)},[o,l,i,r,s]}class Vt extends yt{constructor(t){super(),vt(this,t,Jt,Ot,s,{title:0,description:1,link:2,contribution:3,color:4})}}function Ut(e){let n,o,l,i,r,s;return{c(){n=S("div"),o=S("h3"),l=P(e[0]),i=_(),r=S("div"),s=S("div"),M(o,"class","svelte-93ljz6"),M(s,"id","level"),T(s,"width",e[1]),T(s,"background-color",e[2]),M(s,"class","svelte-93ljz6"),M(r,"id","progressbar"),M(r,"class","svelte-93ljz6"),M(n,"class","competence svelte-93ljz6")},m(t,e){k(t,n,e),y(n,o),y(o,l),y(n,i),y(n,r),y(r,s)},p(t,[e]){1&e&&F(l,t[0]),2&e&&T(s,"width",t[1]),4&e&&T(s,"background-color",t[2])},i:t,o:t,d(t){t&&C(n)}}}function Zt(t,e,n){let{name:o}=e,{level:l}=e,{color:i}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"level"in t&&n(1,l=t.level),"color"in t&&n(2,i=t.color)},[o,l,i]}class Qt extends yt{constructor(t){super(),vt(this,t,Zt,Ut,s,{name:0,level:1,color:2})}}function Xt(e){let n,o,l,i;return{c(){n=S("link"),o=_(),l=S("a"),M(n,"rel","stylesheet"),M(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(l,"href",e[0]),M(l,"class",i=p("fa fa-"+e[1])+" svelte-vuyq9m")},m(t,e){y(document.head,n),k(t,o,e),k(t,l,e)},p(t,[e]){1&e&&M(l,"href",t[0]),2&e&&i!==(i=p("fa fa-"+t[1])+" svelte-vuyq9m")&&M(l,"class",i)},i:t,o:t,d(t){C(n),t&&C(o),t&&C(l)}}}function Kt(t,e,n){let{link:o}=e,{name:l}=e;return t.$$set=t=>{"link"in t&&n(0,o=t.link),"name"in t&&n(1,l=t.name)},[o,l]}class Yt extends yt{constructor(t){super(),vt(this,t,Kt,Xt,s,{link:0,name:1})}}function te(t){let e,n,o,l,i,r,s;const c=t[2].default,u=a(c,t,t[1],null);return{c(){e=S("link"),n=_(),o=S("span"),l=S("i"),r=_(),u&&u.c(),M(e,"rel","stylesheet"),M(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),M(l,"class",i=p("fa fa-"+t[0])+" svelte-vuyq9m"),M(o,"class","contact")},m(t,i){y(document.head,e),k(t,n,i),k(t,o,i),y(o,l),y(o,r),u&&u.m(o,null),s=!0},p(t,[e]){(!s||1&e&&i!==(i=p("fa fa-"+t[0])+" svelte-vuyq9m"))&&M(l,"class",i),u&&u.p&&(!s||2&e)&&d(u,c,t,t[1],s?f(c,t[1],e,null):m(t[1]),null)},i(t){s||(ct(u,t),s=!0)},o(t){at(u,t),s=!1},d(t){C(e),t&&C(n),t&&C(o),u&&u.d(t)}}}function ee(t,e,n){let{$$slots:o={},$$scope:l}=e,{icon:i}=e;return t.$$set=t=>{"icon"in t&&n(0,i=t.icon),"$$scope"in t&&n(1,l=t.$$scope)},[i,l,o]}class ne extends yt{constructor(t){super(),vt(this,t,ee,te,s,{icon:0})}}function oe(e){let n;return{c(){n=S("canvas"),M(n,"width",e[0]),M(n,"height",e[1])},m(t,o){k(t,n,o),e[3](n)},p(t,[e]){1&e&&M(n,"width",t[0]),2&e&&M(n,"height",t[1])},i:t,o:t,d(t){t&&C(n),e[3](null)}}}function le(t){return Math.floor(Math.random()*t)}function ie(t,e,n){let o,{width:l}=e,{height:i}=e,r=[];class s{constructor(t,e,n){this.x=t+le(n),this.y=e+le(n),this.r=Math.random()}evolve(){0===this.y?this.y=i:this.y=this.y-1,this.x=this.x+(Math.random()-.5)/4}}var c;return c=()=>{const t=o.getContext("2d");let e=requestAnimationFrame((function n(){e=requestAnimationFrame(n);let o=t.createLinearGradient(0,0,0,2e3);o.addColorStop(0,"#030318"),o.addColorStop(1," #3f034f"),t.fillStyle=o,t.fillRect(0,0,l,i),r.forEach((function(e){t.beginPath(),t.fillStyle="rgb(255, 255, 255)",t.arc(e.x,e.y,e.r,0,2*Math.PI),t.fill(),e.evolve()}))}));return()=>{cancelAnimationFrame(e)}},W().$$.on_mount.push(c),t.$$set=t=>{"width"in t&&n(0,l=t.width),"height"in t&&n(1,i=t.height)},t.$$.update=()=>{3&t.$$.dirty&&function(t,e,n){if(t&&e){r=[];for(let o=0;o<t;o+=n)for(let t=0;t<e;t+=n)r.push(new s(o,t,n))}}(l,i,50)},[l,i,o,function(t){J[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class re extends yt{constructor(t){super(),vt(this,t,ie,oe,s,{width:0,height:1})}}var se={title:"François Michel",text:"Security engineer intern at  <a href='https://secutix.com' style='color: inherit'>SECUTIX</a>"},ce={title:"About me",text:"My name is François Michel. I am a master student in a joint master program between ETH Zürich and Swiss Federal Institute of Technology Lausanne (EPFL) in Cybersecurity. I did my bachelor in EPFL, including one year exchange in University of Washington. I am currently working at <a href='https://secutix.com' style='color: inherit'>Secutix</a> where I am doing my master thesis. I see myself as a hard worker and fast learner.  I am currently looking for a software engineer position where I can grow and learn from experienced team members in a top tech company."},ae={title:"Projects",entries:[{title:"Tank Game",link:"https://github.com/flmichel/tank-game",description:"Personal Project",contribution:"Build an arcade-style tank multiplayer game in Rust where the game controller is a mobile phone connected to the game via WebRTC."},{title:"Implementation of Blind Signatures for an E-Voting System",link:"https://github.com/directdemocracy-vote/app",description:"Association DirectDemocracy",contribution:"Implement RSA Blind Signatures (IETF RFC 9474) in JavaScript to ensure vote privacy in a decentralized e-voting protocol."},{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Tweets Sentiment Analysis (NLP)",link:"https://github.com/flmichel/sentiment-classification",description:"Course Project - EPFL - Grade: 5.5/6",contribution:"Built a python Machine Learning classiﬁer performing sentiment analysis on a set of tweets. Achieved 88.2% accuracy, using a pre-trained BERT model combined with multiple pre-processing techniques. Other models were evaluated such as SVM and MLP."},{title:"Forest Firefighters",link:"https://github.com/cyberbotics/webots-projects/tree/master/projects/forest_firefighters",description:"Project during a summer internship at <a href='https://cyberbotics.com' >Cyberbotics</a>",contribution:"Implemented a simulation that features a small forest wildfire and a few firefighter robots: a couple of drones and legged robots equipped with cameras."},{title:"Event Platform",link:"https://github.com/flmichel/event-platform-gql",description:"Course Project - ETHZ - Grade: 6/6",contribution:"Designed and implemented a secure event management application using GraphQL Shield and TypeScript."},{title:"Game boy emulator",link:"https://github.com/flmichel/gameboj",description:"Course Project - EPFL - Grade: 5.75/6",contribution:"Develept a Nintendo Game Boy emulator in Java, during the EPFL course “Practice of object-oriented programming”."},{title:"Personal Website",link:"https://github.com/flmichel/flmichel.github.io",description:"Personal project",contribution:"Built a simple personal website using the web framework Svelte"}]},ue={title:"Skills",techincal:[{name:"Java",level:"95%"},{name:"Go",level:"88%"},{name:"Python",level:"75%"},{name:"C",level:"55%"}],languages:[{name:"French",level:"100%"},{name:"English",level:"95%"},{name:"German",level:"20%"},{name:"Japanese",level:"15%"}]},fe={title:"Resume",link:"/resume.pdf"},de={title:"Get in touch",social:{title:"Social medias",websites:[{name:"linkedin",link:"https://www.linkedin.com/in/francois-michel/"},{name:"github",link:"https://github.com/flmichel/"},{name:"facebook",link:"https://www.facebook.com/francois.michel.3154"}]},information:{title:"Any question?",phone:"+41 77 485 89 65",address:"Chemin des Vignes 7, 1124 Gollion, Switerland",email:"francois.l.michel@gmail.com"}},me={topbar:"rgba(221, 247, 255, 1)",theme:"rgb(47, 122, 218)"};const{window:pe}=dt;function he(t,e,n){const o=t.slice();return o[7]=e[n],o}function $e(t,e,n){const o=t.slice();return o[10]=e[n],o}function ge(t,e,n){const o=t.slice();return o[10]=e[n],o}function be(t,e,n){const o=t.slice();return o[15]=e[n],o}function ve(t){let e;return{c(){e=P("<François />")},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function ye(t){let e,n,o;return n=new jt({props:{segment:"#home",$$slots:{default:[ve]},$$scope:{ctx:t}}}),n.$on("click",Be),{c(){e=S("div"),ht(n.$$.fragment),M(e,"slot","left")},m(t,l){k(t,e,l),$t(n,e,null),o=!0},p(t,e){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function we(e){let n,o=ce.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function xe(e){let n,o=ae.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function ke(e){let n,o=ue.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Ce(e){let n,o,l,i=fe.title+" ";return{c(){n=P(i),o=_(),l=S("i"),M(l,"class","fa fa-file-pdf-o")},m(t,e){k(t,n,e),k(t,o,e),k(t,l,e)},p:t,d(t){t&&C(n),t&&C(o),t&&C(l)}}}function Ee(t){let e,n,o,l,i,r,s,c,a;return n=new jt({props:{segment:"#about",$$slots:{default:[we]},$$scope:{ctx:t}}}),n.$on("click",Be),l=new jt({props:{segment:"#projects",$$slots:{default:[xe]},$$scope:{ctx:t}}}),l.$on("click",Be),r=new jt({props:{segment:"#skills",$$slots:{default:[ke]},$$scope:{ctx:t}}}),r.$on("click",Be),c=new jt({props:{segment:"#resume",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),c.$on("click",Ge),{c(){e=S("div"),ht(n.$$.fragment),o=_(),ht(l.$$.fragment),i=_(),ht(r.$$.fragment),s=_(),ht(c.$$.fragment),M(e,"slot","center")},m(t,u){k(t,e,u),$t(n,e,null),y(e,o),$t(l,e,null),y(e,i),$t(r,e,null),y(e,s),$t(c,e,null),a=!0},p(t,e){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const i={};262144&e&&(i.$$scope={dirty:e,ctx:t}),l.$set(i);const s={};262144&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s);const a={};262144&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){a||(ct(n.$$.fragment,t),ct(l.$$.fragment,t),ct(r.$$.fragment,t),ct(c.$$.fragment,t),a=!0)},o(t){at(n.$$.fragment,t),at(l.$$.fragment,t),at(r.$$.fragment,t),at(c.$$.fragment,t),a=!1},d(t){t&&C(e),gt(n),gt(l),gt(r),gt(c)}}}function Se(t){let e,o;const l=[t[15],{color:me.theme}];let i={};for(let t=0;t<l.length;t+=1)i=n(i,l[t]);return e=new Vt({props:i}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[15]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function je(t){let e,o;const l=[t[10],{color:me.theme}];let i={};for(let t=0;t<l.length;t+=1)i=n(i,l[t]);return e=new Qt({props:i}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[10]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Pe(t){let e,o;const l=[t[10],{color:me.theme}];let i={};for(let t=0;t<l.length;t+=1)i=n(i,l[t]);return e=new Qt({props:i}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[10]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function _e(t){let e,o;const l=[t[7]];let i={};for(let t=0;t<l.length;t+=1)i=n(i,l[t]);return e=new Yt({props:i}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(l,[pt(t[7])]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Le(e){let n,o,l=de.information.email+"";return{c(){n=S("a"),o=P(l),M(n,"href","mailto:"+de.information.email),M(n,"class","svelte-xtlck8")},m(t,e){k(t,n,e),y(n,o)},p:t,d(t){t&&C(n)}}}function Me(e){let n,o=de.information.phone+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Fe(e){let n,o=de.information.address+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Te(t){let e;return{c(){e=S("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr 2fr;\n\t\t\tgrid-template-rows: 0.2fr 2fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title title"\n\t\t\t\t"profile about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\tgrid-template-rows: 0.3fr 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title contact-title"\n\t\t\t\t"social-icons contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 40px;\n\t\t\tpadding-right: 40px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ae(t){let e;return{c(){e=S("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title"\n\t\t\t\t"profile"\n\t\t\t\t"about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title"\n\t\t\t\t"social-icons"\n\t\t\t\t"contact-title"\n\t\t\t\t"contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 10px;\n\t\t\tpadding-right: 10px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function ze(t){let e;return{c(){e=S("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ie(t){let e;return{c(){e=S("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Re(t){let e;return{c(){e=S("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function qe(t){let e,n,o,l,i,r,s,a,u,f,d,m,p,h,$,g,b,v,w,x,j,F,A,I,R,q,B,G,H,D,N,W,O,J,V,U,Z,Q,K,Y,tt,et,nt,ot,lt,it,ut,ft,dt,mt,pt,bt,vt,yt,wt,xt,kt,Ct,Et=se.text+"",St=ce.text+"";X(t[4]),n=new Wt({props:{color:me.topbar,$$slots:{center:[Ee],left:[ye]},$$scope:{ctx:t}}}),i=new re({props:{width:t[0],height:t[1]}});let jt=ae.entries,Pt=[];for(let e=0;e<jt.length;e+=1)Pt[e]=Se(be(t,jt,e));const _t=t=>at(Pt[t],1,1,(()=>{Pt[t]=null}));let Lt=ue.techincal,Mt=[];for(let e=0;e<Lt.length;e+=1)Mt[e]=je(ge(t,Lt,e));const Ft=t=>at(Mt[t],1,1,(()=>{Mt[t]=null}));let Tt=ue.languages,At=[];for(let e=0;e<Tt.length;e+=1)At[e]=Pe($e(t,Tt,e));const zt=t=>at(At[t],1,1,(()=>{At[t]=null}));J=new re({props:{width:t[0],height:t[3]}});let It=de.social.websites,Rt=[];for(let e=0;e<It.length;e+=1)Rt[e]=_e(he(t,It,e));const qt=t=>at(Rt[t],1,1,(()=>{Rt[t]=null}));function Bt(t,e){return t[2]?Ae:Te}ut=new ne({props:{icon:"envelope",$$slots:{default:[Le]},$$scope:{ctx:t}}}),dt=new ne({props:{icon:"phone",$$slots:{default:[Me]},$$scope:{ctx:t}}}),pt=new ne({props:{icon:"map-marker ",$$slots:{default:[Fe]},$$scope:{ctx:t}}});let Gt=Bt(t),Ht=Gt(t);function Dt(t,e){return t[0]>1200?Re:t[0]>800?Ie:ze}let Nt=Dt(t),Ot=Nt(t);return{c(){e=S("div"),ht(n.$$.fragment),o=_(),l=S("div"),ht(i.$$.fragment),r=_(),s=S("div"),a=S("h1"),a.textContent=`${se.title}`,u=_(),f=S("p"),d=_(),m=S("section"),p=S("h2"),p.textContent=`${ce.title}`,h=_(),$=S("img"),b=_(),v=S("p"),w=_(),x=S("section"),j=S("h2"),j.textContent=`${ae.title}`,F=_(),A=S("div");for(let t=0;t<Pt.length;t+=1)Pt[t].c();I=_(),R=S("section"),q=S("h2"),q.textContent="Skills",B=_(),G=S("div"),H=S("div");for(let t=0;t<Mt.length;t+=1)Mt[t].c();D=_(),N=S("div");for(let t=0;t<At.length;t+=1)At[t].c();W=_(),O=S("div"),ht(J.$$.fragment),V=_(),U=S("div"),Z=S("h2"),Z.textContent=`${de.title}`,Q=_(),K=S("div"),Y=S("h3"),Y.textContent=`${de.social.title}`,tt=_(),et=S("div");for(let t=0;t<Rt.length;t+=1)Rt[t].c();var y,k;nt=_(),ot=S("h3"),ot.textContent=`${de.information.title}`,lt=_(),it=S("div"),ht(ut.$$.fragment),ft=_(),ht(dt.$$.fragment),mt=_(),ht(pt.$$.fragment),vt=_(),Ht.c(),yt=_(),Ot.c(),wt=P(""),M(e,"id","topbar"),M(e,"class","svelte-xtlck8"),M(a,"class","svelte-xtlck8"),M(f,"class","typewriter svelte-xtlck8"),M(s,"class","text svelte-xtlck8"),M(l,"id","home"),M(l,"class","svelte-xtlck8"),M(p,"class","section-title svelte-xtlck8"),y=$.src,k=g="profile.png",c||(c=document.createElement("a")),c.href=k,y!==c.href&&M($,"src","profile.png"),M($,"alt","profile"),T($,"width","200px"),M($,"class","svelte-xtlck8"),M(v,"class","svelte-xtlck8"),M(m,"id","about"),M(m,"class","svelte-xtlck8"),M(j,"class","section-title svelte-xtlck8"),M(A,"class","cards svelte-xtlck8"),M(x,"id","projects"),M(x,"class","svelte-xtlck8"),M(q,"class","section-title svelte-xtlck8"),M(H,"class","c1"),M(N,"class","c2"),M(G,"class","competences svelte-xtlck8"),M(R,"id","skills"),M(R,"class","svelte-xtlck8"),M(Z,"class","section-title svelte-xtlck8"),M(Y,"class","social-title svelte-xtlck8"),M(et,"class","social-icons svelte-xtlck8"),M(ot,"class","contact-title svelte-xtlck8"),M(it,"class","contact-info svelte-xtlck8"),M(K,"class","content svelte-xtlck8"),M(U,"class","text svelte-xtlck8"),X((()=>t[5].call(U))),M(O,"id","footer"),M(O,"class","svelte-xtlck8")},m(c,g){k(c,e,g),$t(n,e,null),k(c,o,g),k(c,l,g),$t(i,l,null),y(l,r),y(l,s),y(s,a),y(s,u),y(s,f),f.innerHTML=Et,k(c,d,g),k(c,m,g),y(m,p),y(m,h),y(m,$),y(m,b),y(m,v),v.innerHTML=St,k(c,w,g),k(c,x,g),y(x,j),y(x,F),y(x,A);for(let t=0;t<Pt.length;t+=1)Pt[t].m(A,null);k(c,I,g),k(c,R,g),y(R,q),y(R,B),y(R,G),y(G,H);for(let t=0;t<Mt.length;t+=1)Mt[t].m(H,null);y(G,D),y(G,N);for(let t=0;t<At.length;t+=1)At[t].m(N,null);k(c,W,g),k(c,O,g),$t(J,O,null),y(O,V),y(O,U),y(U,Z),y(U,Q),y(U,K),y(K,Y),y(K,tt),y(K,et);for(let t=0;t<Rt.length;t+=1)Rt[t].m(et,null);y(K,nt),y(K,ot),y(K,lt),y(K,it),$t(ut,it,null),y(it,ft),$t(dt,it,null),y(it,mt),$t(pt,it,null),bt=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=S("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=z();let l;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=L(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{l=L(n.contentWindow,"resize",e)}),y(t,n),()=>{(o||l&&n.contentWindow)&&l(),C(n)}}(U,t[5].bind(U)),k(c,vt,g),Ht.m(c,g),k(c,yt,g),Ot.m(c,g),k(c,wt,g),xt=!0,kt||(Ct=L(pe,"resize",t[4]),kt=!0)},p(t,[e]){const o={};262144&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const l={};if(1&e&&(l.width=t[0]),2&e&&(l.height=t[1]),i.$set(l),0&e){let n;for(jt=ae.entries,n=0;n<jt.length;n+=1){const o=be(t,jt,n);Pt[n]?(Pt[n].p(o,e),ct(Pt[n],1)):(Pt[n]=Se(o),Pt[n].c(),ct(Pt[n],1),Pt[n].m(A,null))}for(rt(),n=jt.length;n<Pt.length;n+=1)_t(n);st()}if(0&e){let n;for(Lt=ue.techincal,n=0;n<Lt.length;n+=1){const o=ge(t,Lt,n);Mt[n]?(Mt[n].p(o,e),ct(Mt[n],1)):(Mt[n]=je(o),Mt[n].c(),ct(Mt[n],1),Mt[n].m(H,null))}for(rt(),n=Lt.length;n<Mt.length;n+=1)Ft(n);st()}if(0&e){let n;for(Tt=ue.languages,n=0;n<Tt.length;n+=1){const o=$e(t,Tt,n);At[n]?(At[n].p(o,e),ct(At[n],1)):(At[n]=Pe(o),At[n].c(),ct(At[n],1),At[n].m(N,null))}for(rt(),n=Tt.length;n<At.length;n+=1)zt(n);st()}const r={};if(1&e&&(r.width=t[0]),8&e&&(r.height=t[3]),J.$set(r),0&e){let n;for(It=de.social.websites,n=0;n<It.length;n+=1){const o=he(t,It,n);Rt[n]?(Rt[n].p(o,e),ct(Rt[n],1)):(Rt[n]=_e(o),Rt[n].c(),ct(Rt[n],1),Rt[n].m(et,null))}for(rt(),n=It.length;n<Rt.length;n+=1)qt(n);st()}const s={};262144&e&&(s.$$scope={dirty:e,ctx:t}),ut.$set(s);const c={};262144&e&&(c.$$scope={dirty:e,ctx:t}),dt.$set(c);const a={};262144&e&&(a.$$scope={dirty:e,ctx:t}),pt.$set(a),Gt!==(Gt=Bt(t))&&(Ht.d(1),Ht=Gt(t),Ht&&(Ht.c(),Ht.m(yt.parentNode,yt))),Nt!==(Nt=Dt(t))&&(Ot.d(1),Ot=Nt(t),Ot&&(Ot.c(),Ot.m(wt.parentNode,wt)))},i(t){if(!xt){ct(n.$$.fragment,t),ct(i.$$.fragment,t);for(let t=0;t<jt.length;t+=1)ct(Pt[t]);for(let t=0;t<Lt.length;t+=1)ct(Mt[t]);for(let t=0;t<Tt.length;t+=1)ct(At[t]);ct(J.$$.fragment,t);for(let t=0;t<It.length;t+=1)ct(Rt[t]);ct(ut.$$.fragment,t),ct(dt.$$.fragment,t),ct(pt.$$.fragment,t),xt=!0}},o(t){at(n.$$.fragment,t),at(i.$$.fragment,t),Pt=Pt.filter(Boolean);for(let t=0;t<Pt.length;t+=1)at(Pt[t]);Mt=Mt.filter(Boolean);for(let t=0;t<Mt.length;t+=1)at(Mt[t]);At=At.filter(Boolean);for(let t=0;t<At.length;t+=1)at(At[t]);at(J.$$.fragment,t),Rt=Rt.filter(Boolean);for(let t=0;t<Rt.length;t+=1)at(Rt[t]);at(ut.$$.fragment,t),at(dt.$$.fragment,t),at(pt.$$.fragment,t),xt=!1},d(t){t&&C(e),gt(n),t&&C(o),t&&C(l),gt(i),t&&C(d),t&&C(m),t&&C(w),t&&C(x),E(Pt,t),t&&C(I),t&&C(R),E(Mt,t),E(At,t),t&&C(W),t&&C(O),gt(J),E(Rt,t),gt(ut),gt(dt),gt(pt),bt(),t&&C(vt),Ht.d(t),t&&C(yt),Ot.d(t),t&&C(wt),kt=!1,Ct()}}}function Be(t){t.detail.section.scrollIntoView({behavior:"smooth"}),window.history.replaceState({},"",t.detail.ref)}function Ge(){window.open("/resume.pdf")}function He(t,e,n){let o,l,i,r;return t.$$.update=()=>{3&t.$$.dirty&&(n(1,l=Math.min(document.documentElement.clientHeight,l)),n(0,o=Math.min(document.documentElement.clientWidth,o)),n(2,i=o<800)),4&t.$$.dirty&&kt.set(i),3&t.$$.dirty&&console.log(o,l)},[o,l,i,r,function(){n(0,o=pe.innerWidth),n(1,l=pe.innerHeight)},function(){r=this.clientHeight,n(3,r)}]}return new class extends yt{constructor(t){super(),vt(this,t,He,qe,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
