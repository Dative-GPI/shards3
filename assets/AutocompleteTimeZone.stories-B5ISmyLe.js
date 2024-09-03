var w=Object.defineProperty;var k=(e,t,l)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var s=(e,t,l)=>k(e,typeof t!="symbol"?t+"":t,l);import{d as $,c as S,y as v,z as p,A as u,B as d,m as D,D as b,L as q,P as B}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as N}from"./FSAutocompleteField-BwlPjJ12.js";import{F as y}from"./FSButton-CsvAshDj.js";import{F as U}from"./FSChip-BcutA27z.js";import{G as z}from"./base-CmdGny12.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-DYaDCbjS.js";import{u as O}from"./useAutocomplete-Cyb_fxEn.js";import{C as x}from"./useColors-BeCeu6HX.js";import{u as j}from"./useTranslations-DflIUxSJ.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DVRwmgT8.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./theme-C1riLSun.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./tag-CMGfbRyB.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./FSCard-B0a7crHg.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-Cw0TLTWz.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./FSCheckbox-BaTn-nVp.js";import"./FSIcon-BhYLJFwS.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-PkHtV3O5.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-Ch4v6qVK.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./FSClickable-CT4CAD0O.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class T{constructor(t){s(this,"id");s(this,"offset");this.id=t.id,this.offset=t.offset}}class L extends T{constructor(t){super(t)}}const P=()=>`${z()}/time-zones`,R=new E("timeZone",L).create(e=>e.build(e.addGetMany(P,T),e.addNotify())),W=M.getMany(R),C=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:y,FSChip:U},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:c,entities:r}=W(),{$tr:g}=j(),n=S(()=>V.value&&c.value),a=S(()=>e.multiple&&e.modelValue?g("ui.autocomplete-time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),o=i=>l({...e.timeZoneFilters,search:i??void 0}),{toggleSet:f,init:V,onUpdate:_}=O(r,[()=>e.timeZoneFilters],t,o,null,i=>i.id,i=>i.id);return{placeholder:a,ColorEnum:x,timeZones:r,toggleSet:f,loading:n,onUpdate:_}}});function Y(e,t,l,c,r,g){const n=v("FSChip"),a=v("FSAutocompleteField");return p(),u(a,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":d(({item:o})=>[o.offset?(p(),u(n,{key:0,label:o.offset.split(":")[0]},null,8,["label"])):b("",!0)]),"toggle-set-item":d(o=>[q(y,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:B(o.getClass(o.item)),label:o.item.id,onClick:f=>o.toggle(o.item)},{append:d(()=>[o.item.offset?(p(),u(n,{key:0,label:o.item.offset.split(":")[0]},null,8,["label"])):b("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const A=G(C,[["render",Y]]);C.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteTimeZone:A,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var F,h,Z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      FSAutocompleteTimeZone,
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
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(Z=(h=m.parameters)==null?void 0:h.docs)==null?void 0:Z.source}}};const ft=["Variations"];export{m as Variations,ft as __namedExportsOrder,gt as default};
