var I=Object.defineProperty;var R=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>R(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as T,y as U,z as S,A as F,B as a,m as O,L as i,E as m,G as s,D as B,S as E}from"./vue.esm-bundler-gWFTcvUr.js";import{F as N}from"./FSAutocompleteField-b3Xz2NwJ.js";import{F as _}from"./FSButton-CDk00Rln.js";import{_ as g}from"./FSIcon-C5ELG8c1.js";import{_ as c}from"./FSSpan-BlywDO8Z.js";import{_ as f}from"./FSRow-Bpa2jjpJ.js";import{C as G}from"./base-DV1z3red.js";import{S as L}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-CZGZ62iP.js";import{u as j}from"./useAutocomplete-DqlTmpvX.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./VIcon-BiBYr0XY.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./VProgressCircular-DqlO5PEF.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-D0BMvcHm.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./FSClickable-BVFP8bZP.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class h{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends h{constructor(t){super(t)}}const A=()=>`${G()}/data-categories`,Y=e=>`${A()}/${encodeURIComponent(e)}`,H=new L("dataCategory",P).create(e=>e.build(e.addGet(Y),e.addGetMany(A,h),e.addNotify())),J=M.getMany(H),w=q({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:N,FSButton:_,FSIcon:g,FSSpan:c,FSRow:f},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:C,entities:d}=J(),y=T(()=>n.value&&C.value),u=$=>l({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:o,init:n,onUpdate:k}=j(d,[()=>e.dataCategoriesFilters],t,u);return{dataCategories:d,toggleSet:o,loading:y,onUpdate:k}}});function K(e,t,l,C,d,y){const u=U("FSAutocompleteField");return S(),F(u,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(S(),F(f,{key:0,align:"center-center",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,null,{default:a(()=>[m(s(o.raw.label),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":a(({item:o,font:n})=>[i(f,{align:"center-left",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,{font:n},{default:a(()=>[m(s(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(o=>[i(_,{prependIcon:o.item.correlated?"mdi-link":"mdi-link-off",variant:o.getVariant(o.item),color:o.getColor(o.item),class:E(o.getClass(o.item)),label:o.item.label,onClick:n=>o.toggle(o.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const V=x(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:V,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
