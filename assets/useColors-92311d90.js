import{g as G}from"./_commonjsHelpers-725317a4.js";import{c as T,a as J}from"./index-a0e5e2a3.js";import{V as K}from"./theme-eb9d1a1f.js";var I={exports:{}},U={exports:{}},R=function(t){return!t||typeof t=="string"?!1:t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&t.constructor.name!=="String")},H=R,V=Array.prototype.concat,W=Array.prototype.slice,B=U.exports=function(t){for(var e=[],n=0,o=t.length;n<o;n++){var c=t[n];H(c)?e=V.call(e,W.call(c)):e.push(c)}return e};B.wrap=function(r){return function(){return r(B(arguments))}};var Q=U.exports,A=T,C=Q,E=Object.hasOwnProperty,L=Object.create(null);for(var S in A)E.call(A,S)&&(L[A[S]]=S);var b=I.exports={to:{},get:{}};b.get=function(r){var t=r.substring(0,3).toLowerCase(),e,n;switch(t){case"hsl":e=b.get.hsl(r),n="hsl";break;case"hwb":e=b.get.hwb(r),n="hwb";break;default:e=b.get.rgb(r),n="rgb";break}return e?{model:n,value:e}:null};b.get.rgb=function(r){if(!r)return null;var t=/^#([a-f0-9]{3,4})$/i,e=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,n=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,c=/^(\w+)$/,h=[0,0,0,1],a,i,f;if(a=r.match(e)){for(f=a[2],a=a[1],i=0;i<3;i++){var k=i*2;h[i]=parseInt(a.slice(k,k+2),16)}f&&(h[3]=parseInt(f,16)/255)}else if(a=r.match(t)){for(a=a[1],f=a[3],i=0;i<3;i++)h[i]=parseInt(a[i]+a[i],16);f&&(h[3]=parseInt(f+f,16)/255)}else if(a=r.match(n)){for(i=0;i<3;i++)h[i]=parseInt(a[i+1],0);a[4]&&(a[5]?h[3]=parseFloat(a[4])*.01:h[3]=parseFloat(a[4]))}else if(a=r.match(o)){for(i=0;i<3;i++)h[i]=Math.round(parseFloat(a[i+1])*2.55);a[4]&&(a[5]?h[3]=parseFloat(a[4])*.01:h[3]=parseFloat(a[4]))}else return(a=r.match(c))?a[1]==="transparent"?[0,0,0,0]:E.call(A,a[1])?(h=A[a[1]],h[3]=1,h):null:null;for(i=0;i<3;i++)h[i]=w(h[i],0,255);return h[3]=w(h[3],0,1),h};b.get.hsl=function(r){if(!r)return null;var t=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,c=w(parseFloat(e[2]),0,100),h=w(parseFloat(e[3]),0,100),a=w(isNaN(n)?1:n,0,1);return[o,c,h,a]}return null};b.get.hwb=function(r){if(!r)return null;var t=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=r.match(t);if(e){var n=parseFloat(e[4]),o=(parseFloat(e[1])%360+360)%360,c=w(parseFloat(e[2]),0,100),h=w(parseFloat(e[3]),0,100),a=w(isNaN(n)?1:n,0,1);return[o,c,h,a]}return null};b.to.hex=function(){var r=C(arguments);return"#"+$(r[0])+$(r[1])+$(r[2])+(r[3]<1?$(Math.round(r[3]*255)):"")};b.to.rgb=function(){var r=C(arguments);return r.length<4||r[3]===1?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"};b.to.rgb.percent=function(){var r=C(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||r[3]===1?"rgb("+t+"%, "+e+"%, "+n+"%)":"rgba("+t+"%, "+e+"%, "+n+"%, "+r[3]+")"};b.to.hsl=function(){var r=C(arguments);return r.length<4||r[3]===1?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"};b.to.hwb=function(){var r=C(arguments),t="";return r.length>=4&&r[3]!==1&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"};b.to.keyword=function(r){return L[r.slice(0,3)]};function w(r,t,e){return Math.min(Math.max(t,r),e)}function $(r){var t=Math.round(r).toString(16).toUpperCase();return t.length<2?"0"+t:t}var X=I.exports;const F=X,m=J,q=["keyword","gray","hex"],N={};for(const r of Object.keys(m))N[[...m[r].labels].sort().join("")]=r;const O={};function p(r,t){if(!(this instanceof p))return new p(r,t);if(t&&t in q&&(t=null),t&&!(t in m))throw new Error("Unknown model: "+t);let e,n;if(r==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof p)this.model=r.model,this.color=[...r.color],this.valpha=r.valpha;else if(typeof r=="string"){const o=F.get(r);if(o===null)throw new Error("Unable to parse color from string: "+r);this.model=o.model,n=m[this.model].channels,this.color=o.value.slice(0,n),this.valpha=typeof o.value[n]=="number"?o.value[n]:1}else if(r.length>0){this.model=t||"rgb",n=m[this.model].channels;const o=Array.prototype.slice.call(r,0,n);this.color=D(o,n),this.valpha=typeof r[n]=="number"?r[n]:1}else if(typeof r=="number")this.model="rgb",this.color=[r>>16&255,r>>8&255,r&255],this.valpha=1;else{this.valpha=1;const o=Object.keys(r);"alpha"in r&&(o.splice(o.indexOf("alpha"),1),this.valpha=typeof r.alpha=="number"?r.alpha:0);const c=o.sort().join("");if(!(c in N))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=N[c];const{labels:h}=m[this.model],a=[];for(e=0;e<h.length;e++)a.push(r[h[e]]);this.color=D(a)}if(O[this.model])for(n=m[this.model].channels,e=0;e<n;e++){const o=O[this.model][e];o&&(this.color[e]=o(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}p.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(r){let t=this.model in F.to?this:this.rgb();t=t.round(typeof r=="number"?r:1);const e=t.valpha===1?t.color:[...t.color,this.valpha];return F.to[t.model](e)},percentString(r){const t=this.rgb().round(typeof r=="number"?r:1),e=t.valpha===1?t.color:[...t.color,this.valpha];return F.to.rgb.percent(e)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const r={},{channels:t}=m[this.model],{labels:e}=m[this.model];for(let n=0;n<t;n++)r[e[n]]=this.color[n];return this.valpha!==1&&(r.alpha=this.valpha),r},unitArray(){const r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,this.valpha!==1&&r.push(this.valpha),r},unitObject(){const r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,this.valpha!==1&&(r.alpha=this.valpha),r},round(r){return r=Math.max(r||0,0),new p([...this.color.map(Z(r)),this.valpha],this.model)},alpha(r){return r!==void 0?new p([...this.color,Math.max(0,Math.min(1,r))],this.model):this.valpha},red:u("rgb",0,g(255)),green:u("rgb",1,g(255)),blue:u("rgb",2,g(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,r=>(r%360+360)%360),saturationl:u("hsl",1,g(100)),lightness:u("hsl",2,g(100)),saturationv:u("hsv",1,g(100)),value:u("hsv",2,g(100)),chroma:u("hcg",1,g(100)),gray:u("hcg",2,g(100)),white:u("hwb",1,g(100)),wblack:u("hwb",2,g(100)),cyan:u("cmyk",0,g(100)),magenta:u("cmyk",1,g(100)),yellow:u("cmyk",2,g(100)),black:u("cmyk",3,g(100)),x:u("xyz",0,g(95.047)),y:u("xyz",1,g(100)),z:u("xyz",2,g(108.833)),l:u("lab",0,g(100)),a:u("lab",1),b:u("lab",2),keyword(r){return r!==void 0?new p(r):m[this.model].keyword(this.color)},hex(r){return r!==void 0?new p(r):F.to.hex(this.rgb().round().color)},hexa(r){if(r!==void 0)return new p(r);const t=this.rgb().round().color;let e=Math.round(this.valpha*255).toString(16).toUpperCase();return e.length===1&&(e="0"+e),F.to.hex(t)+e},rgbNumber(){const r=this.rgb().color;return(r[0]&255)<<16|(r[1]&255)<<8|r[2]&255},luminosity(){const r=this.rgb().color,t=[];for(const[e,n]of r.entries()){const o=n/255;t[e]=o<=.04045?o/12.92:((o+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(r){const t=this.luminosity(),e=r.luminosity();return t>e?(t+.05)/(e+.05):(e+.05)/(t+.05)},level(r){const t=this.contrast(r);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const r=this.rgb().color;return(r[0]*2126+r[1]*7152+r[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const r=this.rgb();for(let t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten(r){const t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken(r){const t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate(r){const t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate(r){const t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten(r){const t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken(r){const t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale(){const r=this.rgb().color,t=r[0]*.3+r[1]*.59+r[2]*.11;return p.rgb(t,t,t)},fade(r){return this.alpha(this.valpha-this.valpha*r)},opaquer(r){return this.alpha(this.valpha+this.valpha*r)},rotate(r){const t=this.hsl();let e=t.color[0];return e=(e+r)%360,e=e<0?360+e:e,t.color[0]=e,t},mix(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);const e=r.rgb(),n=this.rgb(),o=t===void 0?.5:t,c=2*o-1,h=e.alpha()-n.alpha(),a=((c*h===-1?c:(c+h)/(1+c*h))+1)/2,i=1-a;return p.rgb(a*e.red()+i*n.red(),a*e.green()+i*n.green(),a*e.blue()+i*n.blue(),e.alpha()*o+n.alpha()*(1-o))}};for(const r of Object.keys(m)){if(q.includes(r))continue;const{channels:t}=m[r];p.prototype[r]=function(...e){return this.model===r?new p(this):e.length>0?new p(e,r):new p([..._(m[this.model][r].raw(this.color)),this.valpha],r)},p[r]=function(...e){let n=e[0];return typeof n=="number"&&(n=D(e,t)),new p(n,r)}}function Y(r,t){return Number(r.toFixed(t))}function Z(r){return function(t){return Y(t,r)}}function u(r,t,e){r=Array.isArray(r)?r:[r];for(const n of r)(O[n]||(O[n]=[]))[t]=e;return r=r[0],function(n){let o;return n!==void 0?(e&&(n=e(n)),o=this[r](),o.color[t]=n,o):(o=this[r]().color[t],e&&(o=e(o)),o)}}function g(r){return function(t){return Math.max(0,Math.min(r,t))}}function _(r){return Array.isArray(r)?r:[r]}function D(r,t){for(let e=0;e<t;e++)typeof r[e]!="number"&&(r[e]=0);return r}var j=p;const z=G(j);var P=(r=>(r.Background="background",r.Light="light",r.Dark="dark",r.Primary="primary",r.Error="error",r.Warning="warning",r.Success="success",r))(P||{});const ar=()=>{const r=K().current.value,t=55,e=90,n=s=>Math.max(Math.abs(s.red()-s.green()),Math.abs(s.green()-s.blue()),Math.abs(s.blue()-s.red()))<10,o=s=>s.saturationv()<=15&&s.value()>=85,c=s=>n(s)?s.value(Math.min(s.value()+10,100)):s.saturationv(10).value(100),h=s=>s.value(Math.min(s.value()+10,100)),a=s=>{if(n(s))return s.saturationv(1);const v=s.saturationv()>t?s.saturationv():t;return s.saturationv(v).value(e)},i=s=>s.value(Math.max(s.value()-15,0)),f=(s,v)=>n(s)?s.value()>50?s.value(Math.max(0,s.value()-75)):s.value(Math.min(100,s.value()+75)):v,k=s=>{const d=Object.values(P).includes(s)?new z(r.colors[s]):new z(s),l=a(d),y=c(l),M=h(l),x=i(l);if(o(d))return{light:c(d).hex(),lightContrast:f(y,x).hex(),soft:h(d).hex(),softContrast:f(d,x).hex(),base:d.hex(),baseContrast:f(d,x).hex(),dark:x.hex(),darkContrast:f(x,y).hex()};switch(s){case P.Background:return{light:l.hex(),lightContrast:f(l,l).hex(),soft:l.hex(),softContrast:f(l,l).hex(),base:l.hex(),baseContrast:f(l,l).hex(),dark:x.hex(),darkContrast:f(x,l).hex()};default:return{light:y.hex(),lightContrast:f(y,x).hex(),soft:M.hex(),softContrast:f(M,y).hex(),base:l.hex(),baseContrast:f(l,y).hex(),dark:x.hex(),darkContrast:f(x,y).hex()}}};return{getColors:k,getGradients:(s,v=90)=>{const d=Array.isArray(s)?s.map(k):[k(s)];return d.length===1?d[0]:{light:`linear-gradient(${v}deg, ${d.map(l=>l.light).join(", ")})`,soft:`linear-gradient(${v}deg, ${d.map(l=>l.soft).join(", ")})`,base:`linear-gradient(${v}deg, ${d.map(l=>l.base).join(", ")})`,dark:`linear-gradient(${v}deg, ${d.map(l=>l.dark).join(", ")})`}},getBasePaletteColors:()=>{const v=[];for(let l=t;l<=100;l+=(100-t)/(5-1)){let y=[];for(let M=0;M<360;M+=15){const x=new z({h:M,s:l,v:e});y.push(x.hex())}v.push(y)}let d=0;for(let l=5;l<=95;l+=90/(5-1)){const y=new z({h:0,s:1,v:100-l});v[d].unshift(y.hex()),d++}return v}}};export{P as C,z as a,ar as u};
