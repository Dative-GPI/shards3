import{d as v,o as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-DUki7rNA.js";import{F as T}from"./FSGroupTileUI-BuDQsuC1.js";import{F as b}from"./FSLoadTile-BU-01dsL.js";import{a as G}from"./useGroups-g_A8hfoq.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-B5i4zCjK.js";import"./FSLoader-DSIWG3YN.js";import"./css-BPLLlL3Y.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./elevation-B5zwTzN8.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./useRender-pAH_6Aah.js";import"./base-BNnJ_ndD.js";import"./composableFactory-cXrrETVr.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./VImg-C0UHAW7L.js";import"./rounded-CuOTz_ni.js";import"./transition-CAmaHrck.js";import"./index-CeJtk2ua.js";import"./FSColor-DNOMNDxQ.js";import"./FSCard-CqpJmiEC.js";import"./FSCol-BBaW1DrL.js";import"./FSRow-CHgEOZQb.js";import"./FSText-CE19e0tM.js";import"./useSlots-BZu_lZyn.js";import"./FSTile-Ci-2C5M0.js";import"./FSClickable-FCUZtikK.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./FSCheckbox-CisQZrrP.js";import"./FSIcon-CSwom3lG.js";import"./FSSpan-DUTdSgpN.js";import"./useRules-ChvLepw4.js";import"./VSelectionControl-D7t-g0gO.js";import"./density-CE9JT2ZV.js";import"./index-IoB6lNSN.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./index-zNldQLkd.js";import"./pathCrumb-D0_87whe.js";import"./base-DlhEylMe.js";import"./useAppOrganisationId-CXBwfEoF.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
