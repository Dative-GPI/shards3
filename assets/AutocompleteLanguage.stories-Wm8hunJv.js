var D=Object.defineProperty;var $=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>$(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as N,y as U,z as n,A as i,B as a,m as G,E as u,G as p,D as c,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as x}from"./FSAutocompleteField-Ux4Kk2cr.js";import{_ as S}from"./FSIcon-uD_MRFdb.js";import{_ as b}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{G as B}from"./base-BNnJ_ndD.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as T}from"./composableFactory-J8cSLWf9.js";import{u as E}from"./useAutocomplete-1Tpu4ol_.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DTgdezCY.js";import"./FSTextField-B92xKcv7.js";import"./FSBaseField-CKMO1RzZ.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-B8CL4IYQ.js";import"./FSClickable-CNOWN-hR.js";import"./FSCard-BzleLmPd.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-cbMj6UFV.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-Cku24mDz.js";import"./FSRadio-CkPi_Tsj.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-BslFow6I.js";import"./FSSlideGroup-Dr94JzOY.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-BHdXrc3w.js";import"./FSCheckbox-CFeLLHEx.js";import"./FSFadeOut-_RgLKyTO.js";import"./FSLoader-CbNdmyFm.js";import"./elevation-BTkUCD39.js";import"./VSelect-DsYsgoZM.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./lodash-BiW_TGGX.js";class w{constructor(t){r(this,"id");r(this,"icon");r(this,"code");r(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class R extends w{constructor(t){super(t)}}const j=()=>`${B()}/languages`,z=new I("language",R).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),P=T.getMany(z),A=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSIcon:S,FSSpan:b,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:v,entities:s}=P(),y=N(()=>d.value&&v.value),g=k=>l({...e.languageFilters,search:k??void 0}),{toggleSet:o,init:d,onUpdate:C}=E(s,[()=>e.languageFilters],t,g);return{languages:s,toggleSet:o,loading:y,onUpdate:C}}});function W(e,t,l,v,s,y){const g=U("FSAutocompleteField");return n(),i(g,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(n(),i(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,null,{default:a(()=>[u(p(o.raw.label),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),"item-label":a(({item:o,font:d})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,{font:d},{default:a(()=>[u(p(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(A,[["render",W]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:V,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var h,L,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const dt=["Variations"];export{m as Variations,dt as __namedExportsOrder,gt as default};
