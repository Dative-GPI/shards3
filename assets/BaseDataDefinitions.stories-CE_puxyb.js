import{d as L,w as _,y as p,z as k,A as q,B as v,O as w,C as i,m as c,K as E,L as N,M as P,N as e,H as T,I}from"./vue.esm-bundler-l-siv0w9.js";import{_ as O}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-NEIKpHRV.js";import{_ as b}from"./FSRow-CbEgVN08.js";import{_ as g}from"./FSSpan-Di50moR2.js";import{F as l}from"./FSIcon-uIr9VdFq.js";import{F as R}from"./FSClickable-DbvAho3u.js";import{F as z}from"./FSButtonCheckbox-63Sn0rib.js";import{u as A}from"./useDataDefinitions-CvoBQWKy.js";import{C as M}from"./useColors-Bs2u1_6J.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-2hbFDgiM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-sS-c5UQ-.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-BS0bweoG.js";import"./VList-ByZS85Zy.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-kPgNBBHc.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./index-DfSX31J9.js";const V=L({name:"FSBaseDataDefinitionsList",components:{FSButtonCheckbox:z,FSDataTable:S,FSClickable:R,FSSpan:g,FSIcon:l,FSRow:b},props:{tableCode:{type:String,required:!1,default:null},dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{getMany:r,fetching:d,entities:u}=A(),f=a=>t.modelValue.includes(a);return _(()=>t.dataDefinitionFilters,(a,n)=>{(!a&&!n||!O.isEqual(a,n))&&r(t.dataDefinitionFilters)},{immediate:!0}),{fetchingDataDefinitions:d,dataDefinitions:u,ColorEnum:M,isSelected:f}}});function K(t,r,d,u,f,a){const n=p("FSButtonCheckbox"),y=p("FSClickable"),B=p("FSDataTable");return k(),q(B,c({loading:t.fetchingDataDefinitions,items:t.dataDefinitions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>t.$emit("update:modelValue",o))},t.$attrs),v({toolbar:i(()=>[e(n,{label:t.$tr("ui.common.data-correlated","Correlated only"),color:t.ColorEnum.Success},null,8,["label","color"])]),"item.tile":i(({item:o})=>[e(y,c({padding:"12px",height:"60px",width:"233px",color:t.isSelected(o.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:s=>t.$emit("update:modelValue",[o.id])},t.$attrs),{default:i(()=>[e(b,{align:"center-center"},{default:i(()=>[e(l,{icon:"mdi-thermometer"}),e(g,{lineClamp:1},{default:i(()=>[T(I(o.label),1)]),_:2},1024),e(H),e(l,{color:t.ColorEnum.Primary,icon:"mdi-link"},null,8,["color"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[w(t.$slots,(o,s)=>({name:s,fn:i($=>[E(t.$slots,s,N(P($)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=j(V,[["render",K]]);V.__docgenInfo={displayName:"FSBaseDataDefinitionsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue"]};const ye={title:"Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList",component:h,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataDefinitions1"]}}},m={render:t=>({components:{FSBaseDataDefinitionsList:h},setup(){return{args:t}},template:`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataDefinitions1"}};var D,C,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDataDefinitionsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dataDefinitions1'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Be=["Default"];export{m as Default,Be as __namedExportsOrder,ye as default};
