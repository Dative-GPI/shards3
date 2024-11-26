import{d as V,c as n,A as w,B as m,C as s,E as d,j as C,J as $,K as q,H as k}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as D}from"./FSAutocompleteField-DRDv3EYx.js";import{F as b}from"./FSIcon-CKEWDmaC.js";import{u as _}from"./useGroups-CVMjUFmb.js";import{u as B}from"./useAutocomplete-DDmNThuF.js";import{u as T}from"./useTranslations-DN7QCs30.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DLyNVOXQ.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DJbHulE4.js";const v=V({name:"FSAutocompleteGroup",components:{FSAutocompleteField:D,FSIcon:b},props:{groupFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:a,fetching:i,entities:r}=_(),{$tr:u}=T(),p=n(()=>y.value&&i.value),o=n(()=>e.multiple&&e.modelValue?u("autocomplete.group.placeholder","{0} group(s) selected",e.modelValue.length):null),F=A=>a({...e.groupFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:G}=B(r,[()=>e.groupFilters],t,F);return{placeholder:o,toggleSet:h,loading:p,groups:r,onUpdate:G}}});function O(e,t,a,i,r,u){const p=w("FSAutocompleteField");return m(),s(p,C({label:e.$props.label??e.$tr("ui.common.group","Group"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:o})=>[o.icon?(m(),s(b,{key:0},{default:d(()=>[$(q(o.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const S=j(v,[["render",O]]);v.__docgenInfo={displayName:"FSAutocompleteGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteGroup.vue"]};const it={title:"Foundation/Core/Autocompletes/AutocompleteGroup",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteGroup:S,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,c,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      FSAutocompleteGroup,
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
      <FSAutocompleteGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteGroup
        label="Group with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const ut=["Variations"];export{l as Variations,ut as __namedExportsOrder,it as default};
