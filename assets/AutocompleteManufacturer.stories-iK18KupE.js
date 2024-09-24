var $=Object.defineProperty;var x=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var a=(e,t,r)=>x(e,typeof t!="symbol"?t+"":t,r);import{d as U,c,y as g,z as f,A as v,B as m,m as k,D,L as F,M as R,P as q}from"./vue.esm-bundler-DjjVIdVI.js";import{F as N}from"./FSAutocompleteField-DOTJQYwk.js";import{F as M}from"./FSButton-P9SybKcj.js";import{F as B}from"./FSImage-3VFw9chG.js";import{C as T}from"./base-LOOo-Z1R.js";import{S as O}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-D0eCIUsD.js";import{u as L}from"./useAutocomplete-BGpKVulV.js";import{u as j}from"./useTranslations-f9CWAvtI.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-TPWSQPHs.js";import"./FSSearchField-Dqt7dw0w.js";import"./FSTextField-grpW8GtP.js";import"./FSBaseField-Dw6CfABe.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSRow-CpogXLW8.js";import"./css-BkQhD285.js";import"./useColors-C-2usiDI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-v7reDO7s.js";import"./VSpacer-CrqXaTz-.js";import"./color-BKGJvBEr.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./FSDialogMenu-cFa_PrXl.js";import"./FSCard-Ce4y4X7Y.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-HvDhUL_D.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-DRfIDUxK.js";import"./FSWrapGroup-B1tkF8GY.js";import"./FSCheckbox-3q2xNHw_.js";import"./FSIcon-DCIvejCK.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-Gld6KvqW.js";import"./FSLoader-EdeUV0_k.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-oVBzLccc.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BJ7aZkTZ.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./FSClickable-CYzkUmw_.js";import"./FSImageUI-DV07oa_w.js";import"./useImages-DPyqwdzZ.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){a(this,"id");a(this,"imageId");a(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class P extends y{constructor(r){super(r);a(this,"description");this.description=r.description}}const A=()=>`${T()}/manufacturers`,H=e=>`${A()}/${encodeURIComponent(e)}`,J=new O("manufacturer",P).create(e=>e.build(e.addGet(H),e.addGetMany(A,y),e.addNotify())),K=E.getMany(J),C=U({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:N,FSButton:M,FSImage:B},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:i}=K(),{$tr:p}=j(),l=c(()=>I.value&&s.value),u=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),o=_=>r({...e.manufacturerFilters,search:_??void 0}),{toggleSet:d,init:I,onUpdate:w}=L(i,[()=>e.manufacturerFilters],t,o);return{manufacturers:i,placeholder:u,toggleSet:d,loading:l,onUpdate:w}}});function Q(e,t,r,s,i,p){const l=g("FSImage"),u=g("FSAutocompleteField");return f(),v(u,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:o})=>[o.imageId?(f(),v(l,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):D("",!0)]),"toggle-set-item":m(o=>[F(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:q(o.getClass(o.item)),label:o.item.label,onClick:d=>o.toggle(o.item)},R({_:2},[o.item.imageId?{name:"prepend",fn:m(()=>[F(l,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const V=z(C,[["render",Q]]);C.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const yt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:V,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,S,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const At=["Variations"];export{n as Variations,At as __namedExportsOrder,yt as default};
