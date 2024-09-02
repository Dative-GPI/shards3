import{d as v,o as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as T}from"./FSGroupTileUI-CAhxuCON.js";import{F as b}from"./FSLoadTile-C89395Lq.js";import{a as G}from"./useGroups-0Pyt8cCI.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-BnHy2gIB.js";import"./FSImageUI-Cri7PIHl.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";import"./VImg-C2ZZ8L57.js";import"./css-DEg_ftav.js";import"./useColors-9ZzibzMy.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./color-DRHDjI8D.js";import"./dimensions-DmQ2LvlH.js";import"./elevation-D7qOrqBH.js";import"./locale-HbAtAWzw.js";import"./rounded-CT5UQ7DA.js";import"./transition-BzbLScdo.js";import"./index-BFUNLZ7G.js";import"./FSColor-idgXz1ch.js";import"./FSCard-Czuobvvo.js";import"./FSCol-DLJAvXXo.js";import"./FSRow-unE_3RO6.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSTile-BWzdGs5O.js";import"./FSClickable-rknJFO_P.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./FSIcon-CO4wAGng.js";import"./VIcon-DEItKADI.js";import"./useRules-Dr6aWKP3.js";import"./VSelectionControl-Cv0xTIuO.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./index-CrjNNQA3.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./index-CS87Qvuo.js";import"./form-BLrazfEI.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Ge={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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