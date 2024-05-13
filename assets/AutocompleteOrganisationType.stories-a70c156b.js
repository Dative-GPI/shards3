import{j as b,e as v,I as F,J as O,K as h,B as A}from"./vue.esm-bundler-857e5af7.js";import{F as C}from"./FSAutocompleteField-95ce1ca1.js";import{C as _}from"./base-0cefeb30.js";import{S as V}from"./serviceFactory-7552fe10.js";import{C as w}from"./composableFactory-64294cb0.js";import{u as D}from"./useAutocomplete-ecc57bef.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as $}from"./FSCol-439c812a.js";import"./FSToggleSet-32c663bb.js";import"./FSSlideGroup-0f6a80f8.js";import"./FSButtonNextIcon-cf7184c0.js";import"./FSButton-821f7325.js";import"./FSClickable-d206c837.js";import"./FSCard-c144a688.js";import"./FSRow-e30f1dcc.js";import"./css-ab2bdb81.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./VProgressCircular-593755b1.js";import"./color-5d3cc229.js";import"./useRender-d5beceb3.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./FSIcon-faf0e444.js";import"./VSlideGroup-23212639.js";import"./index-d6be2044.js";import"./display-56858c3a.js";import"./goto-975c1e2c.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./group-501836f7.js";import"./FSWrapGroup-47fc2c20.js";import"./VInput-6c2a4fd3.js";import"./transition-2a27d0f7.js";import"./density-69cd8efb.js";import"./dimensions-d7f5c5ad.js";import"./VField-9dc825df.js";import"./VSpacer-37a4cd9a.js";import"./VLabel-820f7887.js";import"./loader-b99105cf.js";import"./rounded-67c03651.js";import"./VDefaultsProvider-51a3a301.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-d1b08f47.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./index-f95cc40a.js";import"./FSLoader-ff56dc12.js";import"./elevation-d5a2e352.js";import"./VSelect-2f600942.js";import"./VTextField-9b5f1e4d.js";import"./index-098e590d.js";import"./VOverlay-dc792521.js";import"./lazy-f71c8f0f.js";import"./router-bca8c92a.js";import"./scopeId-49b20494.js";import"./VMenu-ddfad70d.js";import"./ssrBoot-4aec2e0b.js";import"./border-43a3c780.js";import"./VImg-f3ba6161.js";import"./VDivider-6ea2ea72.js";import"./filter-24b96659.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./useDebounce-3221123d.js";class u{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class U extends u{constructor(t){super(t),this.description=t.description}}const d=()=>`${_()}/organisation-types`,k=e=>`${d()}/${encodeURIComponent(e)}`,N=new V("organisationType",U).create(e=>e.build(e.addGet(k),e.addGetMany(d,u),e.addNotify())),R=w.getMany(N),g=b({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:C},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:r,entities:i}=R(),l=v(()=>T.value&&r.value),n=f=>a({...e.organisationTypeFilters,search:f??void 0}),{toggleSet:y,init:T,onUpdate:S}=D(i,[()=>e.organisationTypeFilters],t,n);return{organisationTypes:i,toggleSet:y,loading:l,onUpdate:S}}});function q(e,t,a,r,i,l){const n=F("FSAutocompleteField");return O(),h(n,A({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const c=I(g,[["render",q]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const Ze={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:c,FSCol:$},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var s,p,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const et=["Variations"];export{o as Variations,et as __namedExportsOrder,Ze as default};
