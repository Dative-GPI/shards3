import{d as A,c,y,z as a,A as l,C as p,m as V,N as w,D as $}from"./vue.esm-bundler-DTB_q9xr.js";import{F as q}from"./FSAutocompleteField-CaoqKedU.js";import{F as v}from"./FSButton-DblcRn12.js";import{F as E}from"./FSChip-C1Wzm8E1.js";import{u as N}from"./useDataCategories-BuRFomCq.js";import{u as B}from"./useAutocomplete-C_CEUaC2.js";import{C as I}from"./useColors-Du1QHlOW.js";import{u as O}from"./useTranslations-BehwFxDb.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./theme-BKYtCmay.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./VIcon-BCDp5TRU.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./FSIcon-CJgnsR4e.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./FSClickable-CIKlZ0Uy.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./index-DfSX31J9.js";const S=A({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:q,FSButton:v,FSChip:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:u,fetching:s,entities:n}=N(),{$tr:d}=O(),o=c(()=>h.value&&s.value),m=c(()=>e.multiple&&e.modelValue?d("ui.autocomplete-data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),t=k=>u({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:g,init:h,onUpdate:D}=B(n,[()=>e.dataCategoriesFilters],r,t);return{dataCategories:n,placeholder:m,ColorEnum:I,toggleSet:g,loading:o,onUpdate:D}}});function j(e,r,u,s,n,d){const o=y("FSChip"),m=y("FSAutocompleteField");return a(),l(m,V({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:t})=>[t.correlated?(a(),l(o,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(a(),l(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(t=>[w(v,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:$(t.getClass(t.item)),label:t.item.label,onClick:g=>t.toggle(t.item)},{append:p(()=>[t.item.correlated?(a(),l(o,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(a(),l(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const F=T(S,[["render",j]]);S.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDataCategory:F,FSCol:U},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var C,f,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const pt=["Variations"];export{i as Variations,pt as __namedExportsOrder,mt as default};
