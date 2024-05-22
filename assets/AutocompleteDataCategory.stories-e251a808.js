import{j as R,e as q,I as O,J as d,K as c,L as a,B as T,A as l,O as n,P as m,N as v,Q as U,R as N,_ as B}from"./vue.esm-bundler-01006032.js";import{F as E}from"./FSAutocompleteField-c1dfb31d.js";import{F as h}from"./FSCheckbox-40e0c55f.js";import{F as A}from"./FSButton-be94d44f.js";import{_ as g}from"./FSIcon-15b738c8.js";import{_ as f}from"./FSSpan-6e79caf3.js";import{_ as C}from"./FSRow-83e75060.js";import{C as L}from"./base-d6256dbd.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as G}from"./composableFactory-25aa3ef9.js";import{u as M}from"./useAutocomplete-3cb054e4.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-450b500f.js";import{_ as z}from"./FSCol-c97fad61.js";import"./FSToggleSet-be653781.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./useSlots-e0d7ab7c.js";import"./css-279a0029.js";import"./VSlideGroup-e0f01fc0.js";import"./index-491d6eb9.js";import"./useRender-4bcbb6ac.js";import"./display-77f43728.js";import"./goto-9bab4060.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./group-e9c3615d.js";import"./tag-1f5f74bd.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./FSWrapGroup-83a13764.js";import"./VInput-50bb839f.js";import"./transition-9c7eb302.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./VField-f1a9daf9.js";import"./VSpacer-78b81ef3.js";import"./VLabel-f27c70ae.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useRules-54978858.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./filter-9717b913.js";import"./VMenu-4c05ddd6.js";import"./VOverlay-d4d3a71f.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./VSelectionControl-3e964160.js";import"./index-89394051.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./useAppOrganisationId-2267e850.js";import"./lodash-569b8a6d.js";import"./useDebounce-ff82ad1d.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";class V{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class J extends V{constructor(o){super(o)}}const k=()=>`${L()}/data-categories`,K=e=>`${k()}/${encodeURIComponent(e)}`,Q=new j("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany(k,V),e.addNotify())),Y=G.getMany(Q),w=R({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:E,FSCheckbox:h,FSButton:A,FSIcon:g,FSSpan:f,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:y,fetching:S,entities:p}=Y(),F=q(()=>r.value&&S.value),u=I=>y({...e.dataCategoriesFilters,search:I??void 0}),{toggleSet:t,init:r,onUpdate:i}=M(p,[()=>e.dataCategoriesFilters],o,u);return{dataCategories:p,toggleSet:t,loading:F,onUpdate:i}}});function H(e,o,y,S,p,F){const u=O("FSAutocompleteField");return d(),c(u,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(d(),c(C,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(g,null,{default:a(()=>[n(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(t.raw.label),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),"autocomplete-item":a(({props:t,item:r})=>[l(x,U(N({...t,title:""})),{default:a(()=>[l(C,{align:"center-left",wrap:!1},{default:a(()=>{var i;return[e.$props.multiple?(d(),c(h,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(r.value),onClick:t.onClick},null,8,["modelValue","onClick"])):v("",!0),l(g,null,{default:a(()=>[n(m(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":a(t=>[l(A,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:B(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(w,[["render",H]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:$,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,D,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ft=["Variations"];export{s as Variations,ft as __namedExportsOrder,gt as default};
