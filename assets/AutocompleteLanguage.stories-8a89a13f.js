import{j as $,e as D,I as q,J as r,K as n,L as o,B as N,U as u,V as p,N as m,A as s,W as U,X as I}from"./vue.esm-bundler-7c237656.js";import{F as B}from"./FSAutocompleteField-8290612b.js";import{F as A}from"./FSCheckbox-2107f3ac.js";import{_ as f}from"./FSIcon-84236a8c.js";import{_ as S}from"./FSSpan-661158f8.js";import{_ as F}from"./FSRow-0e15f868.js";import{G}from"./base-0de1729e.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as T}from"./composableFactory-08360cd4.js";import{u as j}from"./useAutocomplete-c9cb8b74.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-6f1247c6.js";import{_ as O}from"./FSCol-76ddd6d9.js";import"./FSToggleSet-60e07ad2.js";import"./FSSlideGroup-3826bb87.js";import"./FSButtonNextIcon-c829e5dd.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./FSCard-be090350.js";import"./useColors-8171fc39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./css-aa928277.js";import"./VProgressCircular-84d930cf.js";import"./color-8b3e8a76.js";import"./useRender-e696dd75.js";import"./resizeObserver-78a25be2.js";import"./VIcon-ea625dc1.js";import"./tag-d0e3859f.js";import"./useSlots-338ea3fb.js";import"./VSlideGroup-688ca79d.js";import"./index-bed3da0c.js";import"./display-f7c4d7d9.js";import"./goto-5a330938.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./group-114c8e76.js";import"./FSWrapGroup-1451daa8.js";import"./VInput-cb53917c.js";import"./transition-99224378.js";import"./density-ba2627df.js";import"./dimensions-506d0d5f.js";import"./VField-1b5a23ea.js";import"./VSpacer-5d7851f1.js";import"./VLabel-25f2a1ef.js";import"./loader-1ca0c22d.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./VDefaultsProvider-8ad05cd7.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-ff2c3104.js";import"./elevation-322d7ef7.js";import"./useRules-30f7bcaa.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./filter-ec24e360.js";import"./VMenu-ecd47b95.js";import"./VOverlay-215d3759.js";import"./lazy-ba583f92.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./VSelectionControl-4d654956.js";import"./index-b834f342.js";import"./lodash-569b8a6d.js";import"./useDebounce-3b8c8385.js";import"./ssrBoot-ce89aa70.js";import"./border-07f356f9.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends V{constructor(t){super(t)}}const P=()=>`${G()}/languages`,W=new R("language",E).create(e=>e.build(e.addGetMany(P,V),e.addNotify())),z=T.getMany(W),w=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=z(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:i}=j(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:i}}});function J(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[s(M,U(I({...a,title:""})),{default:o(()=>[s(F,{align:"center-left"},{default:o(()=>{var i;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[u(p(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=x(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const mt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const st=["Variations"];export{g as Variations,st as __namedExportsOrder,mt as default};
