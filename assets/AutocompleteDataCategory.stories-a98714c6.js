import{f as R,g as q,D as T,E as d,F as g,G as a,A as U,P as l,K as n,L as m,I as v,R as O,S as E,X as N}from"./vue.esm-bundler-f632b118.js";import{F as B}from"./FSAutocompleteField-ff78314e.js";import{F as _}from"./FSCheckbox-5ebd306d.js";import{F as A}from"./FSButton-1e8cfafa.js";import{_ as c}from"./FSIcon-110a991e.js";import{_ as f}from"./FSSpan-4ac1bb71.js";import{_ as C}from"./FSRow-76f4ad1e.js";import{C as G}from"./base-dd7352d9.js";import{S as L}from"./serviceFactory-2dfad3af.js";import{C as M}from"./composableFactory-0b8943d1.js";import{u as P}from"./useAutocomplete-a7e2bf25.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-00399f8e.js";import{_ as z}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./FSClickable-af644c0d.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";class V{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class K extends V{constructor(o){super(o)}}const k=()=>`${G()}/data-categories`,X=e=>`${k()}/${encodeURIComponent(e)}`,Y=new L("dataCategory",K).create(e=>e.build(e.addGet(X),e.addGetMany(k,V),e.addNotify())),H=M.getMany(Y),w=R({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:B,FSCheckbox:_,FSButton:A,FSIcon:c,FSSpan:f,FSRow:C},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:y,fetching:S,entities:p}=H(),F=q(()=>r.value&&S.value),u=I=>y({...e.dataCategoriesFilters,search:I??void 0}),{toggleSet:t,init:r,onUpdate:i}=P(p,[()=>e.dataCategoriesFilters],o,u);return{dataCategories:p,toggleSet:t,loading:F,onUpdate:i}}});function J(e,o,y,S,p,F){const u=T("FSAutocompleteField");return d(),g(u,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(d(),g(C,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(c,null,{default:a(()=>[n(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(t.raw.label),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),"autocomplete-item":a(({props:t,item:r})=>[l(x,O(E({...t,title:""})),{default:a(()=>[l(C,{align:"center-left",wrap:!1},{default:a(()=>{var i;return[e.$props.multiple?(d(),g(_,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(r.value),onClick:t.onClick},null,8,["modelValue","onClick"])):v("",!0),l(c,null,{default:a(()=>[n(m(r.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(f,null,{default:a(()=>[n(m(r.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":a(t=>[l(A,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:N(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=j(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:$,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,D,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const vt=["Variations"];export{s as Variations,vt as __namedExportsOrder,Ft as default};
