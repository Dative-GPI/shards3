import{d as A,c as m,y as V,z as p,A as d,B as u,m as w,E as _,G as C,D as $}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as k}from"./FSAutocompleteField-BwlPjJ12.js";import{_ as h}from"./FSIcon-BhYLJFwS.js";import{u as q}from"./useDashboardOrganisations-BmH3tPlf.js";import{u as B}from"./useAutocomplete-Cyb_fxEn.js";import{u as T}from"./useTranslations-DflIUxSJ.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DVRwmgT8.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-CsvAshDj.js";import"./FSClickable-CT4CAD0O.js";import"./FSCard-B0a7crHg.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-Cw0TLTWz.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./FSCheckbox-BaTn-nVp.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-PkHtV3O5.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-Ch4v6qVK.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./dashboardTranslation-TteDG7qe.js";import"./useAppLanguageCode-DB-OA7iE.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-DYaDCbjS.js";const f=A({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:k,FSIcon:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=q(),{$tr:s}=T(),l=m(()=>D.value&&n.value),o=m(()=>e.multiple&&e.modelValue?s("ui.autocomplete-dashboard-organisation.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),S=y=>i({...e.dashboardOrganisationFilters,search:y??void 0}),{toggleSet:F,init:D,onUpdate:O}=B(r,[()=>e.dashboardOrganisationFilters],t,S);return{dashboardOrganisations:r,placeholder:o,toggleSet:F,loading:l,onUpdate:O}}});function U(e,t,i,n,r,s){const l=V("FSAutocompleteField");return p(),d(l,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.dashboardOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:o})=>[o.icon?(p(),d(h,{key:0},{default:u(()=>[_(C(o.icon),1)]),_:2},1024)):$("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const v=x(f,[["render",U]]);f.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDashboardOrganisation:v,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const it=["Variations"];export{a as Variations,it as __namedExportsOrder,lt as default};
