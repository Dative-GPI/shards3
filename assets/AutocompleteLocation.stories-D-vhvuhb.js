var $=Object.defineProperty;var k=(o,e,i)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var t=(o,e,i)=>k(o,typeof e!="symbol"?e+"":e,i);import{d as q,c as D,y as U,z as l,A as r,B as n,m as N,E as s,G as p,D as g,K as f}from"./vue.esm-bundler-DeSao-KJ.js";import{F as R}from"./FSAutocompleteField-D2EW_p4Z.js";import{_ as S}from"./FSIcon-29MaMkU3.js";import{_ as F}from"./FSSpan-t6bMdSRn.js";import{_ as y}from"./FSRow-JJutUvlP.js";import{C as T}from"./base-Db9bJp6t.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-rrf4GM2L.js";import{u as E}from"./useAutocomplete-CcchzqSF.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-CjQicg1_.js";import"./FSTextField-CeZ-GSQu.js";import"./VField-CyhQQ7TX.js";import"./useColors-CSspNZdS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CX8bjLcP.js";import"./FSClickable-D0rN91iS.js";import"./FSCard-DS_imcN3.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-Bqb9kp8T.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-GkfAduCn.js";import"./FSRadio-BSRa54Po.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-BwevC2Gc.js";import"./FSSlideGroup-C6jiw_gL.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-C8aYdVzb.js";import"./FSCheckbox-BFjs92EI.js";import"./FSFadeOut-CcdymBS5.js";import"./FSLoader-Yk4pw6tR.js";import"./elevation-BBJMtRPf.js";import"./VSelect-D0BktkQY.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class z{constructor(e){t(this,"placeId");t(this,"placeLabel");t(this,"formattedAddress");t(this,"locality");t(this,"country");t(this,"latitude");t(this,"longitude");this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class C{constructor(e){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new z(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class G extends C{constructor(i){super(i);t(this,"description");this.description=i.description}}const A=()=>`${T()}/locations`,K=o=>`${A()}/${encodeURIComponent(o)}`,P=new B("location",G).createComplete(A,K,C),H=j.getMany(P),I=q({name:"FSAutocompleteLocation",components:{FSAutocompleteField:R,FSIcon:S,FSSpan:F,FSRow:y},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:i,fetching:h,entities:m}=H(),v=O=>i({...o.locationFilters,search:O??void 0}),{toggleSet:d,init:a,onUpdate:u}=E(m,[()=>o.locationFilters],e,v),w=D(()=>a.value&&h.value);return{locations:m,toggleSet:d,loading:w,onUpdate:u}}});function J(o,e,i,h,m,v){const d=U("FSAutocompleteField");return l(),r(d,N({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":n(({item:a})=>[o.$props.modelValue?(l(),r(y,{key:0,align:"center-center",wrap:!1},{default:n(()=>[a.raw.icon?(l(),r(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,null,{default:n(()=>[s(p(a.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":n(({item:a,font:u})=>[f(y,{align:"center-left",wrap:!1},{default:n(()=>[a.raw.icon?(l(),r(S,{key:0},{default:n(()=>[s(p(a.raw.icon),1)]),_:2},1024)):g("",!0),f(F,{font:u},{default:n(()=>[s(p(a.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=M(I,[["render",J]]);I.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const ho={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:x},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var b,L,_;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const vo=["Variations"];export{c as Variations,vo as __namedExportsOrder,ho as default};
