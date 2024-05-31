import{f as b,g as M,D as h,E as y,F as A,A as C}from"./vue.esm-bundler-838daa40.js";import{F as V}from"./FSAutocompleteField-730efa84.js";import{C as _}from"./base-ef43f4ed.js";import{S as w}from"./serviceFactory-2dfad3af.js";import{C as U}from"./composableFactory-5509dfbf.js";import{u as $}from"./useAutocomplete-f4f2ca8a.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as R}from"./FSCol-44fe82a9.js";import"./FSSearchField-fd4e58de.js";import"./FSTextField-5838a9fc.js";import"./VField-b5e232d6.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./FSRow-753b58e5.js";import"./css-67cfec15.js";import"./useColors-8c9c4d1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-b3e7898e.js";import"./FSClickable-104d21f2.js";import"./FSCard-b76495e8.js";import"./FSIcon-48205264.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-fb154c77.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-9a5da185.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-89f81a7c.js";import"./FSSlideGroup-9fadb36c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-d7904dc1.js";import"./FSCheckbox-884ec95b.js";import"./FSFadeOut-ce6cecc6.js";import"./FSLoader-d60b60c7.js";import"./elevation-c2192325.js";import"./VSelect-73f86563.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./filter-e8ac40d9.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";class s{constructor(t){this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class k extends s{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,E=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,s),e.addNotify())),I=U.getMany(E),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=I(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:g,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=M(()=>g.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function N(e,t,l,n,r,u){const a=h("FSAutocompleteField");return y(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const f=D(d,[["render",N]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:f,FSCol:R},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const nt=["Variations"];export{o as Variations,nt as __namedExportsOrder,lt as default};
