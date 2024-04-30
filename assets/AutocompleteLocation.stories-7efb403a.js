import{j as L,e as y,I as b,J as A,K as C,A as I}from"./vue.esm-bundler-82a4b45a.js";import{F as V}from"./FSAutocompleteField-61ca200a.js";import{C as O}from"./base-ec6565f2.js";import{S as _}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-2f513de5.js";import{u as U}from"./useAutocomplete-14a2146a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSCol-8326ac62.js";import"./FSButton-fa754e08.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./FSRow-2ccfd21b.js";import"./css-c39c4a6e.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSSpan-4bf272e8.js";import"./useSlots-f55d2513.js";import"./FSIcon-97799824.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./locale-c97048b2.js";import"./proxiedModel-6f61b602.js";import"./FSToggleSet-6b833922.js";import"./FSSlideGroup-8338acae.js";import"./FSButtonNextIcon-e9cfd47b.js";import"./VSlideGroup-4309af86.js";import"./index-7dc37899.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VInput-6edbe327.js";import"./transition-0cde2f94.js";import"./density-d6a10252.js";import"./useRules-7b0f86fa.js";import"./VSpacer-dfdceece.js";import"./VSelect-fca10f65.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./VMenu-9dbbffaa.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./index-0f4b4beb.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./filter-4073c1af.js";import"./useAppOrganisationId-8a62b6ee.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";class q{constructor(o){this.placeId=o.placeId,this.placeLabel=o.placeLabel,this.formattedAddress=o.formattedAddress,this.locality=o.locality,this.country=o.country,this.latitude=o.latitude,this.longitude=o.longitude}}class d{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.address=new q(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class D extends d{constructor(o){super(o),this.description=o.description}}const u=()=>`${O()}/locations`,R=e=>`${u()}/${encodeURIComponent(e)}`,T=new _("location",D).createComplete(u,R,d),j=$.getMany(T),g=L({name:"FSAutocompleteLocation",components:{FSAutocompleteField:V},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:i}=j(),a=v=>l({...e.locationFilters,search:v??void 0}),{toggleSet:n,search:r,init:h,onUpdate:F}=U(i,[()=>e.locationFilters],o,a),S=y(()=>h.value&&s.value);return{locations:i,toggleSet:n,loading:S,search:r,onUpdate:F}}});function N(e,o,l,s,i,a){const n=b("FSAutocompleteField");return A(),C(n,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":o[0]||(o[0]=r=>e.search=r)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const f=k(g,[["render",N]]);g.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const oe={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:f,FSCol:w},props:Object.keys(o),setup(){return{...e}},template:`
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
