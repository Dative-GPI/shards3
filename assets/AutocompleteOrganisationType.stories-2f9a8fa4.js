import{j as v,e as F,I as O,J as h,K as A,A as C}from"./vue.esm-bundler-3386cb71.js";import{F as V}from"./FSAutocompleteField-c07b5f3c.js";import{C as w}from"./base-4e5ccaa5.js";import{S as D}from"./serviceFactory-3393b4e4.js";import{C as _}from"./composableFactory-0f23559b.js";import{u as I}from"./useAutocomplete-e0c21e85.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSRow-9733beba.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VSelect-748790cd.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VMenu-e9f9429e.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./index-dcfb76a3.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./filter-a78161c9.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";class d{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class k extends d{constructor(t){super(t),this.description=t.description}}const g=()=>`${w()}/organisation-types`,N=e=>`${g()}/${encodeURIComponent(e)}`,R=new D("organisationType",k).create(e=>e.build(e.addGet(N),e.addGetMany(g,d),e.addNotify())),q=_.getMany(R),c=v({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:V},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:r,fetching:l,entities:n}=q(),s=b=>r({...e.organisationTypeFilters,search:b??void 0}),{toggleSet:i,search:a,init:T,onUpdate:S}=I(n,[()=>e.organisationTypeFilters],t,s),f=F(()=>T.value&&l.value);return{organisationTypes:n,toggleSet:i,loading:f,search:a,onUpdate:S}}});function j(e,t,r,l,n,s){const i=O("FSAutocompleteField");return h(),A(i,C({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.organisationTypes,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const y=$(c,[["render",j]]);c.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const Xe={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:y,FSCol:U},props:Object.keys(t),setup(){return{...e}},template:`
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
