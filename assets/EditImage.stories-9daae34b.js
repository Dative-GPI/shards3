import{f as M,j as C,g as T,w as x,D as u,E as n,F as i,G as a,O as D,Q as l,W as v,K as s,L as p,I as S}from"./vue.esm-bundler-1de4ab84.js";import{F as O,a as j,u as A}from"./FSButtonFileMini-15f76faf.js";import{F as G}from"./FSClickable-00bc2ab2.js";import{F as H}from"./FSImage-1712f744.js";import{F as z}from"./FSCard-23b564db.js";import{F as L}from"./FSText-3b69d1d8.js";import{_ as F}from"./FSCol-044a4f0a.js";import{_ as r}from"./FSRow-0f15051e.js";import{u as P}from"./css-73f1b6e3.js";import{u as J,C as w}from"./useColors-6201f155.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Q}from"./FSIcon-08483052.js";import{_ as E}from"./FSSpan-c5b5f93b.js";import{V as W}from"./VSpacer-8f10d0b5.js";import{F as X}from"./FSButton-6b0685b3.js";import"./base-0de1729e.js";import"./VProgressCircular-a8c57eaa.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./useRender-b44b777b.js";import"./resizeObserver-5af66ffc.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSLoader-404ee90e.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./VImg-4aa69f50.js";import"./rounded-aeb398ab.js";import"./transition-41c2ee15.js";import"./index-bd033a0f.js";import"./useSlots-78ee3d45.js";import"./index-a0e5e2a3.js";const N=M({name:"FSEditImage",components:{FSButtonRemoveMini:O,FSButtonFileMini:j,FSClickable:G,FSImage:H,FSCard:z,FSText:L,FSCol:F,FSRow:r},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:imageId"],setup(e,{emit:t}){const{isExtraSmall:V}=P(),{getColors:g}=J(),{readFile:$}=A(),o=C({fileName:"",fileContent:null}),f=C(null),c=g(w.Error),d=g(w.Light),m=g(w.Dark),h=T(()=>({"--fs-edit-image-overline-text-color":d.dark,"--fs-edit-image-color":m.base,"--fs-edit-image-error-color":c.base})),y=async k=>{const b=await $(k);o.value.fileName=k.name,o.value.fileContent=b,t("update:modelValue",b.substring(b.indexOf(",")+1)),e.imageId&&t("update:imageId",null)},U=()=>{o.value.fileName="",o.value.fileContent=null,e.modelValue?t("update:modelValue",null):t("update:imageId",null)};return x(()=>e.modelValue,()=>{e.modelValue||(o.value.fileName="",o.value.fileContent=null)}),{invisibleButtonRef:f,fileSelected:o,isExtraSmall:V,style:h,onUpload:y,onRemove:U}}});function Y(e,t,V,g,$,o){const f=u("FSImage"),c=u("FSCard"),d=u("FSText"),m=u("FSButtonFileMini"),h=u("FSButtonRemoveMini"),y=u("FSClickable");return n(),i(F,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?S("",!0):D(e.$slots,"label",{key:0},()=>[l(r,{wrap:!1},{default:a(()=>[e.$props.label?(n(),i(E,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(n(),i(E,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[s(" * ")]),_:1},8,["style"])):S("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(n(),i(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(r,{align:"center-left",wrap:!1},{default:a(()=>[l(r,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId||e.$props.modelValue?(n(),i(f,{key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"])):(n(),i(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(F,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(n(),i(d,{key:0,lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.fileSelected.fileName),1)]),_:1})):S("",!0),l(F,{gap:"0"},{default:a(()=>[l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(W),l(r,{width:"hug"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.imageId||e.$props.modelValue?(n(),i(r,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(f,{aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"]),l(r,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(n(),i(y,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:t[0]||(t[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(r,{align:"center-center",wrap:!1},{default:a(()=>[l(Q,null,{default:a(()=>[s(" mdi-plus-box-outline ")]),_:1}),l(d,{lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),l(m,{ref:"invisibleButtonRef",class:"fs-edit-image-hidden-button",accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const _=K(N,[["render",Y]]);N.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:t})=>({components:{FSEditImage:_,FSButton:X},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      Variant Standard : <br>
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
        label="Edit Image"
      />
      <FSButton @click="args.source2 = null">
        Reset modelValue
      </FSButton>
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
    </div>`})};var R,B,q;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      FSEditImage,
      FSButton
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
      <FSButton @click="args.source2 = null">
        Reset modelValue
      </FSButton>
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
}`,...(q=(B=I.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const De=["Variations"];export{I as Variations,De as __namedExportsOrder,xe as default};
