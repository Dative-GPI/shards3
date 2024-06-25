import{d as V,c as C,y as k,z as r,A as n,B as t,m as $,E as l,G as i,D as u,I as g}from"./vue.esm-bundler-DC82FEWN.js";import{F as q}from"./FSAutocompleteField-BjVs_BJa.js";import{_ as c}from"./FSIcon-BZTGzEA5.js";import{_ as b}from"./FSSpan-CwfDYIua.js";import{_ as h}from"./FSRow-BPJXOzs-.js";import{u as N}from"./useDashboardOrganisations-QukQI2Y8.js";import{u as B}from"./useAutocomplete-DblNVG4s.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-CkM6DP-d.js";import"./FSSearchField-Dm_DgX5J.js";import"./FSTextField-BHg2KNCG.js";import"./VField-C3DtoroY.js";import"./useColors-CXl0hRe0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Dt6DpUVX.js";import"./FSClickable-D1l62sMQ.js";import"./FSCard-CQ3lfryo.js";import"./css-DYOPUjjE.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-eZGMPoMT.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-ekhc2J0d.js";import"./FSRadio-CscXF7IF.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-D4frsOr2.js";import"./FSSlideGroup-CgPOoi2Q.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-C6w0lG87.js";import"./FSCheckbox-M8Bs7S24.js";import"./FSFadeOut-DJfcYfqT.js";import"./FSLoader-D_G7mk7-.js";import"./elevation-BoGrGvdU.js";import"./VSelect-DqMGXfw3.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./dashboardTranslation-CcLHITut.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const y=V({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:q,FSIcon:c,FSSpan:b,FSRow:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:f,fetching:S,entities:p}=N(),F=C(()=>d.value&&S.value),m=A=>f({...e.dashboardOrganisationFilters,search:A??void 0}),{toggleSet:o,init:d,onUpdate:w}=B(p,[()=>e.dashboardOrganisationFilters],a,m);return{dashboardOrganisations:p,toggleSet:o,loading:F,onUpdate:w}}});function U(e,a,f,S,p,F){const m=k("FSAutocompleteField");return r(),n(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dashboardOrganisations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(r(),n(h,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[l(i(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,null,{default:t(()=>[l(i(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":t(({item:o,font:d})=>[g(h,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[l(i(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,{font:d},{default:t(()=>[l(i(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const _=I(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const no={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteDashboardOrganisation:_,FSCol:T},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var v,D,O;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDashboardOrganisation,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const lo=["Variations"];export{s as Variations,lo as __namedExportsOrder,no as default};
