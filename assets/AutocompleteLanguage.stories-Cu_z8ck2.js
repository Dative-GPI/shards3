var C=Object.defineProperty;var D=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>D(e,typeof t!="symbol"?t+"":t,o);import{d as _,c as p,y as $,z as s,A as g,B as d,m as k,E as q,G as U,D as G}from"./vue.esm-bundler-BSyvBTC9.js";import{F as N}from"./FSAutocompleteField-BWpIRFQb.js";import{F as v}from"./FSIcon-lOMM3dv0.js";import{G as T}from"./base-CmdGny12.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-wHNy9kQa.js";import{u as E}from"./useAutocomplete-BASvUgNW.js";import{u as M}from"./useTranslations-CdSqQFV3.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-CtQDyyQv.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-B3SJi8FA.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-nYXrUxor.js";import"./FSClickable-BDGPWcsb.js";import"./FSCard-VI0SCCBU.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSCheckbox-DjQsgBzR.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-DGMvjjet.js";import"./FSLoader-7EueGG7H.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./lodash-BiW_TGGX.js";class b{constructor(t){a(this,"id");a(this,"icon");a(this,"code");a(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class I extends b{constructor(t){super(t)}}const R=()=>`${T()}/languages`,z=new x("language",I).create(e=>e.build(e.addGetMany(R,b),e.addNotify())),P=B.getMany(z),h=_({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:N,FSIcon:v},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:n}=P(),{$tr:m}=M(),i=p(()=>A.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=w=>o({...e.languageFilters,search:w??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(n,[()=>e.languageFilters],t,y);return{placeholder:l,languages:n,toggleSet:L,loading:i,onUpdate:V}}});function W(e,t,o,u,n,m){const i=$("FSAutocompleteField");return s(),g(i,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:l})=>[l.icon?(s(),g(v,{key:0},{default:d(()=>[q(U(l.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=O(h,[["render",W]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const dt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const ct=["Variations"];export{r as Variations,ct as __namedExportsOrder,dt as default};
