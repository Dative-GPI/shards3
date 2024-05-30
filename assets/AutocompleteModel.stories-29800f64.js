import{f as F,g as M,I as h,J as y,K as A,B as C}from"./vue.esm-bundler-cd768bc3.js";import{F as V}from"./FSAutocompleteField-a91182a5.js";import{C as _}from"./base-a00c89a9.js";import{S as w}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-c82cc213.js";import{u as $}from"./useAutocomplete-b3d8bfa7.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-ff457bc3.js";import"./FSToggleSet-faa5cb35.js";import"./FSSlideGroup-1f11aa53.js";import"./FSButtonNextIcon-e4aac952.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./FSRow-1d7c2545.js";import"./css-c2ea3b68.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./VProgressCircular-d119fa09.js";import"./color-4e667524.js";import"./useRender-d216bc3f.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-95cdbe21.js";import"./tag-f5ad2c5e.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./FSIcon-5671b33c.js";import"./uuid-08309875.js";import"./VSlideGroup-22f87886.js";import"./index-b97c70d5.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./VSlideGroupItem-27057095.js";import"./FSWrapGroup-c7ff7fff.js";import"./VInput-28424714.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./VLabel-ac265b88.js";import"./loader-e29f326e.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-ff78bc14.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-c69cb5d8.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-650165ff.js";import"./index-f4fa4c36.js";import"./FSLoader-bd777dc8.js";import"./elevation-7537bf82.js";import"./VSelect-1b324382.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./VOverlay-5f00a78b.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VMenu-2bc21026.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";import"./filter-16d28c7b.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";class p{constructor(o){this.id=o.id,this.manufacturerId=o.manufacturerId,this.manufacturerLabel=o.manufacturerLabel,this.imageId=o.imageId,this.code=o.code,this.label=o.label,this.connectable=o.connectable}}class k extends p{constructor(o){super(o)}}const u=()=>`${_()}/models`,L=e=>`${u()}/${encodeURIComponent(e)}`,O=new w("model",k).create(e=>e.build(e.addGet(L),e.addGetMany(u,p),e.addNotify())),q=D.getMany(O),c=F({name:"FSAutocompleteModel",components:{FSAutocompleteField:V},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:i,entities:l}=q(),a=M(()=>S.value&&i.value),r=v=>n({...e.modelFilters,search:v??void 0}),{toggleSet:f,init:S,onUpdate:b}=$(l,[()=>e.modelFilters],o,r);return{models:l,toggleSet:f,loading:a,onUpdate:b}}});function R(e,o,n,i,l,a){const r=h("FSAutocompleteField");return y(),A(r,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue"])}const g=I(c,[["render",R]]);c.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const to={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:g,FSCol:U},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var m,s,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const lo=["Variations"];export{t as Variations,lo as __namedExportsOrder,to as default};
