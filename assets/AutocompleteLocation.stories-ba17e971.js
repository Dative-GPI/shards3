import{f as $,g as O,D as R,E as a,F as n,G as t,A as q,K as s,L as p,I as m,Q as c,R as D,S as U}from"./vue.esm-bundler-1de4ab84.js";import{F as N}from"./FSAutocompleteField-326a230c.js";import{F as _}from"./FSCheckbox-7bc44d7a.js";import{_ as f}from"./FSIcon-08483052.js";import{_ as S}from"./FSSpan-c5b5f93b.js";import{_ as F}from"./FSRow-0f15051e.js";import{C as T}from"./base-d4d5271d.js";import{S as B}from"./serviceFactory-2dfad3af.js";import{C as j}from"./composableFactory-7269e9d8.js";import{u as E}from"./useAutocomplete-541ae531.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSelect-46cfbf6f.js";import{_ as z}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./lodash-569b8a6d.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";class G{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class V{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new G(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class K extends V{constructor(e){super(e),this.description=e.description}}const A=()=>`${T()}/locations`,Q=o=>`${A()}/${encodeURIComponent(o)}`,x=new B("location",K).createComplete(A,Q,V),H=j.getMany(x),w=$({name:"FSAutocompleteLocation",components:{FSAutocompleteField:N,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:h,fetching:y,entities:d}=H(),v=k=>h({...o.locationFilters,search:k??void 0}),{toggleSet:g,init:i,onUpdate:l}=E(d,[()=>o.locationFilters],e,v),r=O(()=>i.value&&y.value);return{locations:d,toggleSet:g,loading:r,onUpdate:l}}});function J(o,e,h,y,d,v){const g=R("FSAutocompleteField");return a(),n(g,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":t(({item:i})=>[o.$props.modelValue?(a(),n(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[i.raw.icon?(a(),n(f,{key:0},{default:t(()=>[s(p(i.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(i.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:i,item:l})=>[c(P,D(U({...i,title:""})),{default:t(()=>[c(F,{align:"center-left",wrap:!1},{default:t(()=>{var r;return[o.$props.multiple?(a(),n(_,{key:0,modelValue:(r=o.$props.modelValue)==null?void 0:r.includes(l.value),onClick:i.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(a(),n(f,{key:1},{default:t(()=>[s(p(l.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const I=M(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const yo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:I,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const vo=["Variations"];export{u as Variations,vo as __namedExportsOrder,yo as default};
