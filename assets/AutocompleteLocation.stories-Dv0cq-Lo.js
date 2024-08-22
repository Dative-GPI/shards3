var $=Object.defineProperty;var k=(o,e,i)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var t=(o,e,i)=>k(o,typeof e!="symbol"?e+"":e,i);import{d as q,c as D,y as U,z as r,A as l,B as n,m as N,E as s,G as p,D as g,L as f}from"./vue.esm-bundler-BATn8cDU.js";import{F as R}from"./FSAutocompleteField-kUwtQTfK.js";import{_ as S}from"./FSIcon-Kk713u84.js";import{_ as F}from"./FSSpan-C8YxV3Vj.js";import{_ as v}from"./FSRow-Gvoj2sTW.js";import{A as T}from"./address-CE2z3AEI.js";import{C as B}from"./base-DxU3iujb.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-CvKYYcO3.js";import{u as M}from"./useAutocomplete-BnddAth7.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-D9tDKebi.js";import"./FSSearchField-T0sLpl1S.js";import"./FSTextField-KD4CRsHh.js";import"./FSBaseField-axT9dPIw.js";import"./useColors-D4RQatlL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./FSButton-D0V1nthY.js";import"./FSClickable-DYDREYld.js";import"./FSCard-CAgq3XuJ.js";import"./css-C5boehQC.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-aCLCOYe1.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-Dx8IK8Wf.js";import"./FSRadio-CXuTMsbF.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-Cm_kcpK6.js";import"./FSSlideGroup-BrYapIVT.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-CZbFj3Ra.js";import"./FSCheckbox-Di-LctwI.js";import"./FSFadeOut-8zEGCDGr.js";import"./FSLoader-BBhuF9xD.js";import"./elevation-oWdkHiXv.js";import"./VSelect-BU_B2xFx.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./useAppOrganisationId-9tSyFyAD.js";import"./lodash-BiW_TGGX.js";class C{constructor(e){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.color=e.color,this.label=e.label,this.tags=e.tags.slice(),this.address=new T(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class G extends C{constructor(i){super(i);t(this,"description");this.description=i.description}}const A=()=>`${B()}/locations`,P=o=>`${A()}/${encodeURIComponent(o)}`,H=new j("location",G).createComplete(A,P,C),J=E.getMany(H),V=q({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:S,FSSpan:F,FSRow:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:i,fetching:y,entities:c}=J(),_=D(()=>u.value&&y.value),d=O=>i({...o.locationFilters,search:O??void 0}),{toggleSet:a,init:u,onUpdate:I}=M(c,[()=>o.locationFilters],e,d);return{locations:c,toggleSet:a,loading:_,onUpdate:I}}});function K(o,e,i,y,c,_){const d=U("FSAutocompleteField");return r(),l(d,N({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":n(({item:a})=>[o.$props.modelValue?(r(),l(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,null,{default:n(()=>[s(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":n(({item:a,font:u})=>[f(v,{align:"center-left",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,{font:u},{default:n(()=>[s(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=x(V,[["render",K]]);V.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:w,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const vo=["Variations"];export{m as Variations,vo as __namedExportsOrder,Fo as default};
