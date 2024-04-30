import{j as U,e as q,I as N,J as S,K as v,L as o,A as G,z as l,S as n,U as i,N as I,W as T,X as j}from"./vue.esm-bundler-82a4b45a.js";import{F as _}from"./FSCheckbox-4b8da1d3.js";import{F as B}from"./FSAutocompleteField-9928e23d.js";import{G as M}from"./base-0de1729e.js";import{S as O}from"./serviceFactory-7552fe10.js";import{C as R}from"./composableFactory-2f513de5.js";import{u as x}from"./useAutocomplete-14a2146a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as b}from"./FSIcon-97799824.js";import{_ as F}from"./FSRow-2ccfd21b.js";import{_ as h}from"./FSSpan-4bf272e8.js";import{c as P}from"./VSelect-fca10f65.js";import{_ as z}from"./FSCol-8326ac62.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./useRules-7b0f86fa.js";import"./VCheckboxBtn-efd34d1e.js";import"./VSelectionControl-5140d531.js";import"./useRender-9b5fad83.js";import"./density-d6a10252.js";import"./tag-c823df72.js";import"./proxiedModel-6f61b602.js";import"./color-616211f8.js";import"./index-0f4b4beb.js";import"./VIcon-cdae09b0.js";import"./VLabel-db8bd06b.js";import"./VInput-6edbe327.js";import"./locale-c97048b2.js";import"./index-7dc37899.js";import"./transition-0cde2f94.js";import"./FSButton-c71cf6ce.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./css-c39c4a6e.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./useSlots-f55d2513.js";import"./FSLoader-5be1941d.js";import"./dimensions-7b60e06e.js";import"./elevation-2177f5c6.js";import"./FSToggleSet-7d54313a.js";import"./FSSlideGroup-35b11b76.js";import"./FSButtonNextIcon-3fcfc95d.js";import"./VSlideGroup-4309af86.js";import"./display-8a1f63da.js";import"./group-a18b2437.js";import"./FSWrapGroup-727178e5.js";import"./VSpacer-dfdceece.js";import"./VTextField-f485b40e.js";import"./VField-f2eeeda6.js";import"./loader-80aadcba.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./forwardRefs-e658ad70.js";import"./index-30818099.js";import"./filter-4073c1af.js";import"./VMenu-9dbbffaa.js";import"./VOverlay-e517ca89.js";import"./lazy-ee12d092.js";import"./router-7318af59.js";import"./lodash-569b8a6d.js";import"./useDebounce-d5680b13.js";import"./ssrBoot-4291a4a7.js";import"./border-7fe0702c.js";import"./VImg-a45e529b.js";import"./VDivider-46910f72.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class W extends V{constructor(t){super(t)}}const J=()=>`${M()}/languages`,K=new O("language",W).create(e=>e.build(e.addGetMany(J,V),e.addNotify())),X=R.getMany(K),w=U({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:_},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:g,fetching:d,entities:s}=X(),c=p=>g({...e.languageFilters,search:p??void 0}),{toggleSet:m,search:a,init:r,onUpdate:$}=x(s,[()=>e.languageFilters],t,c),k=p=>{var f;return(f=e.modelValue)==null?void 0:f.includes(p)},D=q(()=>r.value&&d.value);return{languages:s,toggleSet:m,loading:D,search:a,isSelected:k,onUpdate:$}}});function Y(e,t,g,d,s,c){const m=N("FSAutocompleteField");return S(),v(m,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate,search:e.search,"onUpdate:search":t[0]||(t[0]=a=>e.search=a)},e.$attrs),{selection:o(({item:a})=>[l(F,{align:"center-center"},{default:o(()=>[l(b,null,{default:o(()=>[n(i(a.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(a.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:a,item:r})=>[l(P,T(j({...a,title:""})),{default:o(()=>[l(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(S(),v(_,{key:0,modelValue:e.isSelected(r.value)},null,8,["modelValue"])):I("",!0),l(b,null,{default:o(()=>[n(i(r.raw.icon),1)]),_:2},1024),l(h,null,{default:o(()=>[n(i(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue","search"])}const C=E(w,[["render",Y]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
