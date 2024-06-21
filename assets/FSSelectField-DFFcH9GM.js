import{d as K,b as J,c as V,y as w,z as u,A as m,B as o,C as D,K as s,O as A,P as k,L as d,M as p,N as f,m as E,F as M,E as q,G as h,D as Q}from"./vue.esm-bundler-DUki7rNA.js";import{F as W}from"./FSDialogMenu-5l5lej0t.js";import{F as H}from"./FSRadioGroup-VeAtntDL.js";import{F as X}from"./VField-BJJocrwv.js";import{_ as N}from"./FSTextField-BZoPMSW0.js";import{F as C}from"./FSCheckbox-CisQZrrP.js";import{F as R}from"./FSFadeOut-BOJZDV1R.js";import{F as g}from"./FSButton-GE9LRUiN.js";import{_ as y}from"./FSSpan-DUTdSgpN.js";import{_ as T}from"./FSCol-BBaW1DrL.js";import{_ as v}from"./FSRow-CHgEOZQb.js";import{u as Y}from"./useRules-ChvLepw4.js";import{u as Z}from"./css-BPLLlL3Y.js";import{u as _,C as c}from"./useColors-HWn2iBmk.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ee}from"./VList-DhBFmKbf.js";import{V as le}from"./VSelect-Doh8ERno.js";const I=K({name:"FSSelectField",components:{FSDialogMenu:W,FSRadioGroup:H,FSBaseField:X,FSTextField:N,FSCheckbox:C,FSFadeOut:R,FSButton:g,FSSpan:y,FSCol:T,FSRow:v},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Number],required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const{validateOn:B,getMessages:O}=Y(),{isExtraSmall:P}=Z(),{getColors:$}=_(),S=$(c.Background),F=$(c.Error),l=$(c.Light),r=$(c.Dark),t=J(!1),b=V(()=>e.editable?{"--fs-select-field-cursor":"pointer","--fs-select-field-background-color":S.base,"--fs-select-field-border-color":l.dark,"--fs-select-field-color":r.base,"--fs-select-field-active-border-color":r.dark,"--fs-select-field-error-border-color":F.base}:{"--fs-select-field-cursor":"default","--fs-select-field-border-color":l.base,"--fs-select-field-color":l.dark,"--fs-select-field-active-border-color":l.base}),U=V(()=>({style:b.value})),L=V(()=>e.messages??O(e.modelValue,e.rules)),j=V(()=>"calc(100vh - 40px - 16px)"),z=V(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(a=>{const n=e.items.find(G=>G[e.itemValue]===a);if(n)return n[e.itemTitle]}).filter(a=>!!a).join(", ");if(e.modelValue){const a=e.items.find(n=>n[e.itemValue]===e.modelValue);if(a)return a[e.itemTitle]}return null});return{mobileSelectionProps:V(()=>{const a=e.items.find(n=>n[e.itemValue]===e.modelValue);return a?{item:{title:"",value:a[e.itemValue],props:{title:a[e.itemTitle],value:a[e.itemValue]},raw:{...a}},font:"text-body"}:null}),isExtraSmall:P,mobileValue:z,validateOn:B,ColorEnum:c,listStyle:U,messages:L,dialog:t,height:j,style:b,openMobileOverlay:()=>{e.editable&&(t.value=!0)},onCheckboxChange:a=>{Array.isArray(e.modelValue)?e.modelValue.includes(a)?i("update:modelValue",e.modelValue.filter(n=>n!==a)):i("update:modelValue",[...e.modelValue,a]):e.modelValue!=null?e.modelValue===a?i("update:modelValue",[]):i("update:modelValue",[e.modelValue,a]):i("update:modelValue",[a])},mobileItemProps:(a,n)=>({item:{title:"",value:a[e.itemValue],props:{title:a[e.itemTitle],value:a[e.itemValue]},raw:{...a}},font:n}),onRadioChange:a=>{i("update:modelValue",a),t.value=!1}}}});function ae(e,i,B,O,P,$){const S=w("FSDialogMenu"),F=w("FSBaseField");return u(),m(T,null,{default:o(()=>[e.isExtraSmall?(u(),D(M,{key:0},[s(N,E({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,"onUpdate:modelValue":i[0]||(i[0]=l=>e.$emit("update:modelValue",l)),onClick:e.openMobileOverlay},e.$attrs),A({"append-inner":o(()=>[d(e.$slots,"append-inner",{},()=>[s(g,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[k(e.$slots,(l,r)=>({name:r,fn:o(t=>[d(e.$slots,r,p(f(t)))])})),e.mobileSelectionProps?{name:"prepend-inner",fn:o(()=>[d(e.$slots,"selection-mobile",p(f(e.mobileSelectionProps)))]),key:"0"}:void 0]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","modelValue","onClick"]),s(S,{modelValue:e.dialog,"onUpdate:modelValue":i[1]||(i[1]=l=>e.dialog=l)},{body:o(()=>[s(R,{height:e.height},{default:o(()=>[e.$props.multiple?(u(),m(T,{key:0,gap:"12px"},{default:o(()=>[(u(!0),D(M,null,k(e.$props.items,(l,r)=>(u(),m(v,{key:r},{default:o(()=>{var t;return[s(C,{label:l[e.$props.itemTitle],editable:e.$props.editable,modelValue:(t=e.$props.modelValue)==null?void 0:t.includes(l[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(l[e.$props.itemValue])},{label:o(({font:b})=>[d(e.$slots,"item-label",p(f(e.mobileItemProps(l,b))))]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128))]),_:3})):(u(),m(H,{key:1,gap:"12px",values:e.$props.items.map(l=>({value:l[e.$props.itemValue],label:l[e.$props.itemTitle],item:l})),editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onRadioChange},{label:o(({item:l,font:r})=>[d(e.$slots,"item-label",p(f(e.mobileItemProps(l,r))))]),_:3},8,["values","editable","modelValue","onUpdate:modelValue"]))]),_:3},8,["height"])]),_:3},8,["modelValue"])],64)):(u(),m(F,{key:1,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:o(()=>[s(le,E({class:"fs-select-field",variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[3]||(i[3]=l=>e.$emit("update:modelValue",l))},e.$attrs),A({item:o(({props:l,item:r})=>[s(ee,p(f({...l,title:""})),{default:o(()=>[s(v,{align:"center-left"},{default:o(()=>{var t;return[e.$props.multiple?(u(),m(C,{key:0,modelValue:(t=e.$props.modelValue)==null?void 0:t.includes(r.raw[e.$props.itemValue]),onClick:l.onClick},{label:o(({font:b})=>[d(e.$slots,"item-label",p(f({item:r,font:b})),()=>[s(y,{font:b},{default:o(()=>[q(h(r.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1032,["modelValue","onClick"])):(u(),m(y,{key:1},{default:o(()=>[d(e.$slots,"item-label",p(f({item:r})),()=>[s(y,null,{default:o(()=>[q(h(r.raw[e.$props.itemTitle]),1)]),_:2},1024)])]),_:2},1024))]}),_:2},1024)]),_:2},1040)]),clear:o(()=>[d(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(u(),m(g,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:i[2]||(i[2]=l=>e.$emit("update:modelValue",null))},null,8,["color"])):Q("",!0)])]),"append-inner":o(()=>[d(e.$slots,"append-inner",{},()=>[s(g,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":o(()=>[s(v,{padding:"17px"},{default:o(()=>[s(y,null,{default:o(()=>[q(h(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1})]),_:2},[k(e.$slots,(l,r)=>({name:r,fn:o(t=>[d(e.$slots,r,p(f(t)))])}))]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","style","modelValue"])]),_:3},8,["description","hideHeader","required","editable","label","messages"]))]),_:3})}const he=x(I,[["render",ae]]);I.__docgenInfo={displayName:"FSSelectField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"selection-mobile",scoped:!0,bindings:[]},{name:"append-inner"},{name:"item-label",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSelectField.vue"]};export{he as F};
