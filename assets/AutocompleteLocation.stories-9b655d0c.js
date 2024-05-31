import{f as O,g as $,D as q,E as a,F as n,G as t,A as D,K as s,L as p,I as m,M as c,N,O as R}from"./vue.esm-bundler-838daa40.js";import{F as U}from"./FSAutocompleteField-d0da56b5.js";import{F as _}from"./FSCheckbox-ee47ff76.js";import{_ as f}from"./FSIcon-1edeb40e.js";import{_ as S}from"./FSSpan-3df08200.js";import{_ as F}from"./FSRow-753b58e5.js";import{C as T}from"./base-ef43f4ed.js";import{S as B}from"./serviceFactory-2dfad3af.js";import{C as M}from"./composableFactory-5509dfbf.js";import{u as j}from"./useAutocomplete-e3e20924.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as P}from"./VSelect-4be478c5.js";import{_ as z}from"./FSCol-44fe82a9.js";import"./FSSearchField-1f700f7a.js";import"./FSTextField-b3ecf36d.js";import"./VField-2385223f.js";import"./useColors-95e93720.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-10e5f9b3.js";import"./FSClickable-bdd487a6.js";import"./FSCard-f7958fe9.js";import"./css-67cfec15.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-722a6878.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-b8d7aeee.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-9a456408.js";import"./FSSlideGroup-aebda11e.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-9878ed81.js";import"./FSFadeOut-498299d0.js";import"./FSLoader-b364a14e.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";class G{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class V{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new G(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class K extends V{constructor(e){super(e),this.description=e.description}}const A=()=>`${T()}/locations`,x=o=>`${A()}/${encodeURIComponent(o)}`,H=new B("location",K).createComplete(A,x,V),J=M.getMany(H),w=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:U,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:h,fetching:y,entities:d}=J(),v=k=>h({...o.locationFilters,search:k??void 0}),{toggleSet:g,init:i,onUpdate:l}=j(d,[()=>o.locationFilters],e,v),r=$(()=>i.value&&y.value);return{locations:d,toggleSet:g,loading:r,onUpdate:l}}});function Q(o,e,h,y,d,v){const g=q("FSAutocompleteField");return a(),n(g,D({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":t(({item:i})=>[o.$props.modelValue?(a(),n(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[i.raw.icon?(a(),n(f,{key:0},{default:t(()=>[s(p(i.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(i.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:i,item:l})=>[c(P,N(R({...i,title:""})),{default:t(()=>[c(F,{align:"center-left",wrap:!1},{default:t(()=>{var r;return[o.$props.multiple?(a(),n(_,{key:0,modelValue:(r=o.$props.modelValue)==null?void 0:r.includes(l.value),onClick:i.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(a(),n(f,{key:1},{default:t(()=>[s(p(l.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const I=E(w,[["render",Q]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const yo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:I,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
