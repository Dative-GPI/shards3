var U=Object.defineProperty;var k=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var a=(e,t,r)=>k(e,typeof t!="symbol"?t+"":t,r);import{d as D,c,y as g,z as f,A as v,C as m,m as R,F as q,N as b,B as N,D as B}from"./vue.esm-bundler-l-siv0w9.js";import{F as T}from"./FSAutocompleteField-Dc7MOQbe.js";import{F as y}from"./FSButton-DcUuAZqz.js";import{F as O}from"./FSImage-ffhN4Yyt.js";import{C as E}from"./base-BWToAT4M.js";import{S as j}from"./serviceFactory-DAEdCiSt.js";import{C as M}from"./composableFactory-C5FI4e55.js";import{u as L}from"./useAutocomplete-ConHaqE0.js";import{u as z}from"./useTranslations-CJK8D24x.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as P}from"./FSCol-BvqytbKT.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-2hgW8eHf.js";import"./FSCard-DL4SLpmS.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CBieAKh7.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSIcon-uIr9VdFq.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSLoader-kY4Od3NB.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-CELx6cWV.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSClickable-Up0p3Vk8.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./lodash-BiW_TGGX.js";class A{constructor(t){a(this,"id");a(this,"imageId");a(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class H extends A{constructor(r){super(r);a(this,"description");this.description=r.description}}const C=()=>`${E()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=D({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:O},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:i}=K(),{$tr:p}=z(),l=c(()=>_.value&&s.value),u=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),o=x=>r({...e.manufacturerFilters,search:x??void 0}),{toggleSet:d,init:_,onUpdate:$}=L(i,[()=>e.manufacturerFilters],t,o);return{manufacturers:i,placeholder:u,toggleSet:d,loading:l,onUpdate:$}}});function Q(e,t,r,s,i,p){const l=g("FSImage"),u=g("FSAutocompleteField");return f(),v(u,R({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:o})=>[o.imageId?(f(),v(l,{key:0,height:"26px",width:"26px",imageId:o.imageId,thumbnail:!0},null,8,["imageId"])):q("",!0)]),"toggle-set-item":m(o=>[b(y,{padding:o.item.imageId?["6px 16px","4px 12px"]:void 0,variant:o.getVariant(o.item),color:o.getColor(o.item),class:B(o.getClass(o.item)),label:o.item.label,onClick:d=>o.toggle(o.item)},N({_:2},[o.item.imageId?{name:"prepend",fn:m(()=>[b(l,{height:"26px",width:"26px",imageId:o.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=G(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const At={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:P},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,h,S;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Ct=["Variations"];export{n as Variations,Ct as __namedExportsOrder,At as default};
