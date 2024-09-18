import{d as U,b as V,c as N,w as E,y as d,z as t,A as o,B as a,I as M,L as l,O as y,E as r,G as f,D as S,m as q}from"./vue.esm-bundler-BSyvBTC9.js";import{F as j,a as A,u as T}from"./FSButtonFileMini-B78h7bGK.js";import{F as z}from"./FSClickable-DytVXb9R.js";import{F as D}from"./FSImageUI-RgjYdf_W.js";import{F as G}from"./FSCard-BinAVVx_.js";import{F as H}from"./FSText-BN3VvfV9.js";import{F}from"./FSCol-BU2q2sTe.js";import{F as s}from"./FSRow-DzlUM3r6.js";import{u as P}from"./css-0IiqzUPc.js";import{u as L,C as $}from"./useColors-Ccf8xVyg.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as J}from"./FSIcon-D0oLoXA8.js";import{_ as R}from"./FSSpan-CCGpb4KF.js";const B=U({name:"FSEditImageUI",components:{FSButtonRemoveMini:j,FSButtonFileMini:A,FSClickable:z,FSImageUI:D,FSCard:G,FSText:H,FSCol:F,FSRow:s},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:source"],setup(e,{emit:i}){const{isExtraSmall:w}=P(),{getColors:m}=L(),{readFile:k}=T(),n=V({fileName:"",fileContent:null}),g=V(null),c=m($.Error),u=m($.Light),p=m($.Dark),h=N(()=>({"--fs-edit-image-overline-text-color":u.dark,"--fs-edit-image-color":p.base,"--fs-edit-image-error-color":c.base})),v=async C=>{const b=await k(C);n.value.fileName=C.name,n.value.fileContent=b,i("update:modelValue",b.substring(b.indexOf(",")+1)),e.source&&i("update:source",null)},I=()=>{n.value.fileName="",n.value.fileContent=null,e.modelValue?i("update:modelValue",null):i("update:source",null)};return E(()=>e.modelValue,()=>{e.modelValue||(n.value.fileName="",n.value.fileContent=null)}),{invisibleButtonRef:g,fileSelected:n,isExtraSmall:w,style:h,onUpload:v,onRemove:I}}});function K(e,i,w,m,k,n){const g=d("FSImageUI"),c=d("FSCard"),u=d("FSText"),p=d("FSButtonFileMini"),h=d("FSButtonRemoveMini"),v=d("FSClickable");return t(),o(F,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?S("",!0):M(e.$slots,"label",{key:0},()=>[l(s,{wrap:!1},{default:a(()=>[e.$props.label?(t(),o(R,{key:0,class:"fs-edit-image-label",font:"text-overline",style:y(e.style)},{default:a(()=>[r(f(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(t(),o(R,{key:1,class:"fs-edit-image-label",style:y([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[r(" * ")]),_:1},8,["style"])):S("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(t(),o(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(s,{align:"center-left",wrap:!1},{default:a(()=>[l(s,{class:"fs-edit-image-standard-row",gap:"24px",wrap:!1},{default:a(()=>[e.$props.source||e.$props.modelValue?(t(),o(g,q({key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"])):(t(),o(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(F,{class:"fs-edit-image-standard-label-wrapper",align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(t(),o(u,{key:0,font:"text-body",lineClamp:2},{default:a(()=>[r(f(e.fileSelected.fileName),1)]),_:1})):S("",!0),l(F,{gap:"0px"},{default:a(()=>[l(u,{class:"fs-edit-image-overline",font:"text-overline",style:y(e.style)},{default:a(()=>[r(f(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(u,{class:"fs-edit-image-overline",font:"text-overline",style:y(e.style)},{default:a(()=>[r(f(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(s,{align:"center-right",width:e.isExtraSmall?"40px":"hug"},{default:a(()=>[l(p,{accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1},8,["width"])]),_:1})]),_:1})):e.$props.source||e.$props.modelValue?(t(),o(s,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(g,q({aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"]),l(s,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(p,{accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(t(),o(v,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:i[0]||(i[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(s,{align:"center-center",wrap:!1},{default:a(()=>[l(J,null,{default:a(()=>[r(" mdi-plus-box-outline ")]),_:1}),l(u,{font:"text-body",lineClamp:2},{default:a(()=>[r(f(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),l(p,{class:"fs-edit-image-hidden-button",ref:"invisibleButtonRef",accept:".jpg,.jpeg,.png",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const se=O(B,[["render",K]]);B.__docgenInfo={displayName:"FSEditImageUI",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:source"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImageUI.vue"]};export{se as F};
