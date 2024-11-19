import{d as v,g as y,w as I,y as p,z as n,A as s,m as F,F as V}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as T}from"./FSGroupTileUI-BBx6sXZV.js";import{F as b}from"./FSLoadTile-D-EtLCSB.js";import{a as G}from"./useGroups-IfRZD6vt.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-lrCPZ-ea.js";import"./FSImageUI-pQoOi5zt.js";import"./FSLoader-Bw_zeuUP.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./color-DdAXPAA0.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./VImg-Bi-pKvLj.js";import"./rounded-BoPqla0T.js";import"./transition-BtBp4lzQ.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSColor-BYCmVP5f.js";import"./FSCard-CxH8ejsx.js";import"./FSCol-D8gLxM2E.js";import"./FSRow-CSQtiyAx.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSTile-C1tNDeEp.js";import"./FSClickable-Dz5j9aqP.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSCheckbox-oOjjSOAG.js";import"./FSIcon-dnXFGGQr.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./form-vji0TmoR.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,F({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):V("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Ce={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Ue=["Variations"];export{r as Variations,Ue as __namedExportsOrder,Ce as default};
