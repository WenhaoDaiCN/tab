const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./public-api-DxRCcbRs.js","./todo-nv2WtoEp.js","./index-CyyLRP8W.js","./index-4Dsu8OkH.css","./todo-Dkv1bMMm.css","./localforage-BVRgvwJc.js","./baseRequest-CU9cTnaC.js","./userInfo-CZAB7rZN.js","./version-DYnJBHiW.js","./website-CoEF8fmW.js","./index-DvjFJXYU.js","./index-D4GlTUBi.js","./index-B3sKL47p.js","./plugin-vue_export-helper-O3gUY6pX.js","./types-Ci7ev57k.js","./style-BBQwFGbP.js","./index-1ymgXUpW.css","./css-BIm8ja1J.css","./indexdb-D6yYQ1E4.js","./eventBus-BB4cUTPt.js","./statistics-CfKG6dyg.js","./useSta-BMJfgb02.js","./versionChangelog-DlmD4nR6.js","./css-bb66vtNt.js","./css-BUIf-K48.css","./index-BWS7jQal.js","./index-BrMlOSMZ.js","./icon-Dsqoi_oS.js","./use-global-config-DcVlDyFX.js","./index-CXKOYI6o.js","./_baseGet-DEcaJYAt.js","./isSymbol-Bt1TyP4H.js","./index-CB1eEFAV.js","./aria-BUADUvnR.js"])))=>i.map(i=>d[i]);
import{m as e,_ as a,C as t}from"./todo-nv2WtoEp.js";import{p as o}from"./version-DYnJBHiW.js";import{b as r,c as i}from"./getAudio-D_HGGnT2.js";import{i as l}from"./main-DJB5iAKQ.js";import{w as s}from"./index-CyyLRP8W.js";import"./localforage-BVRgvwJc.js";import"./modulepreload-polyfill-Dqv5PPZA.js";const n=e(),m=e();(async()=>{n.value.lang&&"auto"!=n.value.lang||(n.value.lang=window.navigator.language),a((()=>import("./public-api-DxRCcbRs.js").then((e=>e.p))),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url).then((async e=>{e.getTodayBing().then((e=>{0==n.value.wallpaper.type&&(n.value.wallpaper.src=e.fullSrc,n.value.wallpaper.thumb=e.fullSrc,n.value.wallpaper.name=e.enddate)}))})),a((()=>import("./statistics-CfKG6dyg.js")),__vite__mapDeps([20,1,2,3,4,21,6,7,5,8,18]),import.meta.url).then((e=>{e.customAnalytics(),e.googleAnalytics({en:"page_view",dt:`iTab?v=${o.version}n=${r()?"web":i()}`})})),a((()=>import("./public-api-DxRCcbRs.js").then((e=>e.p))),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url).then((e=>{e.getUserInfo()}));let e=await a((()=>import("./indexdb-D6yYQ1E4.js")),__vite__mapDeps([18,5]),import.meta.url);e=e.default,e.get("version").then((t=>{t?t&&o.version!=t&&(a((()=>import("./versionChangelog-DlmD4nR6.js")),__vite__mapDeps([22,8,23,24,17,25,2,3,26,14,11,12,13,15,27,1,4,28,29,30,31,32,33]),import.meta.url),e.set("version",o.version)):e.set("version",o.version)}))})();const p=t("(prefers-color-scheme: dark)");s((()=>p.value),(e=>{m.value.theme.system&&(m.value.theme.mode=e?"dark":"light")})),window.addEventListener("resize",(function(){l(m.value)})),s((()=>m),(e=>{l(e.value)}),{deep:!0});
