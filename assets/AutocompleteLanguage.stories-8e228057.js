import{f as $,g as D,D as q,E as r,F as n,G as o,A as N,K as u,L as p,I as m,P as s,R as U,S as G}from"./vue.esm-bundler-f632b118.js";import{F as I}from"./FSAutocompleteField-f1eebd00.js";import{F as A}from"./FSCheckbox-bde4293d.js";import{_ as f}from"./FSIcon-8032a9d1.js";import{_ as S}from"./FSSpan-4ac1bb71.js";import{_ as F}from"./FSRow-76f4ad1e.js";import{G as R}from"./base-0de1729e.js";import{S as T}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-0b8943d1.js";import{u as B}from"./useAutocomplete-5bae40b5.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-ee781f63.js";import{_ as O}from"./FSCol-606e8271.js";import"./FSSearchField-89392c22.js";import"./FSTextField-ae12b6dc.js";import"./VField-d1df4052.js";import"./useColors-5866e399.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./useSlots-de625f75.js";import"./VSpacer-f52c9222.js";import"./useRender-e08116dd.js";import"./index-f6c0e33a.js";import"./transition-c0ed457c.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./dimensions-655ad4fc.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./anchor-559036f7.js";import"./rounded-83656db8.js";import"./VDefaultsProvider-e2787342.js";import"./forwardRefs-e658ad70.js";import"./FSButton-08a91e21.js";import"./FSClickable-4011125f.js";import"./FSCard-491552ba.js";import"./css-185b4786.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./useTranslations-f6aba3ae.js";import"./FSDialogMenu-5b31adc4.js";import"./VDialog-46b8b074.js";import"./VOverlay-f45091df.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./FSRadioGroup-43b41305.js";import"./VSelectionControl-27ff8605.js";import"./index-5c2ea69f.js";import"./FSToggleSet-16fd0de7.js";import"./FSSlideGroup-70c8805c.js";import"./uuid-08309875.js";import"./VSlideGroup-83eb3cfd.js";import"./goto-077545e9.js";import"./group-9f212aab.js";import"./FSWrapGroup-3b709029.js";import"./FSFadeOut-391a4266.js";import"./FSLoader-6ced331e.js";import"./elevation-f0466824.js";import"./filter-dd5b3c74.js";import"./VMenu-8734b394.js";import"./lodash-569b8a6d.js";import"./ssrBoot-8619e9d9.js";import"./border-df752cc4.js";import"./VImg-82f9d308.js";import"./VDivider-a5e624de.js";class w{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class P extends w{constructor(t){super(t)}}const j=()=>`${R()}/languages`,z=new T("language",P).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),K=x.getMany(z),V=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:I,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=K(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:i}=B(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:i}}});function W(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[s(M,U(G({...a,title:""})),{default:o(()=>[s(F,{align:"center-left"},{default:o(()=>{var i;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[u(p(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=E(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
