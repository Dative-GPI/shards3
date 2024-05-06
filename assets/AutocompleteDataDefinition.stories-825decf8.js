import{j as k,e as N,I as b,J as n,K as r,L as i,B as T,N as m,A as d,S as h,U as v,W as O,X as U}from"./vue.esm-bundler-3416a090.js";import{F as q}from"./FSAutocompleteField-a04215fa.js";import{F as A}from"./FSCheckbox-422b3b91.js";import{F as R}from"./FSChip-e95fe78b.js";import{_ as D}from"./FSSpan-b519c994.js";import{_ as S}from"./FSRow-5edf997c.js";import{C as L}from"./base-9a568e22.js";import{S as M}from"./serviceFactory-7552fe10.js";import{C as B}from"./composableFactory-8605555f.js";import{u as j}from"./useAutocomplete-ca462ffd.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSelect-f25e0916.js";import{_ as G}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./css-69ed11d9.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSIcon-f518d728.js";import"./useSlots-7472d1e2.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./filter-d102117b.js";import"./VMenu-39a0be1f.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";import"./useDebounce-736cfd0a.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";class x{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class _{constructor(t){var l;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((l=t.mappings)==null?void 0:l.map(s=>new x(s)))??[]}}class z extends _{constructor(t){super(t)}}const w=()=>`${L()}/data-definitions`,J=e=>`${w()}/${encodeURIComponent(e)}`,K=new M("dataDefinition",z).create(e=>e.build(e.addGet(J),e.addGetMany(w,_),e.addNotify())),W=B.getMany(K),I=k({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSCheckbox:A,FSChip:R,FSSpan:D,FSRow:S},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:s,entities:f}=W(),F=N(()=>o.value&&s.value),p=u=>l({...e.dataDefinitionFilters,search:u??void 0}),{toggleSet:g,init:o,onUpdate:a}=j(f,[()=>e.dataDefinitionFilters],t,p);return{dataDefinitions:f,toggleSet:g,loading:F,onUpdate:a}}});function X(e,t,l,s,f,F){const p=b("FSChip"),g=b("FSAutocompleteField");return n(),r(g,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,toggleSetItems:e.dataDefinitions,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(p,{key:0,label:o.raw.unit},null,8,["label"])):m("",!0),d(D,null,{default:i(()=>[h(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[d(P,O(U({...o,title:""})),{default:i(()=>[d(S,{align:"center-left"},{default:i(()=>{var u;return[e.$props.multiple?(n(),r(A,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(a.value)},null,8,["modelValue"])):m("",!0),a.raw.unit?(n(),r(p,{key:1,label:a.raw.unit},null,8,["label"])):m("",!0),d(D,null,{default:i(()=>[h(v(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","toggleSetItems","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=E(I,[["render",X]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const ct=["Variations"];export{c as Variations,ct as __namedExportsOrder,dt as default};
