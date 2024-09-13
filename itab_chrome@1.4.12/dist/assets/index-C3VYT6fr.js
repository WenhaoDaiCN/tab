import{a as e,b0 as n,aa as t,bj as o,m as l,h as s,H as i,v as a,I as r,x as u,a1 as d,n as c,i as v,bJ as m,M as b,bL as g}from"./index-CyyLRP8W.js";import{r as p,g as f,b as x}from"./style-BBQwFGbP.js";import{d as y}from"./use-global-config-DcVlDyFX.js";import{c as C}from"./types-Ci7ev57k.js";import"./index-B3sKL47p.js";import"./index-CXKOYI6o.js";import"./_baseGet-DEcaJYAt.js";import"./todo-nv2WtoEp.js";import"./isSymbol-Bt1TyP4H.js";import"./index-CB1eEFAV.js";function L(c){let v;const m=e(!1),b=n({...c,originalPosition:"",originalOverflow:"",visible:!1});function g(){var e,n;null==(n=null==(e=L.$el)?void 0:e.parentNode)||n.removeChild(L.$el)}function f(){if(!m.value)return;const e=b.parent;m.value=!1,e.vLoadingAddClassList=void 0,function(){const e=b.parent,n=L.ns;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(p(e,n.bm("parent","relative")),e.removeAttribute("loading-number")),p(e,n.bm("parent","hidden"))}g(),C.unmount()}()}const x=l({name:"ElLoading",setup(e,{expose:n}){const{ns:t,zIndex:o}=y("loading");return n({ns:t,zIndex:o}),()=>{const e=b.spinner||b.svg,n=s("svg",{class:"circular",viewBox:b.svgViewBox?b.svgViewBox:"0 0 50 50",...e?{innerHTML:e}:{}},[s("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),o=b.text?s("p",{class:t.b("text")},[b.text]):void 0;return s(d,{name:t.b("fade"),onAfterLeave:f},{default:i((()=>[a(r("div",{style:{backgroundColor:b.background||""},class:[t.b("mask"),b.customClass,b.fullscreen?"is-fullscreen":""]},[s("div",{class:t.b("spinner")},[n,o])]),[[u,b.visible]])]))})}}}),C=t(x),L=C.mount(document.createElement("div"));return{...o(b),setText:function(e){b.text=e},removeElLoadingChild:g,close:function(){var e;c.beforeClose&&!c.beforeClose()||(m.value=!0,clearTimeout(v),v=window.setTimeout(f,400),b.visible=!1,null==(e=c.closed)||e.call(c))},handleAfterLeave:f,vm:L,get $el(){return L.$el}}}let k;const w=function(e={}){if(!C)return;const n=j(e);if(n.fullscreen&&k)return k;const t=L({...n,closed:()=>{var e;null==(e=n.closed)||e.call(n),n.fullscreen&&(k=void 0)}});A(n,n.parent,t),h(n,n.parent,t),n.parent.vLoadingAddClassList=()=>h(n,n.parent,t);let o=n.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",n.parent.setAttribute("loading-number",o),n.parent.appendChild(t.$el),c((()=>t.visible.value=n.visible)),n.fullscreen&&(k=t),t},j=e=>{var n,t,o,l;let s;return s=v(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,target:s}},A=async(e,n,t)=>{const{nextZIndex:o}=t.vm.zIndex||t.vm._.exposed.zIndex,l={};if(e.fullscreen)t.originalPosition.value=f(document.body,"position"),t.originalOverflow.value=f(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=f(document.body,"position"),await c();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";l[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(f(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])l[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=f(n,"position");for(const[s,i]of Object.entries(l))t.$el.style[s]=i},h=(e,n,t)=>{const o=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?p(n,o.bm("parent","relative")):x(n,o.bm("parent","relative")),e.fullscreen&&e.lock?x(n,o.bm("parent","hidden")):p(n,o.bm("parent","hidden"))},I=Symbol("ElLoading"),$=(n,t)=>{var o,l,s,i;const a=t.instance,r=e=>m(t.value)?t.value[e]:void 0,u=t=>(n=>{const t=v(n)&&(null==a?void 0:a[n])||n;return t?e(t):t})(r(t)||n.getAttribute(`element-loading-${g(t)}`)),d=null!=(o=r("fullscreen"))?o:t.modifiers.fullscreen,c={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:d,target:null!=(l=r("target"))?l:d?void 0:n,body:null!=(s=r("body"))?s:t.modifiers.body,lock:null!=(i=r("lock"))?i:t.modifiers.lock};n[I]={options:c,instance:w(c)}},B={mounted(e,n){n.value&&$(e,n)},updated(e,n){const t=e[I];n.oldValue!==n.value&&(n.value&&!n.oldValue?$(e,n):n.value&&n.oldValue?m(n.value)&&((e,n)=>{for(const t of Object.keys(n))b(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[I])||n.instance.close(),e[I]=null}},V={install(e){e.directive("loading",B),e.config.globalProperties.$loading=w},directive:B,service:w};export{V as ElLoading,B as ElLoadingDirective,w as ElLoadingService,V as default,B as vLoading};
