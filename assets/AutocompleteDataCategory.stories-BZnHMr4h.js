var T=Object.defineProperty;var U=(e,o,r)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r;var n=(e,o,r)=>U(e,typeof o!="symbol"?o+"":o,r);import{d as N,c as h,y as A,z as g,A as f,B as a,m as O,L as l,E as i,G as m,D as v,S as B}from"./vue.esm-bundler-gWFTcvUr.js";import{F as L}from"./FSAutocompleteField-G63UuZXo.js";import{F as _}from"./FSButton-C0cjY78b.js";import{_ as s}from"./FSIcon-C7-l9IT-.js";import{_ as d}from"./FSSpan-BlywDO8Z.js";import{F as G}from"./FSChip-3bZvXIoL.js";import{_ as u}from"./FSRow-Bpa2jjpJ.js";import{C as W}from"./base-DV1z3red.js";import{S as M}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-CZGZ62iP.js";import{u as z}from"./useAutocomplete-C7hDSQ2w.js";import{C as P}from"./useColors-4hVwr1YC.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./FSCol-DX423FHf.js";import"./FSSearchField-C6oupvwj.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-C6wq00J3.js";import"./FSCard-B-jXuIJy.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-BAFwCk5I.js";import"./FSRadio-CgLvIMAY.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSSlideGroup-Cl8iPAls.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-CRENaYi2.js";import"./FSCheckbox-Dh4I1x40.js";import"./FSFadeOut-D80WCGTA.js";import"./FSLoader-B2Qh9Z5u.js";import"./elevation-B3TY2UXi.js";import"./VSelect-BmHh8iYM.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-aki8YuqU.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class E{constructor(o){n(this,"id");n(this,"modelId");n(this,"code");n(this,"label");n(this,"correlated");this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class J extends E{constructor(o){super(o)}}const $=()=>`${W()}/data-categories`,K=e=>`${$()}/${encodeURIComponent(e)}`,Q=new M("dataCategory",J).create(e=>e.build(e.addGet(K),e.addGetMany($,E),e.addNotify())),X=j.getMany(Q),I=N({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:L,FSButton:_,FSIcon:s,FSSpan:d,FSChip:G,FSRow:u},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:r,fetching:b,entities:p}=X(),D=h(()=>c.value&&b.value),y=h(()=>{if(!e.multiple)return p.value.find(F=>F.id===e.modelValue)}),S=F=>r({...e.dataCategoriesFilters,search:F??void 0}),{toggleSet:t,init:c,onUpdate:q}=z(p,[()=>e.dataCategoriesFilters],o,S);return{dataCategorySelected:y,dataCategories:p,toggleSet:t,ColorEnum:P,loading:D,onUpdate:q}}});function Z(e,o,r,b,p,D){const y=A("FSChip"),S=A("FSAutocompleteField");return g(),f(S,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(g(),f(u,{key:0,align:"center-center",gap:"2px",class:"mr-2",wrap:!1},{default:a(()=>[l(d,null,{default:a(()=>[i(m(t.raw.label),1)]),_:2},1024),e.$props.multiple?(g(),f(s,{key:0,color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[i(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])):v("",!0)]),_:2},1024)):v("",!0)]),"autocomplete-suffix":a(()=>[e.dataCategorySelected?(g(),f(y,{key:0,color:e.dataCategorySelected.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[l(u,{align:"center-center",wrap:!1},{default:a(()=>[l(s,{icon:e.dataCategorySelected.correlated?"mdi-link":"mdi-link-off"},null,8,["icon"]),l(d,{font:"text-overline"},{default:a(()=>{var t;return[i(m((t=e.dataCategorySelected)!=null&&t.correlated?e.$tr("ui.common.linked","Linked"):e.$tr("ui.common.notLinked","Not linked")),1)]}),_:1})]),_:1})]),_:1},8,["color"])):v("",!0)]),"item-label":a(({item:t,font:c})=>[l(u,{align:"center-left",wrap:!1},{default:a(()=>[l(d,{font:c},{default:a(()=>[i(m(t.raw.label),1)]),_:2},1032,["font"]),l(s,{color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[i(m(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(_,{iconColor:t.item.correlated?e.ColorEnum.Success:e.ColorEnum.Warning,variant:t.getVariant(t.item),color:t.getColor(t.item),class:B(t.getClass(t.item)),label:t.item.label,onClick:c=>t.toggle(t.item)},{default:a(()=>[l(u,{align:"center-center",wrap:!1},{default:a(()=>[l(d,null,{default:a(()=>[i(m(t.item.label),1)]),_:2},1024),l(s,{icon:t.item.correlated?"mdi-link":"mdi-link-off",color:t.item.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},null,8,["icon","color"])]),_:2},1024)]),_:2},1032,["iconColor","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const R=Y(I,[["render",Z]]);I.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const vt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},C={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:R,FSCol:H},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var w,k,V;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(k=C.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const bt=["Variations"];export{C as Variations,bt as __namedExportsOrder,vt as default};
