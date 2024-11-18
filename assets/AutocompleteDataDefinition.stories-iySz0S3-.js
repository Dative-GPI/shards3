import{d as w,c as d,y as f,z as c,A as g,C as r,N as D,F as $,B as k,H as q,m as _}from"./vue.esm-bundler-D3ngFwGY.js";import{F as B}from"./FSAutocompleteField-B1f-d-lL.js";import{F as S}from"./FSButton-D8KNVcat.js";import{F as N}from"./FSChip-CyfHnFR3.js";import{u as O}from"./useDataDefinitions-CMdAtruU.js";import{u as T}from"./useAutocomplete-BepmEoya.js";import{u as U}from"./useTranslations-Dmqoe3Kp.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as z}from"./FSCol-CVj0zcU5.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./FSIcon-C0akNC9K.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";const h=w({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:S,FSChip:N},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:m,fetching:p,entities:a}=O(),{$tr:u}=U(),i=d(()=>A.value&&p.value),n=d(()=>e.multiple&&e.modelValue?u("autocomplete.data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),t=V=>m({...e.dataDefinitionFilters,search:V??void 0}),{toggleSet:s,init:A,onUpdate:C}=T(a,[()=>e.dataDefinitionFilters],o,t);return{dataDefinitions:a,placeholder:n,toggleSet:s,loading:i,onUpdate:C}}});function M(e,o,m,p,a,u){const i=f("FSChip"),n=f("FSAutocompleteField");return c(),g(n,_({label:e.$props.label??e.$tr("autocomplete.data-definition.label","Data"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":r(({item:t})=>[t.unit?(c(),g(i,{key:0,label:t.unit},null,8,["label"])):q("",!0)]),"toggle-set-item":r(t=>[D(S,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:$(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},k({_:2},[t.item.unit?{name:"append",fn:r(()=>[D(i,{label:t.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const y=j(h,[["render",M]]);h.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const pt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataDefinition:y,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,v,F;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const ut=["Variations"];export{l as Variations,ut as __namedExportsOrder,pt as default};
