import{d as z,w as q,x as O,e as v,A as B,z as d,G as P,_ as E,H as b,L as y,M as s,V as U,W as M,J as h,Q as W,R as G,Y as H,O as C,P as F,N as I}from"./vue.esm-bundler-d8049c85.js";import{_ as S}from"./FSButton-819b5655.js";import{F as J}from"./FSCard-c2aada98.js";import{_ as k}from"./FSCol-39bd052c.js";import{C as g}from"./useColors-5c9cff43.js";import{u as Q}from"./useBreakpoints-7d02383c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Y,V as j,u as K,b as w}from"./VOverlay-0482e356.js";import{f as X}from"./forwardRefs-e658ad70.js";import{u as Z}from"./locale-0b822523.js";import{V as _}from"./VDefaultsProvider-2b53b1ea.js";import{p as x,I as ee,A as ae}from"./theme-540b65c4.js";import{g as te,u as le}from"./useRender-29d234e5.js";import{_ as A}from"./FSRow-b5482a77.js";import{u as oe}from"./useTranslations-503566cb.js";import{_ as D}from"./FSSpan-9f00eaf4.js";const ne=x({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Y({origin:"center center",scrollStrategy:"block",transition:{component:j},zIndex:2400})},"VDialog"),re=te()({name:"VDialog",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const l=Z(e,"modelValue"),{scopeId:i}=K(),o=z();function m(n){var p,c;const t=n.relatedTarget,u=n.target;if(t!==u&&((p=o.value)!=null&&p.contentEl)&&((c=o.value)!=null&&c.globalTop)&&![document,o.value.contentEl].includes(u)&&!o.value.contentEl.contains(u)){const V=ae(o.value.contentEl);if(!V.length)return;const $=V[0],T=V[V.length-1];t===$?T.focus():$.focus()}}ee&&q(()=>l.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",m):document.removeEventListener("focusin",m)},{immediate:!0}),q(l,async n=>{var t,u;await O(),n?(t=o.value.contentEl)==null||t.focus({preventScroll:!0}):(u=o.value.activatorEl)==null||u.focus({preventScroll:!0})});const f=v(()=>B({"aria-haspopup":"dialog","aria-expanded":String(l.value)},e.activatorProps));return le(()=>{const n=w.filterProps(e);return d(w,B({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,"aria-modal":"true",activatorProps:f.value,role:"dialog"},i),{activator:r.activator,default:function(){for(var t=arguments.length,u=new Array(t),p=0;p<t;p++)u[p]=arguments[p];return d(_,{root:"VDialog"},{default:()=>{var c;return[(c=r.default)==null?void 0:c.call(r,...u)]}})}})}),X({},o)}}),N=P({name:"FSDialog",components:{FSButton:S,FSCard:J,FSCol:k},props:{modelValue:{type:Boolean,required:!1,default:!1},width:{type:[String,Number],required:!1,default:"auto"},color:{type:String,required:!1,default:g.Dark},cardClasses:{type:[Array,String],required:!1,default:null}},emits:["update:modelValue"],setup(e){const{isExtraSmall:a}=Q(),r=v(()=>{const i=["fs-dialog"];return Array.isArray(e.cardClasses)?i.push(...e.cardClasses):i.push(e.cardClasses),a.value&&i.push("fs-dialog-mobile"),i}),l=v(()=>a.value?"100%":e.width);return{ColorEnum:g,isExtraSmall:a,classes:r,width:l}}});function ue(e,a,r,l,i,o){const m=E("FSCard");return b(),y(re,B({transition:"dialog-bottom-transition",width:e.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=f=>e.$emit("update:modelValue",f))},e.$attrs),{default:s(()=>[d(m,{padding:"24px",gap:"24px",width:e.width,class:H(e.classes),color:e.$props.color,border:!e.isExtraSmall},U({_:2},[M(e.$slots,(f,n)=>({name:n,fn:s(t=>[h(e.$slots,n,W(G(t)))])}))]),1032,["width","class","color","border"]),d(S,{class:"fs-dialog-close-button",variant:"icon",icon:"mdi-close",color:e.ColorEnum.Dark,onClick:a[0]||(a[0]=f=>e.$emit("update:modelValue",!1))},null,8,["color"])]),_:3},16,["width","modelValue"])}const se=L(N,[["render",ue]]);N.__docgenInfo={displayName:"FSDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"cardClasses",type:{name:"string[] | string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialog.vue"]};const R=P({name:"FSSubmitDialog",components:{FSDialog:se,FSRow:A},props:{modelValue:{type:Boolean,required:!1,default:!1},width:{type:[String,Number],required:!1,default:"auto"},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},leftButtonPrependIcon:{type:String,required:!1,default:null},leftButtonLabel:{type:String,required:!1,default:null},leftButtonAppendIcon:{type:String,required:!1,default:null},leftButtonVariant:{type:String,required:!1,default:"standard"},rightButtonPrependIcon:{type:String,required:!1,default:null},rightButtonLabel:{type:String,required:!1,default:null},rightButtonAppendIcon:{type:String,required:!1,default:null},rightButtonVariant:{type:String,required:!1,default:"full"},leftButtonColor:{type:String,required:!1,default:g.Light},rightButtonColor:{type:String,required:!1,default:g.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","click:rightButton"],setup(e){const{$tr:a}=oe(),r=v(()=>e.leftButtonLabel??a("ui.button.cancel","Cancel")),l=v(()=>e.rightButtonLabel??a("ui.button.validate","Validate"));return{ColorEnum:g,cancelButtonLabel:r,submitButtonLabel:l}}});function ie(e,a,r,l,i,o){const m=E("FSDialog");return b(),y(m,B({cardClasses:"fs-submit-dialog",width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[2]||(a[2]=f=>e.$emit("update:modelValue",f))},e.$attrs),{header:s(()=>[h(e.$slots,"header",{},()=>[e.$props.title?(b(),y(k,{key:0},{default:s(()=>[d(D,{font:"text-h2"},{default:s(()=>[C(F(e.$props.title),1)]),_:1}),e.$props.subtitle?(b(),y(D,{key:0},{default:s(()=>[C(F(e.$props.subtitle),1)]),_:1})):I("",!0)]),_:1})):I("",!0)])]),body:s(()=>[h(e.$slots,"body")]),footer:s(()=>[h(e.$slots,"footer",{},()=>[d(A,{class:"fs-submit-dialog-actions",align:"top-right",wrap:!1},{default:s(()=>[d(S,{prependIcon:e.$props.leftButtonPrependIcon,label:e.cancelButtonLabel,appendIcon:e.$props.leftButtonAppendIcon,variant:e.$props.leftButtonVariant,color:e.$props.leftButtonColor,onClick:a[0]||(a[0]=()=>e.$emit("update:modelValue",!1))},null,8,["prependIcon","label","appendIcon","variant","color"]),d(S,{prependIcon:e.$props.rightButtonPrependIcon,label:e.submitButtonLabel,appendIcon:e.$props.rightButtonAppendIcon,variant:e.$props.rightButtonVariant,color:e.$props.rightButtonColor,editable:e.$props.editable,onClick:a[1]||(a[1]=()=>e.$emit("click:rightButton"))},null,8,["prependIcon","label","appendIcon","variant","color","editable"])]),_:1})])]),_:3},16,["width","modelValue"])}const Fe=L(R,[["render",ie]]);R.__docgenInfo={displayName:"FSSubmitDialog",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"auto"'}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonPrependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonAppendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"leftButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"rightButtonPrependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonAppendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rightButtonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"leftButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"rightButtonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"click:rightButton"}],slots:[{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSubmitDialog.vue"]};export{Fe as F,se as a};
