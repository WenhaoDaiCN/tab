import{m as e,bs as a,c as t,a as s,p as o,G as r,I as l,H as i,v as d,u as n,t as f,K as u,bH as c,z as p,q as m,A as v,B as b,J as y,x as h,a1 as k,Z as A}from"./index-CyyLRP8W.js";import{a as x}from"./todo-nv2WtoEp.js";import{E as C}from"./index-CdRnR6wp.js";import{ElIcon as w}from"./index-D4GlTUBi.js";import{b as j,u as E}from"./index-B3sKL47p.js";import{d as L,a as F,u as R}from"./use-dialog-0gmd-idO.js";import{_,w as g}from"./plugin-vue_export-helper-O3gUY6pX.js";import{u as $}from"./index-DjlyN6je.js";import{u as z}from"./index-CXKOYI6o.js";import{a as B}from"./style-BBQwFGbP.js";import{E as S}from"./focus-trap-D8QWET1-.js";const H=j({...L,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),I=F,T=["aria-label","aria-labelledby","aria-describedby"],q=["id","aria-level"],D=["aria-label"],P=["id"],K=e({name:"ElDrawer",inheritAttrs:!1});const O=g(_(e({...K,props:H,emits:I,setup(e,{expose:j}){const L=e,F=a();$({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},t((()=>!!F.title)));const _=s(),g=s(),H=E("drawer"),{t:I}=z(),{afterEnter:K,afterLeave:O,beforeLeave:U,visible:G,rendered:J,titleId:M,bodyId:N,zIndex:Q,onModalClick:Z,onOpenAutoFocus:V,onCloseAutoFocus:W,onFocusoutPrevented:X,onCloseRequested:Y,handleClose:ee}=R(L,_),ae=t((()=>"rtl"===L.direction||"ltr"===L.direction)),te=t((()=>B(L.size)));return j({handleClose:ee,afterEnter:K,afterLeave:O}),(e,a)=>(o(),r(A,{to:"body",disabled:!e.appendToBody},[l(k,{name:n(H).b("fade"),onAfterEnter:n(K),onAfterLeave:n(O),onBeforeLeave:n(U),persisted:""},{default:i((()=>[d(l(n(C),{mask:e.modal,"overlay-class":e.modalClass,"z-index":n(Q),onClick:n(Z)},{default:i((()=>[l(n(S),{loop:"",trapped:n(G),"focus-trap-el":_.value,"focus-start-el":g.value,onFocusAfterTrapped:n(V),onFocusAfterReleased:n(W),onFocusoutPrevented:n(X),onReleaseRequested:n(Y)},{default:i((()=>[f("div",u({ref_key:"drawerRef",ref:_,"aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:n(M),"aria-describedby":n(N)},e.$attrs,{class:[n(H).b(),e.direction,n(G)&&"open"],style:n(ae)?"width: "+n(te):"height: "+n(te),role:"dialog",onClick:a[1]||(a[1]=c((()=>{}),["stop"]))}),[f("span",{ref_key:"focusStartRef",ref:g,class:p(n(H).e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(o(),m("header",{key:0,class:p(n(H).e("header"))},[e.$slots.title?v(e.$slots,"title",{key:1},(()=>[y(" DEPRECATED SLOT ")])):v(e.$slots,"header",{key:0,close:n(ee),titleId:n(M),titleClass:n(H).e("title")},(()=>[e.$slots.title?y("v-if",!0):(o(),m("span",{key:0,id:n(M),role:"heading","aria-level":e.headerAriaLevel,class:p(n(H).e("title"))},b(e.title),11,q))])),e.showClose?(o(),m("button",{key:2,"aria-label":n(I)("el.drawer.close"),class:p(n(H).e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...e)=>n(ee)&&n(ee)(...e))},[l(n(w),{class:p(n(H).e("close"))},{default:i((()=>[l(n(x))])),_:1},8,["class"])],10,D)):y("v-if",!0)],2)):y("v-if",!0),n(J)?(o(),m("div",{key:1,id:n(N),class:p(n(H).e("body"))},[v(e.$slots,"default")],10,P)):y("v-if",!0),e.$slots.footer?(o(),m("div",{key:2,class:p(n(H).e("footer"))},[v(e.$slots,"footer")],2)):y("v-if",!0)],16,T)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[h,n(G)]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","drawer.vue"]]));export{O as E};
