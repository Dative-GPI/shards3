import{d as N,b as R,c as M,w as E,y as d,z as o,A as n,C as a,K as j,N as l,P as S,H as i,I as f,F,m as q}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as A,a as H,u as P}from"./FSButtonFileMini-DpDGgrr6.js";import{F as T}from"./FSClickable-D7sul-uP.js";import{F as z}from"./FSImageUI-CifHzJ5L.js";import{F as D}from"./FSCard-Bfo4Z0Zf.js";import{F as G}from"./FSText-CAGI2dEo.js";import{F as v}from"./FSCol-D8gLxM2E.js";import{_ as r}from"./FSRow-CSQtiyAx.js";import{u as J}from"./useBreakpoints-BMg9gIvD.js";import{u as K,C as w}from"./useColors-DnoeDx-P.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSIcon-DfjSexyz.js";import{_ as B}from"./FSSpan-Bh1X02mE.js";const I=N({name:"FSEditImageUI",components:{FSButtonRemoveMini:A,FSButtonFileMini:H,FSClickable:T,FSImageUI:z,FSCard:D,FSText:G,FSCol:v,FSRow:r},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update","update:modelValue","update:source"],setup(e,{emit:t}){const{isExtraSmall:V}=J(),{getColors:m}=K(),{readFile:C}=P(),s=R({fileName:"",fileContent:null}),g=R(null),c=m(w.Error),u=m(w.Light),p=m(w.Dark),h=M(()=>({"--fs-edit-image-overline-text-color":u.dark,"--fs-edit-image-color":p.base,"--fs-edit-image-error-color":c.base})),b=async k=>{const $=await C(k);s.value.fileName=k.name,s.value.fileContent=$;const y=$.substring($.indexOf(",")+1);e.source?(t("update:modelValue",y),t("update:source",null),t("update",{source:null,modelValue:y})):(t("update:modelValue",y),t("update",{source:e.source,modelValue:y}))},U=()=>{s.value.fileName="",s.value.fileContent=null,e.modelValue?(t("update:modelValue",null),t("update",{source:e.source,modelValue:null})):(t("update:source",null),t("update",{source:null,modelValue:e.modelValue}))};return E(()=>e.modelValue,()=>{e.modelValue||(s.value.fileName="",s.value.fileContent=null)}),{invisibleButtonRef:g,fileSelected:s,isExtraSmall:V,style:h,onUpload:b,onRemove:U}}});function Q(e,t,V,m,C,s){const g=d("FSImageUI"),c=d("FSCard"),u=d("FSText"),p=d("FSButtonFileMini"),h=d("FSButtonRemoveMini"),b=d("FSClickable");return o(),n(v,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?F("",!0):j(e.$slots,"label",{key:0},()=>[l(r,{wrap:!1},{default:a(()=>[e.$props.label?(o(),n(B,{key:0,class:"fs-edit-image-label",font:"text-overline",style:S(e.style)},{default:a(()=>[i(f(e.$props.label),1)]),_:1},8,["style"])):F("",!0),e.$props.label&&e.$props.required?(o(),n(B,{key:1,class:"fs-edit-image-label",style:S([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[i(" * ")]),_:1},8,["style"])):F("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(o(),n(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(r,{align:"center-left",wrap:!1},{default:a(()=>[l(r,{class:"fs-edit-image-standard-row",gap:"24px",wrap:!1},{default:a(()=>[e.$props.source||e.$props.modelValue?(o(),n(g,q({key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"])):(o(),n(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(v,{class:"fs-edit-image-standard-label-wrapper",align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(o(),n(u,{key:0,font:"text-body",lineClamp:2},{default:a(()=>[i(f(e.fileSelected.fileName),1)]),_:1})):F("",!0),l(v,{gap:"0px"},{default:a(()=>[l(u,{class:"fs-edit-image-overline",font:"text-overline",style:S(e.style)},{default:a(()=>[i(f(e.$tr("edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(u,{class:"fs-edit-image-overline",font:"text-overline",style:S(e.style)},{default:a(()=>[i(f(e.$tr("edit-image.max-size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(r,{align:"center-right",width:e.isExtraSmall?"40px":"hug"},{default:a(()=>[l(p,{accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1},8,["width"])]),_:1})]),_:1})):e.$props.source||e.$props.modelValue?(o(),n(r,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(g,q({aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"]),l(r,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(p,{accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(o(),n(b,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:t[0]||(t[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(r,{align:"center-center",wrap:!1},{default:a(()=>[l(O,null,{default:a(()=>[i(" mdi-plus-box-outline ")]),_:1}),l(u,{font:"text-body",lineClamp:2},{default:a(()=>[i(f(e.$tr("edit-image.add-image","Add an image.")),1)]),_:1}),l(p,{class:"fs-edit-image-hidden-button",ref:"invisibleButtonRef",accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const re=L(I,[["render",Q]]);I.__docgenInfo={displayName:"FSEditImageUI",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:source"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImageUI.vue"]};export{re as F};
