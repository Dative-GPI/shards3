var w=Object.defineProperty;var C=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>C(e,typeof t!="symbol"?t+"":t,o);import{d as D,c as p,y as $,z as s,A as g,B as d,m as k,E as q,G as U,D as G}from"./vue.esm-bundler--l9E1zCM.js";import{F as N}from"./FSAutocompleteField-DpzmU4ep.js";import{_ as v}from"./FSIcon-BHbXv1sW.js";import{G as T}from"./base-CmdGny12.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-BJn24iiy.js";import{u as E}from"./useAutocomplete-C1ph6JPC.js";import{u as I}from"./useTranslations-ByKtt_-5.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-B3SNj64H.js";import"./FSTextField-CORSOnFI.js";import"./FSBaseField-vXRxqDM_.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-CcOmb8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSButton-BPKnQ3W2.js";import"./FSClickable-BjrLGEPN.js";import"./FSCard-DXUcd4gZ.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-B4qN8dQk.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-DeeIs7LB.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BsXD3GQs.js";import"./FSWrapGroup-BLHTvc8Y.js";import"./FSCheckbox-O0BYl1sh.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-D6eFi9gL.js";import"./VImg-r61Tw9eL.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-CPRKwXqX.js";import"./VList-CMkQDUHu.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-DuVohGsR.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./lodash-BiW_TGGX.js";class b{constructor(t){a(this,"id");a(this,"icon");a(this,"code");a(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends b{constructor(t){super(t)}}const R=()=>`${T()}/languages`,z=new x("language",j).create(e=>e.build(e.addGetMany(R,b),e.addNotify())),P=B.getMany(z),h=D({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:N,FSIcon:v},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:r}=P(),{$tr:m}=I(),i=p(()=>A.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=_=>o({...e.languageFilters,search:_??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(r,[()=>e.languageFilters],t,y);return{placeholder:l,languages:r,toggleSet:L,loading:i,onUpdate:V}}});function W(e,t,o,u,r,m){const i=$("FSAutocompleteField");return s(),g(i,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:l})=>[l.icon?(s(),g(v,{key:0},{default:d(()=>[q(U(l.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=M(h,[["render",W]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const pt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,f,S;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const st=["Variations"];export{n as Variations,st as __namedExportsOrder,pt as default};
