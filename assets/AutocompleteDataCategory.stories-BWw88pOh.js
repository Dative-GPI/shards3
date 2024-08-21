import{d as V,c as k,y as $,z as C,A as S,B as o,m as q,L as a,E as i,G as n,D as B,S as I}from"./vue.esm-bundler-gWFTcvUr.js";import{F as N}from"./FSAutocompleteField-mXLZc6AN.js";import{F as D}from"./FSButton-C0cjY78b.js";import{_ as u}from"./FSIcon-C7-l9IT-.js";import{_ as d}from"./FSSpan-BlywDO8Z.js";import{_ as g}from"./FSRow-Bpa2jjpJ.js";import{u as O}from"./useDataCategories-DW0hWq56.js";import{u as T}from"./useAutocomplete-C7hDSQ2w.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./base-DV1z3red.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";const _=V({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:N,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:l}){const{getMany:c,fetching:f,entities:p}=O(),y=k(()=>r.value&&f.value),s=w=>c({...t.dataCategoriesFilters,search:w??void 0}),{toggleSet:e,init:r,onUpdate:A}=T(p,[()=>t.dataCategoriesFilters],l,s);return{dataCategories:p,toggleSet:e,loading:y,onUpdate:A}}});function x(t,l,c,f,p,y){const s=$("FSAutocompleteField");return C(),S(s,q({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataCategories,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":o(({item:e})=>[t.$props.modelValue?(C(),S(g,{key:0,align:"center-center",wrap:!1},{default:o(()=>[a(u,null,{default:o(()=>[i(n(e.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),a(d,null,{default:o(()=>[i(n(e.raw.label),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":o(({item:e,font:r})=>[a(g,{align:"center-left",wrap:!1},{default:o(()=>[a(u,null,{default:o(()=>[i(n(e.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),a(d,{font:r},{default:o(()=>[i(n(e.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":o(e=>[a(D,{prependIcon:e.item.correlated?"mdi-link":"mdi-link-off",variant:e.getVariant(e.item),color:e.getColor(e.item),class:I(e.getClass(e.item)),label:e.item.label,onClick:r=>e.toggle(e.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const h=U(_,[["render",x]]);_.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const rt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:l})=>({components:{FSAutocompleteDataCategory:h,FSCol:j},props:Object.keys(l),setup(){return{...t}},template:`
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
    </FSCol>`})};var F,v,b;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const it=["Variations"];export{m as Variations,it as __namedExportsOrder,rt as default};
