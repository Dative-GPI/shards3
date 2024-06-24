import{d as C,c as k,y as D,z as l,A as r,B as o,m as $,E as n,G as i,D as g,K as d}from"./vue.esm-bundler-CLWyqtrq.js";import{F as q}from"./FSAutocompleteField-ca2IAtlh.js";import{F as x}from"./FSCheckbox-Bp2dYBN8.js";import{_ as c}from"./FSIcon-nvjMvWEC.js";import{_ as f}from"./FSSpan-C4Iz3qX9.js";import{_ as S}from"./FSRow-B7tdsi71.js";import{u as B}from"./useLanguages-CZGNnI5u.js";import{u as N}from"./useAutocomplete-BUBL_XZR.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-B2afuG5O.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-xawrBwn0.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./css-Ca-HPGcF.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./FSFadeOut-Cm2RoYLR.js";import"./FSLoader-DpxcFPRZ.js";import"./elevation-CB-eCL4u.js";import"./VSelect-DovITVmj.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BGJVwV03.js";const _=C({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:q,FSCheckbox:x,FSIcon:c,FSSpan:f,FSRow:S},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const{getMany:F,fetching:b,entities:m}=B(),v=k(()=>s.value&&b.value),u=V=>F({...e.languageFilters,search:V??void 0}),{toggleSet:t,init:s,onUpdate:A}=N(m,[()=>e.languageFilters],a,u);return{languages:m,toggleSet:t,loading:v,onUpdate:A}}});function U(e,a,F,b,m,v){const u=D("FSAutocompleteField");return l(),r(u,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":o(({item:t})=>[e.$props.modelValue?(l(),r(S,{key:0,align:"center-center",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,null,{default:o(()=>[n(i(t.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":o(({item:t,font:s})=>[d(S,{align:"center-left",wrap:!1},{default:o(()=>[t.raw.icon?(l(),r(c,{key:0},{default:o(()=>[n(i(t.raw.icon),1)]),_:2},1024)):g("",!0),d(f,{font:s},{default:o(()=>[n(i(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=O(_,[["render",U]]);_.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const nt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:a})=>({components:{FSAutocompleteLanguage:w,FSCol:T},props:Object.keys(a),setup(){return{...e}},template:`
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
