import{d as v,g as y,w as I,A as p,B as n,j as V,G as F,I as s}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as T}from"./FSGroupTileUI-DGb_7tzv.js";import{F as G}from"./FSLoadTile-DG3OXiX_.js";import{a as b}from"./useGroups-Csn5L44Z.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-CRET8ZWw.js";import"./FSImageUI-C9-ibhOt.js";import"./FSLoader-CljC1u5C.js";import"./useBreakpoints-2HHUcVIh.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./css-Bhvr2onI.js";import"./color-v9Utm2wX.js";import"./dimensions-BEVfeJxO.js";import"./elevation-C2OyWM5g.js";import"./locale-CUGdfosF.js";import"./VImg-CiDZbmGb.js";import"./rounded-BByw44D4.js";import"./transition-CCJeTa-A.js";import"./index-BSIzjytc.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./FSColor-BdwdbfvH.js";import"./FSCard-Dlw97Dqr.js";import"./FSCol-D35grUmj.js";import"./FSRow-CAJM3FZ0.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSTile-CwWk_iVU.js";import"./FSClickable-CbOr5F2S.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSCheckbox-BCFluEqr.js";import"./FSIcon-BwW5Hq8i.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./density-P84-FGcF.js";import"./proxiedModel-gKZvE0id.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./index-A-BnjIhl.js";import"./form-BxXGwYee.js";import"./pathCrumb-Db-cq5HI.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:G},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=b();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(s(),n(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),n(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Be={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["Variations"];export{r as Variations,Ce as __namedExportsOrder,Be as default};
