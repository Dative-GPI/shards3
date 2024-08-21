var T=Object.defineProperty;var N=(t,e,a)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>N(t,typeof e!="symbol"?e+"":e,a);import{d as O,c as M,y as F,z as u,A as p,B as l,m as q,D as g,L as r,E as y,G as v,M as U,S as L}from"./vue.esm-bundler-gWFTcvUr.js";import{F as R}from"./FSAutocompleteField-mXLZc6AN.js";import{F as V}from"./FSButton-C0cjY78b.js";import{F as B}from"./FSChip-3bZvXIoL.js";import{_ as D}from"./FSSpan-BlywDO8Z.js";import{_ as b}from"./FSRow-Bpa2jjpJ.js";import{C as E}from"./base-DV1z3red.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-CZGZ62iP.js";import{u as G}from"./useAutocomplete-C7hDSQ2w.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as P}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./FSIcon-C7-l9IT-.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class H{constructor(e){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=e.id,this.inputValue=e.inputValue,this.outputValue=e.outputValue}}class A{constructor(e){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryCode=e.dataCategoryCode,this.dataCategoryLabel=e.dataCategoryLabel,this.code=e.code,this.label=e.label,this.description=e.description,this.dataTable=e.dataTable,this.useOnlyMappings=e.useOnlyMappings,this.unit=e.unit,this.codes=e.codes.slice(),this.mappings=((a=e.mappings)==null?void 0:a.map(s=>new H(s)))??[]}}class J extends A{constructor(e){super(e)}}const w=()=>`${E()}/data-definitions`,K=t=>`${w()}/${encodeURIComponent(t)}`,Q=new j("dataDefinition",J).create(t=>t.build(t.addGet(K),t.addGetMany(w,A),t.addNotify())),W=x.getMany(Q),I=O({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:R,FSButton:V,FSChip:B,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:s,entities:c}=W(),S=M(()=>o.value&&s.value),n=$=>a({...t.dataDefinitionFilters,search:$??void 0}),{toggleSet:f,init:o,onUpdate:m}=G(c,[()=>t.dataDefinitionFilters],e,n);return{dataDefinitions:c,toggleSet:f,loading:S,onUpdate:m}}});function X(t,e,a,s,c,S){const n=F("FSChip"),f=F("FSAutocompleteField");return u(),p(f,q({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataDefinitions,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":l(({item:o})=>[t.$props.modelValue?(u(),p(b,{key:0,align:"center-center",wrap:!1},{default:l(()=>[o.raw.unit?(u(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):g("",!0),r(D,null,{default:l(()=>[y(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":l(({item:o,font:m})=>[r(b,{align:"center-left",wrap:!1},{default:l(()=>[o.raw.unit?(u(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):g("",!0),r(D,{font:m},{default:l(()=>[y(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(o=>[r(V,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:L(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},U({_:2},[o.item.unit?{name:"prepend",fn:l(()=>[r(n,{label:o.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const k=z(I,[["render",X]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const Ft={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteDataDefinition:k,FSCol:P},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var h,C,_;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const yt=["Variations"];export{d as Variations,yt as __namedExportsOrder,Ft as default};
