import{j as V,w as C,I as $,J as c,K as f,L as o,x as k,v as a,U as i,V as u,N as T,W as x,X as N}from"./vue.esm-bundler-0c8496bd.js";import{_ as q}from"./lodash-569b8a6d.js";import{F as L}from"./FSCheckbox-9b9919c2.js";import{F as G}from"./FSAutocompleteField-022e7e15.js";import{G as I}from"./base-0de1729e.js";import{S as U}from"./serviceFactory-3393b4e4.js";import{C as j}from"./composableFactory-ad68cfdd.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as S}from"./FSIcon-e8919096.js";import{_ as v}from"./FSRow-547598b4.js";import{_ as F}from"./FSSpan-dff588c4.js";import{c as O}from"./VSelect-f6dc4f4d.js";import{_ as R}from"./FSCol-0a323bdc.js";import"./_commonjsHelpers-725317a4.js";import"./useColors-b1c35b1c.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./useRules-a67d9042.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./useRender-8701d95b.js";import"./density-22f26472.js";import"./tag-0cc02cbd.js";import"./proxiedModel-19525b39.js";import"./color-e947437a.js";import"./index-5120e393.js";import"./VIcon-7bba82fc.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./locale-4d9bcfcb.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./css-0fb78066.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./useSlots-d0001844.js";import"./FSLoader-6cae8fac.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./FSToggleSet-f583e42c.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./VSlideGroup-8312a613.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./FSWrapGroup-53ffd2f5.js";import"./VSpacer-989c3452.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./filter-981204f7.js";import"./VMenu-36a8b303.js";import"./VOverlay-471318e4.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";class _{constructor(t){this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class B extends _{constructor(t){super(t)}}const M=()=>`${I()}/languages`,P=new U("language",B).create(e=>e.build(e.addGetMany(M,_),e.addNotify())),D=j.getMany(P),A=V({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:G,FSCheckbox:L},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:t,fetching:p,getMany:d}=D(),g=n=>{var l;return(l=e.modelValue)==null?void 0:l.includes(n)};return C(()=>e.languageFilters,async(n,l)=>{q.isEqual(n,l)||await d(n)},{immediate:!0}),{languages:t,fetching:p,isSelected:g}}});function W(e,t,p,d,g,n){const l=$("FSAutocompleteField");return c(),f(l,k({loading:e.fetching,multiple:e.$props.multiple,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{selection:o(({item:r})=>[a(v,{align:"center-center"},{default:o(()=>[a(S,null,{default:o(()=>[i(u(r.raw.icon),1)]),_:2},1024),a(F,null,{default:o(()=>[i(u(r.raw.label),1)]),_:2},1024)]),_:2},1024)]),item:o(({props:r,item:s})=>[a(O,x(N({...r,title:""})),{default:o(()=>[a(v,{align:"center-left"},{default:o(()=>[e.$props.multiple?(c(),f(L,{key:0,modelValue:e.isSelected(s.value)},null,8,["modelValue"])):T("",!0),a(S,null,{default:o(()=>[i(u(s.raw.icon),1)]),_:2},1024),a(F,null,{default:o(()=>[i(u(s.raw.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},16,["loading","multiple","items","modelValue"])}const w=E(A,[["render",W]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const lt={title:"Foundation/Shared/Autcompletes/LanguageAutocomplete",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:w,FSCol:R},props:Object.keys(t),setup(){return{...e}},template:`
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
