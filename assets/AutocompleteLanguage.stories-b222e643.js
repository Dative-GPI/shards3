import{j as V,w as C,H as $,I as c,J as f,K as o,x as k,z as a,P as i,Q as u,M as T,U as x,V as q}from"./vue.esm-bundler-96d0a5cc.js";import{_ as N}from"./lodash-569b8a6d.js";import{F as L}from"./FSCheckbox-b67eda6e.js";import{F as G}from"./FSAutocompleteField-feebdccf.js";import{G as I}from"./base-0de1729e.js";import{S as U}from"./serviceFactory-3393b4e4.js";import{C as j}from"./composableFactory-2f95db4a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as S}from"./FSIcon-1f958509.js";import{_ as F}from"./FSRow-959288e5.js";import{_ as v}from"./FSSpan-572d1125.js";import{c as M}from"./VSelect-a10f1a69.js";import{_ as O}from"./FSCol-71088900.js";import"./_commonjsHelpers-725317a4.js";import"./useRules-d4bb430c.js";import"./useColors-a5c6eb1e.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./useRender-864589a6.js";import"./density-9320d724.js";import"./tag-2ee5b375.js";import"./proxiedModel-80fa8b72.js";import"./color-0e7f3458.js";import"./index-b26b5e2a.js";import"./VIcon-356fc7cc.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./locale-ebcc9fd1.js";import"./index-09e6aad2.js";import"./transition-2009bd3b.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./FSCard-907ca4bc.js";import"./css-187645c7.js";import"./VProgressCircular-b96acd02.js";import"./resizeObserver-608b050a.js";import"./useSlots-8f090340.js";import"./FSLoader-a4b17375.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./FSToggleSet-d129dae9.js";import"./FSSlideGroup-ee02b27e.js";import"./FSButtonNextIcon-9bb04157.js";import"./VSlideGroup-56c5a05a.js";import"./display-382afec5.js";import"./group-f931bb93.js";import"./FSWrapGroup-33fbf5d1.js";import"./VSpacer-f03e5178.js";import"./VTextField-10bbe6c7.js";import"./VField-12172b20.js";import"./loader-f509b4a4.js";import"./rounded-7d5adaf8.js";import"./VDefaultsProvider-638492ec.js";import"./forwardRefs-e658ad70.js";import"./index-ab6a3e98.js";import"./filter-14ef3d92.js";import"./VMenu-564fd94d.js";import"./VOverlay-511e4751.js";import"./border-66fb56b2.js";import"./lazy-e9f80e5f.js";import"./router-b0143796.js";import"./ssrBoot-67be078c.js";import"./VImg-7ef13259.js";import"./VDivider-5b8aa1c7.js";class _{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class P extends _{constructor(t){super(t)}}const R=()=>`${I()}/languages`,B=new U("language",P).create(e=>e.build(e.addGetMany(R,_),e.addNotify())),z=j.getMany(B),A=V({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:G,FSCheckbox:L},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:t,fetching:p,getMany:d}=z(),g=n=>{var l;return(l=e.modelValue)==null?void 0:l.includes(n)};return C(()=>e.languageFilters,async(n,l)=>{N.isEqual(n,l)||await d(n)},{immediate:!0}),{languages:t,fetching:p,isSelected:g}}});function D(e,t,p,d,g,n){const l=$("FSAutocompleteField");return c(),f(l,k({loading:e.fetching,multiple:e.$props.multiple,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{selection:o(({item:r})=>[a(F,{align:"center-center"},{default:o(()=>[a(S,null,{default:o(()=>[i(u(r.raw.icon),1)]),_:2},1024),a(v,null,{default:o(()=>[i(u(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:r,item:s})=>[a(M,x(q({...r,title:""})),{default:o(()=>[a(F,{align:"center-left"},{default:o(()=>[e.$props.multiple?(c(),f(L,{key:0,modelValue:e.isSelected(s.value)},null,8,["modelValue"])):T("",!0),a(S,null,{default:o(()=>[i(u(s.raw.icon),1)]),_:2},1024),a(v,null,{default:o(()=>[i(u(s.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["loading","multiple","items","modelValue"])}const w=E(A,[["render",D]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const lt={title:"Foundation/Shared/Autcompletes/LanguageAutocomplete",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:w,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :disableToggleSet="true"
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
        :disableToggleSet="true"
        v-model="args.value4"
      />
    </FSCol>`})};var b,y,h;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        :disableToggleSet="true"
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
        :disableToggleSet="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const rt=["Variations"];export{m as Variations,rt as __namedExportsOrder,lt as default};
