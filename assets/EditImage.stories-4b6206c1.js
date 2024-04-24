import{j as w,d as N,e as S,I as n,J as F,K as I,L as r,v as o,M as R,U as b,V as E,N as k}from"./vue.esm-bundler-0c8496bd.js";import{F as q,a as B,u as $}from"./FSButtonFileIcon-e951dc66.js";import{F as T}from"./FSImage-4c24fbb7.js";import{F as U}from"./FSText-107f4924.js";import{_}from"./FSCol-0a323bdc.js";import{_ as u}from"./FSRow-547598b4.js";import{u as O,C as j}from"./useColors-b1c35b1c.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./css-0fb78066.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./theme-3745e9f1.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./base-0de1729e.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-ad68cfdd.js";import"./VImg-b480c03c.js";import"./rounded-6b3d6a43.js";import"./transition-893c383a.js";import"./index-68016ae5.js";import"./index-a0e5e2a3.js";const x=w({name:"FSEditImage",components:{FSButtonRemoveIcon:q,FSButtonFileIcon:B,FSImage:T,FSText:U,FSCol:_,FSRow:u},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:a}){const{getColors:d}=O(),{readFile:p}=$(),c=d(j.Light),t=N({fileName:"",fileContent:null}),i=S(()=>({"--fs-edit-image-border-color":c.dark})),s=S(()=>t.value&&t.value.fileName?t.value.fileContent:e.modelValue);return{fileSelected:t,realSource:s,style:i,onUpload:async h=>{const m=await p(h);t.value.fileName=h.name,t.value.fileContent=m,a("update:modelValue",m.substring(m.indexOf(",")+1))},onRemove:()=>{t.value.fileName="",t.value.fileContent=null,e.modelValue?a("update:modelValue",null):a("update:imageId",null)}}}});function L(e,a,d,p,c,t){const i=n("FSImage"),s=n("FSText"),g=n("FSButtonFileIcon"),f=n("FSButtonRemoveIcon");return F(),I(u,{width:"hug",gap:"24px"},{default:r(()=>[o(i,{class:"fs-edit-image",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource,style:R(e.style)},null,8,["aspectRatio","height","width","imageId","imageB64","style"]),o(_,{align:"bottom-left",height:"fill",width:"hug"},{default:r(()=>[e.fileSelected?(F(),I(s,{key:0,font:"text-body"},{default:r(()=>[b(E(e.fileSelected.fileName),1)]),_:1})):k("",!0),o(u,null,{default:r(()=>[o(g,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),o(f,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})}const C=A(x,[["render",L]]);x.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const xe={title:"Foundation/Shared/EditImage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{imageId1:"1",source1:"",source2:null}},render:(e,{argTypes:a})=>({components:{FSEditImage:C},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})};var v,y,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(V=(y=l.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const Ce=["Variations"];export{l as Variations,Ce as __namedExportsOrder,xe as default};
