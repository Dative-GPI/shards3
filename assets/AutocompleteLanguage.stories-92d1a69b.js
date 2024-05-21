import{j as $,e as D,I as q,J as r,K as n,L as o,B as N,U as i,V as p,N as s,A as m,W as U,X as I}from"./vue.esm-bundler-7c237656.js";import{F as B}from"./FSAutocompleteField-3e0e956b.js";import{F as A}from"./FSCheckbox-da06ce33.js";import{_ as f}from"./FSIcon-5ad13b7e.js";import{_ as S}from"./FSSpan-661158f8.js";import{_ as F}from"./FSRow-0e15f868.js";import{G}from"./base-0de1729e.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as T}from"./composableFactory-08360cd4.js";import{u as j}from"./useAutocomplete-c9cb8b74.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-735dad66.js";import{_ as O}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./FSButton-2de03eb9.js";import"./FSClickable-e8caff35.js";import"./FSCard-c7069f2a.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./css-aa928277.js";import"./VProgressCircular-4299d8b4.js";import"./color-8a2bce37.js";import"./useRender-e0e7d9de.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-5e88f18e.js";import"./index-09a2de27.js";import"./display-e291008d.js";import"./goto-527c7407.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./group-3855ab92.js";import"./FSWrapGroup-37c801a8.js";import"./VInput-eed42ecd.js";import"./transition-e42cd317.js";import"./density-a5226544.js";import"./dimensions-cb2de721.js";import"./VField-86f2cf98.js";import"./VSpacer-84430db1.js";import"./VLabel-236d5849.js";import"./loader-a7579223.js";import"./rounded-a3086a85.js";import"./VDefaultsProvider-82c11bd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useRules-30f7bcaa.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./filter-9f13a693.js";import"./VMenu-2484e62c.js";import"./VOverlay-a23169e8.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends V{constructor(t){super(t)}}const P=()=>`${G()}/languages`,W=new R("language",E).create(e=>e.build(e.addGetMany(P,V),e.addNotify())),z=T.getMany(W),w=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=z(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:u}=j(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:u}}});function J(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[i(p(a.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[m(M,U(I({...a,title:""})),{default:o(()=>[m(F,{align:"center-left"},{default:o(()=>{var u;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):s("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[i(p(l.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=x(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const st=["Variations"];export{g as Variations,st as __namedExportsOrder,pt as default};
