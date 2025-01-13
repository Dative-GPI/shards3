import{d as f,g as b,w as T,A as n,B as s,j as h,G as O,I as p}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-Dg3WFjOd.js";import{F as I}from"./FSLoadTile-DG3OXiX_.js";import{a as V}from"./useDashboardOrganisationTypes-CXb4yXut.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-QXgqvumO.js";import"./FSIconCard-MLj-2w92.js";import"./FSCard-Dlw97Dqr.js";import"./FSCol-D35grUmj.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./FSRow-CAJM3FZ0.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSIcon-BwW5Hq8i.js";import"./VIcon-_OtdNVUv.js";import"./color-v9Utm2wX.js";import"./FSImage-CRET8ZWw.js";import"./FSImageUI-C9-ibhOt.js";import"./FSLoader-CljC1u5C.js";import"./dimensions-BEVfeJxO.js";import"./elevation-C2OyWM5g.js";import"./locale-CUGdfosF.js";import"./VImg-CiDZbmGb.js";import"./rounded-BByw44D4.js";import"./transition-CCJeTa-A.js";import"./index-BSIzjytc.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSTile-CwWk_iVU.js";import"./FSClickable-CbOr5F2S.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./FSCheckbox-BCFluEqr.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./density-P84-FGcF.js";import"./proxiedModel-gKZvE0id.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./index-A-BnjIhl.js";import"./form-BxXGwYee.js";import"./dashboardTranslation-8oxvaKyV.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const y=n("FSLoadTile"),c=n("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),s(y,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(p(),s(c,h({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):O("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const xe={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      FSDashboardOrganisationTypeTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Be=["Variations"];export{o as Variations,Be as __namedExportsOrder,xe as default};
