import{D as e}from"./decimal-DzYMnzy_.js";const t=(e="")=>{let t=[];for(let l=0;l<e.length;l++){let r=e.charAt(l),n=r;if(/[\d|\.]/.test(r+"")){let t=l;for(;t<e.length;t++){let r=e.charAt(t);if(!/[\d|\.]/.test(r+""))break}n=e.slice(l,t),t>l&&(l=t-1),n=+n}t.push(n)}let r=[],u=[];for(let i=0;i<t.length;i++)if("number"==typeof t[i])u.push(t[i]);else if(r.length){for(;n(t[i],r[r.length-1]);){let e=u.pop(),t=u.pop();l(u,t,e,r.pop())}if(")"==t[i]){let t=r[r.length-1],n=0;for(;"("!=t&&n<e.length;){let e,i;n+=1;let s=r.pop();"("!=s&&(i=u.pop(),e=u.pop()),l(u,e,i,s),t=s}}")"!=t[i]&&r.push(t[i])}else r.push(t[i]);for(;r.length;){let e=u.pop(),t=u.pop();l(u,t,e,r.pop())}return u[0]},r=function(e=""){if(!((e=e.replace(/\s/g,"")).includes("+")||e.includes("-")||e.includes("*")||e.includes("/")))return!1;if(""===e)return!1;if(/[\+\-\*\/]{2,}/.test(e))return!1;if(/\(\)/.test(e))return!1;if(/\[\]/.test(e))return!1;for(var t=[],r=0;r<e.length;r++)if("("===(l=e.charAt(r)))t.push("(");else if(")"===l){if(!(t.length>0))return!1;t.pop()}if(0!==t.length)return!1;var l,n=[];for(r=0;r<e.length;r++)if("["===(l=e.charAt(r)))n.push("[");else if("]"===l){if(!(n.length>0))return!1;n.pop()}if(0!==n.length)return!1;if(/\([\+\-\*\/]/.test(e))return!1;if(/[\+\-\*\/]\)/.test(e))return!1;if(/\[[\+\-\*\/]/.test(e))return!1;if(/[\+\-\*\/]\]/.test(e))return!1;if(/^[\+\-\*\/.]|[\+\-\*\/.]$/.test(e))return!1;if(/\]\[/.test(e))return!1;return!0};function l(t,r,l,n){let u=0;try{if(u=new e(Number(r)),"+"==n){let e=u.plus(l);t.push(Number(e))}else if("-"==n){let e=u.minus(l);t.push(Number(e))}else if("*"==n){let e=u.times(l);t.push(Number(e))}else if("/"==n){let e=u.div(l);t.push(Number(e))}}catch(i){t.push(void 0)}}function n(e,t){return!("+"!=e&&"-"!=e||"+"!=t&&"-"!=t)||(!("+"!=e&&"-"!=e||"*"!=t&&"/"!=t)||(!("*"!=e&&"/"!=e||"*"!=t&&"/"!=t)||("*"!=e&&"/"!=e||"+"!=t&&"-"!=t)&&void 0))}export{t as c,r as v};
