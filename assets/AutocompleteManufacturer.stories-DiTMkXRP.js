import{d as b,c as M,y,z as h,A,m as C}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as V}from"./FSAutocompleteField-CkC_2HwE.js";import{C as _}from"./base-DT4A-z-k.js";import{S as w}from"./serviceFactory-D_XwB3_y.js";import{C as U}from"./composableFactory-C-hWj-Am.js";import{u as $}from"./useAutocomplete-B1zA08Rk.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as D}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./FSRow-a7Q-CB2x.js";import"./css-CBTOQ7jk.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./FSIcon-CcDweDXn.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./useAppOrganisationId-BMb45lkt.js";import"./lodash-BiW_TGGX.js";class s{constructor(t){this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class k extends s{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,I=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,s),e.addNotify())),N=U.getMany(I),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=N(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:g,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=M(()=>g.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function O(e,t,l,n,r,u){const a=y("FSAutocompleteField");return h(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const f=R(d,[["render",O]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:f,FSCol:D},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const nt=["Variations"];export{o as Variations,nt as __namedExportsOrder,lt as default};
