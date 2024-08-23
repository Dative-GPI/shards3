import{d as V,c as C,y as k,z as r,A as n,B as t,m as $,E as l,G as i,D as u,L as g}from"./vue.esm-bundler-BATn8cDU.js";import{F as q}from"./FSAutocompleteField-DBYsLacO.js";import{_ as c}from"./FSIcon-CM3DCfji.js";import{_ as b}from"./FSSpan-C8YxV3Vj.js";import{_ as h}from"./FSRow-Gvoj2sTW.js";import{u as N}from"./useDashboardOrganisations-CTiwz0jp.js";import{u as B}from"./useAutocomplete-CUJlsrfT.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSCol-D9tDKebi.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./FSButton-CvqXFT9l.js";import"./FSClickable-B9o4BEyu.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./dashboardTranslation-Cyd42uZC.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DxU3iujb.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-CvKYYcO3.js";const y=V({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:q,FSIcon:c,FSSpan:b,FSRow:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:f,fetching:S,entities:p}=N(),F=C(()=>d.value&&S.value),m=A=>f({...e.dashboardOrganisationFilters,search:A??void 0}),{toggleSet:o,init:d,onUpdate:w}=B(p,[()=>e.dashboardOrganisationFilters],a,m);return{dashboardOrganisations:p,toggleSet:o,loading:F,onUpdate:w}}});function j(e,a,f,S,p,F){const m=k("FSAutocompleteField");return r(),n(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dashboardOrganisations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(r(),n(h,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[l(i(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,null,{default:t(()=>[l(i(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":t(({item:o,font:d})=>[g(h,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[l(i(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,{font:d},{default:t(()=>[l(i(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const _=T(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const lo={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteDashboardOrganisation:_,FSCol:U},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const io=["Variations"];export{s as Variations,io as __namedExportsOrder,lo as default};
