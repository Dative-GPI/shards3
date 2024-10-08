var C=Object.defineProperty;var _=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>_(e,typeof t!="symbol"?t+"":t,o);import{d as $,c as p,y as D,z as s,A as g,C as d,m as k,H as q,I as U,F as N}from"./vue.esm-bundler-CWdIlc2r.js";import{F as T}from"./FSAutocompleteField-BsuqiUNA.js";import{F as v}from"./FSIcon-kERq0rd3.js";import{G as x}from"./base-CmdGny12.js";import{S as G}from"./serviceFactory-DAEdCiSt.js";import{C as B}from"./composableFactory-Dh-waxQE.js";import{u as I}from"./useAutocomplete-By7-59rq.js";import{u as M}from"./useTranslations-CEnu7PZQ.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-CvoATp5Q.js";import"./FSSearchField-OYD9-eLG.js";import"./FSTextField-JGjjGRZ0.js";import"./FSBaseField-D0m8YJR6.js";import"./FSSpan-Bnbdrku6.js";import"./useBreakpoints-INFVV7da.js";import"./useSlots-zwOl0abH.js";import"./FSRow-BnsweOMX.js";import"./css-BWDYXGFo.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./FSButton-C0E8ILJw.js";import"./FSClickable-DTqk3LMl.js";import"./FSCard-BOEac87c.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSDialogMenu-pzU7lUOk.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CDRvV-qZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BAVwN0SI.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-XllH3ja9.js";import"./FSWrapGroup-Cj-lYBpD.js";import"./FSCheckbox-BnhjVDBp.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-DxMiSoxL.js";import"./FSLoader-DzvXQnnL.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-vYSNhBy9.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-B1CQJS6i.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./lodash-BiW_TGGX.js";class b{constructor(t){a(this,"id");a(this,"icon");a(this,"code");a(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends b{constructor(t){super(t)}}const R=()=>`${x()}/languages`,z=new G("language",E).create(e=>e.build(e.addGetMany(R,b),e.addNotify())),H=B.getMany(z),h=$({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:T,FSIcon:v},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=H(),{$tr:m}=M(),i=p(()=>A.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=I(n,[()=>e.languageFilters],t,y);return{placeholder:l,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function P(e,t,o,u,n,m){const i=D("FSAutocompleteField");return s(),g(i,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:l})=>[l.icon?(s(),g(v,{key:0},{default:d(()=>[q(U(l.icon),1)]),_:2},1024)):N("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=O(h,[["render",P]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const St=["Variations"];export{r as Variations,St as __namedExportsOrder,ft as default};
