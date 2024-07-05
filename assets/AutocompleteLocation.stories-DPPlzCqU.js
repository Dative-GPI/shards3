var O=Object.defineProperty;var q=(e,o,t)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var L=(e,o,t)=>q(e,typeof o!="symbol"?o+"":o,t);import{d as D,c as I,y as U,z as n,A as l,B as r,m as N,E as i,G as p,D as d,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as R}from"./FSAutocompleteField-9Z77q9u9.js";import{_ as g}from"./FSIcon-CqTsM4Lx.js";import{_ as S}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{L as A}from"./locationInfos-B2J6PhQT.js";import{C as T}from"./base-CMiH1YbJ.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as E}from"./useAutocomplete-CCZg0XDc.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./useColors-WxHDk9aB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-cgjePGb6.js";import"./FSClickable-CvEctr0N.js";import"./FSCard-TPuCZi-6.js";import"./css-DYOPUjjE.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";import"./address-CE2z3AEI.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class z extends A{constructor(t){super(t);L(this,"description");this.description=t.description}}const V=()=>`${T()}/locations`,G=e=>`${V()}/${encodeURIComponent(e)}`,P=new B("location",z).createComplete(V,G,A),H=j.getMany(P),w=D({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:g,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:y,entities:s}=H(),_=k=>t({...e.locationFilters,search:k??void 0}),{toggleSet:c,init:a,onUpdate:u}=E(s,[()=>e.locationFilters],o,_),$=I(()=>a.value&&y.value);return{locations:s,toggleSet:c,loading:$,onUpdate:u}}});function J(e,o,t,y,s,_){const c=U("FSAutocompleteField");return n(),l(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:a})=>[e.$props.modelValue?(n(),l(F,{key:0,align:"center-center",wrap:!1},{default:r(()=>[a.raw.icon?(n(),l(g,{key:0},{default:r(()=>[i(p(a.raw.icon),1)]),_:2},1024)):d("",!0),f(S,null,{default:r(()=>[i(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":r(({item:a,font:u})=>[f(F,{align:"center-left",wrap:!1},{default:r(()=>[a.raw.icon?(n(),l(g,{key:0},{default:r(()=>[i(p(a.raw.icon),1)]),_:2},1024)):d("",!0),f(S,{font:u},{default:r(()=>[i(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const h=M(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:h,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
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
