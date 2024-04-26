import{j as F,e as M,I as y,J as A,K as C,A as V}from"./vue.esm-bundler-3386cb71.js";import{F as w}from"./FSAutocompleteField-c07b5f3c.js";import{C as D}from"./base-4e5ccaa5.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-0f23559b.js";import{u as U}from"./useAutocomplete-e0c21e85.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as k}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSRow-9733beba.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VSelect-748790cd.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VMenu-e9f9429e.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./index-dcfb76a3.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./filter-a78161c9.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";class u{constructor(t){this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class L extends u{constructor(t){super(t)}}const c=()=>`${D()}/models`,O=e=>`${c()}/${encodeURIComponent(e)}`,q=new _("model",L).create(e=>e.build(e.addGet(O),e.addGetMany(c,u),e.addNotify())),B=$.getMany(q),g=F({name:"FSAutocompleteModel",components:{FSAutocompleteField:w},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:n,fetching:a,entities:l}=B(),m=v=>n({...e.modelFilters,search:v??void 0}),{toggleSet:r,search:i,init:h,onUpdate:S}=U(l,[()=>e.modelFilters],t,m),b=M(()=>h.value&&a.value);return{models:l,toggleSet:r,loading:b,search:i,onUpdate:S}}});function R(e,t,n,a,l,m){const r=y("FSAutocompleteField");return A(),C(r,V({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=i=>e.search=i)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const f=I(g,[["render",R]]);g.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const Ye={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:f,FSCol:k},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var s,d,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const Ze=["Variations"];export{o as Variations,Ze as __namedExportsOrder,Ye as default};
