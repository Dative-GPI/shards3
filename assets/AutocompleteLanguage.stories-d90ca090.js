import{f as $,g as D,D as q,E as r,F as n,G as o,A as N,K as u,L as p,I as m,M as s,N as U,O as G}from"./vue.esm-bundler-838daa40.js";import{F as I}from"./FSAutocompleteField-e5f1c281.js";import{F as A}from"./FSCheckbox-42258fdd.js";import{_ as f}from"./FSIcon-f74a02b4.js";import{_ as S}from"./FSSpan-3df08200.js";import{_ as F}from"./FSRow-753b58e5.js";import{G as M}from"./base-0de1729e.js";import{S as O}from"./serviceFactory-f4b29260.js";import{C as R}from"./composableFactory-5509dfbf.js";import{u as T}from"./useAutocomplete-e45b9115.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./VSelect-d3bb8d0c.js";import{_ as E}from"./FSCol-44fe82a9.js";import"./FSSearchField-95a58430.js";import"./FSTextField-55dfca8e.js";import"./VField-b386f766.js";import"./useColors-4ac7c452.js";import"./_commonjsHelpers-de833af9.js";import"./index-2f699bdb.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./VSpacer-7ad9c022.js";import"./useRender-f6a4770d.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./tag-d73e64d5.js";import"./density-e1cdced2.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-255c9a8d.js";import"./FSClickable-5b3f625e.js";import"./FSCard-1b892764.js";import"./css-67cfec15.js";import"./useRules-cda8e231.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSDialogMenu-0e4010b4.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-a74abc32.js";import"./VSelectionControl-b5e8c167.js";import"./index-a755b9d6.js";import"./FSToggleSet-269e3af4.js";import"./FSSlideGroup-136b708c.js";import"./uuid-08309875.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSWrapGroup-ca330e4e.js";import"./FSFadeOut-afe887fc.js";import"./FSLoader-cd805965.js";import"./elevation-c2192325.js";import"./filter-e8ac40d9.js";import"./VMenu-ec057191.js";import"./lodash-ee9167ea.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";class w{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends w{constructor(t){super(t)}}const P=()=>`${M()}/languages`,z=new O("language",j).create(e=>e.build(e.addGetMany(P,w),e.addNotify())),K=R.getMany(z),V=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:I,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=K(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:i}=T(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:i}}});function W(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[s(B,U(G({...a,title:""})),{default:o(()=>[s(F,{align:"center-left"},{default:o(()=>{var i;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[u(p(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=x(V,[["render",W]]);V.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:E},props:Object.keys(t),setup(){return{...e}},template:`
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
