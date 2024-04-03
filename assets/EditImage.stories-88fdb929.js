import{j as I,d as R,e as V,J as n,K as d,L as c,M as r,z as a,N as _,O as N,P as C}from"./vue.esm-bundler-37de1696.js";import{F as E,a as w,u as B}from"./FSButtonFileIcon-59b20037.js";import{F as x}from"./FSImage-2f97a576.js";import{F as U}from"./FSCard-61ed401b.js";import{F as k}from"./FSText-13835655.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-927ba931.js";import{_ as f}from"./FSRow-632ce14e.js";import"./FSButton-147099af.js";import"./vue-router-f501b7d2.js";import"./useColors-ba22af06.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-07d11e72.js";import"./css-cb27a64f.js";import"./VProgressCircular-aa80f032.js";import"./color-efc02365.js";import"./useRender-ccb83440.js";import"./intersectionObserver-12fc3323.js";import"./resizeObserver-8d36419f.js";import"./VIcon-122293c7.js";import"./tag-9d688242.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./FSIcon-486fd767.js";import"./base-55a66464.js";import"./dimensions-4b009e60.js";import"./elevation-66cfbdec.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-4cdb1715.js";import"./VImg-d6f10770.js";import"./rounded-7d64095f.js";import"./transition-4a8f6120.js";import"./index-90c07952.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:w,FSImage:x,FSCard:U,FSText:k},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"8px"},modelValue:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"}},emits:["update:modelValue"],setup(e,{emit:o}){const{readFile:u}=B(),t=R({fileName:"",fileContent:null}),p=V(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:p,onUpload:async l=>{const i=await u(l);t.value.fileName=l.name,t.value.fileContent=i,o("update:modelValue",i)},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,u,t,p,y){const m=n("FSImage"),l=n("FSCard"),i=n("FSText"),b=n("FSButtonFileIcon"),v=n("FSButtonRemoveIcon");return d(),c(f,{width:"fill",gap:"24px"},{default:r(()=>[a(l,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:r(()=>[a(m,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),a(O,{height:"fill",align:"bottom-left"},{default:r(()=>[e.fileSelected?(d(),c(i,{key:0,font:"text-body"},{default:r(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),a(f,null,{default:r(()=>[a(b,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(v,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const be={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source"
      />
    </div>`})};var g,A,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      source: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
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
        v-model="args.source"
      />
    </div>\`
  })
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const ve=["Variations"];export{s as Variations,ve as __namedExportsOrder,be as default};
