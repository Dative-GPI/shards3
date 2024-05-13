import{j as M,d as C,e as E,I as u,J as n,K as r,L as a,R as T,A as l,M as v,U as s,V as p,N as I}from"./vue.esm-bundler-41eda46b.js";import{F as x,a as A,u as D}from"./FSButtonFileMini-ea124d39.js";import{F as O}from"./FSClickable-416c7a7e.js";import{F as j}from"./FSImage-563135ef.js";import{F as H}from"./FSCard-8067a4d4.js";import{F as z}from"./FSText-f60941a6.js";import{_ as y}from"./FSCol-282cc158.js";import{_ as o}from"./FSRow-1508d56d.js";import{u as G}from"./css-35e8563f.js";import{u as J,C as w}from"./useColors-baaa98f5.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSIcon-713345eb.js";import{_ as R}from"./FSSpan-8af5ddcc.js";import{V as K}from"./VSpacer-63a59a9e.js";import"./FSButton-d0a22eb6.js";import"./useSlots-e8ea556e.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./theme-be1bd2db.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./base-0de1729e.js";import"./FSLoader-5fe6d2d9.js";import"./dimensions-5b54e342.js";import"./elevation-878f110a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./VImg-63ad34dc.js";import"./rounded-3de0fd3d.js";import"./transition-695cd20f.js";import"./index-5d4def8c.js";import"./index-a0e5e2a3.js";const U=M({name:"FSEditImage",components:{FSButtonRemoveMini:x,FSButtonFileMini:A,FSClickable:O,FSImage:j,FSCard:H,FSText:z,FSCol:y,FSRow:o},props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},imageId:{type:String,required:!1,default:null},aspectRatio:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"standard"},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue","update:imageId"],setup(e,{emit:t}){const{isExtraSmall:V}=G(),{getColors:g}=J(),{readFile:k}=D(),i=C({fileName:"",fileContent:null}),f=C(null),c=g(w.Error),d=g(w.Light),m=g(w.Dark),h=E(()=>({"--fs-edit-image-overline-text-color":d.dark,"--fs-edit-image-color":m.base,"--fs-edit-image-error-color":c.base})),F=E(()=>i.value&&i.value.fileName?i.value.fileContent:e.modelValue);return{invisibleButtonRef:f,fileSelected:i,isExtraSmall:V,realSource:F,style:h,onUpload:async $=>{const b=await k($);i.value.fileName=$.name,i.value.fileContent=b,t("update:modelValue",b.substring(b.indexOf(",")+1)),e.imageId&&t("update:imageId",null)},onRemove:()=>{i.value.fileName="",i.value.fileContent=null,e.modelValue?t("update:modelValue",null):t("update:imageId",null)}}}});function Q(e,t,V,g,k,i){const f=u("FSImage"),c=u("FSCard"),d=u("FSText"),m=u("FSButtonFileMini"),h=u("FSButtonRemoveMini"),F=u("FSClickable");return n(),r(y,{gap:"8px"},{default:a(()=>[e.$props.hideHeader?I("",!0):T(e.$slots,"label",{key:0},()=>[l(o,{wrap:!1},{default:a(()=>[e.$props.label?(n(),r(R,{key:0,class:"fs-edit-image-label",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$props.label),1)]),_:1},8,["style"])):I("",!0),e.$props.label&&e.$props.required?(n(),r(R,{key:1,class:"fs-edit-image-label",style:v([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:a(()=>[s(" * ")]),_:1},8,["style"])):I("",!0)]),_:1})]),["standard"].includes(e.$props.variant)?(n(),r(c,{key:1,padding:"12px",width:"100%"},{default:a(()=>[l(o,{align:"center-left",wrap:!1},{default:a(()=>[l(o,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId||e.realSource?(n(),r(f,{key:0,aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource},null,8,["aspectRatio","height","width","imageId","imageB64"])):(n(),r(c,{key:1,borderStyle:"dashed",aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width},null,8,["aspectRatio","height","width"])),l(y,{align:"center-left",height:"fill",width:"hug",gap:"10px"},{default:a(()=>[e.fileSelected&&e.fileSelected.fileName?(n(),r(d,{key:0,lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.fileSelected.fileName),1)]),_:1})):I("",!0),l(y,{gap:"0"},{default:a(()=>[l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.format","PNG or JPG format")),1)]),_:1},8,["style"]),l(d,{class:"fs-edit-image-overline",font:"text-overline",style:v(e.style)},{default:a(()=>[s(p(e.$tr("ui.edit-image.size","10 MB Maximum")),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),l(K),l(o,{width:"hug"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1})]),_:1})):e.$props.imageId||e.realSource?(n(),r(o,{key:2,width:e.$props.width,class:"fs-edit-image-full"},{default:a(()=>[l(f,{aspectRatio:e.$props.aspectRatio,height:e.$props.height,width:e.$props.width,imageId:e.$props.imageId,imageB64:e.realSource},null,8,["aspectRatio","height","width","imageId","imageB64"]),l(o,{class:"fs-edit-image-full-toolbar",padding:"4px"},{default:a(()=>[l(m,{accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"]),l(h,{onClick:e.onRemove},null,8,["onClick"])]),_:1})]),_:1},8,["width"])):(n(),r(F,{key:3,borderStyle:"dashed",variant:"background",height:e.$props.height,width:e.$props.width,onClick:t[0]||(t[0]=()=>e.invisibleButtonRef.input.click())},{default:a(()=>[l(o,{align:"center-center",wrap:!1},{default:a(()=>[l(P,null,{default:a(()=>[s(" mdi-plus-box-outline ")]),_:1}),l(d,{lineClamp:"2",font:"text-body"},{default:a(()=>[s(p(e.$tr("ui.edit-image.add-image","Add an image.")),1)]),_:1}),l(m,{ref:"invisibleButtonRef",class:"fs-edit-image-hidden-button",accept:"image/*",readFile:!1,"onUpdate:modelValue":e.onUpload},null,8,["onUpdate:modelValue"])]),_:1})]),_:1},8,["height","width"]))]),_:3})}const _=L(U,[["render",Q]]);U.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"aspectRatio",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"update:imageId"}],slots:[{name:"label"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const Te={title:"Foundation/Shared/EditImage",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{imageId1:"1",source1:"",source2:null,source3:null,imageId3:"1",source4:null,source5:null,imageId5:"1",source6:null,imageId6:"1"}},render:(e,{argTypes:t})=>({components:{FSEditImage:_},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      Variant Standard : <br>
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
        label="Edit Image"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model:imageId="args.imageId1"
        v-model="args.source1"
        :required="true"
        label="Edit Image with already set image ID"
      />

      <br>
      Variant Full : <br>
      <FSEditImage
        variant="full"
        height="50px"
        width="100%"
        v-model="args.source4"
      />
      <FSEditImage
        variant="full"
        height="150px"
        width="300px"
        v-model:imageId="args.imageId3"
        v-model="args.source3"
      />
      <FSEditImage
        variant="full"
        :width="500"
        aspectRatio="16/9"
        v-model="args.source5"
        v-model:imageId="args.imageId5"
      />
      <FSEditImage
        variant="full"
        height="222px"
        width="100%"
        v-model="args.source6"
        v-model:imageId="args.imageId6"
      />
    </div>`})};var q,B,N;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    args: {
      imageId1: "1",
      source1: "",
      source2: null,
      source3: null,
      imageId3: "1",
      source4: null,
      source5: null,
      imageId5: "1",
      source6: null,
      imageId6: "1"
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
      Variant Standard : <br>
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
        label="Edit Image"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model:imageId="args.imageId1"
        v-model="args.source1"
        :required="true"
        label="Edit Image with already set image ID"
      />

      <br>
      Variant Full : <br>
      <FSEditImage
        variant="full"
        height="50px"
        width="100%"
        v-model="args.source4"
      />
      <FSEditImage
        variant="full"
        height="150px"
        width="300px"
        v-model:imageId="args.imageId3"
        v-model="args.source3"
      />
      <FSEditImage
        variant="full"
        :width="500"
        aspectRatio="16/9"
        v-model="args.source5"
        v-model:imageId="args.imageId5"
      />
      <FSEditImage
        variant="full"
        height="222px"
        width="100%"
        v-model="args.source6"
        v-model:imageId="args.imageId6"
      />
    </div>\`
  })
}`,...(N=(B=S.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const xe=["Variations"];export{S as Variations,xe as __namedExportsOrder,Te as default};
