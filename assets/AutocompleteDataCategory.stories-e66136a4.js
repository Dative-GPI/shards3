import{f as $,g as I,D as R,E as y,F as S,G as a,x as q,P as l,K as i,L as n,I as T,X as U}from"./vue.esm-bundler-a0893183.js";import{F as O}from"./FSAutocompleteField-71836b5a.js";import{F as D}from"./FSButton-29e96b8a.js";import{_ as u}from"./FSIcon-9d61ed62.js";import{_ as d}from"./FSSpan-4daadeb4.js";import{_ as g}from"./FSRow-821d23a1.js";import{C as E}from"./base-168b8f74.js";import{S as N}from"./serviceFactory-2dfad3af.js";import{C as B}from"./composableFactory-2d4a69cc.js";import{u as G}from"./useAutocomplete-cc546bbe.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./FSCol-e45ac157.js";import"./FSSearchField-4585c5ac.js";import"./FSTextField-3d775cb5.js";import"./VField-c7486719.js";import"./useColors-6c375bb5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-41eca2c8.js";import"./useSlots-d5b57407.js";import"./VSpacer-b1094f09.js";import"./useRender-13ac3742.js";import"./index-ec7e733e.js";import"./transition-36d39bce.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./tag-c957791e.js";import"./density-fc3376dc.js";import"./dimensions-b1078284.js";import"./loader-4af36e99.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./anchor-155e2782.js";import"./rounded-4c492e72.js";import"./VDefaultsProvider-c4e19f1a.js";import"./forwardRefs-e658ad70.js";import"./useRules-8ba0ecf4.js";import"./index-01bbf789.js";import"./useTranslations-95b4a686.js";import"./FSDialogMenu-2fb2114e.js";import"./FSCard-c200753c.js";import"./css-03aed76d.js";import"./VDialog-4a348b25.js";import"./VOverlay-15bc2db8.js";import"./display-a0a9c5ca.js";import"./lazy-87b8baba.js";import"./router-abc66a83.js";import"./scopeId-771a7ff6.js";import"./FSRadioGroup-ae5b1327.js";import"./FSRadio-46cacfaf.js";import"./VSelectionControl-df8a6f90.js";import"./index-8d9a280b.js";import"./FSToggleSet-be55bdf4.js";import"./FSSlideGroup-235f4c9d.js";import"./uuid-08309875.js";import"./VSlideGroup-6bf175bd.js";import"./goto-4fcc9088.js";import"./group-0833c323.js";import"./FSWrapGroup-24d8166e.js";import"./FSCheckbox-358f34d9.js";import"./FSFadeOut-a78e38e1.js";import"./FSLoader-5eac453d.js";import"./elevation-7d7e39c3.js";import"./VSelect-9102db02.js";import"./VList-f2210020.js";import"./ssrBoot-0ed128b5.js";import"./border-ca0badc6.js";import"./VImg-941bd94b.js";import"./VDivider-f3a14eaa.js";import"./VMenu-02096e7e.js";import"./filter-9e36c4cc.js";import"./FSClickable-550391c2.js";import"./useAppOrganisationId-a0837ade.js";import"./lodash-569b8a6d.js";class _{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class M extends _{constructor(o){super(o)}}const h=()=>`${E()}/data-categories`,j=e=>`${h()}/${encodeURIComponent(e)}`,P=new N("dataCategory",M).create(e=>e.build(e.addGet(j),e.addGetMany(h,_),e.addNotify())),z=B.getMany(P),A=$({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:f,entities:s}=z(),C=I(()=>r.value&&f.value),p=k=>c({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:t,init:r,onUpdate:V}=G(s,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:s,toggleSet:t,loading:C,onUpdate:V}}});function K(e,o,c,f,s,C){const p=R("FSAutocompleteField");return y(),S(p,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(y(),S(g,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,null,{default:a(()=>[i(n(t.raw.label),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),"item-label":a(({item:t,font:r})=>[l(g,{align:"center-left",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,{font:r},{default:a(()=>[i(n(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(D,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const w=x(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const yt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:w,FSCol:L},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const St=["Variations"];export{m as Variations,St as __namedExportsOrder,yt as default};
