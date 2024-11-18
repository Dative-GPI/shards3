import{d as C,c as g,y as c,z as f,A as b,C as s,N as v,F as w,B as I,H as $,m as k}from"./vue.esm-bundler-D3ngFwGY.js";import{F as q}from"./FSAutocompleteField-B1f-d-lL.js";import{F as O}from"./FSButton-D8KNVcat.js";import{F as x}from"./FSImage-BwiE9qIQ.js";import{a as _}from"./useUserOrganisations-CzsBXx5H.js";import{u as D}from"./useAutocomplete-BepmEoya.js";import{u as B}from"./useTranslations-Dmqoe3Kp.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-CVj0zcU5.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./FSIcon-C0akNC9K.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSImageUI-DPxZyIow.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:q,FSButton:O,FSImage:x},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:m,fetching:p,entities:i}=_(),{$tr:u}=B(),r=g(()=>A.value&&p.value),n=g(()=>e.multiple&&e.modelValue?u("autocomplete.user.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=D(i,[()=>e.userOrganisationFilters],l,t,null,o=>o.id,o=>o.name);return{userOrganisations:i,placeholder:n,toggleSet:d,loading:r,onUpdate:V}}});function j(e,l,m,p,i,u){const r=c("FSImage"),n=c("FSAutocompleteField");return f(),b(n,k({itemTitle:"name",label:e.$props.label??e.$tr("autocomplete.user.label","User"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):$("",!0)]),"toggle-set-item":s(t=>[v(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:w(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},I({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[v(r,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=N(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:T},props:Object.keys(l),setup(){return{...e}},template:`
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
