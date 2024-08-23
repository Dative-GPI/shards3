import{d as v,o as y,w as I,y as n,z as p,A as s,m as V,D as F}from"./vue.esm-bundler-BATn8cDU.js";import{F as T}from"./FSGroupTileUI-CSFSJByI.js";import{F as b}from"./FSLoadTile-T82ntxLN.js";import{a as G}from"./useGroups-DJPdR5hN.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-B2oKYvYJ.js";import"./FSImageUI-BbV4RD2I.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CvKYYcO3.js";import"./FSLoader-Ccd0M2qp.js";import"./css-C5boehQC.js";import"./useColors-BHn59yMM.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./color-jM82jTdX.js";import"./dimensions-viHtPIHZ.js";import"./elevation-oWdkHiXv.js";import"./locale-Cm_eUAdw.js";import"./VImg-euCAhqKz.js";import"./rounded-BwvX6bZn.js";import"./transition-O2x8Myu8.js";import"./index-Bv2UUMCu.js";import"./FSColor-DSuUegyB.js";import"./FSCard-DuDQq8Pz.js";import"./FSCol-D9tDKebi.js";import"./FSRow-Gvoj2sTW.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./FSTile-CJmHixMw.js";import"./FSClickable-B9o4BEyu.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSIcon-CM3DCfji.js";import"./useRules-C6ry6kys.js";import"./VSelectionControl-OgAVLyH5.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./index-RhlTNW4L.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./index-BJgqyIck.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DxU3iujb.js";import"./useAppOrganisationId-9tSyFyAD.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:i}}});function k(e,o,a,i,w,$){const c=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(p(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const be={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
