import{e,u as a,a as s,n}from"./index-B3sKL47p.js";import{g as l,u,l as r}from"./index-CXKOYI6o.js";import{b as o,u as t,d as v,z as i}from"./index-CB1eEFAV.js";import{aB as c,c as d,u as m,a as f,g as p,aY as z}from"./index-CyyLRP8W.js";const x=e=>Object.keys(e),b=e=>Object.entries(e),g=(e,a,s)=>({get value(){return l(e,a,s)},set value(s){!function(e,a,s){null==e||o(e,a,s)}(e,a,s)}}),j=["","default","small","large"],y=e({type:String,values:j,required:!1}),S=Symbol("size"),I=()=>{const e=c(S,{});return d((()=>m(e.size)||""))},k=Symbol(),O=f();function q(e,a=void 0){const s=p()?c(k,O):O;return e?d((()=>{var n,l;return null!=(l=null==(n=s.value)?void 0:n[e])?l:a})):s}function w(e,n){const l=q(),r=a(e,d((()=>{var e;return(null==(e=l.value)?void 0:e.namespace)||s}))),o=u(d((()=>{var e;return null==(e=l.value)?void 0:e.locale}))),i=t(d((()=>{var e;return(null==(e=l.value)?void 0:e.zIndex)||v}))),c=d((()=>{var e;return m(n)||(null==(e=l.value)?void 0:e.size)||""}));return A(d((()=>m(l)||{}))),{ns:r,locale:o,zIndex:i,size:c}}const A=(e,a,s=!1)=>{var l;const u=!!p(),o=u?q():void 0,t=null!=(l=null==a?void 0:a.provide)?l:u?z:void 0;if(!t)return;const v=d((()=>{const a=m(e);return(null==o?void 0:o.value)?B(o.value,a):a}));return t(k,v),t(r,d((()=>v.value.locale))),t(n,d((()=>v.value.namespace))),t(i,d((()=>v.value.zIndex))),t(S,{size:d((()=>v.value.size||""))}),!s&&O.value||(O.value=v.value),v},B=(e,a)=>{const s=[...new Set([...x(e),...x(a)])],n={};for(const l of s)n[l]=void 0!==a[l]?a[l]:e[l];return n};export{y as a,I as b,j as c,w as d,b as e,g,x as k,A as p,q as u};
