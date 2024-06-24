import{d as v,o as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as T}from"./FSGroupTileUI-ByOGi9Xc.js";import{F as b}from"./FSLoadTile-DP0tIeIM.js";import{a as G}from"./useGroups-u9PeP_1k.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-CFf2CEHx.js";import"./FSLoader-ByGG4nua.js";import"./css-CBTOQ7jk.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./color-BdD0bzys.js";import"./dimensions-DMfhR1gp.js";import"./elevation-B-xdCICl.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./useRender-BYKEQvkC.js";import"./base-BNnJ_ndD.js";import"./composableFactory-C-hWj-Am.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./VImg-DJEDP7PW.js";import"./rounded-DApWaG-P.js";import"./transition-C9cC5SGI.js";import"./index-CiTrH3XV.js";import"./FSColor-C5qYkVr3.js";import"./FSCard-BkPZ_hGw.js";import"./FSCol-BeN4b608.js";import"./FSRow-a7Q-CB2x.js";import"./FSText-BSNRUZzw.js";import"./useSlots-CFCV5ffn.js";import"./FSTile-Ywc9KUiD.js";import"./FSClickable-heovQq91.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./VIcon-MLStchlj.js";import"./tag--UF77zYE.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSIcon-CcDweDXn.js";import"./FSSpan-CFY7ptgg.js";import"./useRules-CPnS0hXd.js";import"./VSelectionControl-DGpwRlBm.js";import"./density-BwHuOjo6.js";import"./index-C5RNyMWU.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./index-CZ5BSoIs.js";import"./pathCrumb-D0_87whe.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2"],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["Variations"];export{r as Variations,we as __namedExportsOrder,ke as default};
