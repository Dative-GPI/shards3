import{j as L,e as y,I as b,J as A,K as C,x as I}from"./vue.esm-bundler-0c8496bd.js";import{F as V}from"./FSAutocompleteField-022e7e15.js";import{C as O}from"./base-d0065ec9.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-ad68cfdd.js";import{u as U}from"./useAutocomplete-bb48c17a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSCol-0a323bdc.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./FSRow-547598b4.js";import"./css-0fb78066.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./VProgressCircular-91035e99.js";import"./color-e947437a.js";import"./useRender-8701d95b.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./FSIcon-e8919096.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./FSToggleSet-f583e42c.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./VSlideGroup-8312a613.js";import"./index-5d52efe8.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSWrapGroup-53ffd2f5.js";import"./VInput-523a6986.js";import"./transition-893c383a.js";import"./density-22f26472.js";import"./useRules-a67d9042.js";import"./VSpacer-989c3452.js";import"./VSelect-f6dc4f4d.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./VLabel-e60bde78.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./VOverlay-471318e4.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./index-5120e393.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./filter-981204f7.js";import"./useAppOrganisationId-df946d5a.js";import"./lodash-569b8a6d.js";import"./useDebounce-9a2b81c6.js";class q{constructor(o){this.placeId=o.placeId,this.placeLabel=o.placeLabel,this.formattedAddress=o.formattedAddress,this.locality=o.locality,this.country=o.country,this.latitude=o.latitude,this.longitude=o.longitude}}class d{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.address=new q(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class D extends d{constructor(o){super(o),this.description=o.description}}const u=()=>`${O()}/locations`,R=e=>`${u()}/${encodeURIComponent(e)}`,T=new _("location",D).createComplete(u,R,d),j=$.getMany(T),g=L({name:"FSAutocompleteLocation",components:{FSAutocompleteField:V},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:i}=j(),a=v=>l({...e.locationFilters,search:v??void 0}),{toggleSet:n,search:r,init:h,onUpdate:F}=U(i,[()=>e.locationFilters],o,a),S=y(()=>h.value&&s.value);return{locations:i,toggleSet:n,loading:S,search:r,onUpdate:F}}});function N(e,o,l,s,i,a){const n=b("FSAutocompleteField");return A(),C(n,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":o[0]||(o[0]=r=>e.search=r)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const f=k(g,[["render",N]]);g.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const oe={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:f,FSCol:w},props:Object.keys(o),setup(){return{...e}},template:`
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
