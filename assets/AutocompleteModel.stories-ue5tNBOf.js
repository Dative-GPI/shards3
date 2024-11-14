import{d as w,c as s,y as g,z as c,A as f,C as m,m as I,F as $,N as b,B as k,D as q}from"./vue.esm-bundler-l-siv0w9.js";import{F as x}from"./FSAutocompleteField-D4hXXGG2.js";import{F as S}from"./FSButton-CTjpHGCH.js";import{F as D}from"./FSImage-B0cnyxMj.js";import{u as _}from"./useModels-BkhD9imJ.js";import{u as B}from"./useAutocomplete-8zU6WpIq.js";import{u as N}from"./useTranslations-CJK8D24x.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-BvqytbKT.js";import"./FSSearchField-SdnmrqYS.js";import"./FSTextField-xeLxZAxc.js";import"./FSBaseField-Bt-M24lA.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./VList-tnBIxltW.js";import"./FSCard-CZcF3hjs.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-7mPn_F6a.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BhVekJEg.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-BtOljEfB.js";import"./FSWrapGroup-D1OyNKn_.js";import"./FSCheckbox--v2KMIeD.js";import"./FSIcon-CxSeYbPm.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-9Mm6vijG.js";import"./FSLoader-ylzW_XnC.js";import"./FSRadio-CqpA7Dwr.js";import"./VSelect-D2Q6-t0S.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DMSoEBu-.js";import"./FSImageUI-BlKs_vZE.js";import"./imageDetails-D_m1_Geu.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-03a1Iisa.js";import"./useAppAuthToken-CwPnmj0J.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:x,FSButton:S,FSImage:D},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:n,fetching:d,entities:r}=_(),{$tr:p}=N(),o=s(()=>A.value&&d.value),i=s(()=>e.multiple&&e.modelValue?p("autocomplete.model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:u,init:A,onUpdate:V}=B(r,[()=>e.modelFilters],l,t);return{placeholder:i,toggleSet:u,loading:o,models:r,onUpdate:V}}});function U(e,l,n,d,r,p){const o=g("FSImage"),i=g("FSAutocompleteField");return c(),f(i,I({label:e.$props.label??e.$tr("autocomplete.model.label","Model"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(o,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):$("",!0)]),"toggle-set-item":m(t=>[b(S,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[b(o,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,h,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const ct=["Variations"];export{a as Variations,ct as __namedExportsOrder,gt as default};
