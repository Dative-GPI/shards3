import{d as w,c as u,y as g,z as c,A as f,C as m,m as I,F as k,N as v,B as x,D as _}from"./vue.esm-bundler-l-siv0w9.js";import{F as $}from"./FSAutocompleteField-BDFbY5TI.js";import{F as S}from"./FSButton-BJI5MpMt.js";import{F as q}from"./FSImage-ihV3tsSh.js";import{u as D}from"./useModels-C6sXpvA-.js";import{u as B}from"./useAutocomplete-r7qrAb_W.js";import{u as N}from"./useTranslations-CJK8D24x.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-DD5MeAoT.js";import"./FSSearchField-BEe0Y2QL.js";import"./FSTextField-DvwDf1ul.js";import"./FSBaseField-lAwl7qG_.js";import"./FSSpan-DwE651wI.js";import"./useBreakpoints-mbnqo5a1.js";import"./useSlots-C_N_WAus.js";import"./FSRow-BjeBkMPV.js";import"./css-C_oz6kYw.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-DNAKgtJ7.js";import"./FSCard-DID5L9tx.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CHXCfQIs.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Oq-oGe9E.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-C8ezMOJj.js";import"./FSWrapGroup-B8fxO46S.js";import"./FSCheckbox-CdzKHZh_.js";import"./FSIcon-sBizf6C-.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-BSloJqBX.js";import"./FSLoader-N5M2d1wd.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-BGfCIA4z.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-CoeNB1mG.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSClickable-V0Na2XEk.js";import"./FSImageUI-D_PUGA5p.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:$,FSButton:S,FSImage:q},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:d,entities:i}=D(),{$tr:p}=N(),l=u(()=>A.value&&d.value),a=u(()=>e.multiple&&e.modelValue?p("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:s,init:A,onUpdate:V}=B(i,[()=>e.modelFilters],o,t);return{placeholder:a,toggleSet:s,loading:l,models:i,onUpdate:V}}});function U(e,o,n,d,i,p){const l=g("FSImage"),a=g("FSAutocompleteField");return c(),f(a,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):k("",!0)]),"toggle-set-item":m(t=>[v(S,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:_(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},x({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var b,h,F;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      FSAutocompleteModel,
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
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(F=(h=r.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const gt=["Variations"];export{r as Variations,gt as __namedExportsOrder,ut as default};
