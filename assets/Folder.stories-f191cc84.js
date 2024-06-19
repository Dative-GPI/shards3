import{f as c,g as C,D as d,E as s,F as m,x as g,o as V,w as $,I as k}from"./vue.esm-bundler-a0893183.js";import{F as h}from"./FSSimpleTileUI-7253815c.js";import{C as r}from"./useColors-6c375bb5.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{F as w}from"./FSLoadTile-8a173a90.js";import{a as U}from"./useFolders-f8b18c93.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./FSRow-821d23a1.js";import"./FSIcon-9d61ed62.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./useRender-13ac3742.js";import"./tag-c957791e.js";import"./FSImage-4d011f0d.js";import"./FSLoader-5eac453d.js";import"./dimensions-b1078284.js";import"./elevation-7d7e39c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./VImg-941bd94b.js";import"./rounded-4c492e72.js";import"./transition-36d39bce.js";import"./index-01bbf789.js";import"./FSText-46c134d7.js";import"./useSlots-d5b57407.js";import"./FSTile-b1132c28.js";import"./FSClickable-550391c2.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./FSCheckbox-358f34d9.js";import"./FSSpan-4daadeb4.js";import"./useRules-8ba0ecf4.js";import"./VSelectionControl-df8a6f90.js";import"./density-fc3376dc.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./index-ec7e733e.js";import"./index-a0e5e2a3.js";import"./pathCrumb-3dbc85d5.js";import"./base-168b8f74.js";import"./useAppOrganisationId-a0837ade.js";const y=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,l,a,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundColor:!0,bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const B=F(y,[["render",q]]);y.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const I=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function L(e,o,l,a,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const S=F(I,[["render",L]]);I.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Folder",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:S},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,u,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3"],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFolderTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const qe=["Variations"];export{t as Variations,qe as __namedExportsOrder,Ue as default};
