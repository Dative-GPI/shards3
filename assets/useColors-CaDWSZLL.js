import{g as G}from"./_commonjsHelpers-BosuxZz1.js";import{r as T,a as J}from"./index-_Z9wfsFC.js";import{M as K}from"./theme-BEfrBPRQ.js";var P=(r=>(r.Background="background",r.Light="light",r.Dark="dark",r.Primary="primary",r.Error="error",r.Warning="warning",r.Success="success",r))(P||{}),q={exports:{}},I={exports:{}},R=function(t){return!t||typeof t=="string"?!1:t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&t.constructor.name!=="String")},H=R,W=Array.prototype.concat,Q=Array.prototype.slice,D=I.exports=function(t){for(var e=[],n=0,o=t.length;n<o;n++){var u=t[n];H(u)?e=W.call(e,Q.call(u)):e.push(u)}return e};D.wrap=function(r){return function(){return r(D(arguments))}};var V=I.exports,F=T(),A=V,L=Object.hasOwnProperty,U=Object.create(null);for(var S in F)L.call(F,S)&&(U[F[S]]=S);var v=q.exports={to:{},get:{}};v.get=function(r){var t=r.substring(0,3).toLowerCase(),e,n;switch(t){case"hsl":e=v.get.hsl(r),n="hsl";break;case"hwb":e=v.get.hwb(r),n="hwb";break;default:e=v.get.rgb(r),n="rgb";break}return e?{model:n,value:e}:null};v.get.rgb=function(r){if(!r)return null;var t=/^#([a-f0-9]{3,4})$/i,e=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,n=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,u=/^(\w+)$/,h=[0,0,0,1],a,i,b;if(a=r.match(e)){for(b=a[2],a=a[1],i=0;i<3;i++){var x=i*2;h[i]=parseInt(a.slice(x,x+2),16)}b&&(h[3]=parseInt(b,16)/255)}else if(a=r.match(t)){for(a=a[1],b=a[3],i=0;i<3;i++)h[i]=parseInt(a[i]+a[i],16);b&&(h[3]=parseInt(b+b,16)/255)}else if(a=r.match(n)){for(i=0;i<3;i++)h[i]=parseInt(a[i+1],0);a[4]&&(a[5]?h[3]=parseFloat(a[4])*.01:h[3]=parseFloat(a[4]))}else if(a=r.match(o)){for(i=0;i<3;i++)h[i]=Math.round(parseFloat(a[i+1])*2.55);a[4]&&(a[5]?h[3]=parseFloat(a[4])*.01:h[3]=parseFloat(a[4]))}else return(a=r.match(u))?a[1]==="transparent"?[0,0,0,0]:L.call(F,a[1])?(h=F[a[1]],h[3]=1,h):null:null;for(i=0;i<3;i++)h[i]=y(h[i],0,255);return h[3]=y(h[3],0,1),h};v.get.hsl=function(r){if(!r)return null;var t=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,u=y(parseFloat(e[2]),0,100),h=y(parseFloat(e[3]),0,100),a=y(isNaN(n)?1:n,0,1);return[o,u,h,a]}return null};v.get.hwb=function(r){if(!r)return null;var t=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,u=y(parseFloat(e[2]),0,100),h=y(parseFloat(e[3]),0,100),a=y(isNaN(n)?1:n,0,1);return[o,u,h,a]}return null};v.to.hex=function(){var r=A(arguments);return"#"+$(r[0])+$(r[1])+$(r[2])+(r[3]<1?$(Math.round(r[3]*255)):"")};v.to.rgb=function(){var r=A(arguments);return r.length<4||r[3]===1?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"};v.to.rgb.percent=function(){var r=A(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||r[3]===1?"rgb("+t+"%, "+e+"%, "+n+"%)":"rgba("+t+"%, "+e+"%, "+n+"%, "+r[3]+")"};v.to.hsl=function(){var r=A(arguments);return r.length<4||r[3]===1?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"};v.to.hwb=function(){var r=A(arguments),t="";return r.length>=4&&r[3]!==1&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"};v.to.keyword=function(r){return U[r.slice(0,3)]};function y(r,t,e){return Math.min(Math.max(t,r),e)}function $(r){var t=Math.round(r).toString(16).toUpperCase();return t.length<2?"0"+t:t}var X=q.exports;const k=X,d=J(),B=["keyword","gray","hex"],C={};for(const r of Object.keys(d))C[[...d[r].labels].sort().join("")]=r;const z={};function p(r,t){if(!(this instanceof p))return new p(r,t);if(t&&t in B&&(t=null),t&&!(t in d))throw new Error("Unknown model: "+t);let e,n;if(r==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof p)this.model=r.model,this.color=[...r.color],this.valpha=r.valpha;else if(typeof r=="string"){const o=k.get(r);if(o===null)throw new Error("Unable to parse color from string: "+r);this.model=o.model,n=d[this.model].channels,this.color=o.value.slice(0,n),this.valpha=typeof o.value[n]=="number"?o.value[n]:1}else if(r.length>0){this.model=t||"rgb",n=d[this.model].channels;const o=Array.prototype.slice.call(r,0,n);this.color=N(o,n),this.valpha=typeof r[n]=="number"?r[n]:1}else if(typeof r=="number")this.model="rgb",this.color=[r>>16&255,r>>8&255,r&255],this.valpha=1;else{this.valpha=1;const o=Object.keys(r);"alpha"in r&&(o.splice(o.indexOf("alpha"),1),this.valpha=typeof r.alpha=="number"?r.alpha:0);const u=o.sort().join("");if(!(u in C))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=C[u];const{labels:h}=d[this.model],a=[];for(e=0;e<h.length;e++)a.push(r[h[e]]);this.color=N(a)}if(z[this.model])for(n=d[this.model].channels,e=0;e<n;e++){const o=z[this.model][e];o&&(this.color[e]=o(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}p.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(r){let t=this.model in k.to?this:this.rgb();t=t.round(typeof r=="number"?r:1);const e=t.valpha===1?t.color:[...t.color,this.valpha];return k.to[t.model](e)},percentString(r){const t=this.rgb().round(typeof r=="number"?r:1),e=t.valpha===1?t.color:[...t.color,this.valpha];return k.to.rgb.percent(e)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const r={},{channels:t}=d[this.model],{labels:e}=d[this.model];for(let n=0;n<t;n++)r[e[n]]=this.color[n];return this.valpha!==1&&(r.alpha=this.valpha),r},unitArray(){const r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,this.valpha!==1&&r.push(this.valpha),r},unitObject(){const r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,this.valpha!==1&&(r.alpha=this.valpha),r},round(r){return r=Math.max(r||0,0),new p([...this.color.map(Z(r)),this.valpha],this.model)},alpha(r){return r!==void 0?new p([...this.color,Math.max(0,Math.min(1,r))],this.model):this.valpha},red:l("rgb",0,c(255)),green:l("rgb",1,c(255)),blue:l("rgb",2,c(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,r=>(r%360+360)%360),saturationl:l("hsl",1,c(100)),lightness:l("hsl",2,c(100)),saturationv:l("hsv",1,c(100)),value:l("hsv",2,c(100)),chroma:l("hcg",1,c(100)),gray:l("hcg",2,c(100)),white:l("hwb",1,c(100)),wblack:l("hwb",2,c(100)),cyan:l("cmyk",0,c(100)),magenta:l("cmyk",1,c(100)),yellow:l("cmyk",2,c(100)),black:l("cmyk",3,c(100)),x:l("xyz",0,c(95.047)),y:l("xyz",1,c(100)),z:l("xyz",2,c(108.833)),l:l("lab",0,c(100)),a:l("lab",1),b:l("lab",2),keyword(r){return r!==void 0?new p(r):d[this.model].keyword(this.color)},hex(r){return r!==void 0?new p(r):k.to.hex(this.rgb().round().color)},hexa(r){if(r!==void 0)return new p(r);const t=this.rgb().round().color;let e=Math.round(this.valpha*255).toString(16).toUpperCase();return e.length===1&&(e="0"+e),k.to.hex(t)+e},rgbNumber(){const r=this.rgb().color;return(r[0]&255)<<16|(r[1]&255)<<8|r[2]&255},luminosity(){const r=this.rgb().color,t=[];for(const[e,n]of r.entries()){const o=n/255;t[e]=o<=.04045?o/12.92:((o+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(r){const t=this.luminosity(),e=r.luminosity();return t>e?(t+.05)/(e+.05):(e+.05)/(t+.05)},level(r){const t=this.contrast(r);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const r=this.rgb().color;return(r[0]*2126+r[1]*7152+r[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const r=this.rgb();for(let t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten(r){const t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken(r){const t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate(r){const t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate(r){const t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten(r){const t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken(r){const t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale(){const r=this.rgb().color,t=r[0]*.3+r[1]*.59+r[2]*.11;return p.rgb(t,t,t)},fade(r){return this.alpha(this.valpha-this.valpha*r)},opaquer(r){return this.alpha(this.valpha+this.valpha*r)},rotate(r){const t=this.hsl();let e=t.color[0];return e=(e+r)%360,e=e<0?360+e:e,t.color[0]=e,t},mix(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);const e=r.rgb(),n=this.rgb(),o=t===void 0?.5:t,u=2*o-1,h=e.alpha()-n.alpha(),a=((u*h===-1?u:(u+h)/(1+u*h))+1)/2,i=1-a;return p.rgb(a*e.red()+i*n.red(),a*e.green()+i*n.green(),a*e.blue()+i*n.blue(),e.alpha()*o+n.alpha()*(1-o))}};for(const r of Object.keys(d)){if(B.includes(r))continue;const{channels:t}=d[r];p.prototype[r]=function(...e){return this.model===r?new p(this):e.length>0?new p(e,r):new p([..._(d[this.model][r].raw(this.color)),this.valpha],r)},p[r]=function(...e){let n=e[0];return typeof n=="number"&&(n=N(e,t)),new p(n,r)}}function Y(r,t){return Number(r.toFixed(t))}function Z(r){return function(t){return Y(t,r)}}function l(r,t,e){r=Array.isArray(r)?r:[r];for(const n of r)(z[n]||(z[n]=[]))[t]=e;return r=r[0],function(n){let o;return n!==void 0?(e&&(n=e(n)),o=this[r](),o.color[t]=n,o):(o=this[r]().color[t],e&&(o=e(o)),o)}}function c(r){return function(t){return Math.max(0,Math.min(r,t))}}function _(r){return Array.isArray(r)?r:[r]}function N(r,t){for(let e=0;e<t;e++)typeof r[e]!="number"&&(r[e]=0);return r}var j=p;const M=G(j),ar=()=>{const r=K().current.value,t=0,e=90,n=s=>Math.max(Math.abs(s.red()-s.green()),Math.abs(s.green()-s.blue()),Math.abs(s.blue()-s.red()))<10,o=s=>s.saturationv()<=15&&s.value()>=85,u=s=>n(s)?s.value(Math.max(s.value(),95)):s.saturationv(10).value(100),h=s=>s.value(Math.min(s.value()+10,100)),a=s=>s.value(Math.max(s.value()-15,0)),i=s=>n(s)?s.value(s.value()<70?100:Math.max(s.value()/4,0)):o(s)?s.darken(.6):s.darken(.15).isLight()?s.darken(.8):s.lightness(s.lightness()<30?100:Math.min(s.lightness()+60,100)),b=s=>{const f=Object.values(P).includes(s);try{return f?new M(r.colors[s]):new M(s)}catch{return new M("#000000")}},x=s=>{const f=b(s),m=u(f),g=h(f),w=a(f);return{light:m.hex(),lightContrast:i(m).hex(),soft:g.hex(),softContrast:i(g).hex(),base:f.hex(),baseContrast:i(f).hex(),dark:w.hex(),darkContrast:i(w).hex()}};return{getColors:x,getGradients:(s,f=90)=>{const m=Array.isArray(s)?s.map(x):[x(s)];return m.length===1?m[0]:{light:`linear-gradient(${f}deg, ${m.map(g=>g.light).join(", ")})`,soft:`linear-gradient(${f}deg, ${m.map(g=>g.soft).join(", ")})`,base:`linear-gradient(${f}deg, ${m.map(g=>g.base).join(", ")})`,dark:`linear-gradient(${f}deg, ${m.map(g=>g.dark).join(", ")})`}},getBasePaletteColors:()=>{const f=[];for(let g=t;g<=100;g+=(100-t)/7){const w=[];for(let O=0;O<360;O+=5){const E=new M({h:O,s:g,v:e});w.push(E.hex())}f.push(w)}let m=0;for(let g=0;g<=100;g+=100/7){const w=new M({h:0,s:1,v:100-g});f[m].unshift(w.hex()),m++}return f}}};export{P as C,M as a,ar as u};
