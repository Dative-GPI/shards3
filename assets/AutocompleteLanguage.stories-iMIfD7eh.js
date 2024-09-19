var C=Object.defineProperty;var _=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>_(e,typeof t!="symbol"?t+"":t,o);import{d as $,c as p,z as D,A as s,B as g,C as d,m as k,G as q,H as U,E as G}from"./vue.esm-bundler-BwDfg4wG.js";import{F as N}from"./FSAutocompleteField-BJE5Iw2_.js";import{F as v}from"./FSIcon-ChaYv6Le.js";import{G as T}from"./base-CmdGny12.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-fou7heQy.js";import{u as E}from"./useAutocomplete-CQJJiztf.js";import{u as M}from"./useTranslations-CHmpEDXr.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-BEvj3we4.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./FSButton-jJkg4qCi.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./VProgressCircular-CmpAWY4m.js";import"./tag-Ceq3l71M.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./lodash-BiW_TGGX.js";class b{constructor(t){a(this,"id");a(this,"icon");a(this,"code");a(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class I extends b{constructor(t){super(t)}}const R=()=>`${T()}/languages`,z=new x("language",I).create(e=>e.build(e.addGetMany(R,b),e.addNotify())),H=B.getMany(z),h=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:N,FSIcon:v},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=H(),{$tr:m}=M(),i=p(()=>A.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(n,[()=>e.languageFilters],t,y);return{placeholder:l,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function P(e,t,o,u,n,m){const i=D("FSAutocompleteField");return s(),g(i,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:l})=>[l.icon?(s(),g(v,{key:0},{default:d(()=>[q(U(l.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=O(h,[["render",P]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,f,S;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const dt=["Variations"];export{r as Variations,dt as __namedExportsOrder,gt as default};
