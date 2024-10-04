var _=Object.defineProperty;var k=(e,t,l)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var s=(e,t,l)=>k(e,typeof t!="symbol"?t+"":t,l);import{d as $,c as S,y as v,z as p,A as u,C as d,m as D,F as b,N as q,D as N}from"./vue.esm-bundler-CWdIlc2r.js";import{F as U}from"./FSAutocompleteField-BIP7XLeM.js";import{F as y}from"./FSButton-C5MQI7ea.js";import{F as z}from"./FSChip-D308mzkb.js";import{G as B}from"./base-CmdGny12.js";import{S as E}from"./serviceFactory-DAEdCiSt.js";import{C as M}from"./composableFactory-Dh-waxQE.js";import{u as O}from"./useAutocomplete-Cg3DBVgY.js";import{C as x}from"./useColors-CrLBSafx.js";import{u as j}from"./useTranslations-CEnu7PZQ.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as I}from"./FSCol-Bj1WIVag.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./FSRow-D4JfwQlG.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./VIcon-Bo7R9vIQ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSDialogMenu-CzbYQerh.js";import"./FSCard-D8qRc7rc.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./FSCheckbox-18K-cCtB.js";import"./FSIcon-vAlkpflo.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSLoader-DxfJongP.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./FSClickable-D_ads5r5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class T{constructor(t){s(this,"id");s(this,"offset");this.id=t.id,this.offset=t.offset}}class L extends T{constructor(t){super(t)}}const R=()=>`${B()}/time-zones`,P=new E("timeZone",L).create(e=>e.build(e.addGetMany(R,T),e.addNotify())),W=M.getMany(P),C=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:U,FSButton:y,FSChip:z},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:c,entities:m}=W(),{$tr:g}=j(),n=S(()=>V.value&&c.value),a=S(()=>e.multiple&&e.modelValue?g("ui.autocomplete-time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),o=i=>l({...e.timeZoneFilters,search:i??void 0}),{toggleSet:f,init:V,onUpdate:w}=O(m,[()=>e.timeZoneFilters],t,o,null,i=>i.id,i=>i.id);return{placeholder:a,ColorEnum:x,timeZones:m,toggleSet:f,loading:n,onUpdate:w}}});function Y(e,t,l,c,m,g){const n=v("FSChip"),a=v("FSAutocompleteField");return p(),u(a,D({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":d(({item:o})=>[o.offset?(p(),u(n,{key:0,label:o.offset.split(":")[0]},null,8,["label"])):b("",!0)]),"toggle-set-item":d(o=>[q(y,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:N(o.getClass(o.item)),label:o.item.id,onClick:f=>o.toggle(o.item)},{append:d(()=>[o.item.offset?(p(),u(n,{key:0,label:o.item.offset.split(":")[0]},null,8,["label"])):b("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const A=G(C,[["render",Y]]);C.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const vt={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteTimeZone:A,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(Z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:Z.source}}};const bt=["Variations"];export{r as Variations,bt as __namedExportsOrder,vt as default};
