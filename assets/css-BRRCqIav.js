import{u as p}from"./useBreakpoints-B0zHkio6.js";const{isMobileSized:i,isExtraSmall:o}=p(),a=(r,e="fit-content",s="px")=>{if(r==null)return e;if(Array.isArray(r)){if(o.value){const t=r[2]??r[1]??r[0];return typeof t=="string"&&isNaN(+t)?t:`${t}${s}`}if(i.value){const t=r[1]??r[0];return typeof t=="string"&&isNaN(+t)?t:`${t}${s}`}return typeof r[0]=="string"&&isNaN(+r[0])?r[0]:`${r[0]}${s}`}return typeof r=="string"&&isNaN(+r)?r:`${r}${s}`},c=r=>{if(r==null)return 0;if(Array.isArray(r)){if(o.value){const t=r[2]??r[1]??r[0];if(typeof t=="number")return t;const n=parseInt(t.replace(/[^0-9.]/g,""));return isNaN(n)?0:n}if(i.value){const t=r[1]??r[0];if(typeof t=="number")return t;const n=parseInt(t.replace(/[^0-9.]/g,""));return isNaN(n)?0:n}if(typeof r[0]=="number")return r[0];const s=parseInt(r[0].replace(/[^0-9.]/g,""));return isNaN(s)?0:s}if(typeof r=="number")return r;const e=parseInt(r.replace(/[^0-9.]/g,""));return isNaN(e)?0:e};export{a as s,c as v};
