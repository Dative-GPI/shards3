var O=Object.defineProperty;var q=(e,o,t)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var L=(e,o,t)=>q(e,typeof o!="symbol"?o+"":o,t);import{d as D,c as I,y as U,z as n,A as l,B as a,m as N,E as i,G as p,D as d,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as R}from"./FSAutocompleteField-CK57bNbc.js";import{_ as g}from"./FSIcon-B9OmXzeb.js";import{_ as S}from"./FSSpan-CwfDYIua.js";import{_ as F}from"./FSRow-DoCXWKDP.js";import{L as A}from"./locationInfos-B2J6PhQT.js";import{C as T}from"./base-CMiH1YbJ.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-J8cSLWf9.js";import{u as E}from"./useAutocomplete-uiNKeslv.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-sPgh0iq3.js";import"./FSTextField-bXs3PVLb.js";import"./FSBaseField-DtfOMQi_.js";import"./useColors-CErFNXJM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DMal9AfS.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./FSButton-Qg63Bn8h.js";import"./FSClickable-DvDb5RUi.js";import"./FSCard-dcNQ4DyO.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-BvwZAexL.js";import"./VIcon-C6jgSf5f.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-u1Rr1MXd.js";import"./VDialog-DEUzhsZr.js";import"./VOverlay-CQGRW5Hg.js";import"./dimensions-Dx7VlQQe.js";import"./display-v5wGO8bo.js";import"./lazy-BmX3oan4.js";import"./router-uZykNX6c.js";import"./FSRadioGroup-ClSQfpFl.js";import"./FSRadio-DcIxeyub.js";import"./VSelectionControl-BD03jE0y.js";import"./index-DUaylBew.js";import"./FSToggleSet-XQ9ofx8J.js";import"./FSSlideGroup-C2ZnN_TW.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Ch4AqzX6.js";import"./group-dnu-odUE.js";import"./FSWrapGroup-DnF3o7c5.js";import"./FSCheckbox-CtyYVD5k.js";import"./FSFadeOut-XCSRvsBX.js";import"./FSLoader-DpJez1Wf.js";import"./elevation-xgrzvMGW.js";import"./VSelect-BFD7teB3.js";import"./VList-BGDxsWdj.js";import"./ssrBoot-D90vJCps.js";import"./border-Bvz87W_3.js";import"./VImg-D_T7DUU3.js";import"./VDivider-nXfn8-bM.js";import"./VMenu-CMf8AoPJ.js";import"./filter-CJ-D-YAz.js";import"./address-CE2z3AEI.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class z extends A{constructor(t){super(t);L(this,"description");this.description=t.description}}const V=()=>`${T()}/locations`,G=e=>`${V()}/${encodeURIComponent(e)}`,P=new B("location",z).createComplete(V,G,A),H=j.getMany(P),w=D({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:g,FSSpan:S,FSRow:F},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:y,entities:s}=H(),_=k=>t({...e.locationFilters,search:k??void 0}),{toggleSet:c,init:r,onUpdate:u}=E(s,[()=>e.locationFilters],o,_),$=I(()=>r.value&&y.value);return{locations:s,toggleSet:c,loading:$,onUpdate:u}}});function J(e,o,t,y,s,_){const c=U("FSAutocompleteField");return n(),l(c,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":a(({item:r})=>[e.$props.modelValue?(n(),l(F,{key:0,align:"center-center",wrap:!1},{default:a(()=>[r.raw.icon?(n(),l(g,{key:0},{default:a(()=>[i(p(r.raw.icon),1)]),_:2},1024)):d("",!0),f(S,null,{default:a(()=>[i(p(r.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":a(({item:r,font:u})=>[f(F,{align:"center-left",wrap:!1},{default:a(()=>[r.raw.icon?(n(),l(g,{key:0},{default:a(()=>[i(p(r.raw.icon),1)]),_:2},1024)):d("",!0),f(S,{font:u},{default:a(()=>[i(p(r.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const h=M(w,[["render",J]]);w.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const yo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:h,FSCol:x},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const _o=["Variations"];export{m as Variations,_o as __namedExportsOrder,yo as default};
