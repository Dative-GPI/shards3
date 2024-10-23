import{d as V,c as p,y as w,z as s,A as u,C as d,m as C,H as $,I as k,F as q}from"./vue.esm-bundler-l-siv0w9.js";import{F as D}from"./FSAutocompleteField-BDFbY5TI.js";import{F as v}from"./FSIcon-sBizf6C-.js";import{u as _}from"./useLocations-CK0eCrTp.js";import{u as T}from"./useAutocomplete-r7qrAb_W.js";import{u as x}from"./useTranslations-CJK8D24x.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DD5MeAoT.js";import"./FSSearchField-BEe0Y2QL.js";import"./FSTextField-DvwDf1ul.js";import"./FSBaseField-lAwl7qG_.js";import"./FSSpan-DwE651wI.js";import"./useBreakpoints-mbnqo5a1.js";import"./useSlots-C_N_WAus.js";import"./FSRow-BjeBkMPV.js";import"./css-C_oz6kYw.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSButton-BJI5MpMt.js";import"./FSClickable-V0Na2XEk.js";import"./FSCard-DID5L9tx.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-DNAKgtJ7.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CHXCfQIs.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Oq-oGe9E.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-C8ezMOJj.js";import"./FSWrapGroup-B8fxO46S.js";import"./FSCheckbox-CdzKHZh_.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-BSloJqBX.js";import"./FSLoader-N5M2d1wd.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-BGfCIA4z.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-CoeNB1mG.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./address-CE2z3AEI.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";const F=V({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=_(),{$tr:m}=x(),a=p(()=>y.value&&n.value),o=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),b=A=>i({...e.locationFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:L}=T(r,[()=>e.locationFilters],t,b);return{placeholder:o,locations:r,toggleSet:h,loading:a,onUpdate:L}}});function O(e,t,i,n,r,m){const a=w("FSAutocompleteField");return s(),u(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(s(),u(v,{key:0},{default:d(()=>[$(k(o.icon),1)]),_:2},1024)):q("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const S=B(F,[["render",O]]);F.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const it={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLocation:S,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
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
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const nt=["Variations"];export{l as Variations,nt as __namedExportsOrder,it as default};
