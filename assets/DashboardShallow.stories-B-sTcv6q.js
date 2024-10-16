import{d as b,g as S,w,y as i,z as s,A as d,m as g,F as y}from"./vue.esm-bundler-DTB_q9xr.js";import{F as v}from"./FSDashboardShallowTileUI-CVve6Cjt.js";import{F}from"./FSLoadTile-C4a0qT-h.js";import{a as I}from"./useDashboardShallows-akWuCUc3.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-CSgeVsan.js";import"./FSIconCard-DDDdS0ns.js";import"./FSCard-GtkwWKOo.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSRow-CFFgZ74C.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./FSIcon-CJgnsR4e.js";import"./VIcon-BCDp5TRU.js";import"./color-DBJfw4cY.js";import"./FSImage-Eyb6nJ-g.js";import"./FSImageUI-CN7Xmnjm.js";import"./FSLoader-y57uLHf2.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./VImg-I7jXrjsW.js";import"./rounded-DM_o2hWD.js";import"./transition-B83BVatf.js";import"./index-C31q_73Z.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-BI_kc6PW.js";import"./FSClickable-CIKlZ0Uy.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./form-D8F-RrsG.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:F},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=I();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(s(),d(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),d(f,g({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):y("",!0)}const h=V(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const qe={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xe=["Variations"];export{a as Variations,xe as __namedExportsOrder,qe as default};
