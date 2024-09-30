import{d as A,c,y,z as a,A as l,B as p,m as V,L as w,P as $}from"./vue.esm-bundler-CxS4_7kK.js";import{F as q}from"./FSAutocompleteField-C5pC2bXV.js";import{F as v}from"./FSButton-DAhZ0Raz.js";import{F as B}from"./FSChip-cbDRAwPU.js";import{u as E}from"./useDataCategories-BgQ6Pq1R.js";import{u as I}from"./useAutocomplete-DbOpgzgj.js";import{C as N}from"./useColors-CaDWSZLL.js";import{u as O}from"./useTranslations-ZMyFjr19.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-Co9r7Klj.js";import"./FSSearchField-BGiFLl4O.js";import"./FSTextField-CiQ29Gk9.js";import"./FSBaseField-ytGCUAbx.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSRow-D546kqFt.js";import"./css-D18ueKtB.js";import"./VSpacer-DaRxrr8q.js";import"./color-DpQhyQC8.js";import"./theme-BEfrBPRQ.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSDialogMenu-Dnvhdcsp.js";import"./FSCard-BjvZ5YiQ.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-DhNsnnDZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-3a_bTLDz.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-CxkDSH6T.js";import"./FSWrapGroup-DO-xnPll.js";import"./FSCheckbox-BYVnhWyO.js";import"./FSIcon-C8jESFXA.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-BRxcyuMB.js";import"./FSLoader-DEfCEKzp.js";import"./elevation-8SXivnh1.js";import"./FSRadio-ClRwJSfH.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-B2uffud2.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSClickable-DxBn6HxC.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./index-_Z9wfsFC.js";const S=A({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:q,FSButton:v,FSChip:B},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:u,fetching:s,entities:n}=E(),{$tr:d}=O(),o=c(()=>h.value&&s.value),m=c(()=>e.multiple&&e.modelValue?d("ui.autocomplete-data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),t=k=>u({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:g,init:h,onUpdate:D}=I(n,[()=>e.dataCategoriesFilters],r,t);return{dataCategories:n,placeholder:m,ColorEnum:N,toggleSet:g,loading:o,onUpdate:D}}});function j(e,r,u,s,n,d){const o=y("FSChip"),m=y("FSAutocompleteField");return a(),l(m,V({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:t})=>[t.correlated?(a(),l(o,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(a(),l(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(t=>[w(v,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:$(t.getClass(t.item)),label:t.item.label,onClick:g=>t.toggle(t.item)},{append:p(()=>[t.item.correlated?(a(),l(o,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(a(),l(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const F=T(S,[["render",j]]);S.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDataCategory:F,FSCol:U},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var f,C,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      FSAutocompleteDataCategory,
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
      <FSAutocompleteDataCategory
        label="DataCategory"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataCategory
        label="DataCategory with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const pt=["Variations"];export{i as Variations,pt as __namedExportsOrder,mt as default};
