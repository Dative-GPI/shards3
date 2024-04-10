import{j as I,d as R,e as V,J as r,K as m,L as c,M as l,z as a,N as _,O as N,P as C}from"./vue.esm-bundler-8d1b7c9b.js";import{F as E,a as w,u as x}from"./FSButtonFileIcon-b8db2246.js";import{F as B}from"./FSImage-86702691.js";import{F as U}from"./FSCard-067bcc3b.js";import{F as k}from"./FSText-5d7b6cbb.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-53c64bd8.js";import{_ as f}from"./FSRow-a391dd26.js";import"./FSButton-24ac64b4.js";import"./FSClickable-40575f4d.js";import"./useColors-fe8562a0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-82ddebf2.js";import"./css-19c8f0ab.js";import"./VProgressCircular-51b4f5f8.js";import"./color-b802304c.js";import"./useRender-7d329101.js";import"./intersectionObserver-872db127.js";import"./resizeObserver-170e8e39.js";import"./VIcon-af7bd965.js";import"./tag-c9f6eb57.js";import"./FSSpan-54104d2b.js";import"./useSlots-36159ddf.js";import"./FSIcon-f1833eba.js";import"./base-55a66464.js";import"./dimensions-db4341a9.js";import"./elevation-7b9c5add.js";import"./locale-4596da4c.js";import"./proxiedModel-5e90dbf3.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-fdc86242.js";import"./VImg-82b274b6.js";import"./rounded-dfbce428.js";import"./transition-ec42203e.js";import"./index-78515ab6.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:w,FSImage:B,FSCard:U,FSText:k},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"8px"},modelValue:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"}},emits:["update:modelValue"],setup(e,{emit:o}){const{readFile:u}=x(),t=R({fileName:"",fileContent:null}),p=V(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:p,onUpload:async i=>{const n=await u(i);t.value.fileName=i.name,t.value.fileContent=n,o("update:modelValue",n.substring(n.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,u,t,p,b){const d=r("FSImage"),i=r("FSCard"),n=r("FSText"),y=r("FSButtonFileIcon"),v=r("FSButtonRemoveIcon");return m(),c(f,{width:"fill",gap:"24px"},{default:l(()=>[a(i,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:l(()=>[a(d,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),a(O,{height:"fill",align:"bottom-left"},{default:l(()=>[e.fileSelected?(m(),c(n,{key:0,font:"text-body"},{default:l(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),a(f,null,{default:l(()=>[a(y,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(v,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ye={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const ve=["Variations"];export{s as Variations,ve as __namedExportsOrder,ye as default};
