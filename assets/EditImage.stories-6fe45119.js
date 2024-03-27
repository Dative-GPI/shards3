import{g as I,d as R,j as V,J as n,K as m,L as f,M as r,z as t,N as _,O as N,P as C}from"./vue.esm-bundler-e580dd1f.js";import{F as E,a as B,u as w}from"./FSButtonFileIcon-de90bd8d.js";import{F as x}from"./FSImage-bca696ba.js";import{F as U}from"./FSCard-c77c66af.js";import{F as k}from"./FSText-62d9f6c8.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O}from"./FSCol-fcea4dc1.js";import{_ as c}from"./FSRow-50904d6e.js";import"./FSButton-9fb570ca.js";import"./vue-router-092e674d.js";import"./useColors-b2cb658b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a3bb880e.js";import"./css-ca36ed75.js";import"./VProgressCircular-88630010.js";import"./color-0af6d6f5.js";import"./useRender-16acb9c4.js";import"./intersectionObserver-4acce169.js";import"./resizeObserver-88f5705d.js";import"./VIcon-bb9e7f8a.js";import"./tag-fa7badbe.js";import"./FSSpan-73185be3.js";import"./useSlots-a039f59b.js";import"./FSIcon-4fed0819.js";import"./dimensions-10c7935e.js";import"./elevation-02492a14.js";import"./locale-405fbfb1.js";import"./proxiedModel-3aca154f.js";import"./base-7f65d26c.js";import"./lodash-569b8a6d.js";import"./VImg-07ac5889.js";import"./rounded-2552fce2.js";import"./transition-7d6b8783.js";import"./index-e90df875.js";const F=I({name:"FSEditImage",components:{FSButtonRemoveIcon:E,FSButtonFileIcon:B,FSImage:x,FSCard:U,FSText:k},props:{padding:{type:[String,Number],required:!1,default:"8px"},width:{type:[String,Number],required:!1,default:null},height:{type:[String,Number],required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},borderRadius:{type:[String,Number],required:!1,default:"4px"},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{read:p}=w(),a=R({fileName:"",fileContent:null}),d=V(()=>a.value&&a.value.fileName?a.value.fileContent:e.modelValue);return{fileSelected:a,realSource:d,onUpload:i=>{p(i,l=>{a.value.fileName=i.name,a.value.fileContent=l,o("update:modelValue",l)})},onRemove:()=>{a.value.fileName="",a.value.fileContent=null,o("update:modelValue",null)}}}});function $(e,o,p,a,d,v){const u=n("FSImage"),i=n("FSCard"),l=n("FSText"),b=n("FSButtonFileIcon"),y=n("FSButtonRemoveIcon");return m(),f(c,{width:"fill",gap:"24px"},{default:r(()=>[t(i,{class:"fs-edit-image",borderRadius:e.$props.borderRadius,padding:e.$props.padding},{default:r(()=>[t(u,{borderRadius:e.$props.borderRadius,aspectRatio:e.$props.aspectRatio,height:e.$props.height,imageB64:e.realSource,width:e.$props.width},null,8,["borderRadius","aspectRatio","height","imageB64","width"])]),_:1},8,["borderRadius","padding"]),t(O,{height:"fill",align:"bottom-left"},{default:r(()=>[e.fileSelected?(m(),f(l,{key:0,font:"text-body"},{default:r(()=>[_(N(e.fileSelected.fileName),1)]),_:1})):C("",!0),t(c,null,{default:r(()=>[t(b,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),t(y,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const h=q(F,[["render",$]]);F.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"width",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const he={title:"Foundation/Shared/EditImage",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{source:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:o})=>({components:{FSEditImage:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const ve=["Variations"];export{s as Variations,ve as __namedExportsOrder,he as default};
