import{d as C,c as g,y as c,z as f,A as v,B as s,m as w,D as I,L as F,M as k,P as x}from"./vue.esm-bundler-BSyvBTC9.js";import{F as _}from"./FSAutocompleteField-BWpIRFQb.js";import{F as O}from"./FSButton-nYXrUxor.js";import{F as $}from"./FSImage-DFpAkaKA.js";import{a as q}from"./useUserOrganisations-CrfAsfeZ.js";import{u as D}from"./useAutocomplete-BASvUgNW.js";import{u as B}from"./useTranslations-CdSqQFV3.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-CtQDyyQv.js";import"./FSSearchField-D0sFDEbi.js";import"./FSTextField-cqKhOuyK.js";import"./FSBaseField-MrxZykEv.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSRow-B3SJi8FA.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./FSCard-VI0SCCBU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./router-D2IrSaAD.js";import"./FSSlideGroup-60uSUxLJ.js";import"./uuid-DTaye2KM.js";import"./group-CBCTR8u6.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSIcon-lOMM3dv0.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-DGMvjjet.js";import"./FSLoader-7EueGG7H.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./filter-DuGNEgHB.js";import"./FSClickable-BDGPWcsb.js";import"./FSImageUI-D0IdOlS8.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:_,FSButton:O,FSImage:$},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:m,fetching:p,entities:l}=q(),{$tr:u}=B(),a=g(()=>A.value&&p.value),n=g(()=>e.multiple&&e.modelValue?u("ui.autocomplete-user-organisation.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=D(l,[()=>e.userOrganisationFilters],r,t,null,o=>o.id,o=>o.name);return{userOrganisations:l,placeholder:n,toggleSet:d,loading:a,onUpdate:V}}});function j(e,r,m,p,l,u){const a=c("FSImage"),n=c("FSAutocompleteField");return f(),v(n,w({itemTitle:"name",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(f(),v(a,{key:0,height:"26px",width:"26px",imageId:t.imageId},null,8,["imageId"])):I("",!0)]),"toggle-set-item":s(t=>[F(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:x(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[F(a,{height:"26px",width:"26px",imageId:t.item.imageId},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=T(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ut={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var S,h,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      FSAutocompleteUserOrganisation,
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
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const dt=["Variations"];export{i as Variations,dt as __namedExportsOrder,ut as default};
