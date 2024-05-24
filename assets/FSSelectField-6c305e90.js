import{j as z,d as G,e as V,I as T,J as t,K as i,L as r,M as A,A as n,Y as D,Z as $,W as f,Q as c,R as g,B as M,F as R,N as w,O as J,P as K}from"./vue.esm-bundler-01006032.js";import{F as Q}from"./FSDialogMenu-aa70b58d.js";import{F as E}from"./FSRadioGroup-bdbad880.js";import{F as W}from"./VField-f1a9daf9.js";import{F as v}from"./FSCheckbox-40e0c55f.js";import{F as H}from"./FSFadeOut-f03472dd.js";import{F as y}from"./FSButton-be94d44f.js";import{_ as j}from"./FSSpan-6e79caf3.js";import{_ as F}from"./FSCol-c97fad61.js";import{_ as S}from"./FSRow-83e75060.js";import{u as Y}from"./useRules-54978858.js";import{u as Z}from"./css-279a0029.js";import{u as X,C as b}from"./useColors-13ed6ee6.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{F as x}from"./FSTextField-4ac67195.js";import{V as ee,a as le}from"./VSelect-450b500f.js";const N=z({name:"FSSelectField",components:{FSDialogMenu:Q,FSRadioGroup:E,FSBaseField:W,FSCheckbox:v,FSFadeOut:H,FSButton:y,FSSpan:j,FSCol:F,FSRow:S},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Number],required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},returnObject:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{validateOn:q,blurred:k,getMessages:C}=Y(),{isExtraSmall:h}=Z(),{getColors:d}=X(),p=G(!1),l=d(b.Background),u=d(b.Error),o=d(b.Light),B=d(b.Dark),O=V(()=>e.editable?{"--fs-select-field-cursor":"pointer","--fs-select-field-background-color":l.base,"--fs-select-field-border-color":o.dark,"--fs-select-field-color":B.base,"--fs-select-field-active-border-color":B.dark,"--fs-select-field-error-border-color":u.base}:{"--fs-select-field-cursor":"default","--fs-select-field-border-color":o.base,"--fs-select-field-color":o.dark,"--fs-select-field-active-border-color":o.base}),U=V(()=>({style:O.value})),P=V(()=>e.messages??C(e.modelValue,e.rules)),I=V(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(s=>{const m=e.items.find(L=>L[e.itemValue]===s);if(m)return m[e.itemTitle]}).filter(s=>!!s).join(", ");if(e.modelValue){const s=e.items.find(m=>m[e.itemValue]===e.modelValue);if(s)return s[e.itemTitle]}return null});return{isExtraSmall:h,mobileValue:I,validateOn:q,ColorEnum:b,listStyle:U,messages:P,blurred:k,dialog:p,style:O,openMobileOverlay:()=>{e.editable&&(p.value=!0)},onCheckboxChange:s=>{Array.isArray(e.modelValue)?e.modelValue.includes(s)?a("update:modelValue",e.modelValue.filter(m=>m!==s)):a("update:modelValue",[...e.modelValue,s]):e.modelValue===s?a("update:modelValue",[]):a("update:modelValue",[e.modelValue,s])},onRadioChange:s=>{a("update:modelValue",s),p.value=!1}}}});function ae(e,a,q,k,C,h){const d=T("FSDialogMenu"),p=T("FSBaseField");return t(),i(F,null,{default:r(()=>[e.isExtraSmall?(t(),A(R,{key:0},[n(x,M({label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,clearable:e.$props.clearable,editable:e.$props.editable,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.mobileValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l)),onClick:e.openMobileOverlay,onBlur:a[1]||(a[1]=l=>e.blurred=!0)},e.$attrs),D({"append-inner":r(()=>[f(e.$slots,"append-inner",{},()=>[n(y,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[$(e.$slots,(l,u)=>({name:u,fn:r(o=>[f(e.$slots,u,c(g(o)))])}))]),1040,["label","description","hideHeader","required","clearable","editable","rules","messages","validateOn","validationValue","modelValue","onClick"]),n(d,{modelValue:e.dialog,"onUpdate:modelValue":a[2]||(a[2]=l=>e.dialog=l)},{body:r(()=>[n(H,{height:"calc(90vh - 164px)"},{default:r(()=>[e.$props.multiple?(t(),i(F,{key:0,gap:"12px"},{default:r(()=>[(t(!0),A(R,null,$(e.$props.items,(l,u)=>(t(),i(S,{key:u},{default:r(()=>{var o;return[n(v,{label:l[e.$props.itemTitle],editable:e.$props.editable,modelValue:(o=e.$props.modelValue)==null?void 0:o.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},null,8,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128))]),_:1})):(t(),i(E,{key:1,gap:"12px",values:e.$props.items.map(l=>({value:l[e.$props.itemValue],label:l[e.$props.itemTitle]})),modelValue:e.$props.modelValue,editable:e.$props.editable,"onUpdate:modelValue":e.onRadioChange},null,8,["values","modelValue","editable","onUpdate:modelValue"]))]),_:1})]),_:1},8,["modelValue"])],64)):(t(),i(p,{key:1,label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:r(()=>[n(le,M({class:"fs-select-field",variant:"outlined",menuIcon:null,style:e.style,listProps:e.listStyle,hideDetails:!0,items:e.$props.items,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,returnObject:e.$props.returnObject,rules:e.$props.rules,validateOn:e.validateOn,multiple:e.$props.multiple,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[4]||(a[4]=l=>e.$emit("update:modelValue",l)),onBlur:a[5]||(a[5]=l=>e.blurred=!0)},e.$attrs),D({item:r(({props:l,item:u})=>[n(ee,c(g({...l,title:""})),{default:r(()=>[n(S,{align:"center-left"},{default:r(()=>{var o;return[e.$props.multiple?(t(),i(v,{key:0,modelValue:(o=e.$props.modelValue)==null?void 0:o.includes(u.raw.id),onClick:l.onClick},null,8,["modelValue","onClick"])):w("",!0),n(j,null,{default:r(()=>[J(K(u.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),clear:r(()=>[f(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(t(),i(y,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:a[3]||(a[3]=l=>e.$emit("update:modelValue",null))},null,8,["color"])):w("",!0)])]),"append-inner":r(()=>[f(e.$slots,"append-inner",{},()=>[n(y,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),_:2},[$(e.$slots,(l,u)=>({name:u,fn:r(o=>[f(e.$slots,u,c(g(o)))])}))]),1040,["style","listProps","items","itemTitle","itemValue","readonly","clearable","returnObject","rules","validateOn","multiple","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"]))]),_:3})}const Se=_(N,[["render",ae]]);N.__docgenInfo={displayName:"FSSelectField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"returnObject",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSelectField.vue"]};export{Se as F};