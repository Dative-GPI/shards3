import{f as N,g as D,D as d,E as l,F as o,G as r,H as g,I as f,J as I,K as u,L as p}from"./vue.esm-bundler-a0893183.js";import{F as h}from"./FSDateTimeField-5e29e115.js";import{F as B}from"./FSNumberField-2b490b10.js";import{F as k}from"./FSSelectField-6fb3d8a3.js";import{F as q}from"./FSIconField-c7dd4041.js";import{F}from"./FSSwitch-b3c56698.js";import{_ as m}from"./FSIcon-9d61ed62.js";import{_ as V}from"./FSSpan-4daadeb4.js";import{F as C}from"./FSText-46c134d7.js";import{P as n}from"./customPropertyEnums-7823143c.js";import{u as v}from"./useAppTimeZone-d7f3e4a5.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSTextField-3d775cb5.js";const y=N({name:"FSMetaField",components:{FSDateTimeField:h,FSNumberField:B,FSSelectField:k,FSIconField:q,FSSwitch:F,FSIcon:m,FSSpan:V,FSText:C},props:{label:{type:String,required:!1,default:null},customProperty:{type:Object,required:!0},modelValue:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:s}){const{epochToLongTimeFormat:i}=v(),c=D(()=>Object.keys(e.customProperty.allowedValues).map(a=>{if(e.customProperty.allowedValues[a])return{id:a,label:e.customProperty.allowedValues[a],icon:null};switch(e.customProperty.dataType){case n.Boolean:return{id:a,label:a,icon:a==="true"?"mdi-check-circle-outline":"mdi-close-circle-outline"};case n.DateTime:return{id:a,label:i(parseInt(a)),icon:null};case n.Icon:return{id:a,label:a,icon:a};default:return{id:a,label:a,icon:null}}}));return{PropertyDataType:n,items:c,asBoolean:()=>e.modelValue?e.modelValue==="true":null,asNumber:()=>e.modelValue?isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue):null,onUpdate:a=>{switch(e.customProperty.dataType){case n.Boolean:case n.DateTime:case n.Number:if(a){s("update:modelValue",a.toString());break}s("update:modelValue",null);break;default:s("update:modelValue",a);break}}}}});function j(e,s,i,c,S,T){const b=d("FSText"),a=d("FSSelectField"),$=d("FSNumberField"),P=d("FSDateTimeField"),U=d("FSIconField");return e.$props.customProperty.useOnlyAllowedValues?(l(),o(a,{key:0,class:"fs-meta-field",editable:e.$props.editable,label:e.$props.label,items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},{selection:r(({item:t})=>[t.raw.icon?(l(),o(m,{key:0},{default:r(()=>[u(p(t.raw.icon),1)]),_:2},1024)):(l(),o(b,{key:1},{default:r(()=>[u(p(t.raw.label),1)]),_:2},1024))]),"selection-mobile":r(({item:t})=>[t.raw.icon?(l(),o(m,{key:0},{default:r(()=>[u(p(t.raw.icon),1)]),_:2},1024)):f("",!0)]),"item-label":r(({item:t,font:w})=>[t.raw.icon?(l(),o(m,{key:0},{default:r(()=>[u(p(t.raw.icon),1)]),_:2},1024)):(l(),o(V,{key:1,font:w},{default:r(()=>[u(p(t.raw.label),1)]),_:2},1032,["font"]))]),_:1},8,["editable","label","items","modelValue","onUpdate:modelValue"])):(l(),g(I,{key:1},[e.$props.customProperty.dataType===e.PropertyDataType.Number?(l(),o($,{key:0,editable:e.$props.editable,label:e.$props.label,modelValue:e.asNumber(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Boolean?(l(),o(F,{key:1,editable:e.$props.editable,label:e.$props.label,modelValue:e.asBoolean(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.String?(l(),o(O,{key:2,editable:e.$props.editable,label:e.$props.label,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.DateTime?(l(),o(P,{key:3,editable:e.$props.editable,label:e.$props.label,modelValue:e.asNumber(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Icon?(l(),o(U,{key:4,editable:e.$props.editable,label:e.$props.label,modelValue:e.modelValue,"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):f("",!0)],64))}const Y=M(y,[["render",j]]);y.__docgenInfo={displayName:"FSMetaField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaField.vue"]};export{Y as F};