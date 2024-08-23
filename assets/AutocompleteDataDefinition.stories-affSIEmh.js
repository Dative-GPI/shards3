var M=Object.defineProperty;var q=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>q(e,typeof t!="symbol"?t+"":t,a);import{d as U,c as v,y,z as d,A as p,M as h,B as l,m as L,L as r,E as C,G as V,D,P as R}from"./vue.esm-bundler-BATn8cDU.js";import{F as B}from"./FSAutocompleteField-DBYsLacO.js";import{F as I}from"./FSButton-CvqXFT9l.js";import{F as E}from"./FSChip-DtyKUuEy.js";import{_ as b}from"./FSSpan-C8YxV3Vj.js";import{_ as S}from"./FSRow-Gvoj2sTW.js";import{C as j}from"./base-DxU3iujb.js";import{S as G}from"./serviceFactory-Bd5jifNi.js";import{C as x}from"./composableFactory-CvKYYcO3.js";import{u as z}from"./useAutocomplete-CUJlsrfT.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./FSCol-D9tDKebi.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./FSIcon-CM3DCfji.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-B9o4BEyu.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./lodash-BiW_TGGX.js";class J{constructor(t){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class k{constructor(t){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new J(s)))??[]}}class K extends k{constructor(t){super(t)}}const $=()=>`${j()}/data-definitions`,Q=e=>`${$()}/${encodeURIComponent(e)}`,W=new G("dataDefinition",K).create(e=>e.build(e.addGet(Q),e.addGetMany($,k),e.addNotify())),X=x.getMany(W),T=U({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:I,FSChip:E,FSSpan:b,FSRow:S},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:u}=X(),F=v(()=>m.value&&s.value),n=v(()=>{if(!e.multiple)return u.value.find(g=>g.id===e.modelValue)}),f=g=>a({...e.dataDefinitionFilters,search:g??void 0}),{toggleSet:o,init:m,onUpdate:O}=z(u,[()=>e.dataDefinitionFilters],t,f);return{dataDefinitions:u,toggleSet:o,selected:n,loading:F,onUpdate:O}}});function Y(e,t,a,s,u,F){const n=y("FSChip"),f=y("FSAutocompleteField");return d(),p(f,L({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),h({"autocomplete-selection":l(({item:o})=>[e.$props.modelValue?(d(),p(S,{key:0,align:"center-center",padding:"0 8px 0 0",gap:"4px",wrap:!1},{default:l(()=>[r(b,null,{default:l(()=>[C(V(o.raw.label),1)]),_:2},1024),e.$props.multiple&&o.raw.unit?(d(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):D("",!0)]),_:2},1024)):D("",!0)]),"item-label":l(({item:o,font:m})=>[r(S,{align:"center-left",wrap:!1},{default:l(()=>[r(b,{font:m},{default:l(()=>[C(V(o.raw.label),1)]),_:2},1032,["font"]),o.raw.unit?(d(),p(n,{key:0,label:o.raw.unit},null,8,["label"])):D("",!0)]),_:2},1024)]),"toggle-set-item":l(o=>[r(I,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:R(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},h({_:2},[o.item.unit?{name:"append",fn:l(()=>[r(n,{label:o.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:2},[e.selected&&e.selected.unit?{name:"autocomplete-suffix",fn:l(()=>[r(n,{label:e.selected.unit},null,8,["label"])]),key:"0"}:void 0]),1040,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const N=P(T,[["render",Y]]);T.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:N,FSCol:H},props:Object.keys(t),setup(){return{...e}},template:`
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
