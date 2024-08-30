import{d as V,c as n,y as w,z as m,A as s,B as d,m as _,E as C,G as D,D as $}from"./vue.esm-bundler-BSwA4uJo.js";import{F as k}from"./FSAutocompleteField-CzLKCgFf.js";import{_ as v}from"./FSIcon-BnX9YboA.js";import{u as q}from"./useGroups-X6cAyd3C.js";import{u as B}from"./useAutocomplete-CsDNIjqd.js";import{u as T}from"./useTranslations-9ULn9k53.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./FSCol-B2fYQH2g.js";import"./FSSearchField-CPQWVqWj.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./useSlots-BFQFTsAj.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VSpacer-Bggt-xuP.js";import"./color-D9V7QeIP.js";import"./FSButton-BsHdwUXb.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./VProgressCircular-Dac4kH3U.js";import"./tag-VYeYJ1FC.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./index-C3j_FW12.js";import"./transition-_APBsTwD.js";import"./VLabel-BifS6p-d.js";import"./VInput-QVRW4ijF.js";import"./locale-CpxwvVE1.js";import"./VIcon-5UD9vI9m.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./form-DP5gBA00.js";import"./loader-DjCr0vPF.js";import"./anchor-CkzTvcVP.js";import"./rounded-CO2AQG9_.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BhqZCjBr.js";import"./FSDialogMenu-g6t3pdyN.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./router-Cl1v_ijq.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./group-CrHjrh7w.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./filter-BvtvTs1b.js";import"./pathCrumb-Db-cq5HI.js";import"./base-COZVLn_8.js";import"./useAppOrganisationId-DRTS5QPJ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D4M238ur.js";const S=V({name:"FSAutocompleteGroup",components:{FSAutocompleteField:k,FSIcon:v},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:i,entities:r}=q(),{$tr:u}=T(),p=n(()=>y.value&&i.value),o=n(()=>e.multiple&&e.modelValue?u("ui.autocomplete-group.placeholder","{0} group(s) selected",e.modelValue.length):null),F=A=>a({...e.groupFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:G}=B(r,[()=>e.groupFilters],t,F);return{placeholder:o,toggleSet:h,loading:p,groups:r,onUpdate:G}}});function O(e,t,a,i,r,u){const p=w("FSAutocompleteField");return m(),s(p,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(m(),s(v,{key:0},{default:d(()=>[C(D(o.icon),1)]),_:2},1024)):$("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const b=x(S,[["render",O]]);S.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteGroup:b,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
    </FSCol>`})};var c,g,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
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
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const rt=["Variations"];export{l as Variations,rt as __namedExportsOrder,lt as default};
