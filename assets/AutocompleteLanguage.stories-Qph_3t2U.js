var D=Object.defineProperty;var $=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var r=(e,t,l)=>$(e,typeof t!="symbol"?t+"":t,l);import{d as q,c as N,y as U,z as n,A as i,B as a,m as G,E as u,G as p,D as c,L as f}from"./vue.esm-bundler-BATn8cDU.js";import{F as x}from"./FSAutocompleteField-DBYsLacO.js";import{_ as S}from"./FSIcon-CM3DCfji.js";import{_ as b}from"./FSSpan-C8YxV3Vj.js";import{_ as F}from"./FSRow-Gvoj2sTW.js";import{G as B}from"./base-CmdGny12.js";import{S as T}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-CvKYYcO3.js";import{u as I}from"./useAutocomplete-CUJlsrfT.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./FSCol-D9tDKebi.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./FSButton-CvqXFT9l.js";import"./FSClickable-B9o4BEyu.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./lodash-BiW_TGGX.js";class w{constructor(t){r(this,"id");r(this,"icon");r(this,"code");r(this,"label");this.id=t.id,this.icon=t.icon,this.code=t.code,this.label=t.label}}class R extends w{constructor(t){super(t)}}const j=()=>`${B()}/languages`,z=new T("language",R).create(e=>e.build(e.addGetMany(j,w),e.addNotify())),P=E.getMany(z),A=q({name:"FSAutocompleteLanguage",components:{FSAutocompleteField:x,FSIcon:S,FSSpan:b,FSRow:F},props:{languageFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:l,fetching:v,entities:s}=P(),y=N(()=>d.value&&v.value),g=k=>l({...e.languageFilters,search:k??void 0}),{toggleSet:o,init:d,onUpdate:C}=I(s,[()=>e.languageFilters],t,g);return{languages:s,toggleSet:o,loading:y,onUpdate:C}}});function W(e,t,l,v,s,y){const g=U("FSAutocompleteField");return n(),i(g,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.languages,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:o})=>[e.$props.modelValue?(n(),i(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,null,{default:a(()=>[u(p(o.raw.label),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),"item-label":a(({item:o,font:d})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[o.raw.icon?(n(),i(S,{key:0},{default:a(()=>[u(p(o.raw.icon),1)]),_:2},1024)):c("",!0),f(b,{font:d},{default:a(()=>[u(p(o.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(A,[["render",W]]);A.__docgenInfo={displayName:"FSAutocompleteLanguage",exportName:"default",description:"",tags:{},props:[{name:"languageFilters",type:{name:"LanguageFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutocompleteLanguage.vue"]};const gt={title:"Foundation/Shared/Autocompletes/AutocompleteLanguage",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1",value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLanguage:V,FSCol:O},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var h,L,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1",
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteLanguage,
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
      <FSAutocompleteLanguage
        label="Language"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLanguage
        label="Language with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const dt=["Variations"];export{m as Variations,dt as __namedExportsOrder,gt as default};
