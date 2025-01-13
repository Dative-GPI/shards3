var _=Object.defineProperty;var q=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var o=(e,t,r)=>q(e,typeof t!="symbol"?t+"":t,r);import{d as x,c,A as g,B as f,D as m,j as D,I as b,G as R,P as h,C as N,E as B}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as T}from"./FSAutocompleteField-DJKWDuqJ.js";import{F as y}from"./FSButton-BDSx2V0J.js";import{F as E}from"./FSImage-CRET8ZWw.js";import{C as O}from"./base-KmQLDroH.js";import{S as j}from"./serviceFactory-qtdw0UKd.js";import{C as M}from"./composableFactory-K8W9GIHH.js";import{u as G}from"./useAutocomplete-BnDWNIS6.js";import{u as L}from"./useTranslations-DJOHKWsD.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as z}from"./FSCol-D35grUmj.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./resizeObserver-EZycJKNh.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./VList-CxEWDEvR.js";import"./FSCard-Dlw97Dqr.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./FSIcon-BwW5Hq8i.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSImageUI-C9-ibhOt.js";import"./useImages-M2XVSUqr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CJrsyj37.js";import"./useAppOrganisationId-C2_s9Mh4.js";import"./lodash-BrWYvtk2.js";class A{constructor(t){o(this,"id");o(this,"imageId");o(this,"label");this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class H extends A{constructor(r){super(r);o(this,"description");this.description=r.description}}const C=()=>`${O()}/manufacturers`,J=e=>`${C()}/${encodeURIComponent(e)}`,V=new j("manufacturer",H).create(e=>e.build(e.addGet(J),e.addGetMany(C,A),e.addNotify()));M.get(V);const K=M.getMany(V),I=x({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:T,FSButton:y,FSImage:E},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:s,entities:u}=K(),{$tr:p}=L(),l=c(()=>$.value&&s.value),i=c(()=>e.multiple&&e.modelValue?p("ui.autocomplete-manufacturer.placeholder","{0} manufacturer(s) selected",e.modelValue.length):null),a=k=>r({...e.manufacturerFilters,search:k??void 0}),{toggleSet:d,init:$,onUpdate:U}=G(u,[()=>e.manufacturerFilters],t,a);return{manufacturers:u,placeholder:i,toggleSet:d,loading:l,onUpdate:U}}});function Q(e,t,r,s,u,p){const l=g("FSImage"),i=g("FSAutocompleteField");return b(),f(i,D({label:e.$props.label??e.$tr("ui.common.manufacturer","Manufacturer"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:a})=>[a.imageId?(b(),f(l,{key:0,height:"26px",width:"26px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):R("",!0)]),"toggle-set-item":m(a=>[h(y,{padding:a.item.imageId?["6px 16px","4px 12px"]:void 0,variant:a.getVariant(a.item),color:a.getColor(a.item),class:B(a.getClass(a.item)),label:a.item.label,onClick:d=>a.toggle(a.item)},N({_:2},[a.item.imageId?{name:"prepend",fn:m(()=>[h(l,{height:"26px",width:"26px",imageId:a.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const w=P(I,[["render",Q]]);I.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:w,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,F,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const Vt=["Variations"];export{n as Variations,Vt as __namedExportsOrder,Ct as default};
