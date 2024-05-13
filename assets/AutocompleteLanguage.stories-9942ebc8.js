import{j as $,e as D,I as q,J as r,K as n,L as o,B as N,U as i,V as p,N as s,A as m,W as U,X as I}from"./vue.esm-bundler-41eda46b.js";import{F as B}from"./FSAutocompleteField-95896a23.js";import{F as A}from"./FSCheckbox-90b24572.js";import{_ as f}from"./FSIcon-713345eb.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{G}from"./base-0de1729e.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as T}from"./composableFactory-00c2f0ee.js";import{u as j}from"./useAutocomplete-0136f2aa.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-defb5d1c.js";import{_ as O}from"./FSCol-282cc158.js";import"./FSToggleSet-d7834bf3.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./css-35e8563f.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./FSWrapGroup-d3a1dbf2.js";import"./VInput-4d87c32a.js";import"./transition-695cd20f.js";import"./density-b42ba92f.js";import"./dimensions-5b54e342.js";import"./VField-c52f5557.js";import"./VSpacer-63a59a9e.js";import"./VLabel-19fa20ee.js";import"./loader-e17cf3b4.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useRules-d33c1ab7.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./filter-133522f7.js";import"./VMenu-499c8185.js";import"./VOverlay-ac667fed.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./VSelectionControl-42a6862f.js";import"./index-4ba2035c.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends V{constructor(t){super(t)}}const P=()=>`${G()}/languages`,W=new R("language",E).create(e=>e.build(e.addGetMany(P,V),e.addNotify())),z=T.getMany(W),w=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=z(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:u}=j(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:u}}});function J(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[i(p(a.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[m(M,U(I({...a,title:""})),{default:o(()=>[m(F,{align:"center-left"},{default:o(()=>{var u;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):s("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[i(p(l.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=x(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
