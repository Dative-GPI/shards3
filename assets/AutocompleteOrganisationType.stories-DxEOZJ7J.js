var v=Object.defineProperty;var F=(e,t,o)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>F(e,typeof t!="symbol"?t+"":t,o);import{d as O,c as h,y as A,z as C,A as _,m as D}from"./vue.esm-bundler-DC82FEWN.js";import{F as V}from"./FSAutocompleteField-9Z77q9u9.js";import{C as w}from"./base-CMiH1YbJ.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as $}from"./composableFactory-J8cSLWf9.js";import{u as U}from"./useAutocomplete-CCZg0XDc.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-cgjePGb6.js";import"./FSClickable-CvEctr0N.js";import"./FSCard-TPuCZi-6.js";import"./FSIcon-CqTsM4Lx.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class d{constructor(t){i(this,"id");i(this,"mainDashboardId");i(this,"mainDashboardType");i(this,"code");i(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class R extends d{constructor(o){super(o);i(this,"description");this.description=o.description}}const g=()=>`${w()}/organisation-types`,q=e=>`${g()}/${encodeURIComponent(e)}`,E=new I("organisationType",R).create(e=>e.build(e.addGet(q),e.addGetMany(g,d),e.addNotify())),G=$.getMany(E),c=O({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:V},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:l,entities:a}=G(),s=h(()=>b.value&&l.value),r=f=>o({...e.organisationTypeFilters,search:f??void 0}),{toggleSet:T,init:b,onUpdate:S}=U(a,[()=>e.organisationTypeFilters],t,r);return{organisationTypes:a,toggleSet:T,loading:s,onUpdate:S}}});function M(e,t,o,l,a,s){const r=A("FSAutocompleteField");return C(),_(r,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const y=k(c,[["render",M]]);c.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const rt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:y,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const lt=["Variations"];export{n as Variations,lt as __namedExportsOrder,rt as default};
