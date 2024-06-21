import{d as $,c as N,y as S,z as n,A as r,B as i,m as T,D as u,K as p,E as F,G as v,R as O}from"./vue.esm-bundler-DUki7rNA.js";import{F as q}from"./FSAutocompleteField-BOl3qm2w.js";import{F as _}from"./FSButton-GE9LRUiN.js";import{F as R}from"./FSChip-C0OIEFyH.js";import{_ as g}from"./FSSpan-DUTdSgpN.js";import{_ as D}from"./FSRow-CHgEOZQb.js";import{C as U}from"./base-DlhEylMe.js";import{S as M}from"./serviceFactory-D_XwB3_y.js";import{C as B}from"./composableFactory-cXrrETVr.js";import{u as E}from"./useAutocomplete-DyW0s6dv.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BBaW1DrL.js";import"./FSSearchField-CdKhC7Ro.js";import"./FSTextField-BZoPMSW0.js";import"./VField-BJJocrwv.js";import"./useColors-HWn2iBmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BdipdDNo.js";import"./useSlots-BZu_lZyn.js";import"./VSpacer-CujVv6t6.js";import"./useRender-pAH_6Aah.js";import"./index-zNldQLkd.js";import"./transition-CAmaHrck.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./anchor-32zVg6UX.js";import"./rounded-CuOTz_ni.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./useTranslations-LhdkJQ98.js";import"./FSDialogMenu-5l5lej0t.js";import"./FSCard-CqpJmiEC.js";import"./css-BPLLlL3Y.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./router-C5N3y4B3.js";import"./FSRadioGroup-VeAtntDL.js";import"./FSRadio-BTSSlUFf.js";import"./FSIcon-CSwom3lG.js";import"./VSelectionControl-D7t-g0gO.js";import"./index-IoB6lNSN.js";import"./FSToggleSet-Drtcc7mS.js";import"./FSSlideGroup-DhG_7ZhN.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DDhhsjhI.js";import"./group-BFGJGSPe.js";import"./FSWrapGroup-CVJTSX_U.js";import"./FSCheckbox-CisQZrrP.js";import"./FSFadeOut-BOJZDV1R.js";import"./FSLoader-DSIWG3YN.js";import"./elevation-B5zwTzN8.js";import"./VSelect-Doh8ERno.js";import"./VList-DhBFmKbf.js";import"./ssrBoot-DA_Fjfes.js";import"./border-BeL02A28.js";import"./VImg-C0UHAW7L.js";import"./VDivider-DeC1Czha.js";import"./VMenu-BMkRa5on.js";import"./filter-CYwgxO9I.js";import"./FSClickable-FCUZtikK.js";import"./useAppOrganisationId-CXBwfEoF.js";import"./lodash-BiW_TGGX.js";class x{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class A{constructor(t){var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new x(s)))??[]}}class G extends A{constructor(t){super(t)}}const w=()=>`${U()}/data-definitions`,z=e=>`${w()}/${encodeURIComponent(e)}`,K=new M("dataDefinition",G).create(e=>e.build(e.addGet(z),e.addGetMany(w,A),e.addNotify())),P=B.getMany(K),V=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSButton:_,FSChip:R,FSSpan:g,FSRow:D},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:c}=P(),b=N(()=>o.value&&s.value),l=k=>a({...e.dataDefinitionFilters,search:k??void 0}),{toggleSet:f,init:o,onUpdate:m}=E(c,[()=>e.dataDefinitionFilters],t,l);return{dataDefinitions:c,toggleSet:f,loading:b,onUpdate:m}}});function H(e,t,a,s,c,b){const l=S("FSChip"),f=S("FSAutocompleteField");return n(),r(f,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(n(),r(D,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,null,{default:i(()=>[F(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":i(({item:o,font:m})=>[p(D,{align:"center-left",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,{font:m},{default:i(()=>[F(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":i(o=>[p(_,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:O(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(n(),r(l,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const I=L(V,[["render",H]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
