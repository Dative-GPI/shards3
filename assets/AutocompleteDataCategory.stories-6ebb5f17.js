import{j as U,e as b,I as q,J as g,K as c,L as o,B as T,A as l,S as m,U as p,N as D,W as N,X as O}from"./vue.esm-bundler-3416a090.js";import{F as B}from"./FSAutocompleteField-a04215fa.js";import{F as V}from"./FSCheckbox-422b3b91.js";import{_ as f}from"./FSIcon-f518d728.js";import{_ as y}from"./FSSpan-b519c994.js";import{_ as C}from"./FSRow-5edf997c.js";import{C as E}from"./base-9a568e22.js";import{S as L}from"./serviceFactory-7552fe10.js";import{C as j}from"./composableFactory-8605555f.js";import{u as G}from"./useAutocomplete-ca462ffd.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSelect-f25e0916.js";import{_ as x}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./css-69ed11d9.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./useSlots-7472d1e2.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./filter-d102117b.js";import"./VMenu-39a0be1f.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";import"./useDebounce-736cfd0a.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";class w{constructor(t){this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class z extends w{constructor(t){super(t)}}const k=()=>`${E()}/data-categories`,J=e=>`${k()}/${encodeURIComponent(e)}`,K=new L("dataCategory",z).create(e=>e.build(e.addGet(J),e.addGetMany(k,w),e.addNotify())),W=j.getMany(K),I=U({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:B,FSCheckbox:V,FSIcon:f,FSSpan:y,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:S,fetching:F,entities:n}=W(),v=b(()=>s.value&&F.value),d=b(()=>n.value.map(i=>({id:i.id,prependIcon:i.correlated?"mdi-link":"mdi-link-off",label:i.label}))),a=i=>S({...e.dataCategoriesFilters,search:i??void 0}),{toggleSet:r,init:s,onUpdate:R}=G(n,[()=>e.dataCategoriesFilters],t,a);return{dataCategories:n,toggleSetItems:d,toggleSet:r,loading:v,onUpdate:R}}});function X(e,t,S,F,n,v){const d=q("FSAutocompleteField");return g(),c(d,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,toggleSetItems:e.toggleSetItems,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(g(),c(C,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(f,null,{default:o(()=>[m(p(a.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(y,null,{default:o(()=>[m(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):D("",!0)]),"autocomplete-item":o(({props:a,item:r})=>[l(P,N(O({...a,title:""})),{default:o(()=>[l(C,{align:"center-left"},{default:o(()=>{var s;return[e.$props.multiple?(g(),c(V,{key:0,modelValue:(s=e.$props.modelValue)==null?void 0:s.includes(r.value)},null,8,["modelValue"])):D("",!0),l(f,null,{default:o(()=>[m(p(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(y,null,{default:o(()=>[m(p(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","toggleSetItems","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=M(I,[["render",X]]);I.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:$,FSCol:x},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,_,A;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      FSAutocompleteDataCategory,
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
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const dt=["Variations"];export{u as Variations,dt as __namedExportsOrder,ut as default};
