import{d as w,c as u,y as g,z as c,A as f,C as m,m as I,F as k,N as v,B as x,D as _}from"./vue.esm-bundler-CWdIlc2r.js";import{F as $}from"./FSAutocompleteField-BIP7XLeM.js";import{F as h}from"./FSButton-C5MQI7ea.js";import{F as q}from"./FSImage-D-VbLOPJ.js";import{u as D}from"./useModels-DFHGJItG.js";import{u as B}from"./useAutocomplete-Cg3DBVgY.js";import{u as N}from"./useTranslations-CEnu7PZQ.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-Bj1WIVag.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./FSRow-D4JfwQlG.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./VIcon-Bo7R9vIQ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSDialogMenu-CzbYQerh.js";import"./FSCard-D8qRc7rc.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./FSCheckbox-18K-cCtB.js";import"./FSIcon-vAlkpflo.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-wBxXm2Rc.js";import"./FSLoader-DxfJongP.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./FSClickable-D_ads5r5.js";import"./FSImageUI-D64m-s1x.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:$,FSButton:h,FSImage:q},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:n,fetching:d,entities:i}=D(),{$tr:p}=N(),l=u(()=>A.value&&d.value),a=u(()=>e.multiple&&e.modelValue?p("ui.autocomplete-model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:s,init:A,onUpdate:V}=B(i,[()=>e.modelFilters],o,t);return{placeholder:a,toggleSet:s,loading:l,models:i,onUpdate:V}}});function U(e,o,n,d,i,p){const l=g("FSImage"),a=g("FSAutocompleteField");return c(),f(a,I({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(l,{key:0,height:"26px",width:"26px",imageId:t.imageId},null,8,["imageId"])):k("",!0)]),"toggle-set-item":m(t=>[v(h,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:_(t.getClass(t.item)),label:t.item.label,onClick:s=>t.toggle(t.item)},x({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[v(l,{height:"26px",width:"26px",imageId:t.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var F,S,b;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteModel,
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
      <FSAutocompleteModel
        label="Model"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteModel
        label="Model with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const gt=["Variations"];export{r as Variations,gt as __namedExportsOrder,ut as default};
