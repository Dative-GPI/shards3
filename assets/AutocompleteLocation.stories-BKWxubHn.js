import{d as O,c as $,y as k,z as n,A as r,B as i,m as q,E as l,G as a,D as d,K as u}from"./vue.esm-bundler-DeSao-KJ.js";import{F as D}from"./FSAutocompleteField-RiC1jgSw.js";import{_ as g}from"./FSIcon-DuYoAbGq.js";import{_ as f}from"./FSSpan-t6bMdSRn.js";import{_ as S}from"./FSRow-JJutUvlP.js";import{C as U}from"./base-Db9bJp6t.js";import{S as N}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-rrf4GM2L.js";import{u as T}from"./useAutocomplete-BjXljuos.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-CA6NzDpV.js";import"./FSSearchField-DwhyMBBv.js";import"./FSTextField-xG_kerPN.js";import"./VField-DEMHFDPm.js";import"./useColors-DL92kHTE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./useSlots-DPxV8yUU.js";import"./VSpacer-CFNx9InD.js";import"./useRender-CIdmfI-I.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./VIcon-B0BI55vc.js";import"./color-XZPyE2lN.js";import"./tag-BL1d6r1f.js";import"./density-4sjlTnVP.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-CUXN7UlR.js";import"./FSClickable-7AMX5jTq.js";import"./FSCard-B1Oet1YO.js";import"./css-BnhLLynS.js";import"./useRules-DQ31e--d.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSDialogMenu-D74RUSZ7.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-D4D4UEOO.js";import"./FSRadio-x2anfynz.js";import"./VSelectionControl-DWVZmIhS.js";import"./index-BWi4ltEp.js";import"./FSToggleSet-B3jJ7hmw.js";import"./FSSlideGroup-DGX0Yc4-.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSWrapGroup-BNjss27o.js";import"./FSCheckbox-BfU8RDs1.js";import"./FSFadeOut-IHk7VvTz.js";import"./FSLoader-D-GHyjSx.js";import"./elevation-BBJMtRPf.js";import"./VSelect-DRB1q99h.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VMenu-CbRbHjmn.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class _{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new E(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class M extends _{constructor(e){super(e),this.description=e.description}}const C=()=>`${U()}/locations`,x=o=>`${C()}/${encodeURIComponent(o)}`,z=new N("location",M).createComplete(C,x,_),G=R.getMany(z),A=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:g,FSSpan:f,FSRow:S},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:F,fetching:y,entities:p}=G(),h=I=>F({...o.locationFilters,search:I??void 0}),{toggleSet:m,init:t,onUpdate:c}=T(p,[()=>o.locationFilters],e,h),w=$(()=>t.value&&y.value);return{locations:p,toggleSet:m,loading:w,onUpdate:c}}});function K(o,e,F,y,p,h){const m=k("FSAutocompleteField");return n(),r(m,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":i(({item:t})=>[o.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,null,{default:i(()=>[l(a(t.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":i(({item:t,font:c})=>[u(S,{align:"center-left",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,{font:c},{default:i(()=>[l(a(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=B(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var v,b,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const So=["Variations"];export{s as Variations,So as __namedExportsOrder,fo as default};
