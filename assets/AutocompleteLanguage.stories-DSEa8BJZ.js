var C=Object.defineProperty;var $=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>$(e,typeof t!="symbol"?t+"":t,o);import{d as q,c as p,A as D,B as s,D as g,j as _,I as d,J as k,K as U,G}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as N}from"./FSAutocompleteField-DJKWDuqJ.js";import{F as S}from"./FSIcon-BwW5Hq8i.js";import{G as T}from"./base-CmdGny12.js";import{S as B}from"./serviceFactory-qtdw0UKd.js";import{C as j}from"./composableFactory-K8W9GIHH.js";import{u as x}from"./useAutocomplete-BnDWNIS6.js";import{u as I}from"./useTranslations-DJOHKWsD.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSCol-D35grUmj.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSButton-BDSx2V0J.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./VList-CxEWDEvR.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";import"./lodash-BrWYvtk2.js";class v{constructor(t){l(this,"id");l(this,"icon");l(this,"code");l(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class E extends v{constructor(t){super(t)}}const R=()=>`${T()}/languages`,J=new B("language",E).create(e=>e.build(e.addGetMany(R,v),e.addNotify())),K=j.getMany(J),h=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:N,FSIcon:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:i,entities:n}=K(),{$tr:m}=I(),u=p(()=>A.value&&i.value),a=p(()=>e.multiple&&e.modelValue?m("autocomplete.language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=x(n,[()=>e.languageFilters],t,y);return{placeholder:a,languages:n,toggleSet:L,loading:u,onUpdate:V}}});function P(e,t,o,i,n,m){const u=D("FSAutocompleteField");return d(),s(u,_({label:e.$tr("ui.common.language","Language"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":g(({item:a})=>[a.icon?(d(),s(S,{key:0},{default:g(()=>[k(U(a.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=M(h,[["render",P]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,f,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const bt=["Variations"];export{r as Variations,bt as __namedExportsOrder,ft as default};
