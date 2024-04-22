import{j as w,d as R,e as S,H as n,I as F,J as I,K as r,z as o,L as b,P as E,Q as N,M as k}from"./vue.esm-bundler-96d0a5cc.js";import{F as q,a as B,u as $}from"./FSButtonFileIcon-1adb22c8.js";import{F as T}from"./FSImage-7ee5f391.js";import{F as U}from"./FSText-8c2dec91.js";import{_ as V}from"./FSCol-71088900.js";import{_ as u}from"./FSRow-959288e5.js";import{u as O,C as j}from"./useColors-a5c6eb1e.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./FSCard-907ca4bc.js";import"./css-187645c7.js";import"./VProgressCircular-b96acd02.js";import"./color-0e7f3458.js";import"./theme-c90fedb5.js";import"./useRender-864589a6.js";import"./resizeObserver-608b050a.js";import"./VIcon-356fc7cc.js";import"./tag-2ee5b375.js";import"./FSSpan-572d1125.js";import"./useSlots-8f090340.js";import"./FSIcon-1f958509.js";import"./base-0de1729e.js";import"./FSLoader-a4b17375.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./locale-ebcc9fd1.js";import"./proxiedModel-80fa8b72.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-2f95db4a.js";import"./VImg-7ef13259.js";import"./rounded-7d5adaf8.js";import"./transition-2009bd3b.js";import"./index-ab6a3e98.js";import"./index-a0e5e2a3.js";const x=w({name:"FSEditImage",components:{FSButtonRemoveIcon:q,FSButtonFileIcon:B,FSImage:T,FSText:U,FSCol:V,FSRow:u},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:a}){const{getColors:d}=O(),{readFile:p}=$(),c=d(j.Light),t=R({fileName:"",fileContent:null}),i=S(()=>({"--fs-edit-image-border-color":c.dark})),s=S(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:s,style:i,onUpload:async h=>{const m=await p(h);t.value.fileName=h.name,t.value.fileContent=m,a("update:modelValue",m.substring(m.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,e.modelValue?a("update:modelValue",null):a("update:imageId",null)}}}});function A(e,a,d,p,c,t){const i=n("FSImage"),s=n("FSText"),g=n("FSButtonFileIcon"),f=n("FSButtonRemoveIcon");return F(),I(u,{width:"hug",gap:"24px"},{default:r(()=>[o(i,{class:"fs-edit-image",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource,style:b(e.style)},null,8,["aspectRatio","height","width","imageId","imageB64","style"]),o(V,{align:"bottom-left",height:"fill",width:"hug"},{default:r(()=>[e.fileSelected?(F(),I(s,{key:0,font:"text-body"},{default:r(()=>[E(N(e.fileSelected.fileName),1)]),_:1})):k("",!0),o(u,null,{default:r(()=>[o(g,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),o(f,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const C=z(x,[["render",A]]);x.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{imageId1:"1",source1:"",source2:null}},render:(e,{argTypes:a})=>({components:{FSEditImage:C},props:Object.keys(a),setup(){return{...e}},template:`
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
