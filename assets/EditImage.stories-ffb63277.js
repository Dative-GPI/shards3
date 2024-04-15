import{j as R,d as b,e as F,H as n,I as h,J as y,K as r,z as a,L as w,P as N,Q as k,M as q}from"./vue.esm-bundler-43a473fd.js";import{F as B,a as E,u as $}from"./FSButtonFileIcon-562fbd4f.js";import{F as T}from"./FSImage-3b7160e6.js";import{F as U}from"./FSText-e0cd8299.js";import{_ as V}from"./FSCol-3eed52f7.js";import{_ as u}from"./FSRow-ba466629.js";import{u as O,C as j}from"./useColors-a0d41f52.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-fac11a5a.js";import"./FSClickable-4c4a34e1.js";import"./FSCard-36571157.js";import"./css-18b0cf8e.js";import"./VProgressCircular-108a63fb.js";import"./color-8bc818ac.js";import"./theme-b11eeaee.js";import"./useRender-d2bddd17.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./VIcon-b50c364f.js";import"./tag-2aee60b4.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./FSIcon-0563dc08.js";import"./base-0de1729e.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-cfaf9e24.js";import"./VImg-ded4a17b.js";import"./rounded-c06207e9.js";import"./transition-83682335.js";import"./index-52cd98ce.js";import"./index-a0e5e2a3.js";const C=R({name:"FSEditImage",components:{FSButtonRemoveIcon:B,FSButtonFileIcon:E,FSImage:T,FSText:U,FSCol:V,FSRow:u},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getColors:p}=O(),{readFile:d}=$(),c=p(j.Light),t=b({fileName:"",fileContent:null}),i=F(()=>({"--fs-edit-image-border-color":c.dark})),s=F(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:s,style:i,onUpload:async S=>{const m=await d(S);t.value.fileName=S.name,t.value.fileContent=m,o("update:modelValue",m.substring(m.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function A(e,o,p,d,c,t){const i=n("FSImage"),s=n("FSText"),f=n("FSButtonFileIcon"),g=n("FSButtonRemoveIcon");return h(),y(u,{gap:"24px"},{default:r(()=>[a(i,{class:"fs-edit-image",aspectRatio:e.$props.aspectRatio,imageId:e.$props.imageId,height:e.$props.height,imageB64:e.realSource,width:e.$props.width,style:w(e.style)},null,8,["aspectRatio","imageId","height","imageB64","width","style"]),a(V,{height:"fill",align:"bottom-left"},{default:r(()=>[e.fileSelected?(h(),y(s,{key:0,font:"text-body"},{default:r(()=>[N(k(e.fileSelected.fileName),1)]),_:1})):q("",!0),a(u,null,{default:r(()=>[a(f,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(g,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const x=z(C,[["render",A]]);C.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{imageId:"1",source:""}},render:(e,{argTypes:o})=>({components:{FSEditImage:x},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSEditImage
        height="96px"
        width="96px"
        :imageId="args.imageId"
        v-model="args.source"
      />
    </div>`})};var I,v,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      imageId: "1",
      source: ""
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
        :imageId="args.imageId"
        v-model="args.source"
      />
    </div>\`
  })
}`,...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const Re=["Variations"];export{l as Variations,Re as __namedExportsOrder,xe as default};
