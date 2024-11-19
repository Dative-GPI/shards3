import{d as w,c as s,y as g,z as c,A as f,C as m,m as I,F as $,N as b,B as k,D as q}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as x}from"./FSAutocompleteField-rpC1iu27.js";import{F as S}from"./FSButton-44O228oj.js";import{F as D}from"./FSImage-lrCPZ-ea.js";import{u as _}from"./useModels-BM06bOMq.js";import{u as B}from"./useAutocomplete-XOgYaWXJ.js";import{u as N}from"./useTranslations-DgvmBCqU.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSCol-D8gLxM2E.js";import"./FSSearchField-Bx6G4eFd.js";import"./FSTextField-B9Yl6IUE.js";import"./FSBaseField-CPhXHC60.js";import"./FSSpan-Bh1X02mE.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./color-DdAXPAA0.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./VIcon-zho7mIKV.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./VList-Ms7LY5Qs.js";import"./FSCard-CxH8ejsx.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-bnXYYW-T.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D7F-G6Uh.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-Chnxajrx.js";import"./FSWrapGroup-mhpasbJF.js";import"./FSCheckbox-oOjjSOAG.js";import"./FSIcon-dnXFGGQr.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-ClVU4caD.js";import"./FSLoader-Bw_zeuUP.js";import"./FSRadio-CBwjt_Sc.js";import"./VSelect-BLps1uzN.js";import"./VMenu-CkU-g4Hp.js";import"./filter-MqAtiUjL.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-Dz5j9aqP.js";import"./FSImageUI-pQoOi5zt.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";const y=w({name:"FSAutocompleteModel",components:{FSAutocompleteField:x,FSButton:S,FSImage:D},props:{modelFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const{getMany:n,fetching:d,entities:r}=_(),{$tr:p}=N(),o=s(()=>A.value&&d.value),i=s(()=>e.multiple&&e.modelValue?p("autocomplete.model.placeholder","{0} model(s) selected",e.modelValue.length):null),t=C=>n({...e.modelFilters,search:C??void 0}),{toggleSet:u,init:A,onUpdate:V}=B(r,[()=>e.modelFilters],l,t);return{placeholder:i,toggleSet:u,loading:o,models:r,onUpdate:V}}});function U(e,l,n,d,r,p){const o=g("FSImage"),i=g("FSAutocompleteField");return c(),f(i,I({label:e.$props.label??e.$tr("autocomplete.model.label","Model"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":m(({item:t})=>[t.imageId?(c(),f(o,{key:0,height:"26px",width:"26px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):$("",!0)]),"toggle-set-item":m(t=>[b(S,{padding:t.item.imageId?["6px 16px","4px 12px"]:void 0,variant:t.getVariant(t.item),color:t.getColor(t.item),class:q(t.getClass(t.item)),label:t.item.label,onClick:u=>t.toggle(t.item)},k({_:2},[t.item.imageId?{name:"prepend",fn:m(()=>[b(o,{height:"26px",width:"26px",imageId:t.item.imageId,thumbnail:!0},null,8,["imageId"])]),key:"0"}:void 0]),1032,["padding","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const M=O(y,[["render",U]]);y.__docgenInfo={displayName:"FSAutocompleteModel",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteModel.vue"]};const gt={title:"Foundation/Core/Autocompletes/AutocompleteModel",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:l})=>({components:{FSAutocompleteModel:M,FSCol:T},props:Object.keys(l),setup(){return{...e}},template:`
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
    </FSCol>`})};var v,h,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const ct=["Variations"];export{a as Variations,ct as __namedExportsOrder,gt as default};
