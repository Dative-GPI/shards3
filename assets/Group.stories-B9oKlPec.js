import{d as v,o as y,w as I,y as n,z as p,A as s,m as V,D as F}from"./vue.esm-bundler-DC82FEWN.js";import{F as T}from"./FSGroupTileUI-DoFrOGnL.js";import{F as b}from"./FSLoadTile-CH1TwFZZ.js";import{a as G}from"./useGroups-li-Uq1eI.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-qiZEE2s4.js";import"./FSLoader-BPRTbLLe.js";import"./css-DYOPUjjE.js";import"./useColors-vjSCjmKB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CDGAP9oX.js";import"./color-BhlhQtQT.js";import"./dimensions-fR777bfb.js";import"./elevation-BoGrGvdU.js";import"./locale-BC9z6YbT.js";import"./base-BNnJ_ndD.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BLQ7D_3g.js";import"./rounded-TFXDyxjJ.js";import"./transition-CJbyFvkq.js";import"./index-yKNzK_fJ.js";import"./FSColor-B1h0GaTc.js";import"./FSCard-C7Q5zpHU.js";import"./FSCol-B7HQy3FB.js";import"./FSRow-DoCXWKDP.js";import"./FSText-CRWIpNZ3.js";import"./useSlots-V2mVelz6.js";import"./FSTile-CM2mj3TU.js";import"./FSClickable-fH0IP9Gi.js";import"./VProgressCircular-D8KFt_en.js";import"./VIcon-uFUcYN4x.js";import"./FSCheckbox-B7KB3blX.js";import"./FSIcon-CH1L3cXE.js";import"./FSSpan-CwfDYIua.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-DLPOArCM.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./index-ySUbTvsm.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./index-DWl9tX7E.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:i}}});function k(e,o,a,i,w,$){const c=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(p(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const be={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
