import{d as w,c as d,y as c,z as f,A as g,B as r,m as _,D as k,L as D,M as $,P as q}from"./vue.esm-bundler-Vj2X7okO.js";import{F as B}from"./FSAutocompleteField-CCs3-7Gg.js";import{F}from"./FSButton-D9OonqCF.js";import{F as N}from"./FSChip-BzumMGJt.js";import{u as O}from"./useDataDefinitions-DWl3eOCT.js";import{u as T}from"./useAutocomplete-S-mYVlG5.js";import{u as U}from"./useTranslations-DyPMaPr_.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-Bk577joi.js";import"./FSSearchField-Br299av8.js";import"./FSTextField-BQbZuAPn.js";import"./FSBaseField-DEWTBdWD.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./VIcon-DptP6m9n.js";import"./tag-DxanhlL3.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./FSCard-D5wiJKub.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-COYtI-Nu.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSWrapGroup-CSqxXTzY.js";import"./FSCheckbox-B0fh_Rt7.js";import"./FSIcon-DYxpTLuT.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-CB131b1X.js";import"./VImg-Da3f9R37.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-iR212XTF.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";import"./FSClickable-CfNRAgb8.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";const h=w({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:F,FSChip:N},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:m,fetching:p,entities:a}=O(),{$tr:s}=U(),i=d(()=>A.value&&p.value),n=d(()=>e.multiple&&e.modelValue?s("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),t=V=>m({...e.dataDefinitionFilters,search:V??void 0}),{toggleSet:u,init:A,onUpdate:C}=T(a,[()=>e.dataDefinitionFilters],o,t);return{dataDefinitions:a,placeholder:n,toggleSet:u,loading:i,onUpdate:C}}});function M(e,o,m,p,a,s){const i=c("FSChip"),n=c("FSAutocompleteField");return f(),g(n,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":r(({item:t})=>[t.unit?(f(),g(i,{key:0,label:t.unit},null,8,["label"])):k("",!0)]),"toggle-set-item":r(t=>[D(F,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},$({_:2},[t.item.unit?{name:"append",fn:r(()=>[D(i,{label:t.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const y=j(h,[["render",M]]);h.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const at={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataDefinition:y,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var v,b,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      FSAutocompleteDataDefinition,
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
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const nt=["Variations"];export{l as Variations,nt as __namedExportsOrder,at as default};
