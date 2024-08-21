var O=Object.defineProperty;var M=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>M(e,typeof t!="symbol"?t+"":t,a);import{d as q,c as y,y as v,z as s,A as u,B as l,m as U,L as r,E as h,G as C,D as c,M as L,S as R}from"./vue.esm-bundler-gWFTcvUr.js";import{F as B}from"./FSAutocompleteField-G63UuZXo.js";import{F as _}from"./FSButton-C0cjY78b.js";import{F as E}from"./FSChip-3bZvXIoL.js";import{_ as S}from"./FSSpan-BlywDO8Z.js";import{_ as b}from"./FSRow-Bpa2jjpJ.js";import{C as j}from"./base-DV1z3red.js";import{S as G}from"./serviceFactory-Bd5jifNi.js";import{C as z}from"./composableFactory-CZGZ62iP.js";import{u as x}from"./useAutocomplete-C7hDSQ2w.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-DqpPKsvm.js";import{_ as J}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./color-CI1OEbFE.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./FSIcon-C7-l9IT-.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class K{constructor(t){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class I{constructor(t){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(m=>new K(m)))??[]}}class Q extends I{constructor(t){super(t)}}const k=()=>`${j()}/data-definitions`,W=e=>`${k()}/${encodeURIComponent(e)}`,X=new G("dataDefinition",Q).create(e=>e.build(e.addGet(W),e.addGetMany(k,I),e.addNotify())),Y=z.getMany(X),$=q({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:_,FSChip:E,FSSpan:S,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:m,entities:d}=Y(),F=y(()=>p.value&&m.value),n=y(()=>{if(!e.multiple)return d.value.find(D=>D.id===e.modelValue)}),g=D=>a({...e.dataDefinitionFilters,search:D??void 0}),{toggleSet:o,init:p,onUpdate:N}=x(d,[()=>e.dataDefinitionFilters],t,g);return{dataDefinitions:d,toggleSet:o,loading:F,dataDefinitionSelected:n,onUpdate:N}}});function Z(e,t,a,m,d,F){const n=v("FSChip"),g=v("FSAutocompleteField");return s(),u(g,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":l(({item:o})=>[e.$props.modelValue?(s(),u(b,{key:0,align:"center-center",gap:"2px",class:"mr-2",wrap:!1},{default:l(()=>[r(S,null,{default:l(()=>[h(C(o.raw.label),1)]),_:2},1024),r(H),e.$props.multiple&&o.raw.unit?(s(),u(n,{key:0,label:o.raw.unit},null,8,["label"])):c("",!0)]),_:2},1024)):c("",!0)]),"autocomplete-suffix":l(()=>[e.dataDefinitionSelected&&e.dataDefinitionSelected.unit?(s(),u(n,{key:0,label:e.dataDefinitionSelected.unit},null,8,["label"])):c("",!0)]),"item-label":l(({item:o,font:p})=>[r(b,{align:"center-left",wrap:!1},{default:l(()=>[r(S,{font:p},{default:l(()=>[h(C(o.raw.label),1)]),_:2},1032,["font"]),o.raw.unit?(s(),u(n,{key:0,label:o.raw.unit},null,8,["label"])):c("",!0)]),_:2},1024)]),"toggle-set-item":l(o=>[r(_,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:p=>o.toggle(o.item)},L({_:2},[o.item.unit?{name:"append",fn:l(()=>[r(n,{label:o.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const T=P($,[["render",Z]]);$.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:T,FSCol:J},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var V,A,w;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(w=(A=f.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const ht=["Variations"];export{f as Variations,ht as __namedExportsOrder,vt as default};
