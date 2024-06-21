import{d as C,c as k,y as D,z as l,A as p,B as t,m as $,E as a,G as n,D as d,K as c}from"./vue.esm-bundler-DUki7rNA.js";import{F as q}from"./FSAutocompleteField-BOl3qm2w.js";import{_ as g}from"./FSIcon-CSwom3lG.js";import{_ as f}from"./FSSpan-DUTdSgpN.js";import{_ as S}from"./FSRow-CHgEOZQb.js";import{u as B}from"./useGroups-g_A8hfoq.js";import{u as N}from"./useAutocomplete-DyW0s6dv.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-BBaW1DrL.js";import"./FSSearchField-CdKhC7Ro.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./useSlots-BZu_lZyn.js";import"./VSpacer-CujVv6t6.js";import"./useRender-pAH_6Aah.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./anchor-32zVg6UX.js";import"./rounded-CuOTz_ni.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-GE9LRUiN.js";import"./FSClickable-FCUZtikK.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./useTranslations-LhdkJQ98.js";import"./FSDialogMenu-5l5lej0t.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./router-C5N3y4B3.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSToggleSet-Drtcc7mS.js";import"./FSSlideGroup-DhG_7ZhN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./FSWrapGroup-CVJTSX_U.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./VSelect-Doh8ERno.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VMenu-BMkRa5on.js";import"./filter-CYwgxO9I.js";import"./pathCrumb-D0_87whe.js";import"./base-DlhEylMe.js";import"./useAppOrganisationId-CXBwfEoF.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-cXrrETVr.js";const h=C({name:"FSAutocompleteGroup",components:{FSAutocompleteField:q,FSIcon:g,FSSpan:f,FSRow:S},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:F,fetching:v,entities:u}=B(),b=k(()=>s.value&&v.value),m=V=>F({...e.groupFilters,search:V??void 0}),{toggleSet:o,init:s,onUpdate:A}=N(u,[()=>e.groupFilters],r,m);return{toggleSet:o,loading:b,groups:u,onUpdate:A}}});function U(e,r,F,v,u,b){const m=D("FSAutocompleteField");return l(),p(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(l(),p(S,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,null,{default:t(()=>[a(n(o.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":t(({item:o,font:s})=>[c(S,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,{font:s},{default:t(()=>[a(n(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=O(h,[["render",U]]);h.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const no={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteGroup:w,FSCol:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var y,G,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      FSAutocompleteGroup,
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
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(G=i.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const io=["Variations"];export{i as Variations,io as __namedExportsOrder,no as default};
