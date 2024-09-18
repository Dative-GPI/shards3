var F=Object.defineProperty;var A=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>A(e,typeof t!="symbol"?t+"":t,o);import{d as V,c as p,y as C,z as w,A as D,m as $}from"./vue.esm-bundler-BSyvBTC9.js";import{F as _}from"./FSAutocompleteField-B-z9UHhO.js";import{C as I}from"./base-1FyQZYnT.js";import{S as q}from"./serviceFactory-Bd5jifNi.js";import{C as U}from"./composableFactory-wHNy9kQa.js";import{u as k}from"./useAutocomplete-DJqfEmOV.js";import{u as N}from"./useTranslations-CdSqQFV3.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-CtQDyyQv.js";import"./FSSearchField-DNmC1QFE.js";import"./FSTextField-D-F2DIF_.js";import"./FSBaseField-D2YBKhIh.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-B3SJi8FA.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-DvVRr-Q9.js";import"./FSClickable-D9Ppoc0d.js";import"./FSCard-CjHnVBHV.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./FSIcon-DuyQgQFI.js";import"./VIcon-BIpY_noq.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-DZZe1S1I.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-BysYk75t.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CES2Gcvq.js";import"./FSWrapGroup-WxGi_YEL.js";import"./FSCheckbox-Dn5SdBcD.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Cf3XjCz3.js";import"./FSLoader-fdbCjZEQ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BSuFa48d.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-D1irgDfU.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./lodash-BiW_TGGX.js";class g{constructor(t){i(this,"id");i(this,"mainDashboardId");i(this,"mainDashboardType");i(this,"code");i(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class E extends g{constructor(o){super(o);i(this,"description");this.description=o.description}}const c=()=>`${I()}/organisation-types`,G=e=>`${c()}/${encodeURIComponent(e)}`,M=new q("organisationType",E).create(e=>e.build(e.addGet(G),e.addGetMany(c,g),e.addNotify())),j=U.getMany(M),y=V({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:_},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:r,entities:n}=j(),{$tr:s}=N(),l=p(()=>v.value&&r.value),b=p(()=>e.multiple&&e.modelValue?s("ui.autocomplete-organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),T=O=>o({...e.organisationTypeFilters,search:O??void 0}),{toggleSet:h,init:v,onUpdate:S}=k(n,[()=>e.organisationTypeFilters],t,T);return{organisationTypes:n,placeholder:b,toggleSet:h,loading:l,onUpdate:S}}});function x(e,t,o,r,n,s){const l=C("FSAutocompleteField");return w(),D(l,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const f=R(y,[["render",x]]);y.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:f,FSCol:B},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ut=["Variations"];export{a as Variations,ut as __namedExportsOrder,mt as default};
