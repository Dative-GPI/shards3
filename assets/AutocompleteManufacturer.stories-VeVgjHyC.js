var M=Object.defineProperty;var y=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>y(e,typeof t!="symbol"?t+"":t,o);import{d as h,c as A,y as C,z as V,A as _,m as w}from"./vue.esm-bundler-DC82FEWN.js";import{F as U}from"./FSAutocompleteField-CK57bNbc.js";import{C as $}from"./base-CMiH1YbJ.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as D}from"./composableFactory-J8cSLWf9.js";import{u as k}from"./useAutocomplete-uiNKeslv.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-sPgh0iq3.js";import"./FSTextField-bXs3PVLb.js";import"./FSBaseField-DtfOMQi_.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-CErFNXJM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DMal9AfS.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSButton-Qg63Bn8h.js";import"./FSClickable-DvDb5RUi.js";import"./FSCard-dcNQ4DyO.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./FSIcon-B9OmXzeb.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-u1Rr1MXd.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-ClSQfpFl.js";import"./FSRadio-DcIxeyub.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-XQ9ofx8J.js";import"./FSSlideGroup-C2ZnN_TW.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-DnF3o7c5.js";import"./FSCheckbox-CtyYVD5k.js";import"./FSFadeOut-XCSRvsBX.js";import"./FSLoader-DpJez1Wf.js";import"./elevation-xgrzvMGW.js";import"./VSelect-BFD7teB3.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){r(this,"id");r(this,"imageId");r(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class N extends c{constructor(o){super(o);r(this,"description");this.description=o.description}}const d=()=>`${$()}/manufacturers`,O=e=>`${d()}/${encodeURIComponent(e)}`,T=new R("manufacturer",N).create(e=>e.build(e.addGet(O),e.addGetMany(d,c),e.addNotify())),E=D.getMany(T),f=h({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:U},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:l}=E(),i=b=>o({...e.manufacturerFilters,search:b??void 0}),{toggleSet:n,init:F,onUpdate:S}=k(l,[()=>e.manufacturerFilters],t,i),v=A(()=>F.value&&u.value);return{manufacturers:l,toggleSet:n,loading:v,onUpdate:S}}});function j(e,t,o,u,l,i){const n=C("FSAutocompleteField");return V(),_(n,w({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=q(f,[["render",j]]);f.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(s=(p=a.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const it=["Variations"];export{a as Variations,it as __namedExportsOrder,ut as default};
