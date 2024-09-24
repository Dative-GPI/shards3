import{t as he,L as l,s as N,b as C,c as F,w as _,g as J,V as me,m as K,d as be,y as M,z as O,C as ge,B as y,F as ve,P as ke,E as pe,G as ye,A as U}from"./vue.esm-bundler-DjjVIdVI.js";import{F as Ce}from"./FSBaseField-CruMavxg.js";import{F as we}from"./FSCard-C9IdgJNY.js";import{F as Q}from"./FSIcon-BCbpBdVG.js";import{F as Ve}from"./FSText-Der-WemT.js";import{F as Z}from"./FSRow-CpogXLW8.js";import{F as ee}from"./FSCol-TPWSQPHs.js";import{u as Se,C as A}from"./useColors-CdvgF10X.js";import{u as Pe}from"./useSlots-DzSo5JdB.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as xe}from"./VMenu-BkqMtGEU.js";import{m as q,g as Be,c as He,a as x,d as E,H as ae,e as te,f as le,R as L,h as _e,i as ne,j as oe,k as re,l as qe,n as Ee,p as Re}from"./color-BKGJvBEr.js";import{u as $e}from"./resizeObserver-C4lJhwTD.js";import{p as B,u as Ne,y as Me,D as R,c as H,T as Oe,N as $,U as j,d as Ae,o as ze}from"./theme-v7reDO7s.js";import{a as De,u as Le,V as ie}from"./VBtn-el1a73sG.js";import{V as I}from"./VSlider-HRDOL57F.js";import{V as Ue}from"./VIcon-CzaRZDPI.js";import{m as je,u as Ie}from"./border-DUGfqaHN.js";import{m as Ge,u as Te}from"./dimensions-DBrW1AO_.js";import{m as We,u as Xe}from"./elevation-kEG7tFkj.js";import{a as Ye,b as Je}from"./loader-CiSVFYJ7.js";import{m as Ke,u as Qe}from"./rounded-Cely44IK.js";import{a as Ze}from"./tag-DT601Ssr.js";import{a as ea}from"./locale-Dn84bpGK.js";import{u as G}from"./proxiedModel-G1bil5DU.js";const T=e=>parseInt(e,16)/255,aa=e=>Math.round(e*255).toString(16).padStart(2,"0"),se=B({color:String,...je(),...q(),...Ge(),...We(),...Ye(),...De(),...Ke(),...Ze(),...Ne()},"VSheet"),W=Be()({name:"VSheet",props:se(),setup(e,a){let{slots:t}=a;const{themeClasses:c}=Me(e),{backgroundColorClasses:d,backgroundColorStyles:o}=He(he(e,"color")),{borderClasses:n}=Ie(e),{dimensionStyles:r}=Te(e),{elevationClasses:i}=Xe(e),{locationStyles:f}=Je(e),{positionClasses:h}=Le(e),{roundedClasses:m}=Qe(e);return x(()=>l(e.tag,{class:["v-sheet",c.value,d.value,n.value,i.value,h.value,m.value,e.class],style:[o.value,r.value,f.value,e.style]},t)),{}}}),ta=B({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...q()},"VColorPickerCanvas"),la=E({name:"VColorPickerCanvas",props:ta(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:t}=a;const c=N(!1),d=C(),o=N(parseFloat(e.width)),n=N(parseFloat(e.height)),r=C({x:0,y:0}),i=F({get:()=>r.value,set(s){var g,p;if(!d.value)return;const{x:u,y:b}=s;r.value=s,t("update:color",{h:((g=e.color)==null?void 0:g.h)??0,s:R(u,0,o.value)/o.value,v:1-R(b,0,n.value)/n.value,a:((p=e.color)==null?void 0:p.a)??1})}}),f=F(()=>{const{x:s,y:u}=i.value,b=parseInt(e.dotSize,10)/2;return{width:H(e.dotSize),height:H(e.dotSize),transform:`translate(${H(s-b)}, ${H(u-b)})`}}),{resizeRef:h}=$e(s=>{var g;if(!((g=h.value)!=null&&g.offsetParent))return;const{width:u,height:b}=s[0].contentRect;o.value=u,n.value=b});function m(s,u,b){const{left:g,top:p,width:ue,height:fe}=b;i.value={x:R(s-g,0,ue),y:R(u-p,0,fe)}}function V(s){s.type==="mousedown"&&s.preventDefault(),!e.disabled&&(v(s),window.addEventListener("mousemove",v),window.addEventListener("mouseup",S),window.addEventListener("touchmove",v),window.addEventListener("touchend",S))}function v(s){if(e.disabled||!d.value)return;c.value=!0;const u=Oe(s);m(u.clientX,u.clientY,d.value.getBoundingClientRect())}function S(){window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",S),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",S)}function k(){var p;if(!d.value)return;const s=d.value,u=s.getContext("2d");if(!u)return;const b=u.createLinearGradient(0,0,s.width,0);b.addColorStop(0,"hsla(0, 0%, 100%, 1)"),b.addColorStop(1,`hsla(${((p=e.color)==null?void 0:p.h)??0}, 100%, 50%, 1)`),u.fillStyle=b,u.fillRect(0,0,s.width,s.height);const g=u.createLinearGradient(0,0,0,s.height);g.addColorStop(0,"hsla(0, 0%, 0%, 0)"),g.addColorStop(1,"hsla(0, 0%, 0%, 1)"),u.fillStyle=g,u.fillRect(0,0,s.width,s.height)}return _(()=>{var s;return(s=e.color)==null?void 0:s.h},k,{immediate:!0}),_(()=>[o.value,n.value],(s,u)=>{k(),r.value={x:i.value.x*s[0]/u[0],y:i.value.y*s[1]/u[1]}},{flush:"post"}),_(()=>e.color,()=>{if(c.value){c.value=!1;return}r.value=e.color?{x:e.color.s*o.value,y:(1-e.color.v)*n.value}:{x:0,y:0}},{deep:!0,immediate:!0}),J(()=>k()),x(()=>l("div",{ref:h,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:V,onTouchstartPassive:V},[l("canvas",{ref:d,width:o.value,height:n.value},null),e.color&&l("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:f.value},null)])),{}}});function na(e,a){if(a){const{a:t,...c}=e;return c}return e}function oa(e,a){if(a==null||typeof a=="string"){const t=ae(e);return e.a===1?t.slice(0,7):t}if(typeof a=="object"){let t;return $(a,["r","g","b"])?t=te(e):$(a,["h","s","l"])?t=le(e):$(a,["h","s","v"])&&(t=e),na(t,!$(a,["a"])&&e.a===1)}return e}const P={h:0,s:0,v:0,a:1},z={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,a)=>({...e,r:Number(a)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,a)=>({...e,g:Number(a)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,a)=>({...e,b:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:te,from:L};var Y;const ra={...z,inputs:(Y=z.inputs)==null?void 0:Y.slice(0,3)},D={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,a)=>({...e,h:Number(a)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,a)=>({...e,s:Number(a)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,a)=>({...e,l:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:le,from:_e},ia={...D,inputs:D.inputs.slice(0,3)},ce={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,a)=>a}],to:ae,from:ne},sa={...ce,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,a)=>a}]},w={rgb:ra,rgba:z,hsl:ia,hsla:D,hex:sa,hexa:ce},ca=e=>{let{label:a,...t}=e;return l("div",{class:"v-color-picker-edit__input"},[l("input",t,null),l("span",null,[a])])},da=B({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(w).includes(e)},modes:{type:Array,default:()=>Object.keys(w),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(w).includes(a))},...q()},"VColorPickerEdit"),ua=E({name:"VColorPickerEdit",props:da(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:t}=a;const c=F(()=>e.modes.map(o=>({...w[o],name:o}))),d=F(()=>{var r;const o=c.value.find(i=>i.name===e.mode);if(!o)return[];const n=e.color?o.to(e.color):null;return(r=o.inputs)==null?void 0:r.map(i=>{let{getValue:f,getColor:h,...m}=i;return{...o.inputProps,...m,disabled:e.disabled,value:n&&f(n),onChange:V=>{const v=V.target;v&&t("update:color",o.from(h(n??o.to(P),v.value)))}}})});return x(()=>{var o;return l("div",{class:["v-color-picker-edit",e.class],style:e.style},[(o=d.value)==null?void 0:o.map(n=>l(ca,n,null)),c.value.length>1&&l(ie,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const n=c.value.findIndex(r=>r.name===e.mode);t("update:mode",c.value[(n+1)%c.value.length].name)}},null)])}),{}}}),fa=B({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...q()},"VColorPickerPreview"),ha=E({name:"VColorPickerPreview",props:fa(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;const c=new AbortController;me(()=>c.abort());async function d(){if(!j)return;const o=new window.EyeDropper;try{const n=await o.open({signal:c.signal}),r=ne(n.sRGBHex);t("update:color",{...e.color??P,...r})}catch{}}return x(()=>{var o,n;return l("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[j&&l("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[l(ie,{onClick:d,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),l("div",{class:"v-color-picker-preview__dot"},[l("div",{style:{background:oe(e.color??P)}},null)]),l("div",{class:"v-color-picker-preview__sliders"},[l(I,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(o=e.color)==null?void 0:o.h,"onUpdate:modelValue":r=>t("update:color",{...e.color??P,h:r}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&l(I,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((n=e.color)==null?void 0:n.a)??1,"onUpdate:modelValue":r=>t("update:color",{...e.color??P,a:r}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}}),ma={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},ba={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},ga={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},va={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},ka={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},pa={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},ya={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Ca={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},wa={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},Va={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},Sa={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},Pa={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},Fa={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},xa={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},Ba={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Ha={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},_a={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},qa={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},Ea={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},Ra={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},$a={red:ma,pink:ba,purple:ga,deepPurple:va,indigo:ka,blue:pa,lightBlue:ya,cyan:Ca,teal:wa,green:Va,lightGreen:Sa,lime:Pa,yellow:Fa,amber:xa,orange:Ba,deepOrange:Ha,brown:_a,blueGrey:qa,grey:Ea,shades:Ra},Na=B({swatches:{type:Array,default:()=>Ma($a)},disabled:Boolean,color:Object,maxHeight:[Number,String],...q()},"VColorPickerSwatches");function Ma(e){return Object.keys(e).map(a=>{const t=e[a];return t.base?[t.base,t.darken4,t.darken3,t.darken2,t.darken1,t.lighten1,t.lighten2,t.lighten3,t.lighten4,t.lighten5]:[t.black,t.white,t.transparent]})}const Oa=E({name:"VColorPickerSwatches",props:Na(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;return x(()=>l("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:H(e.maxHeight)},e.style]},[l("div",null,[e.swatches.map(c=>l("div",{class:"v-color-picker-swatches__swatch"},[c.map(d=>{const o=re(d),n=L(o),r=Ee(o);return l("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&t("update:color",n)},[l("div",{style:{background:r}},[e.color&&Ae(e.color,n)?l(Ue,{size:"x-small",icon:"$success",color:qe(d,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),Aa=B({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(w).includes(e)},modes:{type:Array,default:()=>Object.keys(w),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(w).includes(a))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...ze(se({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),X=E({name:"VColorPicker",props:Aa(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=G(e,"mode"),t=C(null),c=G(e,"modelValue",void 0,i=>{if(i==null||i==="")return null;let f;try{f=L(re(i))}catch{return null}return f},i=>i?oa(i,e.modelValue):null),d=F(()=>c.value?{...c.value,h:t.value??c.value.h}:null),{rtlClasses:o}=ea();let n=!0;_(c,i=>{if(!n){n=!0;return}i&&(t.value=i.h)},{immediate:!0});const r=i=>{n=!1,t.value=i.h,c.value=i};return J(()=>{e.modes.includes(a.value)||(a.value=e.modes[0])}),Re({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),x(()=>{const i=W.filterProps(e);return l(W,K({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",o.value,e.class],style:[{"--v-color-picker-color-hsv":oe({...d.value??P,a:1})},e.style]},i,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&l(la,{key:"canvas",color:d.value,"onUpdate:color":r,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&l("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&l(ha,{key:"preview",color:d.value,"onUpdate:color":r,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&l(ua,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":f=>a.value=f,color:d.value,"onUpdate:color":r,disabled:e.disabled},null)]),e.showSwatches&&l(Oa,{key:"swatches",color:d.value,"onUpdate:color":r,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}}),de=be({name:"FSColorField",components:{FSBaseField:Ce,FSText:Ve,FSCard:we,FSIcon:Q,FSCol:ee,FSRow:Z},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:"#000000"},opacityValue:{type:Number,required:!1,default:1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},allowOpacity:{type:Boolean,required:!1,default:!0},onlyBaseColors:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:"fill"}},emits:["update:modelValue","update:opacity"],setup(e,{emit:a}){const{getColors:t,getBasePaletteColors:c}=Se(),{slots:d}=Pe(),o=`activator-${Math.random().toString(36).substring(7)}`;delete d.description;const n=t(A.Light),r=t(A.Dark),i=C(!1),f=C("#000000"),h=C("00"),m=C("#00000000"),V=F(()=>e.editable?{"--fs-color-field-cursor":"pointer","--fs-color-field-border-color":n.dark,"--fs-color-field-color":r.base,"--fs-color-field-colorvalue":m.value}:{"--fs-color-field-cursor":"default","--fs-color-field-border-color":n.base,"--fs-color-field-color":n.dark,"--fs-color-field-colorvalue":m.value}),v=k=>{f.value=k.substring(0,7),h.value=k.length===9?k.substring(7,9):"FF",m.value=f.value+h.value,a("update:modelValue",f.value),a("update:opacity",T(h.value))},S=()=>{e.modelValue?(f.value=t(e.modelValue).base,h.value=aa(e.opacityValue),m.value=f.value+h.value):(f.value="#000000",h.value="00",m.value="#00000000")};return _(()=>e.modelValue,()=>{S()},{immediate:!0}),{getPercentageFromHex:T,getBasePaletteColors:c,innerOpacity:h,activatorId:o,innerColor:f,fullColor:m,ColorEnum:A,onSubmit:v,style:V,menu:i}}});function za(e,a,t,c,d,o){const n=M("FSText"),r=M("FSCard"),i=M("FSBaseField");return O(),ge(ve,null,[l(i,K({class:"fs-color-field",description:e.$props.description,hideHeader:e.$props.hideHeader,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,width:e.$props.width,style:e.style,modelValue:e.innerColor},e.$attrs),{default:y(()=>[l(r,{id:e.activatorId,padding:"8px",width:"100%",class:ke({"fs-color-field-disabled":!e.$props.editable})},{default:y(()=>[l(Z,{align:"center-center"},{default:y(()=>[l(Q,{icon:"mdi-circle-half",size:"20px",color:e.innerColor},null,8,["color"]),l(n,{font:"text-overline"},{default:y(()=>[pe(ye(e.innerColor),1)]),_:1})]),_:1})]),_:1},8,["id","class"])]),_:1},16,["description","hideHeader","editable","required","label","width","style","modelValue"]),l(xe,{origin:"top left","min-width":"300px",activator:`#${e.activatorId}`,closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[0]||(a[0]=f=>e.menu=f)},{default:y(()=>[l(r,{elevation:!0,border:!1},{default:y(()=>[l(ee,{width:"fill"},{default:y(()=>[e.$props.onlyBaseColors?(O(),U(X,{key:1,class:"fs-color-field-picker","swatches-max-height":"400px","show-swatches":"","hide-sliders":"","hide-canvas":"","hide-inputs":"",swatches:e.getBasePaletteColors(),elevation:0,modelValue:e.fullColor,"onUpdate:modelValue":e.onSubmit},null,8,["swatches","modelValue","onUpdate:modelValue"])):(O(),U(X,{key:0,class:"fs-color-field-picker",mode:"hexa",modes:e.allowOpacity?["hexa","rgba"]:["hex","rgb"],elevation:0,modelValue:e.fullColor,"onUpdate:modelValue":e.onSubmit},null,8,["modes","modelValue","onUpdate:modelValue"]))]),_:1})]),_:1})]),_:1},8,["activator","modelValue"])],64)}const ut=Fe(de,[["render",za]]);de.__docgenInfo={displayName:"FSColorField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"#000000"'}},{name:"opacityValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"allowOpacity",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"onlyBaseColors",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fill"'}}],events:[{name:"update:modelValue"},{name:"update:opacity"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSColorField.vue"]};export{ut as F};
