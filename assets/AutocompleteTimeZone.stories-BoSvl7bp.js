var _=Object.defineProperty;var k=(e,t,l)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var s=(e,t,l)=>k(e,typeof t!="symbol"?t+"":t,l);import{d as $,c as v,z as S,A as p,B as u,C as d,m as q,E as b,v as D,P as B}from"./vue.esm-bundler-BwDfg4wG.js";import{F as E}from"./FSAutocompleteField-BJE5Iw2_.js";import{F as T}from"./FSButton-jJkg4qCi.js";import{F as N}from"./FSChip-kw9MOYsi.js";import{G as U}from"./base-CmdGny12.js";import{S as z}from"./serviceFactory-Bd5jifNi.js";import{C as M}from"./composableFactory-fou7heQy.js";import{u as O}from"./useAutocomplete-CQJJiztf.js";import{C as x}from"./useColors-tmPxRJAs.js";import{u as j}from"./useTranslations-CHmpEDXr.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as I}from"./FSCol-BEvj3we4.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./FSIcon-ChaYv6Le.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./FSClickable-Y_T-Cq-9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./index-DfSX31J9.js";class y{constructor(t){s(this,"id");s(this,"offset");this.id=t.id,this.offset=t.offset}}class L extends y{constructor(t){super(t)}}const P=()=>`${U()}/time-zones`,R=new z("timeZone",L).create(e=>e.build(e.addGetMany(P,y),e.addNotify())),W=M.getMany(R),C=$({name:"FSAutocompleteTimeZone",components:{FSAutocompleteField:E,FSButton:T,FSChip:N},props:{timeZoneFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:c,entities:m}=W(),{$tr:g}=j(),n=v(()=>V.value&&c.value),a=v(()=>e.multiple&&e.modelValue?g("ui.autocomplete-time-zone.placeholder","{0} time zone(s) selected",e.modelValue.length):null),o=i=>l({...e.timeZoneFilters,search:i??void 0}),{toggleSet:f,init:V,onUpdate:w}=O(m,[()=>e.timeZoneFilters],t,o,null,i=>i.id,i=>i.id);return{placeholder:a,ColorEnum:x,timeZones:m,toggleSet:f,loading:n,onUpdate:w}}});function Y(e,t,l,c,m,g){const n=S("FSChip"),a=S("FSAutocompleteField");return p(),u(a,q({itemTitle:"id",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.timeZones,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-append":d(({item:o})=>[o.offset?(p(),u(n,{key:0,label:o.offset.split(":")[0]},null,8,["label"])):b("",!0)]),"toggle-set-item":d(o=>[D(T,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:B(o.getClass(o.item)),label:o.item.id,onClick:f=>o.toggle(o.item)},{append:d(()=>[o.item.offset?(p(),u(n,{key:0,label:o.item.offset.split(":")[0]},null,8,["label"])):b("",!0)]),_:2},1032,["variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const A=G(C,[["render",Y]]);C.__docgenInfo={displayName:"FSAutocompleteTimeZone",exportName:"default",description:"",tags:{},props:[{name:"timeZoneFilters",type:{name:"TimeZoneFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue"]};const ft={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:A,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteTimeZone:A,FSCol:I},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(Z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:Z.source}}};const vt=["Variations"];export{r as Variations,vt as __namedExportsOrder,ft as default};
