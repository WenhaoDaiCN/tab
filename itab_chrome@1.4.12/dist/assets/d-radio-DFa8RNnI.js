import{_ as e,a,c as t,p as l,q as s,t as o,A as n,L as u,B as i,C as r,z as d,n as c}from"./index-CyyLRP8W.js";const m=["action","value","name"],p={class:"mt10",style:{height:"24px","line-height":"24px"}},v=e({__name:"d-radio",props:{modelValue:{type:[Number,String,Boolean]},value:[Number,String,Boolean],title:String},emits:["update:modelValue","change"],setup(e,{emit:v}){const _=e,g=v,y=a(null),h=t((()=>_.modelValue===_.value)),f=e=>{c((()=>{const e=y.value.value;g("update:modelValue",e),g("change",e)}))},V=t((()=>{let e=document.documentElement.style.getPropertyValue("--primary-color").trim();return h.value?`background-color:${e}10`:""}));return(a,t)=>(l(),s("div",{class:d(["d-radio ac",{"is-checked":h.value}])},[o("input",{class:"d-radio__input",ref_key:"input",ref:y,type:"radio",action:a.$attrs.action,value:e.value,name:e.modelValue,onInput:f},null,40,m),o("div",{style:r(V.value),class:"d-radio__core"},[n(a.$slots,"default",{},(()=>[u(i(e.value),1)]),!0)],4),o("div",p,[o("span",{onClick:f,class:"d-radio__title"},i(e.title),1)])],2))}},[["__scopeId","data-v-3f5586cf"]]);export{v as D};
