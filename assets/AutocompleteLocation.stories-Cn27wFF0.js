import{d as V,c as p,y as w,z as s,A as u,B as d,m as _,E as C,G as D,D as $}from"./vue.esm-bundler-BSyvBTC9.js";import{F as k}from"./FSAutocompleteField-DhXFDOAI.js";import{_ as v}from"./FSIcon-D23Cpf0F.js";import{u as q}from"./useLocations-Bj7Qu8qZ.js";import{u as B}from"./useAutocomplete-DJoKtg4o.js";import{u as T}from"./useTranslations-CdSqQFV3.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./FSCol-YmDykHL-.js";import"./FSSearchField-BIrdfUzJ.js";import"./FSTextField-BKDOMXYp.js";import"./FSBaseField-_Isn_Ha_.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./FSButton-BNq-0lOE.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./VProgressCircular-Dh9H7lZx.js";import"./tag-DB5D_XjQ.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-BULt7rkH.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-CcWB8C_f.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSWrapGroup-Choo5L6h.js";import"./FSCheckbox-VrXx14Lw.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-D96pvLZm.js";import"./FSLoader-CtbqJzfZ.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./address-CE2z3AEI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const S=V({name:"FSAutocompleteLocation",components:{FSAutocompleteField:k,FSIcon:v},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:a}=q(),{$tr:m}=T(),r=p(()=>y.value&&n.value),o=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),F=A=>i({...e.locationFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:L}=B(a,[()=>e.locationFilters],t,F);return{placeholder:o,locations:a,toggleSet:h,loading:r,onUpdate:L}}});function O(e,t,i,n,a,m){const r=w("FSAutocompleteField");return s(),u(r,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(s(),u(v,{key:0},{default:d(()=>[C(D(o.icon),1)]),_:2},1024)):$("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const b=x(S,[["render",O]]);S.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const at={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLocation:b,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var c,g,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const rt=["Variations"];export{l as Variations,rt as __namedExportsOrder,at as default};
