import{j as $,e as O,I as U,J as a,K as n,L as t,B as q,U as s,V as p,N as m,A as c,W as N,X as R}from"./vue.esm-bundler-857e5af7.js";import{F as D}from"./FSAutocompleteField-85bc039c.js";import{F as _}from"./FSCheckbox-54879197.js";import{_ as f}from"./FSIcon-d0ab000b.js";import{_ as S}from"./FSSpan-9f7a3096.js";import{_ as F}from"./FSRow-e30f1dcc.js";import{C as T}from"./base-0cefeb30.js";import{S as B}from"./serviceFactory-7552fe10.js";import{C as j}from"./composableFactory-64294cb0.js";import{u as M}from"./useAutocomplete-ecc57bef.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as E}from"./VSelect-aabfcd61.js";import{_ as z}from"./FSCol-439c812a.js";import"./FSToggleSet-d37d9311.js";import"./FSSlideGroup-5383341a.js";import"./FSButtonNextIcon-32c0573f.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./FSCard-e175fef9.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./css-ab2bdb81.js";import"./VProgressCircular-b85c805e.js";import"./color-3025502c.js";import"./useRender-1606c976.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./useSlots-8bee1a74.js";import"./VSlideGroup-09af52b3.js";import"./index-900eb6c5.js";import"./display-cdda29b9.js";import"./goto-9c8518f8.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./group-db11312a.js";import"./FSWrapGroup-79594a2b.js";import"./VInput-7e8bc521.js";import"./transition-8ae71e6c.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./VField-05970d63.js";import"./VSpacer-2ef0dee2.js";import"./VLabel-5378811f.js";import"./loader-c881e63b.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-da23fb58.js";import"./elevation-c9d86896.js";import"./useRules-b3d475c7.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./filter-621d2885.js";import"./VMenu-1d4626f8.js";import"./VOverlay-e7c006b1.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./VSelectionControl-ac658b6e.js";import"./index-1a539509.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./useDebounce-3221123d.js";import"./ssrBoot-4aec2e0b.js";import"./border-adb63d5e.js";import"./VImg-617a4396.js";import"./VDivider-54e4b012.js";class J{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class V{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new J(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class K extends V{constructor(e){super(e),this.description=e.description}}const A=()=>`${T()}/locations`,W=o=>`${A()}/${encodeURIComponent(o)}`,X=new B("location",K).createComplete(A,W,V),x=j.getMany(X),w=$({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:h,fetching:y,entities:d}=x(),v=k=>h({...o.locationFilters,search:k??void 0}),{toggleSet:g,init:l,onUpdate:i}=M(d,[()=>o.locationFilters],e,v),r=O(()=>l.value&&y.value);return{locations:d,toggleSet:g,loading:r,onUpdate:i}}});function G(o,e,h,y,d,v){const g=U("FSAutocompleteField");return a(),n(g,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":t(({item:l})=>[o.$props.modelValue?(a(),n(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[l.raw.icon?(a(),n(f,{key:0},{default:t(()=>[s(p(l.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(l.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:l,item:i})=>[c(E,N(R({...l,title:""})),{default:t(()=>[c(F,{align:"center-left",wrap:!1},{default:t(()=>{var r;return[o.$props.multiple?(a(),n(_,{key:0,modelValue:(r=o.$props.modelValue)==null?void 0:r.includes(i.value),onClick:l.onClick},null,8,["modelValue","onClick"])):m("",!0),i.raw.icon?(a(),n(f,{key:1},{default:t(()=>[s(p(i.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(i.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const I=P(w,[["render",G]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const uo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:I,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var L,b,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const go=["Variations"];export{u as Variations,go as __namedExportsOrder,uo as default};
