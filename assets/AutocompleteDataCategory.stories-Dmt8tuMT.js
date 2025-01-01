import{d as A,c,A as y,B as a,D as p,j as V,I as l,P as $,E as w}from"./vue.esm-bundler-DSwHwgKw.js";import{F as q}from"./FSAutocompleteField-_rtaZsEI.js";import{F as v}from"./FSButton-DYhqzqie.js";import{F as E}from"./FSChip-DaD2DBV3.js";import{u as B}from"./useDataCategories-H1a5GglO.js";import{u as I}from"./useAutocomplete-BUZ9ESIm.js";import{C as N}from"./useColors-BO83iJ4k.js";import{u as j}from"./useTranslations-BhPzmPwL.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-DdGVae5t.js";import"./FSSearchField-rPpNr1Yi.js";import"./FSTextField-G5bYyIVj.js";import"./FSBaseField-MsaseDuX.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./FSRow-BtkEywPN.js";import"./css-XXwFKvUE.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./color-uBYwhjku.js";import"./theme-4AjdAhIV.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./VIcon-CdjjMQ6V.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./VList-BGOhPHad.js";import"./FSCard-BWyLcCxk.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./router-C4I-dA4c.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./FSSlideGroup-CDErVpPi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bh5NMaHJ.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-nldesQt9.js";import"./FSWrapGroup-CpuWIkHs.js";import"./FSCheckbox-B7I9yKzI.js";import"./FSIcon-DbV5muRp.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut--vL84uZt.js";import"./FSLoader-BCTnX9Pa.js";import"./FSRadio-BRXP-khf.js";import"./VSelect-CCGZIyvT.js";import"./VMenu-B9SE09pj.js";import"./filter-CxK7Dp-c.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DngCBs65.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BC5Ev-17.js";import"./index-3zl-tJp_.js";const S=A({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:q,FSButton:v,FSChip:E},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:u,fetching:s,entities:n}=B(),{$tr:d}=j(),o=c(()=>h.value&&s.value),m=c(()=>e.multiple&&e.modelValue?d("autocomplete.data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),t=k=>u({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:g,init:h,onUpdate:D}=I(n,[()=>e.dataCategoriesFilters],r,t);return{dataCategories:n,placeholder:m,ColorEnum:N,toggleSet:g,loading:o,onUpdate:D}}});function U(e,r,u,s,n,d){const o=y("FSChip"),m=y("FSAutocompleteField");return l(),a(m,V({label:e.$props.label??e.$tr("ui.common.data-category","Data category"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:t})=>[t.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(t=>[$(v,{variant:t.getVariant(t.item),color:t.getColor(t.item),class:w(t.getClass(t.item)),label:t.item.label,onClick:g=>t.toggle(t.item)},{append:p(()=>[t.item.correlated?(l(),a(o,{key:0,prependIcon:"mdi-link",label:e.$tr("autocomplete.data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(l(),a(o,{key:1,prependIcon:"mdi-link-off",label:e.$tr("autocomplete.data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const F=O(S,[["render",U]]);S.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteDataCategory:F,FSCol:T},props:Object.keys(r),setup(){return{...e}},template:`
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
