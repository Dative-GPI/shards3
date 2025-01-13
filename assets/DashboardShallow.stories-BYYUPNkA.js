import{d as b,g as S,w,A as i,B as s,j as g,G as y,I as d}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as v}from"./FSDashboardShallowTileUI-BehYzlxY.js";import{F as I}from"./FSLoadTile-DG3OXiX_.js";import{a as V}from"./useDashboardShallows-CXnoBj0q.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-DB5YDEuY.js";import"./FSIconCard-DFgcr-US.js";import"./FSCard-Dlw97Dqr.js";import"./FSCol-D35grUmj.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./FSRow-CAJM3FZ0.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSIcon-BwW5Hq8i.js";import"./VIcon-_OtdNVUv.js";import"./color-v9Utm2wX.js";import"./FSImage-CRET8ZWw.js";import"./FSImageUI-C9-ibhOt.js";import"./FSLoader-CljC1u5C.js";import"./dimensions-BEVfeJxO.js";import"./elevation-C2OyWM5g.js";import"./locale-CUGdfosF.js";import"./VImg-CiDZbmGb.js";import"./rounded-BByw44D4.js";import"./transition-CCJeTa-A.js";import"./index-BSIzjytc.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSTile-CwWk_iVU.js";import"./FSClickable-CbOr5F2S.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./FSCheckbox-BCFluEqr.js";import"./useRules-B-2YsFdr.js";import"./VSelectionControl-DanrcpVZ.js";import"./density-P84-FGcF.js";import"./proxiedModel-gKZvE0id.js";import"./index-C_NEyI9V.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./index-A-BnjIhl.js";import"./form-BxXGwYee.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";import"./dashboardTranslation-8oxvaKyV.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(d(),s(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(d(),s(f,g({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):y("",!0)}const h=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      FSDashboardShallowTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const je=["Variations"];export{a as Variations,je as __namedExportsOrder,Ue as default};
