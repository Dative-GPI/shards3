import{d as M,b as C,c as x,w as T,y as u,z as n,A as i,B as a,J as D,I as t,O as v,E as s,G as p,D as S}from"./vue.esm-bundler-DC82FEWN.js";import{F as O,a as A,u as z}from"./FSButtonFileMini-DnCkJDVb.js";import{F as G}from"./FSClickable-CAOw4IGX.js";import{F as H}from"./FSImage-SD4Ktk3L.js";import{F as j}from"./FSCard-D5f1qjEi.js";import{F as J}from"./FSText-BiNyCChn.js";import{_ as F}from"./FSCol-B7HQy3FB.js";import{_ as r}from"./FSRow-Dx6kiy_m.js";import{u as P}from"./css-DYOPUjjE.js";import{u as L,C as w}from"./useColors-Hqqi3yfr.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Q}from"./FSIcon-Cb1b9cDM.js";import{_ as E}from"./FSSpan-Bs4x_ELf.js";import{V as W}from"./VSpacer-BjECYW1K.js";import{F as X}from"./FSButton-AO9DHmCC.js";import"./base-CmdGny12.js";import"./VProgressCircular-C-U4HXtE.js";import"./color-DvJT0EEa.js";import"./theme-B5x8xkbY.js";import"./VIcon-Dc-dFojD.js";import"./FSLoader-BCzmDe0l.js";import"./dimensions-Dnxg3zhh.js";import"./elevation-BTkUCD39.js";import"./locale-BC9z6YbT.js";import"./VImg-DgHq50DD.js";import"./rounded-YB6K8mOp.js";import"./transition-yl3lVN6J.js";import"./index-DN-QUi1L.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";import"./useSlots-DN9F4SV8.js";import"./index-3zl-tJp_.js";const N=M({name:"FSEditImage",components:{FSButtonRemoveMini:O,FSButtonFileMini:A,FSClickable:G,FSImage:H,FSCard:j,FSText:J,FSCol:F,FSRow:r},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:imageId"],setup(e,{emit:l}){const{isExtraSmall:V}=P(),{getColors:g}=L(),{readFile:$}=z(),o=C({fileName:"",fileContent:null}),f=C(null),c=g(w.Error),d=g(w.Light),m=g(w.Dark),h=x(()=>({"--fs-edit-image-overline-text-color":d.dark,"--fs-edit-image-color":m.base,"--fs-edit-image-error-color":c.base})),y=async k=>{const b=await $(k);o.value.fileName=k.name,o.value.fileContent=b,l("update:modelValue",b.substring(b.indexOf(",")+1)),e.imageId&&l("update:imageId",null)},U=()=>{o.value.fileName="",o.value.fileContent=null,e.modelValue?l("update:modelValue",null):l("update:imageId",null)};return T(()=>e.modelValue,()=>{e.modelValue||(o.value.fileName="",o.value.fileContent=null)}),{invisibleButtonRef:f,fileSelected:o,isExtraSmall:V,style:h,onUpload:y,onRemove:U}}});function Y(e,l,V,g,$,o){const f=u("FSImage"),c=u("FSCard"),d=u("FSText"),m=u("FSButtonFileMini"),h=u("FSButtonRemoveMini"),y=u("FSClickable");return n(),i(F,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?S("",!0):D(e.$slots,"label",{key:0},()=>[t(r,{wrap:!1},{default:a(()=>[e.$props.label?(n(),i(E,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$props.label),1)]),_:1},8,["style"])):S("",!0),e.$props.label&&e.$props.required?(n(),i(E,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[s(" * ")]),_:1},8,["style"])):S("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(n(),i(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[t(r,{align:"center-left",wrap:!1},{default:a(()=>[t(r,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId||e.$props.modelValue?(n(),i(f,{key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"])):(n(),i(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),t(F,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(n(),i(d,{key:0,font:"text-body",lineClamp:2},{default:a(()=>[s(p(e.fileSelected.fileName),1)]),_:1})):S("",!0),t(F,{gap:"0px"},{default:a(()=>[t(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),t(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),t(W),t(r,{width:"hug"},{default:a(()=>[t(m,{accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),t(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.imageId||e.$props.modelValue?(n(),i(r,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[t(f,{aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.$props.modelValue},null,8,["aspectRatio","height","width","imageId","imageB64"]),t(r,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[t(m,{accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),t(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(n(),i(y,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:l[0]||(l[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[t(r,{align:"center-center",wrap:!1},{default:a(()=>[t(Q,null,{default:a(()=>[s(" mdi-plus-box-outline ")]),_:1}),t(d,{font:"text-body",lineClamp:2},{default:a(()=>[s(p(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),t(m,{class:"fs-edit-image-hidden-button",ref:"invisibleButtonRef",accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const _=K(N,[["render",Y]]);N.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const _e={title:"Foundation/Shared/EditImage",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:l})=>({components:{FSEditImage:_,FSButton:X},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var B,R,q;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(R=I.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Ue=["Variations"];export{I as Variations,Ue as __namedExportsOrder,_e as default};
