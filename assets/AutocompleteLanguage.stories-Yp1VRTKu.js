import{d as C,c as k,y as D,z as l,A as r,B as o,m as $,E as n,G as i,D as g,I as d}from"./vue.esm-bundler-DC82FEWN.js";import{F as q}from"./FSAutocompleteField-CjNLkCyT.js";import{_ as c}from"./FSIcon-CBfle4ZR.js";import{_ as f}from"./FSSpan-CwfDYIua.js";import{_ as S}from"./FSRow-DoCXWKDP.js";import{u as B}from"./useLanguages-CGyTN8dQ.js";import{u as N}from"./useAutocomplete-CPLeARdk.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B6goAqn0.js";import"./FSTextField-BJOz_lKI.js";import"./FSBaseField-Capz3MEE.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSButton-Do7vvvNJ.js";import"./FSClickable-BbRY9BmN.js";import"./FSCard-PwHP1R85.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-HS8EKdqs.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-CZQzAP6z.js";import"./FSRadio-DgEWe4FI.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-BbIEkiIE.js";import"./FSSlideGroup-CtkZI_Rf.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-Cfxg56QW.js";import"./FSCheckbox-BxKP35TB.js";import"./FSFadeOut-BxczCLJY.js";import"./FSLoader-8B7k5XDA.js";import"./elevation-xgrzvMGW.js";import"./VSelect-DPrB_5mV.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const _=C({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:q,FSIcon:c,FSSpan:f,FSRow:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:F,fetching:v,entities:u}=B(),b=k(()=>s.value&&v.value),m=V=>F({...e.languageFilters,search:V??void 0}),{toggleSet:t,init:s,onUpdate:A}=N(u,[()=>e.languageFilters],a,m);return{languages:u,toggleSet:t,loading:b,onUpdate:A}}});function O(e,a,F,v,u,b){const m=D("FSAutocompleteField");return l(),r(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(l(),r(S,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,null,{default:o(()=>[n(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":o(({item:t,font:s})=>[d(S,{align:"center-left",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,{font:s},{default:o(()=>[n(i(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=x(_,[["render",O]]);_.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const at={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteLanguage:w,FSCol:I},props:Object.keys(a),setup(){return{...e}},template:`
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
    </FSCol>`})};var y,h,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(h=p.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const lt=["Variations"];export{p as Variations,lt as __namedExportsOrder,at as default};
