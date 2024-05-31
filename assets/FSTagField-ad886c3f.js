import{f as S,j as h,g as c,D as k,E as B,F as R,G as i,M as f,U as T,V as A,R as V,N as P,O as w,A as E,X as H}from"./vue.esm-bundler-838daa40.js";import{F as v}from"./FSTextField-5838a9fc.js";import{F as O}from"./FSTagGroup-491855a8.js";import{F as y}from"./FSButton-b3e7898e.js";import{_ as b}from"./FSCol-44fe82a9.js";import{C as t,u as D}from"./useColors-8c9c4d1e.js";import{u as G}from"./useRules-cda8e231.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const q=S({name:"FSTagField",components:{FSTextField:v,FSTagGroup:O,FSButton:y,FSCol:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},tagVariant:{type:String,required:!1,default:"full"},tagColor:{type:String,required:!1,default:t.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:p,blurred:m,getMessages:g}=G(),{getColors:s}=D(),d=s(t.Error),o=s(t.Light),u=s(t.Dark),l=h(""),F=c(()=>e.editable?{"--fs-tag-field-color":u.base,"--fs-tag-field-error-color":d.base}:{"--fs-tag-field-color":o.dark}),$=c(()=>g(e.modelValue,e.rules));return{innerValue:l,validateOn:p,ColorEnum:t,messages:$,blurred:m,style:F,onRemove:n=>{if(!e.editable)return;const r=e.modelValue??[];!r.length||!r.includes(n)||a("update:modelValue",r.filter(C=>C!==n))},onAdd:n=>{if(n.stopImmediatePropagation(),n.preventDefault(),!e.editable)return;const r=e.modelValue??[];!l.value.length||r.includes(l.value)||(a("update:modelValue",r.concat(l.value)),l.value="")}}}});function K(e,a,p,m,g,s){const d=k("FSTagGroup");return B(),R(b,null,{default:i(()=>[f(v,E({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,onKeydown:H(e.onAdd,["enter"]),onBlur:a[0]||(a[0]=o=>e.blurred=!0),modelValue:e.innerValue,"onUpdate:modelValue":a[1]||(a[1]=o=>e.innerValue=o)},e.$attrs),T({"append-inner":i(()=>[V(e.$slots,"append-inner",{},()=>[f(y,{variant:"icon",icon:"mdi-tag-outline",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onAdd},null,8,["editable","color","onClick"])])]),_:2},[A(e.$slots,(o,u)=>({name:u,fn:i(l=>[V(e.$slots,u,P(w(l)))])}))]),1040,["label","description","hideHeader","required","editable","rules","messages","validateOn","validationValue","onKeydown","modelValue"]),f(d,{tagVariant:e.$props.tagVariant,editable:e.$props.editable,tags:e.$props.modelValue,color:e.$props.tagColor,onRemove:e.onRemove},null,8,["tagVariant","editable","tags","color","onRemove"])]),_:3})}const Y=N(q,[["render",K]]);q.__docgenInfo={displayName:"FSTagField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"tagColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTagField.vue"]};export{Y as F};
