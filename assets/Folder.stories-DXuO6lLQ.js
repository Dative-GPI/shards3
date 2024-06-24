import{d as c,c as C,y as d,z as s,A as m,m as g,o as V,w as $,D as k}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as h}from"./FSSimpleTileUI-CJnke5zK.js";import{C as r}from"./useColors-Dc5IlaXx.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSLoadTile-DP0tIeIM.js";import{a as U}from"./useFolders-CZOznplY.js";import"./FSCard-BkPZ_hGw.js";import"./FSCol-BeN4b608.js";import"./css-CBTOQ7jk.js";import"./FSRow-a7Q-CB2x.js";import"./FSIcon-CcDweDXn.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./theme-C6UZcim6.js";import"./useRender-BYKEQvkC.js";import"./tag--UF77zYE.js";import"./FSImage-CFf2CEHx.js";import"./FSLoader-ByGG4nua.js";import"./dimensions-DMfhR1gp.js";import"./elevation-B-xdCICl.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./base-BNnJ_ndD.js";import"./composableFactory-C-hWj-Am.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-DJEDP7PW.js";import"./rounded-DApWaG-P.js";import"./transition-C9cC5SGI.js";import"./index-CiTrH3XV.js";import"./FSText-BSNRUZzw.js";import"./useSlots-CFCV5ffn.js";import"./FSTile-Ywc9KUiD.js";import"./FSClickable-heovQq91.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSSpan-CFY7ptgg.js";import"./useRules-CPnS0hXd.js";import"./VSelectionControl-DGpwRlBm.js";import"./density-BwHuOjo6.js";import"./index-C5RNyMWU.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./index-CZ5BSoIs.js";import"./index-DfSX31J9.js";import"./pathCrumb-D0_87whe.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";const F=c({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[r.Light,r.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:h},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[r.Light,r.Primary]:e.bottomColor)}}});function q(e,o,l,a,b,v){const n=d("FSSimpleTileUI");return s(),m(n,g({iconBackgroundColor:!0,bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const B=y(F,[["render",q]]);F.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=c({name:"FSFolderTile",components:{FSFolderTileUI:B,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=U();return V(()=>{o(e.folderId)}),$(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function L(e,o,l,a,b,v){const n=d("FSLoadTile"),T=d("FSFolderTileUI");return e.getting?(s(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(s(),m(T,g({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):k("",!0)}const I=y(S,[["render",L]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Folder",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:I},props:Object.keys(o),setup(){return{...e}},template:`
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
