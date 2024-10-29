import{d as $,c as q,w,y as m,z as S,A as T,B as A,O as N,C as i,m as D,K as k,L as E,M as P,N as a,H as p,I as l,F as R}from"./vue.esm-bundler-l-siv0w9.js";import{_ as G}from"./lodash-BiW_TGGX.js";import{F as _}from"./FSDataTable-CAxGj616.js";import{F as u}from"./FSIcon-uIr9VdFq.js";import{F as M}from"./FSImage-ffhN4Yyt.js";import{F as z}from"./FSTagGroup-B8vm8ffE.js";import{_ as h}from"./FSRow-CbEgVN08.js";import{u as j}from"./useScenarioOrganisationTypes-B77WMsSf.js";import{A as F,C as O}from"./alertsTools-BVSrupj-.js";import{g as H}from"./enumTools-BEsapygt.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./FSSpan-Di50moR2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-C85fS7uo.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-C1NE5kA-.js";import"./FSTextField-CaG6gJzS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-DcUuAZqz.js";import"./FSClickable-Up0p3Vk8.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-fg5c3EuB.js";import"./VList-ByZS85Zy.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-CBieAKh7.js";import"./FSButtonNextIcon-B9vgItlM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-B0bG_RDz.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-PvBRpE5x.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-fC8L6A7v.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTag-ErOwxBbY.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";const L=$({name:"FSBaseScenarioOrganisationTypesList",components:{FSDataTable:_,FSTagGroup:z,FSImage:M,FSIcon:u,FSRow:h},props:{tableCode:{type:String,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:d,getMany:c}=j(),g=q(()=>({criticity:{fixedFilters:H(O).filter(t=>t.value!=O.None).map(t=>({value:t.value,text:F.criticityLabel(t.value)})),methodFilter:(t,r)=>t==r}})),f=t=>e.modelValue.includes(t);return w(()=>e.scenarioOrganisationTypeFilters,(t,r)=>{(!t&&!r||!G.isEqual(t,r))&&c(e.scenarioOrganisationTypeFilters)},{immediate:!0}),{fetchingScenarioOrganisationTypes:d,scenarioOrganisationTypes:n,headersOptions:g,AlertTools:F,isSelected:f}}});function J(e,n,d,c,g,f){const t=m("FSImage"),r=m("FSTagGroup"),B=m("FSDataTable");return S(),T(B,D({items:e.scenarioOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingScenarioOrganisationTypes,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),A({"item.icon":i(({item:o})=>[a(u,null,{default:i(()=>[p(l(o.icon),1)]),_:2},1024)]),"item.criticity":i(({item:o})=>[a(h,{align:"center-left"},{default:i(()=>[a(u,{color:e.AlertTools.criticityColor(o.criticity)},{default:i(()=>[p(l(e.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),a(U,null,{default:i(()=>[p(l(e.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.imageId":i(({item:o})=>[o.imageId?(S(),T(t,{key:0,height:"32px",width:"32px",imageId:o.imageId,thumbnail:!0},null,8,["imageId"])):R("",!0)]),"item.tags":i(({item:o})=>[a(r,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[N(e.$slots,(o,y)=>({name:y,fn:i(I=>[k(e.$slots,y,E(P(I)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const v=K(L,[["render",J]]);L.__docgenInfo={displayName:"FSBaseScenarioOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ScenarioOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarioOrganisationTypes/FSBaseScenarioOrganisationTypesList.vue"]};const Nt={title:"Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationTypesList",component:v,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisationTypes1"]}}},s={render:e=>({components:{FSBaseScenarioOrganisationTypesList:v},setup(){return{args:e}},template:`
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"scenarioOrganisationTypes1",modelValue:[]}};var b,V,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(V=s.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const Dt=["Default"];export{s as Default,Dt as __namedExportsOrder,Nt as default};
