import{j as $,e as O,I as U,J as a,K as n,L as t,B as q,U as s,V as p,N as m,A as c,W as N,X as R}from"./vue.esm-bundler-7c237656.js";import{F as D}from"./FSAutocompleteField-3e0e956b.js";import{F as _}from"./FSCheckbox-da06ce33.js";import{_ as f}from"./FSIcon-5ad13b7e.js";import{_ as S}from"./FSSpan-661158f8.js";import{_ as F}from"./FSRow-0e15f868.js";import{C as T}from"./base-cc0281c0.js";import{S as B}from"./serviceFactory-7552fe10.js";import{C as j}from"./composableFactory-08360cd4.js";import{u as M}from"./useAutocomplete-c9cb8b74.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{V as E}from"./VSelect-735dad66.js";import{_ as z}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./css-aa928277.js";import"./VProgressCircular-4299d8b4.js";import"./color-8a2bce37.js";import"./useRender-e0e7d9de.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./filter-9f13a693.js";import"./VMenu-2484e62c.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";class J{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class V{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new J(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class K extends V{constructor(e){super(e),this.description=e.description}}const A=()=>`${T()}/locations`,W=o=>`${A()}/${encodeURIComponent(o)}`,X=new B("location",K).createComplete(A,W,V),x=j.getMany(X),w=$({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:h,fetching:y,entities:d}=x(),v=k=>h({...o.locationFilters,search:k??void 0}),{toggleSet:g,init:l,onUpdate:i}=M(d,[()=>o.locationFilters],e,v),r=O(()=>l.value&&y.value);return{locations:d,toggleSet:g,loading:r,onUpdate:i}}});function G(o,e,h,y,d,v){const g=U("FSAutocompleteField");return a(),n(g,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":t(({item:l})=>[o.$props.modelValue?(a(),n(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[l.raw.icon?(a(),n(f,{key:0},{default:t(()=>[s(p(l.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(l.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:l,item:i})=>[c(E,N(R({...l,title:""})),{default:t(()=>[c(F,{align:"center-left",wrap:!1},{default:t(()=>{var r;return[o.$props.multiple?(a(),n(_,{key:0,modelValue:(r=o.$props.modelValue)==null?void 0:r.includes(i.value),onClick:l.onClick},null,8,["modelValue","onClick"])):m("",!0),i.raw.icon?(a(),n(f,{key:1},{default:t(()=>[s(p(i.raw.icon),1)]),_:2},1024)):m("",!0),c(S,null,{default:t(()=>[s(p(i.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const I=P(w,[["render",G]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const uo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:I,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
