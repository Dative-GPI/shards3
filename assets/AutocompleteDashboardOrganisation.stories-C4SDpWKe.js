import{d as A,c as m,y as V,z as p,A as d,B as u,m as w,E as C,G as $,D as k}from"./vue.esm-bundler-BSyvBTC9.js";import{F as q}from"./FSAutocompleteField-DYa8eseR.js";import{F as h}from"./FSIcon-BVNp7pcM.js";import{u as _}from"./useDashboardOrganisations-ZLf3FwsX.js";import{u as B}from"./useAutocomplete-BLpvFch6.js";import{u as T}from"./useTranslations-CdSqQFV3.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DZA6pxA1.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-DvdcLDtW.js";import"./color--o2QfpAv.js";import"./FSButton-CzT4qk-w.js";import"./FSClickable-D0EdtzT9.js";import"./FSCard-CiUY3jF9.js";import"./VProgressCircular-D09FP1rk.js";import"./tag-DB5D_XjQ.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./VIcon-BQIm0b3J.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-C8KBePTS.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-Bh07lE_k.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSCheckbox-M73AcfXp.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader--MJuLA8w.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./filter-DuGNEgHB.js";import"./dashboardTranslation-DcIli75P.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";const f=A({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:q,FSIcon:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=_(),{$tr:s}=T(),l=m(()=>D.value&&n.value),o=m(()=>e.multiple&&e.modelValue?s("ui.autocomplete-dashboard-organisation.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),S=y=>i({...e.dashboardOrganisationFilters,search:y??void 0}),{toggleSet:F,init:D,onUpdate:O}=B(r,[()=>e.dashboardOrganisationFilters],t,S);return{dashboardOrganisations:r,placeholder:o,toggleSet:F,loading:l,onUpdate:O}}});function U(e,t,i,n,r,s){const l=V("FSAutocompleteField");return p(),d(l,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.dashboardOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:o})=>[o.icon?(p(),d(h,{key:0},{default:u(()=>[C($(o.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const v=x(f,[["render",U]]);f.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const it={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDashboardOrganisation:v,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var g,c,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const nt=["Variations"];export{a as Variations,nt as __namedExportsOrder,it as default};
