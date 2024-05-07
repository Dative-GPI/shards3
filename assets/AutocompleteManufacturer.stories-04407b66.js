import{j as b,e as h,I as M,J as y,K as A,B as C}from"./vue.esm-bundler-41eda46b.js";import{F as V}from"./FSAutocompleteField-d788c579.js";import{C as _}from"./base-72a78366.js";import{S as w}from"./serviceFactory-7552fe10.js";import{C as U}from"./composableFactory-00c2f0ee.js";import{u as $}from"./useAutocomplete-a7c26244.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as D}from"./FSCol-282cc158.js";import"./FSToggleSet-ddc99f4f.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./FSButton-cdb730f5.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./FSRow-1508d56d.js";import"./css-35e8563f.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./VProgressCircular-e304a31d.js";import"./color-7b12579a.js";import"./useRender-b120e115.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./tag-585bbcbd.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-6dc797d3.js";import"./VSlideGroup-d28ddfe3.js";import"./index-ad5199eb.js";import"./display-40264291.js";import"./goto-e7ba55f0.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./group-53103ce4.js";import"./FSWrapGroup-8ef956e3.js";import"./VInput-1f6e9963.js";import"./transition-87ba966b.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./VField-7c3f9689.js";import"./VSpacer-b889274d.js";import"./VLabel-674db0eb.js";import"./loader-912691d5.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-9aa0fdbb.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-6bfa0431.js";import"./index-35b22454.js";import"./FSLoader-b9d57263.js";import"./elevation-74b749d9.js";import"./VSelect-994061f1.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./VOverlay-aedbdfa0.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./VMenu-40d1577e.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";import"./filter-fb6ce324.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";class p{constructor(t){this.id=t.id,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.label=t.label}}class k extends p{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,B=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,p),e.addNotify())),I=U.getMany(B),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=I(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:f,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=h(()=>f.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function N(e,t,l,n,r,u){const a=M("FSAutocompleteField");return y(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=R(d,[["render",N]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ye={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:D},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Ze=["Variations"];export{o as Variations,Ze as __namedExportsOrder,Ye as default};
