import{d as V,c as n,y as w,z as m,A as s,B as d,m as _,E as C,G as D,D as $}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as k}from"./FSAutocompleteField-BwlPjJ12.js";import{_ as v}from"./FSIcon-BhYLJFwS.js";import{u as q}from"./useGroups-0Pyt8cCI.js";import{u as B}from"./useAutocomplete-Cyb_fxEn.js";import{u as T}from"./useTranslations-DflIUxSJ.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DVRwmgT8.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-CsvAshDj.js";import"./FSClickable-CT4CAD0O.js";import"./FSCard-B0a7crHg.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-Cw0TLTWz.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./FSCheckbox-BaTn-nVp.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-PkHtV3O5.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-Ch4v6qVK.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";const S=V({name:"FSAutocompleteGroup",components:{FSAutocompleteField:k,FSIcon:v},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:i,entities:r}=q(),{$tr:u}=T(),p=n(()=>y.value&&i.value),o=n(()=>e.multiple&&e.modelValue?u("ui.autocomplete-group.placeholder","{0} group(s) selected",e.modelValue.length):null),F=A=>a({...e.groupFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:G}=B(r,[()=>e.groupFilters],t,F);return{placeholder:o,toggleSet:h,loading:p,groups:r,onUpdate:G}}});function O(e,t,a,i,r,u){const p=w("FSAutocompleteField");return m(),s(p,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(m(),s(v,{key:0},{default:d(()=>[C(D(o.icon),1)]),_:2},1024)):$("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const b=x(S,[["render",O]]);S.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteGroup:b,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
