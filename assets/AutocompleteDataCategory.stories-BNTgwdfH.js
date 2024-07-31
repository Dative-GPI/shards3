var I=Object.defineProperty;var R=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>R(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as T,y as U,z as S,A as F,B as a,m as O,I as i,E as m,G as s,D as B,S as E}from"./vue.esm-bundler-DC82FEWN.js";import{F as N}from"./FSAutocompleteField-BKT9iYho.js";import{F as _}from"./FSButton-1EF78Bzf.js";import{_ as g}from"./FSIcon-uD_MRFdb.js";import{_ as c}from"./FSSpan-CEjD71wr.js";import{_ as f}from"./FSRow-DoCXWKDP.js";import{C as G}from"./base-CMiH1YbJ.js";import{S as M}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as x}from"./useAutocomplete-1Tpu4ol_.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-CrEIMyOU.js";import"./FSTextField-mMS0Kez6.js";import"./FSBaseField-DmIgZozj.js";import"./useColors-DEq6MuQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./useSlots-Dr5tdD4b.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./VIcon-Dc-dFojD.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./VProgressCircular-C-U4HXtE.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-cbMj6UFV.js";import"./FSCard-BzleLmPd.js";import"./css-DYOPUjjE.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-VRhkvpZ9.js";import"./FSRadio-DjVuf49p.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-Br9w1v1b.js";import"./FSSlideGroup-CgIUEdhn.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-OTVy7t6y.js";import"./FSCheckbox-DMyIFYVY.js";import"./FSFadeOut-_RgLKyTO.js";import"./FSLoader-CbNdmyFm.js";import"./elevation-BTkUCD39.js";import"./VSelect-C4zoc8wo.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./FSClickable-CNOWN-hR.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class h{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends h{constructor(t){super(t)}}const A=()=>`${G()}/data-categories`,Y=e=>`${A()}/${encodeURIComponent(e)}`,H=new M("dataCategory",P).create(e=>e.build(e.addGet(Y),e.addGetMany(A,h),e.addNotify())),J=j.getMany(H),w=q({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:N,FSButton:_,FSIcon:g,FSSpan:c,FSRow:f},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:C,entities:d}=J(),y=T(()=>n.value&&C.value),u=$=>l({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:o,init:n,onUpdate:k}=x(d,[()=>e.dataCategoriesFilters],t,u);return{dataCategories:d,toggleSet:o,loading:y,onUpdate:k}}});function K(e,t,l,C,d,y){const u=U("FSAutocompleteField");return S(),F(u,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(S(),F(f,{key:0,align:"center-center",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,null,{default:a(()=>[m(s(o.raw.label),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":a(({item:o,font:n})=>[i(f,{align:"center-left",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,{font:n},{default:a(()=>[m(s(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(o=>[i(_,{prependIcon:o.item.correlated?"mdi-link":"mdi-link-off",variant:o.getVariant(o.item),color:o.getColor(o.item),class:E(o.getClass(o.item)),label:o.item.label,onClick:n=>o.toggle(o.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const V=L(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:V,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const yt=["Variations"];export{p as Variations,yt as __namedExportsOrder,Ct as default};
