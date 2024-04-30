import{j as T,e as U,I as S,J as F,K as v,L as o,A as I,z as l,S as n,U as s,N as R,W as q,X as N}from"./vue.esm-bundler-82a4b45a.js";import{F as O}from"./FSAutocompleteField-61ca200a.js";import{F as E}from"./FSText-4ee7bf26.js";import{C as L}from"./base-ec6565f2.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-2f513de5.js";import{u as B}from"./useAutocomplete-14a2146a.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{F as M}from"./FSCheckbox-4b8da1d3.js";import{_ as D}from"./FSIcon-97799824.js";import{_ as g}from"./FSRow-2ccfd21b.js";import{c as P}from"./VSelect-fca10f65.js";import{_ as z}from"./FSCol-8326ac62.js";import"./FSButton-fa754e08.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./css-c39c4a6e.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-6b833922.js";import"./FSSlideGroup-8338acae.js";import"./FSButtonNextIcon-e9cfd47b.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./filter-4073c1af.js";import"./VMenu-9dbbffaa.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./index-0f4b4beb.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";class _{constructor(t){this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class J extends _{constructor(t){super(t)}}const V=()=>`${L()}/data-categories`,K=e=>`${V()}/${encodeURIComponent(e)}`,W=new j("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany(V,_),e.addNotify())),X=x.getMany(W),w=T({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSText:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:c,fetching:f,entities:p}=X(),y=d=>c({...e.dataCategoriesFilters,search:d??void 0}),{toggleSet:i,search:u,init:a,onUpdate:r}=B(p,[()=>e.dataCategoriesFilters],t,y),$=U(()=>a.value&&f.value);return{dataCategories:p,toggleSet:i,loading:$,search:u,onUpdate:r,isSelected:d=>{var C;return(C=e.modelValue)==null?void 0:C.includes(d)}}}});function Y(e,t,c,f,p,y){const i=S("FSText"),u=S("FSAutocompleteField");return F(),v(u,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dataCategories,multiple:e.$props.multiple,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(g,{align:"center-center",wrap:!1,gap:0},{default:o(()=>[l(i,null,{default:o(()=>[n(s(a.raw.label),1)]),_:2},1024),l(D,null,{default:o(()=>[n(s(a.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,q(N({...a,title:""})),{default:o(()=>[l(g,{align:"center-left"},{default:o(()=>[e.$props.multiple?(F(),v(M,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):R("",!0),l(g,{gap:2},{default:o(()=>[l(i,null,{default:o(()=>[n(s(r.raw.label),1)]),_:2},1024),l(D,null,{default:o(()=>[n(s(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const k=G(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:k,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
