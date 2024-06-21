import{d as b,c as M,y,z as h,A,m as C}from"./vue.esm-bundler-DUki7rNA.js";import{F as V}from"./FSAutocompleteField-BOl3qm2w.js";import{C as _}from"./base-DlhEylMe.js";import{S as w}from"./serviceFactory-D_XwB3_y.js";import{C as U}from"./composableFactory-cXrrETVr.js";import{u as $}from"./useAutocomplete-DyW0s6dv.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as D}from"./FSCol-BBaW1DrL.js";import"./FSSearchField-CdKhC7Ro.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./FSSpan-DUTdSgpN.js";import"./useSlots-BZu_lZyn.js";import"./FSRow-CHgEOZQb.js";import"./css-BPLLlL3Y.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./VSpacer-CujVv6t6.js";import"./useRender-pAH_6Aah.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./anchor-32zVg6UX.js";import"./rounded-CuOTz_ni.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./FSCard-CqpJmiEC.js";import"./FSIcon-CSwom3lG.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./useTranslations-LhdkJQ98.js";import"./FSDialogMenu-5l5lej0t.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./router-C5N3y4B3.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSToggleSet-Drtcc7mS.js";import"./FSSlideGroup-DhG_7ZhN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./FSWrapGroup-CVJTSX_U.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./VSelect-Doh8ERno.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VMenu-BMkRa5on.js";import"./filter-CYwgxO9I.js";import"./useAppOrganisationId-CXBwfEoF.js";import"./lodash-BiW_TGGX.js";class s{constructor(t){this.id=t.id,this.imageId=t.imageId,this.label=t.label}}class k extends s{constructor(t){super(t),this.description=t.description}}const c=()=>`${_()}/manufacturers`,q=e=>`${c()}/${encodeURIComponent(e)}`,I=new w("manufacturer",k).create(e=>e.build(e.addGet(q),e.addGetMany(c,s),e.addNotify())),N=U.getMany(I),d=b({name:"FSAutocompleteManufacturer",components:{FSAutocompleteField:V},props:{manufacturerFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:n,entities:r}=N(),u=v=>l({...e.manufacturerFilters,search:v??void 0}),{toggleSet:a,init:g,onUpdate:F}=$(r,[()=>e.manufacturerFilters],t,u),S=M(()=>g.value&&n.value);return{manufacturers:r,toggleSet:a,loading:S,onUpdate:F}}});function O(e,t,l,n,r,u){const a=y("FSAutocompleteField");return h(),A(a,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.manufacturers,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const f=R(d,[["render",O]]);d.__docgenInfo={displayName:"FSAutocompleteManufacturer",exportName:"default",description:"",tags:{},props:[{name:"manufacturerFilters",type:{name:"ManufacturerFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteManufacturer.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteManufacturer",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteManufacturer:f,FSCol:D},props:Object.keys(t),setup(){return{...e}},template:`
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
