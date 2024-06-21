import{d as C,c as k,y as D,z as l,A as p,B as t,m as $,E as a,G as n,D as d,K as c}from"./vue.esm-bundler-CLWyqtrq.js";import{F as q}from"./FSAutocompleteField-CBMRbw7S.js";import{_ as g}from"./FSIcon-izOGFbD4.js";import{_ as f}from"./FSSpan-C4Iz3qX9.js";import{_ as S}from"./FSRow-B7tdsi71.js";import{u as B}from"./useGroups-BjSptgdj.js";import{u as N}from"./useAutocomplete-BeehL9JX.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-CyiK-fBt.js";import"./FSTextField-Cpjd0lxC.js";import"./VField-B0dByqhd.js";import"./useColors-DMaqBg9s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-DbngaExr.js";import"./FSClickable-Dnaq4X0T.js";import"./FSCard-Dfczzv61.js";import"./css-Ca-HPGcF.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-DffTLyCO.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-6Hwvke6j.js";import"./FSRadio-D23gGN9m.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-yPQt1erB.js";import"./FSSlideGroup-CSlKWrVH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BQRnjhhS.js";import"./FSCheckbox-C54-5tE9.js";import"./FSFadeOut-BbZkfEUD.js";import"./FSLoader-CqH2SEvS.js";import"./elevation-CB-eCL4u.js";import"./VSelect-C0gJvLlB.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./pathCrumb-D0_87whe.js";import"./base-DgvHU1oF.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BGJVwV03.js";const h=C({name:"FSAutocompleteGroup",components:{FSAutocompleteField:q,FSIcon:g,FSSpan:f,FSRow:S},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:F,fetching:v,entities:u}=B(),b=k(()=>s.value&&v.value),m=V=>F({...e.groupFilters,search:V??void 0}),{toggleSet:o,init:s,onUpdate:A}=N(u,[()=>e.groupFilters],r,m);return{toggleSet:o,loading:b,groups:u,onUpdate:A}}});function U(e,r,F,v,u,b){const m=D("FSAutocompleteField");return l(),p(m,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":t(({item:o})=>[e.$props.modelValue?(l(),p(S,{key:0,align:"center-center",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,null,{default:t(()=>[a(n(o.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":t(({item:o,font:s})=>[c(S,{align:"center-left",wrap:!1},{default:t(()=>[o.raw.icon?(l(),p(g,{key:0},{default:t(()=>[a(n(o.raw.icon),1)]),_:2},1024)):d("",!0),c(f,{font:s},{default:t(()=>[a(n(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=O(h,[["render",U]]);h.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const no={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteGroup:w,FSCol:T},props:Object.keys(r),setup(){return{...e}},template:`
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
