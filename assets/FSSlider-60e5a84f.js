import{d as r,m as z,s as ve,j as oe,p as Re,g as he,z as o,A as me,B as qe,Y as Ne,F as xe,y as ke,D as Le,G as X,H as G,I as K,L as ee,K as le,M as te,N as fe,J as ae,W as Be,U as Ee,O as Me,P as De}from"./vue.esm-bundler-6746129d.js";import{C as re,u as se}from"./useColors-af9c4499.js";import"./rules-1d0b59d0.js";import{_ as H}from"./FSSpan-636f18e6.js";import{_ as Se}from"./FSCol-7dad0d26.js";import{_ as ge}from"./FSRow-40eef247.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Oe,u as Ke}from"./elevation-6127bd0f.js";import{b as ne,u as Ae}from"./locale-6d7be75c.js";import{m as Ue,u as je}from"./rounded-4ccd8171.js";import{p as J,T as pe,l as Ye,z as Ve,c as D,U as We}from"./theme-dcffbbe6.js";import{a as Xe}from"./index-a55f475c.js";import{m as Ce,g as ie,b as Ge,u as ue,c as be}from"./color-28636d86.js";import{R as He}from"./index-a12920e9.js";import{e as Je,a as Qe,u as Ze,V as ye,b as el}from"./VInput-0d298506.js";const de=Symbol.for("vuetify:v-slider");function ll(e,l,a){const n=a==="vertical",i=l.getBoundingClientRect(),b="touches"in e?e.touches[0]:e;return n?b.clientY-(i.top+i.height/2):b.clientX-(i.left+i.width/2)}function tl(e,l){return"touches"in e&&e.touches.length?e.touches[0][l]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][l]:e[l]}const al=J({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ue(),...Oe({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),rl=e=>{const l=r(()=>parseFloat(e.min)),a=r(()=>parseFloat(e.max)),n=r(()=>+e.step>0?parseFloat(e.step):0),i=r(()=>Math.max(pe(n.value),pe(l.value)));function b(m){if(m=parseFloat(m),n.value<=0)return m;const u=Ve(m,l.value,a.value),y=l.value%n.value,_=Math.round((u-y)/n.value)*n.value+y;return parseFloat(Math.min(_,a.value).toFixed(i.value))}return{min:l,max:a,step:n,decimals:i,roundValue:b}},sl=e=>{let{props:l,steps:a,onSliderStart:n,onSliderMove:i,onSliderEnd:b,getActiveThumb:m}=e;const{isRtl:u}=ne(),y=z(l,"reverse"),_=r(()=>l.direction==="vertical"),F=r(()=>_.value!==y.value),{min:h,max:g,step:T,decimals:x,roundValue:R}=a,E=r(()=>parseInt(l.thumbSize,10)),L=r(()=>parseInt(l.tickSize,10)),q=r(()=>parseInt(l.trackSize,10)),P=r(()=>(g.value-h.value)/T.value),M=z(l,"disabled"),$=r(()=>l.error||l.disabled?void 0:l.thumbColor??l.color),d=r(()=>l.error||l.disabled?void 0:l.trackColor??l.color),V=r(()=>l.error||l.disabled?void 0:l.trackFillColor??l.color),f=ve(!1),p=ve(0),C=oe(),w=oe();function s(t){var ce;const v=l.direction==="vertical",_e=v?"top":"left",Fe=v?"height":"width",Te=v?"clientY":"clientX",{[_e]:Pe,[Fe]:$e}=(ce=C.value)==null?void 0:ce.$el.getBoundingClientRect(),ze=tl(t,Te);let Z=Math.min(Math.max((ze-Pe-p.value)/$e,0),1)||0;return(v?F.value:F.value!==u.value)&&(Z=1-Z),R(h.value+Z*(g.value-h.value))}const N=t=>{b({value:s(t)}),f.value=!1,p.value=0},B=t=>{w.value=m(t),w.value&&(w.value.focus(),f.value=!0,w.value.contains(t.target)?p.value=ll(t,w.value,l.direction):(p.value=0,i({value:s(t)})),n({value:s(t)}))},S={passive:!0,capture:!0};function I(t){i({value:s(t)})}function U(t){t.stopPropagation(),t.preventDefault(),N(t),window.removeEventListener("mousemove",I,S),window.removeEventListener("mouseup",U)}function j(t){var v;N(t),window.removeEventListener("touchmove",I,S),(v=t.target)==null||v.removeEventListener("touchend",j)}function Q(t){var v;B(t),window.addEventListener("touchmove",I,S),(v=t.target)==null||v.addEventListener("touchend",j,{passive:!1})}function k(t){t.preventDefault(),B(t),window.addEventListener("mousemove",I,S),window.addEventListener("mouseup",U,{passive:!1})}const c=t=>{const v=(t-h.value)/(g.value-h.value)*100;return Ve(isNaN(v)?0:v,0,100)},O=z(l,"showTicks"),A=r(()=>O.value?l.ticks?Array.isArray(l.ticks)?l.ticks.map(t=>({value:t,position:c(t),label:t.toString()})):Object.keys(l.ticks).map(t=>({value:parseFloat(t),position:c(parseFloat(t)),label:l.ticks[t]})):P.value!==1/0?Ye(P.value+1).map(t=>{const v=h.value+t*T.value;return{value:v,position:c(v)}}):[]:[]),Y=r(()=>A.value.some(t=>{let{label:v}=t;return!!v})),W={activeThumbRef:w,color:z(l,"color"),decimals:x,disabled:M,direction:z(l,"direction"),elevation:z(l,"elevation"),hasLabels:Y,isReversed:y,indexFromEnd:F,min:h,max:g,mousePressed:f,numTicks:P,onSliderMousedown:k,onSliderTouchstart:Q,parsedTicks:A,parseMouseMove:s,position:c,readonly:z(l,"readonly"),rounded:z(l,"rounded"),roundValue:R,showTicks:O,startOffset:p,step:T,thumbSize:E,thumbColor:$,thumbLabel:z(l,"thumbLabel"),ticks:z(l,"ticks"),tickSize:L,trackColor:d,trackContainerRef:C,trackFillColor:V,trackSize:q,vertical:_};return Re(de,W),W},ol=J({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...Ce()},"VSliderThumb"),nl=ie()({name:"VSliderThumb",directives:{Ripple:He},props:ol(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a,emit:n}=l;const i=he(de),{isRtl:b,rtlClasses:m}=ne();if(!i)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:u,step:y,disabled:_,thumbSize:F,thumbLabel:h,direction:g,isReversed:T,vertical:x,readonly:R,elevation:E,mousePressed:L,decimals:q,indexFromEnd:P}=i,M=r(()=>_.value?void 0:E.value),{elevationClasses:$}=Ke(M),{textColorClasses:d,textColorStyles:V}=Ge(u),{pageup:f,pagedown:p,end:C,home:w,left:s,right:N,down:B,up:S}=We,I=[f,p,C,w,s,N,B,S],U=r(()=>y.value?[1,2,3]:[1,5,10]);function j(k,c){if(!I.includes(k.key))return;k.preventDefault();const O=y.value||.1,A=(e.max-e.min)/O;if([s,N,B,S].includes(k.key)){const W=(x.value?[b.value?s:N,T.value?B:S]:P.value!==b.value?[s,S]:[N,S]).includes(k.key)?1:-1,t=k.shiftKey?2:k.ctrlKey?1:0;c=c+W*O*U.value[t]}else if(k.key===w)c=e.min;else if(k.key===C)c=e.max;else{const Y=k.key===p?1:-1;c=c-Y*O*(A>100?A/10:10)}return Math.max(e.min,Math.min(e.max,c))}function Q(k){const c=j(k,e.modelValue);c!=null&&n("update:modelValue",c)}return ue(()=>{const k=D(P.value?100-e.position:e.position,"%");return o("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&L.value},e.class,m.value],style:[{"--v-slider-thumb-position":k,"--v-slider-thumb-size":D(F.value)},e.style],role:"slider",tabindex:_.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!R.value,"aria-orientation":g.value,onKeydown:R.value?void 0:Q},[o("div",{class:["v-slider-thumb__surface",d.value,$.value],style:{...V.value}},null),me(o("div",{class:["v-slider-thumb__ripple",d.value],style:V.value},null),[[qe("ripple"),e.ripple,null,{circle:!0,center:!0}]]),o(Xe,{origin:"bottom center"},{default:()=>{var c;return[me(o("div",{class:"v-slider-thumb__label-container"},[o("div",{class:["v-slider-thumb__label"]},[o("div",null,[((c=a["thumb-label"])==null?void 0:c.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(y.value?q.value:1)])])]),[[Ne,h.value&&e.focused||h.value==="always"]])]}})])}),{}}});const il=J({start:{type:Number,required:!0},stop:{type:Number,required:!0},...Ce()},"VSliderTrack"),ul=ie()({name:"VSliderTrack",props:il(),emits:{},setup(e,l){let{slots:a}=l;const n=he(de);if(!n)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:i,parsedTicks:b,rounded:m,showTicks:u,tickSize:y,trackColor:_,trackFillColor:F,trackSize:h,vertical:g,min:T,max:x,indexFromEnd:R}=n,{roundedClasses:E}=je(m),{backgroundColorClasses:L,backgroundColorStyles:q}=be(F),{backgroundColorClasses:P,backgroundColorStyles:M}=be(_),$=r(()=>`inset-${g.value?"block":"inline"}-${R.value?"end":"start"}`),d=r(()=>g.value?"height":"width"),V=r(()=>({[$.value]:"0%",[d.value]:"100%"})),f=r(()=>e.stop-e.start),p=r(()=>({[$.value]:D(e.start,"%"),[d.value]:D(f.value,"%")})),C=r(()=>u.value?(g.value?b.value.slice().reverse():b.value).map((s,N)=>{var S;const B=s.value!==T.value&&s.value!==x.value?D(s.position,"%"):void 0;return o("div",{key:s.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":s.position>=e.start&&s.position<=e.stop,"v-slider-track__tick--first":s.value===T.value,"v-slider-track__tick--last":s.value===x.value}],style:{[$.value]:B}},[(s.label||a["tick-label"])&&o("div",{class:"v-slider-track__tick-label"},[((S=a["tick-label"])==null?void 0:S.call(a,{tick:s,index:N}))??s.label])])}):[]);return ue(()=>o("div",{class:["v-slider-track",E.value,e.class],style:[{"--v-slider-track-size":D(h.value),"--v-slider-tick-size":D(y.value)},e.style]},[o("div",{class:["v-slider-track__background",P.value,{"v-slider-track__background--opacity":!!i.value||!F.value}],style:{...V.value,...M.value}},null),o("div",{class:["v-slider-track__fill",L.value],style:{...p.value,...q.value}},null),u.value&&o("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":u.value==="always"}]},[C.value])])),{}}}),dl=J({...Je(),...al(),...Qe(),modelValue:{type:[Number,String],default:0}},"VSlider"),cl=ie()({name:"VSlider",props:dl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,l){let{slots:a,emit:n}=l;const i=oe(),{rtlClasses:b}=ne(),m=rl(e),u=Ae(e,"modelValue",void 0,d=>m.roundValue(d??m.min.value)),{min:y,max:_,mousePressed:F,roundValue:h,onSliderMousedown:g,onSliderTouchstart:T,trackContainerRef:x,position:R,hasLabels:E,readonly:L}=sl({props:e,steps:m,onSliderStart:()=>{n("start",u.value)},onSliderEnd:d=>{let{value:V}=d;const f=h(V);u.value=f,n("end",f)},onSliderMove:d=>{let{value:V}=d;return u.value=h(V)},getActiveThumb:()=>{var d;return(d=i.value)==null?void 0:d.$el}}),{isFocused:q,focus:P,blur:M}=Ze(e),$=r(()=>R(u.value));return ue(()=>{const d=ye.filterProps(e),V=!!(e.label||a.label||a.prepend);return o(ye,ke({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||E.value,"v-slider--focused":q.value,"v-slider--pressed":F.value,"v-slider--disabled":e.disabled},b.value,e.class],style:e.style},d,{focused:q.value}),{...a,prepend:V?f=>{var p,C;return o(xe,null,[((p=a.label)==null?void 0:p.call(a,f))??(e.label?o(el,{id:f.id.value,class:"v-slider__label",text:e.label},null):void 0),(C=a.prepend)==null?void 0:C.call(a,f)])}:void 0,default:f=>{let{id:p,messagesId:C}=f;return o("div",{class:"v-slider__container",onMousedown:L.value?void 0:g,onTouchstartPassive:L.value?void 0:T},[o("input",{id:p.value,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:u.value},null),o(ul,{ref:x,start:0,stop:$.value},{"tick-label":a["tick-label"]}),o(nl,{ref:i,"aria-describedby":C.value,focused:q.value,min:y.value,max:_.value,modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,position:$.value,elevation:e.elevation,onFocus:P,onBlur:M,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}}),we=Le({name:"FSSlider",components:{FSSpan:H,FSCol:Se,FSRow:ge},props:{label:{type:String,required:!0,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},color:{type:String,required:!1,default:re.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const l=r(()=>se().getColors(e.color)),a=se().getColors(re.Light),n=se().getColors(re.Dark);return{style:r(()=>e.editable?{"--fs-slider-cursor":"pointer","--fs-slider-track-color":l.value.light,"--fs-slider-thumb-color":l.value.base,"--fs-slider-color":n.base}:{"--fs-slider-cursor":"default","--fs-slider-track-color":a.base,"--fs-slider-thumb-color":a.base,"--fs-slider-color":a.dark})}}});function vl(e,l,a,n,i,b){return X(),G(Se,null,{default:K(()=>[ee(e.$slots,"label",{},()=>[o(ge,{wrap:!1},{default:K(()=>[e.$props.label?(X(),G(H,{key:0,class:"fs-slider-label",font:"text-overline",style:le(e.style)},{default:K(()=>[te(fe(e.$props.label),1)]),_:1},8,["style"])):ae("",!0),e.$props.label&&e.$props.required?(X(),G(H,{key:1,class:"fs-slider-label",style:le([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:K(()=>[te(" * ")]),_:1},8,["style"])):ae("",!0)]),_:1})]),o(cl,ke({class:"fs-slider","hide-details":"",tickSize:4,style:e.style,elevation:0,ripple:!1,disabled:!e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),Be({_:2},[Ee(e.slots,(m,u)=>({name:u,fn:K(y=>[ee(e.$slots,u,Me(De(y)))])}))]),1040,["style","disabled","modelValue"]),ee(e.$slots,"description",{},()=>[e.$props.description?(X(),G(H,{key:0,class:"fs-slider-description",font:"text-underline",style:le(e.style)},{default:K(()=>[te(fe(e.$props.description),1)]),_:1},8,["style"])):ae("",!0)])]),_:3})}const Pl=Ie(we,[["render",vl]]);we.__docgenInfo={displayName:"FSSlider",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlider.vue"]};export{Pl as F};
