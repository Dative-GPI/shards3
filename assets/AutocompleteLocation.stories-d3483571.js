import{j as L,e as y,I as b,J as A,K as C,A as I}from"./vue.esm-bundler-3386cb71.js";import{F as V}from"./FSAutocompleteField-c07b5f3c.js";import{C as O}from"./base-4e5ccaa5.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-0f23559b.js";import{u as U}from"./useAutocomplete-e0c21e85.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./FSCol-30a69fbd.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./FSRow-9733beba.js";import"./css-bcfd232c.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./VProgressCircular-14287b05.js";import"./color-2c4e2e53.js";import"./useRender-09edae02.js";import"./resizeObserver-d0e0f324.js";import"./VIcon-abe9af82.js";import"./tag-3fcf7e02.js";import"./FSSpan-ecd93ab1.js";import"./useSlots-347b7354.js";import"./FSIcon-d790d92f.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./locale-cd7ecdad.js";import"./proxiedModel-e633c715.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./index-8c130ea8.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VInput-567a126f.js";import"./transition-53ccad39.js";import"./density-e280830a.js";import"./useRules-e6c68f0f.js";import"./VSpacer-ec7842b6.js";import"./VSelect-748790cd.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./VLabel-92708ef4.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./VMenu-e9f9429e.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./index-dcfb76a3.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./filter-a78161c9.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";class q{constructor(o){this.placeId=o.placeId,this.placeLabel=o.placeLabel,this.formattedAddress=o.formattedAddress,this.locality=o.locality,this.country=o.country,this.latitude=o.latitude,this.longitude=o.longitude}}class d{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.address=new q(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class D extends d{constructor(o){super(o),this.description=o.description}}const u=()=>`${O()}/locations`,R=e=>`${u()}/${encodeURIComponent(e)}`,T=new _("location",D).createComplete(u,R,d),j=$.getMany(T),g=L({name:"FSAutocompleteLocation",components:{FSAutocompleteField:V},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:i}=j(),a=v=>l({...e.locationFilters,search:v??void 0}),{toggleSet:n,search:r,init:h,onUpdate:F}=U(i,[()=>e.locationFilters],o,a),S=y(()=>h.value&&s.value);return{locations:i,toggleSet:n,loading:S,search:r,onUpdate:F}}});function N(e,o,l,s,i,a){const n=b("FSAutocompleteField");return A(),C(n,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":o[0]||(o[0]=r=>e.search=r)},e.$attrs),null,16,["toggleSet","loading","items","modelValue","onUpdate:modelValue","search"])}const f=k(g,[["render",N]]);g.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const oe={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:f,FSCol:w},props:Object.keys(o),setup(){return{...e}},template:`
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
