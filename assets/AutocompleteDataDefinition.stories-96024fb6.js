import{j as T,e as U,I as S,J as F,K as v,L as o,A as I,z as l,S as n,U as s,N as R,W as q,X as N}from"./vue.esm-bundler-3386cb71.js";import{F as O}from"./FSAutocompleteField-c07b5f3c.js";import{F as E}from"./FSText-81a21680.js";import{C as L}from"./base-4e5ccaa5.js";import{S as j}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-0f23559b.js";import{u as B}from"./useAutocomplete-e0c21e85.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{F as M}from"./FSCheckbox-8b71851a.js";import{_ as D}from"./FSIcon-d790d92f.js";import{_ as g}from"./FSRow-9733beba.js";import{c as P}from"./VSelect-748790cd.js";import{_ as z}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./css-bcfd232c.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./filter-a78161c9.js";import"./VMenu-e9f9429e.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./index-dcfb76a3.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";class _{constructor(t){this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class J extends _{constructor(t){super(t)}}const V=()=>`${L()}/data-categories`,K=e=>`${V()}/${encodeURIComponent(e)}`,W=new j("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany(V,_),e.addNotify())),X=x.getMany(W),w=T({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSText:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:c,fetching:f,entities:p}=X(),y=d=>c({...e.dataCategoriesFilters,search:d??void 0}),{toggleSet:i,search:u,init:a,onUpdate:r}=B(p,[()=>e.dataCategoriesFilters],t,y),$=U(()=>a.value&&f.value);return{dataCategories:p,toggleSet:i,loading:$,search:u,onUpdate:r,isSelected:d=>{var C;return(C=e.modelValue)==null?void 0:C.includes(d)}}}});function Y(e,t,c,f,p,y){const i=S("FSText"),u=S("FSAutocompleteField");return F(),v(u,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dataCategories,multiple:e.$props.multiple,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(g,{align:"center-center",wrap:!1,gap:0},{default:o(()=>[l(i,null,{default:o(()=>[n(s(a.raw.label),1)]),_:2},1024),l(D,null,{default:o(()=>[n(s(a.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,q(N({...a,title:""})),{default:o(()=>[l(g,{align:"center-left"},{default:o(()=>[e.$props.multiple?(F(),v(M,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):R("",!0),l(g,{gap:2},{default:o(()=>[l(i,null,{default:o(()=>[n(s(r.raw.label),1)]),_:2},1024),l(D,null,{default:o(()=>[n(s(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const k=G(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:k,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,h,A;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(A=(h=m.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const ft=["Variations"];export{m as Variations,ft as __namedExportsOrder,ct as default};
