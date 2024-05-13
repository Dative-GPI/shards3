import{j as b,e as v,I as F,J as O,K as h,B as A}from"./vue.esm-bundler-41eda46b.js";import{F as C}from"./FSAutocompleteField-95896a23.js";import{C as _}from"./base-72a78366.js";import{S as V}from"./serviceFactory-7552fe10.js";import{C as w}from"./composableFactory-00c2f0ee.js";import{u as D}from"./useAutocomplete-0136f2aa.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as $}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./FSRow-1508d56d.js";import"./css-35e8563f.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-713345eb.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSCheckbox-90b24572.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./VSelect-defb5d1c.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./VMenu-499c8185.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";import"./filter-133522f7.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";class u{constructor(t){this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class U extends u{constructor(t){super(t),this.description=t.description}}const d=()=>`${_()}/organisation-types`,k=e=>`${d()}/${encodeURIComponent(e)}`,N=new V("organisationType",U).create(e=>e.build(e.addGet(k),e.addGetMany(d,u),e.addNotify())),R=w.getMany(N),g=b({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:C},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:r,entities:i}=R(),l=v(()=>T.value&&r.value),n=f=>a({...e.organisationTypeFilters,search:f??void 0}),{toggleSet:y,init:T,onUpdate:S}=D(i,[()=>e.organisationTypeFilters],t,n);return{organisationTypes:i,toggleSet:y,loading:l,onUpdate:S}}});function q(e,t,a,r,i,l){const n=F("FSAutocompleteField");return O(),h(n,A({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","items","loading","modelValue","onUpdate:modelValue"])}const c=I(g,[["render",q]]);g.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const Ze={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:c,FSCol:$},props:Object.keys(t),setup(){return{...e}},template:`
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
