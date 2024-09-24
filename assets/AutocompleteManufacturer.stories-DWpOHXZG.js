var $=Object.defineProperty;var x=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var a=(e,t,r)=>x(e,typeof t!="symbol"?t+"":t,r);import{d as U,c,y as g,z as f,A as v,B as m,m as k,D,L as F,M as R,P as q}from"./vue.esm-bundler-BSyvBTC9.js";import{F as N}from"./FSAutocompleteField-DYa8eseR.js";import{F as M}from"./FSButton-CzT4qk-w.js";import{F as B}from"./FSImage-VV4rkzPN.js";import{C as T}from"./base-1FyQZYnT.js";import{S as O}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-wHNy9kQa.js";import{u as L}from"./useAutocomplete-BLpvFch6.js";import{u as j}from"./useTranslations-CdSqQFV3.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-DZA6pxA1.js";import"./FSSearchField-BTP0Kv2l.js";import"./FSTextField-VVHNKRY7.js";import"./FSBaseField-CEXO2T_h.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-DvdcLDtW.js";import"./color--o2QfpAv.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./VIcon-BQIm0b3J.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-C8KBePTS.js";import"./VProgressCircular-D09FP1rk.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-Bh07lE_k.js";import"./FSCard-CiUY3jF9.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-B39qfVC2.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./FSCheckbox-M73AcfXp.js";import"./FSIcon-BVNp7pcM.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader--MJuLA8w.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./filter-DuGNEgHB.js";import"./FSClickable-D0EdtzT9.js";import"./FSImageUI-NfwyqzmC.js";import"./useImages-H1Zoj8aR.js";import"./base-CmdGny12.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./lodash-BiW_TGGX.js";class y{constructor(t){a(this,"id");a(this,"imageId");a(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class P extends y{constructor(r){super(r);a(this,"description");this.description=r.description}}const A=()=>`${T()}/manufacturers`,H=e=>`${A()}/${encodeURIComponent(e)}`,J=new O("manufacturer",P).create(e=>e.build(e.addGet(H),e.addGetMany(A,y),e.addNotify())),K=E.getMany(J),C=U({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:N,FSButton:M,FSImage:B},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:i}=K(),{$tr:p}=j(),l=c(()=>I.value&&s.value),u=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),o=_=>r({...e.manufacturerFilters,search:_??void 0}),{toggleSet:d,init:I,onUpdate:w}=L(i,[()=>e.manufacturerFilters],t,o);return{manufacturers:i,placeholder:u,toggleSet:d,loading:l,onUpdate:w}}});function Q(e,t,r,s,i,p){const l=g("FSImage"),u=g("FSAutocompleteField");return f(),v(u,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:o})=>[o.imageId?(f(),v(l,{key:0,height:"26px",width:"26px",imageId:o.imageId},null,8,["imageId"])):D("",!0)]),"toggle-set-item":m(o=>[F(M,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:q(o.getClass(o.item)),label:o.item.label,onClick:d=>o.toggle(o.item)},R({_:2},[o.item.imageId?{name:"prepend",fn:m(()=>[F(l,{height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const V=z(C,[["render",Q]]);C.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const ht={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:V,FSCol:G},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const Mt=["Variations"];export{n as Variations,Mt as __namedExportsOrder,ht as default};
