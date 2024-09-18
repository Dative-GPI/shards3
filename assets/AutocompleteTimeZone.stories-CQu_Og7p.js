var _=Object.defineProperty;var k=(e,t,l)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var s=(e,t,l)=>k(e,typeof t!="symbol"?t+"":t,l);import{d as $,c as S,y as v,z as p,A as u,B as d,m as D,D as b,L as q,P as B}from"./vue.esm-bundler-BSyvBTC9.js";import{F as N}from"./FSAutocompleteField-BkNqhYFQ.js";import{F as y}from"./FSButton-77cfmuX3.js";import{F as U}from"./FSChip-fUG8p2n0.js";import{G as z}from"./base-CmdGny12.js";import{S as E}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-wHNy9kQa.js";import{u as O}from"./useAutocomplete-ig-MGIbX.js";import{C as x}from"./useColors-Ccf8xVyg.js";import{u as j}from"./useTranslations-CdSqQFV3.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as I}from"./FSCol-BU2q2sTe.js";import"./FSSearchField-jIW8dpQv.js";import"./FSTextField-BRxSBTNG.js";import"./FSBaseField-D7aNDTnY.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-DzlUM3r6.js";import"./css-0IiqzUPc.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-DSPGm4fK.js";import"./FSCard-BinAVVx_.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-HxrzZDKP.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-BDkTog43.js";import"./FSWrapGroup-DUGqUei2.js";import"./FSCheckbox-ILpIKg_O.js";import"./FSIcon-D0oLoXA8.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-BJ1ngUIg.js";import"./FSLoader-hEATKEG-.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-ByoRox_c.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-C2EXjQHz.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./FSClickable-DytVXb9R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-3zl-tJp_.js";class T{constructor(t){s(this,"id");s(this,"offset");this.id=t.id,this.offset=t.offset}}class L extends T{constructor(t){super(t)}}const P=()=>`${z()}/time-zones`,R=new E("timeZone",L).create(e=>e.build(e.addGetMany(P,T),e.addNotify())),W=M.getMany(R),A=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:N,FSButton:y,FSChip:U},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:c,entities:m}=W(),{$tr:g}=j(),n=S(()=>V.value&&c.value),a=S(()=>e.multiple&&e.modelValue?g("ui.autocomplete-time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),o=i=>l({...e.timeZoneFilters,search:i??void 0}),{toggleSet:f,init:V,onUpdate:w}=O(m,[()=>e.timeZoneFilters],t,o,null,i=>i.id,i=>i.id);return{placeholder:a,ColorEnum:x,timeZones:m,toggleSet:f,loading:n,onUpdate:w}}});function Y(e,t,l,c,m,g){const n=v("FSChip"),a=v("FSAutocompleteField");return p(),u(a,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":d(({item:o})=>[o.offset?(p(),u(n,{key:0,label:o.offset.split(":")[0]},null,8,["label"])):b("",!0)]),"toggle-set-item":d(o=>[q(y,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:B(o.getClass(o.item)),label:o.item.id,onClick:f=>o.toggle(o.item)},{append:d(()=>[o.item.offset?(p(),u(n,{key:0,label:o.item.offset.split(":")[0]},null,8,["label"])):b("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const C=G(A,[["render",Y]]);A.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteTimeZone:C,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,h,Z;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:Z.source}}};const St=["Variations"];export{r as Variations,St as __namedExportsOrder,ft as default};
