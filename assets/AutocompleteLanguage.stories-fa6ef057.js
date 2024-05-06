import{j as $,e as D,I as q,J as r,K as n,L as o,B as I,S as u,U as i,N as s,A as p,W as N,X as U}from"./vue.esm-bundler-3416a090.js";import{F as B}from"./FSAutocompleteField-a04215fa.js";import{F as A}from"./FSCheckbox-422b3b91.js";import{_ as c}from"./FSIcon-f518d728.js";import{_ as f}from"./FSSpan-b519c994.js";import{_ as S}from"./FSRow-5edf997c.js";import{G}from"./base-0de1729e.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as T}from"./composableFactory-8605555f.js";import{u as j}from"./useAutocomplete-ca462ffd.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{V as O}from"./VSelect-f25e0916.js";import{_ as x}from"./FSCol-5731c3c4.js";import"./FSToggleSet-ec2870f8.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./FSCard-92f27951.js";import"./useColors-1faf681b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-2c100cd8.js";import"./css-69ed11d9.js";import"./VProgressCircular-22b061ae.js";import"./color-5c733e3b.js";import"./useRender-fb717f1b.js";import"./resizeObserver-999a6c5c.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./useSlots-7472d1e2.js";import"./VSlideGroup-057adefe.js";import"./index-46378e0b.js";import"./display-00a40b50.js";import"./goto-8a93c650.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./group-f3cba4ff.js";import"./FSWrapGroup-367aabb9.js";import"./VInput-77c4eaa4.js";import"./transition-6086c96b.js";import"./density-174ddef7.js";import"./dimensions-97f2f62c.js";import"./VField-d3f61dc4.js";import"./VSpacer-819449a6.js";import"./VLabel-793ed17d.js";import"./loader-b2c56b78.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useRules-5e1988ee.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./filter-d102117b.js";import"./VMenu-39a0be1f.js";import"./VOverlay-61ba3ae0.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./VSelectionControl-0b3e2526.js";import"./index-a9118fe7.js";import"./lodash-569b8a6d.js";import"./useDebounce-736cfd0a.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";class _{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends _{constructor(t){super(t)}}const P=()=>`${G()}/languages`,W=new R("language",E).create(e=>e.build(e.addGetMany(P,_),e.addNotify())),z=T.getMany(W),w=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:A,FSIcon:c,FSSpan:f,FSRow:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:F,fetching:v,entities:g}=z(),b=D(()=>l.value&&v.value),d=k=>F({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:C}=j(g,[()=>e.languageFilters],t,d);return{languages:g,toggleSet:a,loading:b,onUpdate:C}}});function J(e,t,F,v,g,b){const d=q("FSAutocompleteField");return r(),n(d,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,toggleSetItems:e.languages,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(S,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(c,{key:0},{default:o(()=>[u(i(a.raw.icon),1)]),_:2},1024)):s("",!0),p(f,null,{default:o(()=>[u(i(a.raw.label),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[p(O,N(U({...a,title:""})),{default:o(()=>[p(S,{align:"center-left"},{default:o(()=>[e.$props.multiple?(r(),n(A,{key:0,modelValue:e.$props.modelValue.includes(l.value)},null,8,["modelValue"])):s("",!0),l.raw.icon?(r(),n(c,{key:1},{default:o(()=>[u(i(l.raw.icon),1)]),_:2},1024)):s("",!0),p(f,null,{default:o(()=>[u(i(l.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","toggleSetItems","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const it={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:V,FSCol:x},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,h,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const st=["Variations"];export{m as Variations,st as __namedExportsOrder,it as default};
