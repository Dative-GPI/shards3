var M=Object.defineProperty;var h=(e,o,l)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>h(e,typeof o!="symbol"?o+"":o,l);import{d as y,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DC82FEWN.js";import{F as D}from"./FSAutocompleteField-CjNLkCyT.js";import{C as $}from"./base-CMiH1YbJ.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as L}from"./composableFactory-J8cSLWf9.js";import{u as U}from"./useAutocomplete-CPLeARdk.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B6goAqn0.js";import"./FSTextField-BJOz_lKI.js";import"./FSBaseField-Capz3MEE.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSButton-Do7vvvNJ.js";import"./FSClickable-BbRY9BmN.js";import"./FSCard-PwHP1R85.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./FSIcon-CBfle4ZR.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-HS8EKdqs.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-CZQzAP6z.js";import"./FSRadio-DgEWe4FI.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-BbIEkiIE.js";import"./FSSlideGroup-CtkZI_Rf.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-Cfxg56QW.js";import"./FSCheckbox-BxKP35TB.js";import"./FSFadeOut-BxczCLJY.js";import"./FSLoader-8B7k5XDA.js";import"./elevation-xgrzvMGW.js";import"./VSelect-DPrB_5mV.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class u{constructor(o){t(this,"id");t(this,"manufacturerId");t(this,"manufacturerLabel");t(this,"imageId");t(this,"code");t(this,"label");t(this,"connectable");this.id=o.id,this.manufacturerId=o.manufacturerId,this.manufacturerLabel=o.manufacturerLabel,this.imageId=o.imageId,this.code=o.code,this.label=o.label,this.connectable=o.connectable}}class q extends u{constructor(o){super(o)}}const c=()=>`${$()}/models`,R=e=>`${c()}/${encodeURIComponent(e)}`,E=new I("model",q).create(e=>e.build(e.addGet(R),e.addGetMany(c,u),e.addNotify())),j=L.getMany(E),g=y({name:"FSAutocompleteModel",components:{FSAutocompleteField:D},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:a,entities:n}=j(),m=A(()=>S.value&&a.value),i=F=>l({...e.modelFilters,search:F??void 0}),{toggleSet:b,init:S,onUpdate:v}=U(n,[()=>e.modelFilters],o,i);return{models:n,toggleSet:b,loading:m,onUpdate:v}}});function x(e,o,l,a,n,m){const i=C("FSAutocompleteField");return V(),_(i,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const f=k(g,[["render",x]]);g.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ao={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:f,FSCol:O},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var d,p,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(s=(p=r.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const mo=["Variations"];export{r as Variations,mo as __namedExportsOrder,ao as default};
