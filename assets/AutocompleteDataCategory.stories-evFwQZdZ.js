var w=Object.defineProperty;var I=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>I(e,typeof t!="symbol"?t+"":t,a);import{d as E,c as y,y as C,z as i,A as n,B as p,m as _,L as q,P as T}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as U}from"./FSAutocompleteField-Bl3plbXe.js";import{F as v}from"./FSButton-DS5pJwRE.js";import{F as O}from"./FSChip-eZ2gUZl5.js";import{C as R}from"./base-BbuH2dYw.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as L}from"./composableFactory-DYaDCbjS.js";import{u as N}from"./useAutocomplete-DzUOI0K-.js";import{C as G}from"./useColors-nFEwMWzN.js";import{u as M}from"./useTranslations-DflIUxSJ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-BmcQ_82r.js";import"./FSTextField-CMLUeGZH.js";import"./FSBaseField-D2jPE59R.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./theme-C1riLSun.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./tag-CMGfbRyB.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-BUF-R31v.js";import"./FSCard-BdS37dLD.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DDUHPpf0.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-BtGm8wWU.js";import"./FSWrapGroup-B-W0vR2W.js";import"./FSCheckbox-jcMp7y2y.js";import"./FSIcon-CEcP550-.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-DssjZXn_.js";import"./VImg-DlvaTCkZ.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-Db7coB6b.js";import"./VList-BjkR6psD.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-B8V0bATO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSClickable-Dn475adk.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class F{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends F{constructor(t){super(t)}}const h=()=>`${R()}/data-categories`,W=e=>`${h()}/${encodeURIComponent(e)}`,Y=new B("dataCategory",P).create(e=>e.build(e.addGet(W),e.addGetMany(h,F),e.addNotify())),H=L.getMany(Y),D=E({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:U,FSButton:v,FSChip:O},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:u,entities:s}=H(),{$tr:c}=M(),l=y(()=>k.value&&u.value),d=y(()=>e.multiple&&e.modelValue?c("ui.autocomplete-data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),o=$=>a({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:g,init:k,onUpdate:V}=N(s,[()=>e.dataCategoriesFilters],t,o);return{dataCategories:s,placeholder:d,ColorEnum:G,toggleSet:g,loading:l,onUpdate:V}}});function J(e,t,a,u,s,c){const l=C("FSChip"),d=C("FSAutocompleteField");return i(),n(d,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":p(({item:o})=>[o.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":p(o=>[q(v,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:T(o.getClass(o.item)),label:o.item.label,onClick:g=>o.toggle(o.item)},{append:p(()=>[o.item.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=j(D,[["render",J]]);D.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const yt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:A,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
