var $=Object.defineProperty;var k=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>k(e,typeof t!="symbol"?t+"":t,a);import{d as T,c,y as g,z as f,A as D,B as m,m as O,D as M,L as b,M as N,P as q}from"./vue.esm-bundler-DR8xMV81.js";import{F as U}from"./FSAutocompleteField-p0X-UdBZ.js";import{F}from"./FSButton-Bvd0naOX.js";import{F as L}from"./FSChip-B30YLh08.js";import{C as B}from"./base-BZ9BoqOK.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-CS2nLnTC.js";import{u as E}from"./useAutocomplete-C0O9yddU.js";import{u as j}from"./useTranslations-yeF_ketc.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-CeBQ3oDD.js";import"./FSSearchField-D014VcGV.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./VIcon-CB8o8wL4.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./VProgressCircular-CQOkkHxu.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSDialogMenu-BsX2O1U3.js";import"./FSCard-CU93xE1v.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./FSSlideGroup-CAnEdTCM.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./FSToggleSet-WVf1v7XO.js";import"./FSWrapGroup-DmnpIXuG.js";import"./FSCheckbox-DNmwW8YA.js";import"./FSIcon-CYA01Pg8.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSFadeOut-DVFTxjCH.js";import"./FSLoader-KrLuz6mY.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-4MLyqnfX.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./VImg-MapJeLY6.js";import"./VSelect-CgtGyyn0.js";import"./VMenu-5z8CiYXe.js";import"./filter-Ct2lxthn.js";import"./FSClickable-Bx8zcCZW.js";import"./useAppOrganisationId-D_AG8bST.js";import"./lodash-BiW_TGGX.js";class P{constructor(t){o(this,"id");o(this,"inputValue");o(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class S{constructor(t){o(this,"id");o(this,"modelId");o(this,"dataCategoryId");o(this,"dataCategoryCode");o(this,"dataCategoryLabel");o(this,"code");o(this,"label");o(this,"description");o(this,"dataTable");o(this,"useOnlyMappings");o(this,"unit");o(this,"codes");o(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(l=>new P(l)))??[]}}class H extends S{constructor(t){super(t)}}const C=()=>`${B()}/data-definitions`,J=e=>`${C()}/${encodeURIComponent(e)}`,K=new R("dataDefinition",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,S),e.addNotify())),Q=x.getMany(K),V=T({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:U,FSButton:F,FSChip:L},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:l,entities:s}=Q(),{$tr:u}=j(),n=c(()=>_.value&&l.value),d=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),i=I=>a({...e.dataDefinitionFilters,search:I??void 0}),{toggleSet:p,init:_,onUpdate:w}=E(s,[()=>e.dataDefinitionFilters],t,i);return{dataDefinitions:s,placeholder:d,toggleSet:p,loading:n,onUpdate:w}}});function W(e,t,a,l,s,u){const n=g("FSChip"),d=g("FSAutocompleteField");return f(),D(d,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":m(({item:i})=>[i.unit?(f(),D(n,{key:0,label:i.unit},null,8,["label"])):M("",!0)]),"toggle-set-item":m(i=>[b(F,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:q(i.getClass(i.item)),label:i.item.label,onClick:p=>i.toggle(i.item)},N({_:2},[i.item.unit?{name:"append",fn:m(()=>[b(n,{label:i.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=z(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:A,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const ht=["Variations"];export{r as Variations,ht as __namedExportsOrder,bt as default};
