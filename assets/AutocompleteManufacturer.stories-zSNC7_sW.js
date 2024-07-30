var M=Object.defineProperty;var y=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>y(e,typeof t!="symbol"?t+"":t,o);import{d as h,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DC82FEWN.js";import{F as U}from"./FSAutocompleteField-C8tjXrwd.js";import{C as $}from"./base-CMiH1YbJ.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as D}from"./composableFactory-J8cSLWf9.js";import{u as k}from"./useAutocomplete-Cvn9mcKc.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-HaaZVsOH.js";import"./FSTextField-uaKNMDZM.js";import"./FSBaseField-RlaDM_f_.js";import"./FSSpan-CDy62Qe5.js";import"./useSlots-Du4GeqS9.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-CSwgTlUg.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSIcon-ClfMDAJS.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-pfqo0k-B.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-D_qVpvkn.js";import"./FSRadio-C4kJzDSZ.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-gQQlDcZj.js";import"./FSSlideGroup-BZm7dyIN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-ZxSHlvE5.js";import"./FSCheckbox-C0VkP5Zl.js";import"./FSFadeOut-CvvHY5il.js";import"./FSLoader-06X_hY2B.js";import"./elevation-BTkUCD39.js";import"./VSelect-CxkKhcc4.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){r(this,"id");r(this,"imageId");r(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class N extends c{constructor(o){super(o);r(this,"description");this.description=o.description}}const d=()=>`${$()}/manufacturers`,O=e=>`${d()}/${encodeURIComponent(e)}`,T=new R("manufacturer",N).create(e=>e.build(e.addGet(O),e.addGetMany(d,c),e.addNotify())),E=D.getMany(T),f=h({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:U},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:l}=E(),i=A(()=>v.value&&u.value),n=b=>o({...e.manufacturerFilters,search:b??void 0}),{toggleSet:S,init:v,onUpdate:F}=k(l,[()=>e.manufacturerFilters],t,n);return{manufacturers:l,toggleSet:S,loading:i,onUpdate:F}}});function j(e,t,o,u,l,i){const n=C("FSAutocompleteField");return V(),_(n,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=q(f,[["render",j]]);f.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const nt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var m,p,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSAutocompleteManufacturer,
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
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(s=(p=a.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const ut=["Variations"];export{a as Variations,ut as __namedExportsOrder,nt as default};
