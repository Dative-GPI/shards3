import{d as f,g as b,w as T,y as n,z as s,A as p,m as h,F as O}from"./vue.esm-bundler-l-siv0w9.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-BQDAcZ2a.js";import{F}from"./FSLoadTile-Cu4y75oy.js";import{a as I}from"./useDashboardOrganisationTypes-CRvSBmAg.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-D_r0mlXu.js";import"./FSIconCard-CLzQxLof.js";import"./FSCard-DID5L9tx.js";import"./FSCol-DD5MeAoT.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./FSRow-BjeBkMPV.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSIcon-sBizf6C-.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSImage-ihV3tsSh.js";import"./FSImageUI-D_PUGA5p.js";import"./FSLoader-N5M2d1wd.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./VImg-CZhZqiQJ.js";import"./rounded-uHrmshEX.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSTile-j5yKVznv.js";import"./FSClickable-V0Na2XEk.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./FSCheckbox-CdzKHZh_.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./form-CLJq5y5w.js";import"./dashboardTranslation-CAYhusM0.js";import"./useAppLanguageCode-BzH56rSm.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:F},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=I();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const y=n("FSLoadTile"),c=n("FSDashboardOrganisationTypeTileUI");return e.getting?(s(),p(y,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),p(c,h({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):O("",!0)}const g=V(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const $e={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Ce=["Variations"];export{o as Variations,Ce as __namedExportsOrder,$e as default};
