import{f as e}from"./vnode-CwyaGvUL.js";import{s as r,l as o}from"./index-CyyLRP8W.js";const t=(t,i)=>{const l={},n=r([]);return{children:n,addChild:r=>{l[r.uid]=r,n.value=((r,t,i)=>e(r.subTree).filter((e=>{var r;return o(e)&&(null==(r=e.type)?void 0:r.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>i[e])).filter((e=>!!e)))(t,i,l)},removeChild:e=>{delete l[e],n.value=n.value.filter((r=>r.uid!==e))}}};export{t as u};
