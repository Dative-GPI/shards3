import{f as $,g as D,D as q,E as r,F as n,G as o,A as N,K as u,L as p,I as m,P as s,R as U,S as G}from"./vue.esm-bundler-f632b118.js";import{F as I}from"./FSAutocompleteField-ff78314e.js";import{F as A}from"./FSCheckbox-5ebd306d.js";import{_ as f}from"./FSIcon-110a991e.js";import{_ as S}from"./FSSpan-4ac1bb71.js";import{_ as F}from"./FSRow-76f4ad1e.js";import{G as R}from"./base-0de1729e.js";import{S as T}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-0b8943d1.js";import{u as B}from"./useAutocomplete-a7e2bf25.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-00399f8e.js";import{_ as O}from"./FSCol-606e8271.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./VSpacer-e4feda29.js";import"./useRender-7972ae0c.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./tag-573fddf1.js";import"./density-78dfa9a7.js";import"./dimensions-44367821.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./FSButton-1e8cfafa.js";import"./FSClickable-af644c0d.js";import"./FSCard-75477b2b.js";import"./css-185b4786.js";import"./useRules-31faed85.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSToggleSet-e691b0b6.js";import"./FSSlideGroup-3d07e2c7.js";import"./uuid-08309875.js";import"./VSlideGroup-e23bcde7.js";import"./display-219b55f3.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSDialogMenu-7826371b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelectionControl-c78f62cb.js";import"./index-131c488a.js";import"./FSFadeOut-0ebdb15e.js";import"./FSLoader-af2e647d.js";import"./elevation-cd810633.js";import"./filter-ad9d8f4b.js";import"./VMenu-99bc218e.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";class w{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class P extends w{constructor(t){super(t)}}const j=()=>`${R()}/languages`,z=new T("language",P).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),K=x.getMany(z),V=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:I,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=K(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:i}=B(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:i}}});function W(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[s(M,U(G({...a,title:""})),{default:o(()=>[s(F,{align:"center-left"},{default:o(()=>{var i;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[u(p(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=E(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,L,_;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1",
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteLanguage,
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
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const St=["Variations"];export{g as Variations,St as __namedExportsOrder,ft as default};
