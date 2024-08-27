var $=Object.defineProperty;var k=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>k(e,typeof t!="symbol"?t+"":t,a);import{d as T,c,y as g,z as f,A as D,B as m,m as O,D as M,L as b,M as N,P as q}from"./vue.esm-bundler--l9E1zCM.js";import{F as U}from"./FSAutocompleteField-CIWSDUUC.js";import{F}from"./FSButton-DC-WKUnK.js";import{F as L}from"./FSChip-Jt6fKE9B.js";import{C as B}from"./base-BcjN1n8z.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-BJn24iiy.js";import{u as E}from"./useAutocomplete-BK0ibAFa.js";import{u as j}from"./useTranslations-ByKtt_-5.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-BzreH9pe.js";import"./FSTextField-DT4mycsE.js";import"./FSBaseField-DyRfpoCH.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-2Sog7wcL.js";import"./FSCard-BmtixItE.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-PC9JFQCq.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./FSCheckbox-CuaZdV3q.js";import"./FSIcon-CA5AHnUB.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-DZ611XP-.js";import"./VImg-BDKzFUYZ.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-gVzwmWVQ.js";import"./VList-DEWTNoUD.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-BDwb1eeM.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./FSClickable-CWlCNUE_.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./lodash-BiW_TGGX.js";class P{constructor(t){o(this,"id");o(this,"inputValue");o(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class S{constructor(t){o(this,"id");o(this,"modelId");o(this,"dataCategoryId");o(this,"dataCategoryCode");o(this,"dataCategoryLabel");o(this,"code");o(this,"label");o(this,"description");o(this,"dataTable");o(this,"useOnlyMappings");o(this,"unit");o(this,"codes");o(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(l=>new P(l)))??[]}}class H extends S{constructor(t){super(t)}}const C=()=>`${B()}/data-definitions`,J=e=>`${C()}/${encodeURIComponent(e)}`,K=new R("dataDefinition",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,S),e.addNotify())),Q=x.getMany(K),V=T({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:U,FSButton:F,FSChip:L},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:l,entities:s}=Q(),{$tr:u}=j(),n=c(()=>_.value&&l.value),d=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),i=I=>a({...e.dataDefinitionFilters,search:I??void 0}),{toggleSet:p,init:_,onUpdate:w}=E(s,[()=>e.dataDefinitionFilters],t,i);return{dataDefinitions:s,placeholder:d,toggleSet:p,loading:n,onUpdate:w}}});function W(e,t,a,l,s,u){const n=g("FSChip"),d=g("FSAutocompleteField");return f(),D(d,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":m(({item:i})=>[i.unit?(f(),D(n,{key:0,label:i.unit},null,8,["label"])):M("",!0)]),"toggle-set-item":m(i=>[b(F,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:q(i.getClass(i.item)),label:i.item.label,onClick:p=>i.toggle(i.item)},N({_:2},[i.item.unit?{name:"append",fn:m(()=>[b(n,{label:i.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=z(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const Dt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:A,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var h,y,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const bt=["Variations"];export{r as Variations,bt as __namedExportsOrder,Dt as default};
