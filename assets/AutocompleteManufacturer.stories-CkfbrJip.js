var $=Object.defineProperty;var x=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{d as U,c,y as g,z as f,A as v,B as m,m as k,D,L as F,M as R,P as q}from"./vue.esm-bundler-DR8xMV81.js";import{F as N}from"./FSAutocompleteField-CgJLV7vS.js";import{F as M}from"./FSButton-dygcJigB.js";import{F as B}from"./FSImage-CZ60VWze.js";import{C as T}from"./base-BZ9BoqOK.js";import{S as O}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-CS2nLnTC.js";import{u as L}from"./useAutocomplete-ByAJaOya.js";import{u as j}from"./useTranslations-yeF_ketc.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-CeBQ3oDD.js";import"./FSSearchField-Bq06o8e_.js";import"./FSTextField-D1knM6ZC.js";import"./FSBaseField-DHYm3Nnq.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-4gNoc1f6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./VIcon-CB8o8wL4.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./VProgressCircular-CQOkkHxu.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSDialogMenu-S1YJQnc4.js";import"./FSCard-Kv363PpN.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./FSSlideGroup-DzQLe6nE.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./FSToggleSet-Cq5k0B3E.js";import"./FSWrapGroup-DcKuNYil.js";import"./FSCheckbox-CM8et16Q.js";import"./FSIcon-Cgoa9X6m.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSFadeOut-DfM6QCr8.js";import"./FSLoader-1uGemamf.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-BvL3MFCL.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./VImg-MapJeLY6.js";import"./VSelect-BEai7CeO.js";import"./VMenu-5z8CiYXe.js";import"./filter-Ct2lxthn.js";import"./FSClickable-CP6bLZUE.js";import"./FSImageUI-BT05rttq.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-D_AG8bST.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){r(this,"id");r(this,"imageId");r(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class P extends y{constructor(a){super(a);r(this,"description");this.description=a.description}}const A=()=>`${T()}/manufacturers`,H=e=>`${A()}/${encodeURIComponent(e)}`,J=new O("manufacturer",P).create(e=>e.build(e.addGet(H),e.addGetMany(A,y),e.addNotify())),K=E.getMany(J),C=U({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:N,FSButton:M,FSImage:B},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:i}=K(),{$tr:p}=j(),l=c(()=>I.value&&s.value),u=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),o=_=>a({...e.manufacturerFilters,search:_??void 0}),{toggleSet:d,init:I,onUpdate:w}=L(i,[()=>e.manufacturerFilters],t,o);return{manufacturers:i,placeholder:u,toggleSet:d,loading:l,onUpdate:w}}});function Q(e,t,a,s,i,p){const l=g("FSImage"),u=g("FSAutocompleteField");return f(),v(u,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:o})=>[o.imageId?(f(),v(l,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):D("",!0)]),"toggle-set-item":m(o=>[F(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:q(o.getClass(o.item)),label:o.item.label,onClick:d=>o.toggle(o.item)},R({_:2},[o.item.imageId?{name:"prepend",fn:m(()=>[F(l,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const V=z(C,[["render",Q]]);C.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const St={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:V,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var S,b,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      FSAutocompleteManufacturer,
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
      <FSAutocompleteManufacturer
        label="Manufacturer"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteManufacturer
        label="Manufacturer with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const bt=["Variations"];export{n as Variations,bt as __namedExportsOrder,St as default};
