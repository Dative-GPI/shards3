import{d as ye,c as i,z as I,A as B,B as m,J as x,I as l,O as $,E as P,G as R,D as w,X as Q,a1 as Z,b as E,l as pe,w as be,F as ge,m as Ce}from"./vue.esm-bundler-DC82FEWN.js";import{_ as p}from"./FSSpan-CwfDYIua.js";import{_ as ee}from"./FSCol-B7HQy3FB.js";import{_ as le}from"./FSRow-DoCXWKDP.js";import{u as he,C as T}from"./useColors-WxHDk9aB.js";import{u as ke}from"./useSlots-V2mVelz6.js";import{_ as _e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Fe}from"./VSpacer-CMZ7Jymr.js";import{b as Se,c as Ve}from"./index-DWl9tX7E.js";import{m as N,g as M,u as O,c as Ie,b as Be}from"./color-BhlhQtQT.js";import{m as $e,M as Pe}from"./transition-CJbyFvkq.js";import{p as H,E as D,r as we,s as qe,e as Le,c as xe,L as Re,M as Ee}from"./theme-CDGAP9oX.js";import{V as Te}from"./VLabel-Cp9LN_v7.js";import{d as De,u as Ae,e as Ne}from"./VInput-BvcCh06W.js";import{I as A}from"./VIcon-uFUcYN4x.js";import{m as Me,u as Oe,L as He}from"./loader-CTRePS7y.js";import{u as Ke}from"./locale-BC9z6YbT.js";import{m as Ue,u as je}from"./rounded-TFXDyxjJ.js";import{V as ze}from"./VDefaultsProvider-CTE9NJfn.js";import{n as We,a as Xe,s as Ge}from"./forwardRefs-DWGaNmQL.js";const ae=ye({name:"FSBaseField",components:{FSSpan:p,FSCol:ee,FSRow:le},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},messages:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:t}=he(),{slots:n}=ke();delete n.label,delete n.description;const c=t(T.Error),a=t(T.Light),b=t(T.Dark);return{style:i(()=>e.editable?{"--fs-base-field-color":b.base,"--fs-base-field-error-color":c.base}:{"--fs-base-field-color":a.dark}),slots:n}}});function Je(e,t,n,c,a,b){return I(),B(ee,null,{default:m(()=>[e.$props.hideHeader?w("",!0):x(e.$slots,"label",{key:0},()=>[l(le,{wrap:!1},{default:m(()=>[l(p,{class:"fs-base-field-label",font:"text-overline",style:$(e.style)},{default:m(()=>[P(R(e.$props.label),1)]),_:1},8,["style"]),e.$props.label&&e.$props.required?(I(),B(p,{key:0,class:"fs-base-field-label",style:$([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:m(()=>[P(" * ")]),_:1},8,["style"])):w("",!0),l(Fe,{style:{"min-width":"40px"}}),e.$props.messages.length>0?(I(),B(p,{key:1,class:"fs-base-field-messages",font:"text-overline",style:$(e.style)},{default:m(()=>[P(R(e.$props.messages.join(", ")),1)]),_:1},8,["style"])):w("",!0)]),_:1})]),x(e.$slots,"default"),x(e.$slots,"description",{},()=>[e.$props.description?(I(),B(p,{key:0,class:"fs-base-field-description",font:"text-underline",style:$(e.style)},{default:m(()=>[P(R(e.$props.description),1)]),_:1},8,["style"])):w("",!0)])]),_:3})}const _l=_e(ae,[["render",Je]]);ae.__docgenInfo={displayName:"FSBaseField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"messages",type:{name:"array"},required:!1,defaultValue:{func:!1,value:"[]"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"label"},{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSBaseField.vue"]};const Ye=H({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...N(),...$e({transition:{component:Se}})},"VCounter"),Fl=M()({name:"VCounter",functional:!0,props:Ye(),setup(e,t){let{slots:n}=t;const c=i(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return O(()=>l(Pe,{transition:e.transition},{default:()=>[Q(l("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:c.value,max:e.max,value:e.value}):c.value]),[[Z,e.active]])]})),{}}}),Qe=H({floating:Boolean,...N()},"VFieldLabel"),q=M()({name:"VFieldLabel",props:Qe(),setup(e,t){let{slots:n}=t;return O(()=>l(Te,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),Ze=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],el=H({appendInnerIcon:A,bgColor:String,clearable:Boolean,clearIcon:{type:A,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:A,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ze.includes(e)},"onClick:clear":D(),"onClick:appendInner":D(),"onClick:prependInner":D(),...N(),...Me(),...Ue(),...we()},"VField"),ll=M()({name:"VField",inheritAttrs:!1,props:{id:String,...De(),...el()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{themeClasses:b}=qe(e),{loaderClasses:K}=Oe(e),{focusClasses:ne,isFocused:U,focus:g,blur:C}=Ae(e),{InputIcon:L}=Ne(e),{roundedClasses:te}=je(e),{rtlClasses:se}=Ke(),h=i(()=>e.dirty||e.active),k=i(()=>!e.singleLine&&!!(e.label||a.label)),oe=Le(),d=i(()=>e.id||`input-${oe}`),re=i(()=>`${d.value}-messages`),j=E(),_=E(),z=E(),W=i(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:ie,backgroundColorStyles:de}=Ie(pe(e,"bgColor")),{textColorClasses:X,textColorStyles:G}=Be(i(()=>e.error||e.disabled?void 0:h.value&&U.value?e.color:e.baseColor));be(h,s=>{if(k.value){const o=j.value.$el,u=_.value.$el;requestAnimationFrame(()=>{const f=We(o),r=u.getBoundingClientRect(),F=r.x-f.x,S=r.y-f.y-(f.height/2-r.height/2),y=r.width/.75,V=Math.abs(y-f.width)>1?{maxWidth:xe(y)}:void 0,fe=getComputedStyle(o),Y=getComputedStyle(u),ce=parseFloat(fe.transitionDuration)*1e3||150,me=parseFloat(Y.getPropertyValue("--v-field-label-scale")),ve=Y.getPropertyValue("color");o.style.visibility="visible",u.style.visibility="hidden",Xe(o,{transform:`translate(${F}px, ${S}px) scale(${me})`,color:ve,...V},{duration:ce,easing:Ge,direction:s?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),u.style.removeProperty("visibility")})})}},{flush:"post"});const v=i(()=>({isActive:h,isFocused:U,controlRef:z,blur:C,focus:g}));function ue(s){s.target!==document.activeElement&&s.preventDefault()}function J(s){var o;s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),s.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return O(()=>{var F,S,y;const s=e.variant==="outlined",o=!!(a["prepend-inner"]||e.prependInnerIcon),u=!!(e.clearable||a.clear),f=!!(a["append-inner"]||e.appendInnerIcon||u),r=()=>a.label?a.label({...v.value,label:e.label,props:{for:d.value}}):e.label;return l("div",Ce({class:["v-field",{"v-field--active":h.value,"v-field--appended":f,"v-field--center-affix":e.centerAffix??!W.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},b.value,ie.value,ne.value,K.value,te.value,se.value,e.class],style:[de.value,e.style],onClick:ue},n),[l("div",{class:"v-field__overlay"},null),l(He,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(L,{key:"prepend-icon",name:"prependInner"},null),(F=a["prepend-inner"])==null?void 0:F.call(a,v.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&k.value&&l(q,{key:"floating-label",ref:_,class:[X.value],floating:!0,for:d.value,style:G.value},{default:()=>[r()]}),l(q,{ref:j,for:d.value},{default:()=>[r()]}),(S=a.default)==null?void 0:S.call(a,{...v.value,props:{id:d.value,class:"v-field__input","aria-describedby":re.value},focus:g,blur:C})]),u&&l(Ve,{key:"clear"},{default:()=>[Q(l("div",{class:"v-field__clearable",onMousedown:V=>{V.preventDefault(),V.stopPropagation()}},[l(ze,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...v.value,props:{onKeydown:J,onFocus:g,onBlur:C,onClick:e["onClick:clear"]}}):l(L,{name:"clear",onKeydown:J,onFocus:g,onBlur:C},null)]})]),[[Z,e.dirty]])]}),f&&l("div",{key:"append",class:"v-field__append-inner"},[(y=a["append-inner"])==null?void 0:y.call(a,v.value),e.appendInnerIcon&&l(L,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",X.value],style:G.value},[s&&l(ge,null,[l("div",{class:"v-field__outline__start"},null),k.value&&l("div",{class:"v-field__outline__notch"},[l(q,{ref:_,floating:!0,for:d.value},{default:()=>[r()]})]),l("div",{class:"v-field__outline__end"},null)]),W.value&&k.value&&l(q,{ref:_,floating:!0,for:d.value},{default:()=>[r()]})])])}),{controlRef:z}}});function Sl(e){const t=Object.keys(ll.props).filter(n=>!Re(n)&&n!=="class"&&n!=="style");return Ee(e,t)}export{_l as F,ll as V,Fl as a,Sl as f,el as m};
