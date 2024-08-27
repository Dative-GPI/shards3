var w=Object.defineProperty;var I=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>I(e,typeof t!="symbol"?t+"":t,a);import{d as E,c as y,y as C,z as i,A as n,B as u,m as _,L as q,P as T}from"./vue.esm-bundler--l9E1zCM.js";import{F as U}from"./FSAutocompleteField-CIWSDUUC.js";import{F as v}from"./FSButton-DC-WKUnK.js";import{F as O}from"./FSChip-Jt6fKE9B.js";import{C as R}from"./base-BcjN1n8z.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as L}from"./composableFactory-BJn24iiy.js";import{u as N}from"./useAutocomplete-BK0ibAFa.js";import{C as G}from"./useColors-Na5M-jYy.js";import{u as M}from"./useTranslations-ByKtt_-5.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-BzreH9pe.js";import"./FSTextField-DT4mycsE.js";import"./FSBaseField-DyRfpoCH.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-2Sog7wcL.js";import"./FSCard-BmtixItE.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-PC9JFQCq.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./FSCheckbox-CuaZdV3q.js";import"./FSIcon-CA5AHnUB.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-DZ611XP-.js";import"./VImg-BDKzFUYZ.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-gVzwmWVQ.js";import"./VList-DEWTNoUD.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-BDwb1eeM.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./FSClickable-CWlCNUE_.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class F{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends F{constructor(t){super(t)}}const h=()=>`${R()}/data-categories`,W=e=>`${h()}/${encodeURIComponent(e)}`,Y=new B("dataCategory",P).create(e=>e.build(e.addGet(W),e.addGetMany(h,F),e.addNotify())),H=L.getMany(Y),D=E({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:U,FSButton:v,FSChip:O},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:p,entities:s}=H(),{$tr:c}=M(),l=y(()=>k.value&&p.value),d=y(()=>e.multiple&&e.modelValue?c("ui.autocomplete-data-category.placeholder","{0} data category(ies) selected",e.modelValue.length):null),o=$=>a({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:g,init:k,onUpdate:V}=N(s,[()=>e.dataCategoriesFilters],t,o);return{dataCategories:s,placeholder:d,ColorEnum:G,toggleSet:g,loading:l,onUpdate:V}}});function J(e,t,a,p,s,c){const l=C("FSChip"),d=C("FSAutocompleteField");return i(),n(d,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":u(({item:o})=>[o.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),"toggle-set-item":u(o=>[q(v,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:T(o.getClass(o.item)),label:o.item.label,onClick:g=>o.toggle(o.item)},{append:u(()=>[o.item.correlated?(i(),n(l,{key:0,prependIcon:"mdi-link",label:e.$tr("ui.autocomplete-data-category.linked","Linked"),color:e.ColorEnum.Success},null,8,["label","color"])):(i(),n(l,{key:1,prependIcon:"mdi-link-off",label:e.$tr("ui.autocomplete-data-category.not-linked","Not linked"),color:e.ColorEnum.Warning},null,8,["label","color"]))]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const A=j(D,[["render",J]]);D.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:A,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const yt=["Variations"];export{m as Variations,yt as __namedExportsOrder,gt as default};
