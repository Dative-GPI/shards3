import{d as q,c as w,w as D,y as p,z as F,A as C,B as E,O as N,C as r,m as k,K as P,L as R,M as U,N as i,H as g,I as b,F as G}from"./vue.esm-bundler-l-siv0w9.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSChartTileUI-Dm0d1h2K.js";import{F as A}from"./FSTagGroup-BU9jkaBL.js";import{F as j}from"./FSImage-CcZagSLS.js";import{F as d}from"./FSIcon-uIr9VdFq.js";import{_ as V}from"./FSRow-CbEgVN08.js";import{F as _}from"./FSDataTable-CxmnEmUX.js";import{e as O,c as H,C as K}from"./chartsTools-BH_Hj3cC.js";import{u as x}from"./useChartOrganisationTypes-DrDpnhub.js";import{C as J}from"./useColors-Bs2u1_6J.js";import{g as Q}from"./enumTools-BEsapygt.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-D5AdGt7U.js";import"./FSClickable-DbvAho3u.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSCard-DL4SLpmS.js";import"./FSCol-BvqytbKT.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./display-BWzbFTnS.js";import"./FSTag-ErOwxBbY.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./FSButton-v1WOpc1k.js";import"./FSImageUI-DrOfkU7V.js";import"./FSLoader-kY4Od3NB.js";import"./VImg-CZhZqiQJ.js";import"./index-C6OXlV61.js";import"./imageDetails-D_m1_Geu.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-03a1Iisa.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSDataTableUI-CvfuQA3H.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-BS0bweoG.js";import"./VList-ByZS85Zy.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-kPgNBBHc.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const v=q({name:"FSBaseChartOrganisationTypesList",components:{FSChartTileUI:z,FSDataTable:_,FSTagGroup:A,FSImage:j,FSIcon:d,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{entities:n,fetching:f,getMany:h}=x(),y=w(()=>({modelsLabels:{fixedFilters:n.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const s of o)e.map(c=>c.id).includes(s.id)||e.push(s);return e},[]).map(e=>({value:e.id,text:e.label})).concat({value:"",text:"--"}),methodFilter:(e,o)=>o.length==0&&e==""||o.length>0&&o.some(s=>s.id==e)},chartType:{fixedFilters:Q(K).map(e=>({value:e.value,text:O(e.value)})),methodFilter:(e,o)=>e==o}})),T=e=>t.modelValue.includes(e),u=()=>{h(t.chartOrganisationTypeFilters)};return D(()=>[t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!M.isEqual(e,o))&&u()},{immediate:!0}),{fetchingChartOrganisationTypes:f,chartOrganisationTypes:n,headersOptions:y,ColorEnum:J,chartTypeLabel:O,isSelected:T,chartIcon:H}}});function X(t,n,f,h,y,T){const u=p("FSImage"),e=p("FSTagGroup"),o=p("FSText"),s=p("FSChartTileUI"),c=p("FSDataTable");return F(),C(c,k({items:t.chartOrganisationTypes,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisationTypes,headersOptions:t.headersOptions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.$emit("update:modelValue",a))},t.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(b(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(F(),C(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:a})=>[i(e,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),i(o,null,{default:r(()=>[g(b(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[i(e,{editable:!1,tags:a.modelsLabels.map(m=>m.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(s,{variant:"standard",label:a.label,"category-label":a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.ColorEnum.Light,to:t.$props.itemTo&&t.$props.itemTo(a)},null,8,["label","category-label","icon","imageId","type","color","to"])]),_:2},[N(t.$slots,(a,m)=>({name:m,fn:r(B=>[P(t.$slots,m,R(U(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=W(v,[["render",X]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue"]};const Mt={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisationTypes1"]}}},l={render:t=>({components:{FSBaseChartOrganisationTypesList:$},setup(){return{args:t}},template:`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisationTypes1"}};var S,I,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'chartOrganisationTypes1'
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const zt=["Default"];export{l as Default,zt as __namedExportsOrder,Mt as default};
