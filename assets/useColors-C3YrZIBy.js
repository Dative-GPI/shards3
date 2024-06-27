import{g as G}from"./_commonjsHelpers-BosuxZz1.js";import{r as T,a as J}from"./index-_Z9wfsFC.js";import{U as K}from"./theme-RQK62Xub.js";var P={exports:{}},U={exports:{}},R=function(t){return!t||typeof t=="string"?!1:t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&t.constructor.name!=="String")},H=R,W=Array.prototype.concat,Q=Array.prototype.slice,D=U.exports=function(t){for(var e=[],n=0,a=t.length;n<a;n++){var u=t[n];H(u)?e=W.call(e,Q.call(u)):e.push(u)}return e};D.wrap=function(r){return function(){return r(D(arguments))}};var V=U.exports,M=T(),F=V,q=Object.hasOwnProperty,I=Object.create(null);for(var S in M)q.call(M,S)&&(I[M[S]]=S);var v=P.exports={to:{},get:{}};v.get=function(r){var t=r.substring(0,3).toLowerCase(),e,n;switch(t){case"hsl":e=v.get.hsl(r),n="hsl";break;case"hwb":e=v.get.hwb(r),n="hwb";break;default:e=v.get.rgb(r),n="rgb";break}return e?{model:n,value:e}:null};v.get.rgb=function(r){if(!r)return null;var t=/^#([a-f0-9]{3,4})$/i,e=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,n=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,u=/^(\w+)$/,h=[0,0,0,1],s,i,m;if(s=r.match(e)){for(m=s[2],s=s[1],i=0;i<3;i++){var O=i*2;h[i]=parseInt(s.slice(O,O+2),16)}m&&(h[3]=parseInt(m,16)/255)}else if(s=r.match(t)){for(s=s[1],m=s[3],i=0;i<3;i++)h[i]=parseInt(s[i]+s[i],16);m&&(h[3]=parseInt(m+m,16)/255)}else if(s=r.match(n)){for(i=0;i<3;i++)h[i]=parseInt(s[i+1],0);s[4]&&(s[5]?h[3]=parseFloat(s[4])*.01:h[3]=parseFloat(s[4]))}else if(s=r.match(a)){for(i=0;i<3;i++)h[i]=Math.round(parseFloat(s[i+1])*2.55);s[4]&&(s[5]?h[3]=parseFloat(s[4])*.01:h[3]=parseFloat(s[4]))}else return(s=r.match(u))?s[1]==="transparent"?[0,0,0,0]:q.call(M,s[1])?(h=M[s[1]],h[3]=1,h):null:null;for(i=0;i<3;i++)h[i]=y(h[i],0,255);return h[3]=y(h[3],0,1),h};v.get.hsl=function(r){if(!r)return null;var t=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),a=(parseFloat(e[1])%360+360)%360,u=y(parseFloat(e[2]),0,100),h=y(parseFloat(e[3]),0,100),s=y(isNaN(n)?1:n,0,1);return[a,u,h,s]}return null};v.get.hwb=function(r){if(!r)return null;var t=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),a=(parseFloat(e[1])%360+360)%360,u=y(parseFloat(e[2]),0,100),h=y(parseFloat(e[3]),0,100),s=y(isNaN(n)?1:n,0,1);return[a,u,h,s]}return null};v.to.hex=function(){var r=F(arguments);return"#"+A(r[0])+A(r[1])+A(r[2])+(r[3]<1?A(Math.round(r[3]*255)):"")};v.to.rgb=function(){var r=F(arguments);return r.length<4||r[3]===1?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"};v.to.rgb.percent=function(){var r=F(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||r[3]===1?"rgb("+t+"%, "+e+"%, "+n+"%)":"rgba("+t+"%, "+e+"%, "+n+"%, "+r[3]+")"};v.to.hsl=function(){var r=F(arguments);return r.length<4||r[3]===1?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"};v.to.hwb=function(){var r=F(arguments),t="";return r.length>=4&&r[3]!==1&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"};v.to.keyword=function(r){return I[r.slice(0,3)]};function y(r,t,e){return Math.min(Math.max(t,r),e)}function A(r){var t=Math.round(r).toString(16).toUpperCase();return t.length<2?"0"+t:t}var X=P.exports;const k=X,d=J(),L=["keyword","gray","hex"],C={};for(const r of Object.keys(d))C[[...d[r].labels].sort().join("")]=r;const z={};function g(r,t){if(!(this instanceof g))return new g(r,t);if(t&&t in L&&(t=null),t&&!(t in d))throw new Error("Unknown model: "+t);let e,n;if(r==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof g)this.model=r.model,this.color=[...r.color],this.valpha=r.valpha;else if(typeof r=="string"){const a=k.get(r);if(a===null)throw new Error("Unable to parse color from string: "+r);this.model=a.model,n=d[this.model].channels,this.color=a.value.slice(0,n),this.valpha=typeof a.value[n]=="number"?a.value[n]:1}else if(r.length>0){this.model=t||"rgb",n=d[this.model].channels;const a=Array.prototype.slice.call(r,0,n);this.color=N(a,n),this.valpha=typeof r[n]=="number"?r[n]:1}else if(typeof r=="number")this.model="rgb",this.color=[r>>16&255,r>>8&255,r&255],this.valpha=1;else{this.valpha=1;const a=Object.keys(r);"alpha"in r&&(a.splice(a.indexOf("alpha"),1),this.valpha=typeof r.alpha=="number"?r.alpha:0);const u=a.sort().join("");if(!(u in C))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=C[u];const{labels:h}=d[this.model],s=[];for(e=0;e<h.length;e++)s.push(r[h[e]]);this.color=N(s)}if(z[this.model])for(n=d[this.model].channels,e=0;e<n;e++){const a=z[this.model][e];a&&(this.color[e]=a(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}g.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(r){let t=this.model in k.to?this:this.rgb();t=t.round(typeof r=="number"?r:1);const e=t.valpha===1?t.color:[...t.color,this.valpha];return k.to[t.model](e)},percentString(r){const t=this.rgb().round(typeof r=="number"?r:1),e=t.valpha===1?t.color:[...t.color,this.valpha];return k.to.rgb.percent(e)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const r={},{channels:t}=d[this.model],{labels:e}=d[this.model];for(let n=0;n<t;n++)r[e[n]]=this.color[n];return this.valpha!==1&&(r.alpha=this.valpha),r},unitArray(){const r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,this.valpha!==1&&r.push(this.valpha),r},unitObject(){const r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,this.valpha!==1&&(r.alpha=this.valpha),r},round(r){return r=Math.max(r||0,0),new g([...this.color.map(Z(r)),this.valpha],this.model)},alpha(r){return r!==void 0?new g([...this.color,Math.max(0,Math.min(1,r))],this.model):this.valpha},red:l("rgb",0,c(255)),green:l("rgb",1,c(255)),blue:l("rgb",2,c(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,r=>(r%360+360)%360),saturationl:l("hsl",1,c(100)),lightness:l("hsl",2,c(100)),saturationv:l("hsv",1,c(100)),value:l("hsv",2,c(100)),chroma:l("hcg",1,c(100)),gray:l("hcg",2,c(100)),white:l("hwb",1,c(100)),wblack:l("hwb",2,c(100)),cyan:l("cmyk",0,c(100)),magenta:l("cmyk",1,c(100)),yellow:l("cmyk",2,c(100)),black:l("cmyk",3,c(100)),x:l("xyz",0,c(95.047)),y:l("xyz",1,c(100)),z:l("xyz",2,c(108.833)),l:l("lab",0,c(100)),a:l("lab",1),b:l("lab",2),keyword(r){return r!==void 0?new g(r):d[this.model].keyword(this.color)},hex(r){return r!==void 0?new g(r):k.to.hex(this.rgb().round().color)},hexa(r){if(r!==void 0)return new g(r);const t=this.rgb().round().color;let e=Math.round(this.valpha*255).toString(16).toUpperCase();return e.length===1&&(e="0"+e),k.to.hex(t)+e},rgbNumber(){const r=this.rgb().color;return(r[0]&255)<<16|(r[1]&255)<<8|r[2]&255},luminosity(){const r=this.rgb().color,t=[];for(const[e,n]of r.entries()){const a=n/255;t[e]=a<=.04045?a/12.92:((a+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(r){const t=this.luminosity(),e=r.luminosity();return t>e?(t+.05)/(e+.05):(e+.05)/(t+.05)},level(r){const t=this.contrast(r);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const r=this.rgb().color;return(r[0]*2126+r[1]*7152+r[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const r=this.rgb();for(let t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten(r){const t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken(r){const t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate(r){const t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate(r){const t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten(r){const t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken(r){const t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale(){const r=this.rgb().color,t=r[0]*.3+r[1]*.59+r[2]*.11;return g.rgb(t,t,t)},fade(r){return this.alpha(this.valpha-this.valpha*r)},opaquer(r){return this.alpha(this.valpha+this.valpha*r)},rotate(r){const t=this.hsl();let e=t.color[0];return e=(e+r)%360,e=e<0?360+e:e,t.color[0]=e,t},mix(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);const e=r.rgb(),n=this.rgb(),a=t===void 0?.5:t,u=2*a-1,h=e.alpha()-n.alpha(),s=((u*h===-1?u:(u+h)/(1+u*h))+1)/2,i=1-s;return g.rgb(s*e.red()+i*n.red(),s*e.green()+i*n.green(),s*e.blue()+i*n.blue(),e.alpha()*a+n.alpha()*(1-a))}};for(const r of Object.keys(d)){if(L.includes(r))continue;const{channels:t}=d[r];g.prototype[r]=function(...e){return this.model===r?new g(this):e.length>0?new g(e,r):new g([..._(d[this.model][r].raw(this.color)),this.valpha],r)},g[r]=function(...e){let n=e[0];return typeof n=="number"&&(n=N(e,t)),new g(n,r)}}function Y(r,t){return Number(r.toFixed(t))}function Z(r){return function(t){return Y(t,r)}}function l(r,t,e){r=Array.isArray(r)?r:[r];for(const n of r)(z[n]||(z[n]=[]))[t]=e;return r=r[0],function(n){let a;return n!==void 0?(e&&(n=e(n)),a=this[r](),a.color[t]=n,a):(a=this[r]().color[t],e&&(a=e(a)),a)}}function c(r){return function(t){return Math.max(0,Math.min(r,t))}}function _(r){return Array.isArray(r)?r:[r]}function N(r,t){for(let e=0;e<t;e++)typeof r[e]!="number"&&(r[e]=0);return r}var j=g;const $=G(j);var B=(r=>(r.Background="background",r.Light="light",r.Dark="dark",r.Primary="primary",r.Error="error",r.Warning="warning",r.Success="success",r))(B||{});const sr=()=>{const r=K().current.value,t=0,e=90,n=o=>Math.max(Math.abs(o.red()-o.green()),Math.abs(o.green()-o.blue()),Math.abs(o.blue()-o.red()))<10,a=o=>o.saturationv()<=15&&o.value()>=85,u=o=>n(o)?o.value(Math.max(o.value(),95)):o.saturationv(10).value(100),h=o=>o.value(Math.min(o.value()+10,100)),s=o=>o.value(Math.max(o.value()-15,0)),i=o=>n(o)?o.value(o.value()<70?100:Math.max(o.value()/4,0)):a(o)?o.darken(.6):o.darken(.15).isLight()?o.darken(.8):o.lighten(o.value()/50),m=o=>{const p=Object.values(B).includes(o)?new $(r.colors[o]):new $(o),f=u(p),w=h(p),x=s(p);return{light:f.hex(),lightContrast:i(f).hex(),soft:w.hex(),softContrast:i(w).hex(),base:p.hex(),baseContrast:i(p).hex(),dark:x.hex(),darkContrast:i(x).hex()}};return{getColors:m,getGradients:(o,b=90)=>{const p=Array.isArray(o)?o.map(m):[m(o)];return p.length===1?p[0]:{light:`linear-gradient(${b}deg, ${p.map(f=>f.light).join(", ")})`,soft:`linear-gradient(${b}deg, ${p.map(f=>f.soft).join(", ")})`,base:`linear-gradient(${b}deg, ${p.map(f=>f.base).join(", ")})`,dark:`linear-gradient(${b}deg, ${p.map(f=>f.dark).join(", ")})`}},getBasePaletteColors:()=>{const b=[];for(let f=t;f<=100;f+=(100-t)/7){const w=[];for(let x=0;x<360;x+=15){const E=new $({h:x,s:f,v:e});w.push(E.hex())}b.push(w)}let p=0;for(let f=0;f<=100;f+=100/7){const w=new $({h:0,s:1,v:100-f});b[p].unshift(w.hex()),p++}return b}}};export{B as C,$ as a,sr as u};
