import{d as I,c as $,w as q,y as m,z as S,A as T,B as w,O as A,C as i,m as D,K as N,L as k,M as E,N as a,H as p,I as l,F as P}from"./vue.esm-bundler-l-siv0w9.js";import{_ as R}from"./lodash-BiW_TGGX.js";import{F as C}from"./FSDataTable-DlhWpqTH.js";import{F as u}from"./FSIcon-uIr9VdFq.js";import{F as G}from"./FSImage-ffhN4Yyt.js";import{F as M}from"./FSTagGroup-BU9jkaBL.js";import{_}from"./FSRow-CbEgVN08.js";import{u as z}from"./useScenarioOrganisationTypes-B77WMsSf.js";import{A as F,C as j}from"./alertsTools-DdtBZcbn.js";import{g as H}from"./enumTools-BEsapygt.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSSpan-Di50moR2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-ClNajw9g.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./FSClickable-DbvAho3u.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-D65DWRuU.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTag-ErOwxBbY.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";const h=I({name:"FSBaseScenarioOrganisationTypesList",components:{FSDataTable:C,FSTagGroup:M,FSImage:G,FSIcon:u,FSRow:_},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:d,getMany:c}=z(),g=$(()=>({criticity:{fixedFilters:H(j).map(o=>({value:o.value,text:F.criticityLabel(o.value)})),methodFilter:(o,r)=>o==r}})),f=o=>e.modelValue.includes(o);return q(()=>e.scenarioOrganisationTypeFilters,(o,r)=>{(!o&&!r||!R.isEqual(o,r))&&c(e.scenarioOrganisationTypeFilters)},{immediate:!0}),{fetchingScenarioOrganisationTypes:d,scenarioOrganisationTypes:n,headersOptions:g,AlertTools:F,isSelected:f}}});function J(e,n,d,c,g,f){const o=m("FSImage"),r=m("FSTagGroup"),v=m("FSDataTable");return S(),T(v,D({items:e.scenarioOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisationTypes,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),w({"item.icon":i(({item:t})=>[a(u,null,{default:i(()=>[p(l(t.icon),1)]),_:2},1024)]),"item.criticity":i(({item:t})=>[a(_,{align:"center-left"},{default:i(()=>[a(u,{color:e.AlertTools.criticityColor(t.criticity)},{default:i(()=>[p(l(e.AlertTools.criticityIcon(t.criticity)),1)]),_:2},1032,["color"]),a(U,null,{default:i(()=>[p(l(e.AlertTools.criticityLabel(t.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.imageId":i(({item:t})=>[t.imageId?(S(),T(o,{key:0,height:"32px",width:"32px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):P("",!0)]),"item.tags":i(({item:t})=>[a(r,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),_:2},[A(e.$slots,(t,y)=>({name:y,fn:i(B=>[N(e.$slots,y,k(E(B)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const L=K(h,[["render",J]]);h.__docgenInfo={displayName:"FSBaseScenarioOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisationTypes/FSBaseScenarioOrganisationTypesList.vue"]};const kt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationTypesList",component:L,subcomponents:{FSDataTable:C},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisationTypes1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationTypesList:L},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisationTypes1",modelValue:[]}};var O,b,V;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenarioOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisationTypes1',
    modelValue: []
  }
}`,...(V=(b=s.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const Et=["Default"];export{s as Default,Et as __namedExportsOrder,kt as default};
