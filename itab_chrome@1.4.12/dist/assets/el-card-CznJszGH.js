import{b as s,d as e,u as a}from"./index-B3sKL47p.js";import{_ as t,w as o}from"./plugin-vue_export-helper-O3gUY6pX.js";import{m as r,p as d,q as l,z as i,u as f,A as y,L as p,B as n,J as u,t as c,C as h}from"./index-CyyLRP8W.js";const v=s({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:e([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=r({name:"ElCard"});const m=o(t(r({...b,props:v,setup(s){const e=a("card");return(s,a)=>(d(),l("div",{class:i([f(e).b(),f(e).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(d(),l("div",{key:0,class:i(f(e).e("header"))},[y(s.$slots,"header",{},(()=>[p(n(s.header),1)]))],2)):u("v-if",!0),c("div",{class:i([f(e).e("body"),s.bodyClass]),style:h(s.bodyStyle)},[y(s.$slots,"default")],6),s.$slots.footer||s.footer?(d(),l("div",{key:1,class:i(f(e).e("footer"))},[y(s.$slots,"footer",{},(()=>[p(n(s.footer),1)]))],2)):u("v-if",!0)],2))}}),[["__file","card.vue"]]));export{m as E};
