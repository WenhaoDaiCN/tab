const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./indexdb-D6yYQ1E4.js","./localforage-BVRgvwJc.js"])))=>i.map(i=>d[i]);
import{m as e,_ as s}from"./todo-nv2WtoEp.js";import{b as a}from"./baseRequest-CU9cTnaC.js";/* empty css            *//* empty css                 */import{E as i}from"./el-dialog-BoL22f5R.js";/* empty css                   */import{a as l,E as t}from"./el-checkbox-group-D4p_N5Lq.js";/* empty css                  */import"./css-D3Kd0WPg.js";import o from"./indexdb-D6yYQ1E4.js";import{_ as r,bn as m,s as d,bb as n,w as p,p as c,G as u,H as f,t as h,I as j,u as v,q as x,F as g,y,B as b,L as _,K as k,a_ as w,aX as E}from"./index-CyyLRP8W.js";import{E as V}from"./index-BPnMED6p.js";import{E as L}from"./index-BvBbK8nS.js";import{ElMessage as I}from"./index-BU0epQJo.js";import"./userInfo-CZAB7rZN.js";import"./localforage-BVRgvwJc.js";import"./version-DYnJBHiW.js";import"./index-CdRnR6wp.js";import"./index-B3sKL47p.js";import"./scroll-3JEGyj3w.js";import"./style-BBQwFGbP.js";import"./types-Ci7ev57k.js";import"./vnode-CwyaGvUL.js";import"./index-D4GlTUBi.js";import"./plugin-vue_export-helper-O3gUY6pX.js";import"./use-dialog-0gmd-idO.js";import"./icon-Dsqoi_oS.js";import"./event-BwRzfsZt.js";import"./index-CB1eEFAV.js";import"./_baseGet-DEcaJYAt.js";import"./isSymbol-Bt1TyP4H.js";import"./focus-trap-D8QWET1-.js";import"./aria-BUADUvnR.js";import"./use-global-config-DcVlDyFX.js";import"./index-CXKOYI6o.js";import"./isUndefined-DgmxjSXK.js";import"./index-hc1PwDik.js";import"./index-DjlyN6je.js";import"./index-kxe6IHwf.js";import"./hasIn-y6DbaUwA.js";import"./use-form-item-CUGNa-4i.js";import"./constants-Dnj8X3EN.js";import"./isEqual-DOZxeYFr.js";import"./_baseIsEqual-DN6o0BQy.js";import"./index-BrMlOSMZ.js";import"./typescript-CRqm1_SZ.js";import"./index-DsFsGggn.js";import"./config-provider-Bf5G9WCh.js";import"./index-BFuAB0_P.js";const z=e=>(w("data-v-b1dde6f8"),e=e(),E(),e),C=z((()=>h("div",{class:"d-main"},[_(" 添加搜索引擎 "),h("p",{class:"mt5 f12 d-sub"},"最少添加1种，最多添加8种")],-1))),q={class:"s-e-main overflow-x-hidden overflow-y-auto"},S={class:"serarch-list-item"},U={class:"d-elip d-flex-y"},G=["src"],O={style:{"line-height":"16px"}},H={class:"f13"},K={class:"f12 d-block d-sub d-elip"},N=z((()=>h("h3",{class:"d-main f14 mt10",style:{"line-height":"20px"}}," 自定义搜索引擎 ",-1))),P={class:"serarch-list-item flex"},R={class:"d-elip d-flex-y"},$=z((()=>h("img",{class:"search-icon-list size-[28px] mr-2",src:"https://files.codelife.cc/itab/search/custom.svg"},null,-1))),A={style:{"line-height":"16px"},class:"w-full"},B={name:"homeSearchList"},D=r(Object.assign(B,{emits:["update:modelValue"],setup(r,{emit:w}){const E=w,z=m(),B=e(),D=d(B.value.searchEngine.map((e=>e.key))),F=d(""),J=n({searchList:[],customSearchList:[],activeName:"default",addVisible:!1});p((()=>z.modelValue),(e=>{if(e){let e=B.value.searchEngine.find((e=>"custom"==e.key));e?F.value=e.href||"":o.get("search-custom-href").then((e=>{F.value=e}))}}),{deep:!0,immediate:!0});const Q=e=>{if("save"==e&&!F.value)return void I.error("请输入自定义搜索链接");const s=B.value.searchEngine.find((e=>"custom"==e.key));s&&(s.href=F.value,o.set("search-custom-href",s.href)),E("update:modelValue",!1)},T=e=>{if("custom"==e.key&&!e.href&&D.value.includes("custom")&&I.error("请输入自定义搜索链接"),D.value.includes(e.key))B.value.searchEngine.push(e);else{let s=B.value.searchEngine.findIndex((s=>e.key===s.key));B.value.searchEngine.splice(s,1)}};return async function(){let e=await s((()=>import("./indexdb-D6yYQ1E4.js")),__vite__mapDeps([0,1]),import.meta.url);e=e.default;let i=await e.getItem("searchList");if(J.searchList=i.data||[],!i.isExp)return;((e={})=>a.get("/stat/searchEngienList",{params:e}))().then((s=>{let a=s.data||[];J.searchList=a,e.set("searchList",a,1728e5)}))}(),(e,s)=>(c(),u(v(i),k({class:"s-e-dialog","append-to-body":"","lock-scroll":!0,top:"10vh",width:"740px",title:"添加搜索引擎","destroy-on-close":""},e.$attrs,{onClose:Q}),{header:f((()=>[C])),default:f((()=>[h("ul",q,[j(v(l),{modelValue:D.value,"onUpdate:modelValue":s[3]||(s[3]=e=>D.value=e),min:1,max:8},{default:f((()=>[h("span",null,[(c(!0),x(g,null,y(v(J).searchList,(e=>(c(),x("li",{class:"w-1/2 inline-block",key:e.key},[h("div",S,[j(v(t),{onChange:s=>T(e),class:"w-full",value:e.key},{default:f((()=>[h("div",U,[h("img",{loading:"lazy",class:"search-icon-list size-[28px] mr-8",src:`https://files.codelife.cc/itab/search/${e.key}.svg`},null,8,G),h("div",O,[h("span",H,b(e.title),1),h("span",K,b(e.href),1)])])])),_:2},1032,["onChange","value"])])])))),128))]),N,h("li",null,[h("div",P,[j(v(t),{onChange:s[1]||(s[1]=e=>T({key:"custom",title:"自定义",href:F.value})),class:"w-full",value:"custom"},{default:f((()=>[h("div",R,[$,h("div",A,[j(v(V),{clearable:"",class:"w-full",modelValue:F.value,"onUpdate:modelValue":s[0]||(s[0]=e=>F.value=e),placeholder:"请输入搜索地址，用%s代替关键词，例：https://www.baidu.com/s?wd=%s",style:{"--el-input-bg-color":"transparent"},size:"small"},null,8,["modelValue"])])])])),_:1}),j(v(L),{onClick:s[2]||(s[2]=e=>Q("save")),class:"mt-1",size:"small",type:"primary"},{default:f((()=>[_("保存")])),_:1})])])])),_:1},8,["modelValue"])]),j(v(i),{"append-to-body":"","lock-scroll":!0,width:"740px",modelValue:v(J).addVisible,"onUpdate:modelValue":s[4]||(s[4]=e=>v(J).addVisible=e)},null,8,["modelValue"])])),_:1},16))}}),[["__scopeId","data-v-b1dde6f8"]]);export{D as default};
