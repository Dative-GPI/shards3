var w=Object.defineProperty;var I=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>I(e,typeof t!="symbol"?t+"":t,a);import{d as E,c as y,y as C,z as i,A as n,B as p,m as _,L as q,P as T}from"./vue.esm-bundler-Vj2X7okO.js";import{F as U}from"./FSAutocompleteField-D4bTwKsh.js";import{F as v}from"./FSButton-Cu-2DGh7.js";import{F as O}from"./FSChip-C6Vg7g0q.js";import{C as R}from"./base-Cf5ASDDk.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as L}from"./composableFactory-B0937_6N.js";import{u as N}from"./useAutocomplete-DIcQFoAK.js";import{C as G}from"./useColors-DbYs0nlr.js";import{u as M}from"./useTranslations-DyPMaPr_.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-Bk577joi.js";import"./FSSearchField-CBCgljQJ.js";import"./FSTextField-CdPWSms5.js";import"./FSBaseField-CJsUhopP.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./theme-DqOMA9k1.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-CI3XxiK0.js";import"./FSCard-D9e2PZ5O.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-B7xKK6c-.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-ERyA7UBg.js";import"./FSWrapGroup-DznP-FT8.js";import"./FSCheckbox-C_BP1rxW.js";import"./FSIcon-CKzhvi-C.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-C6v1xdo-.js";import"./VImg-DxvBH4oU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-D7wcd6J3.js";import"./VList-D7oPpfjd.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-Bk6IV5T5.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-C6-rWYfA.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class F{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends F{constructor(t){super(t)}}const h=()=>`${R()}/data-categories`,W=e=>`${h()}/${encodeURIComponent(e)}`,Y=new B("dataCategory",P).create(e=>e.build(e.addGet(W),e.addGetMany(h,F),e.addNotify())),H=L.getMany(Y),D=E({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:U,FSButton:v,FSChip:O},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:u,entities:s}=H(),{$tr:c}=M(),l=y(()=>k.value&&u.value),d=y(()=>e.multiple&&e.modelValue?c("ui.autocomplete-data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),o=$=>a({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:g,init:k,onUpdate:V}=N(s,[()=>e.dataCategoriesFilters],t,o);return{dataCategories:s,placeholder:d,ColorEnum:G,toggleSet:g,loading:l,onUpdate:V}}});function J(e,t,a,u,s,c){const l=C("FSChip"),d=C("FSAutocompleteField");return i(),n(d,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:o})=>[o.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(o=>[q(v,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:T(o.getClass(o.item)),label:o.item.label,onClick:g=>o.toggle(o.item)},{append:p(()=>[o.item.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=j(D,[["render",J]]);D.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const yt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:A,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var f,b,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const Ct=["Variations"];export{m as Variations,Ct as __namedExportsOrder,yt as default};
