import{d as v,o as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-BSwA4uJo.js";import{F as T}from"./FSGroupTileUI-Dkt2I1kr.js";import{F as b}from"./FSLoadTile-AEkmYQlK.js";import{a as G}from"./useGroups-X6cAyd3C.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-D1H9jzFA.js";import"./FSImageUI-FC5mP69p.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";import"./VImg-DoSXtjfN.js";import"./css-DuQjrBfn.js";import"./useColors-CVvq99EA.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./color-D9V7QeIP.js";import"./dimensions-BjZLW5mo.js";import"./elevation-CjdYMzTr.js";import"./locale-CpxwvVE1.js";import"./rounded-CO2AQG9_.js";import"./transition-_APBsTwD.js";import"./index-BhqZCjBr.js";import"./FSColor-BxAIgaLB.js";import"./FSCard-Dku7tZ0W.js";import"./FSCol-B2fYQH2g.js";import"./FSRow-C55kyKDN.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSTile-BsfkjASy.js";import"./FSClickable-DxIbWXqH.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./FSCheckbox-Biwr0a4k.js";import"./FSIcon-BnX9YboA.js";import"./VIcon-5UD9vI9m.js";import"./useRules-BFq3Zlaa.js";import"./VSelectionControl-CoQs29sw.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./index-YRxtzmsB.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./index-C3j_FW12.js";import"./form-DP5gBA00.js";import"./pathCrumb-Db-cq5HI.js";import"./base-COZVLn_8.js";import"./useAppOrganisationId-DRTS5QPJ.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Ge={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Se=["Variations"];export{r as Variations,Se as __namedExportsOrder,Ge as default};
