import{j as N,e as T,I as S,J as l,K as n,L as i,B as O,N as u,A as m,U as v,V as h,W as U,X as q,_ as R}from"./vue.esm-bundler-41eda46b.js";import{F as L}from"./FSAutocompleteField-d788c579.js";import{F as _}from"./FSCheckbox-9aa0fdbb.js";import{F as A}from"./FSButton-cdb730f5.js";import{F as M}from"./FSChip-0962e240.js";import{_ as D}from"./FSSpan-8af5ddcc.js";import{_ as b}from"./FSRow-1508d56d.js";import{C as B}from"./base-72a78366.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as E}from"./composableFactory-00c2f0ee.js";import{u as P}from"./useAutocomplete-a7c26244.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z}from"./VSelect-994061f1.js";import{_ as G}from"./FSCol-282cc158.js";import"./FSToggleSet-ddc99f4f.js";import"./FSSlideGroup-515ac5df.js";import"./FSButtonNextIcon-ad2979e7.js";import"./useColors-c08b974a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d4a333d5.js";import"./useSlots-e8ea556e.js";import"./css-35e8563f.js";import"./VSlideGroup-d28ddfe3.js";import"./index-ad5199eb.js";import"./useRender-b120e115.js";import"./display-40264291.js";import"./goto-e7ba55f0.js";import"./locale-396b54fa.js";import"./proxiedModel-ebe72836.js";import"./group-53103ce4.js";import"./tag-585bbcbd.js";import"./resizeObserver-ea3ec7d1.js";import"./VIcon-7bb7bc51.js";import"./color-7b12579a.js";import"./FSWrapGroup-8ef956e3.js";import"./VInput-1f6e9963.js";import"./transition-87ba966b.js";import"./density-23ec5fb8.js";import"./dimensions-dbe989d9.js";import"./VField-7c3f9689.js";import"./VSpacer-b889274d.js";import"./VLabel-674db0eb.js";import"./loader-912691d5.js";import"./VProgressCircular-e304a31d.js";import"./rounded-d3e26840.js";import"./VDefaultsProvider-9f290faa.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-b9d57263.js";import"./elevation-74b749d9.js";import"./useRules-d33c1ab7.js";import"./VTextField-414d8177.js";import"./index-2b17760e.js";import"./filter-fb6ce324.js";import"./VMenu-40d1577e.js";import"./VOverlay-aedbdfa0.js";import"./lazy-c18d183e.js";import"./router-c7b42b5f.js";import"./FSIcon-6dc797d3.js";import"./VSelectionControl-6bfa0431.js";import"./index-35b22454.js";import"./FSClickable-fa1cff73.js";import"./FSCard-dc76bdb2.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-520a2ee2.js";import"./VImg-d6020fb6.js";import"./VDivider-50e3f59d.js";class J{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new J(p)))??[]}}class K extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,W=e=>`${k()}/${encodeURIComponent(e)}`,X=new j("dataDefinition",K).create(e=>e.build(e.addGet(W),e.addGetMany(k,w),e.addNotify())),H=E.getMany(X),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSCheckbox:_,FSButton:A,FSChip:M,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=H(),F=T(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=P(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:F,onUpdate:a}}});function Q(e,t,r,p,f,F){const s=S("FSChip"),g=S("FSAutocompleteField");return l(),n(g,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(b,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),m(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[m(z,U(q({...o,title:""})),{default:i(()=>[m(b,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):u("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):u("",!0),m(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[m(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=x(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
