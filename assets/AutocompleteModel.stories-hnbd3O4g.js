import{d as w,c as u,y as g,z as c,A as f,B as m,m as I,D as _,L as v,M as k,P as x}from"./vue.esm-bundler-Vj2X7okO.js";import{F as $}from"./FSAutocompleteField-CxRpNtma.js";import{F as h}from"./FSButton-DypSO1L1.js";import{F as q}from"./FSImage-xcHxoARe.js";import{u as D}from"./useModels--VoGJQdV.js";import{u as B}from"./useAutocomplete-CnGWBc2h.js";import{u as N}from"./useTranslations-DyPMaPr_.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-Bk577joi.js";import"./FSSearchField-DQjooe7z.js";import"./FSTextField-BxQZ_6yr.js";import"./FSBaseField-Na9zArMU.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClJ5KOuK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-BLjBa2f5.js";import"./FSCard-CD3PuQHv.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DJuMPLhX.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-_rtSdk97.js";import"./FSWrapGroup-WFgHTW5y.js";import"./FSCheckbox-CEveiKls.js";import"./FSIcon-C5J86pUk.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-k2izDgAG.js";import"./VImg-BXfgvzNq.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DUmD3b7i.js";import"./VList-C3UDUNRO.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-D4M3PHT5.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-HpeyF8B8.js";import"./FSImageUI-oKoqxlvk.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:$,FSButton:h,FSImage:q},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:d,entities:a}=D(),{$tr:p}=N(),l=u(()=>A.value&&d.value),i=u(()=>e.multiple&&e.modelValue?p("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:s,init:A,onUpdate:V}=B(a,[()=>e.modelFilters],o,t);return{placeholder:i,toggleSet:s,loading:l,models:a,onUpdate:V}}});function U(e,o,n,d,a,p){const l=g("FSImage"),i=g("FSAutocompleteField");return c(),f(i,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId},null,8,["imageId"])):_("",!0)]),"toggle-set-item":m(t=>[v(h,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:x(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var S,F,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(F=r.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const nt=["Variations"];export{r as Variations,nt as __namedExportsOrder,mt as default};
