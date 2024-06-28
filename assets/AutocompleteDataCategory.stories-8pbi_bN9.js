var I=Object.defineProperty;var R=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>R(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as T,y as U,z as S,A as F,B as a,m as O,K as i,E as m,G as s,D as B,S as E}from"./vue.esm-bundler-DeSao-KJ.js";import{F as N}from"./FSAutocompleteField-Bkpq8AAI.js";import{F as _}from"./FSButton-BzCWfwJn.js";import{_ as g}from"./FSIcon-_c5Dh2GS.js";import{_ as c}from"./FSSpan-t6bMdSRn.js";import{_ as f}from"./FSRow-3OGCtpd3.js";import{C as G}from"./base-Db9bJp6t.js";import{S as M}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-rrf4GM2L.js";import{u as x}from"./useAutocomplete-CRHnexwL.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-BOlzFTtE.js";import"./FSSearchField-8DUCaYVO.js";import"./FSTextField-B_AIER4K.js";import"./VField-DG7LEdxI.js";import"./useColors-DixhtSsC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-DVgnnpA2.js";import"./FSCard-Bb1p0OOX.js";import"./css-BnhLLynS.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-Bx-iX6oV.js";import"./FSRadio-Begl_dN7.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-CvYP5v7F.js";import"./FSSlideGroup-D2ZpIsk5.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BaJmqG7J.js";import"./FSCheckbox-BR5oqXbk.js";import"./FSFadeOut--puemKM4.js";import"./FSLoader-CiRK32s-.js";import"./elevation-BBJMtRPf.js";import"./VSelect-CkY7N2yJ.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSClickable-DAqEbL1J.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class h{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class K extends h{constructor(t){super(t)}}const A=()=>`${G()}/data-categories`,P=e=>`${A()}/${encodeURIComponent(e)}`,Y=new M("dataCategory",K).create(e=>e.build(e.addGet(P),e.addGetMany(A,h),e.addNotify())),H=j.getMany(Y),w=q({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:N,FSButton:_,FSIcon:g,FSSpan:c,FSRow:f},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:C,entities:d}=H(),y=T(()=>n.value&&C.value),u=$=>l({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:o,init:n,onUpdate:k}=x(d,[()=>e.dataCategoriesFilters],t,u);return{dataCategories:d,toggleSet:o,loading:y,onUpdate:k}}});function J(e,t,l,C,d,y){const u=U("FSAutocompleteField");return S(),F(u,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(S(),F(f,{key:0,align:"center-center",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,null,{default:a(()=>[m(s(o.raw.label),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":a(({item:o,font:n})=>[i(f,{align:"center-left",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,{font:n},{default:a(()=>[m(s(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(o=>[i(_,{prependIcon:o.item.correlated?"mdi-link":"mdi-link-off",variant:o.getVariant(o.item),color:o.getColor(o.item),class:E(o.getClass(o.item)),label:o.item.label,onClick:n=>o.toggle(o.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const V=L(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:V,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,v,D;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const bt=["Variations"];export{p as Variations,bt as __namedExportsOrder,Ft as default};
