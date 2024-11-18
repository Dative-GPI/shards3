var _=Object.defineProperty;var q=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var o=(e,t,r)=>q(e,typeof t!="symbol"?t+"":t,r);import{d as x,c,y as g,z as f,A as b,C as m,N as v,F as R,B as D,H as N,m as B}from"./vue.esm-bundler-D3ngFwGY.js";import{F as T}from"./FSAutocompleteField-B1f-d-lL.js";import{F as y}from"./FSButton-D8KNVcat.js";import{F as O}from"./FSImage-BwiE9qIQ.js";import{C as E}from"./base-DtpW3JT2.js";import{C as M}from"./composableFactory-EyPZGUD9.js";import{S as j}from"./serviceFactory-DaitGIKt.js";import{u as L}from"./useAutocomplete-BepmEoya.js";import{u as z}from"./useTranslations-Dmqoe3Kp.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as H}from"./FSCol-CVj0zcU5.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./FSIcon-C0akNC9K.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSImageUI-DPxZyIow.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./useAppOrganisationId-BemUUsho.js";import"./lodash-BiW_TGGX.js";class A{constructor(t){o(this,"id");o(this,"imageId");o(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class P extends A{constructor(r){super(r);o(this,"description");this.description=r.description}}const C=()=>`${E()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",P).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=x({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:O},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:u}=K(),{$tr:p}=z(),l=c(()=>$.value&&s.value),i=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),a=k=>r({...e.manufacturerFilters,search:k??void 0}),{toggleSet:d,init:$,onUpdate:U}=L(u,[()=>e.manufacturerFilters],t,a);return{manufacturers:u,placeholder:i,toggleSet:d,loading:l,onUpdate:U}}});function Q(e,t,r,s,u,p){const l=g("FSImage"),i=g("FSAutocompleteField");return f(),b(i,B({label:e.$props.label??e.$tr("autocomplete.manufacturer.label","Manufacturer"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:a})=>[a.imageId?(f(),b(l,{key:0,height:"26px",width:"26px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):N("",!0)]),"toggle-set-item":m(a=>[v(y,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:R(a.getClass(a.item)),label:a.item.label,onClick:d=>a.toggle(a.item)},D({_:2},[a.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:a.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=G(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:H},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const Vt=["Variations"];export{n as Variations,Vt as __namedExportsOrder,Ct as default};
