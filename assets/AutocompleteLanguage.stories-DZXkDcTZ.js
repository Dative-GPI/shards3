import{d as C,c as k,y as D,z as l,A as r,B as o,m as $,E as n,G as i,D as g,I as d}from"./vue.esm-bundler-DC82FEWN.js";import{F as q}from"./FSAutocompleteField-BjVs_BJa.js";import{F as x}from"./FSCheckbox-M8Bs7S24.js";import{_ as c}from"./FSIcon-BZTGzEA5.js";import{_ as f}from"./FSSpan-CwfDYIua.js";import{_ as S}from"./FSRow-BPJXOzs-.js";import{u as B}from"./useLanguages-CGyTN8dQ.js";import{u as N}from"./useAutocomplete-DblNVG4s.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-CkM6DP-d.js";import"./FSSearchField-Dm_DgX5J.js";import"./FSTextField-BHg2KNCG.js";import"./VField-C3DtoroY.js";import"./useColors-CXl0hRe0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Dt6DpUVX.js";import"./FSClickable-D1l62sMQ.js";import"./FSCard-CQ3lfryo.js";import"./css-DYOPUjjE.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-eZGMPoMT.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-ekhc2J0d.js";import"./FSRadio-CscXF7IF.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-D4frsOr2.js";import"./FSSlideGroup-CgPOoi2Q.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-C6w0lG87.js";import"./FSFadeOut-DJfcYfqT.js";import"./FSLoader-D_G7mk7-.js";import"./elevation-BoGrGvdU.js";import"./VSelect-DqMGXfw3.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const _=C({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:q,FSCheckbox:x,FSIcon:c,FSSpan:f,FSRow:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:F,fetching:b,entities:u}=B(),v=k(()=>s.value&&b.value),m=V=>F({...e.languageFilters,search:V??void 0}),{toggleSet:t,init:s,onUpdate:A}=N(u,[()=>e.languageFilters],a,m);return{languages:u,toggleSet:t,loading:v,onUpdate:A}}});function T(e,a,F,b,u,v){const m=D("FSAutocompleteField");return l(),r(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(l(),r(S,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,null,{default:o(()=>[n(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":o(({item:t,font:s})=>[d(S,{align:"center-left",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,{font:s},{default:o(()=>[n(i(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=I(_,[["render",T]]);_.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const at={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteLanguage:w,FSCol:O},props:Object.keys(a),setup(){return{...e}},template:`
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
