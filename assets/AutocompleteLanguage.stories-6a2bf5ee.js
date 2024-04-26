import{j as U,e as q,I as N,J as S,K as v,L as o,A as G,z as l,S as n,U as i,N as I,W as T,X as j}from"./vue.esm-bundler-3386cb71.js";import{F as _}from"./FSCheckbox-8b71851a.js";import{F as B}from"./FSAutocompleteField-c07b5f3c.js";import{G as M}from"./base-0de1729e.js";import{S as O}from"./serviceFactory-3393b4e4.js";import{C as R}from"./composableFactory-0f23559b.js";import{u as x}from"./useAutocomplete-e0c21e85.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as b}from"./FSIcon-d790d92f.js";import{_ as F}from"./FSRow-9733beba.js";import{_ as h}from"./FSSpan-ecd93ab1.js";import{c as P}from"./VSelect-748790cd.js";import{_ as z}from"./FSCol-30a69fbd.js";import"./useColors-36e524b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-620a0d92.js";import"./useRules-e6c68f0f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./useRender-09edae02.js";import"./density-e280830a.js";import"./tag-3fcf7e02.js";import"./proxiedModel-e633c715.js";import"./color-2c4e2e53.js";import"./index-dcfb76a3.js";import"./VIcon-abe9af82.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./locale-cd7ecdad.js";import"./index-8c130ea8.js";import"./transition-53ccad39.js";import"./FSButton-48dda364.js";import"./FSClickable-9ac660a4.js";import"./FSCard-a2619b8a.js";import"./css-bcfd232c.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./useSlots-347b7354.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./FSToggleSet-04483874.js";import"./FSSlideGroup-7b77a139.js";import"./FSButtonNextIcon-810ab974.js";import"./VSlideGroup-da2d654c.js";import"./display-ae851a2a.js";import"./group-28a085bd.js";import"./FSWrapGroup-62d315a6.js";import"./VSpacer-ec7842b6.js";import"./VTextField-c09c042e.js";import"./VField-d98364b9.js";import"./loader-885a1a56.js";import"./rounded-1ab8dee0.js";import"./VDefaultsProvider-6c176a11.js";import"./forwardRefs-e658ad70.js";import"./index-3382552b.js";import"./filter-a78161c9.js";import"./VMenu-e9f9429e.js";import"./VOverlay-c04ebd43.js";import"./lazy-99e4da96.js";import"./router-773ce02f.js";import"./lodash-569b8a6d.js";import"./useDebounce-b634b141.js";import"./ssrBoot-9bcdb33f.js";import"./border-8045ffee.js";import"./VImg-cbb35f88.js";import"./VDivider-a97378e6.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class W extends V{constructor(t){super(t)}}const J=()=>`${M()}/languages`,K=new O("language",W).create(e=>e.build(e.addGetMany(J,V),e.addNotify())),X=R.getMany(K),w=U({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:_},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:g,fetching:d,entities:s}=X(),c=p=>g({...e.languageFilters,search:p??void 0}),{toggleSet:m,search:a,init:r,onUpdate:$}=x(s,[()=>e.languageFilters],t,c),k=p=>{var f;return(f=e.modelValue)==null?void 0:f.includes(p)},D=q(()=>r.value&&d.value);return{languages:s,toggleSet:m,loading:D,search:a,isSelected:k,onUpdate:$}}});function Y(e,t,g,d,s,c){const m=N("FSAutocompleteField");return S(),v(m,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(F,{align:"center-center"},{default:o(()=>[l(b,null,{default:o(()=>[n(i(a.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(a.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,T(j({...a,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(S(),v(_,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):I("",!0),l(b,null,{default:o(()=>[n(i(r.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue","search"])}const C=E(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
