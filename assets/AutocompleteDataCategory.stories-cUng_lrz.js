import{d as $,c as I,y as R,z as y,A as S,B as a,m as q,K as l,E as i,G as n,D as T,S as U}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as O}from"./FSAutocompleteField-CkC_2HwE.js";import{F as D}from"./FSButton-Cqu01o0F.js";import{_ as u}from"./FSIcon-CcDweDXn.js";import{_ as d}from"./FSSpan-CFY7ptgg.js";import{_ as g}from"./FSRow-a7Q-CB2x.js";import{C as B}from"./base-DT4A-z-k.js";import{S as E}from"./serviceFactory-D_XwB3_y.js";import{C as N}from"./composableFactory-C-hWj-Am.js";import{u as G}from"./useAutocomplete-B1zA08Rk.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./FSCard-BkPZ_hGw.js";import"./css-CBTOQ7jk.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./FSClickable-heovQq91.js";import"./useAppOrganisationId-BMb45lkt.js";import"./lodash-BiW_TGGX.js";class _{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class x extends _{constructor(o){super(o)}}const h=()=>`${B()}/data-categories`,L=e=>`${h()}/${encodeURIComponent(e)}`,z=new E("dataCategory",x).create(e=>e.build(e.addGet(L),e.addGetMany(h,_),e.addNotify())),K=N.getMany(z),A=$({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:f,entities:s}=K(),C=I(()=>r.value&&f.value),p=k=>c({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:t,init:r,onUpdate:V}=G(s,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:s,toggleSet:t,loading:C,onUpdate:V}}});function P(e,o,c,f,s,C){const p=R("FSAutocompleteField");return y(),S(p,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(y(),S(g,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,null,{default:a(()=>[i(n(t.raw.label),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),"item-label":a(({item:t,font:r})=>[l(g,{align:"center-left",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,{font:r},{default:a(()=>[i(n(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(D,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const w=M(A,[["render",P]]);A.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:w,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
