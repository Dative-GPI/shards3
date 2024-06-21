import{d as ye,c as i,z as I,A as B,B as m,L as x,K as a,Q as $,E as P,G as R,D as w,W as J,a1 as Z,b as E,v as pe,w as be,F as ge,m as Ce}from"./vue.esm-bundler-DUki7rNA.js";import{_ as p}from"./FSSpan-DUTdSgpN.js";import{_ as ee}from"./FSCol-BBaW1DrL.js";import{_ as ae}from"./FSRow-CHgEOZQb.js";import{u as he,C as D}from"./useColors-HWn2iBmk.js";import{u as ke}from"./useSlots-BZu_lZyn.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Ve}from"./VSpacer-CujVv6t6.js";import{b as _e,c as Se}from"./index-zNldQLkd.js";import{m as N,g as M,u as K}from"./useRender-pAH_6Aah.js";import{m as Ie,M as Be}from"./transition-CAmaHrck.js";import{p as O,E as T,D as $e,F as Pe,n as we,h as qe,V as Le,P as xe}from"./theme-BdipdDNo.js";import{V as Re}from"./VLabel-URjizS1I.js";import{d as Ee,u as De,e as Te}from"./VInput-qlcJwxYl.js";import{b as Ae,a as Ne}from"./color-B6JLWHIR.js";import{I as A}from"./tag-BAqPjmMA.js";import{m as Me,u as Ke,L as Oe}from"./loader-B-LDUF0l.js";import{a as He}from"./locale-BngQMCjE.js";import{m as Ue,u as We}from"./rounded-CuOTz_ni.js";import{V as je}from"./VDefaultsProvider-Dq1Infgw.js";import{n as ze,a as Ge,s as Qe}from"./forwardRefs-DWGaNmQL.js";const le=ye({name:"FSBaseField",components:{FSSpan:p,FSCol:ee,FSRow:ae},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},messages:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:t}=he(),{slots:n}=ke();delete n.label,delete n.description;const c=t(D.Error),l=t(D.Light),b=t(D.Dark);return{style:i(()=>e.editable?{"--fs-base-field-color":b.base,"--fs-base-field-error-color":c.base}:{"--fs-base-field-color":l.dark}),slots:n}}});function Xe(e,t,n,c,l,b){return I(),B(ee,null,{default:m(()=>[e.$props.hideHeader?w("",!0):x(e.$slots,"label",{key:0},()=>[a(ae,{wrap:!1},{default:m(()=>[a(p,{class:"fs-base-field-label",font:"text-overline",style:$(e.style)},{default:m(()=>[P(R(e.$props.label),1)]),_:1},8,["style"]),e.$props.label&&e.$props.required?(I(),B(p,{key:0,class:"fs-base-field-label",style:$([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:m(()=>[P(" * ")]),_:1},8,["style"])):w("",!0),a(Ve,{style:{"min-width":"40px"}}),e.$props.messages.length>0?(I(),B(p,{key:1,class:"fs-base-field-messages",font:"text-overline",style:$(e.style)},{default:m(()=>[P(R(e.$props.messages.join(", ")),1)]),_:1},8,["style"])):w("",!0)]),_:1})]),x(e.$slots,"default"),x(e.$slots,"description",{},()=>[e.$props.description?(I(),B(p,{key:0,class:"fs-base-field-description",font:"text-underline",style:$(e.style)},{default:m(()=>[P(R(e.$props.description),1)]),_:1},8,["style"])):w("",!0)])]),_:3})}const Va=Fe(le,[["render",Xe]]);le.__docgenInfo={displayName:"FSBaseField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"messages",type:{name:"array"},required:!1,defaultValue:{func:!1,value:"[]"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"label"},{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSBaseField.vue"]};const Ye=O({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...N(),...Ie({transition:{component:_e}})},"VCounter"),_a=M()({name:"VCounter",functional:!0,props:Ye(),setup(e,t){let{slots:n}=t;const c=i(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>a(Be,{transition:e.transition},{default:()=>[J(a("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:c.value,max:e.max,value:e.value}):c.value]),[[Z,e.active]])]})),{}}}),Je=O({floating:Boolean,...N()},"VFieldLabel"),q=M()({name:"VFieldLabel",props:Je(),setup(e,t){let{slots:n}=t;return K(()=>a(Re,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),Ze=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ea=O({appendInnerIcon:A,bgColor:String,clearable:Boolean,clearIcon:{type:A,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:A,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ze.includes(e)},"onClick:clear":T(),"onClick:appendInner":T(),"onClick:prependInner":T(),...N(),...Me(),...Ue(),...$e()},"VField"),aa=M()({name:"VField",inheritAttrs:!1,props:{id:String,...Ee(),...ea()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:l}=t;const{themeClasses:b}=Pe(e),{loaderClasses:H}=Ke(e),{focusClasses:ne,isFocused:U,focus:g,blur:C}=De(e),{InputIcon:L}=Te(e),{roundedClasses:te}=We(e),{rtlClasses:se}=He(),h=i(()=>e.dirty||e.active),k=i(()=>!e.singleLine&&!!(e.label||l.label)),oe=we(),d=i(()=>e.id||`input-${oe}`),re=i(()=>`${d.value}-messages`),W=E(),F=E(),j=E(),z=i(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:ie,backgroundColorStyles:de}=Ae(pe(e,"bgColor")),{textColorClasses:G,textColorStyles:Q}=Ne(i(()=>e.error||e.disabled?void 0:h.value&&U.value?e.color:e.baseColor));be(h,s=>{if(k.value){const o=W.value.$el,u=F.value.$el;requestAnimationFrame(()=>{const f=ze(o),r=u.getBoundingClientRect(),V=r.x-f.x,_=r.y-f.y-(f.height/2-r.height/2),y=r.width/.75,S=Math.abs(y-f.width)>1?{maxWidth:qe(y)}:void 0,fe=getComputedStyle(o),Y=getComputedStyle(u),ce=parseFloat(fe.transitionDuration)*1e3||150,me=parseFloat(Y.getPropertyValue("--v-field-label-scale")),ve=Y.getPropertyValue("color");o.style.visibility="visible",u.style.visibility="hidden",Ge(o,{transform:`translate(${V}px, ${_}px) scale(${me})`,color:ve,...S},{duration:ce,easing:Qe,direction:s?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),u.style.removeProperty("visibility")})})}},{flush:"post"});const v=i(()=>({isActive:h,isFocused:U,controlRef:j,blur:C,focus:g}));function ue(s){s.target!==document.activeElement&&s.preventDefault()}function X(s){var o;s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),s.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var V,_,y;const s=e.variant==="outlined",o=!!(l["prepend-inner"]||e.prependInnerIcon),u=!!(e.clearable||l.clear),f=!!(l["append-inner"]||e.appendInnerIcon||u),r=()=>l.label?l.label({...v.value,label:e.label,props:{for:d.value}}):e.label;return a("div",Ce({class:["v-field",{"v-field--active":h.value,"v-field--appended":f,"v-field--center-affix":e.centerAffix??!z.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},b.value,ie.value,ne.value,H.value,te.value,se.value,e.class],style:[de.value,e.style],onClick:ue},n),[a("div",{class:"v-field__overlay"},null),a(Oe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),o&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(L,{key:"prepend-icon",name:"prependInner"},null),(V=l["prepend-inner"])==null?void 0:V.call(l,v.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&k.value&&a(q,{key:"floating-label",ref:F,class:[G.value],floating:!0,for:d.value,style:Q.value},{default:()=>[r()]}),a(q,{ref:W,for:d.value},{default:()=>[r()]}),(_=l.default)==null?void 0:_.call(l,{...v.value,props:{id:d.value,class:"v-field__input","aria-describedby":re.value},focus:g,blur:C})]),u&&a(Se,{key:"clear"},{default:()=>[J(a("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[a(je,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[l.clear?l.clear({...v.value,props:{onKeydown:X,onFocus:g,onBlur:C,onClick:e["onClick:clear"]}}):a(L,{name:"clear",onKeydown:X,onFocus:g,onBlur:C},null)]})]),[[Z,e.dirty]])]}),f&&a("div",{key:"append",class:"v-field__append-inner"},[(y=l["append-inner"])==null?void 0:y.call(l,v.value),e.appendInnerIcon&&a(L,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",G.value],style:Q.value},[s&&a(ge,null,[a("div",{class:"v-field__outline__start"},null),k.value&&a("div",{class:"v-field__outline__notch"},[a(q,{ref:F,floating:!0,for:d.value},{default:()=>[r()]})]),a("div",{class:"v-field__outline__end"},null)]),z.value&&k.value&&a(q,{ref:F,floating:!0,for:d.value},{default:()=>[r()]})])])}),{controlRef:j}}});function Sa(e){const t=Object.keys(aa.props).filter(n=>!Le(n)&&n!=="class"&&n!=="style");return xe(e,t)}export{Va as F,aa as V,_a as a,Sa as f,ea as m};
