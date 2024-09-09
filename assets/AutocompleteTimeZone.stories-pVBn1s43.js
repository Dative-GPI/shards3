var w=Object.defineProperty;var k=(e,t,l)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var s=(e,t,l)=>k(e,typeof t!="symbol"?t+"":t,l);import{d as $,c as S,y as v,z as p,A as u,B as d,m as D,D as b,L as q,P as B}from"./vue.esm-bundler-Vj2X7okO.js";import{F as N}from"./FSAutocompleteField-CxRpNtma.js";import{F as y}from"./FSButton-DypSO1L1.js";import{F as U}from"./FSChip-Cy1QD-MY.js";import{G as z}from"./base-CmdGny12.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-B0937_6N.js";import{u as O}from"./useAutocomplete-CnGWBc2h.js";import{C as x}from"./useColors-ClJ5KOuK.js";import{u as j}from"./useTranslations-DyPMaPr_.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./FSCol-Bk577joi.js";import"./FSSearchField-DQjooe7z.js";import"./FSTextField-BxQZ_6yr.js";import"./FSBaseField-Na9zArMU.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./theme-DqOMA9k1.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-BLjBa2f5.js";import"./FSCard-CD3PuQHv.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DJuMPLhX.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-_rtSdk97.js";import"./FSWrapGroup-WFgHTW5y.js";import"./FSCheckbox-CEveiKls.js";import"./FSIcon-C5J86pUk.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-k2izDgAG.js";import"./VImg-BXfgvzNq.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DUmD3b7i.js";import"./VList-C3UDUNRO.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-D4M3PHT5.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./FSClickable-HpeyF8B8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class T{constructor(t){s(this,"id");s(this,"offset");this.id=t.id,this.offset=t.offset}}class L extends T{constructor(t){super(t)}}const P=()=>`${z()}/time-zones`,R=new E("timeZone",L).create(e=>e.build(e.addGetMany(P,T),e.addNotify())),W=M.getMany(R),C=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:y,FSChip:U},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:c,entities:r}=W(),{$tr:g}=j(),n=S(()=>V.value&&c.value),a=S(()=>e.multiple&&e.modelValue?g("ui.autocomplete-time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),o=i=>l({...e.timeZoneFilters,search:i??void 0}),{toggleSet:f,init:V,onUpdate:_}=O(r,[()=>e.timeZoneFilters],t,o,null,i=>i.id,i=>i.id);return{placeholder:a,ColorEnum:x,timeZones:r,toggleSet:f,loading:n,onUpdate:_}}});function Y(e,t,l,c,r,g){const n=v("FSChip"),a=v("FSAutocompleteField");return p(),u(a,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":d(({item:o})=>[o.offset?(p(),u(n,{key:0,label:o.offset.split(":")[0]},null,8,["label"])):b("",!0)]),"toggle-set-item":d(o=>[q(y,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:B(o.getClass(o.item)),label:o.item.id,onClick:f=>o.toggle(o.item)},{append:d(()=>[o.item.offset?(p(),u(n,{key:0,label:o.item.offset.split(":")[0]},null,8,["label"])):b("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const A=G(C,[["render",Y]]);C.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteTimeZone:A,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
