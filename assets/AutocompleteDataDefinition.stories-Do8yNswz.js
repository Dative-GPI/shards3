import{d as w,c as d,y as c,z as f,A as g,C as r,m as k,F as _,N as D,B as $,D as q}from"./vue.esm-bundler-l-siv0w9.js";import{F as B}from"./FSAutocompleteField-Clp5VsZs.js";import{F as S}from"./FSButton-AXdFIlyU.js";import{F as N}from"./FSChip-Ds3LgEau.js";import{u as O}from"./useDataDefinitions-CvoBQWKy.js";import{u as T}from"./useAutocomplete-CGXaBgzT.js";import{u as U}from"./useTranslations-CJK8D24x.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as x}from"./FSCol-1_uutz8i.js";import"./FSSearchField-BpmR-KE2.js";import"./FSTextField-BBUnQO0k.js";import"./FSBaseField-CvtGL7os.js";import"./FSSpan-rLxUbVg1.js";import"./useBreakpoints-DVKeO9mp.js";import"./useSlots-C_N_WAus.js";import"./FSRow-DbyavHsS.js";import"./css-QbtOnfd3.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-BqCEDJgf.js";import"./FSCard-z3C03PoX.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-B3vDJ_oZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DI73aZb3.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CYkL-DWy.js";import"./FSWrapGroup-CTP9J3mU.js";import"./FSCheckbox-DDwz0Q3r.js";import"./FSIcon-CkszfNjV.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-BWI7EPuD.js";import"./FSLoader-zrFkhDTM.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CLULa7rH.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DyWO8MYr.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSClickable-DPklQL2R.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";const h=w({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:S,FSChip:N},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:m,fetching:p,entities:a}=O(),{$tr:s}=U(),i=d(()=>A.value&&p.value),n=d(()=>e.multiple&&e.modelValue?s("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),t=V=>m({...e.dataDefinitionFilters,search:V??void 0}),{toggleSet:u,init:A,onUpdate:C}=T(a,[()=>e.dataDefinitionFilters],o,t);return{dataDefinitions:a,placeholder:n,toggleSet:u,loading:i,onUpdate:C}}});function z(e,o,m,p,a,s){const i=c("FSChip"),n=c("FSAutocompleteField");return f(),g(n,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":r(({item:t})=>[t.unit?(f(),g(i,{key:0,label:t.unit},null,8,["label"])):_("",!0)]),"toggle-set-item":r(t=>[D(S,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},$({_:2},[t.item.unit?{name:"append",fn:r(()=>[D(i,{label:t.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const y=j(h,[["render",z]]);h.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataDefinition:y,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var v,b,F;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      FSAutocompleteDataDefinition,
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
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(F=(b=l.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const pt=["Variations"];export{l as Variations,pt as __namedExportsOrder,mt as default};
