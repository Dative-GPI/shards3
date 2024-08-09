import{d as v,o as y,w as I,y as n,z as p,A as s,m as V,D as F}from"./vue.esm-bundler-gWFTcvUr.js";import{F as T}from"./FSGroupTileUI-WkTd9LKM.js";import{F as b}from"./FSLoadTile-DX_WUOdH.js";import{a as G}from"./useGroups-Dif5gdG9.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-FRw3zP6O.js";import"./FSImageUI-Dx6xqtP-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./FSLoader-B7iT1-NB.js";import"./css-Bc8dJONt.js";import"./useColors-CeYk2p61.js";import"./index-DfSX31J9.js";import"./theme-DA9ermhM.js";import"./color-CI1OEbFE.js";import"./dimensions-CmIA1DmV.js";import"./elevation-B3TY2UXi.js";import"./locale-C1ZNn_CS.js";import"./VImg-CHF0S8ll.js";import"./rounded-DlJ8CYNz.js";import"./transition-14-CCvbq.js";import"./index-BHt-17iJ.js";import"./FSColor-CtjgXBHS.js";import"./FSCard-BOz_N88u.js";import"./FSCol-DX423FHf.js";import"./FSRow-Bpa2jjpJ.js";import"./FSSpan-DK2fprHX.js";import"./useSlots-qbJuQIJ1.js";import"./FSTile-DFZYyxel.js";import"./FSClickable--2S6C4PT.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./FSCheckbox-BPMmrlHn.js";import"./FSIcon-ssZU592Z.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./index-C2ELxjkU.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:i}}});function k(e,o,a,i,w,$){const c=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(p(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const be={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ge=["Variations"];export{r as Variations,Ge as __namedExportsOrder,be as default};
