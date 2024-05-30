import{f as O,g as $,I as R,J as a,K as n,L as t,B as q,O as s,P as p,N as m,A as c,Q as N,R as U}from"./vue.esm-bundler-cd768bc3.js";import{F as D}from"./FSAutocompleteField-6bb7ead6.js";import{F as _}from"./FSCheckbox-c69cb5d8.js";import{_ as f}from"./FSIcon-5671b33c.js";import{_ as S}from"./FSSpan-da6dde8e.js";import{_ as F}from"./FSRow-1d7c2545.js";import{C as T}from"./base-a00c89a9.js";import{S as B}from"./serviceFactory-2dfad3af.js";import{C as P}from"./composableFactory-c82cc213.js";import{u as j}from"./useAutocomplete-b3d8bfa7.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as E}from"./VSelect-1b324382.js";import{_ as z}from"./FSCol-ff457bc3.js";import"./FSToggleSet-011993a0.js";import"./FSSlideGroup-05dda1f3.js";import"./uuid-08309875.js";import"./FSButtonNextIcon-e4aac952.js";import"./FSButton-7364cb00.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./css-c2ea3b68.js";import"./VProgressCircular-d119fa09.js";import"./color-4e667524.js";import"./useRender-d216bc3f.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-95cdbe21.js";import"./tag-f5ad2c5e.js";import"./useSlots-2af30a3d.js";import"./VSlideGroup-22f87886.js";import"./index-b97c70d5.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./VSlideGroupItem-27057095.js";import"./FSWrapGroup-20447d85.js";import"./VInput-28424714.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./VLabel-ac265b88.js";import"./loader-e29f326e.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-ff78bc14.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-bd777dc8.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./filter-16d28c7b.js";import"./VMenu-2bc21026.js";import"./VOverlay-5f00a78b.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./VSelectionControl-650165ff.js";import"./index-f4fa4c36.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-7e8420c7.js";import"./VDivider-8ddbafa9.js";class J{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class V{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new J(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class K extends V{constructor(e){super(e),this.description=e.description}}const A=()=>`${T()}/locations`,Q=o=>`${A()}/${encodeURIComponent(o)}`,x=new B("location",K).createComplete(A,Q,V),G=P.getMany(x),w=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:h,fetching:y,entities:d}=G(),v=k=>h({...o.locationFilters,search:k??void 0}),{toggleSet:g,init:l,onUpdate:i}=j(d,[()=>o.locationFilters],e,v),r=$(()=>l.value&&y.value);return{locations:d,toggleSet:g,loading:r,onUpdate:i}}});function H(o,e,h,y,d,v){const g=R("FSAutocompleteField");return a(),n(g,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":t(({item:l})=>[o.$props.modelValue?(a(),n(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[l.raw.icon?(a(),n(f,{key:0},{default:t(()=>[s(p(l.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(l.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:l,item:i})=>[c(E,N(U({...l,title:""})),{default:t(()=>[c(F,{align:"center-left",wrap:!1},{default:t(()=>{var r;return[o.$props.multiple?(a(),n(_,{key:0,modelValue:(r=o.$props.modelValue)==null?void 0:r.includes(i.value),onClick:l.onClick},null,8,["modelValue","onClick"])):m("",!0),i.raw.icon?(a(),n(f,{key:1},{default:t(()=>[s(p(i.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(i.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const I=M(w,[["render",H]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const So={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:I,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Fo=["Variations"];export{u as Variations,Fo as __namedExportsOrder,So as default};
