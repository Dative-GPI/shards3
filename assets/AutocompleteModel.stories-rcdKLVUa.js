var $=Object.defineProperty;var x=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{d as k,c,y as g,z as f,A as b,B as d,m as D,D as L,L as v,M as q,P as U}from"./vue.esm-bundler-Vj2X7okO.js";import{F as O}from"./FSAutocompleteField-Dcx_zOza.js";import{F as M}from"./FSButton-Dxr_k2yH.js";import{F as B}from"./FSImage-CpF11Kc7.js";import{C as N}from"./base-Cf5ASDDk.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-B0937_6N.js";import{u as T}from"./useAutocomplete-BIo_snCx.js";import{u as j}from"./useTranslations-DyPMaPr_.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-Bk577joi.js";import"./FSSearchField-ByY1EROu.js";import"./FSTextField-nbXKtPgl.js";import"./FSBaseField-DIHRCDOI.js";import"./FSSpan-C4TWI1ol.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-DJMBxSqq.js";import"./FSCard-IkM7vPXg.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DwZDosIV.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-D0rXU8K8.js";import"./FSWrapGroup-tsnhcXEt.js";import"./FSCheckbox-oizSWMk6.js";import"./FSIcon-CNrZYw3j.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-tlatQCTU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DBjzeRFm.js";import"./VList-CE84Ungi.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DDOJpQXv.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-B6i4bUTy.js";import"./FSImageUI-zYgpgCJu.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){l(this,"id");l(this,"manufacturerId");l(this,"manufacturerLabel");l(this,"imageId");l(this,"code");l(this,"label");l(this,"connectable");this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class P extends y{constructor(t){super(t)}}const C=()=>`${N()}/models`,H=e=>`${C()}/${encodeURIComponent(e)}`,J=new R("model",P).create(e=>e.build(e.addGet(H),e.addGetMany(C,y),e.addNotify())),K=E.getMany(J),A=k({name:"FSAutocompleteModel",components:{FSAutocompleteField:O,FSButton:M,FSImage:B},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:m}=K(),{$tr:u}=j(),r=c(()=>V.value&&s.value),n=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),o=_=>a({...e.modelFilters,search:_??void 0}),{toggleSet:p,init:V,onUpdate:w}=T(m,[()=>e.modelFilters],t,o);return{placeholder:n,toggleSet:p,loading:r,models:m,onUpdate:w}}});function Q(e,t,a,s,m,u){const r=g("FSImage"),n=g("FSAutocompleteField");return f(),b(n,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):L("",!0)]),"toggle-set-item":d(o=>[v(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:p=>o.toggle(o.item)},q({_:2},[o.item.imageId?{name:"prepend",fn:d(()=>[v(r,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const I=z(A,[["render",Q]]);A.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:I,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,S,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      FSAutocompleteModel,
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
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const St=["Variations"];export{i as Variations,St as __namedExportsOrder,ht as default};
