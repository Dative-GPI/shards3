var T=Object.defineProperty;var N=(t,e,a)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>N(t,typeof e!="symbol"?e+"":e,a);import{d as O,c as q,y as F,z as r,A as s,B as l,m as M,D as p,L as d,E as y,G as v,S as U}from"./vue.esm-bundler-gWFTcvUr.js";import{F as L}from"./FSAutocompleteField-mXLZc6AN.js";import{F as V}from"./FSButton-C0cjY78b.js";import{F as R}from"./FSChip-3bZvXIoL.js";import{_ as D}from"./FSSpan-BlywDO8Z.js";import{_ as b}from"./FSRow-Bpa2jjpJ.js";import{C as B}from"./base-DV1z3red.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-CZGZ62iP.js";import{u as x}from"./useAutocomplete-C7hDSQ2w.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./FSIcon-C7-l9IT-.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class P{constructor(e){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=e.id,this.inputValue=e.inputValue,this.outputValue=e.outputValue}}class A{constructor(e){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryCode=e.dataCategoryCode,this.dataCategoryLabel=e.dataCategoryLabel,this.code=e.code,this.label=e.label,this.description=e.description,this.dataTable=e.dataTable,this.useOnlyMappings=e.useOnlyMappings,this.unit=e.unit,this.codes=e.codes.slice(),this.mappings=((a=e.mappings)==null?void 0:a.map(u=>new P(u)))??[]}}class H extends A{constructor(e){super(e)}}const w=()=>`${B()}/data-definitions`,J=t=>`${w()}/${encodeURIComponent(t)}`,K=new E("dataDefinition",H).create(t=>t.build(t.addGet(J),t.addGetMany(w,A),t.addNotify())),Q=j.getMany(K),I=O({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:L,FSButton:V,FSChip:R,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:u,entities:f}=Q(),S=q(()=>o.value&&u.value),n=$=>a({...t.dataDefinitionFilters,search:$??void 0}),{toggleSet:g,init:o,onUpdate:m}=x(f,[()=>t.dataDefinitionFilters],e,n);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:m}}});function W(t,e,a,u,f,S){const n=F("FSChip"),g=F("FSAutocompleteField");return r(),s(g,M({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataDefinitions,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":l(({item:o})=>[t.$props.modelValue?(r(),s(b,{key:0,align:"center-center",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,null,{default:l(()=>[y(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"item-label":l(({item:o,font:m})=>[d(b,{align:"center-left",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,{font:m},{default:l(()=>[y(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(o=>[d(V,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:l(()=>[o.item.unit?(r(),s(n,{key:0,label:o.item.unit},null,8,["label"])):p("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const k=G(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const St={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteDataDefinition:k,FSCol:z},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var h,C,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Ft=["Variations"];export{c as Variations,Ft as __namedExportsOrder,St as default};
