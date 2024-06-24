import{d as $,c as I,y as R,z as y,A as S,B as a,m as q,K as l,E as i,G as n,D as T,R as U}from"./vue.esm-bundler-CLWyqtrq.js";import{F as O}from"./FSAutocompleteField-ca2IAtlh.js";import{F as D}from"./FSButton-xawrBwn0.js";import{_ as u}from"./FSIcon-nvjMvWEC.js";import{_ as d}from"./FSSpan-C4Iz3qX9.js";import{_ as g}from"./FSRow-B7tdsi71.js";import{C as B}from"./base-DgvHU1oF.js";import{S as E}from"./serviceFactory-D_XwB3_y.js";import{C as N}from"./composableFactory-BGJVwV03.js";import{u as G}from"./useAutocomplete-BUBL_XZR.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-B2afuG5O.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./FSCard-CtrctGW7.js";import"./css-Ca-HPGcF.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./FSLoader-DpxcFPRZ.js";import"./elevation-CB-eCL4u.js";import"./VSelect-DovITVmj.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./FSClickable-CX-mXFfM.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./lodash-BiW_TGGX.js";class _{constructor(o){this.id=o.id,this.modelId=o.modelId,this.code=o.code,this.label=o.label,this.correlated=o.correlated}}class x extends _{constructor(o){super(o)}}const h=()=>`${B()}/data-categories`,L=e=>`${h()}/${encodeURIComponent(e)}`,z=new E("dataCategory",x).create(e=>e.build(e.addGet(L),e.addGetMany(h,_),e.addNotify())),K=N.getMany(z),A=$({name:"FSAutocompleteDataCategory",components:{FSAutocompleteField:O,FSButton:D,FSIcon:u,FSSpan:d,FSRow:g},props:{dataCategoriesFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:c,fetching:f,entities:s}=K(),C=I(()=>r.value&&f.value),p=k=>c({...e.dataCategoriesFilters,search:k??void 0}),{toggleSet:t,init:r,onUpdate:V}=G(s,[()=>e.dataCategoriesFilters],o,p);return{dataCategories:s,toggleSet:t,loading:C,onUpdate:V}}});function P(e,o,c,f,s,C){const p=R("FSAutocompleteField");return y(),S(p,q({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataCategories,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:t})=>[e.$props.modelValue?(y(),S(g,{key:0,align:"center-center",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,null,{default:a(()=>[i(n(t.raw.label),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),"item-label":a(({item:t,font:r})=>[l(g,{align:"center-left",wrap:!1},{default:a(()=>[l(u,null,{default:a(()=>[i(n(t.raw.correlated?"mdi-link":"mdi-link-off"),1)]),_:2},1024),l(d,{font:r},{default:a(()=>[i(n(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":a(t=>[l(D,{prependIcon:t.item.correlated?"mdi-link":"mdi-link-off",variant:t.getVariant(t.item),color:t.getColor(t.item),class:U(t.getClass(t.item)),label:t.item.label,onClick:r=>t.toggle(t.item)},null,8,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const w=M(A,[["render",P]]);A.__docgenInfo={displayName:"FSAutocompleteDataCategory",exportName:"default",description:"",tags:{},props:[{name:"dataCategoriesFilters",type:{name:"DataCategoryFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataCategory.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteDataCategory",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteDataCategory:w,FSCol:j},props:Object.keys(o),setup(){return{...e}},template:`
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
