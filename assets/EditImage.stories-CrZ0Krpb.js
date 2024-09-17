import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as I}from"./FSButton-DvVRr-Q9.js";import{d as h,c as f,y as E,z as F,A as S,m as V}from"./vue.esm-bundler-BSyvBTC9.js";import{F as d}from"./FSEditImageUI-BD4UFEV9.js";import{u as v,a as b}from"./useImages-BaeRdzQ-.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";import"./FSClickable-D9Ppoc0d.js";import"./FSCard-CjHnVBHV.js";import"./FSCol-CtQDyyQv.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./FSRow-B3SJi8FA.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-DuyQgQFI.js";import"./VIcon-BIpY_noq.js";import"./FSButtonFileMini-CzjlKUdq.js";import"./base-CmdGny12.js";import"./FSImageUI-Sqm5OVdg.js";import"./FSLoader-fdbCjZEQ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./FSText-DyldgdXP.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const s=h({name:"FSEditImage",components:{FSEditImageUI:d},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=v(),o=f(()=>e.imageId?b(e.imageId):null);return{image:t,source:o,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function U(e,a,t,o,l,_){const u=E("FSEditImageUI");return F(),S(u,V({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=g=>e.$emit("update:imageId",g))},e.$attrs),null,16,["source","blurHash","onError"])}const p=y(s,[["render",U]]);s.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ue={title:"Foundation/Shared/EditImage/EditImage",component:p,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:d},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":c("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:p,FSButton:I},props:Object.keys(a),setup(){return{args:e}},template:`
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
