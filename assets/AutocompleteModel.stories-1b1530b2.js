import{j as h,e as F,I as M,J as y,K as A,B as C}from"./vue.esm-bundler-3416a090.js";import{F as V}from"./FSAutocompleteField-a04215fa.js";import{C as _}from"./base-9a568e22.js";import{S as w}from"./serviceFactory-7552fe10.js";import{C as D}from"./composableFactory-8605555f.js";import{u as I}from"./useAutocomplete-ca462ffd.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./FSRow-5edf997c.js";import"./css-69ed11d9.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./FSIcon-f518d728.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-422b3b91.js";import"./useRules-5e1988ee.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./VSelect-f25e0916.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VMenu-39a0be1f.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";import"./filter-d102117b.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";import"./useDebounce-736cfd0a.js";class p{constructor(t){this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.imageBlurHash=t.imageBlurHash,this.imageHeight=t.imageHeight,this.imageWidth=t.imageWidth,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class k extends p{constructor(t){super(t)}}const u=()=>`${_()}/models`,L=e=>`${u()}/${encodeURIComponent(e)}`,O=new w("model",k).create(e=>e.build(e.addGet(L),e.addGetMany(u,p),e.addNotify())),q=D.getMany(O),c=h({name:"FSAutocompleteModel",components:{FSAutocompleteField:V},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:l}=q(),a=F(()=>S.value&&n.value),r=v=>i({...e.modelFilters,search:v??void 0}),{toggleSet:f,init:S,onUpdate:b}=I(l,[()=>e.modelFilters],t,r);return{models:l,toggleSet:f,loading:a,onUpdate:b}}});function B(e,t,i,n,l,a){const r=M("FSAutocompleteField");return y(),A(r,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,toggleSetItems:e.models,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","toggleSetItems","loading","items","modelValue","onUpdate:modelValue"])}const g=$(c,[["render",B]]);c.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const Ye={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:g,FSCol:U},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var m,s,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Ze=["Variations"];export{o as Variations,Ze as __namedExportsOrder,Ye as default};
