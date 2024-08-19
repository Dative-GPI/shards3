import{d as c,c as C,y as d,z as s,A as m,m as g,o as V,w as $,D as k}from"./vue.esm-bundler-gWFTcvUr.js";import{F as h}from"./FSSimpleTileUI-C46NXiFz.js";import{C as r}from"./useColors-vfWFlOSD.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSLoadTile-DLMMk7vz.js";import{a as U}from"./useFolders-jGoI-_QY.js";import"./FSIconCard-DWg_Dqw2.js";import"./FSCard-Dkx-Z7Pt.js";import"./FSCol-DX423FHf.js";import"./css-Bc8dJONt.js";import"./FSRow-Bpa2jjpJ.js";import"./FSIcon-C5ELG8c1.js";import"./VIcon-BiBYr0XY.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./FSImage-SY9y6BiP.js";import"./FSImageUI-BWrRZMsZ.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./FSLoader-Dr6heSeB.js";import"./dimensions-CmIA1DmV.js";import"./elevation-B3TY2UXi.js";import"./locale-C1ZNn_CS.js";import"./VImg-CHF0S8ll.js";import"./rounded-DlJ8CYNz.js";import"./transition-14-CCvbq.js";import"./index-BHt-17iJ.js";import"./FSSpan-BlywDO8Z.js";import"./useSlots-qbJuQIJ1.js";import"./FSTile-GmN7MMvw.js";import"./FSClickable-BVFP8bZP.js";import"./VProgressCircular-DqlO5PEF.js";import"./FSCheckbox-DbtWxwzz.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./index-C2ELxjkU.js";import"./index-_Z9wfsFC.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";const F=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,a,l,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundVariant:"gradient",iconBackgroundColor:e.color,bottomColor:e.color,iconBorder:!1,icon:e.$props.icon},e.$attrs),null,16,["iconBackgroundColor","bottomColor","icon"])}const B=y(F,[["render",q]]);F.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function L(e,o,a,l,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const I=y(S,[["render",L]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const he={title:"Foundation/Core/Tiles/Folder",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:I},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const we=["Variations"];export{t as Variations,we as __namedExportsOrder,he as default};
