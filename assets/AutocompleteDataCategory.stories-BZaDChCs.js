var T=Object.defineProperty;var U=(e,o,l)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var r=(e,o,l)=>U(e,typeof o!="symbol"?o+"":o,l);import{d as N,c as D,y as h,z as f,A as C,M as O,B as a,m as B,L as n,E as s,G as d,D as A,S as G}from"./vue.esm-bundler-gWFTcvUr.js";import{F as L}from"./FSAutocompleteField-B2xNPHwl.js";import{F as _}from"./FSButton-C0cjY78b.js";import{_ as y}from"./FSIcon-C7-l9IT-.js";import{_ as S}from"./FSSpan-BlywDO8Z.js";import{F as M}from"./FSChip-3bZvXIoL.js";import{_ as F}from"./FSRow-Bpa2jjpJ.js";import{C as W}from"./base-DV1z3red.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as z}from"./composableFactory-CZGZ62iP.js";import{u as P}from"./useAutocomplete-D-Bouwy4.js";import{C as Y}from"./useColors-4hVwr1YC.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as J}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-L0LUgjsg.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class ${constructor(o){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class K extends ${constructor(o){super(o)}}const E=()=>`${W()}/data-categories`,Q=e=>`${E()}/${encodeURIComponent(e)}`,X=new j("dataCategory",K).create(e=>e.build(e.addGet(Q),e.addGetMany(E,$),e.addNotify())),Z=z.getMany(X),I=N({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:L,FSButton:_,FSIcon:y,FSSpan:S,FSChip:M,FSRow:F},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:v,entities:i}=Z(),b=D(()=>m.value&&v.value),p=D(()=>{if(!e.multiple)return i.value.find(g=>g.id===e.modelValue)}),c=g=>l({...e.dataCategoriesFilters,search:g??void 0}),{toggleSet:t,init:m,onUpdate:q}=P(i,[()=>e.dataCategoriesFilters],o,c);return{dataCategories:i,ColorEnum:Y,toggleSet:t,selected:p,loading:b,onUpdate:q}}});function x(e,o,l,v,i,b){const p=h("FSChip"),c=h("FSAutocompleteField");return f(),C(c,B({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),O({"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(f(),C(F,{key:0,align:"center-center",padding:"0 8px 0 0",gap:"4px",wrap:!1},{default:a(()=>[n(S,null,{default:a(()=>[s(d(t.raw.label),1)]),_:2},1024),e.$props.multiple?(f(),C(y,{key:0,color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[s(d(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])):A("",!0)]),_:2},1024)):A("",!0)]),"item-label":a(({item:t,font:m})=>[n(F,{align:"center-left",wrap:!1},{default:a(()=>[n(S,{font:m},{default:a(()=>[s(d(t.raw.label),1)]),_:2},1032,["font"]),n(y,{color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[s(d(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])]),_:2},1024)]),"toggle-set-item":a(t=>[n(_,{iconColor:t.item.correlated?e.ColorEnum.Success:e.ColorEnum.Warning,prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:G(t.getClass(t.item)),label:t.item.label,onClick:m=>t.toggle(t.item)},null,8,["iconColor","prependIcon","variant","color","class","label","onClick"])]),_:2},[e.selected?{name:"autocomplete-suffix",fn:a(()=>[n(p,{label:e.selected.correlated?e.$tr("ui.common.linked","Linked"):e.$tr("ui.common.not-linked","Not linked"),color:e.selected.correlated?e.ColorEnum.Success:e.ColorEnum.Warning,prependIcon:e.selected.correlated?"mdi-link":"mdi-link-off"},null,8,["label","color","prependIcon"])]),key:"0"}:void 0]),1040,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const R=H(I,[["render",x]]);I.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:R,FSCol:J},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var k,w,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const Dt=["Variations"];export{u as Variations,Dt as __namedExportsOrder,bt as default};
