import{d as $,c as N,y as S,z as n,A as r,B as i,m as T,D as u,K as p,E as F,G as v,S as O}from"./vue.esm-bundler-BLBBrD1D.js";import{F as q}from"./FSAutocompleteField-UqibJclk.js";import{F as _}from"./FSButton-Ctk-czeT.js";import{F as U}from"./FSChip-DA7j5rr-.js";import{_ as g}from"./FSSpan-DNHXfhpi.js";import{_ as D}from"./FSRow-BZVvIgLd.js";import{C as M}from"./base-B_HXG24o.js";import{S as R}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-DeG9aq0N.js";import{u as E}from"./useAutocomplete-CXUsAi9P.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-OnQTHx6W.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./useRender-CTGr_J4i.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./useTranslations-CT7kkIpn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./FSCard-fA5aX9kp.js";import"./css-DU1X_fj1.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./FSIcon-CgTCRlvx.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSCheckbox-DJm00ahm.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./FSClickable-BcsUSOO8.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./lodash-BiW_TGGX.js";class x{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class A{constructor(t){var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new x(s)))??[]}}class G extends A{constructor(t){super(t)}}const w=()=>`${M()}/data-definitions`,z=e=>`${w()}/${encodeURIComponent(e)}`,K=new R("dataDefinition",G).create(e=>e.build(e.addGet(z),e.addGetMany(w,A),e.addNotify())),P=B.getMany(K),V=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSButton:_,FSChip:U,FSSpan:g,FSRow:D},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:c}=P(),b=N(()=>o.value&&s.value),l=k=>a({...e.dataDefinitionFilters,search:k??void 0}),{toggleSet:f,init:o,onUpdate:m}=E(c,[()=>e.dataDefinitionFilters],t,l);return{dataDefinitions:c,toggleSet:f,loading:b,onUpdate:m}}});function H(e,t,a,s,c,b){const l=S("FSChip"),f=S("FSAutocompleteField");return n(),r(f,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(n(),r(D,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,null,{default:i(()=>[F(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":i(({item:o,font:m})=>[p(D,{align:"center-left",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,{font:m},{default:i(()=>[F(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":i(o=>[p(_,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:O(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(n(),r(l,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const I=L(V,[["render",H]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,y,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      FSAutocompleteDataDefinition,
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
      <FSAutocompleteDataDefinition
        label="DataDefinition"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteDataDefinition
        label="DataDefinition with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDataDefinition
        label="DataDefinition with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const St=["Variations"];export{d as Variations,St as __namedExportsOrder,bt as default};
