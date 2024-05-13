import{j as $,e as D,I as q,J as r,K as n,L as o,B as N,U as i,V as p,N as s,A as m,W as U,X as I}from"./vue.esm-bundler-41eda46b.js";import{F as B}from"./FSAutocompleteField-ab144f6b.js";import{F as A}from"./FSCheckbox-fb1efdda.js";import{_ as f}from"./FSIcon-33b1b769.js";import{_ as S}from"./FSSpan-8af5ddcc.js";import{_ as F}from"./FSRow-1508d56d.js";import{G}from"./base-0de1729e.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as T}from"./composableFactory-00c2f0ee.js";import{u as j}from"./useAutocomplete-0136f2aa.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VSelect-343e1eb1.js";import{_ as O}from"./FSCol-282cc158.js";import"./FSToggleSet-d830be43.js";import"./FSSlideGroup-dc19142a.js";import"./FSButtonNextIcon-d492a2d3.js";import"./FSButton-6f4c5e31.js";import"./FSClickable-25f814f4.js";import"./FSCard-5c9795f4.js";import"./useColors-c7c61044.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-720d9fd7.js";import"./css-35e8563f.js";import"./VProgressCircular-9cdac648.js";import"./color-92f22fcc.js";import"./useRender-55bb8ab6.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./useSlots-e8ea556e.js";import"./VSlideGroup-be2a9962.js";import"./index-3d73431e.js";import"./display-a55575e0.js";import"./goto-e333168a.js";import"./locale-850d67a0.js";import"./proxiedModel-a34e17b7.js";import"./group-4938f20b.js";import"./FSWrapGroup-9d68a093.js";import"./VInput-8f2c12b1.js";import"./transition-a4f3f1b4.js";import"./density-a7a72377.js";import"./dimensions-9ac12c80.js";import"./VField-095c5517.js";import"./VSpacer-19440644.js";import"./VLabel-484dc627.js";import"./loader-0baaac91.js";import"./rounded-e85715e4.js";import"./VDefaultsProvider-b40931ed.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-f72d1bee.js";import"./elevation-c799c3f5.js";import"./useRules-d33c1ab7.js";import"./VTextField-459f9fbf.js";import"./index-8f606737.js";import"./filter-ee19de16.js";import"./VMenu-9445716e.js";import"./VOverlay-d8fd5084.js";import"./lazy-5500c0d6.js";import"./router-4498b821.js";import"./scopeId-862e559a.js";import"./VSelectionControl-09c80f59.js";import"./index-1668950c.js";import"./lodash-569b8a6d.js";import"./useDebounce-c713d9ff.js";import"./ssrBoot-5c61be23.js";import"./border-ac5393da.js";import"./VImg-8e58296a.js";import"./VDivider-6afe813a.js";class V{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends V{constructor(t){super(t)}}const P=()=>`${G()}/languages`,W=new R("language",E).create(e=>e.build(e.addGetMany(P,V),e.addNotify())),z=T.getMany(W),w=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:B,FSCheckbox:A,FSIcon:f,FSSpan:S,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:v,fetching:b,entities:d}=z(),y=D(()=>l.value&&b.value),c=k=>v({...e.languageFilters,search:k??void 0}),{toggleSet:a,init:l,onUpdate:u}=j(d,[()=>e.languageFilters],t,c);return{languages:d,toggleSet:a,loading:y,onUpdate:u}}});function J(e,t,v,b,d,y){const c=q("FSAutocompleteField");return r(),n(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:a})=>[e.$props.modelValue?(r(),n(F,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a.raw.icon?(r(),n(f,{key:0},{default:o(()=>[i(p(a.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),"autocomplete-item":o(({props:a,item:l})=>[m(M,U(I({...a,title:""})),{default:o(()=>[m(F,{align:"center-left"},{default:o(()=>{var u;return[e.$props.multiple?(r(),n(A,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(l.value),onClick:a.onClick},null,8,["modelValue","onClick"])):s("",!0),l.raw.icon?(r(),n(f,{key:1},{default:o(()=>[i(p(l.raw.icon),1)]),_:2},1024)):s("",!0),m(S,null,{default:o(()=>[i(p(l.raw.label),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const C=x(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:C,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
