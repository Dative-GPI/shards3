import{f as $,g as N,D as F,E as n,F as r,G as i,x as T,I as u,P as p,K as S,L as v,X as O}from"./vue.esm-bundler-a0893183.js";import{F as q}from"./FSAutocompleteField-71836b5a.js";import{F as _}from"./FSButton-29e96b8a.js";import{F as U}from"./FSChip-db263eca.js";import{_ as g}from"./FSSpan-4daadeb4.js";import{_ as D}from"./FSRow-821d23a1.js";import{C as M}from"./base-168b8f74.js";import{S as R}from"./serviceFactory-2dfad3af.js";import{C as L}from"./composableFactory-2d4a69cc.js";import{u as B}from"./useAutocomplete-cc546bbe.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as x}from"./FSCol-e45ac157.js";import"./FSSearchField-4585c5ac.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./FSIcon-9d61ed62.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSClickable-550391c2.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";class j{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new j(s)))??[]}}class G extends w{constructor(t){super(t)}}const A=()=>`${M()}/data-definitions`,P=e=>`${A()}/${encodeURIComponent(e)}`,z=new R("dataDefinition",G).create(e=>e.build(e.addGet(P),e.addGetMany(A,w),e.addNotify())),K=L.getMany(z),V=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSButton:_,FSChip:U,FSSpan:g,FSRow:D},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:c}=K(),b=N(()=>o.value&&s.value),l=k=>a({...e.dataDefinitionFilters,search:k??void 0}),{toggleSet:f,init:o,onUpdate:m}=B(c,[()=>e.dataDefinitionFilters],t,l);return{dataDefinitions:c,toggleSet:f,loading:b,onUpdate:m}}});function X(e,t,a,s,c,b){const l=F("FSChip"),f=F("FSAutocompleteField");return n(),r(f,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(n(),r(D,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,null,{default:i(()=>[S(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":i(({item:o,font:m})=>[p(D,{align:"center-left",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,{font:m},{default:i(()=>[S(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":i(o=>[p(_,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:O(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(n(),r(l,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const I=E(V,[["render",X]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const St={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:x},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var h,y,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const vt=["Variations"];export{d as Variations,vt as __namedExportsOrder,St as default};
