const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./indexdb-D6yYQ1E4.js","./localforage-BVRgvwJc.js"])))=>i.map(i=>d[i]);
import{r as t,_ as s}from"./todo-nv2WtoEp.js";import{_ as e}from"./d-dialog-Dp99XzOL.js";/* empty css            */import{E as a,a as i}from"./el-tab-pane-Ckz1ShBR.js";import{D as o}from"./d-table-BgOxpmZS.js";import{getXyzrankApi as l}from"./xyzrank-BhaYzMxl.js";import{_ as r,bb as p,c as d,p as n,G as m,H as c,t as j,I as u,u as y,q as f,F as h,y as x,B as g,L as _,a_ as v,aX as b}from"./index-CyyLRP8W.js";import"./el-dialog-BoL22f5R.js";import"./index-CdRnR6wp.js";import"./index-B3sKL47p.js";import"./scroll-3JEGyj3w.js";import"./style-BBQwFGbP.js";import"./types-Ci7ev57k.js";import"./vnode-CwyaGvUL.js";import"./index-D4GlTUBi.js";import"./plugin-vue_export-helper-O3gUY6pX.js";import"./use-dialog-0gmd-idO.js";import"./icon-Dsqoi_oS.js";import"./event-BwRzfsZt.js";import"./index-CB1eEFAV.js";import"./_baseGet-DEcaJYAt.js";import"./isSymbol-Bt1TyP4H.js";import"./focus-trap-D8QWET1-.js";import"./aria-BUADUvnR.js";import"./use-global-config-DcVlDyFX.js";import"./index-CXKOYI6o.js";import"./isUndefined-DgmxjSXK.js";import"./index-hc1PwDik.js";import"./index-DjlyN6je.js";/* empty css                   */import"./main-DJB5iAKQ.js";import"./modulepreload-polyfill-Dqv5PPZA.js";import"./localforage-BVRgvwJc.js";import"./getAudio-D_HGGnT2.js";/* empty css                                                 */import"./index-BrMlOSMZ.js";import"./typescript-CRqm1_SZ.js";import"./strings-B8lWsWjR.js";import"./index-DBHOuH84.js";import"./baseRequest-CU9cTnaC.js";import"./userInfo-CZAB7rZN.js";import"./version-DYnJBHiW.js";const k={class:"xyzrank-content h-full pt10 select-text"},I={class:"pl20 pr20"},w={class:"d-layout h-full bt",style:{height:"calc(100% - 66px)"}},E={class:"d-layout-content mt10 d-auto-y pl10",style:""},L={class:"f13"},z=["href"],G=["src"],U={class:"d-main ml10"},P={class:"d-elip",style:{"line-height":"16px"}},C={class:"d-elip d-sub f12"},N=(t=>(v("data-v-63e9ecf5"),t=t(),b(),t))((()=>j("p",{class:"ac f12"},[_(" 更多内容可前往 "),j("a",{style:{color:"#1874ca"},href:"https://xyzrank.com?from=itab",target:"_blank"},"中文播客榜(xyzrank.com)")],-1))),V={name:"appXyzrank"},A=r(Object.assign(V,{setup(r){const v=p({activeId:"hotEpisodes",hostList:[],loading:!1}),b=[{title:"#",key:"index",width:30},{title:"节目标题",key:"name"},{title:"分类",key:"primaryGenre",width:120}],V=d((()=>{if(v.activeId.includes("Episodes")){let s=t(b);return s.splice(2,0,{title:"播放量",key:"playCount",width:120},{title:"时长",key:"duration",width:80}),s}return b})),A=[{name:"热门节目",id:"hotEpisodes"},{name:"热门播客",id:"hotPodcasts"},{name:"新锐节目",id:"hotNewEpisodes"},{name:"新锐播客",id:"hotNewPodcasts"}];async function D(){v.loading=!0;let t="app-xyzrank",e=await s((()=>import("./indexdb-D6yYQ1E4.js")),__vite__mapDeps([0,1]),import.meta.url);e=e.default;let a=await e.getItem(t),i=a.data||{};v.hostList=i[v.activeId].data,a.isExp&&l().then((s=>{let a=s.data||[];a.length&&e.set(t,a,6e5),v.hostList=a[v.activeId].data})).finally((()=>{v.loading=!1}))}function H({props:t}){D()}return D(),(t,s)=>(n(),m(e,{height:"600px"},{default:c((()=>[j("div",k,[j("div",I,[u(y(a),{onTabClick:H,modelValue:y(v).activeId,"onUpdate:modelValue":s[0]||(s[0]=t=>y(v).activeId=t),style:{"margin-bottom":"0"}},{default:c((()=>[(n(),f(h,null,x(A,(t=>u(y(i),{label:t.name,name:t.id,key:t.key},null,8,["label","name"]))),64))])),_:1},8,["modelValue"])]),j("div",w,[j("div",E,[u(o,{style:{"font-family":"Consolas"},class:"f12",showHeader:!0,stripe:!0,columns:V.value,data:y(v).hostList},{index:c((({index:t})=>[j("div",L,g(t+1),1)])),name:c((({row:t})=>[j("a",{href:t.url||t.urls[0].url,target:"_blank",class:"d-flex-y"},[j("img",{style:{width:"42px",height:"42px","border-radius":"4px"},src:t.podcastLogoUrl||t.logoUrl},null,8,G),j("div",U,[j("p",P,g(t.title||t.name),1),j("span",C,g(t.podcastName||t.hosts.join(" ")||"-"),1)])],8,z)])),primaryGenre:c((({row:t})=>[_(g(t.primaryGenreName||t.primaryGenre||"-"),1)])),_:1},8,["columns","data"]),N])])])])),_:1}))}}),[["__scopeId","data-v-63e9ecf5"]]);export{A as default};
