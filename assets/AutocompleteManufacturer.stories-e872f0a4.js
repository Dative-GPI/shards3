import{j as b,e as h,I as M,J as y,K as A,B as C}from"./vue.esm-bundler-857e5af7.js";import{F as V}from"./FSAutocompleteField-85bc039c.js";import{C as _}from"./base-0cefeb30.js";import{S as w}from"./serviceFactory-7552fe10.js";import{C as U}from"./composableFactory-64294cb0.js";import{u as $}from"./useAutocomplete-ecc57bef.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as D}from"./FSCol-439c812a.js";import"./FSToggleSet-d37d9311.js";import"./FSSlideGroup-5383341a.js";import"./FSButtonNextIcon-32c0573f.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./FSRow-e30f1dcc.js";import"./css-ab2bdb81.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./VProgressCircular-b85c805e.js";import"./color-3025502c.js";import"./useRender-1606c976.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./FSIcon-d0ab000b.js";import"./VSlideGroup-09af52b3.js";import"./index-900eb6c5.js";import"./display-cdda29b9.js";import"./goto-9c8518f8.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./group-db11312a.js";import"./FSWrapGroup-79594a2b.js";import"./VInput-7e8bc521.js";import"./transition-8ae71e6c.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./VField-05970d63.js";import"./VSpacer-2ef0dee2.js";import"./VLabel-5378811f.js";import"./loader-c881e63b.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-54879197.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./index-1a539509.js";import"./FSLoader-da23fb58.js";import"./elevation-c9d86896.js";import"./VSelect-aabfcd61.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./VOverlay-e7c006b1.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./VMenu-1d4626f8.js";import"./ssrBoot-4aec2e0b.js";import"./border-adb63d5e.js";import"./VImg-617a4396.js";import"./VDivider-54e4b012.js";import"./filter-621d2885.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./useDebounce-3221123d.js";class p{constructor(t){this.id=t.id,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.label=t.label}}class k extends p{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,B=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,p),e.addNotify())),I=U.getMany(B),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=I(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:f,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=h(()=>f.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function N(e,t,l,n,r,u){const a=M("FSAutocompleteField");return y(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=R(d,[["render",N]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ze={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:D},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const et=["Variations"];export{o as Variations,et as __namedExportsOrder,Ze as default};
