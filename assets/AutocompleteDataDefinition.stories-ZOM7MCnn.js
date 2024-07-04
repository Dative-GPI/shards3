var T=Object.defineProperty;var N=(t,e,a)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>N(t,typeof e!="symbol"?e+"":e,a);import{d as O,c as q,y as F,z as r,A as s,B as l,m as M,D as p,I as d,E as y,G as v,S as U}from"./vue.esm-bundler-DC82FEWN.js";import{F as R}from"./FSAutocompleteField-C-lggkun.js";import{F as V}from"./FSButton-uZjHfaK3.js";import{F as B}from"./FSChip-CQw4L8nH.js";import{_ as D}from"./FSSpan-CwfDYIua.js";import{_ as b}from"./FSRow-DoCXWKDP.js";import{C as L}from"./base-CMiH1YbJ.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as x}from"./useAutocomplete-DM6mLb0u.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-D2284KSG.js";import"./FSTextField-Bzrs8V-b.js";import"./VField-Tu0u6Fec.js";import"./useColors-vjSCjmKB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-_ixMOtNT.js";import"./FSCard-C7Q5zpHU.js";import"./css-DYOPUjjE.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-B1zDN-ex.js";import"./FSRadio-CMZuYlpC.js";import"./FSIcon-CH1L3cXE.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-CmH1Z7Qc.js";import"./FSSlideGroup-G_yR414R.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-BRpaPdC9.js";import"./FSCheckbox-B7KB3blX.js";import"./FSFadeOut-DU52ZiYP.js";import"./FSLoader-BPRTbLLe.js";import"./elevation-BoGrGvdU.js";import"./VSelect-D7_mePYk.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./FSClickable-fH0IP9Gi.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class P{constructor(e){i(this,"id");i(this,"inputValue");i(this,"outputValue");this.id=e.id,this.inputValue=e.inputValue,this.outputValue=e.outputValue}}class A{constructor(e){i(this,"id");i(this,"modelId");i(this,"dataCategoryId");i(this,"dataCategoryCode");i(this,"dataCategoryLabel");i(this,"code");i(this,"label");i(this,"description");i(this,"dataTable");i(this,"useOnlyMappings");i(this,"unit");i(this,"codes");i(this,"mappings");var a;this.id=e.id,this.modelId=e.modelId,this.dataCategoryId=e.dataCategoryId,this.dataCategoryCode=e.dataCategoryCode,this.dataCategoryLabel=e.dataCategoryLabel,this.code=e.code,this.label=e.label,this.description=e.description,this.dataTable=e.dataTable,this.useOnlyMappings=e.useOnlyMappings,this.unit=e.unit,this.codes=e.codes.slice(),this.mappings=((a=e.mappings)==null?void 0:a.map(u=>new P(u)))??[]}}class H extends A{constructor(e){super(e)}}const w=()=>`${L()}/data-definitions`,J=t=>`${w()}/${encodeURIComponent(t)}`,K=new E("dataDefinition",H).create(t=>t.build(t.addGet(J),t.addGetMany(w,A),t.addNotify())),Q=j.getMany(K),I=O({name:"FSAutocompleteDataDefinition",components:{FSAutocompleteField:R,FSButton:V,FSChip:B,FSSpan:D,FSRow:b},props:{dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:u,entities:f}=Q(),S=q(()=>o.value&&u.value),n=$=>a({...t.dataDefinitionFilters,search:$??void 0}),{toggleSet:g,init:o,onUpdate:m}=x(f,[()=>t.dataDefinitionFilters],e,n);return{dataDefinitions:f,toggleSet:g,loading:S,onUpdate:m}}});function W(t,e,a,u,f,S){const n=F("FSChip"),g=F("FSAutocompleteField");return r(),s(g,M({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,multiple:t.$props.multiple,items:t.dataDefinitions,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":l(({item:o})=>[t.$props.modelValue?(r(),s(b,{key:0,align:"center-center",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,null,{default:l(()=>[y(v(o.raw.label),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"item-label":l(({item:o,font:m})=>[d(b,{align:"center-left",wrap:!1},{default:l(()=>[o.raw.unit?(r(),s(n,{key:0,label:o.raw.unit},null,8,["label"])):p("",!0),d(D,{font:m},{default:l(()=>[y(v(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),"toggle-set-item":l(o=>[d(V,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:U(o.getClass(o.item)),label:o.item.label,onClick:m=>o.toggle(o.item)},{prepend:l(()=>[o.item.unit?(r(),s(n,{key:0,label:o.item.unit},null,8,["label"])):p("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","items","loading","modelValue","onUpdate:modelValue"])}const k=G(I,[["render",W]]);I.__docgenInfo={displayName:"FSAutocompleteDataDefinition",exportName:"default",description:"",tags:{},props:[{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDataDefinition.vue"]};const St={title:"Foundation/Core/Autocompletes/AutocompleteDataDefinition",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteDataDefinition:k,FSCol:z},props:Object.keys(e),setup(){return{...t}},template:`
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
    </FSCol>`})};var h,C,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Ft=["Variations"];export{c as Variations,Ft as __namedExportsOrder,St as default};
