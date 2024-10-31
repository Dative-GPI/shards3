import{d as w,c as y,w as N,y as T,z as D,A as k,B as E,O as M,C as i,m as R,K as G,L as H,M as P,N as n,H as S,I as O}from"./vue.esm-bundler-l-siv0w9.js";import{_ as j}from"./lodash-BiW_TGGX.js";import{F as V}from"./FSDataTable-DlhWpqTH.js";import{F as z}from"./FSTagGroup-BU9jkaBL.js";import{F as b}from"./FSIcon-uIr9VdFq.js";import{_ as v}from"./FSRow-CbEgVN08.js";import{A as r}from"./applications-pqrfQrBX.js";import{u as K}from"./useAppOrganisationId-Cv6r7Qq7.js";import{u as U}from"./useScenarioOrganisations-D_7efB59.js";import{u as J}from"./useScenarioOrganisationTypes-B77WMsSf.js";import{A as C,C as Q}from"./alertsTools-DdtBZcbn.js";import{C as W}from"./useColors-Bs2u1_6J.js";import{g as X}from"./enumTools-BEsapygt.js";import{u as Y}from"./useTranslations-CJK8D24x.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./FSSpan-Di50moR2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSDataTableUI-ClNajw9g.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./FSClickable-DbvAho3u.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSSelectField-D65DWRuU.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSTag-ErOwxBbY.js";import"./scenarioChart-DT-qM5Ky.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const ee=()=>{const{organisationId:a}=K();return{$r:t=>(t.params?t.params.organisationId=a.value:t.params={organisationId:a.value},t)}},A=w({name:"FSBaseScenariosList",components:{FSDataTable:V,FSTagGroup:z,FSIcon:b,FSRow:v},props:{tableCode:{type:String,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},scenarioOrganisationFilters:{type:Object,required:!1,default:null},scenarioOrganisationTypeFilters:{type:Object,required:!1,default:null},showAssociation:{type:Boolean,required:!1,default:!0},scope:{type:Number,required:!1,default:r.None}},emits:["update:modelValue"],setup(a){const{$tr:s}=Y(),{entities:t,fetching:F,getMany:u}=U(),{entities:l,fetching:g,getMany:m}=J(),{$r:o}=ee(),p=y(()=>{if(a.showAssociation)return[{columnId:"association",text:s("ui.common.association",""),value:"association",sortable:!1,filterable:!1,index:-1,hidden:!1}]}),f=y(()=>({criticity:{fixedFilters:X(Q).map(e=>({value:e.value,text:C.criticityLabel(e.value)})),methodFilter:(e,d)=>e==d}})),q=y(()=>a.scope==r.Organisation?t.value:a.scope==r.OrganisationType?l.value:t.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})).concat(l.value.map(e=>({id:e.id,modelId:e.modelId,dataCategoryId:e.dataCategoryId,dataCategoryLabel:e.dataCategoryLabel,scenarioId:e.scenarioId,scope:e.scope,label:e.label,modelLabel:e.modelLabel,code:e.code,icon:e.icon,tags:e.tags,criticity:e.criticity,parameters:e.parameters})))),B=e=>e.scope==r.OrganisationType?o({name:"scenario-organisation-type",params:{entityId:e.id}}):o({name:"scenario-organisation",params:{entityId:e.id}}),_=()=>{a.scope==r.OrganisationType?m(a.scenarioOrganisationTypeFilters):a.scope==r.Organisation?u(a.scenarioOrganisationFilters):(u(a.scenarioOrganisationFilters),m(a.scenarioOrganisationTypeFilters))};return N(()=>[a.scenarioOrganisationFilters,a.scenarioOrganisationTypeFilters,a.scope],(e,d)=>{(!e&&!d||!j.isEqual(e,d))&&_()},{immediate:!0}),{fetchingScenarioOrganisationTypes:g,fetchingScenarioOrganisations:F,scenarioOrganisationTypes:l,scenarioOrganisations:t,headerAssociation:p,ApplicationScope:r,headersOptions:f,AlertTools:C,ColorEnum:W,scenarios:q,routerLink:B}}});function ae(a,s,t,F,u,l){const g=T("FSTagGroup"),m=T("FSDataTable");return D(),k(m,R({loading:a.fetchingScenarioOrganisationTypes||a.fetchingScenarioOrganisations,headersOptions:a.headersOptions,extraHeaders:a.headerAssociation,items:a.scenarios,itemTo:a.routerLink,modelValue:a.$props.modelValue,tableCode:a.$props.tableCode,"onUpdate:modelValue":s[0]||(s[0]=o=>a.$emit("update:modelValue",o))},a.$attrs),E({"item.icon":i(({item:o})=>[n(b,null,{default:i(()=>[S(O(o.icon),1)]),_:2},1024)]),"item.criticity":i(({item:o})=>[n(v,{align:"center-left"},{default:i(()=>[n(b,{color:a.AlertTools.criticityColor(o.criticity)},{default:i(()=>[S(O(a.AlertTools.criticityIcon(o.criticity)),1)]),_:2},1032,["color"]),n(x,null,{default:i(()=>[S(O(a.AlertTools.criticityLabel(o.criticity)),1)]),_:2},1024)]),_:2},1024)]),"item.tags":i(({item:o})=>[n(g,{variant:"slide",editable:!1,tags:o.tags},null,8,["tags"])]),_:2},[M(a.$slots,(o,p)=>({name:p,fn:i(f=>[G(a.$slots,p,H(P(f)))])}))]),1040,["loading","headersOptions","extraHeaders","items","itemTo","modelValue","tableCode"])}const $=Z(A,[["render",ae]]);A.__docgenInfo={displayName:"FSBaseScenariosList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"scenarioOrganisationFilters",type:{name:"ScenarioOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"scenarioOrganisationTypeFilters",type:{name:"ScenarioOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"showAssociation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"scope",type:{name:"ApplicationScope"},required:!1,defaultValue:{func:!1,value:"ApplicationScope.None"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/scenarios/FSBaseScenariosList.vue"]};const Ha={title:"Foundation/Core/Lists/Base Lists/BaseScenariosList",component:$,subcomponents:{FSDataTable:V},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["scenarioOrganisations1"]}}},c={render:a=>({components:{FSBaseScenariosList:$},setup(){return{args:a}},template:`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    `}),args:{tableCode:"scenarioOrganisations1",modelValue:[]}};var h,L,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseScenariosList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    \`
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: []
  }
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Pa=["Default"];export{c as Default,Pa as __namedExportsOrder,Ha as default};
