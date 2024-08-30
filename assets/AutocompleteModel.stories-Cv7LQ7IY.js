var $=Object.defineProperty;var x=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>x(e,typeof t!="symbol"?t+"":t,a);import{d as k,c,y as g,z as f,A as b,B as d,m as D,D as L,L as v,M as q,P as U}from"./vue.esm-bundler-BSwA4uJo.js";import{F as O}from"./FSAutocompleteField-CzLKCgFf.js";import{F as M}from"./FSButton-BsHdwUXb.js";import{F as B}from"./FSImage-D1H9jzFA.js";import{C as N}from"./base-COZVLn_8.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-D4M238ur.js";import{u as T}from"./useAutocomplete-CsDNIjqd.js";import{u as j}from"./useTranslations-9ULn9k53.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as G}from"./FSCol-B2fYQH2g.js";import"./FSSearchField-CPQWVqWj.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VSpacer-Bggt-xuP.js";import"./color-D9V7QeIP.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./transition-_APBsTwD.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./locale-CpxwvVE1.js";import"./VIcon-5UD9vI9m.js";import"./tag-VYeYJ1FC.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./VProgressCircular-Dac4kH3U.js";import"./anchor-CkzTvcVP.js";import"./rounded-CO2AQG9_.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BhqZCjBr.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./router-Cl1v_ijq.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./group-CrHjrh7w.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./FSCheckbox-Biwr0a4k.js";import"./FSIcon-BnX9YboA.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./filter-BvtvTs1b.js";import"./FSClickable-DxIbWXqH.js";import"./FSImageUI-FC5mP69p.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-DRTS5QPJ.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){l(this,"id");l(this,"manufacturerId");l(this,"manufacturerLabel");l(this,"imageId");l(this,"code");l(this,"label");l(this,"connectable");this.id=t.id,this.manufacturerId=t.manufacturerId,this.manufacturerLabel=t.manufacturerLabel,this.imageId=t.imageId,this.code=t.code,this.label=t.label,this.connectable=t.connectable}}class P extends y{constructor(t){super(t)}}const C=()=>`${N()}/models`,H=e=>`${C()}/${encodeURIComponent(e)}`,J=new R("model",P).create(e=>e.build(e.addGet(H),e.addGetMany(C,y),e.addNotify())),K=E.getMany(J),A=k({name:"FSAutocompleteModel",components:{FSAutocompleteField:O,FSButton:M,FSImage:B},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:m}=K(),{$tr:u}=j(),r=c(()=>V.value&&s.value),n=c(()=>e.multiple&&e.modelValue?u("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),o=_=>a({...e.modelFilters,search:_??void 0}),{toggleSet:p,init:V,onUpdate:w}=T(m,[()=>e.modelFilters],t,o);return{placeholder:n,toggleSet:p,loading:r,models:m,onUpdate:w}}});function Q(e,t,a,s,m,u){const r=g("FSImage"),n=g("FSAutocompleteField");return f(),b(n,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):L("",!0)]),"toggle-set-item":d(o=>[v(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:p=>o.toggle(o.item)},q({_:2},[o.item.imageId?{name:"prepend",fn:d(()=>[v(r,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const I=z(A,[["render",Q]]);A.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteModel:I,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
