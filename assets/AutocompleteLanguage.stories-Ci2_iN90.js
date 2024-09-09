var w=Object.defineProperty;var C=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>C(e,typeof t!="symbol"?t+"":t,o);import{d as D,c as p,y as $,z as s,A as g,B as d,m as k,E as q,G as U,D as G}from"./vue.esm-bundler-Vj2X7okO.js";import{F as N}from"./FSAutocompleteField-D4bTwKsh.js";import{_ as v}from"./FSIcon-CKzhvi-C.js";import{G as T}from"./base-CmdGny12.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-B0937_6N.js";import{u as E}from"./useAutocomplete-DIcQFoAK.js";import{u as I}from"./useTranslations-DyPMaPr_.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-Bk577joi.js";import"./FSSearchField-CBCgljQJ.js";import"./FSTextField-CdPWSms5.js";import"./FSBaseField-CJsUhopP.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-DbYs0nlr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./FSButton-Cu-2DGh7.js";import"./FSClickable-C6-rWYfA.js";import"./FSCard-D9e2PZ5O.js";import"./VProgressCircular-BALYDMME.js";import"./tag-BDy8Psij.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-CI3XxiK0.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-B7xKK6c-.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-ERyA7UBg.js";import"./FSWrapGroup-DznP-FT8.js";import"./FSCheckbox-C_BP1rxW.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-C6v1xdo-.js";import"./VImg-DxvBH4oU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-D7wcd6J3.js";import"./VList-D7oPpfjd.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-Bk6IV5T5.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./lodash-BiW_TGGX.js";class b{constructor(t){a(this,"id");a(this,"icon");a(this,"code");a(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class j extends b{constructor(t){super(t)}}const R=()=>`${T()}/languages`,z=new x("language",j).create(e=>e.build(e.addGetMany(R,b),e.addNotify())),P=B.getMany(z),h=D({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:N,FSIcon:v},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:u,entities:r}=P(),{$tr:m}=I(),i=p(()=>A.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-language.placeholder","{0} language(s) selected",e.modelValue.length):null),y=_=>o({...e.languageFilters,search:_??void 0}),{toggleSet:L,init:A,onUpdate:V}=E(r,[()=>e.languageFilters],t,y);return{placeholder:l,languages:r,toggleSet:L,loading:i,onUpdate:V}}});function W(e,t,o,u,r,m){const i=$("FSAutocompleteField");return s(),g(i,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:l})=>[l.icon?(s(),g(v,{key:0},{default:d(()=>[q(U(l.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const F=M(h,[["render",W]]);h.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const st={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:F,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const gt=["Variations"];export{n as Variations,gt as __namedExportsOrder,st as default};
