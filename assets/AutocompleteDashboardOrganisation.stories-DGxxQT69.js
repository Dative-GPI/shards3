import{d as A,c as m,y as V,z as p,A as d,C as u,m as w,H as C,I as $,F as k}from"./vue.esm-bundler-l-siv0w9.js";import{F as q}from"./FSAutocompleteField-Clp5VsZs.js";import{F as h}from"./FSIcon-CkszfNjV.js";import{u as _}from"./useDashboardOrganisations-A76m0SEj.js";import{u as T}from"./useAutocomplete-CGXaBgzT.js";import{u as x}from"./useTranslations-CJK8D24x.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-1_uutz8i.js";import"./FSSearchField-BpmR-KE2.js";import"./FSTextField-BBUnQO0k.js";import"./FSBaseField-CvtGL7os.js";import"./FSSpan-rLxUbVg1.js";import"./useBreakpoints-DVKeO9mp.js";import"./useSlots-C_N_WAus.js";import"./FSRow-DbyavHsS.js";import"./css-QbtOnfd3.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSButton-AXdFIlyU.js";import"./FSClickable-DPklQL2R.js";import"./FSCard-z3C03PoX.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-BqCEDJgf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-B3vDJ_oZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DI73aZb3.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CYkL-DWy.js";import"./FSWrapGroup-CTP9J3mU.js";import"./FSCheckbox-DDwz0Q3r.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-BWI7EPuD.js";import"./FSLoader-zrFkhDTM.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CLULa7rH.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DyWO8MYr.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./dashboardTranslation-CAYhusM0.js";import"./useAppLanguageCode-BzH56rSm.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";const f=A({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:q,FSIcon:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=_(),{$tr:s}=x(),l=m(()=>D.value&&n.value),o=m(()=>e.multiple&&e.modelValue?s("ui.autocomplete-dashboard-organisation.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),F=y=>i({...e.dashboardOrganisationFilters,search:y??void 0}),{toggleSet:S,init:D,onUpdate:O}=T(r,[()=>e.dashboardOrganisationFilters],t,F);return{dashboardOrganisations:r,placeholder:o,toggleSet:S,loading:l,onUpdate:O}}});function U(e,t,i,n,r,s){const l=V("FSAutocompleteField");return p(),d(l,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.dashboardOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:o})=>[o.icon?(p(),d(h,{key:0},{default:u(()=>[C($(o.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const v=B(f,[["render",U]]);f.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const st={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDashboardOrganisation:v,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const mt=["Variations"];export{a as Variations,mt as __namedExportsOrder,st as default};
