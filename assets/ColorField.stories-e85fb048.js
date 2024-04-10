import{s as N,d as y,e as w,w as E,o as ie,z as o,a2 as Se,E as Ve,x as j,j as we,J as Fe,K as U,L as D,M as m,R as z,N as A,V as K,P as J,O as Pe}from"./vue.esm-bundler-8d1b7c9b.js";import{F as I}from"./FSTextField-869ddcdc.js";import{_ as T}from"./FSButton-24ac64b4.js";import{F as He}from"./FSCard-067bcc3b.js";import{_ as G}from"./FSIcon-f1833eba.js";import{_ as de}from"./FSRow-a391dd26.js";import{_ as R}from"./FSCol-53c64bd8.js";import{u as _e,C as L}from"./useColors-fe8562a0.js";import{u as $e}from"./useSlots-36159ddf.js";import{_ as xe}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Oe}from"./FSSpan-54104d2b.js";import{V as Be}from"./VMenu-8a1eabd1.js";import{m as _,d as $,u as F,g as qe,p as Ee}from"./useRender-7d329101.js";import{u as Re}from"./resizeObserver-170e8e39.js";import{p as P,K as O,e as H,W as Me,X as ce,Y as B,Z as se,_ as ue,$ as Y,a0 as Ne,a1 as fe,a2 as Z,a3 as me,b as he,a4 as Ue,q as De,a5 as ze,y as Ae,z as Le,o as je}from"./theme-82ddebf2.js";import{V as pe,a as Ie,u as Te}from"./VBtn-310a17a1.js";import{V as Q}from"./VSlider-cc3ea368.js";import{V as Ge}from"./VIcon-af7bd965.js";import{m as We,u as Xe}from"./border-7e6623e1.js";import{b as Ye}from"./color-b802304c.js";import{m as Ke,u as Je}from"./dimensions-db4341a9.js";import{m as Ze,u as Qe}from"./elevation-7b9c5add.js";import{a as ea,b as aa}from"./loader-883a5b9e.js";import{m as ta,u as oa}from"./rounded-dfbce428.js";import{m as la}from"./tag-c9f6eb57.js";import{a as na}from"./locale-4596da4c.js";import{u as ee}from"./proxiedModel-5e90dbf3.js";import"./useRules-c9867f7f.js";import"./VSpacer-089ee4d2.js";import"./VTextField-6f523597.js";import"./VField-0fe66054.js";import"./index-03703da7.js";import"./transition-ec42203e.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./density-f72a6349.js";import"./VDefaultsProvider-ec24aebb.js";import"./forwardRefs-e658ad70.js";import"./index-78515ab6.js";import"./FSClickable-40575f4d.js";import"./css-19c8f0ab.js";import"./VProgressCircular-51b4f5f8.js";import"./intersectionObserver-872db127.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-3a319082.js";import"./display-599b850b.js";import"./lazy-f4975b14.js";import"./router-80533699.js";import"./group-9a48651f.js";import"./index-9b4e1373.js";const ae=e=>parseInt(e,16)/255,ra=e=>Math.round(e*255).toString(16).padStart(2,"0");const ia=P({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},..._()},"VColorPickerCanvas"),da=$({name:"VColorPickerCanvas",props:ia(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:t}=a;const c=N(!1),s=y(),l=N(parseFloat(e.width)),n=N(parseFloat(e.height)),r=y({x:0,y:0}),i=w({get:()=>r.value,set(d){var p,k;if(!s.value)return;const{x:u,y:h}=d;r.value=d,t("update:color",{h:((p=e.color)==null?void 0:p.h)??0,s:O(u,0,l.value)/l.value,v:1-O(h,0,n.value)/n.value,a:((k=e.color)==null?void 0:k.a)??1})}}),f=w(()=>{const{x:d,y:u}=i.value,h=parseInt(e.dotSize,10)/2;return{width:H(e.dotSize),height:H(e.dotSize),transform:`translate(${H(d-h)}, ${H(u-h)})`}}),{resizeRef:b}=Re(d=>{var p;if(!((p=b.value)!=null&&p.offsetParent))return;const{width:u,height:h}=d[0].contentRect;l.value=u,n.value=h});function S(d,u,h){const{left:p,top:k,width:ye,height:Ce}=h;i.value={x:O(d-p,0,ye),y:O(u-k,0,Ce)}}function g(d){d.type==="mousedown"&&d.preventDefault(),!e.disabled&&(v(d),window.addEventListener("mousemove",v),window.addEventListener("mouseup",x),window.addEventListener("touchmove",v),window.addEventListener("touchend",x))}function v(d){if(e.disabled||!s.value)return;c.value=!0;const u=Me(d);S(u.clientX,u.clientY,s.value.getBoundingClientRect())}function x(){window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}function M(){var k;if(!s.value)return;const d=s.value,u=d.getContext("2d");if(!u)return;const h=u.createLinearGradient(0,0,d.width,0);h.addColorStop(0,"hsla(0, 0%, 100%, 1)"),h.addColorStop(1,`hsla(${((k=e.color)==null?void 0:k.h)??0}, 100%, 50%, 1)`),u.fillStyle=h,u.fillRect(0,0,d.width,d.height);const p=u.createLinearGradient(0,0,0,d.height);p.addColorStop(0,"hsla(0, 0%, 0%, 0)"),p.addColorStop(1,"hsla(0, 0%, 0%, 1)"),u.fillStyle=p,u.fillRect(0,0,d.width,d.height)}return E(()=>{var d;return(d=e.color)==null?void 0:d.h},M,{immediate:!0}),E(()=>[l.value,n.value],(d,u)=>{M(),r.value={x:i.value.x*d[0]/u[0],y:i.value.y*d[1]/u[1]}},{flush:"post"}),E(()=>e.color,()=>{if(c.value){c.value=!1;return}r.value=e.color?{x:e.color.s*l.value,y:(1-e.color.v)*n.value}:{x:0,y:0}},{deep:!0,immediate:!0}),ie(()=>M()),F(()=>o("div",{ref:b,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:g,onTouchstartPassive:g},[o("canvas",{ref:s,width:l.value,height:n.value},null),e.color&&o("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:f.value},null)])),{}}});function ca(e,a){if(a){const{a:t,...c}=e;return c}return e}function sa(e,a){if(a==null||typeof a=="string"){const t=ce(e);return e.a===1?t.slice(0,7):t}if(typeof a=="object"){let t;return B(a,["r","g","b"])?t=se(e):B(a,["h","s","l"])?t=ue(e):B(a,["h","s","v"])&&(t=e),ca(t,!B(a,["a"])&&e.a===1)}return e}const V={h:0,s:0,v:0,a:1},W={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,a)=>({...e,r:Number(a)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,a)=>({...e,g:Number(a)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,a)=>({...e,b:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:se,from:Y};var oe;const ua={...W,inputs:(oe=W.inputs)==null?void 0:oe.slice(0,3)},X={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,a)=>({...e,h:Number(a)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,a)=>({...e,s:Number(a)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,a)=>({...e,l:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:ue,from:Ne},fa={...X,inputs:X.inputs.slice(0,3)},be={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,a)=>a}],to:ce,from:fe},ma={...be,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,a)=>a}]},C={rgb:ua,rgba:W,hsl:fa,hsla:X,hex:ma,hexa:be},ha=e=>{let{label:a,...t}=e;return o("div",{class:"v-color-picker-edit__input"},[o("input",t,null),o("span",null,[a])])},pa=P({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(C).includes(e)},modes:{type:Array,default:()=>Object.keys(C),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(C).includes(a))},..._()},"VColorPickerEdit"),ba=$({name:"VColorPickerEdit",props:pa(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:t}=a;const c=w(()=>e.modes.map(l=>({...C[l],name:l}))),s=w(()=>{var r;const l=c.value.find(i=>i.name===e.mode);if(!l)return[];const n=e.color?l.to(e.color):null;return(r=l.inputs)==null?void 0:r.map(i=>{let{getValue:f,getColor:b,...S}=i;return{...l.inputProps,...S,disabled:e.disabled,value:n&&f(n),onChange:g=>{const v=g.target;v&&t("update:color",l.from(b(n??l.to(V),v.value)))}}})});return F(()=>{var l;return o("div",{class:["v-color-picker-edit",e.class],style:e.style},[(l=s.value)==null?void 0:l.map(n=>o(ha,n,null)),c.value.length>1&&o(pe,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const n=c.value.findIndex(r=>r.name===e.mode);t("update:mode",c.value[(n+1)%c.value.length].name)}},null)])}),{}}});const ga=P({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,..._()},"VColorPickerPreview"),va=$({name:"VColorPickerPreview",props:ga(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;const c=new AbortController;Se(()=>c.abort());async function s(){if(!Z)return;const l=new window.EyeDropper;try{const n=await l.open({signal:c.signal}),r=fe(n.sRGBHex);t("update:color",{...e.color??V,...r})}catch{}}return F(()=>{var l,n;return o("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[Z&&o("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[o(pe,{onClick:s,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),o("div",{class:"v-color-picker-preview__dot"},[o("div",{style:{background:me(e.color??V)}},null)]),o("div",{class:"v-color-picker-preview__sliders"},[o(Q,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(l=e.color)==null?void 0:l.h,"onUpdate:modelValue":r=>t("update:color",{...e.color??V,h:r}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&o(Q,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((n=e.color)==null?void 0:n.a)??1,"onUpdate:modelValue":r=>t("update:color",{...e.color??V,a:r}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const ka={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},ya={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},Ca={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},Sa={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},Va={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},wa={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},Fa={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Pa={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},Ha={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},_a={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},$a={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},xa={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},Oa={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},Ba={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},qa={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Ea={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},Ra={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},Ma={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},Na={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},Ua={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},Da={red:ka,pink:ya,purple:Ca,deepPurple:Sa,indigo:Va,blue:wa,lightBlue:Fa,cyan:Pa,teal:Ha,green:_a,lightGreen:$a,lime:xa,yellow:Oa,amber:Ba,orange:qa,deepOrange:Ea,brown:Ra,blueGrey:Ma,grey:Na,shades:Ua},za=P({swatches:{type:Array,default:()=>Aa(Da)},disabled:Boolean,color:Object,maxHeight:[Number,String],..._()},"VColorPickerSwatches");function Aa(e){return Object.keys(e).map(a=>{const t=e[a];return t.base?[t.base,t.darken4,t.darken3,t.darken2,t.darken1,t.lighten1,t.lighten2,t.lighten3,t.lighten4,t.lighten5]:[t.black,t.white,t.transparent]})}const La=$({name:"VColorPickerSwatches",props:za(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;return F(()=>o("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:H(e.maxHeight)},e.style]},[o("div",null,[e.swatches.map(c=>o("div",{class:"v-color-picker-swatches__swatch"},[c.map(s=>{const l=he(s),n=Y(l),r=Ue(l);return o("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&t("update:color",n)},[o("div",{style:{background:r}},[e.color&&De(e.color,n)?o(Ge,{size:"x-small",icon:"$success",color:ze(s,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}});const ge=P({color:String,...We(),..._(),...Ke(),...Ze(),...ea(),...Ie(),...ta(),...la(),...Ae()},"VSheet"),te=qe()({name:"VSheet",props:ge(),setup(e,a){let{slots:t}=a;const{themeClasses:c}=Le(e),{backgroundColorClasses:s,backgroundColorStyles:l}=Ye(Ve(e,"color")),{borderClasses:n}=Xe(e),{dimensionStyles:r}=Je(e),{elevationClasses:i}=Qe(e),{locationStyles:f}=aa(e),{positionClasses:b}=Te(e),{roundedClasses:S}=oa(e);return F(()=>o(e.tag,{class:["v-sheet",c.value,s.value,n.value,i.value,b.value,S.value,e.class],style:[l.value,r.value,f.value,e.style]},t)),{}}}),ja=P({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(C).includes(e)},modes:{type:Array,default:()=>Object.keys(C),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(C).includes(a))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...je(ge({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),Ia=$({name:"VColorPicker",props:ja(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=ee(e,"mode"),t=y(null),c=ee(e,"modelValue",void 0,i=>{if(i==null||i==="")return null;let f;try{f=Y(he(i))}catch{return null}return f},i=>i?sa(i,e.modelValue):null),s=w(()=>c.value?{...c.value,h:t.value??c.value.h}:null),{rtlClasses:l}=na();let n=!0;E(c,i=>{if(!n){n=!0;return}i&&(t.value=i.h)},{immediate:!0});const r=i=>{n=!1,t.value=i.h,c.value=i};return ie(()=>{e.modes.includes(a.value)||(a.value=e.modes[0])}),Ee({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),F(()=>{const i=te.filterProps(e);return o(te,j({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",l.value,e.class],style:[{"--v-color-picker-color-hsv":me({...s.value??V,a:1})},e.style]},i,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&o(da,{key:"canvas",color:s.value,"onUpdate:color":r,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&o("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&o(va,{key:"preview",color:s.value,"onUpdate:color":r,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&o(ba,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":f=>a.value=f,color:s.value,"onUpdate:color":r,disabled:e.disabled},null)]),e.showSwatches&&o(La,{key:"swatches",color:s.value,"onUpdate:color":r,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}}),ve=we({name:"FSColorField",components:{FSTextField:I,FSButton:T,FSCard:He,FSIcon:G,FSCol:R,FSRow:de},props:{description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:"#000000"},opacityValue:{type:Number,required:!1,default:1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},allowOpacity:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:opacity"],setup(e,{emit:a}){const{getColors:t}=_e(),{slots:c}=$e();delete c.description;const s=t(L.Light),l=t(L.Dark),n=y(!1),r=y(e.modelValue.toString().substring(0,7)),i=y(ra(e.opacityValue)),f=y(r.value+i.value),b=w(()=>e.editable?{"--fs-color-field-color":l.base}:{"--fs-color-field-color":s.dark});return{getPercentageFromHex:ae,innerOpacity:i,innerColor:r,fullColor:f,ColorEnum:L,onSubmit:g=>{r.value=g.substring(0,7),i.value=g.length===9?g.substring(7,9):"FF",f.value=r.value+i.value,a("update:modelValue",r.value),a("update:opacity",ae(i.value))},style:b,menu:n}}});function Ta(e,a,t,c,s,l){const n=Fe("FSCard");return U(),D(Be,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[0]||(a[0]=r=>e.menu=r)},{activator:m(({props:r})=>[o(R,null,{default:m(()=>[o(de,j({height:"fill"},r),{default:m(()=>[o(I,j({class:"fs-color-field",hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,clearable:!1,readonly:!0,modelValue:e.innerColor},e.$attrs),{"prepend-inner":m(()=>[z(e.$slots,"prepend-inner",{},()=>[o(G,{color:e.innerColor},{default:m(()=>[A(" mdi-circle ")]),_:1},8,["color"])])]),append:m(()=>[o(T,{prependIcon:"mdi-pencil",variant:"full",editable:e.$props.editable},null,8,["editable"])]),_:3},16,["hideHeader","required","editable","modelValue"]),e.$props.allowOpacity?(U(),D(I,{key:0,class:"fs-color-field-opacity",label:e.$tr("ui.color-field.opacity","Opacity"),hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,clearable:!1,readonly:!0,modelValue:Math.round(e.getPercentageFromHex(e.innerOpacity)*100)+" %"},{"prepend-inner":m(()=>[z(e.$slots,"prepend-inner",{},()=>[o(G,{color:e.ColorEnum.Dark,editable:e.$props.editable,style:K({opacity:e.getPercentageFromHex(e.innerOpacity)})},{default:m(()=>[A(" mdi-circle ")]),_:1},8,["color","editable","style"])])]),append:m(()=>[o(T,{prependIcon:"mdi-pencil",variant:"full",editable:e.$props.editable},null,8,["editable"])]),_:3},8,["label","hideHeader","required","editable","modelValue"])):J("",!0)]),_:2},1040),z(e.$slots,"description",{},()=>[e.$props.description?(U(),D(Oe,{key:0,class:"fs-color-field-description",font:"text-underline",style:K(e.style)},{default:m(()=>[A(Pe(e.$props.description),1)]),_:1},8,["style"])):J("",!0)])]),_:2},1024)]),default:m(()=>[o(n,{elevation:!0,border:!1},{default:m(()=>[o(R,{width:"fill"},{default:m(()=>[o(Ia,{class:"fs-color-field-picker",mode:"hexa",elevation:0,modes:e.allowOpacity?["hexa","rgba"]:["hex","rgb"],modelValue:e.fullColor,"onUpdate:modelValue":e.onSubmit},null,8,["modes","modelValue","onUpdate:modelValue"])]),_:1})]),_:1})]),_:3},8,["modelValue"])}const ke=xe(ve,[["render",Ta]]);ve.__docgenInfo={displayName:"FSColorField",exportName:"default",description:"",tags:{},props:[{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"#000000"'}},{name:"opacityValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"allowOpacity",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:opacity"}],slots:[{name:"prepend-inner"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSColorField.vue"]};const jt={title:"Foundation/Shared/Input fields/ColorField",component:ke,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},q={args:{args:{value1:"#FF0000",opacity1:1,value2:"#00FF12",opacity2:0,value3:"#0030FF",opacity3:.5}},render:(e,{argTypes:a})=>({components:{FSColorField:ke,FSCol:R},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSColorField
        label="Color"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :allowOpacity="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>`})};var le,ne,re;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "#FF0000",
      opacity1: 1,
      value2: "#00FF12",
      opacity2: 0,
      value3: "#0030FF",
      opacity3: 0.5
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSColorField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSColorField
        label="Color"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :allowOpacity="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>\`
  })
}`,...(re=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const It=["Variations"];export{q as Variations,It as __namedExportsOrder,jt as default};
