import{d as $,c as I,y as R,z as y,A as S,B as a,m as q,K as l,E as i,G as n,D as T,S as U}from"./vue.esm-bundler-BLBBrD1D.js";import{F as O}from"./FSAutocompleteField-UqibJclk.js";import{F as D}from"./FSButton-Ctk-czeT.js";import{_ as u}from"./FSIcon-CgTCRlvx.js";import{_ as d}from"./FSSpan-DNHXfhpi.js";import{_ as g}from"./FSRow-BZVvIgLd.js";import{C as B}from"./base-B_HXG24o.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as N}from"./composableFactory-DeG9aq0N.js";import{u as G}from"./useAutocomplete-CXUsAi9P.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-OnQTHx6W.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./useRender-CTGr_J4i.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./useTranslations-CT7kkIpn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./FSCard-fA5aX9kp.js";import"./css-DU1X_fj1.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSCheckbox-DJm00ahm.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./FSClickable-BcsUSOO8.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./lodash-BiW_TGGX.js";class _{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class x extends _{constructor(o){super(o)}}const h=()=>`${B()}/data-categories`,L=e=>`${h()}/${encodeURIComponent(e)}`,z=new E("dataCategory",x).create(e=>e.build(e.addGet(L),e.addGetMany(h,_),e.addNotify())),K=N.getMany(z),A=$({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:f,entities:s}=K(),C=I(()=>r.value&&f.value),p=k=>c({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:t,init:r,onUpdate:V}=G(s,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:s,toggleSet:t,loading:C,onUpdate:V}}});function P(e,o,c,f,s,C){const p=R("FSAutocompleteField");return y(),S(p,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(y(),S(g,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,null,{default:a(()=>[i(n(t.raw.label),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),"item-label":a(({item:t,font:r})=>[l(g,{align:"center-left",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,{font:r},{default:a(()=>[i(n(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(D,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const w=M(A,[["render",P]]);A.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:w,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
