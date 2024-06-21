import{f as O,g as $,D as k,E as n,F as r,G as i,x as q,K as l,L as a,I as d,P as u}from"./vue.esm-bundler-a0893183.js";import{F as D}from"./FSAutocompleteField-82ab0202.js";import{_ as g}from"./FSIcon-9d61ed62.js";import{_ as f}from"./FSSpan-4daadeb4.js";import{_ as S}from"./FSRow-821d23a1.js";import{C as U}from"./base-168b8f74.js";import{S as N}from"./serviceFactory-2dfad3af.js";import{C as R}from"./composableFactory-2d4a69cc.js";import{u as T}from"./useAutocomplete-cc546bbe.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSCol-e45ac157.js";import"./FSSearchField-fb041cb4.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-29e96b8a.js";import"./FSClickable-550391c2.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";class E{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class _{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new E(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class M extends _{constructor(e){super(e),this.description=e.description}}const C=()=>`${U()}/locations`,x=o=>`${C()}/${encodeURIComponent(o)}`,P=new N("location",M).createComplete(C,x,_),G=R.getMany(P),A=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:g,FSSpan:f,FSRow:S},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:F,fetching:h,entities:p}=G(),y=I=>F({...o.locationFilters,search:I??void 0}),{toggleSet:m,init:t,onUpdate:c}=T(p,[()=>o.locationFilters],e,y),w=$(()=>t.value&&h.value);return{locations:p,toggleSet:m,loading:w,onUpdate:c}}});function K(o,e,F,h,p,y){const m=k("FSAutocompleteField");return n(),r(m,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":i(({item:t})=>[o.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,null,{default:i(()=>[l(a(t.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":i(({item:t,font:c})=>[u(S,{align:"center-left",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,{font:c},{default:i(()=>[l(a(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=B(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var v,L,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(L=s.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const ho=["Variations"];export{s as Variations,ho as __namedExportsOrder,Fo as default};
