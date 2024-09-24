import{d as w,c as u,y as g,z as c,A as f,B as m,m as I,D as k,L as v,M as x,P as _}from"./vue.esm-bundler-BSyvBTC9.js";import{F as $}from"./FSAutocompleteField-DYa8eseR.js";import{F as h}from"./FSButton-CzT4qk-w.js";import{F as q}from"./FSImage-VV4rkzPN.js";import{u as D}from"./useModels-CC0e6xPB.js";import{u as B}from"./useAutocomplete-BLpvFch6.js";import{u as N}from"./useTranslations-CdSqQFV3.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-DZA6pxA1.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-DvdcLDtW.js";import"./color--o2QfpAv.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./VIcon-BQIm0b3J.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-C8KBePTS.js";import"./VProgressCircular-D09FP1rk.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-Bh07lE_k.js";import"./FSCard-CiUY3jF9.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSCheckbox-M73AcfXp.js";import"./FSIcon-BVNp7pcM.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader--MJuLA8w.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./filter-DuGNEgHB.js";import"./FSClickable-D0EdtzT9.js";import"./FSImageUI-NfwyqzmC.js";import"./useImages-H1Zoj8aR.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:$,FSButton:h,FSImage:q},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:d,entities:a}=D(),{$tr:p}=N(),l=u(()=>A.value&&d.value),i=u(()=>e.multiple&&e.modelValue?p("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:s,init:A,onUpdate:V}=B(a,[()=>e.modelFilters],o,t);return{placeholder:i,toggleSet:s,loading:l,models:a,onUpdate:V}}});function U(e,o,n,d,a,p){const l=g("FSImage"),i=g("FSAutocompleteField");return c(),f(i,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId},null,8,["imageId"])):k("",!0)]),"toggle-set-item":m(t=>[v(h,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:_(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},x({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,S,b;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const pt=["Variations"];export{r as Variations,pt as __namedExportsOrder,dt as default};
