var O=Object.defineProperty;var q=(e,o,t)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var L=(e,o,t)=>q(e,typeof o!="symbol"?o+"":o,t);import{d as D,c as I,y as U,z as n,A as l,B as r,m as N,E as i,G as p,D as d,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as R}from"./FSAutocompleteField-B_9i_t_v.js";import{_ as g}from"./FSIcon-ClfMDAJS.js";import{_ as S}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{L as A}from"./locationInfos-B2J6PhQT.js";import{C as T}from"./base-CMiH1YbJ.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as E}from"./useAutocomplete-Cvn9mcKc.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-sblczEUa.js";import"./FSTextField-PC8aXZax.js";import"./FSBaseField-Df_egr4c.js";import"./useColors-C2RWUFtR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-DRPhZ-n9.js";import"./FSClickable-aI6guRt-.js";import"./FSCard-EcIwA-Oh.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-pfqo0k-B.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-T3X6pXbd.js";import"./FSRadio-BcnddNE-.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-VpCD6ANQ.js";import"./FSSlideGroup-BVjMNCzT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-CP01kz4v.js";import"./FSCheckbox-BfYUALJm.js";import"./FSFadeOut-CvvHY5il.js";import"./FSLoader-06X_hY2B.js";import"./elevation-BTkUCD39.js";import"./VSelect-CZx4UoO8.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./address-CE2z3AEI.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class z extends A{constructor(t){super(t);L(this,"description");this.description=t.description}}const V=()=>`${T()}/locations`,G=e=>`${V()}/${encodeURIComponent(e)}`,P=new B("location",z).createComplete(V,G,A),H=j.getMany(P),w=D({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:g,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:y,entities:s}=H(),_=k=>t({...e.locationFilters,search:k??void 0}),{toggleSet:c,init:a,onUpdate:u}=E(s,[()=>e.locationFilters],o,_),$=I(()=>a.value&&y.value);return{locations:s,toggleSet:c,loading:$,onUpdate:u}}});function J(e,o,t,y,s,_){const c=U("FSAutocompleteField");return n(),l(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:a})=>[e.$props.modelValue?(n(),l(F,{key:0,align:"center-center",wrap:!1},{default:r(()=>[a.raw.icon?(n(),l(g,{key:0},{default:r(()=>[i(p(a.raw.icon),1)]),_:2},1024)):d("",!0),f(S,null,{default:r(()=>[i(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":r(({item:a,font:u})=>[f(F,{align:"center-left",wrap:!1},{default:r(()=>[a.raw.icon?(n(),l(g,{key:0},{default:r(()=>[i(p(a.raw.icon),1)]),_:2},1024)):d("",!0),f(S,{font:u},{default:r(()=>[i(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const h=M(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:h,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const yo=["Variations"];export{m as Variations,yo as __namedExportsOrder,Fo as default};
