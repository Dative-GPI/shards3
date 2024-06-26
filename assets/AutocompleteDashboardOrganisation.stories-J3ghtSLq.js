import{d as V,c as C,y as k,z as r,A as n,B as t,m as $,E as i,G as l,D as u,K as g}from"./vue.esm-bundler-DeSao-KJ.js";import{F as q}from"./FSAutocompleteField-BTOcOZwL.js";import{_ as c}from"./FSIcon-29MaMkU3.js";import{_ as b}from"./FSSpan-t6bMdSRn.js";import{_ as h}from"./FSRow-JJutUvlP.js";import{u as N}from"./useDashboardOrganisations-DnJJIEq5.js";import{u as B}from"./useAutocomplete-CcchzqSF.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-CjQicg1_.js";import"./FSTextField-CeZ-GSQu.js";import"./VField-CyhQQ7TX.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CX8bjLcP.js";import"./FSClickable-D0rN91iS.js";import"./FSCard-DS_imcN3.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-Bqb9kp8T.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-GkfAduCn.js";import"./FSRadio-BSRa54Po.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-BwevC2Gc.js";import"./FSSlideGroup-C6jiw_gL.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-C8aYdVzb.js";import"./FSCheckbox-BFjs92EI.js";import"./FSFadeOut-CcdymBS5.js";import"./FSLoader-Yk4pw6tR.js";import"./elevation-BBJMtRPf.js";import"./VSelect-D0BktkQY.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./dashboardTranslation-CcLHITut.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Db9bJp6t.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-rrf4GM2L.js";const y=V({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:q,FSIcon:c,FSSpan:b,FSRow:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:f,fetching:S,entities:p}=N(),F=C(()=>d.value&&S.value),m=A=>f({...e.dashboardOrganisationFilters,search:A??void 0}),{toggleSet:o,init:d,onUpdate:w}=B(p,[()=>e.dashboardOrganisationFilters],a,m);return{dashboardOrganisations:p,toggleSet:o,loading:F,onUpdate:w}}});function j(e,a,f,S,p,F){const m=k("FSAutocompleteField");return r(),n(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dashboardOrganisations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(r(),n(h,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[i(l(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,null,{default:t(()=>[i(l(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":t(({item:o,font:d})=>[g(h,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(r(),n(c,{key:0},{default:t(()=>[i(l(o.raw.icon),1)]),_:2},1024)):u("",!0),g(b,{font:d},{default:t(()=>[i(l(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const _=T(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const so={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteDashboardOrganisation:_,FSCol:U},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const po=["Variations"];export{s as Variations,po as __namedExportsOrder,so as default};
