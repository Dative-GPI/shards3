import{d as C,c as k,y as D,z as l,A as r,B as o,m as $,E as n,G as i,D as g,K as d}from"./vue.esm-bundler-BLBBrD1D.js";import{F as q}from"./FSAutocompleteField-UqibJclk.js";import{F as x}from"./FSCheckbox-DJm00ahm.js";import{_ as c}from"./FSIcon-CgTCRlvx.js";import{_ as f}from"./FSSpan-DNHXfhpi.js";import{_ as S}from"./FSRow-BZVvIgLd.js";import{u as B}from"./useLanguages-CLJNVy8P.js";import{u as N}from"./useAutocomplete-CXUsAi9P.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-OnQTHx6W.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./useRender-CTGr_J4i.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Ctk-czeT.js";import"./FSClickable-BcsUSOO8.js";import"./FSCard-fA5aX9kp.js";import"./css-DU1X_fj1.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./useTranslations-CT7kkIpn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DeG9aq0N.js";const _=C({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:q,FSCheckbox:x,FSIcon:c,FSSpan:f,FSRow:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:F,fetching:b,entities:m}=B(),v=k(()=>s.value&&b.value),u=V=>F({...e.languageFilters,search:V??void 0}),{toggleSet:t,init:s,onUpdate:A}=N(m,[()=>e.languageFilters],a,u);return{languages:m,toggleSet:t,loading:v,onUpdate:A}}});function U(e,a,F,b,m,v){const u=D("FSAutocompleteField");return l(),r(u,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(l(),r(S,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,null,{default:o(()=>[n(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":o(({item:t,font:s})=>[d(S,{align:"center-left",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,{font:s},{default:o(()=>[n(i(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=O(_,[["render",U]]);_.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const nt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteLanguage:w,FSCol:T},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(L=(h=p.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const it=["Variations"];export{p as Variations,it as __namedExportsOrder,nt as default};
