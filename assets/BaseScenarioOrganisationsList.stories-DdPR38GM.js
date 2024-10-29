import{d as _,c as v,w as B,y as S,z as $,A as q,B as w,O as A,C as r,m as D,K as I,L as N,M as E,N as a,H as m,I as l}from"./vue.esm-bundler-l-siv0w9.js";import{_ as P}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-BVUgtWuH.js";import{F as p}from"./FSIcon-uIr9VdFq.js";import{F as R}from"./FSTagGroup-B8vm8ffE.js";import{_ as C}from"./FSRow-CbEgVN08.js";import{u as k}from"./useScenarioOrganisations-D_7efB59.js";import{A as O,C as G}from"./alertsTools-DdtBZcbn.js";import{g as M}from"./enumTools-BEsapygt.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSSpan-Di50moR2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-DzCwNAwg.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-DcUuAZqz.js";import"./FSClickable-Up0p3Vk8.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DpVu8WDf.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-CELx6cWV.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSTag-ErOwxBbY.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";const T=_({name:"FSBaseScenarioOrganisationsList",components:{FSDataTable:V,FSTagGroup:R,FSIcon:p,FSRow:C},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:u,getMany:d}=k(),c=v(()=>({criticity:{fixedFilters:M(G).map(t=>({value:t.value,text:O.criticityLabel(t.value)})),methodFilter:(t,i)=>t==i}})),f=t=>e.modelValue.includes(t);return B(()=>e.scenarioOrganisationFilters,(t,i)=>{(!t&&!i||!P.isEqual(t,i))&&d(e.scenarioOrganisationFilters)},{immediate:!0}),{fetchingScenarioOrganisations:u,scenarioOrganisations:n,headersOptions:c,AlertTools:O,isSelected:f}}});function H(e,n,u,d,c,f){const t=S("FSTagGroup"),i=S("FSDataTable");return $(),q(i,D({items:e.scenarioOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,headersOptions:e.headersOptions,"onUpdate:modelValue":n[0]||(n[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),w({"item.icon":r(({item:o})=>[a(p,null,{default:r(()=>[m(l(o.icon),1)]),_:2},1024)]),"item.criticity":r(({item:o})=>[a(C,{align:"center-left"},{default:r(()=>[a(p,{color:e.AlertTools.criticityColor(o.criticity)},{default:r(()=>[m(l(e.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),a(j,null,{default:r(()=>[m(l(e.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":r(({item:o})=>[a(t,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[A(e.$slots,(o,g)=>({name:g,fn:r(h=>[I(e.$slots,g,N(E(h)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue","headersOptions"])}const L=z(T,[["render",H]]);T.__docgenInfo={displayName:"FSBaseScenarioOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue"]};const vt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList",component:L,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationsList:L},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var F,y,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenarioOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: []
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Bt=["Default"];export{s as Default,Bt as __namedExportsOrder,vt as default};
