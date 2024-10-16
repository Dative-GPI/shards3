var V=Object.defineProperty;var C=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>C(e,typeof t!="symbol"?t+"":t,o);import{d as w,c as p,y as D,z as $,A as _,m as I}from"./vue.esm-bundler-DTB_q9xr.js";import{F as q}from"./FSAutocompleteField-DuCNkEhn.js";import{C as U}from"./base-XmH0JLOD.js";import{S as k}from"./serviceFactory-DAEdCiSt.js";import{C as g}from"./composableFactory-CG8osPlO.js";import{u as N}from"./useAutocomplete-BtD8I2ep.js";import{u as R}from"./useTranslations-BehwFxDb.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-BBC3eCHt.js";import"./FSTextField-qQes8uOA.js";import"./FSBaseField-Dpf8Uwfy.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-B16sP4OM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./FSButton-C_Cm7MkX.js";import"./FSClickable-BQ3H9eJY.js";import"./FSCard-DwYAEOV7.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSIcon-D2mo_-bk.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-Z-9pqcp8.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-ee8qfy-K.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DPw1w2WV.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-Boww2xu7.js";import"./FSWrapGroup-WVEwtX4p.js";import"./FSCheckbox-aOsAP6ny.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-DmK3zGT8.js";import"./FSLoader-CpOtM_ow.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-BtiKvWUf.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-YuJ29I4v.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./useAppOrganisationId-C2nceDRs.js";import"./lodash-BiW_TGGX.js";class c{constructor(t){i(this,"id");i(this,"mainDashboardId");i(this,"mainDashboardType");i(this,"code");i(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class G extends c{constructor(o){super(o);i(this,"description");this.description=o.description}}const y=()=>`${U()}/organisation-types`,M=e=>`${y()}/${encodeURIComponent(e)}`,f=new k("organisationType",G).create(e=>e.build(e.addGet(M),e.addGetMany(y,c),e.addNotify()));g.get(f);const j=g.getMany(f),b=w({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:q},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:l,entities:n}=j(),{$tr:s}=R(),r=p(()=>O.value&&l.value),h=p(()=>e.multiple&&e.modelValue?s("ui.autocomplete-organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),v=A=>o({...e.organisationTypeFilters,search:A??void 0}),{toggleSet:S,init:O,onUpdate:F}=N(n,[()=>e.organisationTypeFilters],t,v);return{organisationTypes:n,placeholder:h,toggleSet:S,loading:r,onUpdate:F}}});function x(e,t,o,l,n,s){const r=D("FSAutocompleteField");return $(),_(r,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const T=B(b,[["render",x]]);b.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const dt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:T,FSCol:E},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const gt=["Variations"];export{a as Variations,gt as __namedExportsOrder,dt as default};
