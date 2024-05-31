import{f as N,g as O,D as S,E as l,F as n,G as i,A as T,I as m,M as u,K as v,L as h,N as q,O as M,Y as R}from"./vue.esm-bundler-838daa40.js";import{F as U}from"./FSAutocompleteField-730efa84.js";import{F as _}from"./FSCheckbox-884ec95b.js";import{F as A}from"./FSButton-b3e7898e.js";import{F as L}from"./FSChip-221c999e.js";import{_ as D}from"./FSSpan-3df08200.js";import{_ as F}from"./FSRow-753b58e5.js";import{C as B}from"./base-ef43f4ed.js";import{S as E}from"./serviceFactory-2dfad3af.js";import{C as j}from"./composableFactory-5509dfbf.js";import{u as G}from"./useAutocomplete-f4f2ca8a.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-73f86563.js";import{_ as z}from"./FSCol-44fe82a9.js";import"./FSSearchField-fd4e58de.js";import"./FSTextField-5838a9fc.js";import"./VField-b5e232d6.js";import"./useColors-8c9c4d1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-fb154c77.js";import"./FSCard-b76495e8.js";import"./css-67cfec15.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-9a5da185.js";import"./FSIcon-48205264.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-89f81a7c.js";import"./FSSlideGroup-9fadb36c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-d7904dc1.js";import"./FSFadeOut-ce6cecc6.js";import"./FSLoader-d60b60c7.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./FSClickable-104d21f2.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";class K{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new K(p)))??[]}}class Y extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,H=e=>`${k()}/${encodeURIComponent(e)}`,J=new E("dataDefinition",Y).create(e=>e.build(e.addGet(H),e.addGetMany(k,w),e.addNotify())),Q=j.getMany(J),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:U,FSCheckbox:_,FSButton:A,FSChip:L,FSSpan:D,FSRow:F},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=Q(),b=O(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=G(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:b,onUpdate:a}}});function W(e,t,r,p,f,b){const s=S("FSChip"),g=S("FSAutocompleteField");return l(),n(g,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[u(x,q(M({...o,title:""})),{default:i(()=>[u(F,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):m("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[u(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):m("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
