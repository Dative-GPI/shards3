import{j as v,e as F,I as O,J as h,K as A,A as C}from"./vue.esm-bundler-82a4b45a.js";import{F as V}from"./FSAutocompleteField-61ca200a.js";import{C as w}from"./base-ec6565f2.js";import{S as D}from"./serviceFactory-7552fe10.js";import{C as _}from"./composableFactory-2f513de5.js";import{u as I}from"./useAutocomplete-14a2146a.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-8326ac62.js";import"./FSButton-fa754e08.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./FSRow-2ccfd21b.js";import"./css-c39c4a6e.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-6b833922.js";import"./FSSlideGroup-8338acae.js";import"./FSButtonNextIcon-e9cfd47b.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VSelect-fca10f65.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VMenu-9dbbffaa.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./index-0f4b4beb.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./filter-4073c1af.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";class d{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class k extends d{constructor(t){super(t),this.description=t.description}}const g=()=>`${w()}/organisation-types`,N=e=>`${g()}/${encodeURIComponent(e)}`,R=new D("organisationType",k).create(e=>e.build(e.addGet(N),e.addGetMany(g,d),e.addNotify())),q=_.getMany(R),c=v({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:V},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:l,entities:n}=q(),s=b=>r({...e.organisationTypeFilters,search:b??void 0}),{toggleSet:i,search:a,init:T,onUpdate:S}=I(n,[()=>e.organisationTypeFilters],t,s),f=F(()=>T.value&&l.value);return{organisationTypes:n,toggleSet:i,loading:f,search:a,onUpdate:S}}});function j(e,t,r,l,n,s){const i=O("FSAutocompleteField");return h(),A(i,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.organisationTypes,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const y=$(c,[["render",j]]);c.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const Xe={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:y,FSCol:U},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ze=["Variations"];export{o as Variations,Ze as __namedExportsOrder,Xe as default};
