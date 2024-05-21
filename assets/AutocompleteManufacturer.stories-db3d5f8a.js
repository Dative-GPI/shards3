import{j as b,e as h,I as M,J as y,K as A,B as C}from"./vue.esm-bundler-7c237656.js";import{F as V}from"./FSAutocompleteField-3e0e956b.js";import{C as _}from"./base-cc0281c0.js";import{S as w}from"./serviceFactory-7552fe10.js";import{C as U}from"./composableFactory-08360cd4.js";import{u as $}from"./useAutocomplete-c9cb8b74.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as D}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./FSRow-0e15f868.js";import"./css-aa928277.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./VProgressCircular-4299d8b4.js";import"./color-8a2bce37.js";import"./useRender-e0e7d9de.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./FSIcon-5ad13b7e.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-da06ce33.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./VSelect-735dad66.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./VMenu-2484e62c.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";import"./filter-9f13a693.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";class p{constructor(t){this.id=t.id,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.label=t.label}}class k extends p{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,B=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,p),e.addNotify())),I=U.getMany(B),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=I(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:f,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=h(()=>f.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function N(e,t,l,n,r,u){const a=M("FSAutocompleteField");return y(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const g=R(d,[["render",N]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ze={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:g,FSCol:D},props:Object.keys(t),setup(){return{...e}},template:`
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
