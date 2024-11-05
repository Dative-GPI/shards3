import{d as C,c as g,y as c,z as f,A as v,C as s,m as w,F as I,N as h,B as k,D as x}from"./vue.esm-bundler-l-siv0w9.js";import{F as _}from"./FSAutocompleteField-Bbs8UUdv.js";import{F as O}from"./FSButton-CTjpHGCH.js";import{F as $}from"./FSImage-gDbMqTJA.js";import{a as q}from"./useUserOrganisations-Ds2BTiaH.js";import{u as D}from"./useAutocomplete-8zU6WpIq.js";import{u as B}from"./useTranslations-CJK8D24x.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-BvqytbKT.js";import"./FSSearchField-BUrocgsZ.js";import"./FSTextField-xeLxZAxc.js";import"./FSBaseField-Bt-M24lA.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./VIcon-D6ql3n-m.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSDialogMenu-qumNHV3X.js";import"./FSCard-CZcF3hjs.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-7mPn_F6a.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BhVekJEg.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-BtOljEfB.js";import"./FSWrapGroup-D1OyNKn_.js";import"./FSCheckbox--v2KMIeD.js";import"./FSIcon-CxSeYbPm.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-9Mm6vijG.js";import"./FSLoader-ylzW_XnC.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqpA7Dwr.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-DvSj5glm.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DMSoEBu-.js";import"./FSImageUI-BlKs_vZE.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:_,FSButton:O,FSImage:$},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:m,fetching:p,entities:l}=q(),{$tr:u}=B(),i=g(()=>A.value&&p.value),n=g(()=>e.multiple&&e.modelValue?u("ui.autocomplete-user-organisation.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=D(l,[()=>e.userOrganisationFilters],r,t,null,o=>o.id,o=>o.name);return{userOrganisations:l,placeholder:n,toggleSet:d,loading:i,onUpdate:V}}});function j(e,r,m,p,l,u){const i=c("FSImage"),n=c("FSAutocompleteField");return f(),v(n,w({itemTitle:"name",toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(f(),v(i,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):I("",!0)]),"toggle-set-item":s(t=>[h(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:x(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[h(i,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=N(y,[["render",j]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ft={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:r})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:T},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,b,S;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const vt=["Variations"];export{a as Variations,vt as __namedExportsOrder,ft as default};
