import{j as I,d as R,e as V,J as r,K as m,L as c,M as l,z as a,N as _,O as N,P as C}from"./vue.esm-bundler-a79f6a7e.js";import{F as E,a as w,u as x}from"./FSButtonFileIcon-863aa484.js";import{F as B}from"./FSImage-f9ed15d3.js";import{F as U}from"./FSCard-a614faf8.js";import{F as k}from"./FSText-fa0cf7e3.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-bf5a0ca3.js";import{_ as f}from"./FSRow-997087e7.js";import"./FSButton-01495d76.js";import"./FSClickable-4d3bdcc0.js";import"./useColors-060213ee.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-1ec486f5.js";import"./css-6f95cab1.js";import"./VProgressCircular-e686f53b.js";import"./color-4fa560db.js";import"./useRender-b11abf1d.js";import"./intersectionObserver-ca237ead.js";import"./resizeObserver-c5cea584.js";import"./VIcon-9404a2c9.js";import"./tag-f688eb88.js";import"./FSSpan-6870f5d7.js";import"./useSlots-6a823081.js";import"./FSIcon-92b3f0ab.js";import"./base-0de1729e.js";import"./dimensions-ba559413.js";import"./elevation-3507830c.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-a4dd44af.js";import"./VImg-679a1f09.js";import"./rounded-5d5afca1.js";import"./transition-5598497b.js";import"./index-3d25a1c3.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:w,FSImage:B,FSCard:U,FSText:k},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"8px"},modelValue:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"}},emits:["update:modelValue"],setup(e,{emit:o}){const{readFile:u}=x(),t=R({fileName:"",fileContent:null}),p=V(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:p,onUpload:async i=>{const n=await u(i);t.value.fileName=i.name,t.value.fileContent=n,o("update:modelValue",n.substring(n.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,u,t,p,b){const d=r("FSImage"),i=r("FSCard"),n=r("FSText"),y=r("FSButtonFileIcon"),v=r("FSButtonRemoveIcon");return m(),c(f,{width:"fill",gap:"24px"},{default:l(()=>[a(i,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:l(()=>[a(d,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),a(O,{height:"fill",align:"bottom-left"},{default:l(()=>[e.fileSelected?(m(),c(n,{key:0,font:"text-body"},{default:l(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),a(f,null,{default:l(()=>[a(y,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(v,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ye={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
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
