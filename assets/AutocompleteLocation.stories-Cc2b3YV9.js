var $=Object.defineProperty;var k=(e,o,i)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i;var t=(e,o,i)=>k(e,typeof o!="symbol"?o+"":o,i);import{d as q,c as D,y as U,z as r,A as l,B as n,m as N,E as s,G as p,D as g,K as f}from"./vue.esm-bundler-DeSao-KJ.js";import{F as R}from"./FSAutocompleteField-BTOcOZwL.js";import{_ as S}from"./FSIcon-29MaMkU3.js";import{_ as F}from"./FSSpan-t6bMdSRn.js";import{_ as v}from"./FSRow-JJutUvlP.js";import{A as T}from"./address-CE2z3AEI.js";import{C as B}from"./base-Db9bJp6t.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-rrf4GM2L.js";import{u as M}from"./useAutocomplete-CcchzqSF.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-CjQicg1_.js";import"./FSTextField-CeZ-GSQu.js";import"./VField-CyhQQ7TX.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CX8bjLcP.js";import"./FSClickable-D0rN91iS.js";import"./FSCard-DS_imcN3.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-Bqb9kp8T.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-GkfAduCn.js";import"./FSRadio-BSRa54Po.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-BwevC2Gc.js";import"./FSSlideGroup-C6jiw_gL.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-C8aYdVzb.js";import"./FSCheckbox-BFjs92EI.js";import"./FSFadeOut-CcdymBS5.js";import"./FSLoader-Yk4pw6tR.js";import"./elevation-BBJMtRPf.js";import"./VSelect-D0BktkQY.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class C{constructor(o){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.address=new T(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class G extends C{constructor(i){super(i);t(this,"description");this.description=i.description}}const A=()=>`${B()}/locations`,K=e=>`${A()}/${encodeURIComponent(e)}`,P=new j("location",G).createComplete(A,K,C),H=E.getMany(P),V=q({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:S,FSSpan:F,FSRow:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:i,fetching:y,entities:c}=H(),_=O=>i({...e.locationFilters,search:O??void 0}),{toggleSet:d,init:a,onUpdate:u}=M(c,[()=>e.locationFilters],o,_),I=D(()=>a.value&&y.value);return{locations:c,toggleSet:d,loading:I,onUpdate:u}}});function J(e,o,i,y,c,_){const d=U("FSAutocompleteField");return r(),l(d,N({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":n(({item:a})=>[e.$props.modelValue?(r(),l(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,null,{default:n(()=>[s(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":n(({item:a,font:u})=>[f(v,{align:"center-left",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,{font:u},{default:n(()=>[s(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=x(V,[["render",J]]);V.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const _o={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:w,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var b,h,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const bo=["Variations"];export{m as Variations,bo as __namedExportsOrder,_o as default};
