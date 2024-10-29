import{d as V,c as m,y as w,z as n,A as s,C as d,m as C,H as $,I as k,F as q}from"./vue.esm-bundler-l-siv0w9.js";import{F as D}from"./FSAutocompleteField-Bi9yjR-_.js";import{F as v}from"./FSIcon-CvjHaRpL.js";import{u as _}from"./useGroups-C00uUS4c.js";import{u as T}from"./useAutocomplete-iIeMkOIa.js";import{u as x}from"./useTranslations-CJK8D24x.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-BvqytbKT.js";import"./FSSearchField-BZ0BuXDA.js";import"./FSTextField-Dz3TuJjO.js";import"./FSBaseField-kRvwdySD.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./FSButton-CL_za1Dz.js";import"./FSClickable-1JFt1tAh.js";import"./FSCard-CBOjzTDC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./VList-Cw9EjfMs.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-Cdvxn-7r.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DqV2jRKX.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CtnEZ-QL.js";import"./FSWrapGroup-CDPc2Zen.js";import"./FSCheckbox-BuNOyTVK.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-qg65ZIq1.js";import"./FSLoader-t85MEsQz.js";import"./FSRadio-DYhcD128.js";import"./VSelect-B0802BOF.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";const F=V({name:"FSAutocompleteGroup",components:{FSAutocompleteField:D,FSIcon:v},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:i,entities:r}=_(),{$tr:u}=x(),p=m(()=>y.value&&i.value),o=m(()=>e.multiple&&e.modelValue?u("ui.autocomplete-group.placeholder","{0} group(s) selected",e.modelValue.length):null),b=A=>a({...e.groupFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:G}=T(r,[()=>e.groupFilters],t,b);return{placeholder:o,toggleSet:h,loading:p,groups:r,onUpdate:G}}});function O(e,t,a,i,r,u){const p=w("FSAutocompleteField");return n(),s(p,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(n(),s(v,{key:0},{default:d(()=>[$(k(o.icon),1)]),_:2},1024)):q("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const S=B(F,[["render",O]]);F.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const pt={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteGroup:S,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var c,g,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      FSAutocompleteGroup,
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
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const at=["Variations"];export{l as Variations,at as __namedExportsOrder,pt as default};
