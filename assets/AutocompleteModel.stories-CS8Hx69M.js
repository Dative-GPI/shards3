import{d as w,c as s,A as g,B as c,D as m,j as I,I as f,G as $,P as b,C as k,E as q}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as x}from"./FSAutocompleteField-DJKWDuqJ.js";import{F}from"./FSButton-BDSx2V0J.js";import{F as D}from"./FSImage-CRET8ZWw.js";import{u as _}from"./useModels-BgpeUGPd.js";import{u as B}from"./useAutocomplete-BnDWNIS6.js";import{u as j}from"./useTranslations-DJOHKWsD.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-D35grUmj.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./FSIcon-BwW5Hq8i.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSImageUI-C9-ibhOt.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./composableFactory-K8W9GIHH.js";import"./useAppAuthToken-CJrsyj37.js";import"./base-KmQLDroH.js";import"./useAppOrganisationId-C2_s9Mh4.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:x,FSButton:F,FSImage:D},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:n,fetching:d,entities:a}=_(),{$tr:p}=j(),o=s(()=>A.value&&d.value),i=s(()=>e.multiple&&e.modelValue?p("autocomplete.model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:u,init:A,onUpdate:V}=B(a,[()=>e.modelFilters],l,t);return{placeholder:i,toggleSet:u,loading:o,models:a,onUpdate:V}}});function T(e,l,n,d,a,p){const o=g("FSImage"),i=g("FSAutocompleteField");return f(),c(i,I({label:e.$props.label??e.$tr("ui.common.model","Model"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(f(),c(o,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):$("",!0)]),"toggle-set-item":m(t=>[b(F,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[b(o,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=N(y,[["render",T]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteModel:M,FSCol:O},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,h,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const ct=["Variations"];export{r as Variations,ct as __namedExportsOrder,gt as default};
