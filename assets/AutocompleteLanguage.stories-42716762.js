import{j as U,e as q,I as N,J as S,K as v,L as o,x as G,v as l,U as n,V as i,N as I,W as T,X as j}from"./vue.esm-bundler-b2d5d1a7.js";import{F as V}from"./FSCheckbox-cb8c7fe9.js";import{F as x}from"./FSAutocompleteField-9a2ba8dd.js";import{G as B}from"./base-0de1729e.js";import{S as M}from"./serviceFactory-3393b4e4.js";import{C as O}from"./composableFactory-6dbd7c00.js";import{u as R}from"./useAutocomplete-7cd31b28.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as b}from"./FSIcon-6a2b7637.js";import{_ as F}from"./FSRow-ad0fe7ea.js";import{_ as h}from"./FSSpan-2ee73edb.js";import{c as P}from"./VSelect-13b35610.js";import{_ as W}from"./FSCol-8af42802.js";import"./useColors-1799ca43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-66179376.js";import"./useRules-999feed4.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./useRender-3dd3f3c7.js";import"./density-aec4d930.js";import"./tag-33f1d162.js";import"./proxiedModel-92ce7dab.js";import"./color-1b074b3b.js";import"./index-7713af82.js";import"./VIcon-18e13c83.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./locale-602cc07b.js";import"./index-c0240410.js";import"./transition-42bdb3ea.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./css-9d61559d.js";import"./VProgressCircular-b30bdd5e.js";import"./resizeObserver-b444ab71.js";import"./useSlots-0e4d21ee.js";import"./FSLoader-d736f414.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./FSToggleSet-d64083d4.js";import"./FSSlideGroup-a03e159b.js";import"./FSButtonNextIcon-23a13277.js";import"./VSlideGroup-7f8275f9.js";import"./display-5af9f9da.js";import"./group-d1f5e06d.js";import"./FSWrapGroup-983c1296.js";import"./VSpacer-73e95d50.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./filter-dab5f9d0.js";import"./VMenu-03edebad.js";import"./VOverlay-9625a4d7.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./lodash-569b8a6d.js";import"./useDebounce-f8cba0e6.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";class _{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class z extends _{constructor(t){super(t)}}const J=()=>`${B()}/languages`,K=new M("language",z).create(e=>e.build(e.addGetMany(J,_),e.addNotify())),X=O.getMany(K),w=U({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSCheckbox:V},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:g,fetching:d,entities:s}=X(),c=p=>g({...e.languageFilters,search:p??void 0}),{toggleSet:m,search:a,init:r,onUpdate:$}=R(s,[()=>e.languageFilters],t,c),k=p=>{var f;return(f=e.modelValue)==null?void 0:f.includes(p)},D=q(()=>r.value&&d.value);return{languages:s,toggleSet:m,loading:D,search:a,isSelected:k,onUpdate:$}}});function Y(e,t,g,d,s,c){const m=N("FSAutocompleteField");return S(),v(m,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(F,{align:"center-center"},{default:o(()=>[l(b,null,{default:o(()=>[n(i(a.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(a.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,T(j({...a,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(S(),v(V,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):I("",!0),l(b,null,{default:o(()=>[n(i(r.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue","search"])}const C=E(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:W},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,L,A;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(L=u.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const gt=["Variations"];export{u as Variations,gt as __namedExportsOrder,pt as default};
