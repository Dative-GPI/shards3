import{f as k,g as $,D,E as l,F as r,G as t,A as q,K as u,L as p,I as m,P as s,R as I,S as N}from"./vue.esm-bundler-f632b118.js";import{F as B}from"./FSAutocompleteField-643ca4a2.js";import{F as _}from"./FSCheckbox-bde4293d.js";import{_ as f}from"./FSIcon-8032a9d1.js";import{_ as S}from"./FSSpan-4ac1bb71.js";import{_ as F}from"./FSRow-76f4ad1e.js";import{u as O}from"./useLanguages-6ae3a1a1.js";import{u as P}from"./useAutocomplete-5bae40b5.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T}from"./VSelect-3062dd8b.js";import{_ as U}from"./FSCol-606e8271.js";import"./FSSearchField-b1f9a31f.js";import"./FSTextField-58ff63bb.js";import"./VField-d1df4052.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./useSlots-de625f75.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./css-185b4786.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-29d13699.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./filter-dd5b3c74.js";import"./VMenu-d9a134b2.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";const w=k({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:_,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:n}){const{getMany:v,fetching:b,entities:d}=O(),y=$(()=>a.value&&b.value),c=C=>v({...e.languageFilters,search:C??void 0}),{toggleSet:o,init:a,onUpdate:i}=P(d,[()=>e.languageFilters],n,c);return{languages:d,toggleSet:o,loading:y,onUpdate:i}}});function j(e,n,v,b,d,y){const c=D("FSAutocompleteField");return l(),r(c,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(l(),r(F,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(l(),r(f,{key:0},{default:t(()=>[u(p(o.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:t(()=>[u(p(o.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":t(({props:o,item:a})=>[s(T,I(N({...o,title:""})),{default:t(()=>[s(F,{align:"center-left"},{default:t(()=>{var i;return[e.$props.multiple?(l(),r(_,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(a.value),onClick:o.onClick},null,8,["modelValue","onClick"])):m("",!0),a.raw.icon?(l(),r(f,{key:1},{default:t(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:t(()=>[u(p(a.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const A=R(w,[["render",j]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:n})=>({components:{FSAutocompleteLanguage:A,FSCol:U},props:Object.keys(n),setup(){return{...e}},template:`
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
    </FSCol>`})};var h,L,V;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const mt=["Variations"];export{g as Variations,mt as __namedExportsOrder,pt as default};
