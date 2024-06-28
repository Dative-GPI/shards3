var T=Object.defineProperty;var N=(t,e,a)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>N(t,typeof e!="symbol"?e+"":e,a);import{d as O,c as q,y as F,z as r,A as s,B as l,m as M,D as p,K as d,E as y,G as v,S as U}from"./vue.esm-bundler-DeSao-KJ.js";import{F as R}from"./FSAutocompleteField-Bw5pxeZI.js";import{F as V}from"./FSButton-D6GGw85S.js";import{F as B}from"./FSChip-CvnVdb24.js";import{_ as D}from"./FSSpan-t6bMdSRn.js";import{_ as b}from"./FSRow-3OGCtpd3.js";import{C as L}from"./base-Db9bJp6t.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-rrf4GM2L.js";import{u as x}from"./useAutocomplete-DIOO3j-W.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-BOlzFTtE.js";import"./FSSearchField-BUpbPXdT.js";import"./FSTextField-CBZxwtPQ.js";import"./VField-BWZAeurz.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-B305xNW4.js";import"./FSCard-DpjcfU0S.js";import"./css-BnhLLynS.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-B-AaR8_t.js";import"./FSRadio-DF3Q_BUT.js";import"./FSIcon-DnAZkNNf.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-CuSFlQ_p.js";import"./FSSlideGroup-4MKLrf7H.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BqfSbuxd.js";import"./FSCheckbox-CIeG0BlT.js";import"./FSFadeOut-D6QzK9Bb.js";import"./FSLoader-BG9q5Y9c.js";import"./elevation-BBJMtRPf.js";import"./VSelect-LTiXWW2L.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSClickable-BuSeNFdG.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class K{constructor(e){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=e.id,this.inputValue=e.inputValue,this.outputValue=e.outputValue}}class A{constructor(e){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryCode=e.dataCategoryCode,this.dataCategoryLabel=e.dataCategoryLabel,this.code=e.code,this.label=e.label,this.description=e.description,this.dataTable=e.dataTable,this.useOnlyMappings=e.useOnlyMappings,this.unit=e.unit,this.codes=e.codes.slice(),this.mappings=((a=e.mappings)==null?void 0:a.map(m=>new K(m)))??[]}}class P extends A{constructor(e){super(e)}}const w=()=>`${L()}/data-definitions`,H=t=>`${w()}/${encodeURIComponent(t)}`,J=new E("dataDefinition",P).create(t=>t.build(t.addGet(H),t.addGetMany(w,A),t.addNotify())),Q=j.getMany(J),I=O({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:R,FSButton:V,FSChip:B,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:m,entities:f}=Q(),S=q(()=>o.value&&m.value),n=$=>a({...t.dataDefinitionFilters,search:$??void 0}),{toggleSet:g,init:o,onUpdate:u}=x(f,[()=>t.dataDefinitionFilters],e,n);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:u}}});function W(t,e,a,m,f,S){const n=F("FSChip"),g=F("FSAutocompleteField");return r(),s(g,M({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataDefinitions,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":l(({item:o})=>[t.$props.modelValue?(r(),s(b,{key:0,align:"center-center",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,null,{default:l(()=>[y(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"item-label":l(({item:o,font:u})=>[d(b,{align:"center-left",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,{font:u},{default:l(()=>[y(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(o=>[d(V,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:u=>o.toggle(o.item)},{prepend:l(()=>[o.item.unit?(r(),s(n,{key:0,label:o.item.unit},null,8,["label"])):p("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const k=G(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteDataDefinition:k,FSCol:z},props:Object.keys(e),setup(){return{...t}},template:`
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
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const ht=["Variations"];export{c as Variations,ht as __namedExportsOrder,vt as default};
