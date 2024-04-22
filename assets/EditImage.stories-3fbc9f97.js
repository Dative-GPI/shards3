import{j as w,d as R,e as S,H as n,I as F,J as I,K as r,z as o,L as b,P as E,Q as N,M as k}from"./vue.esm-bundler-9b0e8103.js";import{F as q,a as B,u as $}from"./FSButtonFileIcon-345657f0.js";import{F as T}from"./FSImage-b4265639.js";import{F as U}from"./FSText-ae8f3525.js";import{_ as V}from"./FSCol-417d1c42.js";import{_ as u}from"./FSRow-efd9bf42.js";import{u as O,C as j}from"./useColors-92311d90.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-a0db2553.js";import"./FSClickable-e19a2efb.js";import"./FSCard-2aeec95e.js";import"./css-a20776b9.js";import"./VProgressCircular-49cc274e.js";import"./color-8a9bca19.js";import"./theme-eb9d1a1f.js";import"./useRender-7c6c7a38.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./FSIcon-fb1e9586.js";import"./base-0de1729e.js";import"./FSLoader-1b8a1203.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-3da3eea4.js";import"./VImg-6b167a7c.js";import"./rounded-f08b035c.js";import"./transition-6fc66ff9.js";import"./index-d737aecc.js";import"./index-a0e5e2a3.js";const x=w({name:"FSEditImage",components:{FSButtonRemoveIcon:q,FSButtonFileIcon:B,FSImage:T,FSText:U,FSCol:V,FSRow:u},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:a}){const{getColors:d}=O(),{readFile:p}=$(),c=d(j.Light),t=R({fileName:"",fileContent:null}),i=S(()=>({"--fs-edit-image-border-color":c.dark})),s=S(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:s,style:i,onUpload:async h=>{const m=await p(h);t.value.fileName=h.name,t.value.fileContent=m,a("update:modelValue",m.substring(m.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,e.modelValue?a("update:modelValue",null):a("update:imageId",null)}}}});function A(e,a,d,p,c,t){const i=n("FSImage"),s=n("FSText"),g=n("FSButtonFileIcon"),f=n("FSButtonRemoveIcon");return F(),I(u,{width:"hug",gap:"24px"},{default:r(()=>[o(i,{class:"fs-edit-image",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource,style:b(e.style)},null,8,["aspectRatio","height","width","imageId","imageB64","style"]),o(V,{align:"bottom-left",height:"fill",width:"hug"},{default:r(()=>[e.fileSelected?(F(),I(s,{key:0,font:"text-body"},{default:r(()=>[E(N(e.fileSelected.fileName),1)]),_:1})):k("",!0),o(u,null,{default:r(()=>[o(g,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),o(f,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const C=z(x,[["render",A]]);x.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{imageId1:"1",source1:"",source2:null}},render:(e,{argTypes:a})=>({components:{FSEditImage:C},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSEditImage
        height="96px"
        width="96px"
        :imageId="args.imageId1"
        v-model="args.source1"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
      />
    </div>`})};var y,v,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      imageId1: "1",
      source1: "",
      source2: null
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
      <FSEditImage
        height="96px"
        width="96px"
        :imageId="args.imageId1"
        v-model="args.source1"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
      />
    </div>\`
  })
}`,...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const Ce=["Variations"];export{l as Variations,Ce as __namedExportsOrder,xe as default};
