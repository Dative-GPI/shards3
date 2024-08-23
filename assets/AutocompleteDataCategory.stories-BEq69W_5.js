var T=Object.defineProperty;var U=(e,o,l)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var r=(e,o,l)=>U(e,typeof o!="symbol"?o+"":o,l);import{d as N,c as D,y as h,z as f,A as C,M as O,B as a,m as B,L as n,E as s,G as d,D as A,P as G}from"./vue.esm-bundler-BATn8cDU.js";import{F as L}from"./FSAutocompleteField-DBYsLacO.js";import{F as _}from"./FSButton-CvqXFT9l.js";import{_ as y}from"./FSIcon-CM3DCfji.js";import{_ as S}from"./FSSpan-C8YxV3Vj.js";import{F as M}from"./FSChip-DtyKUuEy.js";import{_ as F}from"./FSRow-Gvoj2sTW.js";import{C as W}from"./base-DxU3iujb.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as z}from"./composableFactory-CvKYYcO3.js";import{u as P}from"./useAutocomplete-CUJlsrfT.js";import{C as Y}from"./useColors-BHn59yMM.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as J}from"./FSCol-D9tDKebi.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-B9o4BEyu.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-_Z9wfsFC.js";class ${constructor(o){r(this,"id");r(this,"modelId");r(this,"code");r(this,"label");r(this,"correlated");this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class K extends ${constructor(o){super(o)}}const E=()=>`${W()}/data-categories`,Q=e=>`${E()}/${encodeURIComponent(e)}`,X=new j("dataCategory",K).create(e=>e.build(e.addGet(Q),e.addGetMany(E,$),e.addNotify())),Z=z.getMany(X),I=N({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:L,FSButton:_,FSIcon:y,FSSpan:S,FSChip:M,FSRow:F},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:v,entities:i}=Z(),b=D(()=>m.value&&v.value),p=D(()=>{if(!e.multiple)return i.value.find(g=>g.id===e.modelValue)}),c=g=>l({...e.dataCategoriesFilters,search:g??void 0}),{toggleSet:t,init:m,onUpdate:q}=P(i,[()=>e.dataCategoriesFilters],o,c);return{dataCategories:i,ColorEnum:Y,toggleSet:t,selected:p,loading:b,onUpdate:q}}});function x(e,o,l,v,i,b){const p=h("FSChip"),c=h("FSAutocompleteField");return f(),C(c,B({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),O({"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(f(),C(F,{key:0,align:"center-center",padding:"0 8px 0 0",gap:"4px",wrap:!1},{default:a(()=>[n(S,null,{default:a(()=>[s(d(t.raw.label),1)]),_:2},1024),e.$props.multiple?(f(),C(y,{key:0,color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[s(d(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])):A("",!0)]),_:2},1024)):A("",!0)]),"item-label":a(({item:t,font:m})=>[n(F,{align:"center-left",wrap:!1},{default:a(()=>[n(S,{font:m},{default:a(()=>[s(d(t.raw.label),1)]),_:2},1032,["font"]),n(y,{color:t.raw.correlated?e.ColorEnum.Success:e.ColorEnum.Warning},{default:a(()=>[s(d(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1032,["color"])]),_:2},1024)]),"toggle-set-item":a(t=>[n(_,{iconColor:t.item.correlated?e.ColorEnum.Success:e.ColorEnum.Warning,prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:G(t.getClass(t.item)),label:t.item.label,onClick:m=>t.toggle(t.item)},null,8,["iconColor","prependIcon","variant","color","class","label","onClick"])]),_:2},[e.selected?{name:"autocomplete-suffix",fn:a(()=>[n(p,{label:e.selected.correlated?e.$tr("ui.common.linked","Linked"):e.$tr("ui.common.not-linked","Not linked"),color:e.selected.correlated?e.ColorEnum.Success:e.ColorEnum.Warning,prependIcon:e.selected.correlated?"mdi-link":"mdi-link-off"},null,8,["label","color","prependIcon"])]),key:"0"}:void 0]),1040,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const R=H(I,[["render",x]]);I.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:R,FSCol:J},props:Object.keys(o),setup(){return{...e}},template:`
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
