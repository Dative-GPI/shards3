import{j as U,e as q,I as N,J as S,K as v,L as o,x as G,v as l,U as n,V as i,N as I,W as T,X as j}from"./vue.esm-bundler-0c8496bd.js";import{F as V}from"./FSCheckbox-9b9919c2.js";import{F as x}from"./FSAutocompleteField-022e7e15.js";import{G as B}from"./base-0de1729e.js";import{S as M}from"./serviceFactory-3393b4e4.js";import{C as O}from"./composableFactory-ad68cfdd.js";import{u as R}from"./useAutocomplete-bb48c17a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as b}from"./FSIcon-e8919096.js";import{_ as F}from"./FSRow-547598b4.js";import{_ as h}from"./FSSpan-dff588c4.js";import{c as P}from"./VSelect-f6dc4f4d.js";import{_ as W}from"./FSCol-0a323bdc.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./useRules-a67d9042.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./useRender-8701d95b.js";import"./density-22f26472.js";import"./tag-0cc02cbd.js";import"./proxiedModel-19525b39.js";import"./color-e947437a.js";import"./index-5120e393.js";import"./VIcon-7bba82fc.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./css-0fb78066.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./useSlots-d0001844.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./FSToggleSet-f583e42c.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./VSlideGroup-8312a613.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSWrapGroup-53ffd2f5.js";import"./VSpacer-989c3452.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./filter-981204f7.js";import"./VMenu-36a8b303.js";import"./VOverlay-471318e4.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./lodash-569b8a6d.js";import"./useDebounce-9a2b81c6.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";class _{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class z extends _{constructor(t){super(t)}}const J=()=>`${B()}/languages`,K=new M("language",z).create(e=>e.build(e.addGetMany(J,_),e.addNotify())),X=O.getMany(K),w=U({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSCheckbox:V},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:g,fetching:d,entities:s}=X(),c=p=>g({...e.languageFilters,search:p??void 0}),{toggleSet:m,search:a,init:r,onUpdate:$}=R(s,[()=>e.languageFilters],t,c),k=p=>{var f;return(f=e.modelValue)==null?void 0:f.includes(p)},D=q(()=>r.value&&d.value);return{languages:s,toggleSet:m,loading:D,search:a,isSelected:k,onUpdate:$}}});function Y(e,t,g,d,s,c){const m=N("FSAutocompleteField");return S(),v(m,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(F,{align:"center-center"},{default:o(()=>[l(b,null,{default:o(()=>[n(i(a.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(a.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,T(j({...a,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(S(),v(V,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):I("",!0),l(b,null,{default:o(()=>[n(i(r.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue","search"])}const C=E(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:W},props:Object.keys(t),setup(){return{...e}},template:`
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
