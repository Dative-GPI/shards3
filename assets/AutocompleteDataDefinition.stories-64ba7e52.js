import{j as N,e as T,I as S,J as l,K as n,L as i,B as O,N as u,A as m,U as v,V as h,W as U,X as q,_ as R}from"./vue.esm-bundler-7c237656.js";import{F as L}from"./FSAutocompleteField-3e0e956b.js";import{F as _}from"./FSCheckbox-da06ce33.js";import{F as A}from"./FSButton-2de03eb9.js";import{F as M}from"./FSChip-d3978a1b.js";import{_ as D}from"./FSSpan-661158f8.js";import{_ as b}from"./FSRow-0e15f868.js";import{C as B}from"./base-cc0281c0.js";import{S as j}from"./serviceFactory-7552fe10.js";import{C as E}from"./composableFactory-08360cd4.js";import{u as P}from"./useAutocomplete-c9cb8b74.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z}from"./VSelect-735dad66.js";import{_ as G}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./useSlots-338ea3fb.js";import"./css-aa928277.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./useRender-e0e7d9de.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./tag-7dab75b7.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./VProgressCircular-4299d8b4.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./filter-9f13a693.js";import"./VMenu-2484e62c.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./FSIcon-5ad13b7e.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";class J{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new J(p)))??[]}}class K extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,W=e=>`${k()}/${encodeURIComponent(e)}`,X=new j("dataDefinition",K).create(e=>e.build(e.addGet(W),e.addGetMany(k,w),e.addNotify())),H=E.getMany(X),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSCheckbox:_,FSButton:A,FSChip:M,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=H(),F=T(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=P(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:F,onUpdate:a}}});function Q(e,t,r,p,f,F){const s=S("FSChip"),g=S("FSAutocompleteField");return l(),n(g,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(b,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),m(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[m(z,U(q({...o,title:""})),{default:i(()=>[m(b,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):u("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):u("",!0),m(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[m(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=x(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const Dt=["Variations"];export{c as Variations,Dt as __namedExportsOrder,gt as default};
