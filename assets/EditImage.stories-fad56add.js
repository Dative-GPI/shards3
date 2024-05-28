import{f as M,j as C,g as E,I as u,J as n,K as r,L as a,V as T,A as l,Z as v,O as s,P as p,N as I}from"./vue.esm-bundler-cd768bc3.js";import{F as x,a as O,u as A}from"./FSButtonFileMini-1caa167e.js";import{F as D}from"./FSClickable-95c940f4.js";import{F as j}from"./FSImage-f2b07c4c.js";import{F as H}from"./FSCard-0de7b634.js";import{F as P}from"./FSText-92e9b97f.js";import{_ as y}from"./FSCol-ff457bc3.js";import{_ as o}from"./FSRow-1d7c2545.js";import{u as z}from"./css-c2ea3b68.js";import{u as G,C as w}from"./useColors-91ab292c.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./FSIcon-203715fb.js";import{_ as R}from"./FSSpan-da6dde8e.js";import{V as K}from"./VSpacer-0c52efc7.js";import"./FSButton-ecc11eb7.js";import"./useSlots-2af30a3d.js";import"./VProgressCircular-f6ca2848.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./useRender-b3fd6f8b.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./base-0de1729e.js";import"./FSLoader-c57e8f50.js";import"./dimensions-9d1d90d7.js";import"./elevation-7537bf82.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";import"./VImg-1d5e27a6.js";import"./rounded-c9c22222.js";import"./transition-2948fa2b.js";import"./index-cc35ebf5.js";import"./index-a0e5e2a3.js";const U=M({name:"FSEditImage",components:{FSButtonRemoveMini:x,FSButtonFileMini:O,FSClickable:D,FSImage:j,FSCard:H,FSText:P,FSCol:y,FSRow:o},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:t}){const{isExtraSmall:V}=z(),{getColors:g}=G(),{readFile:k}=A(),i=C({fileName:"",fileContent:null}),f=C(null),c=g(w.Error),d=g(w.Light),m=g(w.Dark),h=E(()=>({"--fs-edit-image-overline-text-color":d.dark,"--fs-edit-image-color":m.base,"--fs-edit-image-error-color":c.base})),F=E(()=>i.value&&i.value.fileName?i.value.fileContent:e.modelValue);return{invisibleButtonRef:f,fileSelected:i,isExtraSmall:V,realSource:F,style:h,onUpload:async $=>{const b=await k($);i.value.fileName=$.name,i.value.fileContent=b,t("update:modelValue",b.substring(b.indexOf(",")+1)),e.imageId&&t("update:imageId",null)},onRemove:()=>{i.value.fileName="",i.value.fileContent=null,e.modelValue?t("update:modelValue",null):t("update:imageId",null)}}}});function Z(e,t,V,g,k,i){const f=u("FSImage"),c=u("FSCard"),d=u("FSText"),m=u("FSButtonFileMini"),h=u("FSButtonRemoveMini"),F=u("FSClickable");return n(),r(y,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?I("",!0):T(e.$slots,"label",{key:0},()=>[l(o,{wrap:!1},{default:a(()=>[e.$props.label?(n(),r(R,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$props.label),1)]),_:1},8,["style"])):I("",!0),e.$props.label&&e.$props.required?(n(),r(R,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[s(" * ")]),_:1},8,["style"])):I("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(n(),r(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(o,{align:"center-left",wrap:!1},{default:a(()=>[l(o,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId||e.realSource?(n(),r(f,{key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource},null,8,["aspectRatio","height","width","imageId","imageB64"])):(n(),r(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(y,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(n(),r(d,{key:0,lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.fileSelected.fileName),1)]),_:1})):I("",!0),l(y,{gap:"0"},{default:a(()=>[l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(K),l(o,{width:"hug"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.imageId||e.realSource?(n(),r(o,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(f,{aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource},null,8,["aspectRatio","height","width","imageId","imageB64"]),l(o,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(n(),r(F,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:t[0]||(t[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(o,{align:"center-center",wrap:!1},{default:a(()=>[l(L,null,{default:a(()=>[s(" mdi-plus-box-outline ")]),_:1}),l(d,{lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),l(m,{ref:"invisibleButtonRef",class:"fs-edit-image-hidden-button",accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const _=J(U,[["render",Z]]);U.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const Te={title:"Foundation/Shared/EditImage",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:t})=>({components:{FSEditImage:_},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var q,B,N;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(B=S.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const xe=["Variations"];export{S as Variations,xe as __namedExportsOrder,Te as default};
