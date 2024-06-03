import{f as _,j as C,g as M,D as u,E as i,F as n,G as a,R as T,M as l,W as v,K as r,L as p,I}from"./vue.esm-bundler-838daa40.js";import{F as x,a as D,u as O}from"./FSButtonFileMini-2734e1c5.js";import{F as j}from"./FSClickable-80b82e76.js";import{F as A}from"./FSImage-6d919371.js";import{F as G}from"./FSCard-e5e470ea.js";import{F as H}from"./FSText-0819f919.js";import{_ as y}from"./FSCol-44fe82a9.js";import{_ as o}from"./FSRow-753b58e5.js";import{u as z}from"./css-67cfec15.js";import{u as L,C as b}from"./useColors-9d29fce3.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as J}from"./FSIcon-212b990d.js";import{_ as E}from"./FSSpan-3df08200.js";import{V as K}from"./VSpacer-7ad9c022.js";import"./FSButton-8a94f710.js";import"./useSlots-6ce8c1a9.js";import"./VProgressCircular-95e816d7.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./useRender-f6a4770d.js";import"./resizeObserver-21650322.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./base-0de1729e.js";import"./FSLoader-e5a4173e.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-5509dfbf.js";import"./VImg-26cf6021.js";import"./rounded-94d04543.js";import"./transition-ee4dd36d.js";import"./index-e75f540f.js";import"./index-a0e5e2a3.js";const N=_({name:"FSEditImage",components:{FSButtonRemoveMini:x,FSButtonFileMini:D,FSClickable:j,FSImage:A,FSCard:G,FSText:H,FSCol:y,FSRow:o},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:imageId"],setup(e,{emit:t}){const{isExtraSmall:w}=z(),{getColors:g}=L(),{readFile:V}=O(),s=C({fileName:"",fileContent:null}),f=C(null),c=g(b.Error),d=g(b.Light),m=g(b.Dark),h=M(()=>({"--fs-edit-image-overline-text-color":d.dark,"--fs-edit-image-color":m.base,"--fs-edit-image-error-color":c.base}));return{invisibleButtonRef:f,fileSelected:s,isExtraSmall:w,style:h,onUpload:async k=>{const F=await V(k);s.value.fileName=k.name,s.value.fileContent=F,t("update:modelValue",F.substring(F.indexOf(",")+1)),e.imageId&&t("update:imageId",null)},onRemove:()=>{s.value.fileName="",s.value.fileContent=null,e.modelValue?t("update:modelValue",null):t("update:imageId",null)}}}});function W(e,t,w,g,V,s){const f=u("FSImage"),c=u("FSCard"),d=u("FSText"),m=u("FSButtonFileMini"),h=u("FSButtonRemoveMini"),$=u("FSClickable");return i(),n(y,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?I("",!0):T(e.$slots,"label",{key:0},()=>[l(o,{wrap:!1},{default:a(()=>[e.$props.label?(i(),n(E,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[r(p(e.$props.label),1)]),_:1},8,["style"])):I("",!0),e.$props.label&&e.$props.required?(i(),n(E,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[r(" * ")]),_:1},8,["style"])):I("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(i(),n(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(o,{align:"center-left",wrap:!1},{default:a(()=>[l(o,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId||e.$props.modelValue?(i(),n(f,{key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"])):(i(),n(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(y,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(i(),n(d,{key:0,lineClamp:"2",font:"text-body"},{default:a(()=>[r(p(e.fileSelected.fileName),1)]),_:1})):I("",!0),l(y,{gap:"0"},{default:a(()=>[l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[r(p(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[r(p(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(K),l(o,{width:"hug"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.imageId||e.$props.modelValue?(i(),n(o,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(f,{aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"]),l(o,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(i(),n($,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:t[0]||(t[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(o,{align:"center-center",wrap:!1},{default:a(()=>[l(J,null,{default:a(()=>[r(" mdi-plus-box-outline ")]),_:1}),l(d,{lineClamp:"2",font:"text-body"},{default:a(()=>[r(p(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),l(m,{ref:"invisibleButtonRef",class:"fs-edit-image-hidden-button",accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const U=P(N,[["render",W]]);N.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const Me={title:"Foundation/Shared/EditImage",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:t})=>({components:{FSEditImage:U},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      Variant Standard : <br>
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
        label="Edit Image"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model:imageId="args.imageId1"
        v-model="args.source1"
        :required="true"
        label="Edit Image with already set image ID"
      />

      <br>
      Variant Full : <br>
      <FSEditImage
        variant="full"
        height="50px"
        width="100%"
        v-model="args.source4"
      />
      <FSEditImage
        variant="full"
        height="150px"
        width="300px"
        v-model:imageId="args.imageId3"
        v-model="args.source3"
      />
      <FSEditImage
        variant="full"
        :width="500"
        aspectRatio="16/9"
        v-model="args.source5"
        v-model:imageId="args.imageId5"
      />
      <FSEditImage
        variant="full"
        height="222px"
        width="100%"
        v-model="args.source6"
        v-model:imageId="args.imageId6"
      />
    </div>`})};var R,q,B;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    args: {
      imageId1: "1",
      source1: "",
      source2: null,
      source3: null,
      imageId3: "1",
      source4: null,
      source5: null,
      imageId5: "1",
      source6: null,
      imageId6: "1"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEditImage
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      Variant Standard : <br>
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
        label="Edit Image"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model:imageId="args.imageId1"
        v-model="args.source1"
        :required="true"
        label="Edit Image with already set image ID"
      />

      <br>
      Variant Full : <br>
      <FSEditImage
        variant="full"
        height="50px"
        width="100%"
        v-model="args.source4"
      />
      <FSEditImage
        variant="full"
        height="150px"
        width="300px"
        v-model:imageId="args.imageId3"
        v-model="args.source3"
      />
      <FSEditImage
        variant="full"
        :width="500"
        aspectRatio="16/9"
        v-model="args.source5"
        v-model:imageId="args.imageId5"
      />
      <FSEditImage
        variant="full"
        height="222px"
        width="100%"
        v-model="args.source6"
        v-model:imageId="args.imageId6"
      />
    </div>\`
  })
}`,...(B=(q=S.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Te=["Variations"];export{S as Variations,Te as __namedExportsOrder,Me as default};
