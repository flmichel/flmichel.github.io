var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(o)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e,n,o){if(t){const i=u(t,e,n,o);return t[0](i)}}function u(t,e,o,i){return t[1]&&i?n(o.ctx.slice(),t[1](i(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function d(t,e,n,o,i,s){if(i){const l=u(e,n,o,s);t.p(l,i)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){return null==t?"":t}const h="undefined"!=typeof window;let $=h?()=>window.performance.now():()=>Date.now(),g=h?t=>requestAnimationFrame(t):t;const v=new Set;function b(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&g(b)}function w(t,e){t.appendChild(e)}function y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function x(t){const e=E("style");return function(t,e){w(t.head||t,e)}(y(t),e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function S(){return P(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let z;function F(){if(void 0===z){z=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){z=!0}}return z}function T(t,e,n){t.classList[n?"add":"remove"](e)}function N(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,o,e),i}const G=new Map;let D,R=0;function B(t,e,n,o,i,s,l,r=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);a+=100*t+`%{${l(o,1-o)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,d=y(t),{stylesheet:m,rules:p}=G.get(d)||function(t,e){const n={stylesheet:x(e),rules:{}};return G.set(t,n),n}(d,t);p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${i}ms 1 both`,R+=1,f}function H(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),R-=i,R||g((()=>{R||(G.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),G.clear())})))}function I(t){D=t}function O(){if(!D)throw new Error("Function called outside component initialization");return D}const V=[],W=[],J=[],U=[],Q=Promise.resolve();let X=!1;function Z(t){J.push(t)}const K=new Set;let Y,tt=0;function et(){const t=D;do{for(;tt<V.length;){const t=V[tt];tt++,I(t),nt(t.$$)}for(I(null),V.length=0,tt=0;W.length;)W.pop()();for(let t=0;t<J.length;t+=1){const e=J[t];K.has(e)||(K.add(e),e())}J.length=0}while(V.length);for(;U.length;)U.pop()();X=!1,K.clear(),I(t)}function nt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function ot(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const it=new Set;let st;function lt(){st={r:0,c:[],p:st}}function rt(){st.r||s(st.c),st=st.p}function ct(t,e){t&&t.i&&(it.delete(t),t.i(e))}function at(t,e,n,o){if(t&&t.o){if(it.has(t))return;it.add(t),st.c.push((()=>{it.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ut={duration:0};function ft(n,o,i,r){let c=o(n,i),a=r?0:1,u=null,f=null,d=null;function m(){d&&H(n,d)}function p(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:i=0,duration:l=300,easing:r=e,tick:h=t,css:w}=c||ut,y={start:$()+i,b:o};o||(y.group=st,st.r+=1),u||f?f=y:(w&&(m(),d=B(n,a,o,l,i,r,w)),o&&h(0,1),u=p(y,l),Z((()=>ot(n,o,"start"))),function(t){let e;0===v.size&&g(b),new Promise((n=>{v.add(e={c:t,f:n})}))}((t=>{if(f&&t>f.start&&(u=p(f,l),f=null,ot(n,u.b,"start"),w&&(m(),d=B(n,a,u.b,u.duration,0,r,c.css))),u)if(t>=u.end)h(a=u.b,1-a),ot(n,u.b,"end"),f||(u.b?m():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*r(e/u.duration),h(a,1-a)}return!(!u&&!f)})))}return{run(t){l(c)?(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then((()=>{c=c(),h(t)})):h(t)},end(){m(),u=f=null}}}const dt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const l=t[s],r=e[s];if(r){for(const t in l)t in r||(o[t]=1);for(const t in r)i[t]||(n[t]=r[t],i[t]=1);t[s]=r}else for(const t in l)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function ht(t){t&&t.c()}function $t(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:a,after_update:u}=t.$$;r&&r.m(e,n),i||Z((()=>{const e=c.map(o).filter(l);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(Z)}function gt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(V.push(t),X||(X=!0,Q.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(e,n,o,l,r,c,a,u=[-1]){const f=D;I(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&vt(e,t)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(C)}else d.fragment&&d.fragment.c();n.intro&&ct(e.$$.fragment),$t(e,n.target,n.anchor,n.customElement),et()}I(f)}class wt{$destroy(){gt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function xt(e,n=t){let o;const i=new Set;function s(t){if(r(e,t)&&(e=t,o)){const t=!yt.length;for(const t of i)t[1](),yt.push(t,e);if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,r=t){const c=[l,r];return i.add(c),1===i.size&&(o=n(s)||t),l(e),()=>{i.delete(c),0===i.size&&(o(),o=null)}}}}const kt=xt(!1),Ct=xt(!1);function qt(t){let e,n,o,i,s,l;const r=t[4].default,c=a(r,t,t[3],null);return{c(){e=E("span"),n=E("a"),c&&c.c(),L(n,"class",o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"),L(n,"href",t[0])},m(o,r){var a;k(o,e,r),w(e,n),c&&c.m(n,null),i=!0,s||(l=_(n,"click",(a=t[2],function(t){return t.preventDefault(),a.call(this,t)})),s=!0)},p(t,[e]){c&&c.p&&(!i||8&e)&&d(c,r,t,t[3],i?f(r,t[3],e,null):m(t[3]),null),(!i||2&e&&o!==(o=p(t[1]?"mobile":"not-mobile")+" svelte-1uvri9t"))&&L(n,"class",o),(!i||1&e)&&L(n,"href",t[0])},i(t){i||(ct(c,t),i=!0)},o(t){at(c,t),i=!1},d(t){t&&C(e),c&&c.d(t),s=!1,l()}}}function Et(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=function(){const t=O();return(e,n,{cancelable:o=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=N(e,n,{cancelable:o});return i.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}();let l,{segment:r}=e;return kt.subscribe((t=>{n(1,l=t)})),t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(3,i=t.$$scope)},[r,l,function({target:t}){const e=t.getAttribute("href");s("click",{section:document.querySelector(e),ref:e}),l&&Ct.set(!1)},i,o]}class jt extends wt{constructor(t){super(),bt(this,t,Et,qt,r,{segment:0})}}function Pt(e){let n,o,i,s,r,c,a;return{c(){n=E("button"),o=j("svg"),i=j("path"),s=j("path"),r=j("path"),L(i,"class","top svelte-1ks11a7"),L(i,"d","m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"),L(s,"class","middle svelte-1ks11a7"),L(s,"d","m 30,50 h 40"),L(r,"class","bottom svelte-1ks11a7"),L(r,"d","m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"),L(o,"viewBox","0 0 100 100"),L(o,"fill","none"),L(o,"stroke","currentColor"),L(o,"stroke-width","5"),L(o,"width",e[3]),L(o,"class","svelte-1ks11a7"),T(o,"open",e[0]),L(n,"aria-expanded",e[0]),L(n,"aria-label",e[2]),L(n,"class","svelte-1ks11a7")},m(t,u){k(t,n,u),w(n,o),w(o,i),w(o,s),w(o,r),c||(a=_(n,"click",(function(){l(e[1])&&e[1].apply(this,arguments)})),c=!0)},p(t,[i]){e=t,8&i&&L(o,"width",e[3]),1&i&&T(o,"open",e[0]),1&i&&L(n,"aria-expanded",e[0]),4&i&&L(n,"aria-label",e[2])},i:t,o:t,d(t){t&&C(n),c=!1,a()}}}function St(t,e,n){let{open:o=!1}=e,{onClick:i=(()=>{n(0,o=!o)})}=e,{ariaLabel:s="toggle menu"}=e,{width:l=80}=e;return t.$$set=t=>{"open"in t&&n(0,o=t.open),"onClick"in t&&n(1,i=t.onClick),"ariaLabel"in t&&n(2,s=t.ariaLabel),"width"in t&&n(3,l=t.width)},[o,i,s,l]}class _t extends wt{constructor(t){super(),bt(this,t,St,Pt,r,{open:0,onClick:1,ariaLabel:2,width:3})}}function Lt(t){const e=t-1;return e*e*e+1}function At(t,{delay:e=0,duration:n=400,easing:o=Lt,x:i=0,y:s=0,opacity:l=0}={}){const r=getComputedStyle(t),c=+r.opacity,a="none"===r.transform?"":r.transform,u=c*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-u*e}`}}const Mt=t=>({}),zt=t=>({}),Ft=t=>({}),Tt=t=>({}),Nt=t=>({}),Gt=t=>({class:"home"});function Dt(t){let e,n;const o=t[5].center,i=a(o,t,t[4],Tt);return{c(){e=E("div"),i&&i.c(),L(e,"class","horizontal")},m(t,o){k(t,e,o),i&&i.m(e,null),n=!0},p(t,e){i&&i.p&&(!n||16&e)&&d(i,o,t,t[4],n?f(o,t[4],e,Ft):m(t[4]),Tt)},i(t){n||(ct(i,t),n=!0)},o(t){at(i,t),n=!1},d(t){t&&C(e),i&&i.d(t)}}}function Rt(t){let e,n,o;return n=new _t({props:{open:t[1],onClick:t[3],width:"30"}}),{c(){e=E("div"),ht(n.$$.fragment),L(e,"class","right svelte-1a3ag97")},m(t,i){k(t,e,i),$t(n,e,null),o=!0},p(t,e){const o={};2&e&&(o.open=t[1]),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function Bt(t){let e,n,o;const i=t[5].center,s=a(i,t,t[4],zt);return{c(){e=E("div"),s&&s.c(),L(e,"class","vertical")},m(t,n){k(t,e,n),s&&s.m(e,null),o=!0},p(t,e){s&&s.p&&(!o||16&e)&&d(s,i,t,t[4],o?f(i,t[4],e,Mt):m(t[4]),zt)},i(t){o||(ct(s,t),Z((()=>{n||(n=ft(e,At,{y:-100,duration:400},!0)),n.run(1)})),o=!0)},o(t){at(s,t),n||(n=ft(e,At,{y:-100,duration:400},!1)),n.run(0),o=!1},d(t){t&&C(e),s&&s.d(t),t&&n&&n.end()}}}function Ht(t){let e,n,o,i,s,l,r;const c=t[5].left,u=a(c,t,t[4],Gt),p=[Rt,Dt],h=[];function $(t,e){return t[2]?0:1}i=$(t),s=h[i]=p[i](t);let g=t[1]&&Bt(t);return{c(){e=E("nav"),n=E("div"),u&&u.c(),o=S(),s.c(),l=S(),g&&g.c(),L(n,"class","bar svelte-1a3ag97"),M(e,"background-color",t[0]),L(e,"class","svelte-1a3ag97")},m(t,s){k(t,e,s),w(e,n),u&&u.m(n,null),w(n,o),h[i].m(n,null),w(e,l),g&&g.m(e,null),r=!0},p(t,[o]){u&&u.p&&(!r||16&o)&&d(u,c,t,t[4],r?f(c,t[4],o,Nt):m(t[4]),Gt);let l=i;i=$(t),i===l?h[i].p(t,o):(lt(),at(h[l],1,1,(()=>{h[l]=null})),rt(),s=h[i],s?s.p(t,o):(s=h[i]=p[i](t),s.c()),ct(s,1),s.m(n,null)),t[1]?g?(g.p(t,o),2&o&&ct(g,1)):(g=Bt(t),g.c(),ct(g,1),g.m(e,null)):g&&(lt(),at(g,1,1,(()=>{g=null})),rt()),(!r||1&o)&&M(e,"background-color",t[0])},i(t){r||(ct(u,t),ct(s),ct(g),r=!0)},o(t){at(u,t),at(s),at(g),r=!1},d(t){t&&C(e),u&&u.d(t),h[i].d(),g&&g.d()}}}function It(t,e,n){let o,i,{$$slots:s={},$$scope:l}=e,{color:r}=e;return kt.subscribe((t=>{n(2,i=t)})),Ct.subscribe((t=>{n(1,o=t)})),t.$$set=t=>{"color"in t&&n(0,r=t.color),"$$scope"in t&&n(4,l=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&Ct.set(o)},[r,o,i,()=>{n(1,o=!o)},l,s]}class Ot extends wt{constructor(t){super(),bt(this,t,It,Ht,r,{color:0})}}function Vt(e){let n,o,i,s,l,r,c,a,u,f,d,m,p,h,$,g,v;return{c(){n=E("link"),o=S(),i=E("div"),s=E("div"),l=E("h2"),r=P(e[0]),c=S(),a=E("div"),u=E("a"),f=P("Repo "),d=E("i"),m=S(),p=E("p"),h=S(),$=E("hr"),g=S(),v=E("p"),L(n,"rel","stylesheet"),L(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),L(l,"class","title svelte-1vw57mp"),L(d,"class","fa fa-github"),L(u,"href",e[2]),L(u,"class","button svelte-1vw57mp"),L(a,"class","repo svelte-1vw57mp"),L(s,"class","top svelte-1vw57mp"),L(p,"class","description"),L($,"class","separator svelte-1vw57mp"),L(v,"class","contribution"),L(i,"class","box svelte-1vw57mp"),M(i,"--top-color",e[4])},m(t,b){w(document.head,n),k(t,o,b),k(t,i,b),w(i,s),w(s,l),w(l,r),w(s,c),w(s,a),w(a,u),w(u,f),w(u,d),w(i,m),w(i,p),p.innerHTML=e[1],w(i,h),w(i,$),w(i,g),w(i,v),v.innerHTML=e[3]},p(t,[e]){1&e&&A(r,t[0]),4&e&&L(u,"href",t[2]),2&e&&(p.innerHTML=t[1]),8&e&&(v.innerHTML=t[3]),16&e&&M(i,"--top-color",t[4])},i:t,o:t,d(t){C(n),t&&C(o),t&&C(i)}}}function Wt(t,e,n){let{title:o}=e,{description:i}=e,{link:s}=e,{contribution:l}=e,{color:r}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,i=t.description),"link"in t&&n(2,s=t.link),"contribution"in t&&n(3,l=t.contribution),"color"in t&&n(4,r=t.color)},[o,i,s,l,r]}class Jt extends wt{constructor(t){super(),bt(this,t,Wt,Vt,r,{title:0,description:1,link:2,contribution:3,color:4})}}function Ut(e){let n,o,i,s,l,r;return{c(){n=E("div"),o=E("h3"),i=P(e[0]),s=S(),l=E("div"),r=E("div"),L(o,"class","svelte-93ljz6"),L(r,"id","level"),M(r,"width",e[1]),M(r,"background-color",e[2]),L(r,"class","svelte-93ljz6"),L(l,"id","progressbar"),L(l,"class","svelte-93ljz6"),L(n,"class","competence svelte-93ljz6")},m(t,e){k(t,n,e),w(n,o),w(o,i),w(n,s),w(n,l),w(l,r)},p(t,[e]){1&e&&A(i,t[0]),2&e&&M(r,"width",t[1]),4&e&&M(r,"background-color",t[2])},i:t,o:t,d(t){t&&C(n)}}}function Qt(t,e,n){let{name:o}=e,{level:i}=e,{color:s}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"level"in t&&n(1,i=t.level),"color"in t&&n(2,s=t.color)},[o,i,s]}class Xt extends wt{constructor(t){super(),bt(this,t,Qt,Ut,r,{name:0,level:1,color:2})}}function Zt(e){let n,o,i,s;return{c(){n=E("link"),o=S(),i=E("a"),L(n,"rel","stylesheet"),L(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),L(i,"href",e[0]),L(i,"class",s=p("fa fa-"+e[1])+" svelte-vuyq9m")},m(t,e){w(document.head,n),k(t,o,e),k(t,i,e)},p(t,[e]){1&e&&L(i,"href",t[0]),2&e&&s!==(s=p("fa fa-"+t[1])+" svelte-vuyq9m")&&L(i,"class",s)},i:t,o:t,d(t){C(n),t&&C(o),t&&C(i)}}}function Kt(t,e,n){let{link:o}=e,{name:i}=e;return t.$$set=t=>{"link"in t&&n(0,o=t.link),"name"in t&&n(1,i=t.name)},[o,i]}class Yt extends wt{constructor(t){super(),bt(this,t,Kt,Zt,r,{link:0,name:1})}}function te(t){let e,n,o,i,s,l,r;const c=t[2].default,u=a(c,t,t[1],null);return{c(){e=E("link"),n=S(),o=E("span"),i=E("i"),l=S(),u&&u.c(),L(e,"rel","stylesheet"),L(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),L(i,"class",s=p("fa fa-"+t[0])+" svelte-vuyq9m"),L(o,"class","contact")},m(t,s){w(document.head,e),k(t,n,s),k(t,o,s),w(o,i),w(o,l),u&&u.m(o,null),r=!0},p(t,[e]){(!r||1&e&&s!==(s=p("fa fa-"+t[0])+" svelte-vuyq9m"))&&L(i,"class",s),u&&u.p&&(!r||2&e)&&d(u,c,t,t[1],r?f(c,t[1],e,null):m(t[1]),null)},i(t){r||(ct(u,t),r=!0)},o(t){at(u,t),r=!1},d(t){C(e),t&&C(n),t&&C(o),u&&u.d(t)}}}function ee(t,e,n){let{$$slots:o={},$$scope:i}=e,{icon:s}=e;return t.$$set=t=>{"icon"in t&&n(0,s=t.icon),"$$scope"in t&&n(1,i=t.$$scope)},[s,i,o]}class ne extends wt{constructor(t){super(),bt(this,t,ee,te,r,{icon:0})}}function oe(e){let n;return{c(){n=E("canvas"),L(n,"width",e[0]),L(n,"height",e[1])},m(t,o){k(t,n,o),e[3](n)},p(t,[e]){1&e&&L(n,"width",t[0]),2&e&&L(n,"height",t[1])},i:t,o:t,d(t){t&&C(n),e[3](null)}}}function ie(t){return Math.floor(Math.random()*t)}function se(t,e,n){let o,{width:i}=e,{height:s}=e,l=[];class r{constructor(t,e,n){this.x=t+ie(n),this.y=e+ie(n),this.r=Math.random()}evolve(){0===this.y?this.y=s:this.y=this.y-1,this.x=this.x+(Math.random()-.5)/4}}var c;return c=()=>{const t=o.getContext("2d");let e=requestAnimationFrame((function n(){e=requestAnimationFrame(n);let o=t.createLinearGradient(0,0,0,2e3);o.addColorStop(0,"#030318"),o.addColorStop(1," #3f034f"),t.fillStyle=o,t.fillRect(0,0,i,s),l.forEach((function(e){t.beginPath(),t.fillStyle="rgb(255, 255, 255)",t.arc(e.x,e.y,e.r,0,2*Math.PI),t.fill(),e.evolve()}))}));return()=>{cancelAnimationFrame(e)}},O().$$.on_mount.push(c),t.$$set=t=>{"width"in t&&n(0,i=t.width),"height"in t&&n(1,s=t.height)},t.$$.update=()=>{3&t.$$.dirty&&function(t,e,n){if(t&&e){l=[];for(let o=0;o<t;o+=n)for(let t=0;t<e;t+=n)l.push(new r(o,t,n))}}(i,s,50)},[i,s,o,function(t){W[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class le extends wt{constructor(t){super(),bt(this,t,se,oe,r,{width:0,height:1})}}var re={title:"François Michel",text:"Security engineer intern at  <a href='https://secutix.com' style='color: inherit'>SECUTIX</a>"},ce={title:"About me",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Arcu ac tortor dignissim convallis aenean et tortor at risus. Consequat id porta nibh venenatis cras sed felis eget. Neque volutpat ac tincidunt vitae. Eget mauris pharetra et ultrices neque ornare. Augue mauris augue neque gravida. In nisl nisi scelerisque eu ultrices. Elit duis tristique sollicitudin nibh sit. Consequat nisl vel pretium lectus quam id leo in vitae. Ut sem nulla pharetra diam sit amet nisl suscipit. Nunc sed id semper risus. Amet commodo nulla facilisi nullam vehicula ipsum a. Amet luctus venenatis lectus magna fringilla urna porttitor. Dictum sit amet justo donec enim diam. Accumsan in nisl nisi scelerisque eu. Nunc non blandit massa enim nec dui nunc. In vitae turpis massa sed elementum tempus egestas. Elementum tempus egestas sed sed. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Pretium vulputate sapien nec sagittis aliquam. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Donec massa sapien faucibus et molestie ac. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Libero id faucibus nisl tincidunt eget nullam non nisi est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque. Mauris cursus mattis molestie a iaculis. Tellus at urna condimentum mattis pellentesque. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit."},ae={title:"Projects",entries:[{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Tweets Sentiment Analysis (NLP)",link:"https://github.com/flmichel/sentiment-classification",description:"Course Project - EPFL - Grade: 5.5/6",contribution:"Built a python Machine Learning classiﬁer performing sentiment analysis on a set of tweets. Achieved 88.2% accuracy, using a pre-trained BERT model combined with multiple pre-processing techniques. Other models were evaluated such as SVM and MLP."},{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Forest Firefighters",link:"https://github.com/cyberbotics/webots-projects/tree/master/projects/forest_firefighters",description:"Project during a summer internship at <a href='https://cyberbotics.com' >Cyberbotics</a>",contribution:"Implemented a simulation that features a small forest wildfire and a few firefighter robots: a couple of drones and legged robots equipped with cameras."},{title:"Event Platform",link:"https://github.com/flmichel/event-platform-gql",description:"Course Project - ETHZ - Grade: 6/6",contribution:"Designed and implemented a secure event management application using GraphQL Shield and TypeScript."},{title:"Game boy emulator",link:"https://github.com/flmichel/gameboj",description:"Course Project - EPFL - Grade: 5.75/6",contribution:"Develept a Nintendo Game Boy emulator in Java, during the EPFL course “Practice of object-oriented programming”."}]},ue={title:"Skills",techincal:[{name:"Java",level:"88%"},{name:"Go",level:"88%"},{name:"Python",level:"75%"},{name:"C",level:"55%"}],languages:[{name:"French",level:"100%"},{name:"English",level:"95%"},{name:"German",level:"25%"},{name:"Japanese",level:"20%"}]},fe={title:"Resume",link:"/resume.pdf"},de={title:"Get in touch",social:{title:"Social medias",websites:[{name:"linkedin",link:"https://www.linkedin.com/in/francois-michel/"},{name:"github",link:"https://github.com/flmichel/"},{name:"facebook",link:"https://www.facebook.com/francois.michel.3154"}]},information:{title:"Any question?",phone:"+41 77 485 89 65",address:"Chemin des Vignes 7, 1124 Gollion, Switerland",email:"francois.l.michel@gmail.com"}},me={topbar:"rgba(221, 247, 255, 1)",theme:"rgb(47, 122, 218)"};const{window:pe}=dt;function he(t,e,n){const o=t.slice();return o[6]=e[n],o}function $e(t,e,n){const o=t.slice();return o[9]=e[n],o}function ge(t,e,n){const o=t.slice();return o[9]=e[n],o}function ve(t,e,n){const o=t.slice();return o[14]=e[n],o}function be(t){let e;return{c(){e=P("<François />")},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function we(t){let e,n,o;return n=new jt({props:{segment:"#home",$$slots:{default:[be]},$$scope:{ctx:t}}}),n.$on("click",De),{c(){e=E("div"),ht(n.$$.fragment),L(e,"slot","left")},m(t,i){k(t,e,i),$t(n,e,null),o=!0},p(t,e){const o={};131072&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(ct(n.$$.fragment,t),o=!0)},o(t){at(n.$$.fragment,t),o=!1},d(t){t&&C(e),gt(n)}}}function ye(e){let n,o=ce.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function xe(e){let n,o=ae.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function ke(e){let n,o=ue.title+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Ce(e){let n,o,i,s=fe.title+" ";return{c(){n=P(s),o=S(),i=E("i"),L(i,"class","fa fa-file-pdf-o")},m(t,e){k(t,n,e),k(t,o,e),k(t,i,e)},p:t,d(t){t&&C(n),t&&C(o),t&&C(i)}}}function qe(t){let e,n,o,i,s,l,r,c,a;return n=new jt({props:{segment:"#about",$$slots:{default:[ye]},$$scope:{ctx:t}}}),n.$on("click",De),i=new jt({props:{segment:"#projects",$$slots:{default:[xe]},$$scope:{ctx:t}}}),i.$on("click",De),l=new jt({props:{segment:"#skills",$$slots:{default:[ke]},$$scope:{ctx:t}}}),l.$on("click",De),c=new jt({props:{segment:"#resume",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),c.$on("click",Re),{c(){e=E("div"),ht(n.$$.fragment),o=S(),ht(i.$$.fragment),s=S(),ht(l.$$.fragment),r=S(),ht(c.$$.fragment),L(e,"slot","center")},m(t,u){k(t,e,u),$t(n,e,null),w(e,o),$t(i,e,null),w(e,s),$t(l,e,null),w(e,r),$t(c,e,null),a=!0},p(t,e){const o={};131072&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};131072&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const r={};131072&e&&(r.$$scope={dirty:e,ctx:t}),l.$set(r);const a={};131072&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){a||(ct(n.$$.fragment,t),ct(i.$$.fragment,t),ct(l.$$.fragment,t),ct(c.$$.fragment,t),a=!0)},o(t){at(n.$$.fragment,t),at(i.$$.fragment,t),at(l.$$.fragment,t),at(c.$$.fragment,t),a=!1},d(t){t&&C(e),gt(n),gt(i),gt(l),gt(c)}}}function Ee(t){let e,o;const i=[t[14],{color:me.theme}];let s={};for(let t=0;t<i.length;t+=1)s=n(s,i[t]);return e=new Jt({props:s}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(i,[pt(t[14]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function je(t){let e,o;const i=[t[9],{color:me.theme}];let s={};for(let t=0;t<i.length;t+=1)s=n(s,i[t]);return e=new Xt({props:s}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(i,[pt(t[9]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Pe(t){let e,o;const i=[t[9],{color:me.theme}];let s={};for(let t=0;t<i.length;t+=1)s=n(s,i[t]);return e=new Xt({props:s}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(i,[pt(t[9]),{color:me.theme}]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function Se(t){let e,o;const i=[t[6]];let s={};for(let t=0;t<i.length;t+=1)s=n(s,i[t]);return e=new Yt({props:s}),{c(){ht(e.$$.fragment)},m(t,n){$t(e,t,n),o=!0},p(t,n){const o=0&n?mt(i,[pt(t[6])]):{};e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),o=!1},d(t){gt(e,t)}}}function _e(e){let n,o,i=de.information.email+"";return{c(){n=E("a"),o=P(i),L(n,"href","mailto:"+de.information.email),L(n,"class","svelte-xtlck8")},m(t,e){k(t,n,e),w(n,o)},p:t,d(t){t&&C(n)}}}function Le(e){let n,o=de.information.phone+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Ae(e){let n,o=de.information.address+"";return{c(){n=P(o)},m(t,e){k(t,n,e)},p:t,d(t){t&&C(n)}}}function Me(t){let e;return{c(){e=E("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr 2fr;\n\t\t\tgrid-template-rows: 0.2fr 2fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title title"\n\t\t\t\t"profile about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\tgrid-template-rows: 0.3fr 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title contact-title"\n\t\t\t\t"social-icons contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 40px;\n\t\t\tpadding-right: 40px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function ze(t){let e;return{c(){e=E("style"),e.textContent='#about {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t"title"\n\t\t\t\t"profile"\n\t\t\t\t"about";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-areas:\n\t\t\t\t"social-title"\n\t\t\t\t"social-icons"\n\t\t\t\t"contact-title"\n\t\t\t\t"contact-info";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 10px;\n\t\t\tpadding-right: 10px;\n\t\t}'},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Fe(t){let e;return{c(){e=E("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Te(t){let e;return{c(){e=E("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ne(t){let e;return{c(){e=E("style"),e.textContent=".cards {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t}"},m(t,n){k(t,e,n)},d(t){t&&C(e)}}}function Ge(t){let e,n,o,i,s,l,r,a,u,f,d,m,p,h,$,g,v,b,y,x,j,A,z,T,N,G,D,R,B,H,I,O,V,W,J,U,Q,X,K,Y,tt,et,nt,ot,it,st,ut,ft,dt,mt,pt,vt,bt,wt,yt,xt,kt,Ct,qt=re.text+"";Z(t[4]),n=new Ot({props:{color:me.topbar,$$slots:{center:[qe],left:[we]},$$scope:{ctx:t}}}),s=new le({props:{width:t[0],height:t[2]}});let Et=ae.entries,jt=[];for(let e=0;e<Et.length;e+=1)jt[e]=Ee(ve(t,Et,e));const Pt=t=>at(jt[t],1,1,(()=>{jt[t]=null}));let St=ue.techincal,_t=[];for(let e=0;e<St.length;e+=1)_t[e]=je(ge(t,St,e));const Lt=t=>at(_t[t],1,1,(()=>{_t[t]=null}));let At=ue.languages,Mt=[];for(let e=0;e<At.length;e+=1)Mt[e]=Pe($e(t,At,e));const zt=t=>at(Mt[t],1,1,(()=>{Mt[t]=null}));W=new le({props:{width:t[0],height:t[3]}});let Ft=de.social.websites,Tt=[];for(let e=0;e<Ft.length;e+=1)Tt[e]=Se(he(t,Ft,e));const Nt=t=>at(Tt[t],1,1,(()=>{Tt[t]=null}));function Gt(t,e){return t[1]?ze:Me}ut=new ne({props:{icon:"envelope",$$slots:{default:[_e]},$$scope:{ctx:t}}}),dt=new ne({props:{icon:"phone",$$slots:{default:[Le]},$$scope:{ctx:t}}}),pt=new ne({props:{icon:"map-marker ",$$slots:{default:[Ae]},$$scope:{ctx:t}}});let Dt=Gt(t),Rt=Dt(t);function Bt(t,e){return t[0]>1200?Ne:t[0]>800?Te:Fe}let Ht=Bt(t),It=Ht(t);return{c(){e=E("div"),ht(n.$$.fragment),o=S(),i=E("div"),ht(s.$$.fragment),l=S(),r=E("div"),a=E("h1"),a.textContent=`${re.title}`,u=S(),f=E("p"),d=S(),m=E("section"),p=E("h2"),p.textContent=`${ce.title}`,h=S(),$=E("img"),v=S(),b=E("p"),b.textContent=`${ce.text}`,y=S(),x=E("section"),j=E("h2"),j.textContent=`${ae.title}`,A=S(),z=E("div");for(let t=0;t<jt.length;t+=1)jt[t].c();T=S(),N=E("section"),G=E("h2"),G.textContent="Skills",D=S(),R=E("div"),B=E("div");for(let t=0;t<_t.length;t+=1)_t[t].c();H=S(),I=E("div");for(let t=0;t<Mt.length;t+=1)Mt[t].c();O=S(),V=E("div"),ht(W.$$.fragment),J=S(),U=E("div"),Q=E("h2"),Q.textContent=`${de.title}`,X=S(),K=E("div"),Y=E("h3"),Y.textContent=`${de.social.title}`,tt=S(),et=E("div");for(let t=0;t<Tt.length;t+=1)Tt[t].c();var w,k;nt=S(),ot=E("h3"),ot.textContent=`${de.information.title}`,it=S(),st=E("div"),ht(ut.$$.fragment),ft=S(),ht(dt.$$.fragment),mt=S(),ht(pt.$$.fragment),bt=S(),Rt.c(),wt=S(),It.c(),yt=P(""),L(e,"id","topbar"),L(e,"class","svelte-xtlck8"),L(a,"class","svelte-xtlck8"),L(f,"class","typewriter svelte-xtlck8"),L(r,"class","text svelte-xtlck8"),L(i,"id","home"),L(i,"class","svelte-xtlck8"),L(p,"class","section-title svelte-xtlck8"),w=$.src,k=g="profile.png",c||(c=document.createElement("a")),c.href=k,w!==c.href&&L($,"src","profile.png"),L($,"alt","profile"),M($,"width","200px"),L($,"class","svelte-xtlck8"),L(b,"class","svelte-xtlck8"),L(m,"id","about"),L(m,"class","svelte-xtlck8"),L(j,"class","section-title svelte-xtlck8"),L(z,"class","cards svelte-xtlck8"),L(x,"id","projects"),L(x,"class","svelte-xtlck8"),L(G,"class","section-title svelte-xtlck8"),L(B,"class","c1"),L(I,"class","c2"),L(R,"class","competences svelte-xtlck8"),L(N,"id","skills"),L(N,"class","svelte-xtlck8"),L(Q,"class","section-title svelte-xtlck8"),L(Y,"class","social-title svelte-xtlck8"),L(et,"class","social-icons svelte-xtlck8"),L(ot,"class","contact-title svelte-xtlck8"),L(st,"class","contact-info svelte-xtlck8"),L(K,"class","content svelte-xtlck8"),L(U,"class","text svelte-xtlck8"),Z((()=>t[5].call(U))),L(V,"id","footer"),L(V,"class","svelte-xtlck8")},m(c,g){k(c,e,g),$t(n,e,null),k(c,o,g),k(c,i,g),$t(s,i,null),w(i,l),w(i,r),w(r,a),w(r,u),w(r,f),f.innerHTML=qt,k(c,d,g),k(c,m,g),w(m,p),w(m,h),w(m,$),w(m,v),w(m,b),k(c,y,g),k(c,x,g),w(x,j),w(x,A),w(x,z);for(let t=0;t<jt.length;t+=1)jt[t].m(z,null);k(c,T,g),k(c,N,g),w(N,G),w(N,D),w(N,R),w(R,B);for(let t=0;t<_t.length;t+=1)_t[t].m(B,null);w(R,H),w(R,I);for(let t=0;t<Mt.length;t+=1)Mt[t].m(I,null);k(c,O,g),k(c,V,g),$t(W,V,null),w(V,J),w(V,U),w(U,Q),w(U,X),w(U,K),w(K,Y),w(K,tt),w(K,et);for(let t=0;t<Tt.length;t+=1)Tt[t].m(et,null);w(K,nt),w(K,ot),w(K,it),w(K,st),$t(ut,st,null),w(st,ft),$t(dt,st,null),w(st,mt),$t(pt,st,null),vt=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=E("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=F();let i;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=_(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{i=_(n.contentWindow,"resize",e)}),w(t,n),()=>{(o||i&&n.contentWindow)&&i(),C(n)}}(U,t[5].bind(U)),k(c,bt,g),Rt.m(c,g),k(c,wt,g),It.m(c,g),k(c,yt,g),xt=!0,kt||(Ct=_(pe,"resize",t[4]),kt=!0)},p(t,[e]){const o={};131072&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const i={};if(1&e&&(i.width=t[0]),4&e&&(i.height=t[2]),s.$set(i),0&e){let n;for(Et=ae.entries,n=0;n<Et.length;n+=1){const o=ve(t,Et,n);jt[n]?(jt[n].p(o,e),ct(jt[n],1)):(jt[n]=Ee(o),jt[n].c(),ct(jt[n],1),jt[n].m(z,null))}for(lt(),n=Et.length;n<jt.length;n+=1)Pt(n);rt()}if(0&e){let n;for(St=ue.techincal,n=0;n<St.length;n+=1){const o=ge(t,St,n);_t[n]?(_t[n].p(o,e),ct(_t[n],1)):(_t[n]=je(o),_t[n].c(),ct(_t[n],1),_t[n].m(B,null))}for(lt(),n=St.length;n<_t.length;n+=1)Lt(n);rt()}if(0&e){let n;for(At=ue.languages,n=0;n<At.length;n+=1){const o=$e(t,At,n);Mt[n]?(Mt[n].p(o,e),ct(Mt[n],1)):(Mt[n]=Pe(o),Mt[n].c(),ct(Mt[n],1),Mt[n].m(I,null))}for(lt(),n=At.length;n<Mt.length;n+=1)zt(n);rt()}const l={};if(1&e&&(l.width=t[0]),8&e&&(l.height=t[3]),W.$set(l),0&e){let n;for(Ft=de.social.websites,n=0;n<Ft.length;n+=1){const o=he(t,Ft,n);Tt[n]?(Tt[n].p(o,e),ct(Tt[n],1)):(Tt[n]=Se(o),Tt[n].c(),ct(Tt[n],1),Tt[n].m(et,null))}for(lt(),n=Ft.length;n<Tt.length;n+=1)Nt(n);rt()}const r={};131072&e&&(r.$$scope={dirty:e,ctx:t}),ut.$set(r);const c={};131072&e&&(c.$$scope={dirty:e,ctx:t}),dt.$set(c);const a={};131072&e&&(a.$$scope={dirty:e,ctx:t}),pt.$set(a),Dt!==(Dt=Gt(t))&&(Rt.d(1),Rt=Dt(t),Rt&&(Rt.c(),Rt.m(wt.parentNode,wt))),Ht!==(Ht=Bt(t))&&(It.d(1),It=Ht(t),It&&(It.c(),It.m(yt.parentNode,yt)))},i(t){if(!xt){ct(n.$$.fragment,t),ct(s.$$.fragment,t);for(let t=0;t<Et.length;t+=1)ct(jt[t]);for(let t=0;t<St.length;t+=1)ct(_t[t]);for(let t=0;t<At.length;t+=1)ct(Mt[t]);ct(W.$$.fragment,t);for(let t=0;t<Ft.length;t+=1)ct(Tt[t]);ct(ut.$$.fragment,t),ct(dt.$$.fragment,t),ct(pt.$$.fragment,t),xt=!0}},o(t){at(n.$$.fragment,t),at(s.$$.fragment,t),jt=jt.filter(Boolean);for(let t=0;t<jt.length;t+=1)at(jt[t]);_t=_t.filter(Boolean);for(let t=0;t<_t.length;t+=1)at(_t[t]);Mt=Mt.filter(Boolean);for(let t=0;t<Mt.length;t+=1)at(Mt[t]);at(W.$$.fragment,t),Tt=Tt.filter(Boolean);for(let t=0;t<Tt.length;t+=1)at(Tt[t]);at(ut.$$.fragment,t),at(dt.$$.fragment,t),at(pt.$$.fragment,t),xt=!1},d(t){t&&C(e),gt(n),t&&C(o),t&&C(i),gt(s),t&&C(d),t&&C(m),t&&C(y),t&&C(x),q(jt,t),t&&C(T),t&&C(N),q(_t,t),q(Mt,t),t&&C(O),t&&C(V),gt(W),q(Tt,t),gt(ut),gt(dt),gt(pt),vt(),t&&C(bt),Rt.d(t),t&&C(wt),It.d(t),t&&C(yt),kt=!1,Ct()}}}function De(t){t.detail.section.scrollIntoView({behavior:"smooth"}),window.history.replaceState({},"",t.detail.ref)}function Re(){window.open("/resume.pdf")}function Be(t,e,n){let o,i,s,l;return t.$$.update=()=>{1&t.$$.dirty&&n(1,s=o<800),2&t.$$.dirty&&kt.set(s)},[o,s,i,l,function(){n(0,o=pe.innerWidth),n(2,i=pe.innerHeight)},function(){l=this.clientHeight,n(3,l)}]}return new class extends wt{constructor(t){super(),bt(this,t,Be,Ge,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
