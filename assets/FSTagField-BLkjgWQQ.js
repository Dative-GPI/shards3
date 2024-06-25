import{d as C,b as h,c,y as k,z as B,A as T,B as f,I as p,M as A,N as R,J as V,K as P,L as w,m as H,U as E}from"./vue.esm-bundler-DC82FEWN.js";import{F as v}from"./FSTextField-BHg2KNCG.js";import{F as K}from"./FSTagGroup-aAS4KfbR.js";import{F as y}from"./FSButton-Dt6DpUVX.js";import{_ as b}from"./FSCol-CkM6DP-d.js";import{C as n,u as N}from"./useColors-CXl0hRe0.js";import{u as O}from"./useRules-DS9e5-1Q.js";import{u as D}from"./useSlots-V2mVelz6.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q=C({name:"FSTagField",components:{FSTextField:v,FSTagGroup:K,FSButton:y,FSCol:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:n.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:m,getMessages:g}=O(),{getColors:s}=N(),{slots:d}=D();delete d["append-inner"];const i=s(n.Error),t=s(n.Light),u=s(n.Dark),a=h(""),F=c(()=>e.editable?{"--fs-tag-field-color":u.base,"--fs-tag-field-error-color":i.base}:{"--fs-tag-field-color":t.dark}),$=c(()=>g(e.modelValue,e.rules));return{innerValue:a,validateOn:m,ColorEnum:n,messages:$,slots:d,style:F,onRemove:o=>{if(!e.editable)return;const l=e.modelValue??[];!l.length||!l.includes(o)||r("update:modelValue",l.filter(S=>S!==o))},onAdd:o=>{if(o.stopImmediatePropagation(),o.preventDefault(),!e.editable)return;const l=e.modelValue??[];!a.value.length||l.includes(a.value)||(r("update:modelValue",l.concat(a.value)),a.value="")}}}});function I(e,r,m,g,s,d){const i=k("FSTagGroup");return B(),T(b,null,{default:f(()=>[p(v,H({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,onKeydown:E(e.onAdd,["enter"]),modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.innerValue=t)},e.$attrs),A({"append-inner":f(()=>[p(y,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"]),V(e.$slots,"append-inner")]),_:2},[R(e.slots,(t,u)=>({name:u,fn:f(a=>[V(e.$slots,u,P(w(a)))])}))]),1040,["label","description","hideHeader","required","editable","rules","messages","validateOn","validationValue","onKeydown","modelValue"]),p(i,{tagVariant:e.$props.tagVariant,editable:e.$props.editable,tags:e.$props.modelValue,color:e.$props.tagColor,onRemove:e.onRemove},null,8,["tagVariant","editable","tags","color","onRemove"])]),_:3})}const _=G(q,[["render",I]]);q.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTagField.vue"]};export{_ as F};
