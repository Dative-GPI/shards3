import{d as C,c as k,y as D,z as l,A as p,B as t,m as $,E as a,G as n,D as d,K as c}from"./vue.esm-bundler-DeSao-KJ.js";import{F as q}from"./FSAutocompleteField-RiC1jgSw.js";import{_ as g}from"./FSIcon-DuYoAbGq.js";import{_ as f}from"./FSSpan-t6bMdSRn.js";import{_ as S}from"./FSRow-JJutUvlP.js";import{u as B}from"./useGroups-BZOuAk6a.js";import{u as N}from"./useAutocomplete-BjXljuos.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-DwhyMBBv.js";import"./FSTextField-xG_kerPN.js";import"./VField-DEMHFDPm.js";import"./useColors-DL92kHTE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CUXN7UlR.js";import"./FSClickable-7AMX5jTq.js";import"./FSCard-B1Oet1YO.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-D74RUSZ7.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-D4D4UEOO.js";import"./FSRadio-x2anfynz.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-B3jJ7hmw.js";import"./FSSlideGroup-DGX0Yc4-.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BNjss27o.js";import"./FSCheckbox-BfU8RDs1.js";import"./FSFadeOut-IHk7VvTz.js";import"./FSLoader-D-GHyjSx.js";import"./elevation-BBJMtRPf.js";import"./VSelect-DRB1q99h.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./pathCrumb-D0_87whe.js";import"./base-Db9bJp6t.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-rrf4GM2L.js";const h=C({name:"FSAutocompleteGroup",components:{FSAutocompleteField:q,FSIcon:g,FSSpan:f,FSRow:S},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:F,fetching:v,entities:u}=B(),b=k(()=>s.value&&v.value),m=V=>F({...e.groupFilters,search:V??void 0}),{toggleSet:o,init:s,onUpdate:A}=N(u,[()=>e.groupFilters],r,m);return{toggleSet:o,loading:b,groups:u,onUpdate:A}}});function U(e,r,F,v,u,b){const m=D("FSAutocompleteField");return l(),p(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(l(),p(S,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,null,{default:t(()=>[a(n(o.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":t(({item:o,font:s})=>[c(S,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,{font:s},{default:t(()=>[a(n(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=O(h,[["render",U]]);h.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const no={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteGroup:w,FSCol:T},props:Object.keys(r),setup(){return{...e}},template:`
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
