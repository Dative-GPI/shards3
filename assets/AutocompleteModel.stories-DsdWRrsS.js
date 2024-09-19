import{d as w,c as u,z as g,A as c,B as f,C as m,m as I,E as k,v,M as x,P as _}from"./vue.esm-bundler-BwDfg4wG.js";import{F as $}from"./FSAutocompleteField-BJE5Iw2_.js";import{F as h}from"./FSButton-jJkg4qCi.js";import{F as q}from"./FSImage-CtdLuckH.js";import{u as D}from"./useModels-CcW6E0kS.js";import{u as B}from"./useAutocomplete-CQJJiztf.js";import{u as N}from"./useTranslations-CHmpEDXr.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-BEvj3we4.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./FSIcon-ChaYv6Le.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSImageUI-BAdgvYuR.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:$,FSButton:h,FSImage:q},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:d,entities:a}=D(),{$tr:p}=N(),l=u(()=>A.value&&d.value),i=u(()=>e.multiple&&e.modelValue?p("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:s,init:A,onUpdate:V}=B(a,[()=>e.modelFilters],o,t);return{placeholder:i,toggleSet:s,loading:l,models:a,onUpdate:V}}});function U(e,o,n,d,a,p){const l=g("FSImage"),i=g("FSAutocompleteField");return c(),f(i,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId},null,8,["imageId"])):k("",!0)]),"toggle-set-item":m(t=>[v(h,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:_(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},x({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(o),setup(){return{...e}},template:`
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
