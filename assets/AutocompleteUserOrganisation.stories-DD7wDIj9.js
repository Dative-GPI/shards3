import{d as C,c as g,y as c,z as f,A as b,C as s,m as w,F as I,N as v,B as $,D as k}from"./vue.esm-bundler-l-siv0w9.js";import{F as q}from"./FSAutocompleteField-CRrbn6iT.js";import{F as O}from"./FSButton-v1WOpc1k.js";import{F as x}from"./FSImage-CcZagSLS.js";import{a as D}from"./useUserOrganisations-ozmXrfuV.js";import{u as _}from"./useAutocomplete-ConHaqE0.js";import{u as B}from"./useTranslations-CJK8D24x.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-BvqytbKT.js";import"./FSSearchField-wkNlBvKw.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./VList-ByZS85Zy.js";import"./FSCard-DL4SLpmS.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-BC2CNv0p.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSIcon-uIr9VdFq.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSLoader-kY4Od3NB.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-kPgNBBHc.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DbvAho3u.js";import"./FSImageUI-DrOfkU7V.js";import"./imageDetails-D_m1_Geu.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-03a1Iisa.js";import"./useAppAuthToken-CwPnmj0J.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:q,FSButton:O,FSImage:x},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:m,fetching:p,entities:i}=D(),{$tr:u}=B(),r=g(()=>A.value&&p.value),n=g(()=>e.multiple&&e.modelValue?u("autocomplete.user.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=_(i,[()=>e.userOrganisationFilters],l,t,null,o=>o.id,o=>o.name);return{userOrganisations:i,placeholder:n,toggleSet:d,loading:r,onUpdate:V}}});function j(e,l,m,p,i,u){const r=c("FSImage"),n=c("FSAutocompleteField");return f(),b(n,w({itemTitle:"name",label:e.$props.label??e.$tr("autocomplete.user.label","User"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):I("",!0)]),"toggle-set-item":s(t=>[v(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:k(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},$({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[v(r,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=N(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:T},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})};var h,F,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const ft=["Variations"];export{a as Variations,ft as __namedExportsOrder,ct as default};
