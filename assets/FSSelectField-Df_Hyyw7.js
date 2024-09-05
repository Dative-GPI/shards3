import{d as Z,b as _,c as y,y as w,z as n,A as s,B as l,D as m,L as o,M as L,N as v,I as i,J as g,K as k,m as u,C as E,E as c,G as S,F as I}from"./vue.esm-bundler-Vj2X7okO.js";import{F as x}from"./FSDialogMenu-BLjBa2f5.js";import{F as M}from"./FSSlideGroup-DJuMPLhX.js";import{F as ee}from"./FSToggleSet-_rtSdk97.js";import{F as le}from"./FSBaseField-Na9zArMU.js";import{F as j}from"./FSTextField-BxQZ_6yr.js";import{F as N}from"./FSCheckbox-CEveiKls.js";import{F as z}from"./FSFadeOut-k2izDgAG.js";import{F as C}from"./FSButton-DypSO1L1.js";import{F as ae}from"./VImg-BXfgvzNq.js";import{_ as G}from"./FSRadio-DUmD3b7i.js";import{F as re}from"./FSCard-CD3PuQHv.js";import{_ as $}from"./FSSpan-etgUZXmX.js";import{_ as A}from"./FSCol-Bk577joi.js";import{_ as f}from"./FSRow-BuYwVvwM.js";import{u as oe}from"./useRules-DpnTqc7T.js";import{u as te}from"./css-CbCR1nbl.js";import{u as ne,C as T}from"./useColors-ClJ5KOuK.js";import{u as se}from"./useSlots-DXmhvOIb.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ue}from"./VList-C3UDUNRO.js";import{V as de}from"./VSelect-D4M3PHT5.js";const W=Z({name:"FSSelectField",components:{FSDialogMenu:x,FSSlideGroup:M,FSBaseField:le,FSTextField:j,FSToggleSet:ee,FSCheckbox:N,FSFadeOut:z,FSButton:C,FSLoader:ae,FSRadio:G,FSCard:re,FSSpan:$,FSCol:A,FSRow:f},props:{label:{type:String,required:!1,default:null},placeholder:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Number],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:d}){const{validateOn:R,getMessages:U}=oe(),{isExtraSmall:P}=te(),{getColors:q}=ne(),{slots:V}=se();delete V.label,delete V.description;const B=q(T.Background),D=q(T.Error),F=q(T.Light),O=q(T.Dark),a=_(!1),t=y(()=>e.editable?{"--fs-select-field-cursor":"pointer","--fs-select-field-background-color":B.base,"--fs-select-field-border-color":F.dark,"--fs-select-field-color":O.base,"--fs-select-field-active-border-color":O.dark,"--fs-select-field-error-border-color":D.base}:{"--fs-select-field-cursor":"default","--fs-select-field-border-color":F.base,"--fs-select-field-color":F.dark,"--fs-select-field-active-border-color":F.base}),p=y(()=>Object.keys(V).filter(r=>r.startsWith("select-")).reduce((r,b)=>(r[b.substring(7)]=V[b],r),{})),h=y(()=>Object.keys(V).filter(r=>r.startsWith("toggle-set-")).reduce((r,b)=>(r[b.substring(11)]=V[b],r),{})),J=y(()=>({style:t.value})),K=y(()=>e.messages??U(e.modelValue,e.rules)),H=y(()=>e.multiple?null:Array.isArray(e.modelValue)&&e.modelValue.length>0?e.items.find(r=>r[e.itemValue]===e.modelValue[0])??null:e.modelValue?e.items.find(r=>r[e.itemValue]===e.modelValue)??null:null),Q=y(()=>{if(Array.isArray(e.modelValue)&&e.modelValue.length>0)return e.items.filter(r=>e.modelValue.includes(r[e.itemValue]));if(e.modelValue){const r=e.items.find(b=>b[e.itemValue]===e.modelValue);if(r)return[r]}return[]}),X=y(()=>"calc(100vh - 40px - 16px)"),Y=y(()=>e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0?e.placeholder:H.value?H.value[e.itemTitle]:null);return{toggleSetSlots:h,selectedItems:Q,isExtraSmall:P,selectedItem:H,mobileValue:Y,selectSlots:p,validateOn:R,ColorEnum:T,listStyle:J,maxHeight:X,messages:K,dialog:a,style:t,openMobileOverlay:()=>{e.editable&&(a.value=!0)},onCheckboxChange:r=>{Array.isArray(e.modelValue)?e.modelValue.includes(r)?d("update:modelValue",e.modelValue.filter(b=>b!==r)):d("update:modelValue",[...e.modelValue,r]):e.modelValue!=null?e.modelValue===r?d("update:modelValue",[]):d("update:modelValue",[e.modelValue,r]):d("update:modelValue",[r])},onSingleChange:r=>{d("update:modelValue",r)},onRadioChange:r=>{d("update:modelValue",r),a.value=!1},onClear:()=>{d("update:modelValue",null)}}}});function pe(e,d,R,U,P,q){const V=w("FSLoader"),B=w("FSCard"),D=w("FSDialogMenu"),F=w("FSToggleSet"),O=w("FSBaseField");return e.$props.loading?(n(),s(A,{key:0},{default:l(()=>[e.$props.hideHeader?m("",!0):(n(),s(V,{key:0,variant:"text-overline"})),e.$props.loading?(n(),s(V,{key:1,width:"100%",height:["40px","36px"]})):m("",!0)]),_:1})):e.isExtraSmall?(n(),s(A,{key:1},{default:l(()=>[o(j,u({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,onClick:e.openMobileOverlay},e.$attrs),L({"prepend-inner":l(()=>[e.selectedItem?i(e.$slots,"item-prepend",g(u({key:0},{item:e.selectedItem}))):m("",!0)]),clear:l(()=>[o(f,{wrap:!1},{default:l(()=>[e.selectedItem?i(e.$slots,"item-append",g(u({key:0},{item:e.selectedItem}))):m("",!0),i(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(n(),s(C,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):m("",!0)])]),_:3})]),"append-inner":l(()=>[o(C,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])]),_:2},[v(e.$slots,(a,t)=>({name:t,fn:l(p=>[i(e.$slots,t,g(k(p)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","modelValue","onClick"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(n(),s(M,{key:0},{default:l(()=>[(n(!0),E(I,null,v(e.$props.items.filter(a=>e.$props.modelValue.includes(a[e.$props.itemValue])),(a,t)=>(n(),s(B,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:t},{default:l(()=>[o(f,{align:"center-left",padding:"0 8px",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",u({ref_for:!0},{item:a})),o($,null,{default:l(()=>[c(S(a[e.$props.itemTitle]),1)]),_:2},1024),i(e.$slots,"item-append",u({ref_for:!0},{item:a})),o(C,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(a[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):m("",!0),o(D,{modelValue:e.dialog,"onUpdate:modelValue":d[0]||(d[0]=a=>e.dialog=a)},{body:l(()=>[o(z,{maxHeight:e.maxHeight},{default:l(()=>[o(A,{gap:"12px"},{default:l(()=>[(n(!0),E(I,null,v(e.$props.items,(a,t)=>(n(),s(f,{key:t},{default:l(()=>{var p;return[e.$props.multiple?(n(),s(N,{key:0,label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},{label:l(({font:h})=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",u({ref_for:!0},{item:a})),o($,{font:h},{default:l(()=>[c(S(a[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])):(n(),s(G,{key:1,selected:e.$props.modelValue===a[e.$props.itemValue],label:a[e.$props.itemTitle],editable:e.$props.editable,item:a,modelValue:a[e.$props.itemValue],"onUpdate:modelValue":()=>e.onRadioChange(a[e.$props.itemValue])},{label:l(({font:h})=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",u({ref_for:!0},{item:a})),o($,{font:h},{default:l(()=>[c(S(a[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["selected","label","editable","item","modelValue","onUpdate:modelValue"])),o(f,{align:"center-right"},{default:l(()=>[i(e.$slots,"item-append",u({ref_for:!0},{item:a}))]),_:2},1024)]}),_:2},1024))),128))]),_:3})]),_:3},8,["maxHeight"]),!e.$props.items||e.$props.items.length===0?(n(),s(f,{key:0,padding:"4px 3px"},{default:l(()=>[o($,null,{default:l(()=>[c(S(e.$tr("ui.select-field.no-data","No data")),1)]),_:1})]),_:1})):m("",!0)]),_:3},8,["modelValue"])]),_:3})):(n(),s(O,{key:2,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:l(()=>[e.$props.toggleSet?(n(),s(F,u({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":d[1]||(d[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),L({_:2},[v(e.toggleSetSlots,(a,t)=>({name:t,fn:l(p=>[i(e.$slots,`toggle-set-${t}`,g(k(p)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(n(),s(A,{key:1},{default:l(()=>[o(de,u({class:"fs-select-field",variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onSingleChange},e.$attrs),L({item:l(({props:a,item:t})=>[o(ue,g(k({...a,title:""})),{default:l(()=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>{var p;return[e.$props.multiple?(n(),s(N,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(t.raw[e.$props.itemValue]),onClick:a.onClick},{label:l(({font:h})=>[i(e.$slots,"item-prepend",g(k({item:t.raw}))),o($,{font:h},{default:l(()=>[c(S(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["modelValue","onClick"])):(n(),E(I,{key:1},[i(e.$slots,"item-prepend",g(k({item:t.raw}))),o($,{font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:l(()=>[c(S(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])],64)),o(f,{align:"center-right"},{default:l(()=>[i(e.$slots,"item-append",g(k({item:t.raw})))]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"prepend-inner":l(()=>[e.selectedItem?i(e.$slots,"item-prepend",g(u({key:0},{item:e.selectedItem}))):m("",!0)]),clear:l(()=>[o(f,{wrap:!1},{default:l(()=>[e.selectedItem?i(e.$slots,"item-append",g(u({key:0},{item:e.selectedItem}))):m("",!0),i(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(n(),s(C,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):m("",!0)])]),_:3})]),"append-inner":l(()=>[i(e.$slots,"append-inner",{},()=>[o(C,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":l(()=>[!e.$props.items||e.$props.items.length===0?(n(),s(f,{key:0,padding:"15px"},{default:l(()=>[o($,null,{default:l(()=>[c(S(e.$tr("ui.select-field.no-data","No data")),1)]),_:1})]),_:1})):m("",!0)]),_:2},[v(e.selectSlots,(a,t)=>({name:t,fn:l(p=>[i(e.$slots,`select-${t}`,g(k(p)))])})),e.$props.multiple?{name:"selection",fn:l(({index:a})=>[a===e.$props.modelValue.length-1?(n(),s($,{key:0},{default:l(()=>[c(S(e.$props.placeholder),1)]),_:1})):m("",!0)]),key:"0"}:void 0]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","style","modelValue","onUpdate:modelValue"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(n(),s(M,{key:0},{default:l(()=>[(n(!0),E(I,null,v(e.$props.items.filter(a=>e.$props.modelValue.includes(a[e.$props.itemValue])),(a,t)=>(n(),s(B,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:t},{default:l(()=>[o(f,{align:"center-left",padding:"0 8px"},{default:l(()=>[i(e.$slots,"item-prepend",u({ref_for:!0},{item:a})),o($,null,{default:l(()=>[c(S(a[e.$props.itemTitle]),1)]),_:2},1024),i(e.$slots,"item-append",u({ref_for:!0},{item:a})),o(C,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(a[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):m("",!0)]),_:3}))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))}const Re=ie(W,[["render",pe]]);W.__docgenInfo={displayName:"FSSelectField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"item-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"item-append",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"clear"},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`select-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSelectField.vue"]};export{Re as F};
