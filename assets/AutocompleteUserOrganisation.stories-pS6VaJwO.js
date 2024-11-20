import{d as C,c as g,A as c,B as f,C as b,E as s,j as w,H as I,P as v,D as $,F as k}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as q}from"./FSAutocompleteField-DtSxL_DS.js";import{F as O}from"./FSButton-BoIGeCYX.js";import{F as x}from"./FSImage-BP-XnLOC.js";import{a as D}from"./useUserOrganisations-BxH-tq_V.js";import{u as _}from"./useAutocomplete-GfHaV0Sy.js";import{u as B}from"./useTranslations-DN7QCs30.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as j}from"./FSCol-DLyNVOXQ.js";import"./FSSearchField-B8DisBza.js";import"./FSTextField-CrTD4dZ4.js";import"./FSBaseField-D6coCLKM.js";import"./FSSpan-Bb6VK1Ws.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useColors-ix1ChreS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./color-mm3JSYKM.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./VIcon-DsLd3bsf.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./VList-XQT_dn4P.js";import"./FSCard-Bzfi7uVq.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-DU-bqEGV.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DjZD8NlX.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-fGAubtCV.js";import"./FSWrapGroup-BqZeUad0.js";import"./FSCheckbox-CjWE83-y.js";import"./FSIcon-CgyPNi2H.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-Bg0MxJuT.js";import"./FSLoader-_xEserk_.js";import"./FSRadio-Bi0gm8Uf.js";import"./VSelect-Dm4vxNUu.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-BAZBeMCh.js";import"./FSImageUI-DoJ4g_Bl.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./permissionInfos-BPDgTHQl.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";const y=C({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:q,FSButton:O,FSImage:x},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:m,fetching:p,entities:i}=D(),{$tr:u}=B(),r=g(()=>A.value&&p.value),n=g(()=>e.multiple&&e.modelValue?u("autocomplete.user.placeholder","{0} user(s) selected",e.modelValue.length):null),t=o=>m({...e.userOrganisationFilters,search:o??void 0}),{toggleSet:d,init:A,onUpdate:V}=_(i,[()=>e.userOrganisationFilters],l,t,null,o=>o.id,o=>o.name);return{userOrganisations:i,placeholder:n,toggleSet:d,loading:r,onUpdate:V}}});function N(e,l,m,p,i,u){const r=c("FSImage"),n=c("FSAutocompleteField");return f(),b(n,w({itemTitle:"name",label:e.$props.label??e.$tr("autocomplete.user.label","User"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.userOrganisations,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":s(({item:t})=>[t.imageId?(f(),b(r,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):I("",!0)]),"toggle-set-item":s(t=>[v(O,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:k(t.getClass(t.item)),label:t.item.name,onClick:d=>t.toggle(t.item)},$({_:2},[t.item.imageId?{name:"prepend",fn:s(()=>[v(r,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const U=T(y,[["render",N]]);y.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const ct={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteUserOrganisation:U,FSCol:j},props:Object.keys(l),setup(){return{...e}},template:`
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
