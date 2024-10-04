import{d as U,c as u,y as n,z as l,A as t,B as D,C as s,D as N,E as h,F as I,G as g,H as F,I as V}from"./vue.esm-bundler-CWdIlc2r.js";import w from"./FSDateTimeField-Dy47jF-d.js";import B from"./FSNumberField-DTdqnH80.js";import{F as k}from"./FSSelectField-DzKPXup4.js";import q from"./FSIconField-CxT0N_Jm.js";import S from"./FSSwitch-BIxibxTA.js";import{F as T}from"./FSIcon-vAlkpflo.js";import{_ as P}from"./FSSpan-DpOLTsx1.js";import{P as o}from"./customProperties-DqkON8hk.js";import{u as C}from"./useDateFormat-zHupOjLO.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSTextField-D5y-h9FL.js";const $=U({name:"FSMetaField",components:{FSDateTimeField:w,FSNumberField:B,FSSelectField:k,FSIconField:q,FSSwitch:S,FSIcon:T,FSSpan:P},props:{label:{type:String,required:!1,default:null},customProperty:{type:Object,required:!0},modelValue:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{epochToLongTimeFormat:p}=C(),m=u(()=>Object.keys(e.customProperty.allowedValues).map(a=>{if(e.customProperty.allowedValues[a])return{id:a,label:e.customProperty.allowedValues[a],icon:null};switch(e.customProperty.dataType){case o.Boolean:return{id:a,label:a,icon:a==="true"?"mdi-check-circle-outline":"mdi-close-circle-outline"};case o.DateTime:return{id:a,label:p(parseInt(a)),icon:null};case o.Icon:return{id:a,label:a,icon:a};default:return{id:a,label:a,icon:null}}})),i=u(()=>{switch(e.customProperty.dataType){case o.Icon:return"";default:return"label"}}),c=u(()=>{const a=["fs-meta-field"];switch(e.customProperty.dataType){case o.Icon:a.push("fs-meta-icon-field");break}return a});return{PropertyDataType:o,itemTitle:i,classes:c,items:m,asBoolean:()=>e.modelValue?e.modelValue==="true":null,asNumber:()=>e.modelValue?isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue):null,onUpdate:a=>{switch(e.customProperty.dataType){case o.Boolean:case o.DateTime:case o.Number:if(a){r("update:modelValue",a.toString());break}r("update:modelValue",null);break;default:r("update:modelValue",a);break}}}}});function O(e,r,p,m,i,c){const b=n("FSSelectField"),f=n("FSNumberField"),y=n("FSDateTimeField"),a=n("FSIconField");return e.$props.customProperty.useOnlyAllowedValues?(l(),t(b,{key:0,editable:e.$props.editable,itemTitle:e.itemTitle,label:e.$props.label,class:N(e.classes),items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},D({_:2},[e.$props.customProperty.dataType===e.PropertyDataType.Icon?{name:"item-prepend",fn:s(({item:d})=>[d.icon?(l(),t(T,{key:0},{default:s(()=>[F(V(d.icon),1)]),_:2},1024)):(l(),t(P,{key:1},{default:s(()=>[F(V(d.label),1)]),_:2},1024))]),key:"0"}:void 0]),1032,["editable","itemTitle","label","class","items","modelValue","onUpdate:modelValue"])):(l(),h(g,{key:1},[e.$props.customProperty.dataType===e.PropertyDataType.Number?(l(),t(f,{key:0,editable:e.$props.editable,label:e.$props.label,modelValue:e.asNumber(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Boolean?(l(),t(S,{key:1,editable:e.$props.editable,label:e.$props.label,modelValue:e.asBoolean(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.String?(l(),t(M,{key:2,editable:e.$props.editable,label:e.$props.label,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.DateTime?(l(),t(y,{key:3,editable:e.$props.editable,label:e.$props.label,modelValue:e.asNumber(),"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):e.$props.customProperty.dataType===e.PropertyDataType.Icon?(l(),t(a,{key:4,editable:e.$props.editable,label:e.$props.label,modelValue:e.modelValue,"onUpdate:modelValue":e.onUpdate},null,8,["editable","label","modelValue","onUpdate:modelValue"])):I("",!0)],64))}const X=v($,[["render",O]]);$.__docgenInfo={displayName:"FSMetaField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaField.vue"]};export{X as F};
