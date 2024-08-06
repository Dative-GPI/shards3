var $=Object.defineProperty;var k=(o,e,i)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var t=(o,e,i)=>k(o,typeof e!="symbol"?e+"":e,i);import{d as q,c as D,y as U,z as r,A as l,B as n,m as N,E as s,G as p,D as g,I as f}from"./vue.esm-bundler-DC82FEWN.js";import{F as R}from"./FSAutocompleteField-CYnTd0qb.js";import{_ as S}from"./FSIcon-DbwPn2D8.js";import{_ as F}from"./FSSpan-CpNfN-10.js";import{_ as v}from"./FSRow-DoCXWKDP.js";import{A as T}from"./address-CE2z3AEI.js";import{C as B}from"./base-CMiH1YbJ.js";import{S as j}from"./serviceFactory-Bd5jifNi.js";import{C as E}from"./composableFactory-J8cSLWf9.js";import{u as M}from"./useAutocomplete-D-5amyup.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-B7HQy3FB.js";import"./FSSearchField-DkGEK_ir.js";import"./FSTextField-Dqsrgufb.js";import"./FSBaseField-DnZM04RC.js";import"./useColors-C3kIW-yW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./useSlots-DN9F4SV8.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./FSButton-C0WtNIXe.js";import"./FSClickable-lwvZGls_.js";import"./FSCard-DjLLj1R5.js";import"./css-DYOPUjjE.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./index-CvDsTioR.js";import"./transition-yl3lVN6J.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./locale-BC9z6YbT.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-XuXdAkNw.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./router-DFGAHh1d.js";import"./FSRadioGroup-BCJVVupN.js";import"./FSRadio-CTzR31w-.js";import"./VSelectionControl-Btb9GcG5.js";import"./index-9jSorrJj.js";import"./FSToggleSet-DcTkORXm.js";import"./FSSlideGroup-BTrB0Fpt.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIpxwRsS.js";import"./group-szJg_hPo.js";import"./FSWrapGroup-CZOqERJH.js";import"./FSCheckbox-BeYxtGMK.js";import"./FSFadeOut-CQLaB3em.js";import"./FSLoader-D7qmn8g6.js";import"./elevation-BTkUCD39.js";import"./VSelect-shlXX7qB.js";import"./VList-BzWIdAYG.js";import"./ssrBoot-D90vJCps.js";import"./border-Be_f35HL.js";import"./VImg-DgHq50DD.js";import"./VMenu-Cn6sY4-s.js";import"./filter-C5_KLKIH.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./lodash-BiW_TGGX.js";class C{constructor(e){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.color=e.color,this.label=e.label,this.tags=e.tags.slice(),this.address=new T(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class G extends C{constructor(i){super(i);t(this,"description");this.description=i.description}}const A=()=>`${B()}/locations`,P=o=>`${A()}/${encodeURIComponent(o)}`,H=new j("location",G).createComplete(A,P,C),J=E.getMany(H),V=q({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:S,FSSpan:F,FSRow:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:i,fetching:y,entities:c}=J(),_=D(()=>u.value&&y.value),d=O=>i({...o.locationFilters,search:O??void 0}),{toggleSet:a,init:u,onUpdate:I}=M(c,[()=>o.locationFilters],e,d);return{locations:c,toggleSet:a,loading:_,onUpdate:I}}});function K(o,e,i,y,c,_){const d=U("FSAutocompleteField");return r(),l(d,N({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":n(({item:a})=>[o.$props.modelValue?(r(),l(v,{key:0,align:"center-center",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,null,{default:n(()=>[s(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":n(({item:a,font:u})=>[f(v,{align:"center-left",wrap:!1},{default:n(()=>[a.raw.icon?(r(),l(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,{font:u},{default:n(()=>[s(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const w=x(V,[["render",K]]);V.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const Fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:w,FSCol:z},props:Object.keys(e),setup(){return{...o}},template:`
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
