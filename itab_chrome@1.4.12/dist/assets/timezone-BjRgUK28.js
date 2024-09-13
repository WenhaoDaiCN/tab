import{a as t,c as e}from"./localforage-BVRgvwJc.js";function n(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r,o,i={exports:{}},a=i.exports=(r={year:0,month:1,day:2,hour:3,minute:4,second:5},o={},function(t,e,n){var i,a=function(t,e,n){void 0===n&&(n={});var r=new Date(t);return function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=o[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),o[r]=i),i}(e,n).formatToParts(r)},u=function(t,e){for(var o=a(t,e),i=[],u=0;u<o.length;u+=1){var f=o[u],s=f.type,m=f.value,c=r[s];c>=0&&(i[c]=parseInt(m,10))}var l=i[3],v=24===l?0:l,d=i[0]+"-"+i[1]+"-"+i[2]+" "+v+":"+i[4]+":"+i[5]+":000",h=+t;return(n.utc(d).valueOf()-(h-=h%1e3))/6e4},f=e.prototype;f.tz=function(t,e){void 0===t&&(t=i);var r=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),u=Math.round((o-new Date(a))/1e3/60),f=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(r-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,r){var o=r&&e,a=r||e||i,f=u(+n(),a);if("string"!=typeof t)return n(t).tz(a);var s=function(t,e,n){var r=t-60*e*1e3,o=u(r,n);if(e===o)return[r,e];var i=u(r-=60*(o-e)*1e3,n);return o===i?[r,o]:[t-60*Math.min(o,i)*1e3,Math.max(o,i)]}(n.utc(t,o).valueOf(),f,a),m=s[0],c=s[1],l=n(m).utcOffset(c);return l.$x.$timezone=a,l},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){i=t}});const u=t(a),f=n({__proto__:null,default:u},[a]);export{u as a,f as t};
