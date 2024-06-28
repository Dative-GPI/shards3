var O=Object.defineProperty;var q=(e,o,t)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var L=(e,o,t)=>q(e,typeof o!="symbol"?o+"":o,t);import{d as D,c as U,y as I,z as n,A as l,B as a,m as N,E as i,G as p,D as d,K as f}from"./vue.esm-bundler-DeSao-KJ.js";import{F as R}from"./FSAutocompleteField-Bkpq8AAI.js";import{_ as g}from"./FSIcon-_c5Dh2GS.js";import{_ as S}from"./FSSpan-t6bMdSRn.js";import{_ as F}from"./FSRow-3OGCtpd3.js";import{L as A}from"./locationInfos-B2J6PhQT.js";import{C as T}from"./base-Db9bJp6t.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-rrf4GM2L.js";import{u as E}from"./useAutocomplete-CRHnexwL.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-BOlzFTtE.js";import"./FSSearchField-8DUCaYVO.js";import"./FSTextField-B_AIER4K.js";import"./VField-DG7LEdxI.js";import"./useColors-DixhtSsC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-BzCWfwJn.js";import"./FSClickable-DAqEbL1J.js";import"./FSCard-Bb1p0OOX.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-DVgnnpA2.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-Bx-iX6oV.js";import"./FSRadio-Begl_dN7.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-CvYP5v7F.js";import"./FSSlideGroup-D2ZpIsk5.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BaJmqG7J.js";import"./FSCheckbox-BR5oqXbk.js";import"./FSFadeOut--puemKM4.js";import"./FSLoader-CiRK32s-.js";import"./elevation-BBJMtRPf.js";import"./VSelect-CkY7N2yJ.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./address-CE2z3AEI.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class z extends A{constructor(t){super(t);L(this,"description");this.description=t.description}}const V=()=>`${T()}/locations`,G=e=>`${V()}/${encodeURIComponent(e)}`,K=new B("location",z).createComplete(V,G,A),P=j.getMany(K),w=D({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:g,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:y,entities:s}=P(),_=k=>t({...e.locationFilters,search:k??void 0}),{toggleSet:c,init:r,onUpdate:u}=E(s,[()=>e.locationFilters],o,_),$=U(()=>r.value&&y.value);return{locations:s,toggleSet:c,loading:$,onUpdate:u}}});function H(e,o,t,y,s,_){const c=I("FSAutocompleteField");return n(),l(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:r})=>[e.$props.modelValue?(n(),l(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[r.raw.icon?(n(),l(g,{key:0},{default:a(()=>[i(p(r.raw.icon),1)]),_:2},1024)):d("",!0),f(S,null,{default:a(()=>[i(p(r.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":a(({item:r,font:u})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[r.raw.icon?(n(),l(g,{key:0},{default:a(()=>[i(p(r.raw.icon),1)]),_:2},1024)):d("",!0),f(S,{font:u},{default:a(()=>[i(p(r.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const h=M(w,[["render",H]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Lo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:h,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>`})};var v,b,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const vo=["Variations"];export{m as Variations,vo as __namedExportsOrder,Lo as default};
