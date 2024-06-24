import{d as b,c as v,y as F,z as O,A as h,m as A}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as C}from"./FSAutocompleteField-CkC_2HwE.js";import{C as _}from"./base-DT4A-z-k.js";import{S as V}from"./serviceFactory-D_XwB3_y.js";import{C as w}from"./composableFactory-C-hWj-Am.js";import{u as D}from"./useAutocomplete-B1zA08Rk.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./FSSpan-CFY7ptgg.js";import"./useSlots-CFCV5ffn.js";import"./FSRow-a7Q-CB2x.js";import"./css-CBTOQ7jk.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./FSIcon-CcDweDXn.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./useAppOrganisationId-BMb45lkt.js";import"./lodash-BiW_TGGX.js";class u{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class U extends u{constructor(t){super(t),this.description=t.description}}const d=()=>`${_()}/organisation-types`,k=e=>`${d()}/${encodeURIComponent(e)}`,N=new V("organisationType",U).create(e=>e.build(e.addGet(k),e.addGetMany(d,u),e.addNotify())),R=w.getMany(N),g=b({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:C},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:r,entities:i}=R(),l=v(()=>T.value&&r.value),n=f=>a({...e.organisationTypeFilters,search:f??void 0}),{toggleSet:y,init:T,onUpdate:S}=D(i,[()=>e.organisationTypeFilters],t,n);return{organisationTypes:i,toggleSet:y,loading:l,onUpdate:S}}});function q(e,t,a,r,i,l){const n=F("FSAutocompleteField");return O(),h(n,A({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const c=$(g,[["render",q]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const at={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:c,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var p,s,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      FSAutocompleteOrganisationType,
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
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const rt=["Variations"];export{o as Variations,rt as __namedExportsOrder,at as default};
