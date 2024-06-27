var M=Object.defineProperty;var h=(e,o,l)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>h(e,typeof o!="symbol"?o+"":o,l);import{d as y,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DeSao-KJ.js";import{F as D}from"./FSAutocompleteField-x_JtRRgp.js";import{C as $}from"./base-Db9bJp6t.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as L}from"./composableFactory-rrf4GM2L.js";import{u as U}from"./useAutocomplete-CRHnexwL.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-DIJrv_rZ.js";import"./FSTextField-DcylO4Ix.js";import"./VField-Co5iQQII.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./FSRow-JJutUvlP.js";import"./css-BnhLLynS.js";import"./useColors-DixhtSsC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-DlonWgHu.js";import"./FSClickable-BuZ1ROym.js";import"./FSCard-BI902FIA.js";import"./FSIcon-_c5Dh2GS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-kG51AMCi.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-DD6U7QF3.js";import"./FSRadio-Bfdb_qO3.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-CMcjupMf.js";import"./FSSlideGroup-DZHcsT0s.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-Czg4FRXn.js";import"./FSCheckbox-CXgNkeco.js";import"./FSFadeOut--puemKM4.js";import"./FSLoader-CiRK32s-.js";import"./elevation-BBJMtRPf.js";import"./VSelect-DMBRUm7v.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class u{constructor(o){t(this,"id");t(this,"manufacturerId");t(this,"manufacturerLabel");t(this,"imageId");t(this,"code");t(this,"label");t(this,"connectable");this.id=o.id,this.manufacturerId=o.manufacturerId,this.manufacturerLabel=o.manufacturerLabel,this.imageId=o.imageId,this.code=o.code,this.label=o.label,this.connectable=o.connectable}}class q extends u{constructor(o){super(o)}}const c=()=>`${$()}/models`,R=e=>`${c()}/${encodeURIComponent(e)}`,E=new I("model",q).create(e=>e.build(e.addGet(R),e.addGetMany(c,u),e.addNotify())),j=L.getMany(E),g=y({name:"FSAutocompleteModel",components:{FSAutocompleteField:D},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:a,entities:n}=j(),m=A(()=>S.value&&a.value),i=F=>l({...e.modelFilters,search:F??void 0}),{toggleSet:b,init:S,onUpdate:v}=U(n,[()=>e.modelFilters],o,i);return{models:n,toggleSet:b,loading:m,onUpdate:v}}});function x(e,o,l,a,n,m){const i=C("FSAutocompleteField");return V(),_(i,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const f=k(g,[["render",x]]);g.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const po={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:f,FSCol:O},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(s=(p=r.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const so=["Variations"];export{r as Variations,so as __namedExportsOrder,po as default};
