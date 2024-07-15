var D=Object.defineProperty;var $=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>$(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as N,y as U,z as n,A as i,B as a,m as G,E as u,G as p,D as c,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as x}from"./FSAutocompleteField-iSfPzHk1.js";import{_ as S}from"./FSIcon-2B0NN_at.js";import{_ as b}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{G as B}from"./base-BNnJ_ndD.js";import{S as I}from"./serviceFactory-Bd5jifNi.js";import{C as T}from"./composableFactory-J8cSLWf9.js";import{u as E}from"./useAutocomplete-BV7te6qQ.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DejeNnVl.js";import"./FSTextField-CIgddAfu.js";import"./FSBaseField-3fq9JEyD.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSButton-DQTNQ7w6.js";import"./FSClickable-Bk5I2JN4.js";import"./FSCard-DJrzS8t_.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-DmBV7Mf4.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-CgnmC9k2.js";import"./FSRadio-Czfn0-vM.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-D76-MhYq.js";import"./FSSlideGroup-Buay-X2i.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-BG-AaJX-.js";import"./FSCheckbox-C9nNPPnZ.js";import"./FSFadeOut-7Ilw0XG1.js";import"./FSLoader-B1rWpyEr.js";import"./elevation-xgrzvMGW.js";import"./VSelect-D7F3d6A4.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./lodash-BiW_TGGX.js";class w{constructor(t){r(this,"id");r(this,"icon");r(this,"code");r(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class R extends w{constructor(t){super(t)}}const j=()=>`${B()}/languages`,z=new I("language",R).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),P=T.getMany(z),A=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSIcon:S,FSSpan:b,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:v,entities:s}=P(),y=N(()=>d.value&&v.value),g=k=>l({...e.languageFilters,search:k??void 0}),{toggleSet:o,init:d,onUpdate:C}=E(s,[()=>e.languageFilters],t,g);return{languages:s,toggleSet:o,loading:y,onUpdate:C}}});function W(e,t,l,v,s,y){const g=U("FSAutocompleteField");return n(),i(g,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(n(),i(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,null,{default:a(()=>[u(p(o.raw.label),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),"item-label":a(({item:o,font:d})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,{font:d},{default:a(()=>[u(p(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(A,[["render",W]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const dt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:V,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const ct=["Variations"];export{m as Variations,ct as __namedExportsOrder,dt as default};
