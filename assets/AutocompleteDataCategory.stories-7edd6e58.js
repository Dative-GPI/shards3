import{j as $,e as k,I as v,J as u,K as p,L as o,A as N,z as l,S as d,U as m,N as S,W as U,X as O}from"./vue.esm-bundler-82a4b45a.js";import{F as q}from"./FSAutocompleteField-9928e23d.js";import{F as L}from"./FSText-4ee7bf26.js";import{C as M}from"./base-ec6565f2.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as j}from"./composableFactory-2f513de5.js";import{u as x}from"./useAutocomplete-14a2146a.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{F as E}from"./FSCheckbox-4b8da1d3.js";import{_ as F}from"./FSRow-2ccfd21b.js";import{c as P}from"./VSelect-fca10f65.js";import{_ as z}from"./FSCol-8326ac62.js";import"./FSButton-c71cf6ce.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./css-c39c4a6e.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-7d54313a.js";import"./FSSlideGroup-35b11b76.js";import"./FSButtonNextIcon-3fcfc95d.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./filter-4073c1af.js";import"./VMenu-9dbbffaa.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./index-0f4b4beb.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";class G{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class A{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(s=>new G(s)))??[]}}class J extends A{constructor(t){super(t)}}const _=()=>`${M()}/data-definitions`,K=e=>`${_()}/${encodeURIComponent(e)}`,W=new R("dataDefinition",J).create(e=>e.build(e.addGet(K),e.addGetMany(_,A),e.addNotify())),X=j.getMany(W),w=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSText:L},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:f}=X(),h=D=>r({...e.dataDefinitionFilters,search:D??void 0}),{toggleSet:a,search:g,init:i,onUpdate:n}=x(f,[()=>e.dataDefinitionFilters],t,h),T=k(()=>i.value&&s.value);return{dataDefinitions:f,toggleSet:a,loading:T,search:g,onUpdate:n,isSelected:D=>{var b;return(b=e.modelValue)==null?void 0:b.includes(D)}}}});function H(e,t,r,s,f,h){const a=v("FSText"),g=v("FSAutocompleteField");return u(),p(g,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.dataDefinitions,multiple:e.$props.multiple,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=i=>e.search=i)},e.$attrs),{selection:o(({item:i})=>[l(F,{align:"center-center",wrap:!1,gap:0},{default:o(()=>[l(a,null,{default:o(()=>[d(m(i.raw.label),1)]),_:2},1024),i.raw.unit?(u(),p(a,{key:0},{default:o(()=>[d(" ("+m(i.raw.unit)+") ",1)]),_:2},1024)):S("",!0)]),_:2},1024)]),item:o(({props:i,item:n})=>[l(P,U(O({...i,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(u(),p(E,{key:0,modelValue:e.isSelected(n.value)},null,8,["modelValue"])):S("",!0),l(F,{gap:0},{default:o(()=>[l(a,null,{default:o(()=>[d(m(n.raw.label),1)]),_:2},1024),n.raw.unit?(u(),p(a,{key:0},{default:o(()=>[d(" ("+m(n.raw.unit)+") ",1)]),_:2},1024)):S("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","loading","items","multiple","modelValue","onUpdate:modelValue","search"])}const I=B(w,[["render",H]]);w.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
