var $=Object.defineProperty;var k=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>k(e,typeof t!="symbol"?t+"":t,a);import{d as T,c,y as g,z as f,A as D,B as m,m as O,D as M,L as b,M as N,P as q}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as U}from"./FSAutocompleteField-Bc6uvIS8.js";import{F}from"./FSButton-C8WCeTIt.js";import{F as L}from"./FSChip-Bb0HR0Jj.js";import{C as B}from"./base-BbuH2dYw.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-DYaDCbjS.js";import{u as E}from"./useAutocomplete-BZsNTWwR.js";import{u as j}from"./useTranslations-DflIUxSJ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DkCFWPYT.js";import"./FSTextField-CAIJ7Yct.js";import"./FSBaseField-CEaQuxbm.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-9ZzibzMy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./tag-CMGfbRyB.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-CwNpi4PZ.js";import"./FSCard-Czuobvvo.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DdgeZc-s.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-D9zoPLp2.js";import"./FSWrapGroup-CY7TtL3l.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./FSIcon-CO4wAGng.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-CPTbsoJn.js";import"./VImg-C2ZZ8L57.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CZcII2-V.js";import"./VList-10owgtsE.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-BJiXcIcO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSClickable-rknJFO_P.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./lodash-BiW_TGGX.js";class P{constructor(t){o(this,"id");o(this,"inputValue");o(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class S{constructor(t){o(this,"id");o(this,"modelId");o(this,"dataCategoryId");o(this,"dataCategoryCode");o(this,"dataCategoryLabel");o(this,"code");o(this,"label");o(this,"description");o(this,"dataTable");o(this,"useOnlyMappings");o(this,"unit");o(this,"codes");o(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(l=>new P(l)))??[]}}class H extends S{constructor(t){super(t)}}const C=()=>`${B()}/data-definitions`,J=e=>`${C()}/${encodeURIComponent(e)}`,K=new R("dataDefinition",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,S),e.addNotify())),Q=x.getMany(K),V=T({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:U,FSButton:F,FSChip:L},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:l,entities:s}=Q(),{$tr:u}=j(),n=c(()=>_.value&&l.value),d=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),i=I=>a({...e.dataDefinitionFilters,search:I??void 0}),{toggleSet:p,init:_,onUpdate:w}=E(s,[()=>e.dataDefinitionFilters],t,i);return{dataDefinitions:s,placeholder:d,toggleSet:p,loading:n,onUpdate:w}}});function W(e,t,a,l,s,u){const n=g("FSChip"),d=g("FSAutocompleteField");return f(),D(d,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":m(({item:i})=>[i.unit?(f(),D(n,{key:0,label:i.unit},null,8,["label"])):M("",!0)]),"toggle-set-item":m(i=>[b(F,{variant:i.getVariant(i.item),color:i.getColor(i.item),class:q(i.getClass(i.item)),label:i.item.label,onClick:p=>i.toggle(i.item)},N({_:2},[i.item.unit?{name:"append",fn:m(()=>[b(n,{label:i.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=z(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:A,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
