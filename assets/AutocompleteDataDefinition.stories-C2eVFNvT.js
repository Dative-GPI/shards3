import{d as $,c as N,y as S,z as n,A as r,B as i,m as T,D as u,K as p,E as F,G as v,S as O}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as q}from"./FSAutocompleteField-CkC_2HwE.js";import{F as _}from"./FSButton-Cqu01o0F.js";import{F as U}from"./FSChip-Cd603C2e.js";import{_ as g}from"./FSSpan-CFY7ptgg.js";import{_ as D}from"./FSRow-a7Q-CB2x.js";import{C as M}from"./base-DT4A-z-k.js";import{S as R}from"./serviceFactory-D_XwB3_y.js";import{C as B}from"./composableFactory-C-hWj-Am.js";import{u as E}from"./useAutocomplete-B1zA08Rk.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./FSCard-BkPZ_hGw.js";import"./css-CBTOQ7jk.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./FSIcon-CcDweDXn.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./FSClickable-heovQq91.js";import"./useAppOrganisationId-BMb45lkt.js";import"./lodash-BiW_TGGX.js";class x{constructor(t){this.id=t.id,this.inputValue=t.inputValue,this.outputValue=t.outputValue}}class A{constructor(t){var a;this.id=t.id,this.modelId=t.modelId,this.dataCategoryId=t.dataCategoryId,this.dataCategoryCode=t.dataCategoryCode,this.dataCategoryLabel=t.dataCategoryLabel,this.code=t.code,this.label=t.label,this.description=t.description,this.dataTable=t.dataTable,this.useOnlyMappings=t.useOnlyMappings,this.unit=t.unit,this.codes=t.codes.slice(),this.mappings=((a=t.mappings)==null?void 0:a.map(s=>new x(s)))??[]}}class G extends A{constructor(t){super(t)}}const w=()=>`${M()}/data-definitions`,z=e=>`${w()}/${encodeURIComponent(e)}`,K=new R("dataDefinition",G).create(e=>e.build(e.addGet(z),e.addGetMany(w,A),e.addNotify())),P=B.getMany(K),V=$({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:q,FSButton:_,FSChip:U,FSSpan:g,FSRow:D},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:s,entities:c}=P(),b=N(()=>o.value&&s.value),l=k=>a({...e.dataDefinitionFilters,search:k??void 0}),{toggleSet:f,init:o,onUpdate:m}=E(c,[()=>e.dataDefinitionFilters],t,l);return{dataDefinitions:c,toggleSet:f,loading:b,onUpdate:m}}});function H(e,t,a,s,c,b){const l=S("FSChip"),f=S("FSAutocompleteField");return n(),r(f,T({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,items:e.dataDefinitions,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":i(({item:o})=>[e.$props.modelValue?(n(),r(D,{key:0,align:"center-center",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,null,{default:i(()=>[F(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):u("",!0)]),"item-label":i(({item:o,font:m})=>[p(D,{align:"center-left",wrap:!1},{default:i(()=>[o.raw.unit?(n(),r(l,{key:0,label:o.raw.unit},null,8,["label"])):u("",!0),p(g,{font:m},{default:i(()=>[F(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":i(o=>[p(_,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:O(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:i(()=>[o.item.unit?(n(),r(l,{key:0,label:o.item.unit},null,8,["label"])):u("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const I=L(V,[["render",H]]);V.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const bt={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDataDefinition:I,FSCol:j},props:Object.keys(t),setup(){return{...e}},template:`
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
