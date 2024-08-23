import{d as c,c as C,y as d,z as s,A as m,m as g,o as V,w as $,D as k}from"./vue.esm-bundler-BATn8cDU.js";import{F as h}from"./FSSimpleTileUI-DyPSzIAn.js";import{C as r}from"./useColors-BHn59yMM.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSLoadTile-T82ntxLN.js";import{a as U}from"./useFolders-BlVdIM2Q.js";import"./FSIconCard-BZNW4dDP.js";import"./FSCard-DuDQq8Pz.js";import"./FSCol-D9tDKebi.js";import"./css-C5boehQC.js";import"./FSRow-Gvoj2sTW.js";import"./FSIcon-CM3DCfji.js";import"./VIcon-BgP_kyAH.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./FSImage-B2oKYvYJ.js";import"./FSImageUI-BbV4RD2I.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./FSLoader-Ccd0M2qp.js";import"./dimensions-viHtPIHZ.js";import"./elevation-oWdkHiXv.js";import"./locale-Cm_eUAdw.js";import"./VImg-euCAhqKz.js";import"./rounded-BwvX6bZn.js";import"./transition-O2x8Myu8.js";import"./index-Bv2UUMCu.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./FSTile-CJmHixMw.js";import"./FSClickable-B9o4BEyu.js";import"./VProgressCircular-Bi_qA2kG.js";import"./FSCheckbox-D2VWjaLW.js";import"./useRules-C6ry6kys.js";import"./VSelectionControl-OgAVLyH5.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./index-RhlTNW4L.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./index-BJgqyIck.js";import"./index-_Z9wfsFC.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DxU3iujb.js";import"./useAppOrganisationId-9tSyFyAD.js";const F=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,a,l,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundVariant:"gradient",iconBackgroundColor:e.color,bottomColor:e.color,iconBorder:!1,icon:e.$props.icon},e.$attrs),null,16,["iconBackgroundColor","bottomColor","icon"])}const B=y(F,[["render",q]]);F.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function L(e,o,a,l,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const I=y(S,[["render",L]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const he={title:"Foundation/Core/Tiles/Folder",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:I},props:Object.keys(o),setup(){return{...e}},template:`
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
