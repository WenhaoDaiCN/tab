import{k as r,y as t,z as e}from"./todo-nv2WtoEp.js";import{c as o,t as a}from"./_baseGet-DEcaJYAt.js";import{g as n,c as s}from"./types-Ci7ev57k.js";import{a as u,g as i,aB as c,c as d,u as l}from"./index-CyyLRP8W.js";function v(n,s,u,i){if(!r(n))return n;for(var c=-1,d=(s=o(s,n)).length,l=d-1,v=n;null!=v&&++c<d;){var m=a(s[c]),x=u;if("__proto__"===m||"constructor"===m||"prototype"===m)return n;if(c!=l){var f=v[m];void 0===(x=i?i(f,m,v):void 0)&&(x=r(f)?f:t(s[c+1])?[]:{})}e(v,m,x),v=v[m]}return n}const m={current:0},x=u(0),f=2e3,p=Symbol("elZIndexContextKey"),y=Symbol("zIndexContextKey"),I=r=>{const t=i()?c(p,m):m,e=r||(i()?c(y,void 0):void 0),o=d((()=>{const r=l(e);return n(r)?r:2e3})),a=d((()=>o.value+x.value));return!s&&c(p),{initialZIndex:o,currentZIndex:a,nextZIndex:()=>(t.current++,x.value=t.current,a.value)}};export{v as b,f as d,I as u,y as z};
