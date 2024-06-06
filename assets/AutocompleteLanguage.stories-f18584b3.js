import{f as $,g as D,D as q,E as r,F as n,G as o,A as N,K as u,L as p,I as m,Q as s,R as U,S as G}from"./vue.esm-bundler-1de4ab84.js";import{F as I}from"./FSAutocompleteField-326a230c.js";import{F as A}from"./FSCheckbox-7bc44d7a.js";import{_ as f}from"./FSIcon-08483052.js";import{_ as S}from"./FSSpan-c5b5f93b.js";import{_ as F}from"./FSRow-0f15051e.js";import{G as R}from"./base-0de1729e.js";import{S as T}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-7269e9d8.js";import{u as B}from"./useAutocomplete-541ae531.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-46cfbf6f.js";import{_ as O}from"./FSCol-044a4f0a.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./useColors-6201f155.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-fee57059.js";import"./useSlots-78ee3d45.js";import"./VSpacer-8f10d0b5.js";import"./useRender-b44b777b.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./tag-58633b3a.js";import"./density-99305267.js";import"./dimensions-60fb7050.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6b0685b3.js";import"./FSClickable-00bc2ab2.js";import"./FSCard-23b564db.js";import"./css-73f1b6e3.js";import"./useRules-14fb7f63.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelectionControl-8efa9c46.js";import"./index-8cb030a7.js";import"./FSToggleSet-e1e3b1e0.js";import"./FSSlideGroup-0176bc8d.js";import"./uuid-08309875.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSFadeOut-649e8ed5.js";import"./FSLoader-404ee90e.js";import"./elevation-e7de2c09.js";import"./filter-6a45c8c8.js";import"./VMenu-75bfc7ff.js";import"./lodash-569b8a6d.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";class w{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends w{constructor(t){super(t)}}const P=()=>`${R()}/languages`,z=new T("language",j).create(e=>e.build(e.addGetMany(P,w),e.addNotify())),K=x.getMany(z),V=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:I,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=K(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:i}=B(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:i}}});function Q(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[u(p(a.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[s(M,U(G({...a,title:""})),{default:o(()=>[s(F,{align:"center-left"},{default:o(()=>{var i;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(i=e.$props.modelValue)==null?void 0:i.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):m("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[u(p(l.raw.icon),1)]),_:2},1024)):m("",!0),s(S,null,{default:o(()=>[u(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=E(V,[["render",Q]]);V.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
