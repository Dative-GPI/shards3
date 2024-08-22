import{d as N,b as C,c as _,w as O,y as u,z as n,A as r,B as a,I as G,L as t,O as v,E as d,G as h,D as F,m as V}from"./vue.esm-bundler-BATn8cDU.js";import{F as z,a as L,u as P}from"./FSButtonFileMini-Z7hFv_Ov.js";import{F as j}from"./FSClickable-DYDREYld.js";import{F as x,u as J,I as W}from"./FSImageUI-D3FEWhqz.js";import{F as K}from"./FSCard-CAgq3XuJ.js";import{F as Q}from"./FSText-oSl_EFxG.js";import{_ as b}from"./FSCol-D9tDKebi.js";import{_ as i}from"./FSRow-Gvoj2sTW.js";import{u as X}from"./css-C5boehQC.js";import{u as Y,C as E}from"./useColors-D4RQatlL.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Z}from"./FSIcon-Kk713u84.js";import{_ as R}from"./FSSpan-C8YxV3Vj.js";import{V as ee}from"./VSpacer-Bp_e_Kvt.js";import{F as ae}from"./FSButton-D0V1nthY.js";import"./base-CmdGny12.js";import"./VProgressCircular-Bi_qA2kG.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./VIcon-BgP_kyAH.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./FSLoader-BBhuF9xD.js";import"./dimensions-viHtPIHZ.js";import"./elevation-oWdkHiXv.js";import"./locale-Cm_eUAdw.js";import"./VImg-euCAhqKz.js";import"./rounded-BwvX6bZn.js";import"./transition-O2x8Myu8.js";import"./index-Bv2UUMCu.js";import"./useSlots-iSUV1mlj.js";import"./index-3zl-tJp_.js";const T=N({name:"FSEditImageUI",components:{FSButtonRemoveMini:z,FSButtonFileMini:L,FSClickable:j,FSImageUI:x,FSCard:K,FSText:Q,FSCol:b,FSRow:i},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},label:{type:String,required:!1,default:null},source:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:source"],setup(e,{emit:l}){const{isExtraSmall:f}=X(),{getColors:s}=Y(),{readFile:I}=P(),o=C({fileName:"",fileContent:null}),m=C(null),p=s(E.Error),g=s(E.Light),c=s(E.Dark),S=_(()=>({"--fs-edit-image-overline-text-color":g.dark,"--fs-edit-image-color":c.base,"--fs-edit-image-error-color":p.base})),w=async k=>{const $=await I(k);o.value.fileName=k.name,o.value.fileContent=$,l("update:modelValue",$.substring($.indexOf(",")+1)),e.source&&l("update:source",null)},H=()=>{o.value.fileName="",o.value.fileContent=null,e.modelValue?l("update:modelValue",null):l("update:source",null)};return O(()=>e.modelValue,()=>{e.modelValue||(o.value.fileName="",o.value.fileContent=null)}),{invisibleButtonRef:m,fileSelected:o,isExtraSmall:f,style:S,onUpload:w,onRemove:H}}});function te(e,l,f,s,I,o){const m=u("FSImageUI"),p=u("FSCard"),g=u("FSText"),c=u("FSButtonFileMini"),S=u("FSButtonRemoveMini"),w=u("FSClickable");return n(),r(b,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?F("",!0):G(e.$slots,"label",{key:0},()=>[t(i,{wrap:!1},{default:a(()=>[e.$props.label?(n(),r(R,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[d(h(e.$props.label),1)]),_:1},8,["style"])):F("",!0),e.$props.label&&e.$props.required?(n(),r(R,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[d(" * ")]),_:1},8,["style"])):F("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(n(),r(p,{key:1,padding:"12px",width:"100%"},{default:a(()=>[t(i,{align:"center-left",wrap:!1},{default:a(()=>[t(i,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.source||e.$props.modelValue?(n(),r(m,V({key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"])):(n(),r(p,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),t(b,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(n(),r(g,{key:0,font:"text-body",lineClamp:2},{default:a(()=>[d(h(e.fileSelected.fileName),1)]),_:1})):F("",!0),t(b,{gap:"0px"},{default:a(()=>[t(g,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[d(h(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),t(g,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[d(h(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),t(ee),t(i,{width:"hug"},{default:a(()=>[t(c,{accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),t(S,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.source||e.$props.modelValue?(n(),r(i,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[t(m,V({aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,source:e.$props.source,imageB64:e.$props.modelValue},e.$attrs),null,16,["aspectRatio","height","width","source","imageB64"]),t(i,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[t(c,{accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"]),t(S,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(n(),r(w,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:l[0]||(l[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[t(i,{align:"center-center",wrap:!1},{default:a(()=>[t(Z,null,{default:a(()=>[d(" mdi-plus-box-outline ")]),_:1}),t(g,{font:"text-body",lineClamp:2},{default:a(()=>[d(h(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),t(c,{class:"fs-edit-image-hidden-button",ref:"invisibleButtonRef",accept:"image/*",readFile:!1,"onUpdate:metadata":e.onUpload},null,8,["onUpdate:metadata"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const le=M(T,[["render",te]]);T.__docgenInfo={displayName:"FSEditImageUI",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"source",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:source"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImageUI.vue"]};const A=N({name:"FSEditImage",components:{FSEditImageUI:le},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:l,entity:f}=J(),s=_(()=>e.imageId?W(e.imageId):null);return{image:f,source:s,onError:()=>{e.imageId&&(console.log("onError"),l(e.imageId))}}}});function ne(e,l,f,s,I,o){const m=u("FSEditImageUI");return n(),r(m,V({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":l[0]||(l[0]=p=>e.$emit("update:imageId",p))},e.$attrs),null,16,["source","blurHash","onError"])}const D=M(A,[["render",ne]]);A.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const He={title:"Foundation/Shared/EditImage",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:l})=>({components:{FSEditImage:D,FSButton:ae},props:Object.keys(l),setup(){return{...e}},template:`
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
    </div>`})};var B,q,U;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(q=y.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};const Oe=["Variations"];export{y as Variations,Oe as __namedExportsOrder,He as default};
