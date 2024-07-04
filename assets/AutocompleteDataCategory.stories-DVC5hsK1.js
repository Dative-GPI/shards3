var I=Object.defineProperty;var R=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>R(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as T,y as U,z as S,A as F,B as a,m as O,I as i,E as m,G as s,D as B,S as E}from"./vue.esm-bundler-DC82FEWN.js";import{F as N}from"./FSAutocompleteField-9Z77q9u9.js";import{F as _}from"./FSButton-cgjePGb6.js";import{_ as g}from"./FSIcon-CqTsM4Lx.js";import{_ as c}from"./FSSpan-CwfDYIua.js";import{_ as f}from"./FSRow-DoCXWKDP.js";import{C as G}from"./base-CMiH1YbJ.js";import{S as M}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as x}from"./useAutocomplete-CCZg0XDc.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./FSCard-TPuCZi-6.js";import"./css-DYOPUjjE.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./FSClickable-CvEctr0N.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class h{constructor(t){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=t.id,this.modelId=t.modelId,this.code=t.code,this.label=t.label,this.correlated=t.correlated}}class P extends h{constructor(t){super(t)}}const A=()=>`${G()}/data-categories`,Y=e=>`${A()}/${encodeURIComponent(e)}`,H=new M("dataCategory",P).create(e=>e.build(e.addGet(Y),e.addGetMany(A,h),e.addNotify())),J=j.getMany(H),w=q({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:N,FSButton:_,FSIcon:g,FSSpan:c,FSRow:f},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:C,entities:d}=J(),y=T(()=>n.value&&C.value),u=$=>l({...e.dataCategoriesFilters,search:$??void 0}),{toggleSet:o,init:n,onUpdate:k}=x(d,[()=>e.dataCategoriesFilters],t,u);return{dataCategories:d,toggleSet:o,loading:y,onUpdate:k}}});function K(e,t,l,C,d,y){const u=U("FSAutocompleteField");return S(),F(u,O({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(S(),F(f,{key:0,align:"center-center",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,null,{default:a(()=>[m(s(o.raw.label),1)]),_:2},1024)]),_:2},1024)):B("",!0)]),"item-label":a(({item:o,font:n})=>[i(f,{align:"center-left",wrap:!1},{default:a(()=>[i(g,null,{default:a(()=>[m(s(o.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),i(c,{font:n},{default:a(()=>[m(s(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(o=>[i(_,{prependIcon:o.item.correlated?"mdi-link":"mdi-link-off",variant:o.getVariant(o.item),color:o.getColor(o.item),class:E(o.getClass(o.item)),label:o.item.label,onClick:n=>o.toggle(o.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const V=L(w,[["render",K]]);w.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const Ct={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataCategory:V,FSCol:z},props:Object.keys(t),setup(){return{...e}},template:`
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
