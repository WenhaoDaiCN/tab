import{am as e,al as t,B as r,ar as a,as as n,at as o,au as s,an as u,av as c,g as i,h as f}from"./todo-nv2WtoEp.js";function v(t){var r=-1,a=null==t?0:t.length;for(this.__data__=new e;++r<a;)this.add(t[r])}function l(e,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}function b(e,t){return e.has(t)}v.prototype.add=v.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},v.prototype.has=function(e){return this.__data__.has(e)};var h=1,p=2;function _(e,t,r,a,n,o){var s=r&h,u=e.length,c=t.length;if(u!=c&&!(s&&c>u))return!1;var i=o.get(e),f=o.get(t);if(i&&f)return i==t&&f==e;var _=-1,d=!0,g=r&p?new v:void 0;for(o.set(e,t),o.set(t,e);++_<u;){var y=e[_],j=t[_];if(a)var w=s?a(j,y,_,t,e,o):a(y,j,_,e,t,o);if(void 0!==w){if(w)continue;d=!1;break}if(g){if(!l(t,(function(e,t){if(!b(g,t)&&(y===e||n(y,e,r,a,o)))return g.push(t)}))){d=!1;break}}else if(y!==j&&!n(y,j,r,a,o)){d=!1;break}}return o.delete(e),o.delete(t),d}function d(e){var t=-1,r=Array(e.size);return e.forEach((function(e,a){r[++t]=[a,e]})),r}function g(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var y=1,j=2,w="[object Boolean]",m="[object Date]",O="[object Error]",A="[object Map]",k="[object Number]",z="[object RegExp]",E="[object Set]",L="[object String]",S="[object Symbol]",B="[object ArrayBuffer]",x="[object DataView]",D=t?t.prototype:void 0,P=D?D.valueOf:void 0;var M=1,N=Object.prototype.hasOwnProperty;var R=1,V="[object Arguments]",q="[object Array]",C="[object Object]",F=Object.prototype.hasOwnProperty;function G(e,t,f,v,l,b){var h=i(e),p=i(t),D=h?q:o(e),G=p?q:o(t),H=(D=D==V?C:D)==C,I=(G=G==V?C:G)==C,J=D==G;if(J&&s(e)){if(!s(t))return!1;h=!0,H=!1}if(J&&!H)return b||(b=new u),h||c(e)?_(e,t,f,v,l,b):function(e,t,n,o,s,u,c){switch(n){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case B:return!(e.byteLength!=t.byteLength||!u(new a(e),new a(t)));case w:case m:case k:return r(+e,+t);case O:return e.name==t.name&&e.message==t.message;case z:case L:return e==t+"";case A:var i=d;case E:var f=o&y;if(i||(i=g),e.size!=t.size&&!f)return!1;var v=c.get(e);if(v)return v==t;o|=j,c.set(e,t);var l=_(i(e),i(t),o,s,u,c);return c.delete(e),l;case S:if(P)return P.call(e)==P.call(t)}return!1}(e,t,D,f,v,l,b);if(!(f&R)){var K=H&&F.call(e,"__wrapped__"),Q=I&&F.call(t,"__wrapped__");if(K||Q){var T=K?e.value():e,U=Q?t.value():t;return b||(b=new u),l(T,U,f,v,b)}}return!!J&&(b||(b=new u),function(e,t,r,a,o,s){var u=r&M,c=n(e),i=c.length;if(i!=n(t).length&&!u)return!1;for(var f=i;f--;){var v=c[f];if(!(u?v in t:N.call(t,v)))return!1}var l=s.get(e),b=s.get(t);if(l&&b)return l==t&&b==e;var h=!0;s.set(e,t),s.set(t,e);for(var p=u;++f<i;){var _=e[v=c[f]],d=t[v];if(a)var g=u?a(d,_,v,t,e,s):a(_,d,v,e,t,s);if(!(void 0===g?_===d||o(_,d,r,a,s):g)){h=!1;break}p||(p="constructor"==v)}if(h&&!p){var y=e.constructor,j=t.constructor;y==j||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof j&&j instanceof j||(h=!1)}return s.delete(e),s.delete(t),h}(e,t,f,v,l,b))}function H(e,t,r,a,n){return e===t||(null==e||null==t||!f(e)&&!f(t)?e!=e&&t!=t:G(e,t,r,a,H,n))}export{v as S,H as b,b as c,g as s};
