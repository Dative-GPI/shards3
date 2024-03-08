import{j as U,d as S,e as o,z as a,B as q,$ as W,q as te,w as le,F as ne,A as ie}from"./vue.esm-bundler-d8049c85.js";import{b as se,c as oe}from"./index-a9977cc4.js";import{m as w,g as R,u as T}from"./useRender-29d234e5.js";import{m as re,M as de}from"./transition-a0827c0d.js";import{p as A,Q as L,v as ue,x as ce,j as fe,e as ve,R as me,M as ge}from"./theme-540b65c4.js";import{a as be,e as ye,u as Ce,f as he}from"./VInput-95d46afc.js";import{u as pe,a as ke}from"./color-339b05ed.js";import{I as $}from"./tag-fffb6ba6.js";import{m as _e,a as Ie,L as Ve}from"./loader-cb170f8e.js";import{b as xe}from"./locale-0b822523.js";import{m as Fe,u as Pe}from"./rounded-0d200380.js";import{n as Se,a as Be,s as Le}from"./forwardRefs-e658ad70.js";const Ye=()=>{const e=U("validateOn","input"),n=U("submitted",!1),l=S(!1),b=o(()=>{switch(e){case"submit":return n?"input":"submit";case"blur":return l.value?"input":"blur";case"input":return"input"}});return{validateOn:b,blurred:l,getMessages:(u,c,B=!1)=>{if(!c||!c.length)return[];switch(b.value){case"submit":if(!n)return[];break;case"blur":if(!l.value)return[];break}const f=[];if(B)if(u&&Array.isArray(u))for(const r of u)for(const i of c){const y=i(r);typeof y=="string"&&f.push(y)}else for(const r of c){const i=r(u??"");typeof i=="string"&&f.push(i)}else for(const r of c){const i=r(u??"");typeof i=="string"&&f.push(i)}return[...new Set(f)]}}};const $e=A({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...w(),...re({transition:{component:se}})},"VCounter"),Ge=R()({name:"VCounter",functional:!0,props:$e(),setup(e,n){let{slots:l}=n;const b=o(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return T(()=>a(de,{transition:e.transition},{default:()=>[q(a("div",{class:["v-counter",e.class],style:e.style},[l.default?l.default({counter:b.value,max:e.max,value:e.value}):b.value]),[[W,e.active]])]})),{}}});const we=A({floating:Boolean,...w()},"VFieldLabel"),P=R()({name:"VFieldLabel",props:we(),setup(e,n){let{slots:l}=n;return T(()=>a(be,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l)),{}}}),Re=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Te=A({appendInnerIcon:$,bgColor:String,clearable:Boolean,clearIcon:{type:$,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:$,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Re.includes(e)},"onClick:clear":L(),"onClick:appendInner":L(),"onClick:prependInner":L(),...w(),..._e(),...Fe(),...ue()},"VField"),Ae=R()({name:"VField",inheritAttrs:!1,props:{id:String,...ye(),...Te()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:l,emit:b,slots:t}=n;const{themeClasses:u}=ce(e),{loaderClasses:c}=Ie(e),{focusClasses:B,isFocused:f,focus:r,blur:i}=Ce(e),{InputIcon:y}=he(e),{roundedClasses:z}=Pe(e),{rtlClasses:Q}=xe(),p=o(()=>e.dirty||e.active),k=o(()=>!e.singleLine&&!!(e.label||t.label)),X=fe(),v=o(()=>e.id||`input-${X}`),Y=o(()=>`${v.value}-messages`),M=S(),_=S(),O=S(),E=o(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:G,backgroundColorStyles:H}=pe(te(e,"bgColor")),{textColorClasses:j,textColorStyles:D}=ke(o(()=>e.error||e.disabled?void 0:p.value&&f.value?e.color:e.baseColor));le(p,C=>{if(k.value){const d=M.value.$el,m=_.value.$el;requestAnimationFrame(()=>{const g=Se(d),s=m.getBoundingClientRect(),V=s.x-g.x,x=s.y-g.y-(g.height/2-s.height/2),h=s.width/.75,F=Math.abs(h-g.width)>1?{maxWidth:ve(h)}:void 0,K=getComputedStyle(d),N=getComputedStyle(m),Z=parseFloat(K.transitionDuration)*1e3||150,ee=parseFloat(N.getPropertyValue("--v-field-label-scale")),ae=N.getPropertyValue("color");d.style.visibility="visible",m.style.visibility="hidden",Be(d,{transform:`translate(${V}px, ${x}px) scale(${ee})`,color:ae,...F},{duration:Z,easing:Le,direction:C?"normal":"reverse"}).finished.then(()=>{d.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const I=o(()=>({isActive:p,isFocused:f,controlRef:O,blur:i,focus:r}));function J(C){C.target!==document.activeElement&&C.preventDefault()}return T(()=>{var V,x,h;const C=e.variant==="outlined",d=t["prepend-inner"]||e.prependInnerIcon,m=!!(e.clearable||t.clear),g=!!(t["append-inner"]||e.appendInnerIcon||m),s=()=>t.label?t.label({...I.value,label:e.label,props:{for:v.value}}):e.label;return a("div",ie({class:["v-field",{"v-field--active":p.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!E.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":d,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!s(),[`v-field--variant-${e.variant}`]:!0},u.value,G.value,B.value,c.value,z.value,Q.value,e.class],style:[H.value,e.style],onClick:J},l),[a("div",{class:"v-field__overlay"},null),a(Ve,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),d&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(y,{key:"prepend-icon",name:"prependInner"},null),(V=t["prepend-inner"])==null?void 0:V.call(t,I.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&k.value&&a(P,{key:"floating-label",ref:_,class:[j.value],floating:!0,for:v.value,style:D.value},{default:()=>[s()]}),a(P,{ref:M,for:v.value},{default:()=>[s()]}),(x=t.default)==null?void 0:x.call(t,{...I.value,props:{id:v.value,class:"v-field__input","aria-describedby":Y.value},focus:r,blur:i})]),m&&a(oe,{key:"clear"},{default:()=>[q(a("div",{class:"v-field__clearable",onMousedown:F=>{F.preventDefault(),F.stopPropagation()}},[t.clear?t.clear():a(y,{name:"clear"},null)]),[[W,e.dirty]])]}),g&&a("div",{key:"append",class:"v-field__append-inner"},[(h=t["append-inner"])==null?void 0:h.call(t,I.value),e.appendInnerIcon&&a(y,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",j.value],style:D.value},[C&&a(ne,null,[a("div",{class:"v-field__outline__start"},null),k.value&&a("div",{class:"v-field__outline__notch"},[a(P,{ref:_,floating:!0,for:v.value},{default:()=>[s()]})]),a("div",{class:"v-field__outline__end"},null)]),E.value&&k.value&&a(P,{ref:_,floating:!0,for:v.value},{default:()=>[s()]})])])}),{controlRef:O}}});function He(e){const n=Object.keys(Ae.props).filter(l=>!me(l)&&l!=="class"&&l!=="style");return ge(e,n)}export{Ae as V,Ge as a,He as f,Te as m,Ye as u};
