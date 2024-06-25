import{d as $,c as I,y as R,z as y,A as S,B as a,m as q,K as l,E as i,G as n,D as T,S as U}from"./vue.esm-bundler-DeSao-KJ.js";import{F as O}from"./FSAutocompleteField-DT4ujMHY.js";import{F as D}from"./FSButton-BtJceuDF.js";import{_ as u}from"./FSIcon-CWQns0S0.js";import{_ as d}from"./FSSpan-t6bMdSRn.js";import{_ as g}from"./FSRow-JJutUvlP.js";import{C as B}from"./base-Db9bJp6t.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as N}from"./composableFactory-rrf4GM2L.js";import{u as G}from"./useAutocomplete-B3oX2Q7z.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-yn3fHufm.js";import"./FSTextField-CU6cCRma.js";import"./VField-Dwj56xae.js";import"./useColors-Btze6ZPu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-CgLexdRK.js";import"./FSCard-D6pS8x-_.js";import"./css-BnhLLynS.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-CQPEmvlt.js";import"./FSRadio-BDrxAKVF.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-R36jrHdy.js";import"./FSSlideGroup-C1zVEZNV.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-CO7LA3W5.js";import"./FSCheckbox-BwmyFmSj.js";import"./FSFadeOut-B4C8PvXF.js";import"./FSLoader-D9Qf30aF.js";import"./elevation-BBJMtRPf.js";import"./VSelect-BmOD2N_I.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./FSClickable-DwPeAUYS.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class _{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class x extends _{constructor(o){super(o)}}const h=()=>`${B()}/data-categories`,L=e=>`${h()}/${encodeURIComponent(e)}`,z=new E("dataCategory",x).create(e=>e.build(e.addGet(L),e.addGetMany(h,_),e.addNotify())),K=N.getMany(z),A=$({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:f,entities:s}=K(),C=I(()=>r.value&&f.value),p=k=>c({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:t,init:r,onUpdate:V}=G(s,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:s,toggleSet:t,loading:C,onUpdate:V}}});function P(e,o,c,f,s,C){const p=R("FSAutocompleteField");return y(),S(p,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(y(),S(g,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,null,{default:a(()=>[i(n(t.raw.label),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),"item-label":a(({item:t,font:r})=>[l(g,{align:"center-left",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,{font:r},{default:a(()=>[i(n(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(D,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const w=M(A,[["render",P]]);A.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:w,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Ct=["Variations"];export{m as Variations,Ct as __namedExportsOrder,ft as default};
