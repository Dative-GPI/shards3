import{f as N,g as T,D as b,E as l,F as n,G as i,A as O,I as m,P as u,K as v,L as h,R,S as q,X as U}from"./vue.esm-bundler-f632b118.js";import{F as L}from"./FSAutocompleteField-f1eebd00.js";import{F as _}from"./FSCheckbox-bde4293d.js";import{F as A}from"./FSButton-08a91e21.js";import{F as M}from"./FSChip-ff59a050.js";import{_ as D}from"./FSSpan-4ac1bb71.js";import{_ as F}from"./FSRow-76f4ad1e.js";import{C as B}from"./base-dd7352d9.js";import{S as E}from"./serviceFactory-2dfad3af.js";import{C as P}from"./composableFactory-0b8943d1.js";import{u as j}from"./useAutocomplete-5bae40b5.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-ee781f63.js";import{_ as z}from"./FSCol-606e8271.js";import"./FSSearchField-89392c22.js";import"./FSTextField-ae12b6dc.js";import"./VField-d1df4052.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./useSlots-de625f75.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-5b31adc4.js";import"./FSCard-491552ba.js";import"./css-185b4786.js";import"./VDialog-46b8b074.js";import"./VOverlay-f45091df.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./FSIcon-8032a9d1.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./filter-dd5b3c74.js";import"./VMenu-8734b394.js";import"./FSClickable-4011125f.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";class K{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new K(p)))??[]}}class X extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,H=e=>`${k()}/${encodeURIComponent(e)}`,J=new E("dataDefinition",X).create(e=>e.build(e.addGet(H),e.addGetMany(k,w),e.addNotify())),Q=P.getMany(J),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSCheckbox:_,FSButton:A,FSChip:M,FSSpan:D,FSRow:F},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=Q(),S=T(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=j(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:a}}});function W(e,t,r,p,f,S){const s=b("FSChip"),g=b("FSAutocompleteField");return l(),n(g,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[u(x,R(q({...o,title:""})),{default:i(()=>[u(F,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):m("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[u(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):m("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=G(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
