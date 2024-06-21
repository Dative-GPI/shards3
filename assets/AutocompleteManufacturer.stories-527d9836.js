import{f as b,g as M,D as h,E as y,F as A,x as C}from"./vue.esm-bundler-a0893183.js";import{F as V}from"./FSAutocompleteField-71836b5a.js";import{C as _}from"./base-168b8f74.js";import{S as w}from"./serviceFactory-2dfad3af.js";import{C as U}from"./composableFactory-2d4a69cc.js";import{u as $}from"./useAutocomplete-cc546bbe.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as R}from"./FSCol-e45ac157.js";import"./FSSearchField-4585c5ac.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./FSSpan-4daadeb4.js";import"./useSlots-d5b57407.js";import"./FSRow-821d23a1.js";import"./css-03aed76d.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./FSIcon-9d61ed62.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";class s{constructor(t){this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class k extends s{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,E=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,s),e.addNotify())),I=U.getMany(E),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=I(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:g,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=M(()=>g.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function N(e,t,l,n,r,u){const a=h("FSAutocompleteField");return y(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const f=D(d,[["render",N]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:f,FSCol:R},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["Variations"];export{o as Variations,it as __namedExportsOrder,ut as default};
