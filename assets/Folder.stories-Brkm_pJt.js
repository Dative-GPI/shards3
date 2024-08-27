import{d as c,c as C,y as d,z as s,A as m,m as g,o as V,w as $,D as k}from"./vue.esm-bundler-B8zP9crO.js";import{F as h}from"./FSSimpleTileUI-Bf5MtoBq.js";import{C as r}from"./useColors-AJGcQHF_.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSLoadTile-CIdDuIwo.js";import{a as U}from"./useFolders-BFg26sYZ.js";import"./FSIconCard-C6POwSPf.js";import"./FSCard-DS7Ofz0M.js";import"./FSCol-DXkP6ARl.js";import"./css-B1GBcH8c.js";import"./FSRow-D-NDNvrc.js";import"./FSIcon-DZCYhBaF.js";import"./VIcon-FsSVL6vQ.js";import"./color-DErt19fL.js";import"./theme-DtZVHDBt.js";import"./FSImage-C2P2bTx-.js";import"./FSImageUI-CRv7hclD.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Bs2ItKgK.js";import"./VImg-DbvVxLaQ.js";import"./dimensions-DJJFaY_J.js";import"./elevation-B_HXnKlm.js";import"./locale-FYv4GhYY.js";import"./rounded-Bso5Gdmg.js";import"./transition-CsS1sKoI.js";import"./index-vockUB0G.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSTile-CV9ZyYbd.js";import"./FSClickable-BCaYx5AP.js";import"./VProgressCircular-DxDQ8azE.js";import"./FSCheckbox-C5Shh_eW.js";import"./useRules-8tDFqsxq.js";import"./VSelectionControl-DQecCZ24.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./index-D-9FNlZD.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./index-C_7y45B_.js";import"./index-_Z9wfsFC.js";import"./pathCrumb-Db-cq5HI.js";import"./base-TJZSgE4h.js";import"./useAppOrganisationId-wxL44o-M.js";const F=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,a,l,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundVariant:"gradient",iconBackgroundColor:e.color,bottomColor:e.color,iconBorder:!1,icon:e.$props.icon},e.$attrs),null,16,["iconBackgroundColor","bottomColor","icon"])}const B=y(F,[["render",q]]);F.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function L(e,o,a,l,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const I=y(S,[["render",L]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const ke={title:"Foundation/Core/Tiles/Folder",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:I},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const he=["Variations"];export{t as Variations,he as __namedExportsOrder,ke as default};
