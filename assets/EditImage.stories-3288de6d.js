import{j as I,d as R,e as V,H as r,I as d,J as c,K as i,z as a,P as _,Q as N,M as C}from"./vue.esm-bundler-43a473fd.js";import{F as E,a as w,u as x}from"./FSButtonFileIcon-0d325d5d.js";import{F as B}from"./FSImage-41d39ff5.js";import{F as U}from"./FSCard-bab2eafe.js";import{F as k}from"./FSText-e0cd8299.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-3eed52f7.js";import{_ as f}from"./FSRow-ba466629.js";import"./FSButton-6a76966b.js";import"./FSClickable-83d2402d.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./css-18b0cf8e.js";import"./VProgressCircular-108a63fb.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./VIcon-b50c364f.js";import"./tag-2aee60b4.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./FSIcon-0563dc08.js";import"./base-0de1729e.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./serviceFactory-3393b4e4.js";import"./lodash-569b8a6d.js";import"./composableFactory-cfaf9e24.js";import"./VImg-ded4a17b.js";import"./rounded-c06207e9.js";import"./transition-83682335.js";import"./index-52cd98ce.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:w,FSImage:B,FSCard:U,FSText:k},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"8px"},modelValue:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"}},emits:["update:modelValue"],setup(e,{emit:o}){const{readFile:u}=x(),t=R({fileName:"",fileContent:null}),p=V(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:p,onUpload:async l=>{const n=await u(l);t.value.fileName=l.name,t.value.fileContent=n,o("update:modelValue",n.substring(n.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,u,t,p,b){const m=r("FSImage"),l=r("FSCard"),n=r("FSText"),y=r("FSButtonFileIcon"),v=r("FSButtonRemoveIcon");return d(),c(f,{width:"fill",gap:"24px"},{default:i(()=>[a(l,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:i(()=>[a(m,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),a(O,{height:"fill",align:"bottom-left"},{default:i(()=>[e.fileSelected?(d(),c(n,{key:0,font:"text-body"},{default:i(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),a(f,null,{default:i(()=>[a(y,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),a(v,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const ve={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const Ie=["Variations"];export{s as Variations,Ie as __namedExportsOrder,ve as default};
