import{d as c,c as C,y as d,z as s,A as m,m as g,o as V,w as $,D as k}from"./vue.esm-bundler-DC82FEWN.js";import{F as h}from"./FSSimpleTileUI-c1E07zC9.js";import{C as r}from"./useColors-C2RWUFtR.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSLoadTile-BmCZj96f.js";import{a as U}from"./useFolders-CU-QKePD.js";import"./FSCard-EcIwA-Oh.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./FSRow-DoCXWKDP.js";import"./FSIcon-ClfMDAJS.js";import"./VIcon-Dc-dFojD.js";import"./color-DvJT0EEa.js";import"./theme-B5x8xkbY.js";import"./FSImage-X6Wcq3gA.js";import"./FSLoader-06X_hY2B.js";import"./dimensions-Dnxg3zhh.js";import"./elevation-BTkUCD39.js";import"./locale-BC9z6YbT.js";import"./base-CmdGny12.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-DgHq50DD.js";import"./rounded-YB6K8mOp.js";import"./transition-yl3lVN6J.js";import"./index-DN-QUi1L.js";import"./FSSpan-CEjD71wr.js";import"./useSlots-Dr5tdD4b.js";import"./FSTile-FoQqC5mS.js";import"./FSClickable-aI6guRt-.js";import"./VProgressCircular-C-U4HXtE.js";import"./FSCheckbox-Cwrt_PQ3.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./index-CvDsTioR.js";import"./index-_Z9wfsFC.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";const F=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,l,a,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundColor:!0,bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const B=y(F,[["render",q]]);F.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function L(e,o,l,a,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const I=y(S,[["render",L]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const $e={title:"Foundation/Core/Tiles/Folder",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:I},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ke=["Variations"];export{t as Variations,ke as __namedExportsOrder,$e as default};
