import{j as $,e as k,I as v,J as u,K as p,L as o,A as N,z as l,S as d,U as m,N as S,W as U,X as O}from"./vue.esm-bundler-3386cb71.js";import{F as q}from"./FSAutocompleteField-c07b5f3c.js";import{F as L}from"./FSText-81a21680.js";import{C as M}from"./base-4e5ccaa5.js";import{S as R}from"./serviceFactory-3393b4e4.js";import{C as j}from"./composableFactory-0f23559b.js";import{u as x}from"./useAutocomplete-e0c21e85.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{F as E}from"./FSCheckbox-8b71851a.js";import{_ as F}from"./FSRow-9733beba.js";import{c as P}from"./VSelect-748790cd.js";import{_ as z}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./css-bcfd232c.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./filter-a78161c9.js";import"./VMenu-e9f9429e.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./index-dcfb76a3.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";class G{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class A{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(s=>new G(s)))??[]}}class J extends A{constructor(t){super(t)}}const _=()=>`${M()}/data-definitions`,K=e=>`${_()}/${encodeURIComponent(e)}`,W=new R("dataDefinition",J).create(e=>e.build(e.addGet(K),e.addGetMany(_,A),e.addNotify())),X=j.getMany(W),w=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSText:L},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:f}=X(),h=D=>r({...e.dataDefinitionFilters,search:D??void 0}),{toggleSet:a,search:g,init:i,onUpdate:n}=x(f,[()=>e.dataDefinitionFilters],t,h),T=k(()=>i.value&&s.value);return{dataDefinitions:f,toggleSet:a,loading:T,search:g,onUpdate:n,isSelected:D=>{var b;return(b=e.modelValue)==null?void 0:b.includes(D)}}}});function H(e,t,r,s,f,h){const a=v("FSText"),g=v("FSAutocompleteField");return u(),p(g,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dataDefinitions,multiple:e.$props.multiple,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=i=>e.search=i)},e.$attrs),{selection:o(({item:i})=>[l(F,{align:"center-center",wrap:!1,gap:0},{default:o(()=>[l(a,null,{default:o(()=>[d(m(i.raw.label),1)]),_:2},1024),i.raw.unit?(u(),p(a,{key:0},{default:o(()=>[d(" ("+m(i.raw.unit)+") ",1)]),_:2},1024)):S("",!0)]),_:2},1024)]),item:o(({props:i,item:n})=>[l(P,U(O({...i,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(u(),p(E,{key:0,modelValue:e.isSelected(n.value)},null,8,["modelValue"])):S("",!0),l(F,{gap:0},{default:o(()=>[l(a,null,{default:o(()=>[d(m(n.raw.label),1)]),_:2},1024),n.raw.unit?(u(),p(a,{key:0},{default:o(()=>[d(" ("+m(n.raw.unit)+") ",1)]),_:2},1024)):S("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const I=B(w,[["render",H]]);w.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const gt=["Variations"];export{c as Variations,gt as __namedExportsOrder,ft as default};
