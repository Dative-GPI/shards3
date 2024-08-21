var D=Object.defineProperty;var $=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>$(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as N,y as U,z as n,A as i,B as a,m as G,E as u,G as p,D as c,L as f}from"./vue.esm-bundler-gWFTcvUr.js";import{F as x}from"./FSAutocompleteField-b3Xz2NwJ.js";import{_ as S}from"./FSIcon-C5ELG8c1.js";import{_ as b}from"./FSSpan-BlywDO8Z.js";import{_ as F}from"./FSRow-Bpa2jjpJ.js";import{G as B}from"./base-CmdGny12.js";import{S as T}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-CZGZ62iP.js";import{u as I}from"./useAutocomplete-DqlTmpvX.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-CDk00Rln.js";import"./FSClickable-BVFP8bZP.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./lodash-BiW_TGGX.js";class w{constructor(t){r(this,"id");r(this,"icon");r(this,"code");r(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class R extends w{constructor(t){super(t)}}const j=()=>`${B()}/languages`,z=new T("language",R).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),P=E.getMany(z),A=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSIcon:S,FSSpan:b,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:v,entities:s}=P(),y=N(()=>d.value&&v.value),g=k=>l({...e.languageFilters,search:k??void 0}),{toggleSet:o,init:d,onUpdate:C}=I(s,[()=>e.languageFilters],t,g);return{languages:s,toggleSet:o,loading:y,onUpdate:C}}});function W(e,t,l,v,s,y){const g=U("FSAutocompleteField");return n(),i(g,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(n(),i(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,null,{default:a(()=>[u(p(o.raw.label),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),"item-label":a(({item:o,font:d})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,{font:d},{default:a(()=>[u(p(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(A,[["render",W]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:V,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
