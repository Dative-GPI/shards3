import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as I}from"./FSButton-C5MQI7ea.js";import{d as h,c as f,y as E,z as F,A as S,m as V}from"./vue.esm-bundler-CWdIlc2r.js";import{F as d}from"./FSEditImageUI-DB51tJuv.js";import{u as v,a as b}from"./useImages-Dec2UUgD.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./FSRow-D4JfwQlG.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-vAlkpflo.js";import"./FSButtonFileMini-BV7AXcvf.js";import"./useAppAuthToken-BNiaspL4.js";import"./base-CmdGny12.js";import"./FSImageUI-D64m-s1x.js";import"./FSLoader-DxfJongP.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./FSText-BxoWgsr8.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";const s=h({name:"FSEditImage",components:{FSEditImageUI:d},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=v(),o=f(()=>e.imageId?b(e.imageId):null);return{image:t,source:o,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function U(e,a,t,o,l,_){const u=E("FSEditImageUI");return F(),S(u,V({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=g=>e.$emit("update:imageId",g))},e.$attrs),null,16,["source","blurHash","onError"])}const p=y(s,[["render",U]]);s.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ue={title:"Foundation/Shared/EditImage/EditImage",component:p,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:d},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":c("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:p,FSButton:I},props:Object.keys(a),setup(){return{args:e}},template:`
      <FSEditImage 
        :imageId="args.imageId"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />`})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageId: "1",
    modelValue: null,
    height: 96,
    width: 96,
    label: 'Edit Image',
    variant: 'standard',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue")
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
        args
      };
    },
    template: \`
      <FSEditImage 
        :imageId="args.imageId"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />\`
  })
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ge=["Default"];export{r as Default,ge as __namedExportsOrder,ue as default};
