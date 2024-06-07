import{f as $,g as D,D as v,E as d,F as c,G as o,A as q,P as l,K as h,L as y,I as Z,R as P,S as B,X as N}from"./vue.esm-bundler-f632b118.js";import{F as E}from"./FSAutocompleteField-ff78314e.js";import{F as _}from"./FSCheckbox-5ebd306d.js";import{F as w}from"./FSButton-1e8cfafa.js";import{F as O}from"./FSChip-b2b5f621.js";import{_ as g}from"./FSSpan-4ac1bb71.js";import{_ as f}from"./FSRow-76f4ad1e.js";import{u as R}from"./useTimeZones-4c77c86e.js";import{u as U}from"./useAutocomplete-a7e2bf25.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VSelect-00399f8e.js";import{_ as I}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./FSCard-75477b2b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./FSIcon-110a991e.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./FSClickable-af644c0d.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";const A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:E,FSCheckbox:_,FSButton:w,FSChip:O,FSSpan:g,FSRow:f},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:n}){const{getMany:S,fetching:F,entities:s}=R(),b=D(()=>i.value&&F.value),r=a=>S({...t.timeZoneFilters,search:a??void 0}),{toggleSet:u,search:e,init:i,onUpdate:m}=U(s,[()=>t.timeZoneFilters],n,r,null,a=>a.id,a=>a.id);return{timeZones:s,toggleSet:u,loading:b,search:e,onUpdate:m}}});function z(t,n,S,F,s,b){const r=v("FSChip"),u=v("FSAutocompleteField");return d(),c(u,q({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,loading:t.loading,items:t.timeZones,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(d(),c(f,{key:0,align:"center-center",wrap:!1},{default:o(()=>[l(r,{label:e.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(e.raw.id),1)]),_:2},1024)]),_:2},1024)):Z("",!0)]),"autocomplete-item":o(({props:e,item:i})=>[l(x,P(B({...e,title:""})),{default:o(()=>[l(f,{align:"center-left"},{default:o(()=>{var m;return[t.$props.multiple?(d(),c(_,{key:0,modelValue:(m=t.$props.modelValue)==null?void 0:m.includes(i.value),onClick:e.onClick},null,8,["modelValue","onClick"])):Z("",!0),l(r,{label:i.raw.offset},null,8,["label"]),l(g,null,{default:o(()=>[h(y(i.raw.id),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":o(e=>[l(w,{variant:e.getVariant(e.item),color:e.getColor(e.item),class:N(e.getClass(e.item)),label:e.item.id,onClick:i=>e.toggle(e.item)},{prepend:o(()=>[l(r,{label:e.item.offset.split(":")[0]},null,8,["label"])]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const k=j(A,[["render",z]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const ct={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"Europe/Paris",value3:null,value4:null}},render:(t,{argTypes:n})=>({components:{FSAutocompleteTimeZone:k,FSCol:I},props:Object.keys(n),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var T,V,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Europe/Paris",
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTimeZone,
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
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const gt=["Variations"];export{p as Variations,gt as __namedExportsOrder,ct as default};
