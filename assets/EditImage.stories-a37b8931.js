import{j as I,d as R,e as V,J as n,K as m,L as f,M as r,z as a,N as _,O as N,P as C}from"./vue.esm-bundler-37de1696.js";import{F as E,a as B,u as w}from"./FSButtonFileIcon-4cb1dcca.js";import{F as x}from"./FSImage-5c7d6db3.js";import{F as U}from"./FSCard-40979aed.js";import{F as k}from"./FSText-3a386b21.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-4074aa47.js";import{_ as c}from"./FSRow-fc81033b.js";import"./FSButton-74c4f4d7.js";import"./vue-router-f501b7d2.js";import"./useColors-ba22af06.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-07d11e72.js";import"./css-b545198d.js";import"./VProgressCircular-aa80f032.js";import"./color-efc02365.js";import"./useRender-ccb83440.js";import"./intersectionObserver-12fc3323.js";import"./resizeObserver-8d36419f.js";import"./VIcon-122293c7.js";import"./tag-9d688242.js";import"./FSSpan-9700c9e2.js";import"./useSlots-1bcfd838.js";import"./FSIcon-486fd767.js";import"./dimensions-4b009e60.js";import"./elevation-66cfbdec.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./base-55a66464.js";import"./serviceFactory-25228cba.js";import"./lodash-569b8a6d.js";import"./VImg-d6f10770.js";import"./rounded-7d64095f.js";import"./transition-4a8f6120.js";import"./index-90c07952.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:B,FSImage:x,FSCard:U,FSText:k},props:{padding:{type:[String,Number],required:!1,default:"8px"},width:{type:[String,Number],required:!1,default:null},height:{type:[String,Number],required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{read:p}=w(),t=R({fileName:"",fileContent:null}),u=V(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:u,onUpload:l=>{p(l,i=>{t.value.fileName=l.name,t.value.fileContent=i,o("update:modelValue",i)})},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,p,t,u,v){const d=n("FSImage"),l=n("FSCard"),i=n("FSText"),b=n("FSButtonFileIcon"),y=n("FSButtonRemoveIcon");return m(),f(c,{width:"fill",gap:"24px"},{default:r(()=>[a(l,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:r(()=>[a(d,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),a(O,{height:"fill",align:"bottom-left"},{default:r(()=>[e.fileSelected?(m(),f(i,{key:0,font:"text-body"},{default:r(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),a(c,null,{default:r(()=>[a(b,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(y,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ve={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const be=["Variations"];export{s as Variations,be as __namedExportsOrder,ve as default};
