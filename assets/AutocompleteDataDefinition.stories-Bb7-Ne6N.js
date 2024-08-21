var M=Object.defineProperty;var q=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>q(e,typeof t!="symbol"?t+"":t,a);import{d as U,c as v,y,z as d,A as p,M as h,B as l,m as L,L as r,E as C,G as V,D,S as R}from"./vue.esm-bundler-gWFTcvUr.js";import{F as B}from"./FSAutocompleteField-CI6xmJnD.js";import{F as I}from"./FSButton-CDk00Rln.js";import{F as E}from"./FSChip-C4GLzprG.js";import{_ as b}from"./FSSpan-BlywDO8Z.js";import{_ as S}from"./FSRow-Bpa2jjpJ.js";import{C as j}from"./base-DV1z3red.js";import{S as G}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-CZGZ62iP.js";import{u as z}from"./useAutocomplete-DqlTmpvX.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./FSIcon-C5ELG8c1.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-BVFP8bZP.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class J{constructor(t){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class k{constructor(t){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new J(s)))??[]}}class K extends k{constructor(t){super(t)}}const $=()=>`${j()}/data-definitions`,Q=e=>`${$()}/${encodeURIComponent(e)}`,W=new G("dataDefinition",K).create(e=>e.build(e.addGet(Q),e.addGetMany($,k),e.addNotify())),X=x.getMany(W),T=U({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:I,FSChip:E,FSSpan:b,FSRow:S},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:u}=X(),F=v(()=>m.value&&s.value),n=v(()=>{if(!e.multiple)return u.value.find(g=>g.id===e.modelValue)}),f=g=>a({...e.dataDefinitionFilters,search:g??void 0}),{toggleSet:o,init:m,onUpdate:O}=z(u,[()=>e.dataDefinitionFilters],t,f);return{dataDefinitions:u,toggleSet:o,selected:n,loading:F,onUpdate:O}}});function Y(e,t,a,s,u,F){const n=y("FSChip"),f=y("FSAutocompleteField");return d(),p(f,L({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),h({"autocomplete-selection":l(({item:o})=>[e.$props.modelValue?(d(),p(S,{key:0,align:"center-center",padding:"0 8px 0 0",gap:"4px",wrap:!1},{default:l(()=>[r(b,null,{default:l(()=>[C(V(o.raw.label),1)]),_:2},1024),e.$props.multiple&&o.raw.unit?(d(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):D("",!0)]),_:2},1024)):D("",!0)]),"item-label":l(({item:o,font:m})=>[r(S,{align:"center-left",wrap:!1},{default:l(()=>[r(b,{font:m},{default:l(()=>[C(V(o.raw.label),1)]),_:2},1032,["font"]),o.raw.unit?(d(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):D("",!0)]),_:2},1024)]),"toggle-set-item":l(o=>[r(I,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},h({_:2},[o.item.unit?{name:"append",fn:l(()=>[r(n,{label:o.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:2},[e.selected&&e.selected.unit?{name:"autocomplete-suffix",fn:l(()=>[r(n,{label:e.selected.unit},null,8,["label"])]),key:"0"}:void 0]),1040,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const N=P(T,[["render",Y]]);T.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:N,FSCol:H},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var A,w,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const yt=["Variations"];export{c as Variations,yt as __namedExportsOrder,vt as default};
