import{d as w,c as d,y as c,z as f,A as g,C as r,m as k,F as _,N as D,B as $,D as q}from"./vue.esm-bundler-DTB_q9xr.js";import{F as B}from"./FSAutocompleteField-DsdS2mH3.js";import{F as S}from"./FSButton-BQje8JZk.js";import{F as N}from"./FSChip-BRPLsjag.js";import{u as O}from"./useDataDefinitions-D8dGZO5g.js";import{u as T}from"./useAutocomplete-BOJtoY7j.js";import{u as U}from"./useTranslations-BehwFxDb.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as x}from"./FSCol-B-Vfvg0L.js";import"./FSSearchField-DJ1HQDjY.js";import"./FSTextField-DPsTjA6v.js";import"./FSBaseField-DL008ZG5.js";import"./FSSpan-CHspDDbd.js";import"./useBreakpoints-BGn0bPYv.js";import"./useSlots-BnylMYIF.js";import"./FSRow-BkWeXIi_.js";import"./css-i8JhJBs1.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./VIcon-BCDp5TRU.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-DQd6lGHm.js";import"./FSCard-DrQswI-1.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-CuNxa7LX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Df26-_J5.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-Bu237MSN.js";import"./FSWrapGroup-B9QcRiHf.js";import"./FSCheckbox-BLdBQVgd.js";import"./FSIcon-CtLYuQJX.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CRwwg4VQ.js";import"./FSLoader-DQSvmWsx.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-CN98aZYT.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-DXUxnIIu.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./FSClickable-Dnlrfn2W.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";const h=w({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:B,FSButton:S,FSChip:N},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:m,fetching:p,entities:a}=O(),{$tr:s}=U(),i=d(()=>A.value&&p.value),n=d(()=>e.multiple&&e.modelValue?s("ui.autocomplete-data-definition.placeholder","{0} data definition(s) selected",e.modelValue.length):null),t=V=>m({...e.dataDefinitionFilters,search:V??void 0}),{toggleSet:u,init:A,onUpdate:C}=T(a,[()=>e.dataDefinitionFilters],o,t);return{dataDefinitions:a,placeholder:n,toggleSet:u,loading:i,onUpdate:C}}});function z(e,o,m,p,a,s){const i=c("FSChip"),n=c("FSAutocompleteField");return f(),g(n,k({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":r(({item:t})=>[t.unit?(f(),g(i,{key:0,label:t.unit},null,8,["label"])):_("",!0)]),"toggle-set-item":r(t=>[D(S,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},$({_:2},[t.item.unit?{name:"append",fn:r(()=>[D(i,{label:t.item.unit},null,8,["label"])]),key:"0"}:void 0]),1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const y=j(h,[["render",z]]);h.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const pt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataDefinition:y,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,b,F;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(b=l.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const st=["Variations"];export{l as Variations,st as __namedExportsOrder,pt as default};
