var M=Object.defineProperty;var y=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>y(e,typeof t!="symbol"?t+"":t,o);import{d as h,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DC82FEWN.js";import{F as U}from"./FSAutocompleteField-9Z77q9u9.js";import{C as $}from"./base-CMiH1YbJ.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as D}from"./composableFactory-J8cSLWf9.js";import{u as k}from"./useAutocomplete-CCZg0XDc.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-cgjePGb6.js";import"./FSClickable-CvEctr0N.js";import"./FSCard-TPuCZi-6.js";import"./FSIcon-CqTsM4Lx.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){r(this,"id");r(this,"imageId");r(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class N extends c{constructor(o){super(o);r(this,"description");this.description=o.description}}const d=()=>`${$()}/manufacturers`,O=e=>`${d()}/${encodeURIComponent(e)}`,T=new R("manufacturer",N).create(e=>e.build(e.addGet(O),e.addGetMany(d,c),e.addNotify())),E=D.getMany(T),f=h({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:U},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:l}=E(),i=b=>o({...e.manufacturerFilters,search:b??void 0}),{toggleSet:n,init:F,onUpdate:S}=k(l,[()=>e.manufacturerFilters],t,i),v=A(()=>F.value&&u.value);return{manufacturers:l,toggleSet:n,loading:v,onUpdate:S}}});function j(e,t,o,u,l,i){const n=C("FSAutocompleteField");return V(),_(n,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=q(f,[["render",j]]);f.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const nt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
