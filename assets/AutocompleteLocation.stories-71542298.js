import{j as L,e as y,I as b,J as A,K as C,x as I}from"./vue.esm-bundler-b2d5d1a7.js";import{F as V}from"./FSAutocompleteField-9a2ba8dd.js";import{C as O}from"./base-647aa1fa.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-6dbd7c00.js";import{u as U}from"./useAutocomplete-7cd31b28.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSCol-8af42802.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./FSRow-ad0fe7ea.js";import"./css-9d61559d.js";import"./useColors-1799ca43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-66179376.js";import"./VProgressCircular-b30bdd5e.js";import"./color-1b074b3b.js";import"./useRender-3dd3f3c7.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./FSIcon-6a2b7637.js";import"./FSLoader-d736f414.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./FSToggleSet-d64083d4.js";import"./FSSlideGroup-a03e159b.js";import"./FSButtonNextIcon-23a13277.js";import"./VSlideGroup-7f8275f9.js";import"./index-c0240410.js";import"./display-5af9f9da.js";import"./group-d1f5e06d.js";import"./FSWrapGroup-983c1296.js";import"./VInput-16b8deac.js";import"./transition-42bdb3ea.js";import"./density-aec4d930.js";import"./useRules-999feed4.js";import"./VSpacer-73e95d50.js";import"./VSelect-13b35610.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./VLabel-fe75201b.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./VOverlay-9625a4d7.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./VMenu-03edebad.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./index-7713af82.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./filter-dab5f9d0.js";import"./useAppOrganisationId-66e3eeba.js";import"./lodash-569b8a6d.js";import"./useDebounce-f8cba0e6.js";class q{constructor(o){this.placeId=o.placeId,this.placeLabel=o.placeLabel,this.formattedAddress=o.formattedAddress,this.locality=o.locality,this.country=o.country,this.latitude=o.latitude,this.longitude=o.longitude}}class d{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.address=new q(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class D extends d{constructor(o){super(o),this.description=o.description}}const u=()=>`${O()}/locations`,R=e=>`${u()}/${encodeURIComponent(e)}`,T=new _("location",D).createComplete(u,R,d),j=$.getMany(T),g=L({name:"FSAutocompleteLocation",components:{FSAutocompleteField:V},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:i}=j(),a=v=>l({...e.locationFilters,search:v??void 0}),{toggleSet:n,search:r,init:h,onUpdate:F}=U(i,[()=>e.locationFilters],o,a),S=y(()=>h.value&&s.value);return{locations:i,toggleSet:n,loading:S,search:r,onUpdate:F}}});function N(e,o,l,s,i,a){const n=b("FSAutocompleteField");return A(),C(n,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":o[0]||(o[0]=r=>e.search=r)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const f=k(g,[["render",N]]);g.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const oe={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:f,FSCol:w},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>`})};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ee=["Variations"];export{t as Variations,ee as __namedExportsOrder,oe as default};
