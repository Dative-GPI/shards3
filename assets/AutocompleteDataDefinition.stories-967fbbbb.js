import{f as N,g as T,D as b,E as l,F as n,G as i,A as O,I as m,P as u,K as v,L as h,R,S as q,X as U}from"./vue.esm-bundler-f632b118.js";import{F as L}from"./FSAutocompleteField-ff78314e.js";import{F as _}from"./FSCheckbox-5ebd306d.js";import{F as A}from"./FSButton-1e8cfafa.js";import{F as M}from"./FSChip-b2b5f621.js";import{_ as D}from"./FSSpan-4ac1bb71.js";import{_ as F}from"./FSRow-76f4ad1e.js";import{C as B}from"./base-dd7352d9.js";import{S as E}from"./serviceFactory-2dfad3af.js";import{C as P}from"./composableFactory-0b8943d1.js";import{u as j}from"./useAutocomplete-a7e2bf25.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-00399f8e.js";import{_ as z}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./FSIcon-110a991e.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./FSClickable-af644c0d.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";class K{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new K(p)))??[]}}class X extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,H=e=>`${k()}/${encodeURIComponent(e)}`,J=new E("dataDefinition",X).create(e=>e.build(e.addGet(H),e.addGetMany(k,w),e.addNotify())),Q=P.getMany(J),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSCheckbox:_,FSButton:A,FSChip:M,FSSpan:D,FSRow:F},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=Q(),S=T(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=j(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:a}}});function W(e,t,r,p,f,S){const s=b("FSChip"),g=b("FSAutocompleteField");return l(),n(g,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[u(x,R(q({...o,title:""})),{default:i(()=>[u(F,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):m("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[u(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):m("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=G(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var y,C,V;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      FSAutocompleteDataDefinition,
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
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const yt=["Variations"];export{c as Variations,yt as __namedExportsOrder,ht as default};
