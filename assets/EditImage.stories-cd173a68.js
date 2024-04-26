import{j as w,d as N,e as S,I as n,J as F,K as I,L as r,z as o,M as R,S as b,U as E,N as k}from"./vue.esm-bundler-3386cb71.js";import{F as q,a as B,u as $}from"./FSButtonFileIcon-6ad7dc66.js";import{F as T}from"./FSImage-e31cb187.js";import{F as U}from"./FSText-81a21680.js";import{_ as V}from"./FSCol-30a69fbd.js";import{_ as u}from"./FSRow-9733beba.js";import{u as O,C as j}from"./useColors-36e524b3.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./css-bcfd232c.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./theme-620a0d92.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./base-0de1729e.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0f23559b.js";import"./VImg-cbb35f88.js";import"./rounded-1ab8dee0.js";import"./transition-53ccad39.js";import"./index-3382552b.js";import"./index-a0e5e2a3.js";const x=w({name:"FSEditImage",components:{FSButtonRemoveIcon:q,FSButtonFileIcon:B,FSImage:T,FSText:U,FSCol:V,FSRow:u},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:a}){const{getColors:d}=O(),{readFile:p}=$(),c=d(j.Light),t=N({fileName:"",fileContent:null}),i=S(()=>({"--fs-edit-image-border-color":c.dark})),s=S(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:s,style:i,onUpload:async h=>{const m=await p(h);t.value.fileName=h.name,t.value.fileContent=m,a("update:modelValue",m.substring(m.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,e.modelValue?a("update:modelValue",null):a("update:imageId",null)}}}});function A(e,a,d,p,c,t){const i=n("FSImage"),s=n("FSText"),g=n("FSButtonFileIcon"),f=n("FSButtonRemoveIcon");return F(),I(u,{width:"hug",gap:"24px"},{default:r(()=>[o(i,{class:"fs-edit-image",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource,style:R(e.style)},null,8,["aspectRatio","height","width","imageId","imageB64","style"]),o(V,{align:"bottom-left",height:"fill",width:"hug"},{default:r(()=>[e.fileSelected?(F(),I(s,{key:0,font:"text-body"},{default:r(()=>[b(E(e.fileSelected.fileName),1)]),_:1})):k("",!0),o(u,null,{default:r(()=>[o(g,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),o(f,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const C=z(x,[["render",A]]);x.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{imageId1:"1",source1:"",source2:null}},render:(e,{argTypes:a})=>({components:{FSEditImage:C},props:Object.keys(a),setup(){return{...e}},template:`
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
