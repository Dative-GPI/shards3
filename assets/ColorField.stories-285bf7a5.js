import{s as A,d as y,e as V,w as M,o as de,A as o,a2 as Ve,x as we,B as $,j as Fe,I as Pe,J as B,K as H,L as m,R as j,U as L,M as Y,N as K,V as Be}from"./vue.esm-bundler-41eda46b.js";import{F as I}from"./FSTextField-77636cac.js";import{F as T}from"./FSButton-d0a22eb6.js";import{F as He}from"./FSCard-8067a4d4.js";import{_ as G}from"./FSIcon-713345eb.js";import{_ as se}from"./FSRow-1508d56d.js";import{_ as N}from"./FSCol-282cc158.js";import{u as $e,C as z}from"./useColors-baaa98f5.js";import{u as xe}from"./useSlots-e8ea556e.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as qe}from"./FSSpan-8af5ddcc.js";import{V as _e}from"./VMenu-499c8185.js";import{m as O,d as q,u as w,g as Ee,p as Re}from"./useRender-dd35ddd1.js";import{u as Ue}from"./resizeObserver-d58b88df.js";import{p as F,a as E,c as x,$ as Me,a0 as ce,a1 as R,a2 as ue,a3 as fe,a4 as J,a5 as Ne,a6 as me,a7 as Q,a8 as he,j as pe,a9 as De,d as Ae,aa as je,H as Le,J as ze,B as Ie}from"./theme-be1bd2db.js";import{V as be,a as Te,u as Ge}from"./VBtn-66b397c8.js";import{V as Z}from"./VSlider-d86dd738.js";import{V as We}from"./VIcon-8cf7ec9e.js";import{m as Xe,u as Je}from"./border-eea26164.js";import{b as Ye}from"./color-45753032.js";import{m as Ke,u as Qe}from"./dimensions-5b54e342.js";import{m as Ze,u as ea}from"./elevation-878f110a.js";import{a as aa,b as ta}from"./loader-e17cf3b4.js";import{m as oa,u as la}from"./rounded-3de0fd3d.js";import{m as na}from"./tag-64b4b0e7.js";import{u as ra}from"./locale-84078765.js";import{u as ee}from"./proxiedModel-03601969.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./density-b42ba92f.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./FSClickable-416c7a7e.js";import"./css-35e8563f.js";import"./VProgressCircular-58a86136.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VOverlay-ac667fed.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./group-2589989a.js";import"./index-4ba2035c.js";const ae=e=>parseInt(e,16)/255,ia=e=>Math.round(e*255).toString(16).padStart(2,"0");const da=F({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...O()},"VColorPickerCanvas"),sa=q({name:"VColorPickerCanvas",props:da(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:t}=a;const s=A(!1),c=y(),l=A(parseFloat(e.width)),n=A(parseFloat(e.height)),r=y({x:0,y:0}),i=V({get:()=>r.value,set(d){var b,k;if(!c.value)return;const{x:u,y:p}=d;r.value=d,t("update:color",{h:((b=e.color)==null?void 0:b.h)??0,s:E(u,0,l.value)/l.value,v:1-E(p,0,n.value)/n.value,a:((k=e.color)==null?void 0:k.a)??1})}}),f=V(()=>{const{x:d,y:u}=i.value,p=parseInt(e.dotSize,10)/2;return{width:x(e.dotSize),height:x(e.dotSize),transform:`translate(${x(d-p)}, ${x(u-p)})`}}),{resizeRef:g}=Ue(d=>{var b;if(!((b=g.el)!=null&&b.offsetParent))return;const{width:u,height:p}=d[0].contentRect;l.value=u,n.value=p});function v(d,u,p){const{left:b,top:k,width:Ce,height:Se}=p;i.value={x:E(d-b,0,Ce),y:E(u-k,0,Se)}}function P(d){d.type==="mousedown"&&d.preventDefault(),!e.disabled&&(h(d),window.addEventListener("mousemove",h),window.addEventListener("mouseup",_),window.addEventListener("touchmove",h),window.addEventListener("touchend",_))}function h(d){if(e.disabled||!c.value)return;s.value=!0;const u=Me(d);v(u.clientX,u.clientY,c.value.getBoundingClientRect())}function _(){window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",_),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",_)}function D(){var k;if(!c.value)return;const d=c.value,u=d.getContext("2d");if(!u)return;const p=u.createLinearGradient(0,0,d.width,0);p.addColorStop(0,"hsla(0, 0%, 100%, 1)"),p.addColorStop(1,`hsla(${((k=e.color)==null?void 0:k.h)??0}, 100%, 50%, 1)`),u.fillStyle=p,u.fillRect(0,0,d.width,d.height);const b=u.createLinearGradient(0,0,0,d.height);b.addColorStop(0,"hsla(0, 0%, 0%, 0)"),b.addColorStop(1,"hsla(0, 0%, 0%, 1)"),u.fillStyle=b,u.fillRect(0,0,d.width,d.height)}return M(()=>{var d;return(d=e.color)==null?void 0:d.h},D,{immediate:!0}),M(()=>[l.value,n.value],(d,u)=>{D(),r.value={x:i.value.x*d[0]/u[0],y:i.value.y*d[1]/u[1]}},{flush:"post"}),M(()=>e.color,()=>{if(s.value){s.value=!1;return}r.value=e.color?{x:e.color.s*l.value,y:(1-e.color.v)*n.value}:{x:0,y:0}},{deep:!0,immediate:!0}),de(()=>D()),w(()=>o("div",{ref:g,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:P,onTouchstartPassive:P},[o("canvas",{ref:c,width:l.value,height:n.value},null),e.color&&o("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:f.value},null)])),{}}});function ca(e,a){if(a){const{a:t,...s}=e;return s}return e}function ua(e,a){if(a==null||typeof a=="string"){const t=ce(e);return e.a===1?t.slice(0,7):t}if(typeof a=="object"){let t;return R(a,["r","g","b"])?t=ue(e):R(a,["h","s","l"])?t=fe(e):R(a,["h","s","v"])&&(t=e),ca(t,!R(a,["a"])&&e.a===1)}return e}const S={h:0,s:0,v:0,a:1},W={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,a)=>({...e,r:Number(a)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,a)=>({...e,g:Number(a)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,a)=>({...e,b:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:ue,from:J};var le;const fa={...W,inputs:(le=W.inputs)==null?void 0:le.slice(0,3)},X={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,a)=>({...e,h:Number(a)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,a)=>({...e,s:Number(a)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,a)=>({...e,l:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:fe,from:Ne},ma={...X,inputs:X.inputs.slice(0,3)},ge={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,a)=>a}],to:ce,from:me},ha={...ge,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,a)=>a}]},C={rgb:fa,rgba:W,hsl:ma,hsla:X,hex:ha,hexa:ge},pa=e=>{let{label:a,...t}=e;return o("div",{class:"v-color-picker-edit__input"},[o("input",t,null),o("span",null,[a])])},ba=F({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(C).includes(e)},modes:{type:Array,default:()=>Object.keys(C),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(C).includes(a))},...O()},"VColorPickerEdit"),ga=q({name:"VColorPickerEdit",props:ba(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:t}=a;const s=V(()=>e.modes.map(l=>({...C[l],name:l}))),c=V(()=>{var r;const l=s.value.find(i=>i.name===e.mode);if(!l)return[];const n=e.color?l.to(e.color):null;return(r=l.inputs)==null?void 0:r.map(i=>{let{getValue:f,getColor:g,...v}=i;return{...l.inputProps,...v,disabled:e.disabled,value:n&&f(n),onChange:P=>{const h=P.target;h&&t("update:color",l.from(g(n??l.to(S),h.value)))}}})});return w(()=>{var l;return o("div",{class:["v-color-picker-edit",e.class],style:e.style},[(l=c.value)==null?void 0:l.map(n=>o(pa,n,null)),s.value.length>1&&o(be,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const n=s.value.findIndex(r=>r.name===e.mode);t("update:mode",s.value[(n+1)%s.value.length].name)}},null)])}),{}}});const va=F({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...O()},"VColorPickerPreview"),ka=q({name:"VColorPickerPreview",props:va(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;const s=new AbortController;Ve(()=>s.abort());async function c(){if(!Q)return;const l=new window.EyeDropper;try{const n=await l.open({signal:s.signal}),r=me(n.sRGBHex);t("update:color",{...e.color??S,...r})}catch{}}return w(()=>{var l,n;return o("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[Q&&o("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[o(be,{onClick:c,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),o("div",{class:"v-color-picker-preview__dot"},[o("div",{style:{background:he(e.color??S)}},null)]),o("div",{class:"v-color-picker-preview__sliders"},[o(Z,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(l=e.color)==null?void 0:l.h,"onUpdate:modelValue":r=>t("update:color",{...e.color??S,h:r}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&o(Z,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((n=e.color)==null?void 0:n.a)??1,"onUpdate:modelValue":r=>t("update:color",{...e.color??S,a:r}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const ya={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},Ca={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},Sa={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},Va={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},wa={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},Fa={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},Pa={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Ba={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},Ha={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},$a={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},xa={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},Oa={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},qa={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},_a={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},Ea={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Ra={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},Ua={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},Ma={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},Na={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},Da={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},Aa={red:ya,pink:Ca,purple:Sa,deepPurple:Va,indigo:wa,blue:Fa,lightBlue:Pa,cyan:Ba,teal:Ha,green:$a,lightGreen:xa,lime:Oa,yellow:qa,amber:_a,orange:Ea,deepOrange:Ra,brown:Ua,blueGrey:Ma,grey:Na,shades:Da},ja=F({swatches:{type:Array,default:()=>La(Aa)},disabled:Boolean,color:Object,maxHeight:[Number,String],...O()},"VColorPickerSwatches");function La(e){return Object.keys(e).map(a=>{const t=e[a];return t.base?[t.base,t.darken4,t.darken3,t.darken2,t.darken1,t.lighten1,t.lighten2,t.lighten3,t.lighten4,t.lighten5]:[t.black,t.white,t.transparent]})}const za=q({name:"VColorPickerSwatches",props:ja(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;return w(()=>o("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:x(e.maxHeight)},e.style]},[o("div",null,[e.swatches.map(s=>o("div",{class:"v-color-picker-swatches__swatch"},[s.map(c=>{const l=pe(c),n=J(l),r=De(l);return o("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&t("update:color",n)},[o("div",{style:{background:r}},[e.color&&Ae(e.color,n)?o(We,{size:"x-small",icon:"$success",color:je(c,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}});const ve=F({color:String,...Xe(),...O(),...Ke(),...Ze(),...aa(),...Te(),...oa(),...na(),...Le()},"VSheet"),te=Ee()({name:"VSheet",props:ve(),setup(e,a){let{slots:t}=a;const{themeClasses:s}=ze(e),{backgroundColorClasses:c,backgroundColorStyles:l}=Ye(we(e,"color")),{borderClasses:n}=Je(e),{dimensionStyles:r}=Qe(e),{elevationClasses:i}=ea(e),{locationStyles:f}=ta(e),{positionClasses:g}=Ge(e),{roundedClasses:v}=la(e);return w(()=>o(e.tag,{class:["v-sheet",s.value,c.value,n.value,i.value,g.value,v.value,e.class],style:[l.value,r.value,f.value,e.style]},t)),{}}}),Ia=F({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(C).includes(e)},modes:{type:Array,default:()=>Object.keys(C),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(C).includes(a))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...Ie(ve({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),oe=q({name:"VColorPicker",props:Ia(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=ee(e,"mode"),t=y(null),s=ee(e,"modelValue",void 0,i=>{if(i==null||i==="")return null;let f;try{f=J(pe(i))}catch{return null}return f},i=>i?ua(i,e.modelValue):null),c=V(()=>s.value?{...s.value,h:t.value??s.value.h}:null),{rtlClasses:l}=ra();let n=!0;M(s,i=>{if(!n){n=!0;return}i&&(t.value=i.h)},{immediate:!0});const r=i=>{n=!1,t.value=i.h,s.value=i};return de(()=>{e.modes.includes(a.value)||(a.value=e.modes[0])}),Re({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),w(()=>{const i=te.filterProps(e);return o(te,$({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",l.value,e.class],style:[{"--v-color-picker-color-hsv":he({...c.value??S,a:1})},e.style]},i,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&o(sa,{key:"canvas",color:c.value,"onUpdate:color":r,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&o("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&o(ka,{key:"preview",color:c.value,"onUpdate:color":r,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&o(ga,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":f=>a.value=f,color:c.value,"onUpdate:color":r,disabled:e.disabled},null)]),e.showSwatches&&o(za,{key:"swatches",color:c.value,"onUpdate:color":r,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}}),ke=Fe({name:"FSColorField",components:{FSTextField:I,FSButton:T,FSCard:He,FSIcon:G,FSCol:N,FSRow:se},props:{description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:"#000000"},opacityValue:{type:Number,required:!1,default:1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},allowOpacity:{type:Boolean,required:!1,default:!0},onlyBaseColors:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:opacity"],setup(e,{emit:a}){const{getColors:t,getBasePaletteColors:s}=$e(),{slots:c}=xe();delete c.description;const l=t(z.Light),n=t(z.Dark),r=y(!1),i=y(e.modelValue.toString().substring(0,7)),f=y(ia(e.opacityValue)),g=y(i.value+f.value),v=V(()=>e.editable?{"--fs-color-field-color":n.base}:{"--fs-color-field-color":l.dark});return{getPercentageFromHex:ae,getBasePaletteColors:s,innerOpacity:f,innerColor:i,fullColor:g,ColorEnum:z,onSubmit:h=>{i.value=h.substring(0,7),f.value=h.length===9?h.substring(7,9):"FF",g.value=i.value+f.value,a("update:modelValue",i.value),a("update:opacity",ae(f.value))},style:v,menu:r}}});function Ta(e,a,t,s,c,l){const n=Pe("FSCard");return B(),H(_e,{closeOnContentClick:!1,modelValue:e.menu&&e.$props.editable,"onUpdate:modelValue":a[0]||(a[0]=r=>e.menu=r)},{activator:m(({props:r})=>[o(N,null,{default:m(()=>[o(se,$({height:"fill"},r),{default:m(()=>[o(I,$({class:"fs-color-field",hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,clearable:!1,readonly:!0,modelValue:e.innerColor},e.$attrs),{"prepend-inner":m(()=>[j(e.$slots,"prepend-inner",{},()=>[o(G,{color:e.innerColor},{default:m(()=>[L(" mdi-circle ")]),_:1},8,["color"])])]),append:m(()=>[o(T,$({prependIcon:"mdi-pencil",variant:"full",editable:e.$props.editable},r),null,16,["editable"])]),_:2},1040,["hideHeader","required","editable","modelValue"]),e.$props.allowOpacity&&!e.$props.onlyBaseColors?(B(),H(I,{key:0,class:"fs-color-field-opacity",label:e.$tr("ui.color-field.opacity","Opacity"),hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,clearable:!1,readonly:!0,modelValue:Math.round(e.getPercentageFromHex(e.innerOpacity)*100)+" %"},{"prepend-inner":m(()=>[j(e.$slots,"prepend-inner",{},()=>[o(G,{color:e.ColorEnum.Dark,editable:e.$props.editable,style:Y({opacity:e.getPercentageFromHex(e.innerOpacity)})},{default:m(()=>[L(" mdi-circle ")]),_:1},8,["color","editable","style"])])]),append:m(()=>[o(T,$({prependIcon:"mdi-pencil",variant:"full",editable:e.$props.editable},r),null,16,["editable"])]),_:2},1032,["label","hideHeader","required","editable","modelValue"])):K("",!0)]),_:2},1040),j(e.$slots,"description",{},()=>[e.$props.description?(B(),H(qe,{key:0,class:"fs-color-field-description",font:"text-underline",style:Y(e.style)},{default:m(()=>[L(Be(e.$props.description),1)]),_:1},8,["style"])):K("",!0)])]),_:2},1024)]),default:m(()=>[o(n,{elevation:!0,border:!1},{default:m(()=>[o(N,{width:"fill"},{default:m(()=>[e.$props.onlyBaseColors?(B(),H(oe,{key:1,class:"fs-color-field-picker",elevation:0,modelValue:e.fullColor,"onUpdate:modelValue":e.onSubmit,"swatches-max-height":"400px","show-swatches":"","hide-inputs":"","hide-canvas":"","hide-sliders":"",swatches:e.getBasePaletteColors()},null,8,["modelValue","onUpdate:modelValue","swatches"])):(B(),H(oe,{key:0,class:"fs-color-field-picker",mode:"hexa",elevation:0,modes:e.allowOpacity?["hexa","rgba"]:["hex","rgb"],modelValue:e.fullColor,"onUpdate:modelValue":e.onSubmit},null,8,["modes","modelValue","onUpdate:modelValue"]))]),_:1})]),_:1})]),_:3},8,["modelValue"])}const ye=Oe(ke,[["render",Ta]]);ke.__docgenInfo={displayName:"FSColorField",exportName:"default",description:"",tags:{},props:[{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"#000000"'}},{name:"opacityValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"allowOpacity",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"onlyBaseColors",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:opacity"}],slots:[{name:"prepend-inner"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSColorField.vue"]};const zt={title:"Foundation/Shared/Input fields/ColorField",component:ye,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},U={args:{args:{value1:"#FF0000",opacity1:1,value2:"#00FF12",opacity2:0,value3:"#0030FF",opacity3:.5}},render:(e,{argTypes:a})=>({components:{FSColorField:ye,FSCol:N},props:Object.keys(a),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :onlyBaseColors="true"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>`})};var ne,re,ie;U.parameters={...U.parameters,docs:{...(ne=U.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Base color picker"
        :onlyBaseColors="true"      
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>\`
  })
}`,...(ie=(re=U.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const It=["Variations"];export{U as Variations,It as __namedExportsOrder,zt as default};
