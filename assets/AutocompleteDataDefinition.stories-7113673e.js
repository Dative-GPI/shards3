import{f as N,g as T,D as b,E as l,F as n,G as i,A as O,I as m,Q as u,K as v,L as h,R,S as q,Y as U}from"./vue.esm-bundler-1de4ab84.js";import{F as L}from"./FSAutocompleteField-612f5788.js";import{F as _}from"./FSCheckbox-7bc44d7a.js";import{F as A}from"./FSButton-6b0685b3.js";import{F as M}from"./FSChip-5509d5fb.js";import{_ as D}from"./FSSpan-c5b5f93b.js";import{_ as F}from"./FSRow-0f15051e.js";import{C as B}from"./base-d4d5271d.js";import{S as E}from"./serviceFactory-2dfad3af.js";import{C as j}from"./composableFactory-7269e9d8.js";import{u as G}from"./useAutocomplete-541ae531.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-46cfbf6f.js";import{_ as z}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSDialogMenu-a98f6da7.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./FSIcon-08483052.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./FSClickable-00bc2ab2.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./lodash-569b8a6d.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";class K{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class w{constructor(t){var r;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((r=t.mappings)==null?void 0:r.map(p=>new K(p)))??[]}}class Q extends w{constructor(t){super(t)}}const k=()=>`${B()}/data-definitions`,Y=e=>`${k()}/${encodeURIComponent(e)}`,H=new E("dataDefinition",Q).create(e=>e.build(e.addGet(Y),e.addGetMany(k,w),e.addNotify())),J=j.getMany(H),I=N({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSCheckbox:_,FSButton:A,FSChip:M,FSSpan:D,FSRow:F},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:p,entities:f}=J(),S=T(()=>o.value&&p.value),s=d=>r({...e.dataDefinitionFilters,search:d??void 0}),{toggleSet:g,init:o,onUpdate:a}=G(f,[()=>e.dataDefinitionFilters],t,s);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:a}}});function W(e,t,r,p,f,S){const s=b("FSChip"),g=b("FSAutocompleteField");return l(),n(g,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(l(),n(F,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(l(),n(s,{key:0,label:o.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":i(({props:o,item:a})=>[u(x,R(q({...o,title:""})),{default:i(()=>[u(F,{align:"center-left",wrap:!1},{default:i(()=>{var d;return[e.$props.multiple?(l(),n(_,{key:0,modelValue:(d=e.$props.modelValue)==null?void 0:d.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):m("",!0),a.raw.unit?(l(),n(s,{key:1,label:a.raw.unit},null,8,["label"])):m("",!0),u(D,null,{default:i(()=>[v(h(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":i(o=>[u(A,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:a=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(l(),n(s,{key:0,label:o.item.unit},null,8,["label"])):m("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const $=P(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:$,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
