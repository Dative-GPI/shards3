import{f as b,g as v,D as F,E as O,F as h,A}from"./vue.esm-bundler-f632b118.js";import{F as C}from"./FSAutocompleteField-643ca4a2.js";import{C as _}from"./base-dd7352d9.js";import{S as V}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-0b8943d1.js";import{u as w}from"./useAutocomplete-5bae40b5.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./FSCol-606e8271.js";import"./FSSearchField-b1f9a31f.js";import"./FSTextField-58ff63bb.js";import"./VField-d1df4052.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./FSRow-76f4ad1e.js";import"./css-185b4786.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./FSIcon-8032a9d1.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-29d13699.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSCheckbox-bde4293d.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./VSelect-3062dd8b.js";import"./VMenu-d9a134b2.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";import"./filter-dd5b3c74.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";class u{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class U extends u{constructor(t){super(t),this.description=t.description}}const d=()=>`${_()}/organisation-types`,k=e=>`${d()}/${encodeURIComponent(e)}`,N=new V("organisationType",U).create(e=>e.build(e.addGet(k),e.addGetMany(d,u),e.addNotify())),R=D.getMany(N),g=b({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:C},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:r,entities:i}=R(),l=v(()=>T.value&&r.value),n=f=>a({...e.organisationTypeFilters,search:f??void 0}),{toggleSet:y,init:T,onUpdate:S}=w(i,[()=>e.organisationTypeFilters],t,n);return{organisationTypes:i,toggleSet:y,loading:l,onUpdate:S}}});function q(e,t,a,r,i,l){const n=F("FSAutocompleteField");return O(),h(n,A({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const c=$(g,[["render",q]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const at={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:c,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
